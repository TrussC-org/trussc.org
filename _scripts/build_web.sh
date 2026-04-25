#!/bin/bash
# WASMビルド→R2アップロード
# 使い方: ./build_web.sh [sample1] [sample2] ... [--all]

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/common.sh"

# Path to trusscli (macOS)
TRUSSC_REPO_DIR="$SCRIPT_DIR/../../TrussC"
TRUSSCLI_BIN="$TRUSSC_REPO_DIR/tools/bin/trusscli.app/Contents/MacOS/trusscli"

if [ ! -f "$TRUSSCLI_BIN" ]; then
    log_error "trusscli not found at: $TRUSSCLI_BIN"
    log_error "Please build trusscli first: ./tools/build_mac.command"
    exit 1
fi

# examples.json path
EXAMPLES_JSON="$SCRIPT_DIR/../examples/examples.json"

# Get sample info from examples.json
# Args:
#   $1 sample basename
#   $2 (optional) addon hint to disambiguate duplicate names
# Returns: type|group (e.g., "examples|graphics" or "addons|tcxBox2d")
get_sample_info() {
    local name="$1"
    local addon_hint="${2:-}"
    if [[ ! -f "$EXAMPLES_JSON" ]]; then
        echo ""
        return
    fi

    if [[ -n "$addon_hint" ]]; then
        local result=$(jq -r --arg name "$name" --arg addon "$addon_hint" '
            .addons | to_entries[] |
            select(.key == $addon) |
            select(.value.items[]? | .name == $name) |
            "addons|" + .key
        ' "$EXAMPLES_JSON" | head -1)
        echo "$result"
        return
    fi

    # Search in examples
    local result=$(jq -r --arg name "$name" '
        .examples | to_entries[] |
        select(.value.items[]? | .name == $name) |
        "examples|" + .key
    ' "$EXAMPLES_JSON" | head -1)

    if [[ -n "$result" ]]; then
        echo "$result"
        return
    fi

    # Search in addons
    result=$(jq -r --arg name "$name" '
        .addons | to_entries[] |
        select(.value.items[]? | .name == $name) |
        "addons|" + .key
    ' "$EXAMPLES_JSON" | head -1)

    echo "$result"
}

if [[ $# -eq 0 ]]; then
    echo "使い方: $0 [sample1] [sample2] ... [--all]"
    echo "例: $0 graphicsExample colorExample"
    echo "例: $0 --all"
    exit 1
fi

samples=($(parse_samples "$@"))

if [[ ${#samples[@]} -eq 0 ]]; then
    log_error "サンプルが指定されていません"
    exit 1
fi

log_info "WASMビルド対象: ${samples[*]}"

success_count=0
fail_count=0

for sample_input in "${samples[@]}"; do
    sample=$(sample_basename "$sample_input")
    addon_hint=$(sample_addon_hint "$sample_input")

    # Get sample type and group from examples.json
    sample_info=$(get_sample_info "$sample" "$addon_hint")
    if [[ -z "$sample_info" ]]; then
        log_warn "$sample_input: examples.jsonに登録されていません（スキップ）"
        continue
    fi

    sample_type="${sample_info%%|*}"
    sample_group="${sample_info##*|}"

    # Skip when webSupported is explicitly false in examples.json
    if [[ -n "$addon_hint" ]]; then
        web_supported=$(jq -r --arg name "$sample" --arg addon "$addon_hint" '
            .addons | to_entries[] |
            select(.key == $addon) | .value.items[]? |
            select(.name == $name) | .webSupported
        ' "$EXAMPLES_JSON" | head -1)
    else
        web_supported=$(jq -r --arg name "$sample" '
            (.examples[]?.items[]?, .addons[]?.items[]?) |
            select(.name == $name) | .webSupported
        ' "$EXAMPLES_JSON" | head -1)
    fi
    if [[ "$web_supported" == "false" ]]; then
        log_warn "$sample_input: webSupported=false のためスキップ"
        continue
    fi

    sample_dir=$(resolve_sample_dir "$sample_input")

    if [[ -z "$sample_dir" ]]; then
        log_error "$sample: ディレクトリが見つかりません"
        ((fail_count++))
        continue
    fi

    log_info "$sample: プロジェクト更新 (Web)..."
    if ! "$TRUSSCLI_BIN" update -p "$sample_dir" --web --tc-root "$TRUSSC_REPO_DIR"; then
        log_error "$sample: プロジェクト更新失敗"
        ((fail_count++))
        continue
    fi

    log_info "$sample: WASMビルド開始... ($sample_type/$sample_group)"

    cd "$sample_dir"
    
    # Clean build
    rm -rf build-web

    # Run generated build script
    if ./build-web.command; then
        log_success "$sample: WASMビルド完了"

        # R2にアップロード (wasm/{type}/{group}/{name}.{ext})
        bin_dir="$sample_dir/bin"
        r2_base="wasm/$sample_type/$sample_group"
        log_info "$sample: R2にアップロード中 ($r2_base)..."

        upload_success=true
        for ext in html js wasm data; do
            file="$bin_dir/${sample}.${ext}"
            if [[ -f "$file" ]]; then
                if ! wrangler r2 object put "$WASM_BUCKET/$r2_base/${sample}.${ext}" --file "$file" --remote >/dev/null 2>&1; then
                    log_error "$sample: ${sample}.${ext} のアップロード失敗"
                    upload_success=false
                fi
            fi
        done

        if $upload_success; then
            log_success "$sample: アップロード完了"
            ((success_count++))
        else
            ((fail_count++))
        fi
    else
        log_error "$sample: WASMビルド失敗"
        ((fail_count++))
    fi
done

echo ""
log_info "完了: 成功 $success_count, 失敗 $fail_count"

#!/bin/bash
# スクショ撮影→サムネイル生成→R2アップロード
# 使い方: ./screenshot.sh [sample1] [sample2] ... [--all]
# 注意: ネイティブビルド済みである必要がある

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/common.sh"

# examples.json path
EXAMPLES_JSON="$SCRIPT_DIR/../examples/examples.json"

# Get sample info from examples.json
# Args:
#   $1 sample basename (e.g. "example-basic")
#   $2 (optional) addon hint to disambiguate when name is duplicated
# Returns: type|group (e.g., "examples|graphics" or "addons|tcxBox2d")
get_sample_info() {
    local name="$1"
    local addon_hint="${2:-}"
    if [[ ! -f "$EXAMPLES_JSON" ]]; then
        echo ""
        return
    fi

    # Addon-disambiguated lookup
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

# Check if auto screenshot is enabled for a sample
# Args:
#   $1 sample basename
#   $2 (optional) addon hint
is_auto_screenshot_enabled() {
    local name="$1"
    local addon_hint="${2:-}"
    if [[ ! -f "$EXAMPLES_JSON" ]]; then
        return 0
    fi

    if [[ -n "$addon_hint" ]]; then
        local val=$(jq -r --arg name "$name" --arg addon "$addon_hint" '
            .addons | to_entries[] |
            select(.key == $addon) | .value.items[]? |
            select(.name == $name) | .autoScreenshot
        ' "$EXAMPLES_JSON" | head -1)
        if [[ "$val" == "false" ]]; then
            return 1
        fi
        return 0
    fi

    # Check in examples
    local val=$(jq -r --arg name "$name" '
        .examples[]?.items[]? | select(.name == $name) | .autoScreenshot
    ' "$EXAMPLES_JSON" | head -1)

    if [[ "$val" == "false" ]]; then
        return 1
    fi

    # Check in addons
    val=$(jq -r --arg name "$name" '
        .addons[]?.items[]? | select(.name == $name) | .autoScreenshot
    ' "$EXAMPLES_JSON" | head -1)

    if [[ "$val" == "false" ]]; then
        return 1
    fi

    return 0
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

# サムネイルディレクトリ
mkdir -p "$SAMPLES_DIR/thumbs"

log_info "スクショ対象: ${samples[*]}"

success_count=0
fail_count=0

for sample_input in "${samples[@]}"; do
    # Allow "addon/name" form to disambiguate duplicate sample names
    sample=$(sample_basename "$sample_input")
    addon_hint=$(sample_addon_hint "$sample_input")

    # Check if auto screenshot is disabled in examples.json
    if ! is_auto_screenshot_enabled "$sample" "$addon_hint"; then
        log_warn "$sample_input: 自動スクショ無効（autoScreenshot: false）"
        continue
    fi

    # Get sample type and group from examples.json
    sample_info=$(get_sample_info "$sample" "$addon_hint")
    if [[ -z "$sample_info" ]]; then
        log_warn "$sample_input: examples.jsonに登録されていません"
        ((fail_count++))
        continue
    fi

    sample_type="${sample_info%%|*}"
    sample_group="${sample_info##*|}"

    sample_dir=$(resolve_sample_dir "$sample_input")

    if [[ -z "$sample_dir" ]]; then
        log_error "$sample: ディレクトリが見つかりません"
        ((fail_count++))
        continue
    fi

    # 実行ファイルを探す
    bin_dir="$sample_dir/bin"
    app_path=""

    if [[ -d "$bin_dir/${sample}.app" ]]; then
        app_path="$bin_dir/${sample}.app/Contents/MacOS/$sample"
    elif [[ -f "$bin_dir/$sample" ]]; then
        app_path="$bin_dir/$sample"
    fi

    if [[ -z "$app_path" || ! -x "$app_path" ]]; then
        log_error "$sample: 実行ファイルが見つかりません（先にビルドしてください）"
        ((fail_count++))
        continue
    fi

    log_info "$sample: スクショ撮影中... ($sample_type/$sample_group)"

    # Local paths
    local_dir="$SAMPLES_DIR/thumbs/$sample_type/$sample_group"
    mkdir -p "$local_dir"
    screenshot_path="$local_dir/${sample}.png"
    thumb_path="$local_dir/${sample}_thumb.png"

    # MCP port (毎サンプルでランダム化、前回プロセスの残骸との衝突を避ける)
    mcp_port=$((8700 + RANDOM % 100))

    # アプリを起動し MCP HTTP 経由でスクショを撮る
    (
        cd "$sample_dir"
        export TRUSSC_MCP=1
        export TRUSSC_MCP_PORT=$mcp_port
        "$app_path" >/dev/null 2>&1 &
        app_pid=$!

        # HTTP サーバの立ち上がり待ち
        sleep 2

        # Initialize (short timeout; don't abort script on curl failure)
        curl -s --max-time 5 -X POST "http://localhost:${mcp_port}/mcp" \
            -H "Content-Type: application/json" \
            -d '{"jsonrpc":"2.0","method":"initialize","id":1,"params":{}}' >/dev/null || true

        # save_screenshot (path に特殊文字が無い前提)
        curl -s --max-time 10 -X POST "http://localhost:${mcp_port}/mcp" \
            -H "Content-Type: application/json" \
            -d "{\"jsonrpc\":\"2.0\",\"method\":\"tools/call\",\"id\":2,\"params\":{\"name\":\"save_screenshot\",\"arguments\":{\"path\":\"$screenshot_path\"}}}" >/dev/null || true

        sleep 0.5

        # 終了 (強制kill で確実に止める。ポート解放まで少し待つ)
        kill -9 $app_pid 2>/dev/null || true
        wait $app_pid 2>/dev/null || true
        sleep 0.3
    )

    if [[ -f "$screenshot_path" ]]; then
        # サムネイル生成（幅280、アスペクト比維持）
        sips --resampleWidth 280 "$screenshot_path" --out "$thumb_path" >/dev/null 2>&1 || \
            cp "$screenshot_path" "$thumb_path"

        # R2にアップロード (thumbs/{type}/{group}/{name}.png)
        r2_path="thumbs/$sample_type/$sample_group/${sample}.png"
        log_info "$sample: R2にアップロード ($r2_path)..."
        if wrangler r2 object put "$WASM_BUCKET/$r2_path" --file "$thumb_path" --remote >/dev/null 2>&1; then
            log_success "$sample: スクショ完了"
            ((success_count++))
        else
            log_error "$sample: R2アップロード失敗"
            ((fail_count++))
        fi
    else
        log_error "$sample: スクショ撮影失敗"
        ((fail_count++))
    fi
done

echo ""
log_info "完了: 成功 $success_count, 失敗 $fail_count"

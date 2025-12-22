#!/bin/bash
# WASMビルド→R2アップロード
# 使い方: ./build_web.sh [sample1] [sample2] ... [--all]

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/common.sh"

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

for sample in "${samples[@]}"; do
    sample_dir=$(find_sample_dir "$sample")

    if [[ -z "$sample_dir" ]]; then
        log_error "$sample: ディレクトリが見つかりません"
        ((fail_count++))
        continue
    fi

    log_info "$sample: WASMビルド開始..."

    build_dir="$sample_dir/build-web"
    rm -rf "$build_dir"
    mkdir -p "$build_dir"

    # Emscriptenビルド
    if (cd "$build_dir" && emcmake cmake .. >/dev/null 2>&1 && cmake --build . 2>&1); then
        log_success "$sample: WASMビルド完了"

        # R2にアップロード
        bin_dir="$sample_dir/bin"
        log_info "$sample: R2にアップロード中..."

        upload_success=true
        for ext in html js wasm data; do
            file="$bin_dir/${sample}.${ext}"
            if [[ -f "$file" ]]; then
                if ! wrangler r2 object put "$WASM_BUCKET/wasm/${sample}.${ext}" --file "$file" --remote >/dev/null 2>&1; then
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

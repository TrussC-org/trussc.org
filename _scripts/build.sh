#!/bin/bash
# ネイティブビルド
# 使い方: ./build.sh [sample1] [sample2] ... [--all]

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

log_info "ビルド対象: ${samples[*]}"

success_count=0
fail_count=0

for sample in "${samples[@]}"; do
    sample_dir=$(find_sample_dir "$sample")

    if [[ -z "$sample_dir" ]]; then
        log_error "$sample: ディレクトリが見つかりません"
        ((fail_count++))
        continue
    fi

    log_info "$sample: ビルド開始..."

    build_dir="$sample_dir/build-macos"
    mkdir -p "$build_dir"
    if (cd "$build_dir" && cmake .. && cmake --build .); then
        log_success "$sample: ビルド完了"
        ((success_count++))
    else
        log_error "$sample: ビルド失敗"
        ((fail_count++))
    fi
done

echo ""
log_info "完了: 成功 $success_count, 失敗 $fail_count"

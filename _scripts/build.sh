#!/bin/bash
# ネイティブビルド
# 使い方: ./build.sh [sample1] [sample2] ... [--all]

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

for sample_input in "${samples[@]}"; do
    sample=$(sample_basename "$sample_input")
    sample_dir=$(resolve_sample_dir "$sample_input")

    if [[ -z "$sample_dir" ]]; then
        log_error "$sample_input: ディレクトリが見つかりません"
        ((fail_count++))
        continue
    fi

    log_info "$sample: プロジェクト更新..."
    if ! "$TRUSSCLI_BIN" update -p "$sample_dir" --tc-root "$TRUSSC_REPO_DIR"; then
        log_error "$sample: プロジェクト更新失敗"
        ((fail_count++))
        continue
    fi

    log_info "$sample: ビルド開始..."

    cd "$sample_dir"
    
    # Clean build (optional, but safer)
    rm -rf build-macos

    if cmake --preset macos && cmake --build --preset macos; then
        log_success "$sample: ビルド完了"
        ((success_count++))
    else
        log_error "$sample: ビルド失敗"
        ((fail_count++))
    fi
done

echo ""
log_info "完了: 成功 $success_count, 失敗 $fail_count"

#!/bin/bash
# ビルド→スクショ→WASMビルド を一括実行
# 使い方: ./update.sh [sample1] [sample2] ... [--all]

set -e
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
source "$SCRIPT_DIR/common.sh"

if [[ $# -eq 0 ]]; then
    echo "使い方: $0 [sample1] [sample2] ... [--all]"
    echo "例: $0 graphicsExample colorExample"
    echo "例: $0 --all"
    echo ""
    echo "個別スクリプト:"
    echo "  ./build.sh      - ネイティブビルドのみ"
    echo "  ./screenshot.sh - スクショ撮影→R2アップロード"
    echo "  ./build_web.sh  - WASMビルド→R2アップロード"
    exit 1
fi

log_info "=== ネイティブビルド ==="
"$SCRIPT_DIR/build.sh" "$@"

echo ""
log_info "=== スクショ撮影 ==="
"$SCRIPT_DIR/screenshot.sh" "$@"

echo ""
log_info "=== WASMビルド ==="
"$SCRIPT_DIR/build_web.sh" "$@"

echo ""
log_success "=== 全工程完了 ==="

#!/bin/bash
# スクショ撮影→サムネイル生成→R2アップロード
# 使い方: ./screenshot.sh [sample1] [sample2] ... [--all]
# 注意: ネイティブビルド済みである必要がある

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

# サムネイルディレクトリ
mkdir -p "$SAMPLES_DIR/thumbs"

log_info "スクショ対象: ${samples[*]}"

success_count=0
fail_count=0

for sample in "${samples[@]}"; do
    sample_dir=$(find_sample_dir "$sample")

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

    log_info "$sample: スクショ撮影中..."

    screenshot_path="$SAMPLES_DIR/thumbs/${sample}.png"
    thumb_path="$SAMPLES_DIR/thumbs/${sample}_thumb.png"

    # tcdebug用のFIFOを作成
    fifo_path="/tmp/trussc_${sample}_$$"
    mkfifo "$fifo_path" 2>/dev/null || true

    # アプリを起動（FIFOをfd 3に接続）
    (
        cd "$sample_dir"
        exec 3<>"$fifo_path"
        "$app_path" <&3 &
        app_pid=$!

        # 2秒待ってスクショ
        sleep 2
        echo "tcdebug screenshot $screenshot_path" >&3
        sleep 0.5

        # 終了
        kill $app_pid 2>/dev/null || true
        wait $app_pid 2>/dev/null || true
    )

    rm -f "$fifo_path"

    if [[ -f "$screenshot_path" ]]; then
        # サムネイル生成（280x175）
        sips -z 175 280 "$screenshot_path" --out "$thumb_path" >/dev/null 2>&1 || \
            cp "$screenshot_path" "$thumb_path"

        # R2にアップロード
        log_info "$sample: サムネイルをR2にアップロード..."
        if wrangler r2 object put "$WASM_BUCKET/thumbs/${sample}.png" --file "$thumb_path" --remote >/dev/null 2>&1; then
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

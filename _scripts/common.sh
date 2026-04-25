#!/bin/bash
# 共通関数・設定

# パス設定
TRUSSC_ROOT="${TRUSSC_ROOT:-$HOME/Nextcloud/Make/TrussC/TrussC}"
EXAMPLES_DIR="$TRUSSC_ROOT/examples"
ADDONS_DIR="$TRUSSC_ROOT/addons"
SAMPLES_DIR="/tmp/trussc-samples"
WASM_BUCKET="trussc-wasm"

# サンプル名からディレクトリパスを取得
# 戻り値: フルパス、見つからなければ空文字
find_sample_dir() {
    local name="$1"

    # examples/{category}/{name} を検索
    for category_dir in "$EXAMPLES_DIR"/*/; do
        if [[ -d "$category_dir$name" ]]; then
            echo "$category_dir$name"
            return 0
        fi
    done

    # addons/{addon}/{name} を検索
    for addon_dir in "$ADDONS_DIR"/*/; do
        if [[ -d "$addon_dir$name" ]]; then
            echo "$addon_dir$name"
            return 0
        fi
    done

    return 1
}

# 引数を解決してサンプルディレクトリを取得
# - "name"          : 既存の find_sample_dir で検索（最初にヒットしたものを返す）
# - "addon/name"    : addons/<addon>/<name> を直接指定（重複名の対策）
resolve_sample_dir() {
    local input="$1"
    if [[ "$input" == */* ]]; then
        local full_path="$ADDONS_DIR/$input"
        if [[ -d "$full_path" ]]; then
            echo "$full_path"
            return 0
        fi
        return 1
    fi
    find_sample_dir "$input"
}

# 入力からサンプルのベース名（basename）を取り出す
sample_basename() {
    basename "$1"
}

# 入力から addon ヒント（含まれていれば addon 名、なければ空）を返す
sample_addon_hint() {
    local input="$1"
    if [[ "$input" == */* ]]; then
        dirname "$input"
    else
        echo ""
    fi
}

# サンプルのカテゴリを取得
get_sample_category() {
    local sample_dir="$1"
    local parent=$(dirname "$sample_dir")
    local category=$(basename "$parent")

    case "$category" in
        3d|graphics|sound|video|input_output|communication|utils|threads|windowing|tools|events|gui|math|network|node|animation|ImGui|templates)
            echo "$category"
            ;;
        *)
            echo ""
            ;;
    esac
}

# サンプルのアドオン名を取得
get_sample_addon() {
    local sample_dir="$1"

    if [[ "$sample_dir" == *"/addons/"* ]]; then
        local parent=$(dirname "$sample_dir")
        basename "$parent"
    else
        echo ""
    fi
}

# 全サンプルのリストを取得
get_all_samples() {
    local samples=()

    # examples
    for category_dir in "$EXAMPLES_DIR"/*/; do
        for sample_dir in "$category_dir"*/; do
            if [[ -d "$sample_dir" && -f "$sample_dir/CMakeLists.txt" ]]; then
                samples+=("$(basename "$sample_dir")")
            fi
        done
    done

    # addons
    for addon_dir in "$ADDONS_DIR"/*/; do
        for sample_dir in "$addon_dir"*/; do
            if [[ -d "$sample_dir" && -f "$sample_dir/CMakeLists.txt" ]]; then
                samples+=("$(basename "$sample_dir")")
            fi
        done
    done

    echo "${samples[@]}"
}

# 引数をパースしてサンプルリストを返す
# --all があれば全サンプル、なければ指定されたサンプル
parse_samples() {
    local samples=()
    local all_flag=false

    for arg in "$@"; do
        if [[ "$arg" == "--all" ]]; then
            all_flag=true
        else
            samples+=("$arg")
        fi
    done

    if $all_flag; then
        get_all_samples
    else
        echo "${samples[@]}"
    fi
}

# ログ出力
log_info() {
    echo -e "\033[36m[INFO]\033[0m $1"
}

log_success() {
    echo -e "\033[32m[OK]\033[0m $1"
}

log_error() {
    echo -e "\033[31m[ERROR]\033[0m $1"
}

log_warn() {
    echo -e "\033[33m[WARN]\033[0m $1"
}

#!/usr/bin/env bash
# Retro-fix Content-Type on existing R2 wasm objects.
#
# Background: the older build_web.sh did not pass --content-type when
# uploading .html/.js artifacts, so existing objects in R2 have no
# Content-Type header. Browsers fall back to MIME sniffing, which fails on
# emscripten's minified <!doctypehtml> form and renders the HTML as plain
# text inside the iframe.
#
# This script downloads each existing .html and .js from the public R2 URL
# (no rebuild needed) and re-uploads it with the correct Content-Type. The
# file body itself is unchanged.

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
# shellcheck source=common.sh
source "$SCRIPT_DIR/common.sh"

EXAMPLES_JSON="$SCRIPT_DIR/../examples/examples.json"
PUBLIC_BASE="https://wasm.trussc.org"
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

content_type_for_ext() {
    case "$1" in
        html) echo "text/html; charset=utf-8" ;;
        js)   echo "application/javascript; charset=utf-8" ;;
        wasm) echo "application/wasm" ;;
        data) echo "application/octet-stream" ;;
        *)    echo "application/octet-stream" ;;
    esac
}

# Build the list of "<group>/<name>" paths for all webSupported examples.
PATHS_TXT=$(
    jq -r '
        .examples
        | to_entries[]
        | select(.value.visible != false)
        | .key as $g
        | .value.items[]
        | select(.webSupported != false)
        | "\($g)/\(.name)"
    ' "$EXAMPLES_JSON"
)

total=$(echo "$PATHS_TXT" | wc -l | tr -d ' ')
echo "Found ${total} web-supported examples to repair"
echo ""

fixed=0
skipped=0
failed=0

while IFS= read -r path; do
    [ -z "$path" ] && continue
    for ext in html js; do
        key="wasm/examples/${path}.${ext}"
        url="${PUBLIC_BASE}/${key}"
        local_file="${TMP_DIR}/$(basename "$path").${ext}"

        # Download current object (skip if 404 — nothing to retro-fit).
        http_code=$(curl -sf -o "$local_file" -w '%{http_code}' "$url" || echo 000)
        if [ "$http_code" != "200" ]; then
            echo "  skip ${path}.${ext} (HTTP $http_code)"
            skipped=$((skipped + 1))
            continue
        fi

        ctype=$(content_type_for_ext "$ext")
        if wrangler r2 object put "${WASM_BUCKET}/${key}" \
                --file "$local_file" --remote --content-type "$ctype" \
                >/dev/null 2>&1; then
            echo "  fixed ${path}.${ext}  →  $ctype"
            fixed=$((fixed + 1))
        else
            echo "  FAILED ${path}.${ext}"
            failed=$((failed + 1))
        fi
    done
done <<< "$PATHS_TXT"

echo ""
echo "=== Summary ==="
echo "Fixed:   $fixed"
echo "Skipped: $skipped  (missing on R2)"
echo "Failed:  $failed"

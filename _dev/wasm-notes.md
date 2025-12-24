# WASM/Emscripten 開発メモ

このファイルはサイト運用時のトラブルシューティング用メモ。
`_dev/` ディレクトリはGitHub Pagesで公開されない。

---

## 1. Emscripten と std::mutex の問題

### 症状
WASMがロード時に以下のエラーで失敗する：
```
WebAssembly.instantiate(): Import #0 "env": module is not an object or function
```

### 原因
Emscriptenのデフォルトビルドはシングルスレッド（pthreadなし）。
`std::mutex` や `std::recursive_mutex` を使うコードをincludeすると、
pthreadシンボルが必要になりWASMインスタンス化に失敗する。

### 解決策
`trussc/include/tc/events/tcEvent.h` で `TC_MUTEX` マクロを定義：
- Emscriptenシングルスレッド時: `NullMutex`（no-op）
- それ以外: `std::recursive_mutex`

スレッド機能が必要な場合は `-pthread` フラグでビルド。

### 影響を受けるモジュール
- `tcLog.h` - tcEvent.hをincludeするため間接的に影響
- `tcThread.h`, `tcThreadChannel.h` - Web非対応（webSupported: false）
- `tcTcpClient`, `tcTcpServer`, `tcUdpSocket` - Web非対応

---

## 2. iframe内でのマイク・カメラ権限

### 構成
- 親ページ: `trussc.org/examples/player.html` (GitHub Pages)
- iframe: `wasm.trussc.org/wasm/*.html` (Cloudflare R2)

### 必要な設定

#### player.html の iframe 属性
```html
<iframe allow="autoplay; fullscreen; microphone; camera" ...>
```

#### Cloudflare Transform Rules（親ページ用）
cross-origin iframeでマイク/カメラを使うには、親ページに
`Permissions-Policy` ヘッダーが必要。

Cloudflare Dashboard で設定：
1. Rules → Transform Rules → Modify Response Header
2. 新規ルール作成：
   - When: URI Path contains `/examples/`
   - Then: Add header
     - Name: `Permissions-Policy`
     - Value: `microphone=(self "https://wasm.trussc.org"), camera=(self "https://wasm.trussc.org")`

#### 確認方法
```bash
curl -sI https://trussc.org/examples/player.html | grep -i permissions
```

### 注意
- GitHub Pagesは直接カスタムヘッダーを設定できない
- Cloudflareがプロキシとして前にいるので、Transform Rulesで追加可能

---

## 3. R2 CORS設定

`wasm.trussc.org` のCORS設定：
```bash
wrangler r2 bucket cors list trussc-wasm --remote
```

必要に応じて更新：
```json
{
  "rules": [
    {
      "allowed_origins": ["https://trussc.org", "https://www.trussc.org"],
      "allowed_methods": ["GET", "HEAD"],
      "allowed_headers": ["*"],
      "max_age_seconds": 3600
    }
  ]
}
```

---

## 4. Web非対応サンプル

`uploadsamples.sh` の `WEB_UNSUPPORTED_SAMPLES` 配列で管理：
- tcpExample
- udpExample
- videoPlayerExample（ネイティブ版）
- threadExample
- threadChannelExample
- consoleExample
- screenshotExample

これらは `samples.json` に `"webSupported": false` が自動付与される。

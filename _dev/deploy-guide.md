# TrussC Examples Deploy Guide

This document describes the workflow for building and deploying TrussC examples to the web.

---

## Directory Structure

```
trussc.cc/
├── _dev/                    # Development docs (not published)
│   ├── deploy-guide.md      # This file
│   └── wasm-notes.md        # Troubleshooting notes
├── _scripts/
│   ├── build_web.sh         # WASM build & upload to R2
│   ├── screenshot.sh        # Screenshot capture & upload to R2
│   ├── build.sh             # Native build only
│   ├── update.sh            # Run all: build -> screenshot -> build_web
│   └── common.sh            # Shared functions
├── examples/
│   ├── examples.json        # Master config (single source of truth)
│   ├── index.html           # Examples gallery
│   └── player.html          # WASM player
└── ...
```

---

## Data File

### examples/examples.json

Single source of truth for all example metadata. Hierarchical structure with examples and addons.

```json
{
  "examples": {
    "graphics": {
      "visible": true,
      "items": [
        {
          "name": "graphicsExample",
          "width": 960,
          "height": 600,
          "webSupported": true
        },
        {
          "name": "fontExample",
          "width": 960,
          "height": 600,
          "webSupported": true
        }
      ]
    },
    "video": {
      "visible": true,
      "items": [
        {
          "name": "videoGrabberExample",
          "width": 800,
          "height": 600,
          "webSupported": true,
          "autoScreenshot": false
        }
      ]
    },
    "tools": {
      "visible": false,
      "items": [
        { "name": "projectGenerator", "width": 800, "height": 600, "webSupported": false }
      ]
    }
  },
  "addons": {
    "tcxBox2d": {
      "visible": true,
      "items": [
        { "name": "example-basic", "width": 960, "height": 600, "webSupported": true },
        { "name": "example-node", "width": 960, "height": 600, "webSupported": true }
      ]
    },
    "tcxOsc": {
      "visible": true,
      "items": [
        { "name": "example-osc-polling", "width": 960, "height": 600, "webSupported": false }
      ]
    }
  }
}
```

**Structure:**
- `examples`: Core examples organized by category
- `addons`: Addon examples organized by addon name

**Category/Addon Fields:**
- `visible`: Show/hide entire category in gallery (default: true)

**Item Fields:**
- `name`: Directory name (must match exactly)
- `width`, `height`: Window size (used for player sizing)
- `webSupported`: false if WASM not supported (network, threads, etc.)
- `autoScreenshot`: false to skip auto screenshot (e.g., video examples)
- `additionalFiles`: Extra source files to show in player (optional)

**Auto-generated paths:**
- Thumbnails: `thumbs/examples/{category}/{name}.png` or `thumbs/addons/{addon}/{name}.png`
- WASM: `wasm/examples/{category}/{name}.html` or `wasm/addons/{addon}/{name}.html`
- Title: Generated from name (e.g., "graphicsExample" → "Graphics")

---

## Deployment Workflow

### Full Deploy

```bash
cd trussc.cc/_scripts

# Option 1: All-in-one
./update.sh --all

# Option 2: Step by step
./build.sh --all         # Native build
./screenshot.sh --all    # Take screenshots & upload to R2
./build_web.sh --all     # WASM build & upload to R2
```

### Partial Deploy (Specific Examples)

```bash
./update.sh graphicsExample colorExample

# Or individually
./build.sh graphicsExample
./screenshot.sh graphicsExample
./build_web.sh graphicsExample
```

Works for both core examples and addon examples:
```bash
./update.sh example-basic example-node  # tcxBox2d examples
```

---

## Adding a New Example

1. Create example in `TrussC/examples/{category}/{name}/`
2. Add entry to `examples/examples.json`:
   ```json
   {
     "examples": {
       "graphics": {
         "items": [
           { "name": "myExample", "width": 960, "height": 600, "webSupported": true }
         ]
       }
     }
   }
   ```
3. Run deploy:
   ```bash
   ./update.sh myExample
   ```

---

## Adding a New Addon Example

1. Create example in `TrussC/addons/{addonName}/{name}/`
2. Add entry to `examples/examples.json` under `addons`:
   ```json
   {
     "addons": {
       "tcxMyAddon": {
         "visible": true,
         "items": [
           { "name": "example-basic", "width": 960, "height": 600, "webSupported": true }
         ]
       }
     }
   }
   ```
3. Run deploy:
   ```bash
   ./update.sh example-basic
   ```

---

## Categories

Current example categories:
- `3d` - 3D graphics, cameras
- `communication` - Serial, etc.
- `events` - Event handling
- `graphics` - 2D graphics, shaders, fonts
- `ImGui` - Dear ImGui integration
- `input_output` - Files, keyboard, mouse
- `math` - Math utilities
- `network` - TCP/UDP (native only)
- `node` - Node system, UI, hit testing
- `sound` - Audio playback, input
- `templates` - Starter templates
- `threads` - Threading (native only)
- `utils` - Utilities
- `video` - Video playback/capture
- `windowing` - Window management
- `tools` - Development tools (hidden, `visible: false`)

Current addons:
- `tcxBox2d` - Box2D physics
- `tcxOsc` - OSC protocol (native only)
- `tcxTls` - TLS/HTTPS (native only)

---

## Web-Unsupported Examples

These examples have `webSupported: false`:
- `serialExample` - Serial port
- `tcpExample`, `udpExample` - Network sockets
- `threadExample`, `threadChannelExample` - Threading
- `videoPlayerExample` - Native video (FFmpeg)
- `consoleExample` - Console I/O
- `screenshotExample` - File system
- `fileDialogExample` - Native dialogs
- `fboExample` - Missing web implementation
- `example-osc-*` - OSC requires UDP
- `example-tls` - TLS native only

---

## Auto Screenshot Skip

Some examples can't capture good screenshots automatically:
- `videoGrabberExample` - Needs camera permission
- `videoPlayerWebExample` - Needs video loaded

Set `autoScreenshot: false` for these. Thumbnails must be created manually.

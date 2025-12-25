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

Single source of truth for all example metadata. Manually maintained.

```json
{
  "examples": [
    {
      "name": "graphicsExample",
      "category": "graphics",
      "width": 960,
      "height": 600,
      "webSupported": true,
      "additionalFiles": ["shaders/effects.glsl"]
    }
  ]
}
```

**Fields:**
- `name`: Directory name (must match exactly)
- `category`: Category folder name (3d, graphics, node, ImGui, etc.)
- `width`, `height`: Window size (read from main.cpp, used for player sizing)
- `webSupported`: false if WASM not supported (network, threads, etc.)
- `additionalFiles`: Extra source files to show in player (optional)

**Auto-generated paths (no need to specify):**
- Thumbnail: `thumbs/${name}.png`
- WASM: `wasm/${name}.html`
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

---

## Adding a New Example

1. Create example in `TrussC/examples/{category}/{name}/`
2. Add entry to `examples/examples.json`:
   ```json
   { "name": "myExample", "category": "graphics", "width": 960, "height": 600, "webSupported": true }
   ```
3. Run deploy:
   ```bash
   ./update.sh myExample
   ```

---

## Changing Example Category

1. Move directory: `TrussC/examples/{old_category}/{name}` → `TrussC/examples/{new_category}/{name}`
2. Update `examples/examples.json`: change `category` field
3. Run deploy (screenshots and WASM will be updated automatically)

---

## Categories

Current categories:
- `3d` - 3D graphics, cameras
- `communication` - Serial, etc.
- `events` - Event handling
- `graphics` - 2D graphics, shaders
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

---

## Web-Unsupported Examples

These examples have `webSupported: false`:
- `serialExample` - Serial port
- `tcpExample`, `udpExample` - Network sockets
- `threadExample`, `threadChannelExample` - Threading
- `videoPlayerExample` - Native video
- `consoleExample` - Console I/O
- `screenshotExample` - File system
- `fileDialogExample` - Native dialogs

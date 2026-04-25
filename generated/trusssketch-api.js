// TrussSketch API Definition
            // This is the single source of truth for all TrussSketch functions.
            // Used by: autocomplete, reference page, REFERENCE.md generation
            //
            // AUTO-GENERATED from api-definition.yaml
            // Do not edit directly - edit api-definition.yaml instead
            
            const TrussSketchAPI = {
    "categories": [
        {
            "name": "Lifecycle",
            "functions": [
                {
                    "name": "setup",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called once at start",
                    "snippet": "void setup() {\n\t$0\n}"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame before draw",
                    "snippet": "void update() {\n\t$0\n}"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame after update",
                    "snippet": "void draw() {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Events",
            "functions": [
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button pressed",
                    "snippet": "void mousePressed(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button released",
                    "snippet": "void mouseReleased(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Mouse moved",
                    "snippet": "void mouseMoved(float x, float y) {\n\t$0\n}"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse dragged",
                    "snippet": "void mouseDragged(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key pressed. Use KEY_* constants for special keys, or uppercase char literals for printable keys (e.g. key == 'A', key == '1')",
                    "snippet": "void keyPressed(int key) {\n\t$0\n}"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key released",
                    "snippet": "void keyReleased(int key) {\n\t$0\n}"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Window resized",
                    "snippet": "void windowResized(int width, int height) {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Graphics - Color",
            "functions": [
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "setColor",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "void",
                    "desc": "Set color from HSB (H: 0-1)",
                    "snippet": "setColorHSB(${1:0.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "void",
                    "desc": "Set color from OKLCH",
                    "snippet": "setColorOKLCH(${1:0.7}, ${2:0.15}, ${3:0.0})"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "void",
                    "desc": "Set color from OKLab",
                    "snippet": "setColorOKLab(${1:0.7}, ${2:0.0}, ${3:0.0})"
                }
            ]
        },
        {
            "name": "Graphics - Shapes",
            "functions": [
                {
                    "name": "drawRect",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRect",
                    "params": "pos, w, h",
                    "params_typed": "Vec3 pos, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRect",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, Vec2 size",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRectRounded",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)",
                    "snippet": "drawRectRounded(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawRectRounded",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)",
                    "snippet": "drawRectRounded(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawRectSquircle",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)",
                    "snippet": "drawRectSquircle(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawRectSquircle",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)",
                    "snippet": "drawRectSquircle(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "params_typed": "float x, float y, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawCircle",
                    "params": "center, radius",
                    "params_typed": "Vec3 center, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, rx, ry",
                    "params_typed": "Vec3 center, float rx, float ry",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, radii",
                    "params_typed": "Vec3 center, Vec2 radii",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawPoint",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw a single point",
                    "snippet": "drawPoint(${1:x}, ${2:y})"
                },
                {
                    "name": "drawPoint",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Draw a single point",
                    "snippet": "drawPoint(${1:x}, ${2:y})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, z1, x2, y2, z2",
                    "params_typed": "float x1, float y1, float z1, float x2, float y2, float z2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawLine",
                    "params": "p1, p2",
                    "params_typed": "Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "params_typed": "float x1, float y1, float x2, float y2, float x3, float y3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawTriangle",
                    "params": "p1, p2, p3",
                    "params_typed": "Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, size",
                    "params_typed": "float x, float y, float z, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, w, h, d",
                    "params_typed": "float x, float y, float z, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "pos, w, h, d",
                    "params_typed": "Vec3 pos, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawSphere",
                    "params": "radius",
                    "params_typed": "float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawSphere",
                    "params": "x, y, z, radius",
                    "params_typed": "float x, float y, float z, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawSphere",
                    "params": "pos, radius",
                    "params_typed": "Vec3 pos, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawCone",
                    "params": "radius, height",
                    "params_typed": "float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "drawCone",
                    "params": "x, y, z, radius, height",
                    "params_typed": "float x, float y, float z, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "drawCone",
                    "params": "pos, radius, height",
                    "params_typed": "Vec3 pos, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "beginShape",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a shape",
                    "snippet": "beginShape()"
                },
                {
                    "name": "vertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec2& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "endShape",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a shape",
                    "snippet": "endShape()"
                },
                {
                    "name": "beginStroke",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a stroke (uses StrokeMesh internally)",
                    "snippet": "beginStroke()"
                },
                {
                    "name": "endStroke",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a stroke",
                    "snippet": "endStroke()"
                },
                {
                    "name": "beginLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin batch line drawing. Add vertex pairs with vertex(), then call endLines(). Each pair of vertices draws one independent line segment. Use setColor() between vertices for per-line colors.",
                    "snippet": "beginLines()"
                },
                {
                    "name": "endLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End batch line drawing and render all accumulated line segments",
                    "snippet": "endLines()"
                },
                {
                    "name": "drawStroke",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawStroke",
                    "params": "p1, p2",
                    "params_typed": "const Vec2& p1, const Vec2& p2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text",
                    "snippet": "drawBitmapString(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal",
                    "params_typed": "TextAlign horizontal",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "snippet": "setTextAlign(TextAlign::${1:Left})"
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal, vertical",
                    "params_typed": "TextAlign horizontal, TextAlign vertical",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "snippet": "setTextAlign(TextAlign::${1:Left})"
                },
                {
                    "name": "getTextAlignH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get horizontal text alignment",
                    "snippet": "getTextAlignH()"
                },
                {
                    "name": "getTextAlignV",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get vertical text alignment",
                    "snippet": "getTextAlignV()"
                },
                {
                    "name": "getBitmapFontHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get bitmap font height",
                    "snippet": "getBitmapFontHeight()"
                },
                {
                    "name": "getBitmapStringWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width",
                    "snippet": "getBitmapStringWidth(${1:\"text\"})"
                },
                {
                    "name": "getBitmapStringHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height",
                    "snippet": "getBitmapStringHeight(${1:\"text\"})"
                },
                {
                    "name": "getBitmapStringBBox",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "Rect",
                    "desc": "Get text bounding box",
                    "snippet": "getBitmapStringBBox(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "setBitmapLineHeight",
                    "params": "height",
                    "params_typed": "float height",
                    "return_type": "void",
                    "desc": "Set line height for bitmap string newlines (default: 16)",
                    "snippet": "setBitmapLineHeight(${1:16})"
                },
                {
                    "name": "getBitmapLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height for bitmap string newlines",
                    "snippet": "getBitmapLineHeight()"
                },
                {
                    "name": "setFps",
                    "params": "fps",
                    "params_typed": "float fps",
                    "return_type": "void",
                    "desc": "Set target frame rate (VSYNC = -1.0)",
                    "snippet": "setFps(${1:60.0})"
                }
            ]
        },
        {
            "name": "Graphics - Style",
            "functions": [
                {
                    "name": "fill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable fill mode (shapes are solid, no outline)",
                    "snippet": "fill()"
                },
                {
                    "name": "noFill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable stroke mode (shapes show outline only)",
                    "snippet": "noFill()"
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "params_typed": "float weight",
                    "return_type": "void",
                    "desc": "Set stroke width",
                    "snippet": "setStrokeWeight(${1:1.0})"
                },
                {
                    "name": "getStrokeWeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stroke width",
                    "snippet": "getStrokeWeight()"
                },
                {
                    "name": "setStrokeCap",
                    "params": "cap",
                    "params_typed": "StrokeCap cap",
                    "return_type": "void",
                    "desc": "Set stroke cap style (Butt, Round, Square)",
                    "snippet": "setStrokeCap(StrokeCap::${1:Round})"
                },
                {
                    "name": "getStrokeCap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeCap",
                    "desc": "Get current stroke cap style",
                    "snippet": "getStrokeCap()"
                },
                {
                    "name": "setStrokeJoin",
                    "params": "join",
                    "params_typed": "StrokeJoin join",
                    "return_type": "void",
                    "desc": "Set stroke join style (Miter, Round, Bevel)",
                    "snippet": "setStrokeJoin(StrokeJoin::${1:Round})"
                },
                {
                    "name": "getStrokeJoin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeJoin",
                    "desc": "Get current stroke join style",
                    "snippet": "getStrokeJoin()"
                },
                {
                    "name": "isFillEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if fill mode is enabled",
                    "snippet": "isFillEnabled()"
                },
                {
                    "name": "isStrokeEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if stroke mode is enabled",
                    "snippet": "isStrokeEnabled()"
                },
                {
                    "name": "setCircleResolution",
                    "params": "resolution",
                    "params_typed": "int resolution",
                    "return_type": "void",
                    "desc": "Set circle segment count",
                    "snippet": "setCircleResolution(${1:32})"
                },
                {
                    "name": "getCircleResolution",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get circle segment count",
                    "snippet": "getCircleResolution()"
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save current style state (color, stroke, fill)",
                    "snippet": "pushStyle()"
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous style state",
                    "snippet": "popStyle()"
                },
                {
                    "name": "resetStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset style to default values (white color, fill enabled, stroke disabled)",
                    "snippet": "resetStyle()"
                },
                {
                    "name": "getColor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Get current fill color",
                    "snippet": "getColor()"
                }
            ]
        },
        {
            "name": "Transform",
            "functions": [
                {
                    "name": "translate",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "quat",
                    "params_typed": "Quaternion quat",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateDeg",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateDeg",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around X axis",
                    "snippet": "rotateX(${1:radians})"
                },
                {
                    "name": "rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Y axis",
                    "snippet": "rotateY(${1:radians})"
                },
                {
                    "name": "rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Z axis",
                    "snippet": "rotateZ(${1:radians})"
                },
                {
                    "name": "rotateXDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around X axis (degrees)",
                    "snippet": "rotateXDeg(${1:degrees})"
                },
                {
                    "name": "rotateYDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Y axis (degrees)",
                    "snippet": "rotateYDeg(${1:degrees})"
                },
                {
                    "name": "rotateZDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Z axis (degrees)",
                    "snippet": "rotateZDeg(${1:degrees})"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "void",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "params_typed": "float sx, float sy",
                    "return_type": "void",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save transform state",
                    "snippet": "pushMatrix()"
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore transform state",
                    "snippet": "popMatrix()"
                },
                {
                    "name": "getCurrentMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Get current transformation matrix",
                    "snippet": "getCurrentMatrix()"
                },
                {
                    "name": "resetMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset transformation matrix to identity",
                    "snippet": "resetMatrix()"
                },
                {
                    "name": "setMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Set transformation matrix directly",
                    "snippet": "setMatrix(${1:mat})"
                }
            ]
        },
        {
            "name": "Window & Input",
            "functions": [
                {
                    "name": "getWindowWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas width",
                    "snippet": "getWindowWidth()"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas height",
                    "snippet": "getWindowHeight()"
                },
                {
                    "name": "getWindowSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get canvas size as Vec2",
                    "snippet": "getWindowSize()"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse X position",
                    "snippet": "getMouseX()"
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse Y position",
                    "snippet": "getMouseY()"
                },
                {
                    "name": "getMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get mouse position as Vec2",
                    "snippet": "getMousePos()"
                },
                {
                    "name": "getGlobalMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get global mouse position as Vec2",
                    "snippet": "getGlobalMousePos()"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Is mouse button pressed",
                    "snippet": "isMousePressed()"
                },
                {
                    "name": "isKeyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "bool",
                    "desc": "Is specific key currently pressed",
                    "snippet": "isKeyPressed(${1:key})"
                },
                {
                    "name": "showCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Show the mouse cursor (default)",
                    "snippet": "showCursor()"
                },
                {
                    "name": "hideCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Hide the mouse cursor",
                    "snippet": "hideCursor()"
                },
                {
                    "name": "setCursor",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Set the mouse cursor shape",
                    "snippet": "setCursor(${1:Cursor::Hand})"
                },
                {
                    "name": "getCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Cursor",
                    "desc": "Get the current mouse cursor shape",
                    "snippet": "getCursor()"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, width, height, pixels, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, int width, int height, const unsigned char* pixels, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)",
                    "snippet": "bindCursorImage(${1:Cursor::Custom0}, ${2:image})"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, image, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, const Image& image, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)",
                    "snippet": "bindCursorImage(${1:Cursor::Custom0}, ${2:image})"
                },
                {
                    "name": "unbindCursorImage",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Unbind a custom cursor image, restoring the system default",
                    "snippet": "unbindCursorImage(${1:Cursor::Custom0})"
                }
            ]
        },
        {
            "name": "Time - Frame",
            "functions": [
                {
                    "name": "getDeltaTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Seconds since last frame",
                    "snippet": "getDeltaTime()"
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Current FPS",
                    "snippet": "getFrameRate()"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Total frames rendered",
                    "snippet": "getFrameCount()"
                }
            ]
        },
        {
            "name": "Memory",
            "functions": [
                {
                    "name": "getSokolMemoryBytes",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Total bytes allocated by sokol libraries",
                    "snippet": "getSokolMemoryBytes()"
                },
                {
                    "name": "getSokolMemoryAllocs",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of active allocations in sokol libraries",
                    "snippet": "getSokolMemoryAllocs()"
                },
                {
                    "name": "releaseSglBuffers",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Release sokol_gl vertex/command buffers (auto re-allocated on next draw)",
                    "snippet": "releaseSglBuffers()"
                }
            ]
        },
        {
            "name": "Platform",
            "functions": [
                {
                    "name": "Platform::isWeb",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Web (Emscripten / WASM)",
                    "snippet": "Platform::isWeb()"
                },
                {
                    "name": "Platform::isMacOS",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on macOS",
                    "snippet": "Platform::isMacOS()"
                },
                {
                    "name": "Platform::isIOS",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on iOS",
                    "snippet": "Platform::isIOS()"
                },
                {
                    "name": "Platform::isWindows",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Windows",
                    "snippet": "Platform::isWindows()"
                },
                {
                    "name": "Platform::isAndroid",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Android",
                    "snippet": "Platform::isAndroid()"
                },
                {
                    "name": "Platform::isLinux",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Linux (desktop, excludes Android)",
                    "snippet": "Platform::isLinux()"
                },
                {
                    "name": "Platform::isApple",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on any Apple platform (macOS or iOS)",
                    "snippet": "Platform::isApple()"
                },
                {
                    "name": "Platform::isMobile",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on mobile (iOS or Android)",
                    "snippet": "Platform::isMobile()"
                },
                {
                    "name": "Platform::isDesktop",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on desktop (macOS, Windows, or Linux)",
                    "snippet": "Platform::isDesktop()"
                },
                {
                    "name": "Platform::name",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "snippet": "Platform::name()"
                }
            ]
        },
        {
            "name": "Graphics Backend",
            "functions": [
                {
                    "name": "GraphicsBackend::isOpenGL",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on OpenGL (core or GLES3)",
                    "snippet": "GraphicsBackend::isOpenGL()"
                },
                {
                    "name": "GraphicsBackend::isMetal",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Apple Metal",
                    "snippet": "GraphicsBackend::isMetal()"
                },
                {
                    "name": "GraphicsBackend::isD3D11",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Direct3D 11",
                    "snippet": "GraphicsBackend::isD3D11()"
                },
                {
                    "name": "GraphicsBackend::isWebGPU",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGPU",
                    "snippet": "GraphicsBackend::isWebGPU()"
                },
                {
                    "name": "GraphicsBackend::isWebGL2",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)",
                    "snippet": "GraphicsBackend::isWebGL2()"
                },
                {
                    "name": "GraphicsBackend::isVulkan",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Vulkan",
                    "snippet": "GraphicsBackend::isVulkan()"
                },
                {
                    "name": "GraphicsBackend::name",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short backend name: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "snippet": "GraphicsBackend::name()"
                }
            ]
        },
        {
            "name": "Build Info",
            "functions": [
                {
                    "name": "BuildInfo::date",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time, CMake configure time)",
                    "snippet": "BuildInfo::date()"
                },
                {
                    "name": "BuildInfo::time",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build time in \"HH:MM:SS\" form (local time)",
                    "snippet": "BuildInfo::time()"
                },
                {
                    "name": "BuildInfo::dateTime",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)",
                    "snippet": "BuildInfo::dateTime()"
                },
                {
                    "name": "BuildInfo::timestamp",
                    "params_typed": "",
                    "return_type": "int64_t",
                    "desc": "Build timestamp as Unix seconds (UTC)",
                    "snippet": "BuildInfo::timestamp()"
                },
                {
                    "name": "BuildInfo::year",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build year (e.g. 2026)",
                    "snippet": "BuildInfo::year()"
                },
                {
                    "name": "BuildInfo::month",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build month (1-12)",
                    "snippet": "BuildInfo::month()"
                },
                {
                    "name": "BuildInfo::day",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build day of month (1-31)",
                    "snippet": "BuildInfo::day()"
                },
                {
                    "name": "BuildInfo::hour",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build hour (0-23)",
                    "snippet": "BuildInfo::hour()"
                },
                {
                    "name": "BuildInfo::minute",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build minute (0-59)",
                    "snippet": "BuildInfo::minute()"
                },
                {
                    "name": "BuildInfo::second",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build second (0-59)",
                    "snippet": "BuildInfo::second()"
                }
            ]
        },
        {
            "name": "Time - Elapsed",
            "functions": [
                {
                    "name": "getElapsedTimef",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Elapsed seconds (float)",
                    "snippet": "getElapsedTimef()"
                },
                {
                    "name": "getElapsedTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Elapsed seconds (alias for getElapsedTimef)",
                    "snippet": "getElapsedTime()"
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed milliseconds (int64)",
                    "snippet": "getElapsedTimeMillis()"
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed microseconds (int64)",
                    "snippet": "getElapsedTimeMicros()"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset elapsed time",
                    "snippet": "resetElapsedTimeCounter()"
                }
            ]
        },
        {
            "name": "Time - System",
            "functions": [
                {
                    "name": "getSystemTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in milliseconds",
                    "snippet": "getSystemTimeMillis()"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in microseconds",
                    "snippet": "getSystemTimeMicros()"
                },
                {
                    "name": "getUnixTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Current Unix timestamp in seconds",
                    "snippet": "getUnixTime()"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()"
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
                    "params_typed": "const string& format",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()"
                }
            ]
        },
        {
            "name": "Time - Current",
            "functions": [
                {
                    "name": "getSeconds",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current seconds (0-59)",
                    "snippet": "getSeconds()"
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current minutes (0-59)",
                    "snippet": "getMinutes()"
                },
                {
                    "name": "getHours",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current hours (0-23)",
                    "snippet": "getHours()"
                },
                {
                    "name": "getYear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current year",
                    "snippet": "getYear()"
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current month (1-12)",
                    "snippet": "getMonth()"
                },
                {
                    "name": "getDay",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current day (1-31)",
                    "snippet": "getDay()"
                },
                {
                    "name": "getWeekday",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Weekday (0=Sun, 6=Sat)",
                    "snippet": "getWeekday()"
                }
            ]
        },
        {
            "name": "Math - Random & Noise",
            "functions": [
                {
                    "name": "random",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "max",
                    "params_typed": "float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "params_typed": "float min, float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "randomInt",
                    "params": "max",
                    "params_typed": "int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "snippet": "randomInt(${1:max})"
                },
                {
                    "name": "randomInt",
                    "params": "min, max",
                    "params_typed": "int min, int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "snippet": "randomInt(${1:max})"
                },
                {
                    "name": "randomSeed",
                    "params": "seed",
                    "params_typed": "unsigned int seed",
                    "return_type": "void",
                    "desc": "Set random seed",
                    "snippet": "randomSeed(${1:seed})"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z, w",
                    "params_typed": "float x, float y, float z, float w",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, z, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, float z, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})"
                }
            ]
        },
        {
            "name": "Math - Interpolation",
            "functions": [
                {
                    "name": "clamp",
                    "params": "v, min, max",
                    "params_typed": "float v, float min, float max",
                    "return_type": "float",
                    "desc": "Clamp value to range",
                    "snippet": "clamp(${1:v}, ${2:min}, ${3:max})"
                },
                {
                    "name": "remap",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "params_typed": "float v, float inMin, float inMax, float outMin, float outMax",
                    "return_type": "float",
                    "desc": "Remap value from one range to another",
                    "snippet": "remap(${1:v}, ${2:inMin}, ${3:inMax}, ${4:outMin}, ${5:outMax})"
                }
            ]
        },
        {
            "name": "Math - Trigonometry",
            "functions": [
                {
                    "name": "sin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sine",
                    "snippet": "sin(${1:x})"
                },
                {
                    "name": "cos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Cosine",
                    "snippet": "cos(${1:x})"
                },
                {
                    "name": "tan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Tangent",
                    "snippet": "tan(${1:x})"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc sine",
                    "snippet": "asin(${1:x})"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc cosine",
                    "snippet": "acos(${1:x})"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc tangent",
                    "snippet": "atan(${1:x})"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "params_typed": "float y, float x",
                    "return_type": "float",
                    "desc": "Arc tangent of y/x",
                    "snippet": "atan2(${1:y}, ${2:x})"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "float",
                    "desc": "Degrees to radians",
                    "snippet": "deg2rad(${1:degrees})"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "float",
                    "desc": "Radians to degrees",
                    "snippet": "rad2deg(${1:radians})"
                }
            ]
        },
        {
            "name": "Math - General",
            "functions": [
                {
                    "name": "abs",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Absolute value",
                    "snippet": "abs(${1:x})"
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square root",
                    "snippet": "sqrt(${1:x})"
                },
                {
                    "name": "sq",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square (x*x)",
                    "snippet": "sq(${1:x})"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Power (x^y)",
                    "snippet": "pow(${1:x}, ${2:y})"
                },
                {
                    "name": "log",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Natural logarithm",
                    "snippet": "log(${1:x})"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Exponential (e^x)",
                    "snippet": "exp(${1:x})"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Minimum",
                    "snippet": "min(${1:a}, ${2:b})"
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Maximum",
                    "snippet": "max(${1:a}, ${2:b})"
                },
                {
                    "name": "floor",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round down",
                    "snippet": "floor(${1:x})"
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round up",
                    "snippet": "ceil(${1:x})"
                },
                {
                    "name": "round",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round to nearest",
                    "snippet": "round(${1:x})"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Floating-point modulo",
                    "snippet": "fmod(${1:x}, ${2:y})"
                },
                {
                    "name": "sign",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sign (-1, 0, 1)",
                    "snippet": "sign(${1:x})"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Fractional part",
                    "snippet": "fract(${1:x})"
                },
                {
                    "name": "wrap",
                    "params": "value, min, max",
                    "params_typed": "float value, float min, float max",
                    "return_type": "float",
                    "desc": "Wrap value within range [min, max)",
                    "snippet": "wrap(${1:value}, ${2:min}, ${3:max})"
                },
                {
                    "name": "angleDifference",
                    "params": "angle1, angle2",
                    "params_typed": "float angle1, float angle2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in radians [-TAU/2, TAU/2]",
                    "snippet": "angleDifference(${1:angle1}, ${2:angle2})"
                },
                {
                    "name": "angleDifferenceDeg",
                    "params": "deg1, deg2",
                    "params_typed": "float deg1, float deg2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in degrees [-180, 180]",
                    "snippet": "angleDifferenceDeg(${1:deg1}, ${2:deg2})"
                }
            ]
        },
        {
            "name": "Math - Geometry",
            "functions": [
                {
                    "name": "dist",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Distance between points",
                    "snippet": "dist(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Squared distance",
                    "snippet": "distSquared(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                }
            ]
        },
        {
            "name": "Window & System",
            "functions": [
                {
                    "name": "setWindowTitle",
                    "params": "title",
                    "params_typed": "const string& title",
                    "return_type": "void",
                    "desc": "Set window title",
                    "snippet": "setWindowTitle(${1:\"title\"})"
                },
                {
                    "name": "setWindowSize",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Set window size",
                    "snippet": "setWindowSize(${1:800}, ${2:600})"
                },
                {
                    "name": "toggleFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle fullscreen mode",
                    "snippet": "toggleFullscreen()"
                },
                {
                    "name": "setClipboardString",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "void",
                    "desc": "Copy text to clipboard",
                    "snippet": "setClipboardString(${1:\"text\"})"
                },
                {
                    "name": "getClipboardString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get text from clipboard",
                    "snippet": "getClipboardString()"
                },
                {
                    "name": "isFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if window is fullscreen",
                    "snippet": "isFullscreen()"
                },
                {
                    "name": "setFullscreen",
                    "params": "fullscreen",
                    "params_typed": "bool fullscreen",
                    "return_type": "void",
                    "desc": "Set fullscreen mode",
                    "snippet": "setFullscreen(${1:true})"
                }
            ]
        },
        {
            "name": "Utility",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "message",
                    "params_typed": "const string& message",
                    "return_type": "void",
                    "desc": "Print to console",
                    "snippet": "logNotice(${1:\"message\"})"
                },
                {
                    "name": "toString",
                    "params": "value",
                    "params_typed": "value",
                    "return_type": "string",
                    "desc": "Convert to string",
                    "snippet": "toString(${1:value})"
                },
                {
                    "name": "beep",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "snippet": "beep()"
                },
                {
                    "name": "beep",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "snippet": "beep()"
                },
                {
                    "name": "toInt",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "int",
                    "desc": "Convert string to int",
                    "snippet": "toInt(${1:str})"
                },
                {
                    "name": "toFloat",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "float",
                    "desc": "Convert string to float",
                    "snippet": "toFloat(${1:str})"
                },
                {
                    "name": "splitString",
                    "params": "source, delimiter",
                    "params_typed": "const string& source, const string& delimiter",
                    "return_type": "vector<string>",
                    "desc": "Split string by delimiter",
                    "snippet": "splitString(${1:str}, ${2:delimiter})"
                },
                {
                    "name": "joinString",
                    "params": "elements, delimiter",
                    "params_typed": "const vector<string>& elements, const string& delimiter",
                    "return_type": "string",
                    "desc": "Join strings with delimiter",
                    "snippet": "joinString(${1:elements}, ${2:delimiter})"
                },
                {
                    "name": "stringReplace",
                    "params": "input, search, replace",
                    "params_typed": "string& input, const string& searchStr, const string& replaceStr",
                    "return_type": "void",
                    "desc": "Replace substring in place",
                    "snippet": "stringReplace(${1:str}, ${2:search}, ${3:replace})"
                },
                {
                    "name": "toLower",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to lower case",
                    "snippet": "toLower(${1:str})"
                },
                {
                    "name": "toUpper",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to upper case",
                    "snippet": "toUpper(${1:str})"
                }
            ]
        },
        {
            "name": "File",
            "functions": [
                {
                    "name": "getDataPath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get full path relative to data directory",
                    "snippet": "getDataPath(${1:path})"
                },
                {
                    "name": "getAbsolutePath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get absolute path",
                    "snippet": "getAbsolutePath(${1:path})"
                },
                {
                    "name": "getFileName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename from path",
                    "snippet": "getFileName(${1:path})"
                },
                {
                    "name": "getBaseName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename without extension",
                    "snippet": "getBaseName(${1:path})"
                },
                {
                    "name": "getFileExtension",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get file extension without dot",
                    "snippet": "getFileExtension(${1:path})"
                },
                {
                    "name": "getParentDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get parent directory",
                    "snippet": "getParentDirectory(${1:path})"
                },
                {
                    "name": "joinPath",
                    "params": "dir, file",
                    "params_typed": "const string& dir, const string& file",
                    "return_type": "string",
                    "desc": "Join directory and filename",
                    "snippet": "joinPath(${1:dir}, ${2:file})"
                },
                {
                    "name": "fileExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if file exists",
                    "snippet": "fileExists(${1:path})"
                },
                {
                    "name": "directoryExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if directory exists",
                    "snippet": "directoryExists(${1:path})"
                },
                {
                    "name": "listDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "vector<string>",
                    "desc": "List files in directory",
                    "snippet": "listDirectory(${1:path})"
                },
                {
                    "name": "createFileWriter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FileWriter@",
                    "desc": "Create a file writer (TrussSketch factory)",
                    "snippet": "FileWriter@ writer = createFileWriter();"
                },
                {
                    "name": "createFileReader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FileReader@",
                    "desc": "Create a file reader (TrussSketch factory)",
                    "snippet": "FileReader@ reader = createFileReader();"
                }
            ]
        },
        {
            "name": "Sound",
            "functions": [
                {
                    "name": "createSound",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Create a sound player (TrussSketch factory)",
                    "snippet": "Sound@ snd = createSound();"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load sound file",
                    "snippet": "load(${1:\"sound.wav\"})"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play sound",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop sound",
                    "snippet": "stop()"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "setVolume(${1:0.8})"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping",
                    "snippet": "setLoop(${1:true})"
                }
            ]
        },
        {
            "name": "ChipSound",
            "functions": [
                {
                    "name": "wave",
                    "params": "type",
                    "params_typed": "Wave type",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set wave type (Sin, Square, Triangle, Sawtooth, Noise, PinkNoise)",
                    "snippet": "wave(Wave::Square)"
                },
                {
                    "name": "hz",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set frequency in Hz",
                    "snippet": "hz(${1:440})"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set note duration in seconds",
                    "snippet": "duration(${1:0.5})"
                },
                {
                    "name": "volume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "volume(${1:0.8})"
                },
                {
                    "name": "attack",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set attack time (ADSR envelope)",
                    "snippet": "attack(${1:0.01})"
                },
                {
                    "name": "decay",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set decay time (ADSR envelope)",
                    "snippet": "decay(${1:0.1})"
                },
                {
                    "name": "sustain",
                    "params": "level",
                    "params_typed": "float level",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set sustain level (0.0-1.0)",
                    "snippet": "sustain(${1:0.7})"
                },
                {
                    "name": "release",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set release time (ADSR envelope)",
                    "snippet": "release(${1:0.2})"
                },
                {
                    "name": "adsr",
                    "params": "a, d, s, r",
                    "params_typed": "float a, float d, float s, float r",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set ADSR envelope (attack, decay, sustain, release)",
                    "snippet": "adsr(${1:0.01}, ${2:0.1}, ${3:0.7}, ${4:0.2})"
                },
                {
                    "name": "build",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Build and return Sound object from note",
                    "snippet": "build()"
                },
                {
                    "name": "createChipBundle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle@",
                    "desc": "Create a chip sound bundle for sequencing multiple notes",
                    "snippet": "ChipSoundBundle@ bundle = createChipBundle();"
                },
                {
                    "name": "add",
                    "params": "note, time",
                    "params_typed": "const ChipSoundNote& note, float time",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Add a note at specified time (seconds)",
                    "snippet": "add(${1:note}, ${2:0.0})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Clear all notes from bundle",
                    "snippet": "clear()"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the total duration of the bundle",
                    "snippet": "getDuration()"
                }
            ]
        },
        {
            "name": "Font",
            "functions": [
                {
                    "name": "createFont",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Font@",
                    "desc": "Create a TrueType font",
                    "snippet": "Font@ font = createFont();"
                },
                {
                    "name": "load",
                    "params": "path, size",
                    "params_typed": "const string& path, int size",
                    "return_type": "bool",
                    "desc": "Load TTF font file",
                    "snippet": "load(FONT_SANS, ${1:24})"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if font is loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "drawString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text at position",
                    "snippet": "drawString(${1:\"Hello\"}, ${2:100}, ${3:100})"
                },
                {
                    "name": "getWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width in pixels",
                    "snippet": "getWidth(${1:\"text\"})"
                },
                {
                    "name": "getHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height in pixels",
                    "snippet": "getHeight(${1:\"text\"})"
                },
                {
                    "name": "getLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height",
                    "snippet": "getLineHeight()"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get font size",
                    "snippet": "getSize()"
                }
            ]
        },
        {
            "name": "Animation",
            "functions": [
                {
                    "name": "ease",
                    "params": "t, type, mode",
                    "params_typed": "float t, EaseType type, EaseMode mode",
                    "return_type": "float",
                    "desc": "Apply easing to value (0-1)",
                    "snippet": "ease(${1:t}, EaseType::${2:Cubic}, EaseMode::${3:InOut})"
                },
                {
                    "name": "easeIn",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in to value (0-1)",
                    "snippet": "easeIn(${1:t}, EaseType::${2:Cubic})"
                },
                {
                    "name": "easeOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-out to value (0-1)",
                    "snippet": "easeOut(${1:t}, EaseType::${2:Cubic})"
                },
                {
                    "name": "easeInOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in-out to value (0-1)",
                    "snippet": "easeInOut(${1:t}, EaseType::${2:Cubic})"
                },
                {
                    "name": "createTween",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Create a tween object",
                    "snippet": "createTween()"
                },
                {
                    "name": "from",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set start value",
                    "snippet": "from(${1:0.0})"
                },
                {
                    "name": "to",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set end value",
                    "snippet": "to(${1:1.0})"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "Tween@",
                    "desc": "Set animation duration",
                    "snippet": "duration(${1:1.0})"
                },
                {
                    "name": "ease",
                    "params": "type",
                    "params_typed": "EaseType type",
                    "return_type": "Tween@",
                    "desc": "Set easing type",
                    "snippet": "ease(EaseType::${1:Cubic})"
                },
                {
                    "name": "start",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Start animation (chainable)",
                    "snippet": "start()"
                },
                {
                    "name": "pause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Pause animation (chainable)",
                    "snippet": "pause()"
                },
                {
                    "name": "resume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Resume animation (chainable)",
                    "snippet": "resume()"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Reset animation (chainable)",
                    "snippet": "reset()"
                },
                {
                    "name": "finish",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Jump to end (chainable)",
                    "snippet": "finish()"
                },
                {
                    "name": "loop",
                    "params": "count",
                    "params_typed": "int count = -1",
                    "return_type": "Tween@",
                    "desc": "Set loop count (-1=infinite, 0=none, N=repeat N times)",
                    "snippet": "loop(${1:-1})"
                },
                {
                    "name": "yoyo",
                    "params": "enable",
                    "params_typed": "bool enable = true",
                    "return_type": "Tween@",
                    "desc": "Enable yoyo (reverse direction each loop)",
                    "snippet": "yoyo()"
                },
                {
                    "name": "getValue",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current tween value",
                    "snippet": "getValue()"
                },
                {
                    "name": "getProgress",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get progress (0-1)",
                    "snippet": "getProgress()"
                },
                {
                    "name": "getElapsed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get elapsed time",
                    "snippet": "getElapsed()"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get duration",
                    "snippet": "getDuration()"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playing",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "isComplete",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if complete",
                    "snippet": "isComplete()"
                },
                {
                    "name": "getStart",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get start value",
                    "snippet": "getStart()"
                },
                {
                    "name": "getEnd",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get end value",
                    "snippet": "getEnd()"
                },
                {
                    "name": "getLoopCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get number of completed loop iterations",
                    "snippet": "getLoopCount()"
                }
            ]
        },
        {
            "name": "Types - Vec2",
            "functions": [
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "params_typed": "float radians, float length",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                }
            ]
        },
        {
            "name": "Types - Color",
            "functions": [
                {
                    "name": "toHSB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorHSB",
                    "desc": "Convert to HSB color space (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "toHSB()"
                },
                {
                    "name": "toOKLab",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLab",
                    "desc": "Convert to OKLab color space (perceptually uniform)",
                    "snippet": "toOKLab()"
                },
                {
                    "name": "toOKLCH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLCH",
                    "desc": "Convert to OKLCH color space (L: 0-1, C: 0-0.4, H: 0-1)",
                    "snippet": "toOKLCH()"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)",
                    "snippet": "colorFromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)",
                    "snippet": "colorFromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b, alpha",
                    "params_typed": "float L, float a, float b, float alpha",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                }
            ]
        },
        {
            "name": "Types - ColorHSB",
            "functions": [
                {
                    "name": "ColorHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "",
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color",
                    "snippet": "ColorHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "ColorHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "",
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color",
                    "snippet": "ColorHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorHSB to Color (RGB)",
                    "snippet": "toRGB()"
                },
                {
                    "name": "lerp",
                    "params": "target, t",
                    "params_typed": "ColorHSB target, float t",
                    "return_type": "ColorHSB",
                    "desc": "Interpolate in HSB space (shortest hue path)",
                    "snippet": "lerp(${1:target}, ${2:t})"
                }
            ]
        },
        {
            "name": "Types - ColorOKLCH",
            "functions": [
                {
                    "name": "ColorOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "",
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform",
                    "snippet": "ColorOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "ColorOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "",
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform",
                    "snippet": "ColorOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorOKLCH to Color (RGB)",
                    "snippet": "toRGB()"
                },
                {
                    "name": "lerp",
                    "params": "target, t",
                    "params_typed": "ColorOKLCH target, float t",
                    "return_type": "ColorOKLCH",
                    "desc": "Interpolate in OKLCH space (shortest hue path, perceptually uniform)",
                    "snippet": "lerp(${1:target}, ${2:t})"
                }
            ]
        },
        {
            "name": "3D Setup",
            "functions": [
                {
                    "name": "setupScreenPerspective",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenOrtho",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up orthographic projection (2D mode)",
                    "snippet": "setupScreenOrtho()"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "snippet": "setupScreenFov(${1:45.0})"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "snippet": "setupScreenFov(${1:45.0})"
                },
                {
                    "name": "setDefaultScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set default screen FOV (applied at frame start)",
                    "snippet": "setDefaultScreenFov(${1:45.0})"
                },
                {
                    "name": "getDefaultScreenFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current default screen FOV",
                    "snippet": "getDefaultScreenFov()"
                }
            ]
        },
        {
            "name": "3D Camera",
            "functions": [
                {
                    "name": "createEasyCam",
                    "params": "",
                    "params_typed": "",
                    "return_type": "EasyCam@",
                    "desc": "Create an EasyCam instance",
                    "snippet": "createEasyCam()"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Apply camera transform (start 3D mode)",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous transform (end 3D mode)",
                    "snippet": "end()"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset camera to default position",
                    "snippet": "reset()"
                },
                {
                    "name": "setTarget",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera look-at target",
                    "snippet": "setTarget(${1:0}, ${2:0}, ${3:0})"
                },
                {
                    "name": "setTarget",
                    "params": "target",
                    "params_typed": "const Vec3 &in target",
                    "return_type": "void",
                    "desc": "Set camera look-at target",
                    "snippet": "setTarget(${1:0}, ${2:0}, ${3:0})"
                },
                {
                    "name": "getTarget",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera look-at target",
                    "snippet": "getTarget()"
                },
                {
                    "name": "setDistance",
                    "params": "distance",
                    "params_typed": "float distance",
                    "return_type": "void",
                    "desc": "Set distance from target",
                    "snippet": "setDistance(${1:400})"
                },
                {
                    "name": "getDistance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get distance from target",
                    "snippet": "getDistance()"
                },
                {
                    "name": "setFov",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set field of view in radians",
                    "snippet": "setFov(${1:0.785})"
                },
                {
                    "name": "getFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get field of view in radians",
                    "snippet": "getFov()"
                },
                {
                    "name": "setFovDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Set field of view in degrees",
                    "snippet": "setFovDeg(${1:45})"
                },
                {
                    "name": "setNearClip",
                    "params": "nearClip",
                    "params_typed": "float nearClip",
                    "return_type": "void",
                    "desc": "Set near clipping plane",
                    "snippet": "setNearClip(${1:0.1})"
                },
                {
                    "name": "setFarClip",
                    "params": "farClip",
                    "params_typed": "float farClip",
                    "return_type": "void",
                    "desc": "Set far clipping plane",
                    "snippet": "setFarClip(${1:10000})"
                },
                {
                    "name": "enableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse input for camera control",
                    "snippet": "enableMouseInput()"
                },
                {
                    "name": "disableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Disable mouse input for camera control",
                    "snippet": "disableMouseInput()"
                },
                {
                    "name": "isMouseInputEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if mouse input is enabled",
                    "snippet": "isMouseInputEnabled()"
                },
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse press event",
                    "snippet": "mousePressed(${1:x}, ${2:y}, ${3:button})"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse release event",
                    "snippet": "mouseReleased(${1:x}, ${2:y}, ${3:button})"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse drag event",
                    "snippet": "mouseDragged(${1:x}, ${2:y}, ${3:button})"
                },
                {
                    "name": "mouseScrolled",
                    "params": "dx, dy",
                    "params_typed": "float dx, float dy",
                    "return_type": "void",
                    "desc": "Handle mouse scroll event (for zoom)",
                    "snippet": "mouseScrolled(${1:dx}, ${2:dy})"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera position",
                    "snippet": "getPosition()"
                },
                {
                    "name": "setSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set rotation sensitivity",
                    "snippet": "setSensitivity(${1:1.0})"
                },
                {
                    "name": "setZoomSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set zoom sensitivity",
                    "snippet": "setZoomSensitivity(${1:10.0})"
                },
                {
                    "name": "setPanSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set pan sensitivity",
                    "snippet": "setPanSensitivity(${1:1.0})"
                }
            ]
        },
        {
            "name": "Lighting & PBR",
            "functions": [
                {
                    "name": "addLight",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Add a light to the scene",
                    "snippet": "addLight(${1:light})"
                },
                {
                    "name": "removeLight",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Remove a light from the scene",
                    "snippet": "removeLight(${1:light})"
                },
                {
                    "name": "clearLights",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Remove all lights from the scene",
                    "snippet": "clearLights()"
                },
                {
                    "name": "setMaterial",
                    "params": "material",
                    "params_typed": "Material& material",
                    "return_type": "void",
                    "desc": "Set material for subsequent mesh draws (activates PBR)",
                    "snippet": "setMaterial(${1:material})"
                },
                {
                    "name": "clearMaterial",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear material (return to default rendering)",
                    "snippet": "clearMaterial()"
                },
                {
                    "name": "setCameraPosition",
                    "params": "pos",
                    "params_typed": "const Vec3& pos",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation",
                    "snippet": "setCameraPosition(${1:cam.getPosition()})"
                },
                {
                    "name": "setCameraPosition",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation",
                    "snippet": "setCameraPosition(${1:cam.getPosition()})"
                },
                {
                    "name": "setEnvironment",
                    "params": "env",
                    "params_typed": "Environment& env",
                    "return_type": "void",
                    "desc": "Set IBL environment for PBR ambient lighting",
                    "snippet": "setEnvironment(${1:env})"
                },
                {
                    "name": "clearEnvironment",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear IBL environment",
                    "snippet": "clearEnvironment()"
                },
                {
                    "name": "beginShadowPass",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Begin shadow depth pass from the light's point of view",
                    "snippet": "beginShadowPass(${1:light})"
                },
                {
                    "name": "endShadowPass",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shadow depth pass",
                    "snippet": "endShadowPass()"
                },
                {
                    "name": "shadowDraw",
                    "params": "mesh",
                    "params_typed": "const Mesh& mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh into the shadow depth pass (depth only)",
                    "snippet": "shadowDraw(${1:mesh})"
                }
            ]
        },
        {
            "name": "Math - 3D",
            "functions": [
                {
                    "name": "Mat4_identity",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Create an identity matrix",
                    "snippet": "Mat4_identity()"
                },
                {
                    "name": "Mat4_translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix",
                    "snippet": "Mat4_translate(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Mat4_translate",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix",
                    "snippet": "Mat4_translate(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Mat4_rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create X-axis rotation matrix",
                    "snippet": "Mat4_rotateX(${1:radians})"
                },
                {
                    "name": "Mat4_rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Y-axis rotation matrix",
                    "snippet": "Mat4_rotateY(${1:radians})"
                },
                {
                    "name": "Mat4_rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Z-axis rotation matrix",
                    "snippet": "Mat4_rotateZ(${1:radians})"
                },
                {
                    "name": "Mat4_scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix",
                    "snippet": "Mat4_scale(${1:s})"
                },
                {
                    "name": "Mat4_scale",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix",
                    "snippet": "Mat4_scale(${1:s})"
                },
                {
                    "name": "Mat4_lookAt",
                    "params": "eye, target, up",
                    "params_typed": "Vec3 eye, Vec3 target, Vec3 up",
                    "return_type": "Mat4",
                    "desc": "Create a view matrix",
                    "snippet": "Mat4_lookAt(${1:eye}, ${2:target}, ${3:up})"
                },
                {
                    "name": "Mat4_ortho",
                    "params": "left, right, bottom, top, near, far",
                    "params_typed": "float left, float right, float bottom, float top, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create an orthographic projection matrix",
                    "snippet": "Mat4_ortho(${1:left}, ${2:right}, ${3:bottom}, ${4:top}, ${5:near}, ${6:far})"
                },
                {
                    "name": "Mat4_perspective",
                    "params": "fov, aspect, near, far",
                    "params_typed": "float fovY, float aspect, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create a perspective projection matrix",
                    "snippet": "Mat4_perspective(${1:fov}, ${2:aspect}, ${3:near}, ${4:far})"
                },
                {
                    "name": "Quaternion_identity",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Quaternion",
                    "desc": "Create an identity quaternion",
                    "snippet": "Quaternion_identity()"
                },
                {
                    "name": "Quaternion_fromAxisAngle",
                    "params": "axis, radians",
                    "params_typed": "Vec3 axis, float radians",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from axis-angle",
                    "snippet": "Quaternion_fromAxisAngle(${1:axis}, ${2:radians})"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "pitch, yaw, roll",
                    "params_typed": "float pitch, float yaw, float roll",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles",
                    "snippet": "Quaternion_fromEuler(${1:pitch}, ${2:yaw}, ${3:roll})"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles",
                    "snippet": "Quaternion_fromEuler(${1:pitch}, ${2:yaw}, ${3:roll})"
                },
                {
                    "name": "Quaternion_slerp",
                    "params": "a, b, t",
                    "params_typed": "Quaternion a, Quaternion b, float t",
                    "return_type": "Quaternion",
                    "desc": "Spherical linear interpolation",
                    "snippet": "Quaternion_slerp(${1:a}, ${2:b}, ${3:t})"
                }
            ]
        },
        {
            "name": "Graphics - Advanced",
            "functions": [
                {
                    "name": "drawMesh",
                    "params": "mesh",
                    "params_typed": "Mesh mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh",
                    "snippet": "drawMesh(${1:mesh})"
                },
                {
                    "name": "drawPolyline",
                    "params": "polyline",
                    "params_typed": "Polyline polyline",
                    "return_type": "void",
                    "desc": "Draw a polyline",
                    "snippet": "drawPolyline(${1:polyline})"
                },
                {
                    "name": "createBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "snippet": "createBox(${1:size})"
                },
                {
                    "name": "createBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "snippet": "createBox(${1:size})"
                },
                {
                    "name": "createSphere",
                    "params": "radius, res",
                    "params_typed": "float radius, int res = 20",
                    "return_type": "Mesh",
                    "desc": "Create a sphere mesh",
                    "snippet": "createSphere(${1:radius})"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y",
                    "params_typed": "const Texture& tex, float x, float y",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y, w, h",
                    "params_typed": "const Texture& tex, float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})"
                }
            ]
        },
        {
            "name": "Graphics - Texture & GPU",
            "functions": [
                {
                    "name": "createTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture@",
                    "desc": "Create a texture (TrussSketch factory)",
                    "snippet": "Texture@ tex = createTexture();"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load image from file",
                    "snippet": "load(${1:\"image.png\"})"
                },
                {
                    "name": "bind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Bind texture",
                    "snippet": "bind(${1:0})"
                },
                {
                    "name": "unbind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Unbind texture",
                    "snippet": "unbind(${1:0})"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get height",
                    "snippet": "getHeight()"
                }
            ]
        },
        {
            "name": "Graphics - FBO",
            "functions": [
                {
                    "name": "createFbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Fbo@",
                    "desc": "Create an FBO (TrussSketch factory)",
                    "snippet": "Fbo@ fbo = createFbo();"
                },
                {
                    "name": "allocate",
                    "params": "w, h",
                    "params_typed": "int w, int h",
                    "return_type": "void",
                    "desc": "Allocate buffer",
                    "snippet": "allocate(${1:800}, ${2:600})"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color",
                    "snippet": "begin()"
                },
                {
                    "name": "begin",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a = 1.0",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End drawing to FBO",
                    "snippet": "end()"
                },
                {
                    "name": "getTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture&",
                    "desc": "Get internal texture",
                    "snippet": "getTexture()"
                }
            ]
        },
        {
            "name": "Types - Pixels",
            "functions": [
                {
                    "name": "createPixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Pixels@",
                    "desc": "Create pixel buffer (TrussSketch factory)",
                    "snippet": "Pixels@ px = createPixels();"
                },
                {
                    "name": "allocate",
                    "params": "w, h, channels",
                    "params_typed": "int w, int h, int channels",
                    "return_type": "void",
                    "desc": "Allocate memory",
                    "snippet": "allocate(${1:800}, ${2:600}, ${3:4})"
                },
                {
                    "name": "getColor",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "Color",
                    "desc": "Get color at pixel",
                    "snippet": "getColor(${1:x}, ${2:y})"
                },
                {
                    "name": "setColor",
                    "params": "x, y, c",
                    "params_typed": "int x, int y, const Color& c",
                    "return_type": "void",
                    "desc": "Set color at pixel",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})"
                }
            ]
        },
        {
            "name": "Types - Mesh",
            "functions": [
                {
                    "name": "createMesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mesh@",
                    "desc": "Create a new Mesh",
                    "snippet": "Mesh@ mesh = createMesh();"
                },
                {
                    "name": "setMode",
                    "params": "mode",
                    "params_typed": "int mode",
                    "return_type": "void",
                    "desc": "Set primitive mode (MESH_TRIANGLES, etc.)",
                    "snippet": "setMode(${1:MESH_TRIANGLES})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addColor",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addTexCoord",
                    "params": "u, v",
                    "params_typed": "float u, float v",
                    "return_type": "void",
                    "desc": "Add a texture coordinate",
                    "snippet": "addTexCoord(${1:u}, ${2:v})"
                },
                {
                    "name": "addNormal",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a normal vector",
                    "snippet": "addNormal(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "addIndex",
                    "params": "index",
                    "params_typed": "int index",
                    "return_type": "void",
                    "desc": "Add an index",
                    "snippet": "addIndex(${1:index})"
                },
                {
                    "name": "addTriangle",
                    "params": "i1, i2, i3",
                    "params_typed": "int i1, int i2, int i3",
                    "return_type": "void",
                    "desc": "Add a triangle (3 indices)",
                    "snippet": "addTriangle(${1:i1}, ${2:i2}, ${3:i3})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear all data",
                    "snippet": "clear()"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the mesh",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Types - Path",
            "functions": [
                {
                    "name": "createPath",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Path@",
                    "desc": "Create a new Path",
                    "snippet": "Path@ path = createPath();"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "lineTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a line segment to point",
                    "snippet": "lineTo(${1:x}, ${2:y})"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y",
                    "params_typed": "float cx1, float cy1, float cx2, float cy2, float x, float y",
                    "return_type": "void",
                    "desc": "Add a cubic bezier curve",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y",
                    "params_typed": "float cx, float cy, float x, float y",
                    "return_type": "void",
                    "desc": "Add a quadratic bezier curve",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})"
                },
                {
                    "name": "curveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a Catmull-Rom curve segment",
                    "snippet": "curveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "arc",
                    "params": "x, y, rX, rY, start, end",
                    "params_typed": "float x, float y, float rX, float rY, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Add an arc",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:rX}, ${4:rY}, ${5:0}, ${6:360})"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the shape",
                    "snippet": "close()"
                }
            ]
        },
        {
            "name": "Types - StrokeMesh",
            "functions": [
                {
                    "name": "createStrokeMesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeMesh@",
                    "desc": "Create a new StrokeMesh instance",
                    "snippet": "createStrokeMesh()"
                },
                {
                    "name": "setWidth",
                    "params": "width",
                    "params_typed": "float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke width (method chaining)",
                    "snippet": "setWidth(${1:5.0})"
                },
                {
                    "name": "setColor",
                    "params": "color",
                    "params_typed": "const Color &in color",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke color (method chaining)",
                    "snippet": "setColor(${1:color})"
                },
                {
                    "name": "setCapType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set cap type: Butt, Round, Square (method chaining)",
                    "snippet": "setCapType(${1:Round})"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set join type: Miter, Round, Bevel (method chaining)",
                    "snippet": "setJoinType(${1:Round})"
                },
                {
                    "name": "setMiterLimit",
                    "params": "limit",
                    "params_typed": "float limit",
                    "return_type": "StrokeMesh&",
                    "desc": "Set miter limit for sharp corners (method chaining)",
                    "snippet": "setMiterLimit(${1:10.0})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec2 &in v",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec3 &in v",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertexWithWidth",
                    "params": "x, y, width",
                    "params_typed": "float x, float y, float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex with variable width (method chaining)",
                    "snippet": "addVertexWithWidth(${1:x}, ${2:y}, ${3:width})"
                },
                {
                    "name": "setShape",
                    "params": "path",
                    "params_typed": "Path@ path",
                    "return_type": "StrokeMesh&",
                    "desc": "Set shape from Path (method chaining)",
                    "snippet": "setShape(${1:path})"
                },
                {
                    "name": "setClosed",
                    "params": "closed",
                    "params_typed": "bool closed",
                    "return_type": "StrokeMesh&",
                    "desc": "Set whether the stroke is closed (method chaining)",
                    "snippet": "setClosed(${1:true})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeMesh&",
                    "desc": "Clear all vertices (method chaining)",
                    "snippet": "clear()"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the internal mesh (required before draw)",
                    "snippet": "update()"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the stroke mesh",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Video",
            "functions": [
                {
                    "name": "createVideoPlayer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "VideoPlayer@",
                    "desc": "Create a video player (TrussSketch factory)",
                    "snippet": "VideoPlayer@ vid = createVideoPlayer();"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load a video file",
                    "snippet": "load(${1:\"video.mp4\"})"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the video and release resources",
                    "snippet": "close()"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a video is loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Start or resume playback",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop playback and reset to beginning",
                    "snippet": "stop()"
                },
                {
                    "name": "setPaused",
                    "params": "paused",
                    "params_typed": "bool paused",
                    "return_type": "void",
                    "desc": "Pause or resume playback",
                    "snippet": "setPaused(${1:true})"
                },
                {
                    "name": "togglePause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle pause state",
                    "snippet": "togglePause()"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the video frame. Call once per frame in update()",
                    "snippet": "update()"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is currently playing (not paused)",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "isPaused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is paused",
                    "snippet": "isPaused()"
                },
                {
                    "name": "isFrameNew",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a new frame is available since last update",
                    "snippet": "isFrameNew()"
                },
                {
                    "name": "isDone",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playback has reached the end",
                    "snippet": "isDone()"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video width in pixels",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video height in pixels",
                    "snippet": "getHeight()"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get total duration in seconds",
                    "snippet": "getDuration()"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current position (0.0 to 1.0)",
                    "snippet": "getPosition()"
                },
                {
                    "name": "setPosition",
                    "params": "pct",
                    "params_typed": "float pct",
                    "return_type": "void",
                    "desc": "Seek to position (0.0 to 1.0)",
                    "snippet": "setPosition(${1:0.5})"
                },
                {
                    "name": "getCurrentTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback time in seconds",
                    "snippet": "getCurrentTime()"
                },
                {
                    "name": "setCurrentTime",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Seek to a specific time in seconds",
                    "snippet": "setCurrentTime(${1:10.0})"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set audio volume (0.0 to 1.0)",
                    "snippet": "setVolume(${1:0.8})"
                },
                {
                    "name": "getVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current volume",
                    "snippet": "getVolume()"
                },
                {
                    "name": "setSpeed",
                    "params": "speed",
                    "params_typed": "float speed",
                    "return_type": "void",
                    "desc": "Set playback speed (1.0 = normal, 2.0 = double speed)",
                    "snippet": "setSpeed(${1:1.0})"
                },
                {
                    "name": "getSpeed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback speed",
                    "snippet": "getSpeed()"
                },
                {
                    "name": "setPan",
                    "params": "pan",
                    "params_typed": "float pan",
                    "return_type": "void",
                    "desc": "Set stereo pan (-1.0 left, 0.0 center, 1.0 right)",
                    "snippet": "setPan(${1:0.0})"
                },
                {
                    "name": "getPan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stereo pan",
                    "snippet": "getPan()"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping",
                    "snippet": "setLoop(${1:true})"
                },
                {
                    "name": "isLoop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if looping is enabled",
                    "snippet": "isLoop()"
                },
                {
                    "name": "getCurrentFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current frame number",
                    "snippet": "getCurrentFrame()"
                },
                {
                    "name": "getTotalFrames",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get total number of frames",
                    "snippet": "getTotalFrames()"
                },
                {
                    "name": "setFrame",
                    "params": "frame",
                    "params_typed": "int frame",
                    "return_type": "void",
                    "desc": "Seek to a specific frame number",
                    "snippet": "setFrame(${1:0})"
                },
                {
                    "name": "nextFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Advance to the next frame",
                    "snippet": "nextFrame()"
                },
                {
                    "name": "previousFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go back to the previous frame",
                    "snippet": "previousFrame()"
                },
                {
                    "name": "firstFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go to the first frame",
                    "snippet": "firstFrame()"
                },
                {
                    "name": "setGammaCorrection",
                    "params": "gamma",
                    "params_typed": "float gamma",
                    "return_type": "void",
                    "desc": "Set gamma correction (1.0 = none). Use ~0.45 to brighten on platforms with dark output (e.g. macOS AVFoundation)",
                    "snippet": "setGammaCorrection(${1:1.0})"
                },
                {
                    "name": "getGammaCorrection",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current gamma correction value",
                    "snippet": "getGammaCorrection()"
                },
                {
                    "name": "setUseHwAccel",
                    "params": "enable",
                    "params_typed": "bool enable",
                    "return_type": "void",
                    "desc": "Enable/disable hardware decoding. Must be called before load(). Default: true. When enabled, the player probes available HW backends (VAAPI, V4L2M2M, CUDA, etc.) and falls back to software if none are available. Currently affects the Linux backend only.",
                    "snippet": "setUseHwAccel(${1:true})"
                },
                {
                    "name": "getUseHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get HW accel preference (not the actual backend — use isUsingHwAccel() for that)",
                    "snippet": "getUseHwAccel()"
                },
                {
                    "name": "isUsingHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if hardware decoding is currently active (after load)",
                    "snippet": "isUsingHwAccel()"
                },
                {
                    "name": "getHwAccelName",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the name of the active decode backend. Returns 'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', or 'none'",
                    "snippet": "getHwAccelName()"
                },
                {
                    "name": "setResyncThreshold",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Set the maximum video/audio drift before hard re-sync. When drift exceeds this threshold, video seeks to match audio position instead of catching up frame-by-frame. Set to 0 to disable. Default: 0.5s. Primarily affects Linux (FFmpeg) backend.",
                    "snippet": "setResyncThreshold(${1:0.5})"
                },
                {
                    "name": "getResyncThreshold",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the current resync threshold in seconds",
                    "snippet": "getResyncThreshold()"
                },
                {
                    "name": "hasAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if the loaded video has an audio track",
                    "snippet": "hasAudio()"
                }
            ]
        }
    ],
    "constants": [
        {
            "name": "TAU",
            "value": "6.283...",
            "desc": "Full circle (2*PI)"
        },
        {
            "name": "HALF_TAU",
            "value": "3.141...",
            "desc": "Half circle (PI)"
        },
        {
            "name": "QUARTER_TAU",
            "value": "1.570...",
            "desc": "Quarter circle (PI/2)"
        },
        {
            "name": "PI",
            "value": "3.141...",
            "desc": "Pi (use TAU instead)"
        },
        {
            "name": "StrokeCap::Butt",
            "value": "0",
            "desc": "Flat line cap (no extension)"
        },
        {
            "name": "StrokeCap::Round",
            "value": "1",
            "desc": "Rounded line cap"
        },
        {
            "name": "StrokeCap::Square",
            "value": "2",
            "desc": "Square line cap (extends by half stroke width)"
        },
        {
            "name": "StrokeJoin::Miter",
            "value": "0",
            "desc": "Sharp corner join"
        },
        {
            "name": "StrokeJoin::Round",
            "value": "1",
            "desc": "Rounded corner join"
        },
        {
            "name": "StrokeJoin::Bevel",
            "value": "2",
            "desc": "Beveled corner join"
        },
        {
            "name": "FONT_SANS",
            "value": "string",
            "desc": "System sans-serif font path (CDN URL on Web)"
        },
        {
            "name": "FONT_SERIF",
            "value": "string",
            "desc": "System serif font path (CDN URL on Web)"
        },
        {
            "name": "FONT_MONO",
            "value": "string",
            "desc": "System monospace font path (CDN URL on Web)"
        },
        {
            "name": "Wave::Sin",
            "value": "0",
            "desc": "Sine wave (smooth, pure tone)"
        },
        {
            "name": "Wave::Square",
            "value": "1",
            "desc": "Square wave (harsh, 8-bit style)"
        },
        {
            "name": "Wave::Triangle",
            "value": "2",
            "desc": "Triangle wave (softer than square)"
        },
        {
            "name": "Wave::Sawtooth",
            "value": "3",
            "desc": "Sawtooth wave (bright, buzzy)"
        },
        {
            "name": "Wave::Noise",
            "value": "4",
            "desc": "White noise"
        },
        {
            "name": "Wave::PinkNoise",
            "value": "5",
            "desc": "Pink noise (1/f noise, more natural)"
        },
        {
            "name": "Wave::Silent",
            "value": "6",
            "desc": "Silent (no sound)"
        },
        {
            "name": "Cursor::Default",
            "value": "0",
            "desc": "System default cursor"
        },
        {
            "name": "Cursor::Arrow",
            "value": "1",
            "desc": "Arrow cursor"
        },
        {
            "name": "Cursor::IBeam",
            "value": "2",
            "desc": "Text input cursor"
        },
        {
            "name": "Cursor::Crosshair",
            "value": "3",
            "desc": "Crosshair cursor"
        },
        {
            "name": "Cursor::Hand",
            "value": "4",
            "desc": "Pointing hand cursor"
        },
        {
            "name": "Cursor::ResizeEW",
            "value": "5",
            "desc": "East-west resize cursor"
        },
        {
            "name": "Cursor::ResizeNS",
            "value": "6",
            "desc": "North-south resize cursor"
        },
        {
            "name": "Cursor::ResizeNWSE",
            "value": "7",
            "desc": "NW-SE diagonal resize cursor"
        },
        {
            "name": "Cursor::ResizeNESW",
            "value": "8",
            "desc": "NE-SW diagonal resize cursor"
        },
        {
            "name": "Cursor::ResizeAll",
            "value": "9",
            "desc": "Move/resize all directions cursor"
        },
        {
            "name": "Cursor::NotAllowed",
            "value": "10",
            "desc": "Not allowed cursor"
        },
        {
            "name": "Cursor::Custom0",
            "value": "11",
            "desc": "Custom cursor slot 0 (bind image first)"
        },
        {
            "name": "Cursor::Custom1",
            "value": "12",
            "desc": "Custom cursor slot 1"
        },
        {
            "name": "Cursor::Custom2",
            "value": "13",
            "desc": "Custom cursor slot 2"
        },
        {
            "name": "Cursor::Custom3",
            "value": "14",
            "desc": "Custom cursor slot 3"
        },
        {
            "name": "KEY_SPACE",
            "value": "32",
            "desc": "Space key"
        },
        {
            "name": "KEY_ESCAPE",
            "value": "256",
            "desc": "Escape key"
        },
        {
            "name": "KEY_ENTER",
            "value": "257",
            "desc": "Enter/Return key"
        },
        {
            "name": "KEY_TAB",
            "value": "258",
            "desc": "Tab key"
        },
        {
            "name": "KEY_BACKSPACE",
            "value": "259",
            "desc": "Backspace key"
        },
        {
            "name": "KEY_DELETE",
            "value": "261",
            "desc": "Delete key"
        },
        {
            "name": "KEY_RIGHT",
            "value": "262",
            "desc": "Right arrow key"
        },
        {
            "name": "KEY_LEFT",
            "value": "263",
            "desc": "Left arrow key"
        },
        {
            "name": "KEY_DOWN",
            "value": "264",
            "desc": "Down arrow key"
        },
        {
            "name": "KEY_UP",
            "value": "265",
            "desc": "Up arrow key"
        },
        {
            "name": "KEY_LEFT_SHIFT",
            "value": "340",
            "desc": "Left Shift key"
        },
        {
            "name": "KEY_RIGHT_SHIFT",
            "value": "344",
            "desc": "Right Shift key"
        },
        {
            "name": "KEY_LEFT_CONTROL",
            "value": "341",
            "desc": "Left Control key"
        },
        {
            "name": "KEY_RIGHT_CONTROL",
            "value": "345",
            "desc": "Right Control key"
        },
        {
            "name": "KEY_LEFT_ALT",
            "value": "342",
            "desc": "Left Alt/Option key"
        },
        {
            "name": "KEY_RIGHT_ALT",
            "value": "346",
            "desc": "Right Alt/Option key"
        },
        {
            "name": "KEY_LEFT_SUPER",
            "value": "343",
            "desc": "Left Super/Command key"
        },
        {
            "name": "KEY_RIGHT_SUPER",
            "value": "347",
            "desc": "Right Super/Command key"
        },
        {
            "name": "MOUSE_BUTTON_LEFT",
            "value": "0",
            "desc": "Left mouse button"
        },
        {
            "name": "MOUSE_BUTTON_RIGHT",
            "value": "1",
            "desc": "Right mouse button"
        },
        {
            "name": "MOUSE_BUTTON_MIDDLE",
            "value": "2",
            "desc": "Middle mouse button"
        }
    ],
    "keywords": [
        "void",
        "int",
        "float",
        "bool",
        "string",
        "if",
        "else",
        "for",
        "while",
        "return",
        "break",
        "continue",
        "true",
        "false",
        "null",
        "const"
    ],
    "types": [
        {
            "name": "Vec2",
            "desc": "2D vector (x, y)",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y",
                    "float v"
                ],
                "snippet": "Vec2(${1:x}, ${2:y})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y component"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Vec2&",
                    "signatures": [
                        "float x, float y",
                        "Vec2 v"
                    ],
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vector length",
                    "snippet": "length()"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get squared length (faster, no sqrt)",
                    "snippet": "lengthSquared()"
                },
                {
                    "name": "normalized",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized copy",
                    "snippet": "normalized()"
                },
                {
                    "name": "normalize",
                    "return": "Vec2&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize in place",
                    "snippet": "normalize()"
                },
                {
                    "name": "limit",
                    "return": "Vec2&",
                    "signatures": [
                        "float max"
                    ],
                    "desc": "Limit length to max",
                    "snippet": "limit(${1:max})"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Dot product",
                    "snippet": "dot(${1:v})"
                },
                {
                    "name": "cross",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Cross product (z component)",
                    "snippet": "cross(${1:v})"
                },
                {
                    "name": "distance",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Distance to another vector",
                    "snippet": "distance(${1:v})"
                },
                {
                    "name": "distanceSquared",
                    "return": "float",
                    "signatures": [
                        "Vec2 v"
                    ],
                    "desc": "Squared distance (faster)",
                    "snippet": "distanceSquared(${1:v})"
                },
                {
                    "name": "angle",
                    "return": "float",
                    "signatures": [
                        "",
                        "Vec2 v"
                    ],
                    "desc": "Angle in radians",
                    "snippet": "angle()"
                },
                {
                    "name": "rotated",
                    "return": "Vec2",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Get rotated copy",
                    "snippet": "rotated(${1:radians})"
                },
                {
                    "name": "rotate",
                    "return": "Vec2&",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate in place",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "lerp",
                    "return": "Vec2",
                    "signatures": [
                        "Vec2 target, float t"
                    ],
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:target}, ${2:t})"
                },
                {
                    "name": "perpendicular",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get perpendicular vector",
                    "snippet": "perpendicular()"
                },
                {
                    "name": "reflected",
                    "return": "Vec2",
                    "signatures": [
                        "Vec2 normal"
                    ],
                    "desc": "Get reflected vector",
                    "snippet": "reflected(${1:normal})"
                }
            ],
            "static_methods": [
                {
                    "name": "Vec2_fromAngle",
                    "return": "Vec2",
                    "signatures": [
                        "float radians",
                        "float radians, float length"
                    ],
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                }
            ]
        },
        {
            "name": "Vec3",
            "desc": "3D vector (x, y, z)",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y, float z",
                    "float v"
                ],
                "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y component"
                },
                {
                    "name": "z",
                    "type": "float",
                    "desc": "Z component"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Vec3&",
                    "signatures": [
                        "float x, float y, float z",
                        "Vec3 v"
                    ],
                    "desc": "Set vector components",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vector length",
                    "snippet": "length()"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get squared length",
                    "snippet": "lengthSquared()"
                },
                {
                    "name": "normalized",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized copy",
                    "snippet": "normalized()"
                },
                {
                    "name": "normalize",
                    "return": "Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize in place",
                    "snippet": "normalize()"
                },
                {
                    "name": "limit",
                    "return": "Vec3&",
                    "signatures": [
                        "float max"
                    ],
                    "desc": "Limit length to max",
                    "snippet": "limit(${1:max})"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Dot product",
                    "snippet": "dot(${1:v})"
                },
                {
                    "name": "cross",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Cross product",
                    "snippet": "cross(${1:v})"
                },
                {
                    "name": "distance",
                    "return": "float",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Distance to another vector",
                    "snippet": "distance(${1:v})"
                },
                {
                    "name": "distanceSquared",
                    "return": "float",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Squared distance",
                    "snippet": "distanceSquared(${1:v})"
                },
                {
                    "name": "lerp",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 target, float t"
                    ],
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:target}, ${2:t})"
                },
                {
                    "name": "reflected",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 normal"
                    ],
                    "desc": "Get reflected vector",
                    "snippet": "reflected(${1:normal})"
                },
                {
                    "name": "xy",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as Vec2",
                    "snippet": "xy()"
                }
            ]
        },
        {
            "name": "IVec2",
            "desc": "2D integer vector (x, y)",
            "constructor": {
                "signatures": [
                    "",
                    "int x, int y",
                    "int v"
                ],
                "snippet": "IVec2(${1:x}, ${2:y})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "int",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "int",
                    "desc": "Y component"
                }
            ],
            "methods": [
                {
                    "name": "toVec2",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to Vec2 (float)",
                    "snippet": "toVec2()"
                }
            ]
        },
        {
            "name": "IVec3",
            "desc": "3D integer vector (x, y, z)",
            "constructor": {
                "signatures": [
                    "",
                    "int x, int y, int z",
                    "int v",
                    "IVec2 v, int z"
                ],
                "snippet": "IVec3(${1:x}, ${2:y}, ${3:z})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "int",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "int",
                    "desc": "Y component"
                },
                {
                    "name": "z",
                    "type": "int",
                    "desc": "Z component"
                }
            ],
            "methods": [
                {
                    "name": "toVec3",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to Vec3 (float)",
                    "snippet": "toVec3()"
                },
                {
                    "name": "xy",
                    "return": "IVec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as IVec2",
                    "snippet": "xy()"
                }
            ]
        },
        {
            "name": "IVec2",
            "desc": "2D integer vector (x, y)",
            "constructor": {
                "signatures": [
                    "",
                    "int x, int y",
                    "int v"
                ],
                "snippet": "IVec2(${1:x}, ${2:y})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "int",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "int",
                    "desc": "Y component"
                }
            ],
            "methods": [
                {
                    "name": "toVec2",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to Vec2 (float)",
                    "snippet": "toVec2()"
                }
            ]
        },
        {
            "name": "IVec3",
            "desc": "3D integer vector (x, y, z)",
            "constructor": {
                "signatures": [
                    "",
                    "int x, int y, int z",
                    "int v",
                    "IVec2 v, int z"
                ],
                "snippet": "IVec3(${1:x}, ${2:y}, ${3:z})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "int",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "int",
                    "desc": "Y component"
                },
                {
                    "name": "z",
                    "type": "int",
                    "desc": "Z component"
                }
            ],
            "methods": [
                {
                    "name": "toVec3",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to Vec3 (float)",
                    "snippet": "toVec3()"
                },
                {
                    "name": "xy",
                    "return": "IVec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as IVec2",
                    "snippet": "xy()"
                }
            ]
        },
        {
            "name": "Color",
            "desc": "RGBA color (0.0-1.0 range)",
            "constructor": {
                "signatures": [
                    "",
                    "float r, float g, float b",
                    "float r, float g, float b, float a",
                    "float gray",
                    "float gray, float a"
                ],
                "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
            },
            "properties": [
                {
                    "name": "r",
                    "type": "float",
                    "desc": "Red component (0.0-1.0)"
                },
                {
                    "name": "g",
                    "type": "float",
                    "desc": "Green component (0.0-1.0)"
                },
                {
                    "name": "b",
                    "type": "float",
                    "desc": "Blue component (0.0-1.0)"
                },
                {
                    "name": "a",
                    "type": "float",
                    "desc": "Alpha component (0.0-1.0)"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Color&",
                    "signatures": [
                        "float r, float g, float b",
                        "float r, float g, float b, float a",
                        "float gray"
                    ],
                    "desc": "Set color components",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "toHex",
                    "return": "uint32_t",
                    "signatures": [
                        "",
                        "bool includeAlpha"
                    ],
                    "desc": "Convert to hex value",
                    "snippet": "toHex()"
                },
                {
                    "name": "lerp",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in OKLab space",
                    "snippet": "lerp(${1:target}, ${2:t})"
                },
                {
                    "name": "lerpRGB",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in RGB space",
                    "snippet": "lerpRGB(${1:target}, ${2:t})"
                },
                {
                    "name": "clamped",
                    "return": "Color",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get clamped copy (0.0-1.0)",
                    "snippet": "clamped()"
                },
                {
                    "name": "toLinear",
                    "return": "ColorLinear",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to linear RGB color space",
                    "snippet": "toLinear()"
                },
                {
                    "name": "toHSB",
                    "return": "ColorHSB",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "toHSB()"
                },
                {
                    "name": "toOKLab",
                    "return": "ColorOKLab",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to OKLab (perceptually uniform)",
                    "snippet": "toOKLab()"
                },
                {
                    "name": "toOKLCH",
                    "return": "ColorOKLCH",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to OKLCH (L: 0-1, C: 0-0.4, H: 0-1)",
                    "snippet": "toOKLCH()"
                },
                {
                    "name": "lerpLinear",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in linear RGB space",
                    "snippet": "lerpLinear(${1:target}, ${2:t})"
                },
                {
                    "name": "lerpHSB",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in HSB space",
                    "snippet": "lerpHSB(${1:target}, ${2:t})"
                },
                {
                    "name": "lerpOKLab",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in OKLab space (perceptually uniform)",
                    "snippet": "lerpOKLab(${1:target}, ${2:t})"
                },
                {
                    "name": "lerpOKLCH",
                    "return": "Color",
                    "signatures": [
                        "Color target, float t"
                    ],
                    "desc": "Interpolate in OKLCH space (shortest hue path)",
                    "snippet": "lerpOKLCH(${1:target}, ${2:t})"
                }
            ],
            "static_methods": [
                {
                    "name": "Color_fromHex",
                    "return": "Color",
                    "signatures": [
                        "uint hex",
                        "uint hex, bool hasAlpha"
                    ],
                    "desc": "Create from hex value",
                    "snippet": "Color_fromHex(${1:0xRRGGBB})"
                },
                {
                    "name": "Color_fromHSB",
                    "return": "Color",
                    "signatures": [
                        "float h, float s, float b",
                        "float h, float s, float b, float a"
                    ],
                    "desc": "Create from HSB (H: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLab",
                    "return": "Color",
                    "signatures": [
                        "float L, float a, float b",
                        "float L, float a, float b, float alpha"
                    ],
                    "desc": "Create from OKLab (L: 0-1, a: ~-0.4-0.4, b: ~-0.4-0.4)",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "return": "Color",
                    "signatures": [
                        "float L, float C, float H",
                        "float L, float C, float H, float a"
                    ],
                    "desc": "Create from OKLCH (L: 0-1, C: 0-0.4, H: 0-1)",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromLinear",
                    "return": "Color",
                    "signatures": [
                        "float r, float g, float b",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Create from linear RGB",
                    "snippet": "Color_fromLinear(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color_fromBytes",
                    "return": "Color",
                    "signatures": [
                        "int r, int g, int b",
                        "int r, int g, int b, int a"
                    ],
                    "desc": "Create from 0-255 values",
                    "snippet": "Color_fromBytes(${1:r}, ${2:g}, ${3:b})"
                }
            ]
        },
        {
            "name": "Rect",
            "desc": "Rectangle (x, y, width, height)",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y, float width, float height"
                ],
                "snippet": "Rect(${1:x}, ${2:y}, ${3:width}, ${4:height})"
            },
            "properties": [
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X position"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y position"
                },
                {
                    "name": "width",
                    "type": "float",
                    "desc": "Width"
                },
                {
                    "name": "height",
                    "type": "float",
                    "desc": "Height"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Rect&",
                    "signatures": [
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Set rectangle bounds",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "getRight",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get right edge (x + width)",
                    "snippet": "getRight()"
                },
                {
                    "name": "getBottom",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get bottom edge (y + height)",
                    "snippet": "getBottom()"
                },
                {
                    "name": "getCenterX",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get center X",
                    "snippet": "getCenterX()"
                },
                {
                    "name": "getCenterY",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get center Y",
                    "snippet": "getCenterY()"
                },
                {
                    "name": "contains",
                    "return": "bool",
                    "signatures": [
                        "float px, float py"
                    ],
                    "desc": "Check if point is inside",
                    "snippet": "contains(${1:px}, ${2:py})"
                },
                {
                    "name": "intersects",
                    "return": "bool",
                    "signatures": [
                        "Rect other"
                    ],
                    "desc": "Check if intersects with another rect",
                    "snippet": "intersects(${1:other})"
                }
            ]
        },
        {
            "name": "Mat4",
            "desc": "4x4 matrix for 3D transformations",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Mat4()"
            },
            "methods": [
                {
                    "name": "transposed",
                    "return": "Mat4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get transposed matrix",
                    "snippet": "transposed()"
                },
                {
                    "name": "inverted",
                    "return": "Mat4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get inverse matrix",
                    "snippet": "inverted()"
                }
            ]
        },
        {
            "name": "Quaternion",
            "desc": "Unit quaternion for 3D rotations",
            "constructor": {
                "signatures": [
                    "",
                    "float w, float x, float y, float z"
                ],
                "snippet": "Quaternion()"
            },
            "properties": [
                {
                    "name": "w",
                    "type": "float",
                    "desc": "W component"
                },
                {
                    "name": "x",
                    "type": "float",
                    "desc": "X component"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Y component"
                },
                {
                    "name": "z",
                    "type": "float",
                    "desc": "Z component"
                }
            ],
            "methods": [
                {
                    "name": "rotate",
                    "return": "Vec3",
                    "signatures": [
                        "Vec3 v"
                    ],
                    "desc": "Rotate a vector",
                    "snippet": "rotate(${1:v})"
                },
                {
                    "name": "toEuler",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to Euler angles",
                    "snippet": "toEuler()"
                },
                {
                    "name": "toMatrix",
                    "return": "Mat4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to rotation matrix",
                    "snippet": "toMatrix()"
                },
                {
                    "name": "normalized",
                    "return": "Quaternion",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized quaternion",
                    "snippet": "normalized()"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get quaternion length",
                    "snippet": "length()"
                },
                {
                    "name": "conjugate",
                    "return": "Quaternion",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get conjugate quaternion",
                    "snippet": "conjugate()"
                }
            ]
        },
        {
            "name": "Pixels",
            "desc": "Pixel buffer for image manipulation",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Pixels()"
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height",
                        "int width, int height, int channels"
                    ],
                    "desc": "Allocate pixel buffer",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "getColor",
                    "return": "Color",
                    "signatures": [
                        "int x, int y"
                    ],
                    "desc": "Get pixel color at position",
                    "snippet": "getColor(${1:x}, ${2:y})"
                },
                {
                    "name": "setColor",
                    "return": "void",
                    "signatures": [
                        "int x, int y, Color color"
                    ],
                    "desc": "Set pixel color at position",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})"
                },
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Load image from file",
                    "snippet": "load(${1:\"path\"})"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Save image to file",
                    "snippet": "save(${1:\"path\"})"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release pixel buffer",
                    "snippet": "clear()"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of channels",
                    "snippet": "getChannels()"
                },
                {
                    "name": "getTotalBytes",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get total byte size",
                    "snippet": "getTotalBytes()"
                },
                {
                    "name": "getData",
                    "return": "uint8_t*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get raw data pointer",
                    "snippet": "getData()"
                },
                {
                    "name": "loadFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const uint8_t* buffer, int len"
                    ],
                    "desc": "Load image from memory",
                    "snippet": "loadFromMemory(${1:buffer}, ${2:len})"
                },
                {
                    "name": "setFromPixels",
                    "return": "void",
                    "signatures": [
                        "const uint8_t* data, int width, int height, int channels"
                    ],
                    "desc": "Copy from external pixel data",
                    "snippet": "setFromPixels(${1:data}, ${2:width}, ${3:height}, ${4:channels})"
                },
                {
                    "name": "copyTo",
                    "return": "void",
                    "signatures": [
                        "uint8_t* dst"
                    ],
                    "desc": "Copy to external buffer",
                    "snippet": "copyTo(${1:dst})"
                }
            ]
        },
        {
            "name": "Image",
            "desc": "Image with CPU pixels and GPU texture",
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Load image from file",
                    "snippet": "load(${1:\"path\"})"
                },
                {
                    "name": "loadFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const uint8_t* buffer, int len"
                    ],
                    "desc": "Load image from memory",
                    "snippet": "loadFromMemory(${1:buffer}, ${2:len})"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Save image to file",
                    "snippet": "save(${1:\"path\"})"
                },
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height",
                        "int width, int height, int channels"
                    ],
                    "desc": "Allocate empty image for dynamic updates",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release image resources",
                    "snippet": "clear()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of channels",
                    "snippet": "getChannels()"
                },
                {
                    "name": "getPixels",
                    "return": "Pixels&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get pixels reference for direct manipulation",
                    "snippet": "getPixels()"
                },
                {
                    "name": "getPixelsData",
                    "return": "uint8_t*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get raw pixel data pointer",
                    "snippet": "getPixelsData()"
                },
                {
                    "name": "getColor",
                    "return": "Color",
                    "signatures": [
                        "int x, int y"
                    ],
                    "desc": "Get pixel color at position",
                    "snippet": "getColor(${1:x}, ${2:y})"
                },
                {
                    "name": "setColor",
                    "return": "void",
                    "signatures": [
                        "int x, int y, Color color"
                    ],
                    "desc": "Set pixel color at position (marks image as dirty)",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Apply pixel changes to GPU texture",
                    "snippet": "update()"
                },
                {
                    "name": "setDirty",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mark image as needing update",
                    "snippet": "setDirty()"
                },
                {
                    "name": "getTexture",
                    "return": "Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get internal texture",
                    "snippet": "getTexture()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "",
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw image",
                    "snippet": "draw(${1:x}, ${2:y})"
                }
            ],
            "static_methods": [
                {
                    "name": "createImage",
                    "return": "Image@",
                    "signatures": [
                        ""
                    ],
                    "desc": "Create a new Image instance",
                    "snippet": "createImage()"
                }
            ]
        },
        {
            "name": "Texture",
            "desc": "GPU texture for rendering",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Texture()"
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height",
                        "Pixels pixels"
                    ],
                    "desc": "Allocate texture",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "loadData",
                    "return": "void",
                    "signatures": [
                        "Pixels pixels"
                    ],
                    "desc": "Load pixel data to texture",
                    "snippet": "loadData(${1:pixels})"
                },
                {
                    "name": "bind",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Bind texture for rendering",
                    "snippet": "bind()"
                },
                {
                    "name": "unbind",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Unbind texture",
                    "snippet": "unbind()"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw texture",
                    "snippet": "draw(${1:x}, ${2:y})"
                },
                {
                    "name": "drawSubsection",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float w, float h, float sx, float sy, float sw, float sh"
                    ],
                    "desc": "Draw subsection of texture",
                    "snippet": "drawSubsection(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:sx}, ${6:sy}, ${7:sw}, ${8:sh})"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release texture resources",
                    "snippet": "clear()"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of channels",
                    "snippet": "getChannels()"
                },
                {
                    "name": "getUsage",
                    "return": "TextureUsage",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get texture usage mode",
                    "snippet": "getUsage()"
                },
                {
                    "name": "getSampleCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get MSAA sample count",
                    "snippet": "getSampleCount()"
                },
                {
                    "name": "setMinFilter",
                    "return": "void",
                    "signatures": [
                        "TextureFilter filter"
                    ],
                    "desc": "Set minification filter",
                    "snippet": "setMinFilter(${1:TextureFilter::Linear})"
                },
                {
                    "name": "setMagFilter",
                    "return": "void",
                    "signatures": [
                        "TextureFilter filter"
                    ],
                    "desc": "Set magnification filter",
                    "snippet": "setMagFilter(${1:TextureFilter::Linear})"
                },
                {
                    "name": "setFilter",
                    "return": "void",
                    "signatures": [
                        "TextureFilter filter"
                    ],
                    "desc": "Set both min and mag filters",
                    "snippet": "setFilter(${1:TextureFilter::Linear})"
                },
                {
                    "name": "getMinFilter",
                    "return": "TextureFilter",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get minification filter",
                    "snippet": "getMinFilter()"
                },
                {
                    "name": "getMagFilter",
                    "return": "TextureFilter",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get magnification filter",
                    "snippet": "getMagFilter()"
                },
                {
                    "name": "setWrapU",
                    "return": "void",
                    "signatures": [
                        "TextureWrap wrap"
                    ],
                    "desc": "Set horizontal wrap mode",
                    "snippet": "setWrapU(${1:TextureWrap::ClampToEdge})"
                },
                {
                    "name": "setWrapV",
                    "return": "void",
                    "signatures": [
                        "TextureWrap wrap"
                    ],
                    "desc": "Set vertical wrap mode",
                    "snippet": "setWrapV(${1:TextureWrap::ClampToEdge})"
                },
                {
                    "name": "setWrap",
                    "return": "void",
                    "signatures": [
                        "TextureWrap wrap"
                    ],
                    "desc": "Set both wrap modes",
                    "snippet": "setWrap(${1:TextureWrap::ClampToEdge})"
                },
                {
                    "name": "getWrapU",
                    "return": "TextureWrap",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get horizontal wrap mode",
                    "snippet": "getWrapU()"
                },
                {
                    "name": "getWrapV",
                    "return": "TextureWrap",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertical wrap mode",
                    "snippet": "getWrapV()"
                }
            ]
        },
        {
            "name": "Fbo",
            "desc": "Framebuffer object for offscreen rendering",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Fbo()"
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height"
                    ],
                    "desc": "Allocate framebuffer",
                    "snippet": "allocate(${1:width}, ${2:height})"
                },
                {
                    "name": "begin",
                    "return": "void",
                    "signatures": [
                        "",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Begin rendering to FBO",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "End rendering to FBO",
                    "snippet": "end()"
                },
                {
                    "name": "getTexture",
                    "return": "Texture",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get FBO texture",
                    "snippet": "getTexture()"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height",
                    "snippet": "getHeight()"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated",
                    "snippet": "isAllocated()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw FBO contents",
                    "snippet": "draw(${1:x}, ${2:y})"
                },
                {
                    "name": "getSampleCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get MSAA sample count",
                    "snippet": "getSampleCount()"
                },
                {
                    "name": "isActive",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if currently rendering to FBO",
                    "snippet": "isActive()"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release FBO resources",
                    "snippet": "clear()"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Save FBO contents to file",
                    "snippet": "save(${1:\"path\"})"
                },
                {
                    "name": "copyTo",
                    "return": "bool",
                    "signatures": [
                        "Image image"
                    ],
                    "desc": "Copy FBO contents to Image",
                    "snippet": "copyTo(${1:image})"
                }
            ]
        },
        {
            "name": "Path",
            "desc": "Path/Polyline for lines and curves",
            "constructor": {
                "signatures": [
                    "",
                    "vector<Vec2> verts",
                    "vector<Vec3> verts"
                ],
                "snippet": "Path()"
            },
            "methods": [
                {
                    "name": "addVertex",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float z",
                        "Vec2 v",
                        "Vec3 v"
                    ],
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertices",
                    "return": "Path@",
                    "signatures": [
                        "array<Vec3>@ verts",
                        "array<Vec2>@ verts"
                    ],
                    "desc": "Add multiple vertices",
                    "snippet": "addVertices(${1:verts})"
                },
                {
                    "name": "getVertices",
                    "return": "vector<Vec3>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all vertices",
                    "snippet": "getVertices()"
                },
                {
                    "name": "size",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertex count",
                    "snippet": "size()"
                },
                {
                    "name": "empty",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if polyline is empty",
                    "snippet": "empty()"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear all vertices",
                    "snippet": "clear()"
                },
                {
                    "name": "lineTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float z",
                        "Vec2 p",
                        "Vec3 p"
                    ],
                    "desc": "Add line segment to point",
                    "snippet": "lineTo(${1:x}, ${2:y})"
                },
                {
                    "name": "bezierTo",
                    "return": "void",
                    "signatures": [
                        "float cx1, float cy1, float cx2, float cy2, float x, float y",
                        "Vec2 cp1, Vec2 cp2, Vec2 to",
                        "Vec3 cp1, Vec3 cp2, Vec3 to"
                    ],
                    "desc": "Add cubic bezier curve",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})"
                },
                {
                    "name": "quadBezierTo",
                    "return": "void",
                    "signatures": [
                        "float cx, float cy, float x, float y",
                        "Vec2 cp, Vec2 to",
                        "Vec3 cp, Vec3 to"
                    ],
                    "desc": "Add quadratic bezier curve",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})"
                },
                {
                    "name": "curveTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "Vec2 to",
                        "Vec3 to"
                    ],
                    "desc": "Add Catmull-Rom curve segment",
                    "snippet": "curveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "arc",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float radiusX, float radiusY, float angleBegin, float angleEnd",
                        "Vec2 center, float radiusX, float radiusY, float angleBegin, float angleEnd"
                    ],
                    "desc": "Add an arc",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:radiusX}, ${4:radiusY}, ${5:0}, ${6:360})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the path",
                    "snippet": "close()"
                },
                {
                    "name": "setClosed",
                    "return": "void",
                    "signatures": [
                        "bool closed"
                    ],
                    "desc": "Set closed state",
                    "snippet": "setClosed(${1:true})"
                },
                {
                    "name": "isClosed",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if path is closed",
                    "snippet": "isClosed()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the polyline",
                    "snippet": "draw()"
                },
                {
                    "name": "getBounds",
                    "return": "Rect",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get bounding box as Rect",
                    "snippet": "getBounds()"
                },
                {
                    "name": "getPerimeter",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get total path length",
                    "snippet": "getPerimeter()"
                }
            ]
        },
        {
            "name": "Mesh",
            "desc": "3D mesh with vertices, colors, normals, indices",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Mesh()"
            },
            "methods": [
                {
                    "name": "setMode",
                    "return": "void",
                    "signatures": [
                        "PrimitiveMode mode"
                    ],
                    "desc": "Set primitive mode (Triangles, Lines, Points, etc.)",
                    "snippet": "setMode(${1:PrimitiveMode::Triangles})"
                },
                {
                    "name": "getMode",
                    "return": "PrimitiveMode",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current primitive mode",
                    "snippet": "getMode()"
                },
                {
                    "name": "addVertex",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float z",
                        "Vec2 v",
                        "Vec3 v"
                    ],
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "addVertices",
                    "return": "Mesh@",
                    "signatures": [
                        "array<Vec3>@ verts",
                        "array<Vec2>@ verts"
                    ],
                    "desc": "Add multiple vertices",
                    "snippet": "addVertices(${1:verts})"
                },
                {
                    "name": "getVertices",
                    "return": "vector<Vec3>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all vertices",
                    "snippet": "getVertices()"
                },
                {
                    "name": "getNumVertices",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertex count",
                    "snippet": "getNumVertices()"
                },
                {
                    "name": "addColor",
                    "return": "void",
                    "signatures": [
                        "Color c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Add a vertex color",
                    "snippet": "addColor(${1:color})"
                },
                {
                    "name": "addColors",
                    "return": "Mesh@",
                    "signatures": [
                        "array<Color>@ cols"
                    ],
                    "desc": "Add multiple vertex colors",
                    "snippet": "addColors(${1:colors})"
                },
                {
                    "name": "getColors",
                    "return": "vector<Color>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all vertex colors",
                    "snippet": "getColors()"
                },
                {
                    "name": "getNumColors",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertex color count",
                    "snippet": "getNumColors()"
                },
                {
                    "name": "hasColors",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has vertex colors",
                    "snippet": "hasColors()"
                },
                {
                    "name": "addIndex",
                    "return": "void",
                    "signatures": [
                        "int index"
                    ],
                    "desc": "Add an index",
                    "snippet": "addIndex(${1:index})"
                },
                {
                    "name": "addIndices",
                    "return": "Mesh@",
                    "signatures": [
                        "array<uint>@ indices"
                    ],
                    "desc": "Add multiple indices",
                    "snippet": "addIndices(${1:indices})"
                },
                {
                    "name": "addTriangle",
                    "return": "void",
                    "signatures": [
                        "int i0, int i1, int i2"
                    ],
                    "desc": "Add a triangle (3 indices)",
                    "snippet": "addTriangle(${1:i0}, ${2:i1}, ${3:i2})"
                },
                {
                    "name": "getIndices",
                    "return": "vector<int>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all indices",
                    "snippet": "getIndices()"
                },
                {
                    "name": "getNumIndices",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get index count",
                    "snippet": "getNumIndices()"
                },
                {
                    "name": "hasIndices",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has indices",
                    "snippet": "hasIndices()"
                },
                {
                    "name": "addNormal",
                    "return": "void",
                    "signatures": [
                        "float nx, float ny, float nz",
                        "Vec3 n"
                    ],
                    "desc": "Add a normal vector",
                    "snippet": "addNormal(${1:nx}, ${2:ny}, ${3:nz})"
                },
                {
                    "name": "addNormals",
                    "return": "Mesh@",
                    "signatures": [
                        "array<Vec3>@ normals"
                    ],
                    "desc": "Add multiple normals",
                    "snippet": "addNormals(${1:normals})"
                },
                {
                    "name": "setNormal",
                    "return": "void",
                    "signatures": [
                        "int index, Vec3 n"
                    ],
                    "desc": "Set normal at index",
                    "snippet": "setNormal(${1:index}, ${2:normal})"
                },
                {
                    "name": "getNormal",
                    "return": "Vec3",
                    "signatures": [
                        "int index"
                    ],
                    "desc": "Get normal at index",
                    "snippet": "getNormal(${1:index})"
                },
                {
                    "name": "getNormals",
                    "return": "vector<Vec3>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all normals",
                    "snippet": "getNormals()"
                },
                {
                    "name": "getNumNormals",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normal count",
                    "snippet": "getNumNormals()"
                },
                {
                    "name": "hasNormals",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has normals",
                    "snippet": "hasNormals()"
                },
                {
                    "name": "addTexCoord",
                    "return": "void",
                    "signatures": [
                        "float u, float v",
                        "Vec2 t"
                    ],
                    "desc": "Add a texture coordinate",
                    "snippet": "addTexCoord(${1:u}, ${2:v})"
                },
                {
                    "name": "getTexCoords",
                    "return": "vector<Vec2>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all texture coordinates",
                    "snippet": "getTexCoords()"
                },
                {
                    "name": "getNumTexCoords",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get texture coordinate count",
                    "snippet": "getNumTexCoords()"
                },
                {
                    "name": "hasTexCoords",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has texture coordinates",
                    "snippet": "hasTexCoords()"
                },
                {
                    "name": "hasValidTexCoords",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if texture coordinates match vertex count",
                    "snippet": "hasValidTexCoords()"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear all mesh data",
                    "snippet": "clear()"
                },
                {
                    "name": "clearVertices",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear vertices only",
                    "snippet": "clearVertices()"
                },
                {
                    "name": "clearColors",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear colors only",
                    "snippet": "clearColors()"
                },
                {
                    "name": "clearIndices",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear indices only",
                    "snippet": "clearIndices()"
                },
                {
                    "name": "clearNormals",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear normals only",
                    "snippet": "clearNormals()"
                },
                {
                    "name": "clearTexCoords",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear texture coordinates only",
                    "snippet": "clearTexCoords()"
                },
                {
                    "name": "translate",
                    "return": "Mesh@",
                    "signatures": [
                        "float x, float y, float z",
                        "Vec3 offset"
                    ],
                    "desc": "Translate all vertices",
                    "snippet": "translate(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "rotateX",
                    "return": "Mesh@",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate mesh around X axis",
                    "snippet": "rotateX(${1:radians})"
                },
                {
                    "name": "rotateY",
                    "return": "Mesh@",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate mesh around Y axis",
                    "snippet": "rotateY(${1:radians})"
                },
                {
                    "name": "rotateZ",
                    "return": "Mesh@",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate mesh around Z axis",
                    "snippet": "rotateZ(${1:radians})"
                },
                {
                    "name": "scale",
                    "return": "Mesh@",
                    "signatures": [
                        "float s",
                        "float x, float y, float z"
                    ],
                    "desc": "Scale mesh",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "transform",
                    "return": "void",
                    "signatures": [
                        "Mat4 matrix"
                    ],
                    "desc": "Apply transformation matrix",
                    "snippet": "transform(${1:matrix})"
                },
                {
                    "name": "append",
                    "return": "void",
                    "signatures": [
                        "Mesh other"
                    ],
                    "desc": "Append another mesh",
                    "snippet": "append(${1:other})"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "",
                        "Texture texture",
                        "Image image"
                    ],
                    "desc": "Draw the mesh",
                    "snippet": "draw()"
                },
                {
                    "name": "drawWireframe",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw mesh as wireframe",
                    "snippet": "drawWireframe()"
                }
            ]
        },
        {
            "name": "Sound",
            "desc": "Audio playback",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Sound()"
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Load audio file",
                    "snippet": "load(${1:\"path\"})"
                },
                {
                    "name": "play",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Play audio",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop audio",
                    "snippet": "stop()"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "isPlaying",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if playing",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "setVolume",
                    "return": "void",
                    "signatures": [
                        "float volume"
                    ],
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "setVolume(${1:1.0})"
                },
                {
                    "name": "setLoop",
                    "return": "void",
                    "signatures": [
                        "bool loop"
                    ],
                    "desc": "Set loop mode",
                    "snippet": "setLoop(${1:true})"
                },
                {
                    "name": "isLoop",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loop mode is enabled",
                    "snippet": "isLoop()"
                },
                {
                    "name": "setPan",
                    "return": "void",
                    "signatures": [
                        "float pan"
                    ],
                    "desc": "Set panning (-1.0=left, 0.0=center, 1.0=right)",
                    "snippet": "setPan(${1:0.0})"
                },
                {
                    "name": "getPan",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current panning",
                    "snippet": "getPan()"
                },
                {
                    "name": "setSpeed",
                    "return": "void",
                    "signatures": [
                        "float speed"
                    ],
                    "desc": "Set playback speed (1.0=normal)",
                    "snippet": "setSpeed(${1:1.0})"
                },
                {
                    "name": "getSpeed",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current playback speed",
                    "snippet": "getSpeed()"
                },
                {
                    "name": "pause",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Pause playback",
                    "snippet": "pause()"
                },
                {
                    "name": "resume",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Resume playback",
                    "snippet": "resume()"
                },
                {
                    "name": "isPaused",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if paused",
                    "snippet": "isPaused()"
                },
                {
                    "name": "getPosition",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get playback position in seconds",
                    "snippet": "getPosition()"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get total duration in seconds",
                    "snippet": "getDuration()"
                }
            ]
        },
        {
            "name": "Font",
            "desc": "TrueType font for text rendering",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Font()"
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path, int size"
                    ],
                    "desc": "Load font file",
                    "snippet": "load(${1:\"path\"}, ${2:24})"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "drawString",
                    "return": "void",
                    "signatures": [
                        "string text, float x, float y"
                    ],
                    "desc": "Draw text",
                    "snippet": "drawString(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "getWidth",
                    "return": "float",
                    "signatures": [
                        "string text"
                    ],
                    "desc": "Get text width",
                    "snippet": "getWidth(${1:\"text\"})"
                },
                {
                    "name": "getHeight",
                    "return": "float",
                    "signatures": [
                        "string text"
                    ],
                    "desc": "Get text height",
                    "snippet": "getHeight(${1:\"text\"})"
                },
                {
                    "name": "getLineHeight",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get line height",
                    "snippet": "getLineHeight()"
                },
                {
                    "name": "getSize",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get font size",
                    "snippet": "getSize()"
                },
                {
                    "name": "clearAtlas",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear font atlas (GPU memory freed, glyphs re-rasterized on next draw)",
                    "snippet": "clearAtlas()"
                },
                {
                    "name": "getMemoryUsage",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get atlas memory usage in bytes",
                    "snippet": "getMemoryUsage()"
                },
                {
                    "name": "getLoadedGlyphCount",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of loaded glyphs",
                    "snippet": "getLoadedGlyphCount()"
                },
                {
                    "name": "getAtlasCount",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of atlas pages",
                    "snippet": "getAtlasCount()"
                }
            ]
        },
        {
            "name": "FileWriter",
            "desc": "Streaming file writer with immediate flush",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "FileWriter()"
            },
            "methods": [
                {
                    "name": "open",
                    "return": "bool",
                    "signatures": [
                        "string path",
                        "string path, bool append"
                    ],
                    "desc": "Open file for writing",
                    "snippet": "open(${1:\"path\"})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close file",
                    "snippet": "close()"
                },
                {
                    "name": "isOpen",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if file is open",
                    "snippet": "isOpen()"
                },
                {
                    "name": "write",
                    "return": "FileWriter&",
                    "signatures": [
                        "string text",
                        "char c",
                        "void* data, size_t size"
                    ],
                    "desc": "Write data to file",
                    "snippet": "write(${1:text})"
                },
                {
                    "name": "writeLine",
                    "return": "FileWriter&",
                    "signatures": [
                        "",
                        "string text"
                    ],
                    "desc": "Write line with newline",
                    "snippet": "writeLine(${1:text})"
                },
                {
                    "name": "flush",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Flush buffer to disk",
                    "snippet": "flush()"
                }
            ]
        },
        {
            "name": "FileReader",
            "desc": "Streaming file reader for large files",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "FileReader()"
            },
            "methods": [
                {
                    "name": "open",
                    "return": "bool",
                    "signatures": [
                        "string path"
                    ],
                    "desc": "Open file for reading",
                    "snippet": "open(${1:\"path\"})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close file",
                    "snippet": "close()"
                },
                {
                    "name": "isOpen",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if file is open",
                    "snippet": "isOpen()"
                },
                {
                    "name": "eof",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if at end of file",
                    "snippet": "eof()"
                },
                {
                    "name": "readLine",
                    "return": "string",
                    "signatures": [
                        ""
                    ],
                    "desc": "Read one line",
                    "snippet": "readLine()"
                },
                {
                    "name": "readChar",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Read one character (-1 at EOF)",
                    "snippet": "readChar()"
                },
                {
                    "name": "read",
                    "return": "size_t",
                    "signatures": [
                        "void* buffer, size_t size"
                    ],
                    "desc": "Read binary data",
                    "snippet": "read(${1:buffer}, ${2:size})"
                },
                {
                    "name": "seek",
                    "return": "void",
                    "signatures": [
                        "size_t pos"
                    ],
                    "desc": "Seek to position",
                    "snippet": "seek(${1:pos})"
                },
                {
                    "name": "tell",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current position",
                    "snippet": "tell()"
                },
                {
                    "name": "remaining",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get remaining bytes",
                    "snippet": "remaining()"
                }
            ]
        },
        {
            "name": "Light",
            "desc": "Light source for 3D PBR rendering (directional, point, or spot)",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Light()"
            },
            "methods": [
                {
                    "name": "setDirectional",
                    "return": "void",
                    "signatures": [
                        "const Vec3& direction",
                        "float dx, float dy, float dz"
                    ],
                    "desc": "Set as directional light",
                    "snippet": "setDirectional(${1:Vec3(0, -1, 0)})"
                },
                {
                    "name": "setPoint",
                    "return": "void",
                    "signatures": [
                        "const Vec3& position",
                        "float x, float y, float z"
                    ],
                    "desc": "Set as point light",
                    "snippet": "setPoint(${1:Vec3(0, 100, 0)})"
                },
                {
                    "name": "setSpot",
                    "return": "void",
                    "signatures": [
                        "const Vec3& position, const Vec3& direction, float innerHalfAngle, float outerHalfAngle",
                        "float px, float py, float pz, float dx, float dy, float dz, float innerHalfAngle, float outerHalfAngle"
                    ],
                    "desc": "Set as spot light with cone angles",
                    "snippet": "setSpot(${1:pos}, ${2:dir}, ${3:0.0f}, ${4:0.45f})"
                },
                {
                    "name": "setAmbient",
                    "return": "void",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set ambient light color",
                    "snippet": "setAmbient(${1:0.1f}, ${2:0.1f}, ${3:0.1f})"
                },
                {
                    "name": "setDiffuse",
                    "return": "void",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set diffuse (main) light color",
                    "snippet": "setDiffuse(${1:1.0f}, ${2:1.0f}, ${3:1.0f})"
                },
                {
                    "name": "setSpecular",
                    "return": "void",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set specular light color",
                    "snippet": "setSpecular(${1:1.0f}, ${2:1.0f}, ${3:1.0f})"
                },
                {
                    "name": "setIntensity",
                    "return": "void",
                    "signatures": [
                        "float intensity"
                    ],
                    "desc": "Set light intensity multiplier",
                    "snippet": "setIntensity(${1:1.0f})"
                },
                {
                    "name": "setAttenuation",
                    "return": "void",
                    "signatures": [
                        "float constant, float linear, float quadratic"
                    ],
                    "desc": "Set distance attenuation factors",
                    "snippet": "setAttenuation(${1:1.0f}, ${2:0.0f}, ${3:0.0f})"
                },
                {
                    "name": "setProjectionTexture",
                    "return": "void",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set texture for projector-style light (gobo)",
                    "snippet": "setProjectionTexture(${1:&texture})"
                },
                {
                    "name": "setLensShift",
                    "return": "void",
                    "signatures": [
                        "float sx, float sy"
                    ],
                    "desc": "Set projector lens shift (-1 to 1, normalized)",
                    "snippet": "setLensShift(${1:0.0f}, ${2:1.0f})"
                },
                {
                    "name": "setProjectorAspect",
                    "return": "void",
                    "signatures": [
                        "float aspect"
                    ],
                    "desc": "Set projector aspect ratio",
                    "snippet": "setProjectorAspect(${1:16.0f / 9.0f})"
                },
                {
                    "name": "setIesProfile",
                    "return": "void",
                    "signatures": [
                        "const IesProfile* ies"
                    ],
                    "desc": "Attach IES photometric profile for angular intensity",
                    "snippet": "setIesProfile(${1:&iesProfile})"
                },
                {
                    "name": "enableShadow",
                    "return": "void",
                    "signatures": [
                        "int resolution"
                    ],
                    "desc": "Enable shadow casting (depth map at given resolution)",
                    "snippet": "enableShadow(${1:1024})"
                },
                {
                    "name": "disableShadow",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disable shadow casting",
                    "snippet": "disableShadow()"
                },
                {
                    "name": "enable",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Enable this light",
                    "snippet": "enable()"
                },
                {
                    "name": "disable",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disable this light",
                    "snippet": "disable()"
                },
                {
                    "name": "setShadowBias",
                    "return": "void",
                    "signatures": [
                        "float bias"
                    ],
                    "desc": "Set shadow depth bias in world units",
                    "snippet": "setShadowBias(${1:1.0f})"
                },
                {
                    "name": "getType",
                    "return": "LightType",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light type (Directional, Point, or Spot)",
                    "snippet": "getType()"
                },
                {
                    "name": "getPosition",
                    "return": "const Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light position",
                    "snippet": "getPosition()"
                },
                {
                    "name": "getDirection",
                    "return": "const Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light direction",
                    "snippet": "getDirection()"
                },
                {
                    "name": "getIntensity",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light intensity",
                    "snippet": "getIntensity()"
                },
                {
                    "name": "getAmbient",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get ambient light color",
                    "snippet": "getAmbient()"
                },
                {
                    "name": "getDiffuse",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get diffuse (main) light color",
                    "snippet": "getDiffuse()"
                },
                {
                    "name": "getSpecular",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get specular light color",
                    "snippet": "getSpecular()"
                },
                {
                    "name": "getConstantAttenuation",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get constant attenuation factor",
                    "snippet": "getConstantAttenuation()"
                },
                {
                    "name": "getLinearAttenuation",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get linear attenuation factor",
                    "snippet": "getLinearAttenuation()"
                },
                {
                    "name": "getQuadraticAttenuation",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get quadratic attenuation factor",
                    "snippet": "getQuadraticAttenuation()"
                },
                {
                    "name": "isEnabled",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if light is enabled",
                    "snippet": "isEnabled()"
                },
                {
                    "name": "isShadowEnabled",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if shadow casting is enabled",
                    "snippet": "isShadowEnabled()"
                },
                {
                    "name": "getShadowResolution",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get shadow map resolution",
                    "snippet": "getShadowResolution()"
                },
                {
                    "name": "getShadowBias",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get shadow depth bias",
                    "snippet": "getShadowBias()"
                },
                {
                    "name": "getSpotInnerCos",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get spot light inner cone cosine",
                    "snippet": "getSpotInnerCos()"
                },
                {
                    "name": "getSpotOuterCos",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get spot light outer cone cosine",
                    "snippet": "getSpotOuterCos()"
                },
                {
                    "name": "getProjectionTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projection texture (gobo)",
                    "snippet": "getProjectionTexture()"
                },
                {
                    "name": "hasProjectionTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a projection texture is set",
                    "snippet": "hasProjectionTexture()"
                },
                {
                    "name": "getLensShiftX",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projector horizontal lens shift",
                    "snippet": "getLensShiftX()"
                },
                {
                    "name": "getLensShiftY",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projector vertical lens shift",
                    "snippet": "getLensShiftY()"
                },
                {
                    "name": "getProjectorAspect",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projector aspect ratio",
                    "snippet": "getProjectorAspect()"
                },
                {
                    "name": "getIesProfile",
                    "return": "const IesProfile*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get attached IES photometric profile",
                    "snippet": "getIesProfile()"
                },
                {
                    "name": "hasIesProfile",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if an IES profile is attached",
                    "snippet": "hasIesProfile()"
                }
            ]
        },
        {
            "name": "Material",
            "desc": "PBR material (metallic-roughness workflow, glTF 2.0 compatible)",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Material()"
            },
            "methods": [
                {
                    "name": "setBaseColor",
                    "return": "Material&",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set base color (albedo)",
                    "snippet": "setBaseColor(${1:0.8f}, ${2:0.8f}, ${3:0.8f})"
                },
                {
                    "name": "setMetallic",
                    "return": "Material&",
                    "signatures": [
                        "float m"
                    ],
                    "desc": "Set metallic factor (0=dielectric, 1=metal)",
                    "snippet": "setMetallic(${1:0.0f})"
                },
                {
                    "name": "setRoughness",
                    "return": "Material&",
                    "signatures": [
                        "float r"
                    ],
                    "desc": "Set roughness factor (0=mirror, 1=matte)",
                    "snippet": "setRoughness(${1:0.5f})"
                },
                {
                    "name": "setEmissive",
                    "return": "Material&",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b"
                    ],
                    "desc": "Set emissive color",
                    "snippet": "setEmissive(${1:0.0f}, ${2:0.0f}, ${3:0.0f})"
                },
                {
                    "name": "setEmissiveStrength",
                    "return": "Material&",
                    "signatures": [
                        "float s"
                    ],
                    "desc": "Set emissive strength multiplier",
                    "snippet": "setEmissiveStrength(${1:1.0f})"
                },
                {
                    "name": "setAo",
                    "return": "Material&",
                    "signatures": [
                        "float ao"
                    ],
                    "desc": "Set ambient occlusion factor",
                    "snippet": "setAo(${1:1.0f})"
                },
                {
                    "name": "setNormalMap",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set normal map texture for bump mapping",
                    "snippet": "setNormalMap(${1:&normalTex})"
                },
                {
                    "name": "setBaseColorTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set base color (albedo) texture map",
                    "snippet": "setBaseColorTexture(${1:&tex})"
                },
                {
                    "name": "setMetallicRoughnessTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set metallic-roughness texture (glTF: G=roughness, B=metallic)",
                    "snippet": "setMetallicRoughnessTexture(${1:&tex})"
                },
                {
                    "name": "setEmissiveTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set emissive texture map",
                    "snippet": "setEmissiveTexture(${1:&tex})"
                },
                {
                    "name": "setOcclusionTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set occlusion texture map",
                    "snippet": "setOcclusionTexture(${1:&tex})"
                },
                {
                    "name": "getBaseColor",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get base color (albedo)",
                    "snippet": "getBaseColor()"
                },
                {
                    "name": "getMetallic",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get metallic factor",
                    "snippet": "getMetallic()"
                },
                {
                    "name": "getRoughness",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get roughness factor",
                    "snippet": "getRoughness()"
                },
                {
                    "name": "getAo",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get ambient occlusion factor",
                    "snippet": "getAo()"
                },
                {
                    "name": "getEmissive",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get emissive color",
                    "snippet": "getEmissive()"
                },
                {
                    "name": "getEmissiveStrength",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get emissive strength multiplier",
                    "snippet": "getEmissiveStrength()"
                },
                {
                    "name": "getNormalMap",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normal map texture",
                    "snippet": "getNormalMap()"
                },
                {
                    "name": "hasNormalMap",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a normal map is set",
                    "snippet": "hasNormalMap()"
                },
                {
                    "name": "getBaseColorTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get base color texture",
                    "snippet": "getBaseColorTexture()"
                },
                {
                    "name": "hasBaseColorTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a base color texture is set",
                    "snippet": "hasBaseColorTexture()"
                },
                {
                    "name": "getMetallicRoughnessTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get metallic-roughness texture",
                    "snippet": "getMetallicRoughnessTexture()"
                },
                {
                    "name": "hasMetallicRoughnessTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a metallic-roughness texture is set",
                    "snippet": "hasMetallicRoughnessTexture()"
                },
                {
                    "name": "getEmissiveTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get emissive texture",
                    "snippet": "getEmissiveTexture()"
                },
                {
                    "name": "hasEmissiveTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if an emissive texture is set",
                    "snippet": "hasEmissiveTexture()"
                },
                {
                    "name": "getOcclusionTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get occlusion texture",
                    "snippet": "getOcclusionTexture()"
                },
                {
                    "name": "hasOcclusionTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if an occlusion texture is set",
                    "snippet": "hasOcclusionTexture()"
                }
            ],
            "static_methods": [
                {
                    "name": "gold",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Gold material preset",
                    "snippet": "Material::gold()"
                },
                {
                    "name": "silver",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Silver material preset",
                    "snippet": "Material::silver()"
                },
                {
                    "name": "copper",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Copper material preset",
                    "snippet": "Material::copper()"
                },
                {
                    "name": "iron",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Iron material preset",
                    "snippet": "Material::iron()"
                },
                {
                    "name": "plastic",
                    "return": "Material",
                    "signatures": [
                        "const Color& baseColor, float roughness"
                    ],
                    "desc": "Plastic material preset",
                    "snippet": "Material::plastic(${1:Color(0.8f, 0.2f, 0.2f)})"
                },
                {
                    "name": "rubber",
                    "return": "Material",
                    "signatures": [
                        "const Color& baseColor"
                    ],
                    "desc": "Rubber material preset",
                    "snippet": "Material::rubber(${1:Color(0.1f, 0.1f, 0.1f)})"
                },
                {
                    "name": "bronze",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Bronze material preset",
                    "snippet": "Material::bronze()"
                },
                {
                    "name": "emerald",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Emerald material preset",
                    "snippet": "Material::emerald()"
                },
                {
                    "name": "ruby",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Ruby material preset",
                    "snippet": "Material::ruby()"
                },
                {
                    "name": "fromPhong",
                    "return": "Material",
                    "signatures": [
                        "const Color& diffuse, const Color& specular, float shininess, const Color& emissive"
                    ],
                    "desc": "Convert Phong material parameters to PBR (roughness from shininess, metallic estimated from specular luminance)",
                    "snippet": "Material::fromPhong(${1:diffuse}, ${2:specular}, ${3:32.0f})"
                }
            ]
        },
        {
            "name": "IesProfile",
            "desc": "IESNA LM-63 photometric profile for angular light intensity",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "IesProfile()"
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Load IES profile from file",
                    "snippet": "load(${1:\"spotlight.ies\"})"
                },
                {
                    "name": "loadFromString",
                    "return": "bool",
                    "signatures": [
                        "const string& data"
                    ],
                    "desc": "Load IES profile from inline string data",
                    "snippet": "loadFromString(${1:data})"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if profile is loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "getMaxVerticalAngle",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get maximum vertical angle in the profile (radians)",
                    "snippet": "getMaxVerticalAngle()"
                },
                {
                    "name": "getMaxCandela",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get maximum candela value in the profile",
                    "snippet": "getMaxCandela()"
                },
                {
                    "name": "getTextureWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width of the generated 1D lookup texture",
                    "snippet": "getTextureWidth()"
                }
            ]
        },
        {
            "name": "Environment",
            "desc": "IBL environment map for PBR ambient lighting (irradiance + prefilter + BRDF LUT)",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Environment()"
            },
            "methods": [
                {
                    "name": "loadFromHDR",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Load environment from HDR image file",
                    "snippet": "loadFromHDR(${1:\"env.hdr\"})"
                },
                {
                    "name": "loadProcedural",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Generate a simple procedural sky environment",
                    "snippet": "loadProcedural()"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if environment is loaded",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "release",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release GPU resources",
                    "snippet": "release()"
                },
                {
                    "name": "getIrradianceMap",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get irradiance cubemap for diffuse IBL",
                    "snippet": "getIrradianceMap()"
                },
                {
                    "name": "getPrefilterMap",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get prefiltered environment cubemap for specular IBL",
                    "snippet": "getPrefilterMap()"
                },
                {
                    "name": "getBrdfLut",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get BRDF integration lookup texture",
                    "snippet": "getBrdfLut()"
                },
                {
                    "name": "getPrefilterMipLevels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of mip levels in the prefilter map",
                    "snippet": "getPrefilterMipLevels()"
                }
            ]
        },
        {
            "name": "Platform",
            "desc": "Compile-time OS detection. All methods are constexpr and resolve at compile time based on the target platform.",
            "static_methods": [
                {
                    "name": "isWeb",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Web (Emscripten / WASM)",
                    "snippet": "Platform::isWeb()"
                },
                {
                    "name": "isMacOS",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on macOS",
                    "snippet": "Platform::isMacOS()"
                },
                {
                    "name": "isIOS",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on iOS",
                    "snippet": "Platform::isIOS()"
                },
                {
                    "name": "isWindows",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Windows",
                    "snippet": "Platform::isWindows()"
                },
                {
                    "name": "isAndroid",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Android",
                    "snippet": "Platform::isAndroid()"
                },
                {
                    "name": "isLinux",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Linux (desktop, excludes Android)",
                    "snippet": "Platform::isLinux()"
                },
                {
                    "name": "isApple",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on any Apple platform (macOS or iOS)",
                    "snippet": "Platform::isApple()"
                },
                {
                    "name": "isMobile",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on mobile (iOS or Android)",
                    "snippet": "Platform::isMobile()"
                },
                {
                    "name": "isDesktop",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on desktop (macOS, Windows, or Linux)",
                    "snippet": "Platform::isDesktop()"
                },
                {
                    "name": "name",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "snippet": "Platform::name()"
                }
            ]
        },
        {
            "name": "GraphicsBackend",
            "desc": "Runtime sokol_gfx backend query. Values are meaningful only after sg_setup() has completed (i.e. after the first setup() call).",
            "static_methods": [
                {
                    "name": "isOpenGL",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on OpenGL (core or GLES3)",
                    "snippet": "GraphicsBackend::isOpenGL()"
                },
                {
                    "name": "isMetal",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on Apple Metal",
                    "snippet": "GraphicsBackend::isMetal()"
                },
                {
                    "name": "isD3D11",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on Direct3D 11",
                    "snippet": "GraphicsBackend::isD3D11()"
                },
                {
                    "name": "isWebGPU",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on WebGPU",
                    "snippet": "GraphicsBackend::isWebGPU()"
                },
                {
                    "name": "isWebGL2",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)",
                    "snippet": "GraphicsBackend::isWebGL2()"
                },
                {
                    "name": "isVulkan",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on Vulkan",
                    "snippet": "GraphicsBackend::isVulkan()"
                },
                {
                    "name": "name",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Short backend name: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "snippet": "GraphicsBackend::name()"
                }
            ]
        },
        {
            "name": "BuildInfo",
            "desc": "Build timestamp info injected as compile definitions by trussc_app() at CMake configure time. Refreshes when cmake reconfigures. Date/time fields are local time; timestamp is UTC Unix seconds.",
            "static_methods": [
                {
                    "name": "date",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time)",
                    "snippet": "BuildInfo::date()"
                },
                {
                    "name": "time",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build time in \"HH:MM:SS\" form (local time)",
                    "snippet": "BuildInfo::time()"
                },
                {
                    "name": "dateTime",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)",
                    "snippet": "BuildInfo::dateTime()"
                },
                {
                    "name": "timestamp",
                    "return": "int64_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build timestamp as Unix seconds (UTC)",
                    "snippet": "BuildInfo::timestamp()"
                },
                {
                    "name": "year",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build year (e.g. 2026)",
                    "snippet": "BuildInfo::year()"
                },
                {
                    "name": "month",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build month (1-12)",
                    "snippet": "BuildInfo::month()"
                },
                {
                    "name": "day",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build day of month (1-31)",
                    "snippet": "BuildInfo::day()"
                },
                {
                    "name": "hour",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build hour (0-23)",
                    "snippet": "BuildInfo::hour()"
                },
                {
                    "name": "minute",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build minute (0-59)",
                    "snippet": "BuildInfo::minute()"
                },
                {
                    "name": "second",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build second (0-59)",
                    "snippet": "BuildInfo::second()"
                }
            ]
        }
    ]
};
            
            // Export for different environments
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = TrussSketchAPI;
            }
            
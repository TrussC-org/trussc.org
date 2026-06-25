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
                    "desc": "Called once at start"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame before draw"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame after update"
                }
            ]
        },
        {
            "name": "Events",
            "functions": [
                {
                    "name": "mousePressed",
                    "params": "pos, button",
                    "params_typed": "Vec2 pos, int button",
                    "return_type": "void",
                    "desc": "Mouse button pressed"
                },
                {
                    "name": "mouseReleased",
                    "params": "pos, button",
                    "params_typed": "Vec2 pos, int button",
                    "return_type": "void",
                    "desc": "Mouse button released"
                },
                {
                    "name": "mouseMoved",
                    "params": "pos",
                    "params_typed": "Vec2 pos",
                    "return_type": "void",
                    "desc": "Mouse moved"
                },
                {
                    "name": "mouseDragged",
                    "params": "pos, button",
                    "params_typed": "Vec2 pos, int button",
                    "return_type": "void",
                    "desc": "Mouse dragged"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key pressed. Use KEY_* constants for special keys, or uppercase char literals for printable keys (e.g. key == 'A', key == '1')"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key released"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Window resized"
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
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)"
                },
                {
                    "name": "clear",
                    "params": "gray, [a]",
                    "params_typed": "float gray, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)"
                },
                {
                    "name": "clear",
                    "params": "r, g, b, [a]",
                    "params_typed": "float r, float g, float b, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)"
                },
                {
                    "name": "setColor",
                    "params": "gray, [a]",
                    "params_typed": "float gray, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, [a]",
                    "params_typed": "float r, float g, float b, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)"
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b, [a]",
                    "params_typed": "float h, float s, float b, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Set color from HSB (H: 0-1)"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H, [alpha]",
                    "params_typed": "float L, float C, float H, float alpha = 1.0f",
                    "return_type": "void",
                    "desc": "Set color from OKLCH"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a_lab, b_lab, [alpha]",
                    "params_typed": "float L, float a_lab, float b_lab, float alpha = 1.0f",
                    "return_type": "void",
                    "desc": "Set color from OKLab"
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
                    "desc": "Draw rectangle"
                },
                {
                    "name": "drawRect",
                    "params": "pos, w, h",
                    "params_typed": "Vec3 pos, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle"
                },
                {
                    "name": "drawRect",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, Vec2 size",
                    "return_type": "void",
                    "desc": "Draw rectangle"
                },
                {
                    "name": "drawRectRounded",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)"
                },
                {
                    "name": "drawRectRounded",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)"
                },
                {
                    "name": "drawRectSquircle",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)"
                },
                {
                    "name": "drawRectSquircle",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)"
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "params_typed": "float x, float y, float radius",
                    "return_type": "void",
                    "desc": "Draw circle"
                },
                {
                    "name": "drawCircle",
                    "params": "center, radius",
                    "params_typed": "Vec3 center, float radius",
                    "return_type": "void",
                    "desc": "Draw circle"
                },
                {
                    "name": "drawArc",
                    "params": "x, y, radius, angleBegin, angleEnd",
                    "params_typed": "float x, float y, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Draw arc (partial circle, angles in radians)"
                },
                {
                    "name": "drawArc",
                    "params": "center, radius, angleBegin, angleEnd",
                    "params_typed": "Vec3 center, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Draw arc (partial circle, angles in radians)"
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw ellipse"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, rx, ry",
                    "params_typed": "Vec3 center, float rx, float ry",
                    "return_type": "void",
                    "desc": "Draw ellipse"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, radii",
                    "params_typed": "Vec3 center, Vec2 radii",
                    "return_type": "void",
                    "desc": "Draw ellipse"
                },
                {
                    "name": "drawPoint",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw a single point"
                },
                {
                    "name": "drawPoint",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Draw a single point"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, z1, x2, y2, z2",
                    "params_typed": "float x1, float y1, float z1, float x2, float y2, float z2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)"
                },
                {
                    "name": "drawLine",
                    "params": "p1, p2",
                    "params_typed": "Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)"
                },
                {
                    "name": "drawBezier",
                    "params": "p0, p1, p2, p3",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)"
                },
                {
                    "name": "drawBezier",
                    "params": "p0, p1, p2",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)"
                },
                {
                    "name": "drawBezier",
                    "params": "controlPoints",
                    "params_typed": "const vector<Vec3>& controlPoints",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)"
                },
                {
                    "name": "drawCurve",
                    "params": "p0, p1, p2, p3",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)"
                },
                {
                    "name": "drawCurve",
                    "params": "points",
                    "params_typed": "const vector<Vec3>& points",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)"
                },
                {
                    "name": "drawCurve",
                    "params": "points, closed",
                    "params_typed": "const vector<Vec3>& points, bool closed",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)"
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "params_typed": "float x1, float y1, float x2, float y2, float x3, float y3",
                    "return_type": "void",
                    "desc": "Draw triangle"
                },
                {
                    "name": "drawTriangle",
                    "params": "p1, p2, p3",
                    "params_typed": "Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw triangle"
                },
                {
                    "name": "drawBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)"
                },
                {
                    "name": "drawBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, size",
                    "params_typed": "float x, float y, float z, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, w, h, d",
                    "params_typed": "float x, float y, float z, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)"
                },
                {
                    "name": "drawBox",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)"
                },
                {
                    "name": "drawBox",
                    "params": "pos, w, h, d",
                    "params_typed": "Vec3 pos, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)"
                },
                {
                    "name": "drawSphere",
                    "params": "radius, [resolution]",
                    "params_typed": "float radius, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)"
                },
                {
                    "name": "drawSphere",
                    "params": "x, y, z, radius, [resolution]",
                    "params_typed": "float x, float y, float z, float radius, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)"
                },
                {
                    "name": "drawSphere",
                    "params": "pos, radius, [resolution]",
                    "params_typed": "Vec3 pos, float radius, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)"
                },
                {
                    "name": "drawCone",
                    "params": "radius, height, [resolution]",
                    "params_typed": "float radius, float height, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)"
                },
                {
                    "name": "drawCone",
                    "params": "x, y, z, radius, height, [resolution]",
                    "params_typed": "float x, float y, float z, float radius, float height, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)"
                },
                {
                    "name": "drawCone",
                    "params": "pos, radius, height, [resolution]",
                    "params_typed": "Vec3 pos, float radius, float height, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)"
                },
                {
                    "name": "beginShape",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a shape"
                },
                {
                    "name": "vertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex"
                },
                {
                    "name": "vertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec2& v",
                    "return_type": "void",
                    "desc": "Add a vertex"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "void",
                    "desc": "Add a vertex"
                },
                {
                    "name": "endShape",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a shape"
                },
                {
                    "name": "appendArc",
                    "params": "cx, cy, radius, angleBegin, angleEnd",
                    "params_typed": "float cx, float cy, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Append arc vertices to the current shape (use between beginShape/endShape)"
                },
                {
                    "name": "appendArc",
                    "params": "center, radius, angleBegin, angleEnd",
                    "params_typed": "const Vec2& center, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Append arc vertices to the current shape (use between beginShape/endShape)"
                },
                {
                    "name": "appendCurve",
                    "params": "points",
                    "params_typed": "const vector<Vec3>& points",
                    "return_type": "void",
                    "desc": "Append Catmull-Rom curve vertices to the current shape (use between beginShape/endShape; needs >=4 points, closed=true wraps around)"
                },
                {
                    "name": "appendCurve",
                    "params": "points, closed",
                    "params_typed": "const vector<Vec3>& points, bool closed",
                    "return_type": "void",
                    "desc": "Append Catmull-Rom curve vertices to the current shape (use between beginShape/endShape; needs >=4 points, closed=true wraps around)"
                },
                {
                    "name": "beginStroke",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a stroke (uses StrokeMesh internally)"
                },
                {
                    "name": "endStroke",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a stroke"
                },
                {
                    "name": "beginLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin batch line drawing. Add vertex pairs with vertex(), then call endLines(). Each pair of vertices draws one independent line segment. Use setColor() between vertices for per-line colors."
                },
                {
                    "name": "endLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End batch line drawing and render all accumulated line segments"
                },
                {
                    "name": "drawStroke",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)"
                },
                {
                    "name": "drawStroke",
                    "params": "p1, p2",
                    "params_typed": "const Vec2& p1, const Vec2& p2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y, bool screenFixed = true",
                    "return_type": "void",
                    "desc": "Draw text"
                },
                {
                    "name": "setTextAlign",
                    "params": "h, v",
                    "params_typed": "Direction h, Direction v",
                    "return_type": "void",
                    "desc": "Set text alignment"
                },
                {
                    "name": "setTextAlign",
                    "params": "h, v",
                    "params_typed": "Direction h, Direction v",
                    "return_type": "void",
                    "desc": "Set text alignment"
                },
                {
                    "name": "getTextAlignH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Direction",
                    "desc": "Get horizontal text alignment"
                },
                {
                    "name": "getTextAlignV",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Direction",
                    "desc": "Get vertical text alignment"
                },
                {
                    "name": "getBitmapFontHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get bitmap font height"
                },
                {
                    "name": "getBitmapStringWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width"
                },
                {
                    "name": "getBitmapStringHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height"
                },
                {
                    "name": "getBitmapStringBBox",
                    "params": "text",
                    "params_typed": "const std::string & text",
                    "return_type": "Rect",
                    "desc": "Get text bounding box"
                },
                {
                    "name": "setBitmapLineHeight",
                    "params": "height",
                    "params_typed": "float height",
                    "return_type": "void",
                    "desc": "Set line height for bitmap string newlines (default: 16)"
                },
                {
                    "name": "getBitmapLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height for bitmap string newlines"
                },
                {
                    "name": "setFps",
                    "params": "fps",
                    "params_typed": "float fps",
                    "return_type": "void",
                    "desc": "Set target frame rate (VSYNC = -1.0)"
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
                    "desc": "Enable fill mode (shapes are solid, no outline)"
                },
                {
                    "name": "noFill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable stroke mode (shapes show outline only)"
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "params_typed": "float weight",
                    "return_type": "void",
                    "desc": "Set stroke width"
                },
                {
                    "name": "getStrokeWeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stroke width"
                },
                {
                    "name": "setStrokeCap",
                    "params": "cap",
                    "params_typed": "StrokeCap cap",
                    "return_type": "void",
                    "desc": "Set stroke cap style (Butt, Round, Square)"
                },
                {
                    "name": "getStrokeCap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeCap",
                    "desc": "Get current stroke cap style"
                },
                {
                    "name": "setStrokeJoin",
                    "params": "join",
                    "params_typed": "StrokeJoin join",
                    "return_type": "void",
                    "desc": "Set stroke join style (Miter, Round, Bevel)"
                },
                {
                    "name": "getStrokeJoin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeJoin",
                    "desc": "Get current stroke join style"
                },
                {
                    "name": "isFillEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if fill mode is enabled"
                },
                {
                    "name": "isStrokeEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if stroke mode is enabled"
                },
                {
                    "name": "setCurveTolerance",
                    "params": "pixels",
                    "params_typed": "float pixels",
                    "return_type": "void",
                    "desc": "Set adaptive curve tessellation tolerance in pixels (smaller = smoother, scale-aware)"
                },
                {
                    "name": "getCurveTolerance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current curve tessellation tolerance (in pixels)"
                },
                {
                    "name": "setCurveResolution",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "void",
                    "desc": "Set fixed curve segment count (switches off adaptive tolerance mode)"
                },
                {
                    "name": "getCurveResolution",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current curve resolution"
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save current style state (color, stroke, fill)"
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous style state"
                },
                {
                    "name": "resetStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset style to default values (white color, fill enabled, stroke disabled)"
                },
                {
                    "name": "getColor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Get current fill color"
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
                    "desc": "Move origin"
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Move origin"
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)"
                },
                {
                    "name": "rotate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)"
                },
                {
                    "name": "rotate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)"
                },
                {
                    "name": "rotate",
                    "params": "quat",
                    "params_typed": "const Quaternion& quat",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)"
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate by degrees"
                },
                {
                    "name": "rotateDeg",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by degrees"
                },
                {
                    "name": "rotateDeg",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by degrees"
                },
                {
                    "name": "rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around X axis"
                },
                {
                    "name": "rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Y axis"
                },
                {
                    "name": "rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Z axis"
                },
                {
                    "name": "rotateXDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around X axis (degrees)"
                },
                {
                    "name": "rotateYDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Y axis (degrees)"
                },
                {
                    "name": "rotateZDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Z axis (degrees)"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "void",
                    "desc": "Scale"
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "params_typed": "float sx, float sy",
                    "return_type": "void",
                    "desc": "Scale"
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save transform state"
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore transform state"
                },
                {
                    "name": "getCurrentMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Get current transformation matrix"
                },
                {
                    "name": "resetMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset transformation matrix to identity"
                },
                {
                    "name": "setMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Set transformation matrix directly"
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
                    "desc": "Get canvas width"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas height"
                },
                {
                    "name": "getWindowSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get canvas size as Vec2"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse X position"
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse Y position"
                },
                {
                    "name": "getMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get mouse position as Vec2"
                },
                {
                    "name": "getGlobalMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get global mouse position as Vec2"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Is mouse button pressed"
                },
                {
                    "name": "isKeyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "bool",
                    "desc": "Is specific key currently pressed"
                },
                {
                    "name": "isShiftPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Shift key (left or right) is held"
                },
                {
                    "name": "isControlPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Control key (left or right) is held"
                },
                {
                    "name": "isAltPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Alt / Option key (left or right) is held"
                },
                {
                    "name": "isSuperPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Super / Cmd / Win key (left or right) is held"
                },
                {
                    "name": "showCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Show the mouse cursor (default)"
                },
                {
                    "name": "hideCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Hide the mouse cursor"
                },
                {
                    "name": "setCursor",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Set the mouse cursor shape"
                },
                {
                    "name": "getCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Cursor",
                    "desc": "Get the current mouse cursor shape"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, width, height, pixels, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, int width, int height, const unsigned char* pixels, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, image, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, const Image& image, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)"
                },
                {
                    "name": "unbindCursorImage",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Unbind a custom cursor image, restoring the system default"
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
                    "desc": "Seconds since last frame"
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Current FPS"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Total frames rendered"
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
                    "desc": "Total bytes allocated by sokol libraries"
                },
                {
                    "name": "getSokolMemoryAllocs",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of active allocations in sokol libraries"
                },
                {
                    "name": "releaseSglBuffers",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Release sokol_gl vertex/command buffers (auto re-allocated on next draw)"
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
                    "desc": "True on Web (Emscripten / WASM)"
                },
                {
                    "name": "Platform::isMacOS",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on macOS"
                },
                {
                    "name": "Platform::isIOS",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on iOS"
                },
                {
                    "name": "Platform::isWindows",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Windows"
                },
                {
                    "name": "Platform::isAndroid",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Android"
                },
                {
                    "name": "Platform::isLinux",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Linux (desktop, excludes Android)"
                },
                {
                    "name": "Platform::isApple",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on any Apple platform (macOS or iOS)"
                },
                {
                    "name": "Platform::isMobile",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on mobile (iOS or Android)"
                },
                {
                    "name": "Platform::isDesktop",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on desktop (macOS, Windows, or Linux)"
                },
                {
                    "name": "Platform::name",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\""
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
                    "desc": "True when running on OpenGL (core or GLES3)"
                },
                {
                    "name": "GraphicsBackend::isMetal",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Apple Metal"
                },
                {
                    "name": "GraphicsBackend::isD3D11",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Direct3D 11"
                },
                {
                    "name": "GraphicsBackend::isWebGPU",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGPU"
                },
                {
                    "name": "GraphicsBackend::isWebGL2",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)"
                },
                {
                    "name": "GraphicsBackend::isVulkan",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Vulkan"
                },
                {
                    "name": "GraphicsBackend::name",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short backend name: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\""
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
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time, CMake configure time)"
                },
                {
                    "name": "BuildInfo::time",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build time in \"HH:MM:SS\" form (local time)"
                },
                {
                    "name": "BuildInfo::dateTime",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)"
                },
                {
                    "name": "BuildInfo::timestamp",
                    "params_typed": "",
                    "return_type": "int64_t",
                    "desc": "Build timestamp as Unix seconds (UTC)"
                },
                {
                    "name": "BuildInfo::year",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build year (e.g. 2026)"
                },
                {
                    "name": "BuildInfo::month",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build month (1-12)"
                },
                {
                    "name": "BuildInfo::day",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build day of month (1-31)"
                },
                {
                    "name": "BuildInfo::hour",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build hour (0-23)"
                },
                {
                    "name": "BuildInfo::minute",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build minute (0-59)"
                },
                {
                    "name": "BuildInfo::second",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build second (0-59)"
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
                    "desc": "Elapsed seconds (float)"
                },
                {
                    "name": "getElapsedTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Elapsed seconds (alias for getElapsedTimef)"
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed milliseconds (int64)"
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed microseconds (int64)"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset elapsed time"
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
                    "desc": "Unix time in milliseconds"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in microseconds"
                },
                {
                    "name": "getUnixTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Current Unix timestamp in seconds"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Formatted timestamp"
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
                    "params_typed": "const string& format",
                    "return_type": "string",
                    "desc": "Formatted timestamp"
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
                    "desc": "Current seconds (0-59)"
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current minutes (0-59)"
                },
                {
                    "name": "getHours",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current hours (0-23)"
                },
                {
                    "name": "getYear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current year"
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current month (1-12)"
                },
                {
                    "name": "getDay",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current day (1-31)"
                },
                {
                    "name": "getWeekday",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Weekday (0=Sun, 6=Sat)"
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
                    "desc": "Random number"
                },
                {
                    "name": "random",
                    "params": "max",
                    "params_typed": "float max",
                    "return_type": "float",
                    "desc": "Random number"
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "params_typed": "float min, float max",
                    "return_type": "float",
                    "desc": "Random number"
                },
                {
                    "name": "randomInt",
                    "params": "max",
                    "params_typed": "int max",
                    "return_type": "int",
                    "desc": "Random integer"
                },
                {
                    "name": "randomInt",
                    "params": "min, max",
                    "params_typed": "int min, int max",
                    "return_type": "int",
                    "desc": "Random integer"
                },
                {
                    "name": "randomSeed",
                    "params": "seed",
                    "params_typed": "unsigned int seed",
                    "return_type": "void",
                    "desc": "Set random seed"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise"
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise"
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise"
                },
                {
                    "name": "signedNoise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z, w",
                    "params_typed": "float x, float y, float z, float w",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)"
                },
                {
                    "name": "fbm",
                    "params": "x, y, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise"
                },
                {
                    "name": "fbm",
                    "params": "x, y, z, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, float z, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise"
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
                    "desc": "Clamp value to range"
                },
                {
                    "name": "remap",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "params_typed": "float v, float inMin, float inMax, float outMin, float outMax",
                    "return_type": "float",
                    "desc": "Remap value from one range to another"
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
                    "desc": "Sine"
                },
                {
                    "name": "cos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Cosine"
                },
                {
                    "name": "tan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Tangent"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc sine"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc cosine"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc tangent"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "params_typed": "float y, float x",
                    "return_type": "float",
                    "desc": "Arc tangent of y/x"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "float",
                    "desc": "Degrees to radians"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "float",
                    "desc": "Radians to degrees"
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
                    "desc": "Absolute value"
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square root"
                },
                {
                    "name": "sq",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square (x*x)"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Power (x^y)"
                },
                {
                    "name": "log",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Natural logarithm"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Exponential (e^x)"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Minimum"
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Maximum"
                },
                {
                    "name": "floor",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round down"
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round up"
                },
                {
                    "name": "round",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round to nearest"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Floating-point modulo"
                },
                {
                    "name": "sign",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sign (-1, 0, 1)"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Fractional part"
                },
                {
                    "name": "wrap",
                    "params": "value, min, max",
                    "params_typed": "float value, float min, float max",
                    "return_type": "float",
                    "desc": "Wrap value within range [min, max)"
                },
                {
                    "name": "angleDifference",
                    "params": "angle1, angle2",
                    "params_typed": "float angle1, float angle2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in radians [-TAU/2, TAU/2]"
                },
                {
                    "name": "angleDifferenceDeg",
                    "params": "deg1, deg2",
                    "params_typed": "float deg1, float deg2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in degrees [-180, 180]"
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
                    "desc": "Distance between points"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Squared distance"
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
                    "desc": "Set window title"
                },
                {
                    "name": "setWindowSize",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Set window size"
                },
                {
                    "name": "toggleFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle fullscreen mode"
                },
                {
                    "name": "setClipboardString",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "void",
                    "desc": "Copy text to clipboard"
                },
                {
                    "name": "getClipboardString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get text from clipboard"
                },
                {
                    "name": "isFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if window is fullscreen"
                },
                {
                    "name": "setFullscreen",
                    "params": "fullscreen",
                    "params_typed": "bool fullscreen",
                    "return_type": "void",
                    "desc": "Set fullscreen mode"
                }
            ]
        },
        {
            "name": "Utility",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "[module]",
                    "params_typed": "const std::string & module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Print to console"
                },
                {
                    "name": "toString",
                    "params": "value",
                    "params_typed": "value",
                    "return_type": "string",
                    "desc": "Convert to string"
                },
                {
                    "name": "beep",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play a beep sound"
                },
                {
                    "name": "beep",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "void",
                    "desc": "Play a beep sound"
                },
                {
                    "name": "toInt",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "int",
                    "desc": "Convert string to int"
                },
                {
                    "name": "toFloat",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "float",
                    "desc": "Convert string to float"
                },
                {
                    "name": "splitString",
                    "params": "source, delimiter, [ignoreEmpty], [trim]",
                    "params_typed": "const std::string & source, const std::string & delimiter, bool ignoreEmpty = false, bool trim = false",
                    "return_type": "std::vector<std::string>",
                    "desc": "Split string by delimiter"
                },
                {
                    "name": "joinString",
                    "params": "elements, delimiter",
                    "params_typed": "const vector<string>& elements, const string& delimiter",
                    "return_type": "string",
                    "desc": "Join strings with delimiter"
                },
                {
                    "name": "stringReplace",
                    "params": "input, search, replace",
                    "params_typed": "string& input, const string& searchStr, const string& replaceStr",
                    "return_type": "void",
                    "desc": "Replace substring in place"
                },
                {
                    "name": "toLower",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to lower case"
                },
                {
                    "name": "toUpper",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to upper case"
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
                    "desc": "Get full path relative to data directory"
                },
                {
                    "name": "getAbsolutePath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get absolute path"
                },
                {
                    "name": "getFileName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename from path"
                },
                {
                    "name": "getBaseName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename without extension"
                },
                {
                    "name": "getFileExtension",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get file extension without dot"
                },
                {
                    "name": "getParentDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get parent directory"
                },
                {
                    "name": "joinPath",
                    "params": "dir, file",
                    "params_typed": "const string& dir, const string& file",
                    "return_type": "string",
                    "desc": "Join directory and filename"
                },
                {
                    "name": "fileExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if file exists"
                },
                {
                    "name": "directoryExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if directory exists"
                },
                {
                    "name": "listDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "vector<string>",
                    "desc": "List files in directory"
                }
            ]
        },
        {
            "name": "Sound",
            "functions": [
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load sound file. Format auto-detected by extension: .wav .mp3 .ogg .flac .aac .m4a"
                },
                {
                    "name": "loadStream",
                    "params": "path, maxPolyphony",
                    "params_typed": "const string& path, int maxPolyphony = 1",
                    "return_type": "bool",
                    "desc": "Stream sound from disk (WAV/MP3/FLAC). Best for long files; cuts memory. maxPolyphony = simultaneous play() count."
                },
                {
                    "name": "isStreaming",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True if this Sound was loaded via loadStream() (vs eager load())"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play sound"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop sound"
                },
                {
                    "name": "pause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pause playback (resume() to continue)"
                },
                {
                    "name": "resume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Resume paused playback"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while playing (false if stopped, paused, or never played)"
                },
                {
                    "name": "isPaused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while paused"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True after a successful load() / loadStream() / loadTestTone()"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback position in seconds"
                },
                {
                    "name": "setPosition",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Seek to a specific time in seconds. On streams, costs ~10 ms blackout while the ring refills."
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get total duration of the loaded sound in seconds"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set volume (0.0-1.0)"
                },
                {
                    "name": "getVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current volume"
                },
                {
                    "name": "setPan",
                    "params": "pan",
                    "params_typed": "float pan",
                    "return_type": "void",
                    "desc": "Set stereo balance (-1.0 left ~ 0 center ~ +1.0 right). On multi-ch devices only affects ch0/ch1."
                },
                {
                    "name": "getPan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current pan value"
                },
                {
                    "name": "setSpeed",
                    "params": "speed",
                    "params_typed": "float speed",
                    "return_type": "void",
                    "desc": "Playback speed [-10, 10]. Negative = reverse (eager only). Streams clamp to [0, 10]. 0 = freeze."
                },
                {
                    "name": "getSpeed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback speed"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping"
                },
                {
                    "name": "isLoop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True if looping is enabled"
                }
            ]
        },
        {
            "name": "ChipSound",
            "functions": [
                {
                    "name": "build",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Build and return Sound object from note"
                },
                {
                    "name": "add",
                    "params": "note, time",
                    "params_typed": "const ChipSoundNote& note, float time",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Add a note at specified time (seconds)"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Clear all notes from bundle"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the total duration of the bundle"
                }
            ]
        },
        {
            "name": "Font",
            "functions": [
                {
                    "name": "load",
                    "params": "path, size",
                    "params_typed": "const string& path, int size",
                    "return_type": "bool",
                    "desc": "Load TTF font file"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if font is loaded"
                },
                {
                    "name": "drawString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text at position"
                },
                {
                    "name": "getStringPath",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "Path",
                    "desc": "Get text outline as a Path (one subpath per contour). Stays crisp under scale / rotation; use drawStroke / drawFill (holes auto-detected for e, a, O, 日, etc.)."
                },
                {
                    "name": "getWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width in pixels"
                },
                {
                    "name": "getHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height in pixels"
                },
                {
                    "name": "getLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get font size"
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
                    "desc": "Apply easing to value (0-1)"
                },
                {
                    "name": "easeIn",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in to value (0-1)"
                },
                {
                    "name": "easeOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-out to value (0-1)"
                },
                {
                    "name": "easeInOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in-out to value (0-1)"
                },
                {
                    "name": "from",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set start value"
                },
                {
                    "name": "to",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set end value"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "Tween@",
                    "desc": "Set animation duration"
                },
                {
                    "name": "ease",
                    "params": "type",
                    "params_typed": "EaseType type",
                    "return_type": "Tween@",
                    "desc": "Set easing type"
                },
                {
                    "name": "start",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Start animation (chainable)"
                },
                {
                    "name": "pause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Pause animation (chainable)"
                },
                {
                    "name": "resume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Resume animation (chainable)"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Reset animation (chainable)"
                },
                {
                    "name": "finish",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Jump to end (chainable)"
                },
                {
                    "name": "loop",
                    "params": "count",
                    "params_typed": "int count = -1",
                    "return_type": "Tween@",
                    "desc": "Set loop count (-1=infinite, 0=none, N=repeat N times)"
                },
                {
                    "name": "yoyo",
                    "params": "enable",
                    "params_typed": "bool enable = true",
                    "return_type": "Tween@",
                    "desc": "Enable yoyo (reverse direction each loop)"
                },
                {
                    "name": "getValue",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current tween value"
                },
                {
                    "name": "getProgress",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get progress (0-1)"
                },
                {
                    "name": "getElapsed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get elapsed time"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get duration"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playing"
                },
                {
                    "name": "isComplete",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if complete"
                },
                {
                    "name": "getStart",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get start value"
                },
                {
                    "name": "getEnd",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get end value"
                },
                {
                    "name": "getLoopCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get number of completed loop iterations"
                }
            ]
        },
        {
            "name": "Types - Vec2",
            "functions": [
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians",
                    "params_typed": "float, float",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "params_typed": "float radians, float length",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle"
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
                    "desc": "Convert to HSB color space (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "toOKLab",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLab",
                    "desc": "Convert to OKLab color space (perceptually uniform)"
                },
                {
                    "name": "toOKLCH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLCH",
                    "desc": "Convert to OKLCH color space (L: 0-1, C: 0-0.4, H: 0-1)"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b",
                    "params_typed": "float, float, float, float",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b, [a]",
                    "params_typed": "float h, float s, float b, float a = 1.0f",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float, float, float, float",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b",
                    "params_typed": "float, float, float, float",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b, alpha",
                    "params_typed": "float L, float a, float b, float alpha",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab"
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
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color"
                },
                {
                    "name": "ColorHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "",
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color"
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorHSB to Color (RGB)"
                },
                {
                    "name": "lerp",
                    "params": "target, t, [shortestPath]",
                    "params_typed": "const ColorHSB & target, float t, bool shortestPath = true",
                    "return_type": "ColorHSB",
                    "desc": "Interpolate in HSB space (shortest hue path)"
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
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform"
                },
                {
                    "name": "ColorOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "",
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform"
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorOKLCH to Color (RGB)"
                },
                {
                    "name": "lerp",
                    "params": "target, t, [shortestPath]",
                    "params_typed": "const ColorOKLCH & target, float t, bool shortestPath = true",
                    "return_type": "ColorOKLCH",
                    "desc": "Interpolate in OKLCH space (shortest hue path, perceptually uniform)"
                }
            ]
        },
        {
            "name": "3D Setup",
            "functions": [
                {
                    "name": "setupScreenPerspective",
                    "params": "[fovDeg], [nearDist], [farDist]",
                    "params_typed": "float fovDeg = 45.0f, float nearDist = 0.0f, float farDist = 0.0f",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "[fovDeg], [nearDist], [farDist]",
                    "params_typed": "float fovDeg = 45.0f, float nearDist = 0.0f, float farDist = 0.0f",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)"
                },
                {
                    "name": "setupScreenOrtho",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up orthographic projection (2D mode)"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg, [nearDist], [farDist]",
                    "params_typed": "float fovDeg, float nearDist = 0.0f, float farDist = 0.0f",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)"
                },
                {
                    "name": "setDefaultScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set default screen FOV (applied at frame start)"
                },
                {
                    "name": "getDefaultScreenFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current default screen FOV"
                }
            ]
        },
        {
            "name": "3D Camera",
            "functions": [
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Apply camera transform (start 3D mode)"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous transform (end 3D mode)"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset camera to default position"
                },
                {
                    "name": "setTarget",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera look-at target"
                },
                {
                    "name": "setTarget",
                    "params": "target",
                    "params_typed": "const Vec3 &target",
                    "return_type": "void",
                    "desc": "Set camera look-at target"
                },
                {
                    "name": "getTarget",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera look-at target"
                },
                {
                    "name": "setDistance",
                    "params": "distance",
                    "params_typed": "float distance",
                    "return_type": "void",
                    "desc": "Set distance from target"
                },
                {
                    "name": "getDistance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get distance from target"
                },
                {
                    "name": "setAzimuth",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set orbit azimuth (horizontal angle, radians)"
                },
                {
                    "name": "getAzimuth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get orbit azimuth (horizontal angle, radians)"
                },
                {
                    "name": "setElevation",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set orbit elevation (vertical angle, radians; clamped to ~±80°)"
                },
                {
                    "name": "getElevation",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get orbit elevation (vertical angle, radians)"
                },
                {
                    "name": "setFov",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set field of view in radians"
                },
                {
                    "name": "getFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get field of view in radians"
                },
                {
                    "name": "setFovDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Set field of view in degrees"
                },
                {
                    "name": "setNearClip",
                    "params": "nearClip",
                    "params_typed": "float nearClip",
                    "return_type": "void",
                    "desc": "Set near clipping plane"
                },
                {
                    "name": "setFarClip",
                    "params": "farClip",
                    "params_typed": "float farClip",
                    "return_type": "void",
                    "desc": "Set far clipping plane"
                },
                {
                    "name": "enableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse input for camera control"
                },
                {
                    "name": "disableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Disable mouse input for camera control"
                },
                {
                    "name": "isMouseInputEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if mouse input is enabled"
                },
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse press event"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse release event"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse drag event"
                },
                {
                    "name": "mouseScrolled",
                    "params": "dx, dy",
                    "params_typed": "float dx, float dy",
                    "return_type": "void",
                    "desc": "Handle mouse scroll event (for zoom)"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera position"
                },
                {
                    "name": "setSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set rotation sensitivity"
                },
                {
                    "name": "setZoomSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set zoom sensitivity"
                },
                {
                    "name": "setPanSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set pan sensitivity"
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
                    "desc": "Add a light to the scene"
                },
                {
                    "name": "removeLight",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Remove a light from the scene"
                },
                {
                    "name": "clearLights",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Remove all lights from the scene"
                },
                {
                    "name": "setMaterial",
                    "params": "material",
                    "params_typed": "Material& material",
                    "return_type": "void",
                    "desc": "Set material for subsequent mesh draws (activates PBR)"
                },
                {
                    "name": "clearMaterial",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear material (return to default rendering)"
                },
                {
                    "name": "setCameraPosition",
                    "params": "pos",
                    "params_typed": "const Vec3& pos",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation"
                },
                {
                    "name": "setCameraPosition",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation"
                },
                {
                    "name": "setEnvironment",
                    "params": "env",
                    "params_typed": "Environment& env",
                    "return_type": "void",
                    "desc": "Set IBL environment for PBR ambient lighting"
                },
                {
                    "name": "clearEnvironment",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear IBL environment"
                },
                {
                    "name": "beginShadowPass",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Begin shadow depth pass from the light's point of view"
                },
                {
                    "name": "endShadowPass",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shadow depth pass"
                },
                {
                    "name": "shadowDraw",
                    "params": "mesh",
                    "params_typed": "const Mesh& mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh into the shadow depth pass (depth only)"
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
                    "desc": "Create an identity matrix"
                },
                {
                    "name": "Mat4_translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix"
                },
                {
                    "name": "Mat4_translate",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix"
                },
                {
                    "name": "Mat4_rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create X-axis rotation matrix"
                },
                {
                    "name": "Mat4_rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Y-axis rotation matrix"
                },
                {
                    "name": "Mat4_rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Z-axis rotation matrix"
                },
                {
                    "name": "Mat4_scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix"
                },
                {
                    "name": "Mat4_scale",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix"
                },
                {
                    "name": "Mat4_lookAt",
                    "params": "eye, target, up",
                    "params_typed": "const Vec3 &, const Vec3 &, const Vec3 &",
                    "return_type": "Mat4",
                    "desc": "Create a view matrix"
                },
                {
                    "name": "Mat4_ortho",
                    "params": "left, right, bottom, top, near, far",
                    "params_typed": "float left, float right, float bottom, float top, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create an orthographic projection matrix"
                },
                {
                    "name": "Mat4_perspective",
                    "params": "fov, aspect, near, far",
                    "params_typed": "float fovY, float aspect, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create a perspective projection matrix"
                },
                {
                    "name": "Quaternion_identity",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Quaternion",
                    "desc": "Create an identity quaternion"
                },
                {
                    "name": "Quaternion_fromAxisAngle",
                    "params": "axis, radians",
                    "params_typed": "const Vec3 &, float",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from axis-angle"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "pitch, yaw, roll",
                    "params_typed": "float pitch, float yaw, float roll",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "euler",
                    "params_typed": "const Vec3& euler",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles"
                },
                {
                    "name": "Quaternion_slerp",
                    "params": "a, b, t",
                    "params_typed": "const Quaternion &, const Quaternion &, float",
                    "return_type": "Quaternion",
                    "desc": "Spherical linear interpolation"
                }
            ]
        },
        {
            "name": "Graphics - Advanced",
            "functions": [
                {
                    "name": "drawMesh",
                    "params": "mesh",
                    "params_typed": "const Mesh & mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh"
                },
                {
                    "name": "createBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh"
                },
                {
                    "name": "createBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh"
                },
                {
                    "name": "createPlane",
                    "params": "width, height, cols, rows",
                    "params_typed": "float width, float height, int cols = 2, int rows = 2",
                    "return_type": "Mesh",
                    "desc": "Create a plane mesh (subdivided quad on the XY plane)"
                },
                {
                    "name": "createCylinder",
                    "params": "radius, height, resolution",
                    "params_typed": "float radius, float height, int resolution = 16",
                    "return_type": "Mesh",
                    "desc": "Create a cylinder mesh"
                },
                {
                    "name": "createCone",
                    "params": "radius, height, resolution",
                    "params_typed": "float radius, float height, int resolution = 16",
                    "return_type": "Mesh",
                    "desc": "Create a cone mesh"
                },
                {
                    "name": "createIcoSphere",
                    "params": "radius, subdivisions",
                    "params_typed": "float radius, int subdivisions = 2",
                    "return_type": "Mesh",
                    "desc": "Create an icosphere mesh (geodesic sphere with uniform triangles)"
                },
                {
                    "name": "createTorus",
                    "params": "radius, tubeRadius, sides, rings",
                    "params_typed": "float radius, float tubeRadius, int sides = 24, int rings = 16",
                    "return_type": "Mesh",
                    "desc": "Create a torus (donut) mesh"
                },
                {
                    "name": "createSphere",
                    "params": "radius, res",
                    "params_typed": "float radius, int res = 20",
                    "return_type": "Mesh",
                    "desc": "Create a sphere mesh"
                },
                {
                    "name": "createCapsule",
                    "params": "radius, cylinderHeight, res",
                    "params_typed": "float radius, float cylinderHeight, int res = 16",
                    "return_type": "Mesh",
                    "desc": "Create a capsule mesh (Y-up: cylinder capped by two hemispheres)"
                }
            ]
        },
        {
            "name": "Graphics - Texture & GPU",
            "functions": [
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const std::filesystem::path &, bool",
                    "return_type": "bool",
                    "desc": "Load image from file"
                },
                {
                    "name": "bind",
                    "params": "slot",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Bind texture"
                },
                {
                    "name": "unbind",
                    "params": "slot",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Unbind texture"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get width"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get height"
                }
            ]
        },
        {
            "name": "Graphics - FBO",
            "functions": [
                {
                    "name": "allocate",
                    "params": "w, h",
                    "params_typed": "int, int, int, TextureFormat, bool",
                    "return_type": "void",
                    "desc": "Allocate buffer"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color"
                },
                {
                    "name": "begin",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a = 1.0",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End drawing to FBO"
                },
                {
                    "name": "getTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture&",
                    "desc": "Get internal texture"
                }
            ]
        },
        {
            "name": "Types - Pixels",
            "functions": [
                {
                    "name": "allocate",
                    "params": "w, h, channels",
                    "params_typed": "int, int, int, PixelFormat",
                    "return_type": "void",
                    "desc": "Allocate memory"
                },
                {
                    "name": "getColor",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "Color",
                    "desc": "Get color at pixel"
                },
                {
                    "name": "setColor",
                    "params": "x, y, c",
                    "params_typed": "int x, int y, const Color& c",
                    "return_type": "void",
                    "desc": "Set color at pixel"
                }
            ]
        },
        {
            "name": "Types - Mesh",
            "functions": [
                {
                    "name": "setMode",
                    "params": "mode",
                    "params_typed": "PrimitiveMode",
                    "return_type": "Mesh&",
                    "desc": "Set primitive mode (MESH_TRIANGLES, etc.)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Mesh&",
                    "desc": "Add a vertex"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "Mesh&",
                    "desc": "Add a vertex"
                },
                {
                    "name": "addColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "Mesh&",
                    "desc": "Add a color for the vertex"
                },
                {
                    "name": "addColor",
                    "params": "c",
                    "params_typed": "const Color& c",
                    "return_type": "Mesh&",
                    "desc": "Add a color for the vertex"
                },
                {
                    "name": "addTexCoord",
                    "params": "u, v",
                    "params_typed": "float u, float v",
                    "return_type": "Mesh&",
                    "desc": "Add a texture coordinate"
                },
                {
                    "name": "addNormal",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Mesh&",
                    "desc": "Add a normal vector"
                },
                {
                    "name": "addIndex",
                    "params": "index",
                    "params_typed": "unsigned int",
                    "return_type": "Mesh&",
                    "desc": "Add an index"
                },
                {
                    "name": "addTriangle",
                    "params": "i1, i2, i3",
                    "params_typed": "unsigned int, unsigned int, unsigned int",
                    "return_type": "Mesh&",
                    "desc": "Add a triangle (3 indices)"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mesh&",
                    "desc": "Clear all data"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the mesh"
                }
            ]
        },
        {
            "name": "Types - Path",
            "functions": [
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex"
                },
                {
                    "name": "lineTo",
                    "params": "x, y",
                    "params_typed": "float x, float y, float z = 0",
                    "return_type": "void",
                    "desc": "Add a line segment to point"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y",
                    "params_typed": "float cx1, float cy1, float cx2, float cy2, float x, float y, int resolution = -1",
                    "return_type": "void",
                    "desc": "Add a cubic bezier curve"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y",
                    "params_typed": "float cx, float cy, float x, float y, int resolution = -1",
                    "return_type": "void",
                    "desc": "Add a quadratic bezier curve"
                },
                {
                    "name": "curveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y, float z = 0, int resolution = -1",
                    "return_type": "void",
                    "desc": "Add a Catmull-Rom curve segment"
                },
                {
                    "name": "arc",
                    "params": "x, y, rX, rY, start, end",
                    "params_typed": "float x, float y, float radiusX, float radiusY, float angleBegin, float angleEnd, int circleResolution = 20",
                    "return_type": "void",
                    "desc": "Add an arc"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the shape"
                }
            ]
        },
        {
            "name": "Types - StrokeMesh",
            "functions": [
                {
                    "name": "setWidth",
                    "params": "width",
                    "params_typed": "float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke width (method chaining)"
                },
                {
                    "name": "setColor",
                    "params": "color",
                    "params_typed": "const Color &color",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke color (method chaining)"
                },
                {
                    "name": "setCapType",
                    "params": "type",
                    "params_typed": "StrokeMesh::CapType",
                    "return_type": "StrokeMesh&",
                    "desc": "Set cap type: Butt, Round, Square (method chaining)"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "params_typed": "StrokeMesh::JoinType",
                    "return_type": "StrokeMesh&",
                    "desc": "Set join type: Miter, Round, Bevel (method chaining)"
                },
                {
                    "name": "setMiterLimit",
                    "params": "limit",
                    "params_typed": "float limit",
                    "return_type": "StrokeMesh&",
                    "desc": "Set miter limit for sharp corners (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y, float z = 0",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "const Vec3& p",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "float x, float y, float z = 0",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec3& p",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertexWithWidth",
                    "params": "x, y, width",
                    "params_typed": "float x, float y, float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex with variable width (method chaining)"
                },
                {
                    "name": "setShape",
                    "params": "path",
                    "params_typed": "const Path &",
                    "return_type": "StrokeMesh&",
                    "desc": "Set shape from Path (method chaining)"
                },
                {
                    "name": "setClosed",
                    "params": "closed",
                    "params_typed": "bool closed",
                    "return_type": "StrokeMesh&",
                    "desc": "Set whether the stroke is closed (method chaining)"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeMesh&",
                    "desc": "Clear all vertices (method chaining)"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the internal mesh (required before draw)"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the stroke mesh"
                }
            ]
        },
        {
            "name": "Video",
            "functions": [
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load a video file"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the video and release resources"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a video is loaded"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Start or resume playback"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop playback and reset to beginning"
                },
                {
                    "name": "setPaused",
                    "params": "paused",
                    "params_typed": "bool paused",
                    "return_type": "void",
                    "desc": "Pause or resume playback"
                },
                {
                    "name": "togglePause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle pause state"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the video frame. Call once per frame in update()"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is currently playing (not paused)"
                },
                {
                    "name": "isPaused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is paused"
                },
                {
                    "name": "isFrameNew",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a new frame is available since last update"
                },
                {
                    "name": "isDone",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playback has reached the end"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video width in pixels"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video height in pixels"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get total duration in seconds"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current position (0.0 to 1.0)"
                },
                {
                    "name": "setPosition",
                    "params": "pct",
                    "params_typed": "float pct",
                    "return_type": "void",
                    "desc": "Seek to position (0.0 to 1.0)"
                },
                {
                    "name": "getCurrentTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback time in seconds"
                },
                {
                    "name": "setCurrentTime",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Seek to a specific time in seconds"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set audio volume (0.0 to 1.0)"
                },
                {
                    "name": "getVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current volume"
                },
                {
                    "name": "setSpeed",
                    "params": "speed",
                    "params_typed": "float speed",
                    "return_type": "void",
                    "desc": "Set playback speed (1.0 = normal, 2.0 = double speed)"
                },
                {
                    "name": "getSpeed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback speed"
                },
                {
                    "name": "setPan",
                    "params": "pan",
                    "params_typed": "float pan",
                    "return_type": "void",
                    "desc": "Set stereo pan (-1.0 left, 0.0 center, 1.0 right)"
                },
                {
                    "name": "getPan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stereo pan"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping"
                },
                {
                    "name": "isLoop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if looping is enabled"
                },
                {
                    "name": "getCurrentFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current frame number"
                },
                {
                    "name": "getTotalFrames",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get total number of frames"
                },
                {
                    "name": "setFrame",
                    "params": "frame",
                    "params_typed": "int frame",
                    "return_type": "void",
                    "desc": "Seek to a specific frame number"
                },
                {
                    "name": "nextFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Advance to the next frame"
                },
                {
                    "name": "previousFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go back to the previous frame"
                },
                {
                    "name": "firstFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go to the first frame"
                },
                {
                    "name": "setGammaCorrection",
                    "params": "gamma",
                    "params_typed": "float gamma",
                    "return_type": "void",
                    "desc": "Set gamma correction (1.0 = none). Use ~0.45 to brighten on platforms with dark output (e.g. macOS AVFoundation)"
                },
                {
                    "name": "getGammaCorrection",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current gamma correction value"
                },
                {
                    "name": "setUseHwAccel",
                    "params": "enable",
                    "params_typed": "bool enable",
                    "return_type": "void",
                    "desc": "Enable/disable hardware decoding. Must be called before load(). Default: true. When enabled, the player probes available HW backends (VAAPI, V4L2M2M, CUDA, etc.) and falls back to software if none are available. Currently affects the Linux backend only."
                },
                {
                    "name": "getUseHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get HW accel preference (not the actual backend — use isUsingHwAccel() for that)"
                },
                {
                    "name": "isUsingHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if hardware decoding is currently active (after load)"
                },
                {
                    "name": "getHwAccelName",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the name of the active decode backend. Returns 'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', or 'none'"
                },
                {
                    "name": "setResyncThreshold",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Set the maximum video/audio drift before hard re-sync. When drift exceeds this threshold, video seeks to match audio position instead of catching up frame-by-frame. Set to 0 to disable. Default: 0.5s. Primarily affects Linux (FFmpeg) backend."
                },
                {
                    "name": "getResyncThreshold",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the current resync threshold in seconds"
                },
                {
                    "name": "hasAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if the loaded video has an audio track"
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
            "name": "FONT_SANS_JA",
            "value": "string",
            "desc": "Japanese sans-serif font (Hiragino Sans on macOS, Yu Gothic on Win, Noto Sans CJK JP on Linux/Android, Google Fonts CDN URL on Web)"
        },
        {
            "name": "FONT_SERIF_JA",
            "value": "string",
            "desc": "Japanese serif font (Hiragino Mincho on macOS, Yu Mincho on Win, Noto Serif CJK JP on Linux/Android, Google Fonts CDN URL on Web)"
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
                ]
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
                        "float x_, float y_"
                    ],
                    "desc": "Set vector components"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vector length"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get squared length (faster, no sqrt)"
                },
                {
                    "name": "normalized",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized copy"
                },
                {
                    "name": "normalize",
                    "return": "Vec2&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize in place"
                },
                {
                    "name": "limit",
                    "return": "Vec2&",
                    "signatures": [
                        "float max"
                    ],
                    "desc": "Limit length to max"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "const Vec2 & v"
                    ],
                    "desc": "Dot product"
                },
                {
                    "name": "cross",
                    "return": "float",
                    "signatures": [
                        "const Vec2 & v"
                    ],
                    "desc": "Cross product (z component)"
                },
                {
                    "name": "distance",
                    "return": "float",
                    "signatures": [
                        "const Vec2 & v"
                    ],
                    "desc": "Distance to another vector"
                },
                {
                    "name": "distanceSquared",
                    "return": "float",
                    "signatures": [
                        "const Vec2 & v"
                    ],
                    "desc": "Squared distance (faster)"
                },
                {
                    "name": "angle",
                    "return": "float",
                    "signatures": [
                        "",
                        "const Vec2& v"
                    ],
                    "desc": "Angle in radians"
                },
                {
                    "name": "rotated",
                    "return": "Vec2",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Get rotated copy"
                },
                {
                    "name": "rotate",
                    "return": "Vec2&",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate in place"
                },
                {
                    "name": "lerp",
                    "return": "Vec2",
                    "signatures": [
                        "const Vec2 & v, float t"
                    ],
                    "desc": "Linear interpolation"
                },
                {
                    "name": "perpendicular",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get perpendicular vector"
                },
                {
                    "name": "reflected",
                    "return": "Vec2",
                    "signatures": [
                        "const Vec2 & normal"
                    ],
                    "desc": "Get reflected vector"
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
                    "desc": "Create Vec2 from angle"
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
                ]
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
                        "float x_, float y_, float z_"
                    ],
                    "desc": "Set vector components"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vector length"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get squared length"
                },
                {
                    "name": "normalized",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized copy"
                },
                {
                    "name": "normalize",
                    "return": "Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize in place"
                },
                {
                    "name": "limit",
                    "return": "Vec3&",
                    "signatures": [
                        "float max"
                    ],
                    "desc": "Limit length to max"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "const Vec3 & v"
                    ],
                    "desc": "Dot product"
                },
                {
                    "name": "cross",
                    "return": "Vec3",
                    "signatures": [
                        "const Vec3 & v"
                    ],
                    "desc": "Cross product"
                },
                {
                    "name": "distance",
                    "return": "float",
                    "signatures": [
                        "const Vec3 & v"
                    ],
                    "desc": "Distance to another vector"
                },
                {
                    "name": "distanceSquared",
                    "return": "float",
                    "signatures": [
                        "const Vec3 & v"
                    ],
                    "desc": "Squared distance"
                },
                {
                    "name": "lerp",
                    "return": "Vec3",
                    "signatures": [
                        "const Vec3 & v, float t"
                    ],
                    "desc": "Linear interpolation"
                },
                {
                    "name": "reflected",
                    "return": "Vec3",
                    "signatures": [
                        "const Vec3 & normal"
                    ],
                    "desc": "Get reflected vector"
                },
                {
                    "name": "xy",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as Vec2"
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
                ]
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
                    "desc": "Convert to Vec2 (float)"
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
                ]
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
                    "desc": "Convert to Vec3 (float)"
                },
                {
                    "name": "xy",
                    "return": "IVec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as IVec2"
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
                ]
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
                    "desc": "Convert to Vec2 (float)"
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
                ]
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
                    "desc": "Convert to Vec3 (float)"
                },
                {
                    "name": "xy",
                    "return": "IVec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get XY components as IVec2"
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
                ]
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
                        "float r_, float g_, float b_, float a_ = 1.0f",
                        "float r, float g, float b, float a",
                        "float gray, float a_ = 1.0f"
                    ],
                    "desc": "Set color components"
                },
                {
                    "name": "toHex",
                    "return": "uint32_t",
                    "signatures": [
                        "bool includeAlpha = false",
                        "bool includeAlpha"
                    ],
                    "desc": "Convert to hex value"
                },
                {
                    "name": "lerp",
                    "return": "Color",
                    "signatures": [
                        "const Color & target, float t"
                    ],
                    "desc": "Interpolate in OKLab space"
                },
                {
                    "name": "lerpRGB",
                    "return": "Color",
                    "signatures": [
                        "const Color & target, float t"
                    ],
                    "desc": "Interpolate in RGB space"
                },
                {
                    "name": "clamped",
                    "return": "Color",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get clamped copy (0.0-1.0)"
                },
                {
                    "name": "toLinear",
                    "return": "ColorLinear",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to linear RGB color space"
                },
                {
                    "name": "toHSB",
                    "return": "ColorHSB",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to HSB (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "toOKLab",
                    "return": "ColorOKLab",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to OKLab (perceptually uniform)"
                },
                {
                    "name": "toOKLCH",
                    "return": "ColorOKLCH",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to OKLCH (L: 0-1, C: 0-0.4, H: 0-1)"
                },
                {
                    "name": "lerpLinear",
                    "return": "Color",
                    "signatures": [
                        "const Color & target, float t"
                    ],
                    "desc": "Interpolate in linear RGB space"
                },
                {
                    "name": "lerpHSB",
                    "return": "Color",
                    "signatures": [
                        "const Color & target, float t"
                    ],
                    "desc": "Interpolate in HSB space"
                },
                {
                    "name": "lerpOKLab",
                    "return": "Color",
                    "signatures": [
                        "const Color & target, float t"
                    ],
                    "desc": "Interpolate in OKLab space (perceptually uniform)"
                },
                {
                    "name": "lerpOKLCH",
                    "return": "Color",
                    "signatures": [
                        "const Color & target, float t"
                    ],
                    "desc": "Interpolate in OKLCH space (shortest hue path)"
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
                    "desc": "Create from hex value"
                },
                {
                    "name": "Color_fromHSB",
                    "return": "Color",
                    "signatures": [
                        "float h, float s, float b",
                        "float h, float s, float b, float a"
                    ],
                    "desc": "Create from HSB (H: 0-1)"
                },
                {
                    "name": "Color_fromOKLab",
                    "return": "Color",
                    "signatures": [
                        "float L, float a, float b",
                        "float L, float a, float b, float alpha"
                    ],
                    "desc": "Create from OKLab (L: 0-1, a: ~-0.4-0.4, b: ~-0.4-0.4)"
                },
                {
                    "name": "Color_fromOKLCH",
                    "return": "Color",
                    "signatures": [
                        "float L, float C, float H",
                        "float L, float C, float H, float a"
                    ],
                    "desc": "Create from OKLCH (L: 0-1, C: 0-0.4, H: 0-1)"
                },
                {
                    "name": "Color_fromLinear",
                    "return": "Color",
                    "signatures": [
                        "float r, float g, float b",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Create from linear RGB"
                },
                {
                    "name": "Color_fromBytes",
                    "return": "Color",
                    "signatures": [
                        "int r, int g, int b",
                        "int r, int g, int b, int a"
                    ],
                    "desc": "Create from 0-255 values"
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
                ]
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
                    "desc": "Set rectangle bounds"
                },
                {
                    "name": "getRight",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get right edge (x + width)"
                },
                {
                    "name": "getBottom",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get bottom edge (y + height)"
                },
                {
                    "name": "getCenterX",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get center X"
                },
                {
                    "name": "getCenterY",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get center Y"
                },
                {
                    "name": "contains",
                    "return": "bool",
                    "signatures": [
                        "float px, float py"
                    ],
                    "desc": "Check if point is inside"
                },
                {
                    "name": "intersects",
                    "return": "bool",
                    "signatures": [
                        "const Rect & other"
                    ],
                    "desc": "Check if intersects with another rect"
                }
            ]
        },
        {
            "name": "Mat4",
            "desc": "4x4 matrix for 3D transformations",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "transposed",
                    "return": "Mat4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get transposed matrix"
                },
                {
                    "name": "inverted",
                    "return": "Mat4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get inverse matrix"
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
                ]
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
                        "const Vec3 & v"
                    ],
                    "desc": "Rotate a vector"
                },
                {
                    "name": "toEuler",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to Euler angles"
                },
                {
                    "name": "toMatrix",
                    "return": "Mat4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Convert to rotation matrix"
                },
                {
                    "name": "normalized",
                    "return": "Quaternion",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normalized quaternion"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get quaternion length"
                },
                {
                    "name": "conjugate",
                    "return": "Quaternion",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get conjugate quaternion"
                }
            ]
        },
        {
            "name": "Pixels",
            "desc": "Pixel buffer for image manipulation",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height, int channels = 4, PixelFormat format = PixelFormat::U8",
                        "int width, int height, int channels = 4, PixelFormat format = PixelFormat::U8"
                    ],
                    "desc": "Allocate pixel buffer"
                },
                {
                    "name": "getColor",
                    "return": "Color",
                    "signatures": [
                        "int x, int y"
                    ],
                    "desc": "Get pixel color at position"
                },
                {
                    "name": "setColor",
                    "return": "void",
                    "signatures": [
                        "int x, int y, const Color & c"
                    ],
                    "desc": "Set pixel color at position"
                },
                {
                    "name": "halve",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Replace with 2x2 box-averaged half. Gamma-correct for U8."
                },
                {
                    "name": "resize",
                    "return": "void",
                    "signatures": [
                        "int newWidth, int newHeight"
                    ],
                    "desc": "Quality resize: BoxArea on downscale, Catmull-Rom bicubic on upscale, gamma-correct for U8."
                },
                {
                    "name": "crop",
                    "return": "void",
                    "signatures": [
                        "int x, int y, int w, int h"
                    ],
                    "desc": "Crop to (w x h) region starting at (x, y). Out-of-bounds samples use clamp-to-edge."
                },
                {
                    "name": "mirror",
                    "return": "void",
                    "signatures": [
                        "bool horizontal, bool vertical"
                    ],
                    "desc": "Flip in place. Both true is 180°."
                },
                {
                    "name": "mirrorH",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror horizontally (alias for mirror(true, false))"
                },
                {
                    "name": "mirrorV",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror vertically (alias for mirror(false, true))"
                },
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const std::filesystem::path &"
                    ],
                    "desc": "Load image from file"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "const std::filesystem::path &"
                    ],
                    "desc": "Save image to file"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release pixel buffer"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of channels"
                },
                {
                    "name": "getTotalBytes",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get total byte size"
                },
                {
                    "name": "getData",
                    "return": "uint8_t*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get raw data pointer"
                },
                {
                    "name": "loadFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const uint8_t* buffer, int len"
                    ],
                    "desc": "Load image from memory"
                },
                {
                    "name": "setFromPixels",
                    "return": "void",
                    "signatures": [
                        "const uint8_t* data, int width, int height, int channels"
                    ],
                    "desc": "Copy from external pixel data"
                },
                {
                    "name": "copyTo",
                    "return": "void",
                    "signatures": [
                        "uint8_t* dst"
                    ],
                    "desc": "Copy to external buffer"
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
                        "const std::filesystem::path &, bool",
                        "const std::filesystem::path &, bool"
                    ],
                    "desc": "Load image from file. `mipmaps=true` builds a mip chain — recommended when the image will be sampled at varying scales (e.g. mapped onto a 3D surface)."
                },
                {
                    "name": "loadFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const unsigned char * buffer, int len, bool mipmaps = false",
                        "const uint8_t* buffer, int len, bool mipmaps"
                    ],
                    "desc": "Load image from memory. `mipmaps=true` builds a mip chain."
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "const std::filesystem::path &"
                    ],
                    "desc": "Save image to file"
                },
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height, int channels = 4, bool mipmaps = false",
                        "int width, int height, int channels = 4, bool mipmaps = false",
                        "int width, int height, int channels, bool mipmaps"
                    ],
                    "desc": "Allocate empty image for dynamic updates. `mipmaps=true` builds a chain refreshed on every update()."
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release image resources"
                },
                {
                    "name": "halve",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Replace with 2x2 box-averaged half. Gamma-correct for U8."
                },
                {
                    "name": "resize",
                    "return": "void",
                    "signatures": [
                        "int newWidth, int newHeight"
                    ],
                    "desc": "Quality resize: BoxArea on downscale, Catmull-Rom bicubic on upscale, gamma-correct for U8. Use FBO sampling for fast paths."
                },
                {
                    "name": "crop",
                    "return": "void",
                    "signatures": [
                        "int x, int y, int w, int h"
                    ],
                    "desc": "Crop to (w x h) region starting at (x, y). Out-of-bounds samples use clamp-to-edge."
                },
                {
                    "name": "mirror",
                    "return": "void",
                    "signatures": [
                        "bool horizontal, bool vertical"
                    ],
                    "desc": "Flip the image. `horizontal=true` mirrors left-right; `vertical=true` mirrors top-bottom; both true is 180°."
                },
                {
                    "name": "mirrorH",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror horizontally (alias for mirror(true, false))"
                },
                {
                    "name": "mirrorV",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror vertically (alias for mirror(false, true))"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of channels"
                },
                {
                    "name": "getPixels",
                    "return": "Pixels&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get pixels reference for direct manipulation"
                },
                {
                    "name": "getPixelsData",
                    "return": "uint8_t*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get raw pixel data pointer"
                },
                {
                    "name": "getColor",
                    "return": "Color",
                    "signatures": [
                        "int x, int y"
                    ],
                    "desc": "Get pixel color at position"
                },
                {
                    "name": "setColor",
                    "return": "void",
                    "signatures": [
                        "int x, int y, const Color & c"
                    ],
                    "desc": "Set pixel color at position (marks image as dirty)"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Apply pixel changes to GPU texture"
                },
                {
                    "name": "setDirty",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mark image as needing update"
                },
                {
                    "name": "getTexture",
                    "return": "Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get internal texture"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw image"
                }
            ]
        },
        {
            "name": "Texture",
            "desc": "GPU texture for rendering",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int width, int height, int channels = 4, TextureUsage usage = TextureUsage::Immutable, int sampleCount = 1",
                        "const Pixels& pixels, TextureUsage usage = TextureUsage::Immutable, bool mipmaps = false"
                    ],
                    "desc": "Allocate texture"
                },
                {
                    "name": "loadData",
                    "return": "void",
                    "signatures": [
                        "const Pixels& pixels"
                    ],
                    "desc": "Load pixel data to texture"
                },
                {
                    "name": "bind",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Bind texture for rendering"
                },
                {
                    "name": "unbind",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Unbind texture"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw texture"
                },
                {
                    "name": "drawSubsection",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float w, float h, float sx, float sy, float sw, float sh"
                    ],
                    "desc": "Draw subsection of texture"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release texture resources"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of channels"
                },
                {
                    "name": "getUsage",
                    "return": "TextureUsage",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get texture usage mode"
                },
                {
                    "name": "getSampleCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get MSAA sample count"
                },
                {
                    "name": "setMinFilter",
                    "return": "void",
                    "signatures": [
                        "TextureFilter filter"
                    ],
                    "desc": "Set minification filter"
                },
                {
                    "name": "setMagFilter",
                    "return": "void",
                    "signatures": [
                        "TextureFilter filter"
                    ],
                    "desc": "Set magnification filter"
                },
                {
                    "name": "setFilter",
                    "return": "void",
                    "signatures": [
                        "TextureFilter filter"
                    ],
                    "desc": "Set both min and mag filters"
                },
                {
                    "name": "getMinFilter",
                    "return": "TextureFilter",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get minification filter"
                },
                {
                    "name": "getMagFilter",
                    "return": "TextureFilter",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get magnification filter"
                },
                {
                    "name": "setWrapU",
                    "return": "void",
                    "signatures": [
                        "TextureWrap wrap"
                    ],
                    "desc": "Set horizontal wrap mode"
                },
                {
                    "name": "setWrapV",
                    "return": "void",
                    "signatures": [
                        "TextureWrap wrap"
                    ],
                    "desc": "Set vertical wrap mode"
                },
                {
                    "name": "setWrap",
                    "return": "void",
                    "signatures": [
                        "TextureWrap wrap"
                    ],
                    "desc": "Set both wrap modes"
                },
                {
                    "name": "getWrapU",
                    "return": "TextureWrap",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get horizontal wrap mode"
                },
                {
                    "name": "getWrapV",
                    "return": "TextureWrap",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertical wrap mode"
                }
            ]
        },
        {
            "name": "Fbo",
            "desc": "Framebuffer object for offscreen rendering",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "allocate",
                    "return": "void",
                    "signatures": [
                        "int w, int h, int sampleCount = 1, TextureFormat format = TextureFormat::RGBA8, bool mipmaps = false",
                        "int w, int h, int sampleCount = 1, TextureFormat format = TextureFormat::RGBA8, bool mipmaps = false",
                        "int w, int h, int sampleCount = 1, TextureFormat format = TextureFormat::RGBA8, bool mipmaps = false",
                        "int width, int height, int sampleCount, TextureFormat format, bool mipmaps"
                    ],
                    "desc": "Allocate framebuffer. `mipmaps=true` builds a full mip chain that is refreshed automatically at end()."
                },
                {
                    "name": "begin",
                    "return": "void",
                    "signatures": [
                        "",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Begin rendering to FBO"
                },
                {
                    "name": "end",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "End rendering to FBO"
                },
                {
                    "name": "getTexture",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get FBO texture"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get height"
                },
                {
                    "name": "isAllocated",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if allocated"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float w, float h"
                    ],
                    "desc": "Draw FBO contents"
                },
                {
                    "name": "getSampleCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get MSAA sample count"
                },
                {
                    "name": "isActive",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if currently rendering to FBO"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release FBO resources"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "const std::filesystem::path &"
                    ],
                    "desc": "Save FBO contents to file"
                },
                {
                    "name": "copyTo",
                    "return": "bool",
                    "signatures": [
                        "Image & image"
                    ],
                    "desc": "Copy FBO contents to Image"
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
                ]
            },
            "methods": [
                {
                    "name": "addVertex",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float z",
                        "float x, float y",
                        "float x, float y, float z"
                    ],
                    "desc": "Add a vertex"
                },
                {
                    "name": "addVertices",
                    "return": "void",
                    "signatures": [
                        "const std::vector<Vec3>& verts",
                        "const std::vector<Vec2>& verts"
                    ],
                    "desc": "Add multiple vertices"
                },
                {
                    "name": "getVertices",
                    "return": "const std::vector<Vec3>&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all vertices"
                },
                {
                    "name": "size",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertex count"
                },
                {
                    "name": "empty",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if polyline is empty"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear all vertices"
                },
                {
                    "name": "moveTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float z = 0",
                        "float x, float y, float z",
                        "float x, float y, float z = 0",
                        "const Vec3& p"
                    ],
                    "desc": "Start a new subpath at (x, y). A single Path can hold multiple disjoint contours (think SVG `<path>` with `M ... M ...`) — used by Font::getGlyphPath to keep an outer ring and its holes in one Path so drawFill can detect holes."
                },
                {
                    "name": "lineTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float z = 0",
                        "float x, float y, float z",
                        "float x, float y, float z = 0",
                        "const Vec3& p"
                    ],
                    "desc": "Add line segment to point"
                },
                {
                    "name": "bezierTo",
                    "return": "void",
                    "signatures": [
                        "float cx1, float cy1, float cx2, float cy2, float x, float y, int resolution = -1",
                        "float cx1, float cy1, float cx2, float cy2, float x, float y, int resolution = -1",
                        "const Vec3& cp1, const Vec3& cp2, const Vec3& to, int resolution = -1"
                    ],
                    "desc": "Add cubic bezier curve (resolution=-1 uses current curve style)"
                },
                {
                    "name": "quadBezierTo",
                    "return": "void",
                    "signatures": [
                        "float cx, float cy, float x, float y, int resolution = -1",
                        "float cx, float cy, float x, float y, int resolution = -1",
                        "const Vec3& cp, const Vec3& to, int resolution = -1"
                    ],
                    "desc": "Add quadratic bezier curve (resolution=-1 uses current curve style)"
                },
                {
                    "name": "curveTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float z = 0, int resolution = -1",
                        "const Vec2& to, int resolution = -1",
                        "float x, float y, float z = 0, int resolution = -1"
                    ],
                    "desc": "Add Catmull-Rom curve segment (needs >=4 consecutive calls; resolution=-1 uses current curve style)"
                },
                {
                    "name": "arc",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float radius, float angleBegin, float angleEnd, bool clockwise = true",
                        "float x, float y, float radius, float angleBegin, float angleEnd, bool clockwise = true",
                        "const Vec3& center, float radius, float angleBegin, float angleEnd, bool clockwise = true"
                    ],
                    "desc": "Add an arc (angles in radians)"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the path"
                },
                {
                    "name": "setClosed",
                    "return": "void",
                    "signatures": [
                        "bool closed"
                    ],
                    "desc": "Set closed state"
                },
                {
                    "name": "isClosed",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if path is closed"
                },
                {
                    "name": "reverseWinding",
                    "return": "Path&",
                    "signatures": [
                        "",
                        "size_t subpath"
                    ],
                    "desc": "Reverse the winding direction (vertex order) of all subpaths, or of one subpath. Under drawFill's non-zero winding rule, reversing a subpath toggles it between filling and cutting — e.g. build a circle contour, then reverseWinding(i) it into a hole punch. Reversing ALL subpaths leaves the render unchanged (only relative direction matters) — handy for imported outlines using the opposite convention."
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the polyline (fill + 1px stroke based on current style — fill uses triangle fan, convex only). For concave shapes / holes use drawFill."
                },
                {
                    "name": "drawFill",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Fill the path as a concave polygon with holes (earcut tessellation). Subpaths follow the non-zero winding rule (SVG / PostScript default): a subpath wound opposite to its enclosing ring becomes a hole; same-direction subpaths union (never punch holes). Handles glyphs with holes (e, a, O, 日 ...), overlapping contours, and both TrueType / CFF winding conventions. To cut a hole in a hand-built Path, wind the inner subpath opposite (see reverseWinding)."
                },
                {
                    "name": "drawStroke",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Thick stroke via StrokeMesh (respects strokeWeight / strokeCap / strokeJoin), per-subpath. Use draw() for 1-pixel lines."
                },
                {
                    "name": "getBounds",
                    "return": "Rect",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get bounding box as Rect"
                },
                {
                    "name": "getPerimeter",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get total path length"
                }
            ]
        },
        {
            "name": "Mesh",
            "desc": "3D mesh with vertices, colors, normals, indices",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "setMode",
                    "return": "Mesh&",
                    "signatures": [
                        "PrimitiveMode mode"
                    ],
                    "desc": "Set primitive mode (Triangles, Lines, Points, etc.)"
                },
                {
                    "name": "getMode",
                    "return": "PrimitiveMode",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current primitive mode"
                },
                {
                    "name": "addVertex",
                    "return": "Mesh&",
                    "signatures": [
                        "float x, float y, float z",
                        "float x, float y, float z = 0.0f",
                        "const Vec3& v"
                    ],
                    "desc": "Add a vertex"
                },
                {
                    "name": "addVertices",
                    "return": "Mesh&",
                    "signatures": [
                        "const std::vector<Vec3> & verts",
                        "const std::vector<Vec3> & verts"
                    ],
                    "desc": "Add multiple vertices"
                },
                {
                    "name": "getVertices",
                    "return": "const std::vector<Vec3>&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all vertices"
                },
                {
                    "name": "getNumVertices",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertex count"
                },
                {
                    "name": "addColor",
                    "return": "Mesh&",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a = 1.0f"
                    ],
                    "desc": "Add a vertex color"
                },
                {
                    "name": "addColors",
                    "return": "Mesh&",
                    "signatures": [
                        "const std::vector<Color> & cols"
                    ],
                    "desc": "Add multiple vertex colors"
                },
                {
                    "name": "getColors",
                    "return": "const std::vector<Color>&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all vertex colors"
                },
                {
                    "name": "getNumColors",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get vertex color count"
                },
                {
                    "name": "hasColors",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has vertex colors"
                },
                {
                    "name": "addIndex",
                    "return": "Mesh&",
                    "signatures": [
                        "unsigned int index"
                    ],
                    "desc": "Add an index"
                },
                {
                    "name": "addIndices",
                    "return": "Mesh&",
                    "signatures": [
                        "const std::vector<unsigned int> & inds"
                    ],
                    "desc": "Add multiple indices"
                },
                {
                    "name": "addTriangle",
                    "return": "Mesh&",
                    "signatures": [
                        "unsigned int i0, unsigned int i1, unsigned int i2"
                    ],
                    "desc": "Add a triangle (3 indices)"
                },
                {
                    "name": "getIndices",
                    "return": "const std::vector<unsigned int>&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all indices"
                },
                {
                    "name": "getNumIndices",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get index count"
                },
                {
                    "name": "hasIndices",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has indices"
                },
                {
                    "name": "addNormal",
                    "return": "Mesh&",
                    "signatures": [
                        "float nx, float ny, float nz",
                        "float nx, float ny, float nz"
                    ],
                    "desc": "Add a normal vector"
                },
                {
                    "name": "addNormals",
                    "return": "Mesh&",
                    "signatures": [
                        "const std::vector<Vec3> & norms"
                    ],
                    "desc": "Add multiple normals"
                },
                {
                    "name": "setNormal",
                    "return": "Mesh&",
                    "signatures": [
                        "size_t index, const Vec3 & n"
                    ],
                    "desc": "Set normal at index"
                },
                {
                    "name": "getNormal",
                    "return": "Vec3",
                    "signatures": [
                        "size_t index"
                    ],
                    "desc": "Get normal at index"
                },
                {
                    "name": "getNormals",
                    "return": "const std::vector<Vec3>&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all normals"
                },
                {
                    "name": "getNumNormals",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normal count"
                },
                {
                    "name": "hasNormals",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has normals"
                },
                {
                    "name": "addTexCoord",
                    "return": "Mesh&",
                    "signatures": [
                        "float u, float v",
                        "float u, float v"
                    ],
                    "desc": "Add a texture coordinate"
                },
                {
                    "name": "getTexCoords",
                    "return": "const std::vector<Vec2>&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get all texture coordinates"
                },
                {
                    "name": "getNumTexCoords",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get texture coordinate count"
                },
                {
                    "name": "hasTexCoords",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if mesh has texture coordinates"
                },
                {
                    "name": "hasValidTexCoords",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if texture coordinates match vertex count"
                },
                {
                    "name": "clear",
                    "return": "Mesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear all mesh data"
                },
                {
                    "name": "clearVertices",
                    "return": "Mesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear vertices only"
                },
                {
                    "name": "clearColors",
                    "return": "Mesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear colors only"
                },
                {
                    "name": "clearIndices",
                    "return": "Mesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear indices only"
                },
                {
                    "name": "clearNormals",
                    "return": "Mesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear normals only"
                },
                {
                    "name": "clearTexCoords",
                    "return": "Mesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear texture coordinates only"
                },
                {
                    "name": "translate",
                    "return": "Mesh&",
                    "signatures": [
                        "float x, float y, float z",
                        "float x, float y, float z"
                    ],
                    "desc": "Translate all vertices"
                },
                {
                    "name": "rotateX",
                    "return": "Mesh&",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate mesh around X axis"
                },
                {
                    "name": "rotateY",
                    "return": "Mesh&",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate mesh around Y axis"
                },
                {
                    "name": "rotateZ",
                    "return": "Mesh&",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Rotate mesh around Z axis"
                },
                {
                    "name": "scale",
                    "return": "Mesh&",
                    "signatures": [
                        "float s",
                        "float x, float y, float z"
                    ],
                    "desc": "Scale mesh"
                },
                {
                    "name": "transform",
                    "return": "Mesh&",
                    "signatures": [
                        "const Mat4 & m"
                    ],
                    "desc": "Apply transformation matrix"
                },
                {
                    "name": "append",
                    "return": "Mesh&",
                    "signatures": [
                        "const Mesh & other"
                    ],
                    "desc": "Append another mesh"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        "",
                        "const Texture& texture",
                        "const Image& image"
                    ],
                    "desc": "Draw the mesh"
                },
                {
                    "name": "drawWireframe",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw mesh as wireframe"
                },
                {
                    "name": "drawGpuPbr",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the mesh through the GPU PBR pipeline (uploads to GPU buffers as needed, then renders using active lights, material and environment)"
                }
            ]
        },
        {
            "name": "Sound",
            "desc": "Audio playback",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const std::string & path"
                    ],
                    "desc": "Load audio file. Format auto-detected by extension: .wav .mp3 .ogg .flac .aac .m4a"
                },
                {
                    "name": "play",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Play audio"
                },
                {
                    "name": "stop",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop audio"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loaded"
                },
                {
                    "name": "isPlaying",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if playing"
                },
                {
                    "name": "setVolume",
                    "return": "void",
                    "signatures": [
                        "float volume"
                    ],
                    "desc": "Set volume (0.0-1.0)"
                },
                {
                    "name": "setLoop",
                    "return": "void",
                    "signatures": [
                        "bool loop"
                    ],
                    "desc": "Set loop mode"
                },
                {
                    "name": "isLoop",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loop mode is enabled"
                },
                {
                    "name": "setPan",
                    "return": "void",
                    "signatures": [
                        "float pan"
                    ],
                    "desc": "Set panning (-1.0=left, 0.0=center, 1.0=right)"
                },
                {
                    "name": "getPan",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current panning"
                },
                {
                    "name": "setSpeed",
                    "return": "void",
                    "signatures": [
                        "float speed"
                    ],
                    "desc": "Set playback speed (1.0=normal)"
                },
                {
                    "name": "getSpeed",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current playback speed"
                },
                {
                    "name": "pause",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Pause playback"
                },
                {
                    "name": "resume",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Resume playback"
                },
                {
                    "name": "isPaused",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if paused"
                },
                {
                    "name": "getPosition",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get playback position in seconds"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get total duration in seconds"
                }
            ]
        },
        {
            "name": "Font",
            "desc": "TrueType font for text rendering",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const std::string & nameOrPath, int size"
                    ],
                    "desc": "Load font file"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if loaded"
                },
                {
                    "name": "drawString",
                    "return": "void",
                    "signatures": [
                        "const string& text, float x, float y"
                    ],
                    "desc": "Draw text"
                },
                {
                    "name": "getGlyphPath",
                    "return": "Path",
                    "signatures": [
                        "uint32_t codepoint"
                    ],
                    "desc": "Vector outline of a single glyph as one Path with one subpath per contour. Em-normalized (1.0 = em), screen Y-down, baseline at y=0, pen at x=0. Use Path::drawFill() for filled rendering — holes (e, a, O, 日 ...) are auto-detected via earcut."
                },
                {
                    "name": "getStringPath",
                    "return": "Path",
                    "signatures": [
                        "const string& text, float x, float y",
                        "const string& text, float x, float y, Direction h, Direction v"
                    ],
                    "desc": "Vector outline of the whole string at (x, y) as one Path containing every glyph's contours (one subpath each). Uses the same layout pipeline as drawString (writing mode, alignment, wrap, kinsoku, TCY). Logical pixels — drawStroke / drawFill / transform freely."
                },
                {
                    "name": "getWidth",
                    "return": "float",
                    "signatures": [
                        "const std::string & text"
                    ],
                    "desc": "Get text width"
                },
                {
                    "name": "getHeight",
                    "return": "float",
                    "signatures": [
                        "const std::string & text"
                    ],
                    "desc": "Get text height"
                },
                {
                    "name": "getLineHeight",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get line height"
                },
                {
                    "name": "getSize",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get font size"
                },
                {
                    "name": "clearAtlas",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear font atlas (GPU memory freed, glyphs re-rasterized on next draw)"
                },
                {
                    "name": "getMemoryUsage",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get atlas memory usage in bytes"
                },
                {
                    "name": "getLoadedGlyphCount",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of loaded glyphs"
                },
                {
                    "name": "getAtlasCount",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of atlas pages"
                },
                {
                    "name": "setWritingMode",
                    "return": "void",
                    "signatures": [
                        "WritingMode mode"
                    ],
                    "desc": "Switch between horizontal and vertical (tategaki) writing. Default is Horizontal (existing behavior unchanged)."
                },
                {
                    "name": "getWritingMode",
                    "return": "WritingMode",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current writing mode"
                },
                {
                    "name": "setTcyDigits",
                    "return": "void",
                    "signatures": [
                        "int maxDigits, TcyMode inMode, TcyMode overflowMode"
                    ],
                    "desc": "Tate-chu-yoko config for ASCII digit runs in vertical text. Runs with <= maxDigits use inMode (typically Combine — squeezed into one cell); longer runs fall back to overflowMode (typically Rotate)."
                },
                {
                    "name": "setTcyLatin",
                    "return": "void",
                    "signatures": [
                        "TcyMode mode"
                    ],
                    "desc": "Tate-chu-yoko mode for Latin letter runs in vertical text. Default is Rotate (whole run rotated 90 CW)."
                }
            ]
        },
        {
            "name": "FileWriter",
            "desc": "Streaming file writer with immediate flush",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "open",
                    "return": "bool",
                    "signatures": [
                        "const std::string & path, bool append = false",
                        "const std::string & path, bool append = false"
                    ],
                    "desc": "Open file for writing"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close file"
                },
                {
                    "name": "isOpen",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if file is open"
                },
                {
                    "name": "write",
                    "return": "FileWriter&",
                    "signatures": [
                        "const std::string& text",
                        "char c",
                        "const void* data, size_t size"
                    ],
                    "desc": "Write data to file"
                },
                {
                    "name": "writeLine",
                    "return": "FileWriter &",
                    "signatures": [
                        "const std::string & text = \"\"",
                        "const std::string & text = \"\""
                    ],
                    "desc": "Write line with newline"
                },
                {
                    "name": "flush",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Flush buffer to disk"
                }
            ]
        },
        {
            "name": "FileReader",
            "desc": "Streaming file reader for large files",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "open",
                    "return": "bool",
                    "signatures": [
                        "const std::string & path"
                    ],
                    "desc": "Open file for reading"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close file"
                },
                {
                    "name": "isOpen",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if file is open"
                },
                {
                    "name": "eof",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if at end of file"
                },
                {
                    "name": "readLine",
                    "return": "string",
                    "signatures": [
                        ""
                    ],
                    "desc": "Read one line"
                },
                {
                    "name": "readChar",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Read one character (-1 at EOF)"
                },
                {
                    "name": "read",
                    "return": "size_t",
                    "signatures": [
                        "void* buffer, size_t size"
                    ],
                    "desc": "Read binary data"
                },
                {
                    "name": "seek",
                    "return": "void",
                    "signatures": [
                        "size_t pos"
                    ],
                    "desc": "Seek to position"
                },
                {
                    "name": "tell",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get current position"
                },
                {
                    "name": "remaining",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get remaining bytes"
                }
            ]
        },
        {
            "name": "Light",
            "desc": "Light source for 3D PBR rendering (directional, point, or spot)",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "setDirectional",
                    "return": "void",
                    "signatures": [
                        "const Vec3& direction",
                        "float dx, float dy, float dz"
                    ],
                    "desc": "Set as directional light"
                },
                {
                    "name": "setPoint",
                    "return": "void",
                    "signatures": [
                        "const Vec3& position",
                        "float x, float y, float z"
                    ],
                    "desc": "Set as point light"
                },
                {
                    "name": "setSpot",
                    "return": "void",
                    "signatures": [
                        "const Vec3& position, const Vec3& direction, float innerHalfAngle, float outerHalfAngle",
                        "float px, float py, float pz, float dx, float dy, float dz, float innerHalfAngle, float outerHalfAngle"
                    ],
                    "desc": "Set as spot light with cone angles"
                },
                {
                    "name": "setAmbient",
                    "return": "void",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set ambient light color"
                },
                {
                    "name": "setDiffuse",
                    "return": "void",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set diffuse (main) light color"
                },
                {
                    "name": "setSpecular",
                    "return": "void",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set specular light color"
                },
                {
                    "name": "setIntensity",
                    "return": "void",
                    "signatures": [
                        "float intensity"
                    ],
                    "desc": "Set light intensity multiplier"
                },
                {
                    "name": "setAttenuation",
                    "return": "void",
                    "signatures": [
                        "float constant, float linear, float quadratic"
                    ],
                    "desc": "Set distance attenuation factors"
                },
                {
                    "name": "setProjectionTexture",
                    "return": "void",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set texture for projector-style light (gobo)"
                },
                {
                    "name": "setLensShift",
                    "return": "void",
                    "signatures": [
                        "float sx, float sy"
                    ],
                    "desc": "Set projector lens shift (-1 to 1, normalized)"
                },
                {
                    "name": "setProjectorAspect",
                    "return": "void",
                    "signatures": [
                        "float aspect"
                    ],
                    "desc": "Set projector aspect ratio"
                },
                {
                    "name": "setIesProfile",
                    "return": "void",
                    "signatures": [
                        "const IesProfile* ies"
                    ],
                    "desc": "Attach IES photometric profile for angular intensity"
                },
                {
                    "name": "enableShadow",
                    "return": "void",
                    "signatures": [
                        "int resolution"
                    ],
                    "desc": "Enable shadow casting (depth map at given resolution)"
                },
                {
                    "name": "disableShadow",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disable shadow casting"
                },
                {
                    "name": "enable",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Enable this light"
                },
                {
                    "name": "disable",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disable this light"
                },
                {
                    "name": "setShadowBias",
                    "return": "void",
                    "signatures": [
                        "float bias"
                    ],
                    "desc": "Set shadow depth bias in world units"
                },
                {
                    "name": "getType",
                    "return": "LightType",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light type (Directional, Point, or Spot)"
                },
                {
                    "name": "getPosition",
                    "return": "const Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light position"
                },
                {
                    "name": "getDirection",
                    "return": "const Vec3&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light direction"
                },
                {
                    "name": "getIntensity",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get light intensity"
                },
                {
                    "name": "getAmbient",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get ambient light color"
                },
                {
                    "name": "getDiffuse",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get diffuse (main) light color"
                },
                {
                    "name": "getSpecular",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get specular light color"
                },
                {
                    "name": "getConstantAttenuation",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get constant attenuation factor"
                },
                {
                    "name": "getLinearAttenuation",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get linear attenuation factor"
                },
                {
                    "name": "getQuadraticAttenuation",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get quadratic attenuation factor"
                },
                {
                    "name": "isEnabled",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if light is enabled"
                },
                {
                    "name": "isShadowEnabled",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if shadow casting is enabled"
                },
                {
                    "name": "getShadowResolution",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get shadow map resolution"
                },
                {
                    "name": "getShadowBias",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get shadow depth bias"
                },
                {
                    "name": "getSpotInnerCos",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get spot light inner cone cosine"
                },
                {
                    "name": "getSpotOuterCos",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get spot light outer cone cosine"
                },
                {
                    "name": "getProjectionTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projection texture (gobo)"
                },
                {
                    "name": "hasProjectionTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a projection texture is set"
                },
                {
                    "name": "getLensShiftX",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projector horizontal lens shift"
                },
                {
                    "name": "getLensShiftY",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projector vertical lens shift"
                },
                {
                    "name": "getProjectorAspect",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get projector aspect ratio"
                },
                {
                    "name": "getIesProfile",
                    "return": "const IesProfile*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get attached IES photometric profile"
                },
                {
                    "name": "hasIesProfile",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if an IES profile is attached"
                }
            ]
        },
        {
            "name": "Material",
            "desc": "PBR material (metallic-roughness workflow, glTF 2.0 compatible)",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "setBaseColor",
                    "return": "Material&",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b, float a"
                    ],
                    "desc": "Set base color (albedo)"
                },
                {
                    "name": "setMetallic",
                    "return": "Material&",
                    "signatures": [
                        "float m"
                    ],
                    "desc": "Set metallic factor (0=dielectric, 1=metal)"
                },
                {
                    "name": "setRoughness",
                    "return": "Material&",
                    "signatures": [
                        "float r"
                    ],
                    "desc": "Set roughness factor (0=mirror, 1=matte)"
                },
                {
                    "name": "setEmissive",
                    "return": "Material&",
                    "signatures": [
                        "const Color& c",
                        "float r, float g, float b"
                    ],
                    "desc": "Set emissive color"
                },
                {
                    "name": "setEmissiveStrength",
                    "return": "Material&",
                    "signatures": [
                        "float s"
                    ],
                    "desc": "Set emissive strength multiplier"
                },
                {
                    "name": "setAo",
                    "return": "Material&",
                    "signatures": [
                        "float ao"
                    ],
                    "desc": "Set ambient occlusion factor"
                },
                {
                    "name": "setNormalMap",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set normal map texture for bump mapping"
                },
                {
                    "name": "setBaseColorTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set base color (albedo) texture map"
                },
                {
                    "name": "setMetallicRoughnessTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set metallic-roughness texture (glTF: G=roughness, B=metallic)"
                },
                {
                    "name": "setEmissiveTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set emissive texture map"
                },
                {
                    "name": "setOcclusionTexture",
                    "return": "Material&",
                    "signatures": [
                        "const Texture* tex"
                    ],
                    "desc": "Set occlusion texture map"
                },
                {
                    "name": "getBaseColor",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get base color (albedo)"
                },
                {
                    "name": "getMetallic",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get metallic factor"
                },
                {
                    "name": "getRoughness",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get roughness factor"
                },
                {
                    "name": "getAo",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get ambient occlusion factor"
                },
                {
                    "name": "getEmissive",
                    "return": "const Color&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get emissive color"
                },
                {
                    "name": "getEmissiveStrength",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get emissive strength multiplier"
                },
                {
                    "name": "getNormalMap",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get normal map texture"
                },
                {
                    "name": "hasNormalMap",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a normal map is set"
                },
                {
                    "name": "getBaseColorTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get base color texture"
                },
                {
                    "name": "hasBaseColorTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a base color texture is set"
                },
                {
                    "name": "getMetallicRoughnessTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get metallic-roughness texture"
                },
                {
                    "name": "hasMetallicRoughnessTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if a metallic-roughness texture is set"
                },
                {
                    "name": "getEmissiveTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get emissive texture"
                },
                {
                    "name": "hasEmissiveTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if an emissive texture is set"
                },
                {
                    "name": "getOcclusionTexture",
                    "return": "const Texture*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get occlusion texture"
                },
                {
                    "name": "hasOcclusionTexture",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if an occlusion texture is set"
                }
            ],
            "static_methods": [
                {
                    "name": "gold",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Gold material preset"
                },
                {
                    "name": "silver",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Silver material preset"
                },
                {
                    "name": "copper",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Copper material preset"
                },
                {
                    "name": "iron",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Iron material preset"
                },
                {
                    "name": "plastic",
                    "return": "Material",
                    "signatures": [
                        "const Color& baseColor, float roughness"
                    ],
                    "desc": "Plastic material preset"
                },
                {
                    "name": "rubber",
                    "return": "Material",
                    "signatures": [
                        "const Color& baseColor"
                    ],
                    "desc": "Rubber material preset"
                },
                {
                    "name": "bronze",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Bronze material preset"
                },
                {
                    "name": "emerald",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Emerald material preset"
                },
                {
                    "name": "ruby",
                    "return": "Material",
                    "signatures": [
                        ""
                    ],
                    "desc": "Ruby material preset"
                },
                {
                    "name": "fromPhong",
                    "return": "Material",
                    "signatures": [
                        "const Color& diffuse, const Color& specular, float shininess, const Color& emissive"
                    ],
                    "desc": "Convert Phong material parameters to PBR (roughness from shininess, metallic estimated from specular luminance)"
                }
            ]
        },
        {
            "name": "IesProfile",
            "desc": "IESNA LM-63 photometric profile for angular light intensity",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Load IES profile from file"
                },
                {
                    "name": "loadFromString",
                    "return": "bool",
                    "signatures": [
                        "const string& data"
                    ],
                    "desc": "Load IES profile from inline string data"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if profile is loaded"
                },
                {
                    "name": "getMaxVerticalAngle",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get maximum vertical angle in the profile (radians)"
                },
                {
                    "name": "getMaxCandela",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get maximum candela value in the profile"
                },
                {
                    "name": "getTextureWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get width of the generated 1D lookup texture"
                }
            ]
        },
        {
            "name": "Environment",
            "desc": "IBL environment map for PBR ambient lighting (irradiance + prefilter + BRDF LUT)",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "loadFromHDR",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Load environment from HDR image file"
                },
                {
                    "name": "loadProcedural",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Generate a simple procedural sky environment"
                },
                {
                    "name": "isLoaded",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check if environment is loaded"
                },
                {
                    "name": "release",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Release GPU resources"
                },
                {
                    "name": "getIrradianceMap",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get irradiance cubemap for diffuse IBL"
                },
                {
                    "name": "getPrefilterMap",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get prefiltered environment cubemap for specular IBL"
                },
                {
                    "name": "getBrdfLut",
                    "return": "const Texture&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get BRDF integration lookup texture"
                },
                {
                    "name": "getPrefilterMipLevels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get number of mip levels in the prefilter map"
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
                    "desc": "True on Web (Emscripten / WASM)"
                },
                {
                    "name": "isMacOS",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on macOS"
                },
                {
                    "name": "isIOS",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on iOS"
                },
                {
                    "name": "isWindows",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Windows"
                },
                {
                    "name": "isAndroid",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Android"
                },
                {
                    "name": "isLinux",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on Linux (desktop, excludes Android)"
                },
                {
                    "name": "isApple",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on any Apple platform (macOS or iOS)"
                },
                {
                    "name": "isMobile",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on mobile (iOS or Android)"
                },
                {
                    "name": "isDesktop",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True on desktop (macOS, Windows, or Linux)"
                },
                {
                    "name": "name",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\""
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
                    "desc": "True when running on OpenGL (core or GLES3)"
                },
                {
                    "name": "isMetal",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on Apple Metal"
                },
                {
                    "name": "isD3D11",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on Direct3D 11"
                },
                {
                    "name": "isWebGPU",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on WebGPU"
                },
                {
                    "name": "isWebGL2",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)"
                },
                {
                    "name": "isVulkan",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True when running on Vulkan"
                },
                {
                    "name": "name",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Short backend name: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\""
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
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time)"
                },
                {
                    "name": "time",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build time in \"HH:MM:SS\" form (local time)"
                },
                {
                    "name": "dateTime",
                    "return": "const char*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)"
                },
                {
                    "name": "timestamp",
                    "return": "int64_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build timestamp as Unix seconds (UTC)"
                },
                {
                    "name": "year",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build year (e.g. 2026)"
                },
                {
                    "name": "month",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build month (1-12)"
                },
                {
                    "name": "day",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build day of month (1-31)"
                },
                {
                    "name": "hour",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build hour (0-23)"
                },
                {
                    "name": "minute",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build minute (0-59)"
                },
                {
                    "name": "second",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Build second (0-59)"
                }
            ]
        }
    ]
};
            
            // Export for different environments
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = TrussSketchAPI;
            }
            
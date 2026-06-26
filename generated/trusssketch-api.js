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
                },
                {
                    "name": "cleanup",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called once before exit (optional user callback for cleanup)"
                },
                {
                    "name": "runApp",
                    "params": "settings",
                    "params_typed": "const WindowSettings& settings = WindowSettings()",
                    "return_type": "int",
                    "desc": "Start the application main loop. Called from main()"
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
                    "params": "gray, a",
                    "params_typed": "float gray, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)"
                },
                {
                    "name": "clear",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)"
                },
                {
                    "name": "setColor",
                    "params": "gray, a",
                    "params_typed": "float gray, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
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
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a = 1.0f",
                    "return_type": "void",
                    "desc": "Set color from HSB (H: 0-1)"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H, alpha",
                    "params_typed": "float L, float C, float H, float alpha = 1.0f",
                    "return_type": "void",
                    "desc": "Set color from OKLCH"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a_lab, b_lab, alpha",
                    "params_typed": "float L, float a_lab, float b_lab, float alpha = 1.0f",
                    "return_type": "void",
                    "desc": "Set color from OKLab"
                },
                {
                    "name": "srgbToLinear",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Convert a single sRGB channel value to linear RGB"
                },
                {
                    "name": "linearToSrgb",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Convert a single linear RGB channel value to sRGB"
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
                    "params": "radius, resolution",
                    "params_typed": "float radius, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)"
                },
                {
                    "name": "drawSphere",
                    "params": "x, y, z, radius, resolution",
                    "params_typed": "float x, float y, float z, float radius, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)"
                },
                {
                    "name": "drawSphere",
                    "params": "pos, radius, resolution",
                    "params_typed": "Vec3 pos, float radius, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)"
                },
                {
                    "name": "drawCone",
                    "params": "radius, height, resolution",
                    "params_typed": "float radius, float height, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)"
                },
                {
                    "name": "drawCone",
                    "params": "x, y, z, radius, height, resolution",
                    "params_typed": "float x, float y, float z, float radius, float height, int resolution = 16",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)"
                },
                {
                    "name": "drawCone",
                    "params": "pos, radius, height, resolution",
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
                    "params": "text, x, y, screenFixed",
                    "params_typed": "const string& text, float x, float y, bool screenFixed = true",
                    "return_type": "void",
                    "desc": "Draw text"
                },
                {
                    "name": "drawBitmapStringHighlight",
                    "params": "text, x, y, background, foreground",
                    "params_typed": "const string& text, float x, float y, const Color& background = Color(0,0,0), const Color& foreground = Color(1,1,1)",
                    "return_type": "void",
                    "desc": "Draw text with background highlight"
                },
                {
                    "name": "getBitmapStringBounds",
                    "params": "text, width, height",
                    "params_typed": "const string& text, float& width, float& height",
                    "return_type": "void",
                    "desc": "Get bitmap string bounding box size"
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
                    "name": "bitmapfont::registerGlyph",
                    "params": "g",
                    "params_typed": "const bitmapfont::Glyph& g",
                    "return_type": "void",
                    "desc": "Register a bitmap glyph for a Unicode codepoint (extends drawBitmapString)"
                },
                {
                    "name": "bitmapfont::registerGlyphs",
                    "params": "glyphs",
                    "params_typed": "const bitmapfont::Glyph (&glyphs)[N] glyphs[]",
                    "return_type": "void",
                    "desc": "Register a batch of bitmap glyphs at once"
                },
                {
                    "name": "bitmapfont::updateGlyph",
                    "params": "cp, newData",
                    "params_typed": "uint32_t cp, const uint8_t* newData",
                    "return_type": "void",
                    "desc": "Swap an already-registered glyph's pixel data (atlas cell unchanged). Useful for per-frame animation."
                },
                {
                    "name": "bitmapfont::compile8x13",
                    "params": "rows",
                    "params_typed": "const char* const (&rows)[13] rows",
                    "return_type": "std::array<uint8_t, 13>",
                    "desc": "Compile-time ASCII art -> packed halfwidth (8x13) glyph bytes. '#' = lit, '.' = empty."
                },
                {
                    "name": "bitmapfont::compile16x13",
                    "params": "rows",
                    "params_typed": "const char* const (&rows)[13] rows",
                    "return_type": "std::array<uint8_t, 26>",
                    "desc": "Compile-time ASCII art -> packed fullwidth (16x13) glyph bytes. '#' = lit, '.' = empty."
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
                },
                {
                    "name": "setScissor",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Set scissor clipping rectangle. Also available via RectNode::setClipping(true)"
                },
                {
                    "name": "resetScissor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset (disable) scissor clipping"
                },
                {
                    "name": "pushScissor",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Push scissor clipping rectangle onto stack"
                },
                {
                    "name": "popScissor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop scissor clipping rectangle from stack"
                },
                {
                    "name": "setBlendMode",
                    "params": "mode",
                    "params_typed": "BlendMode mode",
                    "return_type": "void",
                    "desc": "Set blend mode. BlendMode::Alpha (default), Add, Multiply, Screen, Subtract, Disabled"
                },
                {
                    "name": "getBlendMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "BlendMode",
                    "desc": "Get current blend mode"
                },
                {
                    "name": "resetBlendMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset blend mode to Alpha (default)"
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Push current style (color, fill, stroke, blend) onto stack"
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop style from stack, restoring previous state"
                },
                {
                    "name": "getCurveMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "CurveStyle::Mode",
                    "desc": "Current curve tessellation mode (fixed segment count vs. adaptive tolerance)"
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
                    "name": "getMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Get the current transformation matrix"
                },
                {
                    "name": "getScale",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Effective uniform scale of the current matrix (max of x/y basis lengths)"
                },
                {
                    "name": "resetMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset transformation matrix to identity"
                },
                {
                    "name": "multMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Multiply the current matrix by mat (relative transform, like translate/rotate)"
                },
                {
                    "name": "setMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Replace the current matrix with mat (absolute - use with caution, may break camera setup)"
                },
                {
                    "name": "getCurrentMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Deprecated alias for getMatrix()"
                },
                {
                    "name": "loadMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Deprecated alias for setMatrix()"
                },
                {
                    "name": "getCurrentScale",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Deprecated alias for getScale()"
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
                    "name": "requestExitApp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Request application exit. Can be cancelled by listening to events().exitRequested and setting args.cancel = true"
                },
                {
                    "name": "exitApp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Immediately exit the application (cannot be cancelled)"
                },
                {
                    "name": "alertDialog",
                    "params": "title, message",
                    "params_typed": "const string& title, const string& message",
                    "return_type": "void",
                    "desc": "Show alert dialog with OK button"
                },
                {
                    "name": "confirmDialog",
                    "params": "title, message",
                    "params_typed": "const string& title, const string& message",
                    "return_type": "bool",
                    "desc": "Show Yes/No confirmation dialog. Returns true if Yes clicked"
                },
                {
                    "name": "alertDialogAsync",
                    "params": "title, message, callback",
                    "params_typed": "const string& title, const string& message, function<void()> callback = nullptr",
                    "return_type": "void",
                    "desc": "Show alert dialog asynchronously. Callback is called when dismissed"
                },
                {
                    "name": "confirmDialogAsync",
                    "params": "title, message, callback",
                    "params_typed": "const string& title, const string& message, function<void(bool)> callback",
                    "return_type": "void",
                    "desc": "Show Yes/No dialog asynchronously. Callback receives true if Yes clicked"
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
                    "name": "getGlobalMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get global mouse X (screen coordinates, not window-relative)"
                },
                {
                    "name": "getGlobalMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get global mouse Y (screen coordinates, not window-relative)"
                },
                {
                    "name": "getGlobalPMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get previous frame global mouse X"
                },
                {
                    "name": "getGlobalPMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get previous frame global mouse Y"
                },
                {
                    "name": "getMouseButton",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get currently pressed mouse button"
                },
                {
                    "name": "setTouchAsMouse",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Enable/disable touch events firing as mouse events (for Android/iOS)"
                },
                {
                    "name": "getTouchAsMouse",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get touchAsMouse state"
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
                },
                {
                    "name": "events",
                    "params": "",
                    "params_typed": "",
                    "return_type": "CoreEvents&",
                    "desc": "Get the global CoreEvents hub holding all framework events (setup, update, draw, keyPressed, mousePressed, etc.); use events().eventName.listen(callback) to subscribe"
                },
                {
                    "name": "isOverlayHovered",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when an overlay currently has the pointer over it (e.g. cursor over a tcxImGui panel); guard raw mouse input so clicks on UI panels are not also handled by the app"
                },
                {
                    "name": "isOverlayFocused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when an overlay currently owns keyboard focus (e.g. a text input is active); guard raw key input so typing into a UI field is not also handled by the app"
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
                    "name": "getFps",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current FPS (alias for getFrameRate)"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Total frames rendered"
                },
                {
                    "name": "sleepMillis",
                    "params": "millis",
                    "params_typed": "int millis",
                    "return_type": "void",
                    "desc": "Block the current thread for the given number of milliseconds"
                },
                {
                    "name": "sleepMicros",
                    "params": "micros",
                    "params_typed": "int micros",
                    "return_type": "void",
                    "desc": "Block the current thread for the given number of microseconds"
                },
                {
                    "name": "getUpdateCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Get the number of update() calls since the app started"
                },
                {
                    "name": "getDrawCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Get the number of draw() calls since the app started"
                },
                {
                    "name": "getFpsSettings",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FpsSettings",
                    "desc": "Get the current FPS configuration (update/draw target rates, actual VSync rate, sync flag)"
                }
            ]
        },
        {
            "name": "Memory",
            "functions": [
                {
                    "name": "getSokolMemoryBytes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Total bytes allocated by sokol libraries"
                },
                {
                    "name": "getSokolMemoryAllocs",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of active allocations in sokol libraries"
                },
                {
                    "name": "releaseSglBuffers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Release sokol_gl vertex/command buffers (auto re-allocated on next draw)"
                },
                {
                    "name": "getMemoryUsage",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get process memory usage in bytes (platform-specific)"
                },
                {
                    "name": "getFboCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active FBO objects"
                },
                {
                    "name": "getTextureCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active Texture objects"
                },
                {
                    "name": "getNodeCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active Node objects in scene graph"
                }
            ]
        },
        {
            "name": "Platform",
            "functions": [
                {
                    "name": "Platform::isWeb",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Web (Emscripten / WASM)"
                },
                {
                    "name": "Platform::isMacOS",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on macOS"
                },
                {
                    "name": "Platform::isIOS",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on iOS"
                },
                {
                    "name": "Platform::isWindows",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Windows"
                },
                {
                    "name": "Platform::isAndroid",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Android"
                },
                {
                    "name": "Platform::isLinux",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Linux (desktop, excludes Android)"
                },
                {
                    "name": "Platform::isApple",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on any Apple platform (macOS or iOS)"
                },
                {
                    "name": "Platform::isMobile",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on mobile (iOS or Android)"
                },
                {
                    "name": "Platform::isDesktop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on desktop (macOS, Windows, or Linux)"
                },
                {
                    "name": "Platform::name",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\""
                },
                {
                    "name": "getThermalTemperature",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get device temperature in Celsius, or -1 if unavailable"
                }
            ]
        },
        {
            "name": "Graphics Backend",
            "functions": [
                {
                    "name": "GraphicsBackend::isOpenGL",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on OpenGL (core or GLES3)"
                },
                {
                    "name": "GraphicsBackend::isMetal",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Apple Metal"
                },
                {
                    "name": "GraphicsBackend::isD3D11",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Direct3D 11"
                },
                {
                    "name": "GraphicsBackend::isWebGPU",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGPU"
                },
                {
                    "name": "GraphicsBackend::isWebGL2",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)"
                },
                {
                    "name": "GraphicsBackend::isVulkan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Vulkan"
                },
                {
                    "name": "GraphicsBackend::name",
                    "params": "",
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
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time, CMake configure time)"
                },
                {
                    "name": "BuildInfo::time",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build time in \"HH:MM:SS\" form (local time)"
                },
                {
                    "name": "BuildInfo::dateTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)"
                },
                {
                    "name": "BuildInfo::timestamp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int64_t",
                    "desc": "Build timestamp as Unix seconds (UTC)"
                },
                {
                    "name": "BuildInfo::year",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build year (e.g. 2026)"
                },
                {
                    "name": "BuildInfo::month",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build month (1-12)"
                },
                {
                    "name": "BuildInfo::day",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build day of month (1-31)"
                },
                {
                    "name": "BuildInfo::hour",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build hour (0-23)"
                },
                {
                    "name": "BuildInfo::minute",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build minute (0-59)"
                },
                {
                    "name": "BuildInfo::second",
                    "params": "",
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
                    "name": "lerp",
                    "params": "a, b, t",
                    "params_typed": "float a, float b, float t",
                    "return_type": "float",
                    "desc": "Linear interpolation"
                },
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
                },
                {
                    "name": "applyWindow",
                    "params": "signal, type",
                    "params_typed": "vector<float>& signal, WindowType type",
                    "return_type": "void",
                    "desc": "Apply a window function (in place) to a signal to reduce spectral leakage before FFT"
                },
                {
                    "name": "applyWindow",
                    "params": "signal, type",
                    "params_typed": "vector<complex<float>>& signal, WindowType type",
                    "return_type": "void",
                    "desc": "Apply a window function (in place) to a signal to reduce spectral leakage before FFT"
                },
                {
                    "name": "isPowerOfTwo",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "bool",
                    "desc": "Return true if n is a positive power of two"
                },
                {
                    "name": "nextPowerOfTwo",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "int",
                    "desc": "Return the smallest power of two greater than or equal to n"
                },
                {
                    "name": "fft",
                    "params": "data",
                    "params_typed": "vector<complex<float>>& data",
                    "return_type": "void",
                    "desc": "In-place forward FFT (Cooley-Tukey radix-2); the data size must be a power of two"
                },
                {
                    "name": "ifft",
                    "params": "data",
                    "params_typed": "vector<complex<float>>& data",
                    "return_type": "void",
                    "desc": "In-place inverse FFT; the data size must be a power of two"
                },
                {
                    "name": "toComplex",
                    "params": "real",
                    "params_typed": "const vector<float>& real",
                    "return_type": "vector<complex<float>>",
                    "desc": "Convert a real-valued signal into a complex array with zero imaginary parts"
                },
                {
                    "name": "fftReal",
                    "params": "signal",
                    "params_typed": "const vector<float>& signal",
                    "return_type": "vector<complex<float>>",
                    "desc": "Compute the FFT of a real-valued signal, optionally applying a window function first"
                },
                {
                    "name": "fftReal",
                    "params": "signal, window",
                    "params_typed": "const vector<float>& signal, WindowType window",
                    "return_type": "vector<complex<float>>",
                    "desc": "Compute the FFT of a real-valued signal, optionally applying a window function first"
                },
                {
                    "name": "fftMagnitude",
                    "params": "spectrum",
                    "params_typed": "const vector<complex<float>>& spectrum",
                    "return_type": "vector<float>",
                    "desc": "Return the magnitude (amplitude) of each bin in a spectrum"
                },
                {
                    "name": "fftMagnitudeDb",
                    "params": "spectrum, minDb",
                    "params_typed": "const vector<complex<float>>& spectrum, float minDb = -100.0f",
                    "return_type": "vector<float>",
                    "desc": "Return the magnitude of each bin in decibels, clamped to minDb"
                },
                {
                    "name": "fftPhase",
                    "params": "spectrum",
                    "params_typed": "const vector<complex<float>>& spectrum",
                    "return_type": "vector<float>",
                    "desc": "Return the phase angle (radians) of each bin in a spectrum"
                },
                {
                    "name": "fftPower",
                    "params": "spectrum",
                    "params_typed": "const vector<complex<float>>& spectrum",
                    "return_type": "vector<float>",
                    "desc": "Return the power spectrum (magnitude squared) of each bin"
                },
                {
                    "name": "binToFrequency",
                    "params": "bin, fftSize, sampleRate",
                    "params_typed": "int bin, int fftSize, int sampleRate",
                    "return_type": "float",
                    "desc": "Convert an FFT bin index to its frequency in Hz"
                },
                {
                    "name": "frequencyToBin",
                    "params": "freq, fftSize, sampleRate",
                    "params_typed": "float freq, int fftSize, int sampleRate",
                    "return_type": "int",
                    "desc": "Convert a frequency in Hz to the nearest FFT bin index"
                },
                {
                    "name": "windowFunction",
                    "params": "type, i, n",
                    "params_typed": "WindowType type, int i, int n",
                    "return_type": "float",
                    "desc": "Return the window coefficient for sample i of n for the given window type"
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
                    "name": "getDpiScale",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get display DPI scale factor (e.g. 2.0 for Retina)"
                },
                {
                    "name": "getFramebufferWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get framebuffer width in pixels (window width * DPI scale)"
                },
                {
                    "name": "getFramebufferHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get framebuffer height in pixels (window height * DPI scale)"
                },
                {
                    "name": "getAspectRatio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get window aspect ratio (width / height)"
                },
                {
                    "name": "setIndependentFps",
                    "params": "updateFps, drawFps",
                    "params_typed": "float updateFps, float drawFps",
                    "return_type": "void",
                    "desc": "Set independent update and draw frame rates"
                },
                {
                    "name": "grabScreen",
                    "params": "outPixels",
                    "params_typed": "Pixels& outPixels",
                    "return_type": "bool",
                    "desc": "Capture current screen to Pixels"
                },
                {
                    "name": "saveScreenshot",
                    "params": "path",
                    "params_typed": "const std::filesystem::path& path",
                    "return_type": "bool",
                    "desc": "Save a screenshot of the rendered frame (png/jpg/bmp). Safe to call from anywhere; capture is deferred to after present(). Returns true when the destination was prepared and the capture queued (parent dir created/writable), not that the file is already written."
                },
                {
                    "name": "stopRecording",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop the current recording and finalize the file"
                },
                {
                    "name": "isRecording",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check whether a recording is in progress"
                },
                {
                    "name": "recordingFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of frames captured so far in the current recording"
                },
                {
                    "name": "recordingPath",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const string&",
                    "desc": "Output file path of the current recording"
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
                },
                {
                    "name": "redraw",
                    "params": "count",
                    "params_typed": "int count = 1",
                    "return_type": "void",
                    "desc": "Request extra redraws (useful for event-driven rendering)"
                },
                {
                    "name": "getBackendName",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the active graphics backend name (e.g. \"Metal (macOS)\", \"D3D11\", \"OpenGL\", \"WebGPU\")"
                },
                {
                    "name": "getDisplayScaleFactor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the DPI scale of the main display (available before window creation). macOS: 1.0 or 2.0 (Retina); other platforms: 1.0"
                },
                {
                    "name": "setWindowSizeLogical",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Resize the window to the given logical size (logical pixels)"
                },
                {
                    "name": "runHeadlessApp",
                    "params": "settings",
                    "params_typed": "const HeadlessSettings& settings = HeadlessSettings()",
                    "return_type": "int",
                    "desc": "Run an app class without a window or graphics context (update loop only). Template on the app type; returns the process exit code"
                }
            ]
        },
        {
            "name": "Utility",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "module",
                    "params_typed": "const std::string & module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Print to console"
                },
                {
                    "name": "compress",
                    "params": "src, nbytes, out, codec",
                    "params_typed": "const void* src, size_t nbytes, vector<uint8_t>& out, Codec codec",
                    "return_type": "bool",
                    "desc": "Compress a byte buffer with the given codec (Codec::None or Codec::LZ4). Resizes out and returns true on success."
                },
                {
                    "name": "decompress",
                    "params": "src, nbytes, out, decompressedSize, codec",
                    "params_typed": "const void* src, size_t nbytes, vector<uint8_t>& out, size_t decompressedSize, Codec codec",
                    "return_type": "bool",
                    "desc": "Decompress a byte buffer; decompressedSize is the known original byte count. Resizes out and returns true on success (false / cleared out on size mismatch or failure)."
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
                    "params": "source, delimiter, ignoreEmpty, trim",
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
                },
                {
                    "name": "intersectRect",
                    "params": "x1, y1, w1, h1, x2, y2, w2, h2, ox, oy, ow, oh",
                    "params_typed": "float x1, float y1, float w1, float h1, float x2, float y2, float w2, float h2, float& ox, float& oy, float& ow, float& oh",
                    "return_type": "void",
                    "desc": "Compute intersection of two rectangles"
                },
                {
                    "name": "mcp::registerDebuggerTools",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Opt in to the MCP debugger tools, letting an AI agent drive the app: input injection (mouse_click, key_press, mouse_move, scroll) plus node selection and scene mutation (select_node, set_node_members). Call once in setup(); calling it IS the opt-in (there is no separate enable step). The tools do nothing unless the MCP server is running (TRUSSC_MCP=1), so it is safe to leave in. Read-only inspection — screenshots and the node tree — needs no opt-in and is always available when MCP is on."
                },
                {
                    "name": "logVerbose",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based verbose-level log output"
                },
                {
                    "name": "logWarning",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based warning-level log output"
                },
                {
                    "name": "logError",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based error-level log output"
                },
                {
                    "name": "logFatal",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based fatal-level log output"
                },
                {
                    "name": "logAt",
                    "params": "level",
                    "params_typed": "LogLevel level = LogLevel::Notice",
                    "return_type": "LogStream",
                    "desc": "Stream-based log output at a runtime-selected level"
                },
                {
                    "name": "getLogger",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Logger&",
                    "desc": "Access the global logger instance"
                },
                {
                    "name": "setConsoleLogLevel",
                    "params": "level",
                    "params_typed": "LogLevel level",
                    "return_type": "void",
                    "desc": "Set the minimum log level printed to the console"
                },
                {
                    "name": "setFileLogLevel",
                    "params": "level",
                    "params_typed": "LogLevel level",
                    "return_type": "void",
                    "desc": "Set the minimum log level written to the log file"
                },
                {
                    "name": "setLogFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Open a file to receive log output"
                },
                {
                    "name": "closeLogFile",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the current log file"
                },
                {
                    "name": "compressBound",
                    "params": "nbytes, codec",
                    "params_typed": "size_t nbytes, Codec codec",
                    "return_type": "size_t",
                    "desc": "Worst-case compressed size, for sizing a destination buffer"
                },
                {
                    "name": "toInt64",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "int64_t",
                    "desc": "Parse a string into a 64-bit integer"
                },
                {
                    "name": "toDouble",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "double",
                    "desc": "Parse a string into a double"
                },
                {
                    "name": "toBool",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "bool",
                    "desc": "Parse a string into a bool"
                },
                {
                    "name": "toBinary",
                    "params": "value",
                    "params_typed": "int value",
                    "return_type": "string",
                    "desc": "Convert an integer to a binary string"
                },
                {
                    "name": "hexToInt",
                    "params": "hexStr",
                    "params_typed": "const string& hexStr",
                    "return_type": "int",
                    "desc": "Parse a hex string into a signed int"
                },
                {
                    "name": "hexToUInt",
                    "params": "hexStr",
                    "params_typed": "const string& hexStr",
                    "return_type": "unsigned int",
                    "desc": "Parse a hex string into an unsigned int"
                },
                {
                    "name": "toBase64",
                    "params": "bytes, len",
                    "params_typed": "const unsigned char* bytes, size_t len",
                    "return_type": "string",
                    "desc": "Encode raw bytes as a Base64 string"
                },
                {
                    "name": "isStringInString",
                    "params": "haystack, needle",
                    "params_typed": "const string& haystack, const string& needle",
                    "return_type": "bool",
                    "desc": "Check whether one string contains another"
                },
                {
                    "name": "stringTimesInString",
                    "params": "haystack, needle",
                    "params_typed": "const string& haystack, const string& needle",
                    "return_type": "size_t",
                    "desc": "Count occurrences of a substring in a string"
                },
                {
                    "name": "trim",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Trim whitespace from both ends of a string"
                },
                {
                    "name": "trimFront",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Trim leading whitespace from a string"
                },
                {
                    "name": "trimBack",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Trim trailing whitespace from a string"
                },
                {
                    "name": "parseJson",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "Json",
                    "desc": "Parse a JSON string into a Json object; returns an empty Json on parse error."
                },
                {
                    "name": "toJsonString",
                    "params": "j, indent",
                    "params_typed": "const Json& j, int indent = 2",
                    "return_type": "string",
                    "desc": "Serialize a Json object to a string. indent sets the pretty-print width (negative for compact)."
                },
                {
                    "name": "parseXml",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "Xml",
                    "desc": "Parse an XML string into an Xml object."
                },
                {
                    "name": "reflectToJson",
                    "params": "obj",
                    "params_typed": "T& obj",
                    "return_type": "Json",
                    "desc": "Return all reflected (TC_REFLECT) members of obj as a Json object. Works on any reflected type such as a Node or Mod."
                },
                {
                    "name": "reflectFromJson",
                    "params": "obj, j",
                    "params_typed": "T& obj, const Json& j",
                    "return_type": "JsonReadReflector",
                    "desc": "Apply the keys of a Json object onto obj's reflected (TC_REFLECT) members. Returns the reflector so callers can inspect which members were applied, skipped, read-only, or unknown."
                },
                {
                    "name": "isMainThread",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Whether the calling thread is the main (scene) thread. The main thread ID is recorded on the first call to getMainThreadId()."
                },
                {
                    "name": "getMainThreadId",
                    "params": "",
                    "params_typed": "",
                    "return_type": "thread::id",
                    "desc": "Get the main thread ID. Records the current thread's ID on the first call, so it must first be called from the main thread."
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
                    "name": "createDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Create directory (and parents)"
                },
                {
                    "name": "listDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "vector<string>",
                    "desc": "List files in directory"
                },
                {
                    "name": "removeFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Remove file"
                },
                {
                    "name": "getFileSize",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "int64_t",
                    "desc": "Get file size in bytes"
                },
                {
                    "name": "loadTextFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Load entire text file"
                },
                {
                    "name": "saveTextFile",
                    "params": "path, content",
                    "params_typed": "const string& path, const string& content",
                    "return_type": "bool",
                    "desc": "Save string to text file"
                },
                {
                    "name": "appendToFile",
                    "params": "path, content",
                    "params_typed": "const string& path, const string& content",
                    "return_type": "bool",
                    "desc": "Append string to file"
                },
                {
                    "name": "loadJson",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "Json",
                    "desc": "Load a JSON file and return it as a Json object. Relative paths are resolved via getDataPath; returns an empty Json on error."
                },
                {
                    "name": "saveJson",
                    "params": "j, path, indent",
                    "params_typed": "const Json& j, const string& path, int indent = 2",
                    "return_type": "bool",
                    "desc": "Write a Json object to a file. Relative paths are resolved via getDataPath. indent sets the pretty-print width (negative for compact). Returns true on success."
                },
                {
                    "name": "loadXml",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "Xml",
                    "desc": "Load an XML file and return it as an Xml object. Relative paths are resolved via getDataPath."
                },
                {
                    "name": "setDataPathRoot",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "void",
                    "desc": "Set the root directory used to resolve relative data paths. A relative path is resolved against the executable directory; an absolute path (starting with /) is used as-is. A trailing slash is added automatically."
                },
                {
                    "name": "getDataPathRoot",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the current data path root (with trailing slash)."
                },
                {
                    "name": "setDataPathToResources",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Point the data path root at the macOS app bundle's Contents/Resources/data folder for distribution. No-op on non-macOS platforms."
                }
            ]
        },
        {
            "name": "Sound",
            "functions": [
                {
                    "name": "Sound",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a sound player"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load sound file. Format auto-detected by extension: .wav .mp3 .ogg .flac .aac .m4a"
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
                },
                {
                    "name": "setMixMode",
                    "params": "m",
                    "params_typed": "MixMode m",
                    "return_type": "void",
                    "desc": "Channel routing preset. Auto (default) = mono broadcasts / multi 1:1. DownmixMono = average src to all out ch."
                },
                {
                    "name": "setChannelMap",
                    "params": "map",
                    "params_typed": "const vector<int>& map",
                    "return_type": "void",
                    "desc": "Per-output-channel routing. 1D: each entry is a src ch index (-1 = silent). 2D: each entry lists src ch indices that sum into that output."
                },
                {
                    "name": "setChannelMap",
                    "params": "map",
                    "params_typed": "vector<vector<int>> map",
                    "return_type": "void",
                    "desc": "Per-output-channel routing. 1D: each entry is a src ch index (-1 = silent). 2D: each entry lists src ch indices that sum into that output."
                },
                {
                    "name": "setChannelGains",
                    "params": "gains",
                    "params_typed": "const vector<float>& gains",
                    "return_type": "void",
                    "desc": "Per-output-channel gain multiplier. Entries beyond .size() default to 1.0. No internal normalization (setVolume is the overall gain)."
                },
                {
                    "name": "clearChannelMap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear the explicit channel map; routing falls back to setMixMode rules."
                },
                {
                    "name": "clearChannelGains",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear per-channel gains (back to uniform 1.0)."
                },
                {
                    "name": "setBeepVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set the output volume for beep() (0.0-1.0)."
                },
                {
                    "name": "getBeepVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the current beep() output volume (0.0-1.0)."
                }
            ]
        },
        {
            "name": "AudioEngine",
            "functions": [
                {
                    "name": "getInstance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "AudioEngine&",
                    "desc": "Get the global AudioEngine singleton"
                },
                {
                    "name": "init",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Initialize / re-initialize audio engine. Re-entrant: calling on a running engine stops the device, migrates active voices to new settings, restarts. ~30-100 ms gap; voices keep playback position."
                },
                {
                    "name": "init",
                    "params": "settings",
                    "params_typed": "const AudioSettings& settings",
                    "return_type": "bool",
                    "desc": "Initialize / re-initialize audio engine. Re-entrant: calling on a running engine stops the device, migrates active voices to new settings, restarts. ~30-100 ms gap; voices keep playback position."
                },
                {
                    "name": "shutdown",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Shut down the audio device. Usually called automatically at program exit."
                },
                {
                    "name": "listDevices",
                    "params": "",
                    "params_typed": "",
                    "return_type": "vector<AudioDeviceInfo>",
                    "desc": "Enumerate available playback devices. Returns name + isDefault for each."
                },
                {
                    "name": "getSampleRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current engine sample rate (Hz). Returns default (48000) if not yet initialized."
                },
                {
                    "name": "getChannels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current engine output channel count"
                },
                {
                    "name": "getMaxPolyphony",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Max simultaneously-playing Sound voices"
                },
                {
                    "name": "getBufferSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current device buffer size in frames (0 = miniaudio default)"
                },
                {
                    "name": "isInitialized",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True after a successful init()"
                },
                {
                    "name": "audioIn",
                    "params": "buf",
                    "params_typed": "const AudioInBuffer & buf",
                    "return_type": "void",
                    "desc": "Real-time capture callback event (microphone input). RT-safe same as audioOut."
                },
                {
                    "name": "initAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Initialize the global AudioEngine. Called automatically by Sound::load() / play(), so manual use is only needed to start audio early (e.g. before an audioOut synthesis listener)."
                },
                {
                    "name": "shutdownAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Shut down the global AudioEngine and close the audio device. Usually unnecessary (runs at program exit)."
                },
                {
                    "name": "getAudioAnalysisBuffer",
                    "params": "outBuffer, numSamples",
                    "params_typed": "float* outBuffer, size_t numSamples",
                    "return_type": "size_t",
                    "desc": "Copy the latest mixed output samples (mono, L+R average) into outBuffer for FFT / visualization. numSamples is capped at the analysis buffer size (4096). Returns the number of samples written."
                },
                {
                    "name": "getMicInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "MicInput&",
                    "desc": "Get the global MicInput singleton (microphone capture). Call start() on it to open the device."
                },
                {
                    "name": "getMicAnalysisBuffer",
                    "params": "outBuffer, numSamples",
                    "params_typed": "float* outBuffer, size_t numSamples",
                    "return_type": "size_t",
                    "desc": "Copy the latest microphone input samples into outBuffer. Convenience wrapper over getMicInput().getBuffer(). numSamples is capped at the mic buffer size (4096). Returns the number of samples written."
                }
            ]
        },
        {
            "name": "ChipSound",
            "functions": [
                {
                    "name": "ChipSoundNote",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a chip sound note (8-bit style sound)"
                },
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
                },
                {
                    "name": "registerGlyph",
                    "params": "g",
                    "params_typed": "const bitmapfont::Glyph & g",
                    "return_type": "void",
                    "desc": "Register one bitmap glyph so drawBitmapString can render its codepoint. Replaces any glyph already registered at the same codepoint and marks the atlas dirty for re-upload"
                },
                {
                    "name": "updateGlyph",
                    "params": "cp, newData",
                    "params_typed": "uint32_t cp, const uint8_t *newData",
                    "return_type": "void",
                    "desc": "Swap the pixel data of an already-registered glyph without changing its atlas position. Useful for animating a glyph by updating its data each frame"
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
                    "name": "Vec2",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)"
                },
                {
                    "name": "Vec2",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)"
                },
                {
                    "name": "Vec2",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)"
                },
                {
                    "name": "set",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "Vec2&",
                    "desc": "Set vector components (type method)"
                },
                {
                    "name": "set",
                    "params": "x_, y_",
                    "params_typed": "float x_, float y_",
                    "return_type": "Vec2&",
                    "desc": "Set vector components (type method)"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "params_typed": "float radians, float length = 1.0f",
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
            "name": "Types - Vec3",
            "functions": [
                {
                    "name": "Vec3",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)"
                },
                {
                    "name": "Vec3",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)"
                },
                {
                    "name": "Vec3",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)"
                },
                {
                    "name": "set",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Vec3&",
                    "desc": "Set vector components (type method)"
                },
                {
                    "name": "set",
                    "params": "x_, y_, z_",
                    "params_typed": "float x_, float y_, float z_",
                    "return_type": "Vec3&",
                    "desc": "Set vector components (type method)"
                }
            ]
        },
        {
            "name": "Types - Color",
            "functions": [
                {
                    "name": "Color",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create color (type constructor)"
                },
                {
                    "name": "Color",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "",
                    "desc": "Create color (type constructor)"
                },
                {
                    "name": "Color",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "",
                    "desc": "Create color (type constructor)"
                },
                {
                    "name": "set",
                    "params": "r_, g_, b_, a_",
                    "params_typed": "float r_, float g_, float b_, float a_ = 1.0f",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)"
                },
                {
                    "name": "set",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)"
                },
                {
                    "name": "set",
                    "params": "gray, a_",
                    "params_typed": "float gray, float a_ = 1.0f",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)"
                },
                {
                    "name": "set",
                    "params": "c",
                    "params_typed": "const Color& c",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)"
                },
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
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a = 1.0f",
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
                    "params": "h, s, b, a",
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
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a = 1.0f",
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
                    "params": "L, a_lab, b_lab, alpha",
                    "params_typed": "float L, float a_lab, float b_lab, float alpha = 1.0f",
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
                    "params": "target, t, shortestPath",
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
                    "params": "target, t, shortestPath",
                    "params_typed": "const ColorOKLCH & target, float t, bool shortestPath = true",
                    "return_type": "ColorOKLCH",
                    "desc": "Interpolate in OKLCH space (shortest hue path, perceptually uniform)"
                }
            ]
        },
        {
            "name": "Types - Rect",
            "functions": [
                {
                    "name": "Rect",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a rectangle (type constructor)"
                },
                {
                    "name": "Rect",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "",
                    "desc": "Create a rectangle (type constructor)"
                },
                {
                    "name": "set",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties (type method)"
                },
                {
                    "name": "set",
                    "params": "x_, y_, w_, h_",
                    "params_typed": "float x_, float y_, float w_, float h_",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties (type method)"
                },
                {
                    "name": "contains",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "bool",
                    "desc": "Check if point is inside (type method)"
                },
                {
                    "name": "intersects",
                    "params": "other",
                    "params_typed": "const Rect & other",
                    "return_type": "bool",
                    "desc": "Check intersection (type method)"
                }
            ]
        },
        {
            "name": "Scene Graph",
            "functions": [
                {
                    "name": "Node",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a base scene node (C++ only - uses shared_ptr)"
                },
                {
                    "name": "addChild",
                    "params": "child, keepGlobalPosition",
                    "params_typed": "Node::Ptr child, bool keepGlobalPosition = false",
                    "return_type": "void",
                    "desc": "Add a child node (C++ only)"
                },
                {
                    "name": "moveToFront",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Move this node to the end of its parent's child list — drawn last, on top of siblings. No-op if no parent or already last (C++ only)"
                },
                {
                    "name": "moveToBack",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Move this node to the beginning of its parent's child list — drawn first, beneath siblings. No-op if no parent or already first (C++ only)"
                },
                {
                    "name": "destroy",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Mark node for deferred removal from scene graph (C++ only)"
                },
                {
                    "name": "isDead",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if node is marked for destruction (C++ only)"
                },
                {
                    "name": "RectNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 2D rectangle node (C++ only - uses shared_ptr)"
                },
                {
                    "name": "setSize",
                    "params": "w, h",
                    "params_typed": "float w, float h",
                    "return_type": "void",
                    "desc": "Set size (C++ only)"
                },
                {
                    "name": "setClipping",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Enable/disable scissor clipping for RectNode (C++ only)"
                },
                {
                    "name": "enableEvents",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse/key events for this node (C++ only)"
                },
                {
                    "name": "ScrollContainer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Scrollable container node with clipping (C++ only)"
                },
                {
                    "name": "setContent",
                    "params": "newContent",
                    "params_typed": "Node::Ptr newContent",
                    "return_type": "void",
                    "desc": "Set content node for ScrollContainer (C++ only)"
                },
                {
                    "name": "setScrollY",
                    "params": "y",
                    "params_typed": "float y",
                    "return_type": "void",
                    "desc": "Set vertical scroll position (C++ only)"
                },
                {
                    "name": "ScrollBar",
                    "params": "container, dir",
                    "params_typed": "ScrollContainer* container, Direction dir = Vertical",
                    "return_type": "",
                    "desc": "Visual scroll indicator for ScrollContainer (C++ only)"
                },
                {
                    "name": "LayoutMod",
                    "params": "dir, spacing",
                    "params_typed": "LayoutDirection dir, float spacing = 0",
                    "return_type": "",
                    "desc": "Layout modifier for automatic child arrangement (C++ only)"
                },
                {
                    "name": "updateLayout",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Recalculate layout (call after adding/removing children) (C++ only)"
                },
                {
                    "name": "TweenMod",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Animation modifier for Node properties (position, scale, rotation) with easing (C++ only)"
                },
                {
                    "name": "moveTo",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z = 0.0f",
                    "return_type": "TweenMod&",
                    "desc": "Animate position to target (TweenMod method) (C++ only)"
                },
                {
                    "name": "moveTo",
                    "params": "pos",
                    "params_typed": "const Vec3& pos",
                    "return_type": "TweenMod&",
                    "desc": "Animate position to target (TweenMod method) (C++ only)"
                },
                {
                    "name": "moveBy",
                    "params": "dx, dy, dz",
                    "params_typed": "float dx, float dy, float dz = 0.0f",
                    "return_type": "TweenMod&",
                    "desc": "Animate position by relative amount (TweenMod method) (C++ only)"
                },
                {
                    "name": "scaleTo",
                    "params": "uniform",
                    "params_typed": "float uniform",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale to target (TweenMod method) (C++ only)"
                },
                {
                    "name": "scaleTo",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz = 1",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale to target (TweenMod method) (C++ only)"
                },
                {
                    "name": "scaleBy",
                    "params": "factor",
                    "params_typed": "float factor",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale by relative multiplier (TweenMod method) (C++ only)"
                },
                {
                    "name": "rotateTo",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation to target angle or quaternion (TweenMod method) (C++ only)"
                },
                {
                    "name": "rotateTo",
                    "params": "q",
                    "params_typed": "const Quaternion& q",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation to target angle or quaternion (TweenMod method) (C++ only)"
                },
                {
                    "name": "rotateBy",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation by relative angle (TweenMod method) (C++ only)"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "TweenMod&",
                    "desc": "Set animation duration (TweenMod method) (C++ only)"
                },
                {
                    "name": "ease",
                    "params": "type, mode",
                    "params_typed": "EaseType type, EaseMode mode = InOut",
                    "return_type": "TweenMod&",
                    "desc": "Set easing function (TweenMod method). Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce. Modes: In, Out, InOut (C++ only)"
                },
                {
                    "name": "delay",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "TweenMod&",
                    "desc": "Set delay before animation starts (TweenMod method) (C++ only)"
                },
                {
                    "name": "getSelectedNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Node*",
                    "desc": "Get the currently selected node (the last-clicked node, held by the Node system; null if none). A tool such as an inspector can read it and drive it via setSelectedNode()."
                },
                {
                    "name": "setSelectedNode",
                    "params": "n",
                    "params_typed": "Node* n",
                    "return_type": "void",
                    "desc": "Set the currently selected node. Pass nullptr to clear the selection."
                },
                {
                    "name": "getRootNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Node*",
                    "desc": "Get the running App as the root of the node tree (set by the framework while the app is alive, null otherwise). Lets tools walk the whole tree without the app passing itself around."
                }
            ]
        },
        {
            "name": "3D Setup",
            "functions": [
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg = 45.0f, float nearDist = 0.0f, float farDist = 0.0f",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
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
                    "params": "fovDeg, nearDist, farDist",
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
                },
                {
                    "name": "worldToScreen",
                    "params": "worldPos",
                    "params_typed": "const Vec3& worldPos",
                    "return_type": "Vec3",
                    "desc": "Convert world coordinate to screen coordinate (x, y = screen pos, z = depth 0-1)"
                },
                {
                    "name": "screenToWorld",
                    "params": "screenPos, worldZ",
                    "params_typed": "const Vec2 & screenPos, float worldZ = 0.0f",
                    "return_type": "Vec3",
                    "desc": "Convert screen coordinate to world coordinate on Z plane"
                },
                {
                    "name": "screenToWorld",
                    "params": "screenPos, worldZ",
                    "params_typed": "const Vec2& screenPos, float worldZ",
                    "return_type": "Vec3",
                    "desc": "Convert screen coordinate to world coordinate on Z plane"
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
                    "name": "getNearClip",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get near clipping plane distance"
                },
                {
                    "name": "getFarClip",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get far clipping plane distance"
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
                },
                {
                    "name": "getCameraPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const Vec3&",
                    "desc": "Current camera position used for specular/PBR view vector"
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
                },
                {
                    "name": "getNumLights",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of currently active lights"
                },
                {
                    "name": "getEnvironment",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Environment*",
                    "desc": "Get the current environment (IBL/skybox), or nullptr if none is set"
                },
                {
                    "name": "calculateLighting",
                    "params": "worldPos, worldNormal, material",
                    "params_typed": "const Vec3& worldPos, const Vec3& worldNormal, const Material& material",
                    "return_type": "Color",
                    "desc": "CPU-side lighting result for a world position and normal, summing all active lights with the given material"
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
                    "params_typed": "const Vec3 & eye, const Vec3 & target, const Vec3 & up",
                    "return_type": "Mat4",
                    "desc": "Create a view matrix"
                },
                {
                    "name": "Mat4_ortho",
                    "params": "left, right, bottom, top, nearPlane, farPlane",
                    "params_typed": "float left, float right, float bottom, float top, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create an orthographic projection matrix"
                },
                {
                    "name": "Mat4_perspective",
                    "params": "fovY, aspect, nearPlane, farPlane",
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
                    "params_typed": "const Vec3 & axis, float radians",
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
                    "params_typed": "const Quaternion & a, const Quaternion & b, float t",
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
                    "name": "Texture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a texture"
                },
                {
                    "name": "load",
                    "params": "path, mipmaps",
                    "params_typed": "const std::filesystem::path & path, bool mipmaps = false",
                    "return_type": "bool",
                    "desc": "Load image from file"
                },
                {
                    "name": "bind",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Bind texture"
                },
                {
                    "name": "unbind",
                    "params": "",
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
                },
                {
                    "name": "channelCount",
                    "params": "fmt",
                    "params_typed": "TextureFormat fmt",
                    "return_type": "int",
                    "desc": "Number of color channels for a TextureFormat (1, 2, or 4)"
                },
                {
                    "name": "bytesPerPixel",
                    "params": "fmt",
                    "params_typed": "TextureFormat fmt",
                    "return_type": "int",
                    "desc": "Bytes per pixel for a TextureFormat"
                },
                {
                    "name": "isFloatFormat",
                    "params": "fmt",
                    "params_typed": "TextureFormat fmt",
                    "return_type": "bool",
                    "desc": "Whether a TextureFormat uses floating-point components"
                }
            ]
        },
        {
            "name": "Graphics - FBO",
            "functions": [
                {
                    "name": "Fbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create an FBO"
                },
                {
                    "name": "allocate",
                    "params": "w, h, sampleCount, format, mipmaps",
                    "params_typed": "int w, int h, int sampleCount = 1, TextureFormat format = TextureFormat::RGBA8, bool mipmaps = false",
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
            "name": "Graphics - Shader",
            "functions": [
                {
                    "name": "Shader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a shader (base class, inheritable)"
                },
                {
                    "name": "load",
                    "params": "descFn",
                    "params_typed": "const sg_shader_desc* (*descFn)(sg_backend) descFn",
                    "return_type": "bool",
                    "desc": "Load from sokol-shdc generated function"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if shader is loaded"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin shader (pushes to stack)"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shader (pops from stack)"
                },
                {
                    "name": "pushShader",
                    "params": "shader",
                    "params_typed": "Shader& shader",
                    "return_type": "void",
                    "desc": "Push shader to stack (subsequent draws use this shader)"
                },
                {
                    "name": "popShader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop shader from stack"
                },
                {
                    "name": "setUniform",
                    "params": "slot, value",
                    "params_typed": "int slot, float value",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec2& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec3& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec4& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, c",
                    "params_typed": "int slot, const Color& c",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<float>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec2>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec3>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec4>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)"
                },
                {
                    "name": "setTexture",
                    "params": "slot, view, sampler",
                    "params_typed": "int slot, sg_view view, sg_sampler sampler",
                    "return_type": "void",
                    "desc": "Bind texture to slot"
                }
            ]
        },
        {
            "name": "Types - Pixels",
            "functions": [
                {
                    "name": "Pixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create pixel buffer"
                },
                {
                    "name": "allocate",
                    "params": "width, height, channels, format",
                    "params_typed": "int width, int height, int channels = 4, PixelFormat format = PixelFormat::U8",
                    "return_type": "void",
                    "desc": "Allocate memory"
                },
                {
                    "name": "getData",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint8_t*",
                    "desc": "Get raw data pointer"
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
                },
                {
                    "name": "save",
                    "params": "path",
                    "params_typed": "const std::filesystem::path & path",
                    "return_type": "bool",
                    "desc": "Save to file"
                }
            ]
        },
        {
            "name": "Types - Mesh",
            "functions": [
                {
                    "name": "Mesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Mesh (constructor)"
                },
                {
                    "name": "setMode",
                    "params": "mode",
                    "params_typed": "PrimitiveMode mode",
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
                    "params": "int",
                    "params_typed": "unsigned int",
                    "return_type": "Mesh&",
                    "desc": "Add an index"
                },
                {
                    "name": "addTriangle",
                    "params": "int, int, int",
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
                    "name": "Path",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Path (constructor)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex"
                },
                {
                    "name": "lineTo",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z = 0",
                    "return_type": "void",
                    "desc": "Add a line segment to point"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y, resolution",
                    "params_typed": "float cx1, float cy1, float cx2, float cy2, float x, float y, int resolution = -1",
                    "return_type": "void",
                    "desc": "Add a cubic bezier curve"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y, resolution",
                    "params_typed": "float cx, float cy, float x, float y, int resolution = -1",
                    "return_type": "void",
                    "desc": "Add a quadratic bezier curve"
                },
                {
                    "name": "curveTo",
                    "params": "x, y, z, resolution",
                    "params_typed": "float x, float y, float z = 0, int resolution = -1",
                    "return_type": "void",
                    "desc": "Add a Catmull-Rom curve segment"
                },
                {
                    "name": "arc",
                    "params": "x, y, radiusX, radiusY, angleBegin, angleEnd, circleResolution",
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
                    "params_typed": "StrokeMesh::CapType type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set cap type: Butt, Round, Square (method chaining)"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "params_typed": "StrokeMesh::JoinType type",
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
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z = 0",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "p",
                    "params_typed": "const Vec3& p",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z = 0",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)"
                },
                {
                    "name": "addVertex",
                    "params": "p",
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
                    "params_typed": "const Path & path",
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
                    "name": "VideoPlayer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a video player"
                },
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
                },
                {
                    "name": "start",
                    "params": "path, settings",
                    "params_typed": "const string& path, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Start live capture (window, or an Fbo for clean GUI-free output); size is taken automatically"
                },
                {
                    "name": "start",
                    "params": "fbo, path, settings",
                    "params_typed": "const Fbo& fbo, const string& path, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Start live capture (window, or an Fbo for clean GUI-free output); size is taken automatically"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop live capture and finalize the file"
                },
                {
                    "name": "open",
                    "params": "path, width, height, settings",
                    "params_typed": "const string& path, int width, int height, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Open the encoder at the given size (path resolved via getDataPath)"
                },
                {
                    "name": "addFrame",
                    "params": "fbo",
                    "params_typed": "const Fbo& fbo",
                    "return_type": "bool",
                    "desc": "Append one frame at the fixed-rate clock (frameIndex/fps)"
                },
                {
                    "name": "addFrame",
                    "params": "pixels",
                    "params_typed": "const Pixels& pixels",
                    "return_type": "bool",
                    "desc": "Append one frame at the fixed-rate clock (frameIndex/fps)"
                },
                {
                    "name": "addFrameAt",
                    "params": "fbo, timeSec",
                    "params_typed": "const Fbo& fbo, double timeSec",
                    "return_type": "bool",
                    "desc": "Append one frame at an explicit presentation time (seconds)"
                },
                {
                    "name": "addFrameAt",
                    "params": "pixels, timeSec",
                    "params_typed": "const Pixels& pixels, double timeSec",
                    "return_type": "bool",
                    "desc": "Append one frame at an explicit presentation time (seconds)"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Finalize and flush the video file"
                },
                {
                    "name": "videoCodecName",
                    "params": "c",
                    "params_typed": "VideoCodec c",
                    "return_type": "const char *",
                    "desc": "Return a human-readable name for a VideoCodec value (e.g. \"H.264\", \"HEVC\", \"ProRes 422\")"
                }
            ]
        },
        {
            "name": "Addon: tcxLut (Color Grading)",
            "functions": [
                {
                    "name": "tcx::lut::Lut3D",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 3D LUT for color grading"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const fs::path& path",
                    "return_type": "bool",
                    "desc": "Load .cube file"
                },
                {
                    "name": "allocate",
                    "params": "size, data",
                    "params_typed": "int size, const float* data = nullptr",
                    "return_type": "void",
                    "desc": "Allocate LUT with optional data"
                },
                {
                    "name": "isAllocated",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if LUT is allocated"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get LUT size (e.g., 32 for 32x32x32)"
                },
                {
                    "name": "tcx::lut::createIdentity",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create identity LUT (no color change)"
                },
                {
                    "name": "tcx::lut::createVintage",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create vintage/faded look LUT"
                },
                {
                    "name": "tcx::lut::createCinematic",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cinematic orange/teal LUT"
                },
                {
                    "name": "tcx::lut::createFilmNoir",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create film noir high-contrast B&W LUT"
                },
                {
                    "name": "tcx::lut::createWarm",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create warm color shift LUT"
                },
                {
                    "name": "tcx::lut::createCool",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cool color shift LUT"
                },
                {
                    "name": "tcx::lut::createPastel",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create soft pastel LUT"
                },
                {
                    "name": "tcx::lut::LutShader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a LUT shader for color grading"
                },
                {
                    "name": "setTexture",
                    "params": "tex",
                    "params_typed": "const T& tex",
                    "return_type": "void",
                    "desc": "Set source texture (VideoGrabber, Texture, Fbo, etc.)"
                },
                {
                    "name": "setLut",
                    "params": "lut",
                    "params_typed": "const Lut3D& lut",
                    "return_type": "void",
                    "desc": "Set LUT to apply"
                },
                {
                    "name": "setBlend",
                    "params": "blend",
                    "params_typed": "float blend",
                    "return_type": "void",
                    "desc": "Set blend amount (0=original, 1=full LUT)"
                },
                {
                    "name": "draw",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw with LUT applied"
                },
                {
                    "name": "draw",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw with LUT applied"
                },
                {
                    "name": "drawSubsection",
                    "params": "x, y, w, h, sx, sy, sw, sh",
                    "params_typed": "float x, float y, float w, float h, float sx, float sy, float sw, float sh",
                    "return_type": "void",
                    "desc": "Draw subsection with LUT applied"
                }
            ]
        },
        {
            "name": "Timers",
            "functions": [
                {
                    "name": "callAfter",
                    "params": "delay, callback",
                    "params_typed": "double delay, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Run callback once after delay seconds. Fired from the update loop (frame-quantized). Returns a timer id."
                },
                {
                    "name": "callEvery",
                    "params": "interval, callback",
                    "params_typed": "double interval, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Run callback repeatedly every interval seconds. Fired from the update loop (frame-quantized). Returns a timer id."
                },
                {
                    "name": "callAfterAsync",
                    "params": "delay, callback",
                    "params_typed": "double delay, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Like callAfter, but fired by a precise background scheduler thread (no frame jitter). The callback runs OFF the main thread: guard shared state with a mutex, never draw from it, and don't cancel while holding that mutex. Native only (uses a real thread). Returns a timer id."
                },
                {
                    "name": "callEveryAsync",
                    "params": "interval, callback",
                    "params_typed": "double interval, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Like callEvery, but fired by a precise background scheduler thread with no drift (reschedules at absolute times). Ideal for sequencer clocks and LED/MIDI output timing. Same threading rules as callAfterAsync. Native only. Returns a timer id."
                },
                {
                    "name": "cancelTimer",
                    "params": "id",
                    "params_typed": "uint64_t id",
                    "return_type": "void",
                    "desc": "Cancel a frame timer (callAfter/callEvery) by id."
                },
                {
                    "name": "cancelAllTimers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Cancel all frame timers on this node."
                },
                {
                    "name": "cancelAsyncTimer",
                    "params": "id",
                    "params_typed": "uint64_t id",
                    "return_type": "void",
                    "desc": "Cancel an async timer by id. Blocks until its callback finishes if it is running now (unless called from inside the callback). Do not call while holding the mutex the callback uses."
                },
                {
                    "name": "cancelAllAsyncTimers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Cancel all async timers on this node (e.g. on mode change). Waits out any in-flight callback. Call it WITHOUT holding the callback's mutex to avoid a deadlock."
                }
            ]
        },
        {
            "name": "Network",
            "functions": [
                {
                    "name": "printNetworkInterfaces",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Log the interface list (one line per entry)"
                },
                {
                    "name": "getLocalIp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "std::string",
                    "desc": "The most likely LAN address (skips loopback/down, IPv4 preferred). \"\" if none"
                },
                {
                    "name": "getLocalIps",
                    "params": "",
                    "params_typed": "",
                    "return_type": "std::vector<std::string>",
                    "desc": "Every non-loopback address (one per interface entry)"
                },
                {
                    "name": "isLoopback",
                    "params": "addr",
                    "params_typed": "const std::string& addr",
                    "return_type": "bool",
                    "desc": "True if addr is a loopback address (127.0.0.0/8 or ::1)"
                },
                {
                    "name": "isPrivate",
                    "params": "addr",
                    "params_typed": "const std::string& addr",
                    "return_type": "bool",
                    "desc": "True if addr is a private IPv4 (10/8, 172.16/12, 192.168/16)"
                },
                {
                    "name": "isLinkLocal",
                    "params": "addr",
                    "params_typed": "const std::string& addr",
                    "return_type": "bool",
                    "desc": "True if addr is link-local (169.254/16 or fe80::/10)"
                },
                {
                    "name": "sameSubnet",
                    "params": "a, b, netmask",
                    "params_typed": "const std::string& a, const std::string& b, const std::string& netmask",
                    "return_type": "bool",
                    "desc": "True if IPv4 a and b are on the same subnet under netmask"
                },
                {
                    "name": "getOui",
                    "params": "mac",
                    "params_typed": "const std::string& mac",
                    "return_type": "std::string",
                    "desc": "The OUI (first 3 bytes) of a MAC, uppercase \"A4:83:E7\". \"\" if unparseable"
                },
                {
                    "name": "isLocallyAdministered",
                    "params": "mac",
                    "params_typed": "const std::string& mac",
                    "return_type": "bool",
                    "desc": "True if the MAC's locally-administered bit is set (randomized/virtual MAC)"
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
                        "const std::filesystem::path & path"
                    ],
                    "desc": "Load image from file"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "const std::filesystem::path & path"
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
                        "const std::filesystem::path & path, bool mipmaps = false",
                        "const std::filesystem::path & path, bool mipmaps = false"
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
                        "const std::filesystem::path & path"
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
                        "const std::filesystem::path & path"
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
            "name": "ColorHSB",
            "desc": "HSB color space (H/S/B: 0-1)"
        },
        {
            "name": "ColorOKLCH",
            "desc": "Perceptually uniform OKLCH color"
        },
        {
            "name": "ChipSound",
            "desc": "Chip/synthesized sound generation"
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
            "name": "EasyCam",
            "desc": "3D camera with mouse control"
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
        },
        {
            "name": "NetworkInterface",
            "desc": "One address entry of a network interface (returned by listNetworkInterfaces)",
            "properties": [
                {
                    "name": "name",
                    "type": "std::string",
                    "desc": "Interface name (en0 / Ethernet / wlan0)"
                },
                {
                    "name": "address",
                    "type": "std::string",
                    "desc": "IP address (IPv4 dotted-quad or IPv6 textual)"
                },
                {
                    "name": "netmask",
                    "type": "std::string",
                    "desc": "Subnet mask (IPv4)"
                },
                {
                    "name": "mac",
                    "type": "std::string",
                    "desc": "Hardware MAC address (empty if unavailable)"
                },
                {
                    "name": "isIPv4",
                    "type": "bool",
                    "desc": "True for IPv4, false for IPv6"
                },
                {
                    "name": "isLoopback",
                    "type": "bool",
                    "desc": "True if a loopback interface"
                },
                {
                    "name": "isUp",
                    "type": "bool",
                    "desc": "True if the interface link is up"
                }
            ],
            "methods": [
                {
                    "name": "getName",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Interface name"
                },
                {
                    "name": "getAddress",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "IP address"
                },
                {
                    "name": "getNetmask",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Subnet mask"
                },
                {
                    "name": "getMac",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "MAC address"
                },
                {
                    "name": "getIsIPv4",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the address is IPv4"
                },
                {
                    "name": "getIsLoopback",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether this is a loopback interface"
                },
                {
                    "name": "getIsUp",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the link is up"
                }
            ]
        },
        {
            "name": "UdpReceiveEventArgs",
            "desc": "Event args for UdpSocket::onReceive",
            "properties": [
                {
                    "name": "data",
                    "type": "std::vector<char>",
                    "desc": "Received data"
                },
                {
                    "name": "remoteHost",
                    "type": "std::string",
                    "desc": "Source host"
                },
                {
                    "name": "remotePort",
                    "type": "int",
                    "desc": "Source port"
                }
            ]
        },
        {
            "name": "UdpErrorEventArgs",
            "desc": "Event args for UdpSocket::onError",
            "properties": [
                {
                    "name": "message",
                    "type": "std::string",
                    "desc": "Error message"
                },
                {
                    "name": "errorCode",
                    "type": "int",
                    "desc": "Error code"
                }
            ]
        },
        {
            "name": "TcpConnectEventArgs",
            "desc": "Event args for TcpClient::onConnect",
            "properties": [
                {
                    "name": "success",
                    "type": "bool",
                    "desc": "Whether the connection succeeded"
                },
                {
                    "name": "message",
                    "type": "std::string",
                    "desc": "Connection message"
                }
            ]
        },
        {
            "name": "TcpReceiveEventArgs",
            "desc": "Event args for TcpClient::onReceive",
            "properties": [
                {
                    "name": "data",
                    "type": "std::vector<char>",
                    "desc": "Received data"
                }
            ]
        },
        {
            "name": "TcpDisconnectEventArgs",
            "desc": "Event args for TcpClient::onDisconnect",
            "properties": [
                {
                    "name": "reason",
                    "type": "std::string",
                    "desc": "Disconnect reason"
                },
                {
                    "name": "wasClean",
                    "type": "bool",
                    "desc": "Whether it was a clean disconnect"
                }
            ]
        },
        {
            "name": "TcpErrorEventArgs",
            "desc": "Event args for TcpClient::onError",
            "properties": [
                {
                    "name": "message",
                    "type": "std::string",
                    "desc": "Error message"
                },
                {
                    "name": "errorCode",
                    "type": "int",
                    "desc": "Error code"
                }
            ]
        },
        {
            "name": "TcpServerClient",
            "desc": "A client connected to a TcpServer (read-only handle)",
            "methods": [
                {
                    "name": "getId",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Client ID assigned by the server"
                },
                {
                    "name": "getHost",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Client IP address"
                },
                {
                    "name": "getPort",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Client port"
                }
            ]
        },
        {
            "name": "TcpClientConnectEventArgs",
            "desc": "Event args for TcpServer::onClientConnect",
            "properties": [
                {
                    "name": "clientId",
                    "type": "int",
                    "desc": "Client ID"
                },
                {
                    "name": "host",
                    "type": "std::string",
                    "desc": "Client IP address"
                },
                {
                    "name": "port",
                    "type": "int",
                    "desc": "Client port"
                }
            ]
        },
        {
            "name": "TcpServerReceiveEventArgs",
            "desc": "Event args for TcpServer::onReceive",
            "properties": [
                {
                    "name": "clientId",
                    "type": "int",
                    "desc": "Client ID"
                },
                {
                    "name": "data",
                    "type": "std::vector<char>",
                    "desc": "Received data"
                }
            ]
        },
        {
            "name": "TcpClientDisconnectEventArgs",
            "desc": "Event args for TcpServer::onClientDisconnect",
            "properties": [
                {
                    "name": "clientId",
                    "type": "int",
                    "desc": "Client ID"
                },
                {
                    "name": "reason",
                    "type": "std::string",
                    "desc": "Disconnect reason"
                },
                {
                    "name": "wasClean",
                    "type": "bool",
                    "desc": "Whether the disconnect was clean"
                }
            ]
        },
        {
            "name": "TcpServerErrorEventArgs",
            "desc": "Event args for TcpServer::onError",
            "properties": [
                {
                    "name": "message",
                    "type": "std::string",
                    "desc": "Error message"
                },
                {
                    "name": "errorCode",
                    "type": "int",
                    "desc": "Error code"
                },
                {
                    "name": "clientId",
                    "type": "int",
                    "desc": "Client ID (-1 = server-level error, not a specific client)"
                }
            ]
        },
        {
            "name": "SerialDeviceInfo",
            "desc": "Info for one serial device (from Serial::listDevices)",
            "properties": [
                {
                    "name": "deviceId",
                    "type": "int",
                    "desc": "Device index"
                },
                {
                    "name": "devicePath",
                    "type": "std::string",
                    "desc": "Device path (e.g. COM3, /dev/tty.usbserial-*)"
                },
                {
                    "name": "deviceName",
                    "type": "std::string",
                    "desc": "Device name"
                }
            ],
            "methods": [
                {
                    "name": "getDeviceID",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Device index"
                },
                {
                    "name": "getDevicePath",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Device path"
                },
                {
                    "name": "getDeviceName",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Device name"
                }
            ]
        },
        {
            "name": "SoundSource",
            "desc": "Abstract base for anything Sound::play() can consume. Two concrete subclasses: SoundBuffer (eager, full PCM in RAM) and SoundStream (decoded on demand from disk). Holds the shared channels / sampleRate fields and the kind() / getDuration() interface.",
            "properties": [
                {
                    "name": "channels",
                    "type": "int",
                    "desc": "Channel count of the source (1 = mono, 2 = stereo, ...)"
                },
                {
                    "name": "sampleRate",
                    "type": "int",
                    "desc": "Source sample rate in Hz"
                }
            ],
            "methods": [
                {
                    "name": "kind",
                    "return": "SoundSource::Kind",
                    "signatures": [
                        ""
                    ],
                    "desc": "Source kind (Eager for SoundBuffer, Stream for SoundStream). Lets the mixer dispatch without a virtual call per frame."
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Duration in seconds. numSamples/sampleRate for buffers; the decoded file's duration for streams."
                }
            ]
        },
        {
            "name": "SoundBuffer",
            "desc": "Eager sound source: the full file decoded into interleaved float PCM held in RAM. Derives from SoundSource (inherits channels / sampleRate / kind() / getDuration()). Also provides waveform generators, an ADSR envelope, and mixing helpers, so it doubles as a procedural-audio scratch buffer. Best for short SFX and zero-latency play / seek / multi-instance.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "properties": [
                {
                    "name": "samples",
                    "type": "vector<float>",
                    "desc": "Interleaved PCM samples (channels interleaved per frame)"
                },
                {
                    "name": "numSamples",
                    "type": "size_t",
                    "desc": "Number of samples per channel (frame count)"
                }
            ],
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode a file into PCM, auto-detecting format from the extension (.wav .mp3 .ogg .flac .aac .m4a, case-insensitive). Returns false on failure."
                },
                {
                    "name": "loadWav",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode a WAV file into PCM."
                },
                {
                    "name": "loadMp3",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode an MP3 file into PCM."
                },
                {
                    "name": "loadOgg",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode an OGG Vorbis file into PCM (via stb_vorbis)."
                },
                {
                    "name": "loadFlac",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode a FLAC file into PCM."
                },
                {
                    "name": "loadAac",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode an AAC / M4A file into PCM (platform-specific; returns false on unsupported platforms)."
                },
                {
                    "name": "loadWavFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode WAV data from a memory buffer."
                },
                {
                    "name": "loadMp3FromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode MP3 data from a memory buffer."
                },
                {
                    "name": "loadOggFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode OGG Vorbis data from a memory buffer."
                },
                {
                    "name": "loadFlacFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode FLAC data from a memory buffer."
                },
                {
                    "name": "loadAacFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode AAC data from a memory buffer (platform-specific; returns false on unsupported platforms)."
                },
                {
                    "name": "loadPcmFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize, int numChannels, int rate, int bitsPerSample = 16, bool bigEndian = false"
                    ],
                    "desc": "Load raw interleaved PCM (16-bit signed or 32-bit float) from memory with explicit format. Returns false for unsupported bit depths."
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Duration in seconds (numSamples / sampleRate)."
                },
                {
                    "name": "generateSineWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono sine wave of the given frequency (Hz) and duration (seconds)."
                },
                {
                    "name": "generateSquareWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono square wave."
                },
                {
                    "name": "generateTriangleWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono triangle wave."
                },
                {
                    "name": "generateSawtoothWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono sawtooth wave."
                },
                {
                    "name": "generateNoise",
                    "return": "void",
                    "signatures": [
                        "float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with mono white noise."
                },
                {
                    "name": "generatePinkNoise",
                    "return": "void",
                    "signatures": [
                        "float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with mono pink noise (1/f spectrum, Paul Kellet's method)."
                },
                {
                    "name": "generateSilence",
                    "return": "void",
                    "signatures": [
                        "float duration, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with silence of the given duration (useful as a base for mixFrom)."
                },
                {
                    "name": "applyADSR",
                    "return": "void",
                    "signatures": [
                        "float attack, float decay, float sustainLevel, float release"
                    ],
                    "desc": "Apply an ADSR amplitude envelope to the buffer in place (attack / decay / release in seconds, sustainLevel 0-1)."
                },
                {
                    "name": "mixFrom",
                    "return": "void",
                    "signatures": [
                        "const SoundBuffer& other, size_t offsetSamples, float volume = 1.0f"
                    ],
                    "desc": "Additively mix another buffer into this one starting at offsetSamples, growing this buffer if needed."
                },
                {
                    "name": "clip",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Hard-clip all samples into the -1.0 .. 1.0 range."
                }
            ],
            "static_methods": [
                {
                    "name": "SoundBuffer_getAdtsSampleRateIndex",
                    "return": "int",
                    "signatures": [
                        "int sampleRate"
                    ],
                    "desc": "ADTS sample-rate index for the given rate (AAC-in-MOV container helper)."
                },
                {
                    "name": "SoundBuffer_createAdtsHeader",
                    "return": "void",
                    "signatures": [
                        "uint8_t* header, int frameLength, int sampleRate, int channels, int profile = 2"
                    ],
                    "desc": "Write a 7-byte ADTS header for one raw AAC frame into header (AAC-in-MOV container helper)."
                }
            ]
        },
        {
            "name": "SoundStream",
            "desc": "Streaming sound source: the file stays open and is decoded on demand into a small per-voice ring buffer instead of full PCM in RAM. Derives from SoundSource (inherits channels / sampleRate / kind() / getDuration()). Best for long files (BGM, podcasts). Trade-offs vs SoundBuffer: setSpeed() is treated as 1.0, setPosition() seeks with a ~10 ms refill, and each polyphony slot costs one open file handle + decoder + ring buffer.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "loadStream",
                    "return": "bool",
                    "signatures": [
                        "const string& path, int maxPolyphony = 1"
                    ],
                    "desc": "Open the file, validate format (.wav .mp3 .flac .ogg), and populate channels / sampleRate / duration. maxPolyphony reserves that many concurrent decoder slots. Returns false if the file can't be opened or the format is unsupported."
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Decoded file duration in seconds."
                },
                {
                    "name": "getPath",
                    "return": "const string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Path the stream was opened from."
                },
                {
                    "name": "getMaxPolyphony",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of concurrent decoder slots reserved at loadStream()."
                }
            ]
        },
        {
            "name": "AudioEngine",
            "desc": "Singleton miniaudio-based mixer engine. Owns the output device, mixes all playing Sound voices, exposes real-time audioOut / audioIn / audioDeviceChanged events, and an FFT analysis ring buffer. Access via AudioEngine::getInstance(); most apps drive it indirectly through the Sound class and the global initAudio() / shutdownAudio() helpers.",
            "properties": [
                {
                    "name": "audioOut",
                    "type": "Event<AudioOutBuffer>",
                    "desc": "Real-time playback callback event. listen() to add a synthesis / processing listener. Fires per audio buffer on the audio thread; keep RT-safe."
                },
                {
                    "name": "audioIn",
                    "type": "Event<AudioInBuffer>",
                    "desc": "Real-time capture callback event (microphone input). listen() to add an input-processing listener. Fires per audio buffer on the audio thread; keep RT-safe."
                },
                {
                    "name": "audioDeviceChanged",
                    "type": "Event<AudioDeviceChangedArgs>",
                    "desc": "Fires after every successful init() (initial AND re-init). Args carry the resolved device's real name, isDefaultDevice flag, sampleRate, channels, bufferSize, maxPolyphony. Listener runs on the thread that called init() (main), not the audio thread."
                }
            ],
            "methods": [
                {
                    "name": "init",
                    "return": "bool",
                    "signatures": [
                        "",
                        "const AudioSettings& settings"
                    ],
                    "desc": "Initialize the engine with defaults, or with an AudioSettings override. Re-init on a running engine migrates active voices to the new settings. Returns true on success."
                },
                {
                    "name": "shutdown",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop and close the audio device."
                },
                {
                    "name": "getSampleRate",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current engine output sample rate (Hz). Returns the default (48000) before init()."
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current engine output channel count."
                },
                {
                    "name": "getMaxPolyphony",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Maximum number of simultaneously-playing Sound voices."
                },
                {
                    "name": "getBufferSize",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current device buffer size in frames (0 = miniaudio default)."
                },
                {
                    "name": "isInitialized",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True after a successful init()."
                },
                {
                    "name": "getAnalysisBuffer",
                    "return": "size_t",
                    "signatures": [
                        "float* outBuffer, size_t numSamples"
                    ],
                    "desc": "Copy the latest mixed output samples (mono, L+R average) into outBuffer. numSamples is capped at 4096. Returns the number of samples written. (Global wrapper: getAudioAnalysisBuffer.)"
                }
            ],
            "static_methods": [
                {
                    "name": "AudioEngine_getInstance",
                    "return": "AudioEngine&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the global AudioEngine singleton."
                },
                {
                    "name": "AudioEngine_listDevices",
                    "return": "vector<AudioDeviceInfo>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Enumerate available playback devices (name + isDefault). Empty if unsupported on the platform."
                }
            ]
        },
        {
            "name": "MicInput",
            "desc": "Microphone capture (miniaudio). Opens an input device and exposes the latest samples through a ring buffer. Use the global getMicInput() to access the shared instance, then start() it; getMicAnalysisBuffer() is a convenience wrapper over getBuffer().",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "start",
                    "return": "bool",
                    "signatures": [
                        "int sampleRate = 44100"
                    ],
                    "desc": "Open the microphone device at the given sample rate and begin capturing. Returns false on failure."
                },
                {
                    "name": "stop",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop capture and close the microphone device."
                },
                {
                    "name": "getBuffer",
                    "return": "size_t",
                    "signatures": [
                        "float* outBuffer, size_t numSamples"
                    ],
                    "desc": "Copy the latest captured samples into outBuffer. numSamples is capped at the ring buffer size (4096). Returns the number of samples written."
                },
                {
                    "name": "isRunning",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True while the microphone device is open and capturing."
                },
                {
                    "name": "getSampleRate",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Sample rate the microphone was opened at."
                }
            ]
        },
        {
            "name": "AudioSettings",
            "desc": "Configuration passed to AudioEngine::init() to override engine defaults (sample rate, channels, buffer size, polyphony, device). Empty deviceName selects the system default playback device.",
            "properties": [
                {
                    "name": "sampleRate",
                    "type": "int",
                    "desc": "Engine output sample rate in Hz (default 96000)"
                },
                {
                    "name": "channels",
                    "type": "int",
                    "desc": "Output channel count (1 = mono, 2 = stereo; default 2)"
                },
                {
                    "name": "bufferSize",
                    "type": "int",
                    "desc": "Requested device buffer size in frames; 0 = let miniaudio choose"
                },
                {
                    "name": "maxPolyphony",
                    "type": "int",
                    "desc": "Max simultaneously-playing Sound voices (default 32)"
                },
                {
                    "name": "deviceName",
                    "type": "string",
                    "desc": "Playback device name; empty = system default. Use AudioEngine::listDevices() to enumerate."
                }
            ]
        },
        {
            "name": "AudioDeviceInfo",
            "desc": "One entry in the list returned by AudioEngine::listDevices().",
            "properties": [
                {
                    "name": "name",
                    "type": "string",
                    "desc": "Device name (pass to AudioSettings::deviceName)"
                },
                {
                    "name": "isDefault",
                    "type": "bool",
                    "desc": "True if this is the system default playback device"
                }
            ]
        },
        {
            "name": "AudioDeviceChangedArgs",
            "desc": "Argument type for the AudioEngine::audioDeviceChanged event, fired after every successful init() (initial and re-init). Reports the resolved device's real name (never empty).",
            "properties": [
                {
                    "name": "deviceName",
                    "type": "string",
                    "desc": "Actual device name now active (resolved, never empty)"
                },
                {
                    "name": "isDefaultDevice",
                    "type": "bool",
                    "desc": "True when the opened device is the OS's current default playback device"
                },
                {
                    "name": "sampleRate",
                    "type": "int",
                    "desc": "Active engine sample rate in Hz"
                },
                {
                    "name": "channels",
                    "type": "int",
                    "desc": "Active output channel count"
                },
                {
                    "name": "bufferSize",
                    "type": "int",
                    "desc": "Active device buffer size in frames"
                },
                {
                    "name": "maxPolyphony",
                    "type": "int",
                    "desc": "Active max polyphony"
                }
            ]
        },
        {
            "name": "AudioOutBuffer",
            "desc": "Argument type for the AudioEngine::audioOut event. Holds the interleaved mutable output buffer for a single audio callback. Listeners should ADD their contribution to data (voices are already mixed in); do not call engine APIs from here.",
            "properties": [
                {
                    "name": "data",
                    "type": "float*",
                    "desc": "Interleaved mutable output, frameCount * channels samples"
                },
                {
                    "name": "frameCount",
                    "type": "int",
                    "desc": "Number of frames in this callback"
                },
                {
                    "name": "channels",
                    "type": "int",
                    "desc": "Channel count (floats per frame)"
                },
                {
                    "name": "sampleRate",
                    "type": "int",
                    "desc": "Engine output sample rate in Hz"
                },
                {
                    "name": "framePosition",
                    "type": "uint64_t",
                    "desc": "Monotonic count of output frames emitted since engine init (sample-accurate time/phase reference)"
                }
            ]
        },
        {
            "name": "AudioInBuffer",
            "desc": "Argument type for the AudioEngine::audioIn event. Holds the interleaved read-only microphone input for a single capture callback. Process and return quickly; do not call engine APIs from here.",
            "properties": [
                {
                    "name": "data",
                    "type": "const float*",
                    "desc": "Interleaved read-only mic input, frameCount * channels samples"
                },
                {
                    "name": "frameCount",
                    "type": "int",
                    "desc": "Number of frames in this callback"
                },
                {
                    "name": "channels",
                    "type": "int",
                    "desc": "Channel count (floats per frame)"
                },
                {
                    "name": "sampleRate",
                    "type": "int",
                    "desc": "Input sample rate in Hz"
                },
                {
                    "name": "framePosition",
                    "type": "uint64_t",
                    "desc": "Monotonic count of input frames received since capture start"
                }
            ]
        },
        {
            "name": "ChipSoundNote",
            "desc": "One 8-bit-style note: a plain aggregate of public fields (wave, hz, volume, duration, and the ADSR envelope attack/decay/sustain/release). Set fields directly via designated initializers ({ .wave = Wave::Square, .hz = 440, .duration = 0.2f }) or the constructor, then build() it into a Sound (or add() it to a ChipSoundBundle).",
            "constructor": {
                "signatures": [
                    "",
                    "Wave w, float freq, float dur, float vol = 0.5f"
                ]
            },
            "properties": [
                {
                    "name": "wave",
                    "type": "Wave",
                    "desc": "Waveform (Sin, Square, Triangle, Sawtooth, Noise, PinkNoise, Silent)"
                },
                {
                    "name": "hz",
                    "type": "float",
                    "desc": "Frequency in Hz (ignored for Noise / Silent)"
                },
                {
                    "name": "volume",
                    "type": "float",
                    "desc": "Volume (0.0-1.0)"
                },
                {
                    "name": "duration",
                    "type": "float",
                    "desc": "Note duration in seconds"
                },
                {
                    "name": "attack",
                    "type": "float",
                    "desc": "ADSR attack time in seconds"
                },
                {
                    "name": "decay",
                    "type": "float",
                    "desc": "ADSR decay time in seconds"
                },
                {
                    "name": "sustain",
                    "type": "float",
                    "desc": "ADSR sustain level (0.0-1.0)"
                },
                {
                    "name": "release",
                    "type": "float",
                    "desc": "ADSR release time in seconds"
                }
            ],
            "methods": [
                {
                    "name": "build",
                    "return": "Sound",
                    "signatures": [
                        ""
                    ],
                    "desc": "Render this note (with its ADSR envelope) into a playable Sound"
                }
            ]
        },
        {
            "name": "ChipSoundBundle",
            "desc": "A timeline of chiptune notes (ChipSoundNote + start time) that builds into a single mixed Sound. Add notes at times, then call build() to render the mix with ADSR and clipping applied.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "properties": [
                {
                    "name": "entries",
                    "type": "vector<ChipSoundBundle::Entry>",
                    "desc": "The scheduled notes (each Entry pairs a ChipSoundNote with its start time in seconds)"
                },
                {
                    "name": "volume",
                    "type": "float",
                    "desc": "Master volume multiplier applied when mixing (default 1.0)"
                }
            ],
            "methods": [
                {
                    "name": "add",
                    "return": "ChipSoundBundle&",
                    "signatures": [
                        "const ChipSoundNote& note, float time",
                        "ChipSoundNote::Wave wave, float hz, float duration, float time, float vol = 0.5f"
                    ],
                    "desc": "Schedule a note to start at the given time (seconds). The second overload constructs the note inline from wave / frequency / duration."
                },
                {
                    "name": "clear",
                    "return": "ChipSoundBundle&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove all scheduled notes."
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Total duration in seconds, auto-computed from the last note's end."
                },
                {
                    "name": "build",
                    "return": "Sound",
                    "signatures": [
                        ""
                    ],
                    "desc": "Render all scheduled notes into a single mixed, clipped Sound ready to play."
                }
            ]
        },
        {
            "name": "Logger",
            "desc": "Logging core with console and file output and an onLog event; access the global instance via getLogger()",
            "methods": [
                {
                    "name": "log",
                    "return": "void",
                    "signatures": [
                        "LogLevel level, const string& message"
                    ],
                    "desc": "Emit a log message at the given level"
                },
                {
                    "name": "setConsoleLogLevel",
                    "return": "void",
                    "signatures": [
                        "LogLevel level"
                    ],
                    "desc": "Set the minimum console log level"
                },
                {
                    "name": "getConsoleLogLevel",
                    "return": "LogLevel",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the current console log level"
                },
                {
                    "name": "setLogFile",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Open a file to receive log output"
                },
                {
                    "name": "closeFile",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the current log file"
                },
                {
                    "name": "setFileLogLevel",
                    "return": "void",
                    "signatures": [
                        "LogLevel level"
                    ],
                    "desc": "Set the minimum file log level"
                },
                {
                    "name": "getFileLogLevel",
                    "return": "LogLevel",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the current file log level"
                },
                {
                    "name": "getLogFilePath",
                    "return": "const string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the path of the current log file"
                },
                {
                    "name": "isFileOpen",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check whether a log file is currently open"
                }
            ]
        },
        {
            "name": "CoreEvents",
            "desc": "Hub of all framework core events. Each member is an Event you subscribe to with .listen(callback); access the global instance via events()",
            "properties": [
                {
                    "name": "setup",
                    "type": "Event<void>",
                    "desc": "Fired after app setup completes"
                },
                {
                    "name": "update",
                    "type": "Event<void>",
                    "desc": "Fired before update each frame"
                },
                {
                    "name": "draw",
                    "type": "Event<void>",
                    "desc": "Fired before draw each frame"
                },
                {
                    "name": "onRender",
                    "type": "Event<void>",
                    "desc": "Fired after sokol_gl flush, while the render pass is still active"
                },
                {
                    "name": "afterFrame",
                    "type": "Event<void>",
                    "desc": "Fired after present() (swapchain committed, outside any pass)"
                },
                {
                    "name": "exit",
                    "type": "Event<void>",
                    "desc": "Fired on app exit"
                },
                {
                    "name": "exitRequested",
                    "type": "Event<ExitRequestEventArgs>",
                    "desc": "Fired when an exit is requested; set args.cancel = true to cancel it"
                },
                {
                    "name": "keyPressed",
                    "type": "Event<KeyEventArgs>",
                    "desc": "Fired when a key is pressed"
                },
                {
                    "name": "keyReleased",
                    "type": "Event<KeyEventArgs>",
                    "desc": "Fired when a key is released"
                },
                {
                    "name": "mousePressed",
                    "type": "Event<MouseEventArgs>",
                    "desc": "Fired when a mouse button is pressed"
                },
                {
                    "name": "mouseReleased",
                    "type": "Event<MouseEventArgs>",
                    "desc": "Fired when a mouse button is released"
                },
                {
                    "name": "mouseMoved",
                    "type": "Event<MouseMoveEventArgs>",
                    "desc": "Fired when the mouse moves with no button held"
                },
                {
                    "name": "mouseDragged",
                    "type": "Event<MouseDragEventArgs>",
                    "desc": "Fired when the mouse moves with a button held"
                },
                {
                    "name": "mouseScrolled",
                    "type": "Event<ScrollEventArgs>",
                    "desc": "Fired when the mouse wheel / trackpad scrolls"
                },
                {
                    "name": "windowResized",
                    "type": "Event<ResizeEventArgs>",
                    "desc": "Fired when the window is resized"
                },
                {
                    "name": "filesDropped",
                    "type": "Event<DragDropEventArgs>",
                    "desc": "Fired when files are dropped onto the window"
                },
                {
                    "name": "clipboardPasted",
                    "type": "Event<ClipboardPastedEventArgs>",
                    "desc": "Fired on a paste gesture (Cmd+V / Ctrl+V / browser paste); args.text holds the content"
                },
                {
                    "name": "console",
                    "type": "Event<ConsoleEventArgs>",
                    "desc": "Fired when a command line is received from stdin"
                },
                {
                    "name": "touchPressed",
                    "type": "Event<TouchEventArgs>",
                    "desc": "Fired when a touch begins (Android/iOS, multi-touch)"
                },
                {
                    "name": "touchMoved",
                    "type": "Event<TouchEventArgs>",
                    "desc": "Fired when a touch moves (Android/iOS, multi-touch)"
                },
                {
                    "name": "touchReleased",
                    "type": "Event<TouchEventArgs>",
                    "desc": "Fired when a touch ends or is cancelled (check args.cancelled)"
                },
                {
                    "name": "rawEvent",
                    "type": "Event<const sapp_event>",
                    "desc": "Fired for every raw sokol_app event (for addons needing the full sapp_event)"
                }
            ]
        },
        {
            "name": "Event",
            "desc": "Generic event you subscribe to with listen(callback) and fire with notify(arg). The template parameter is the argument type passed to listeners by reference; Event<void> is the no-argument specialization (callbacks and notify take no argument). listen() returns an EventListener RAII token that disconnects when destroyed",
            "methods": [
                {
                    "name": "listen",
                    "return": "EventListener",
                    "signatures": [
                        "Callback callback, int priority = EventPriority::App",
                        "Callback callback, Deliver deliver, int priority = EventPriority::App"
                    ],
                    "desc": "Register a listener callback and return an EventListener token; lower priority runs first, and Deliver::Main runs the callback on the main thread"
                },
                {
                    "name": "notify",
                    "return": "void",
                    "signatures": [
                        "T& arg"
                    ],
                    "desc": "Fire the event, calling all listeners in priority order (no argument for Event<void>); stops early if a listener marks an input arg consumed"
                },
                {
                    "name": "listenerCount",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of currently registered listeners"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove all listeners"
                }
            ]
        },
        {
            "name": "EventListener",
            "desc": "RAII token returned by Event::listen(); the listener is automatically disconnected when this token is destroyed or reassigned. Move-only",
            "methods": [
                {
                    "name": "disconnect",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Explicitly disconnect the listener now (otherwise happens automatically on destruction)"
                },
                {
                    "name": "isConnected",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True while the listener is still connected to its event"
                }
            ]
        },
        {
            "name": "KeyEventArgs",
            "desc": "Arguments for keyPressed / keyReleased events",
            "properties": [
                {
                    "name": "key",
                    "type": "int",
                    "desc": "Key code (KEY_* / SAPP_KEYCODE_*)"
                },
                {
                    "name": "isRepeat",
                    "type": "bool",
                    "desc": "True if this is a repeat from holding the key"
                },
                {
                    "name": "shift",
                    "type": "bool",
                    "desc": "Shift modifier held"
                },
                {
                    "name": "ctrl",
                    "type": "bool",
                    "desc": "Ctrl modifier held"
                },
                {
                    "name": "alt",
                    "type": "bool",
                    "desc": "Alt modifier held"
                },
                {
                    "name": "super",
                    "type": "bool",
                    "desc": "Super / Command modifier held"
                },
                {
                    "name": "consumed",
                    "type": "bool",
                    "desc": "Set true in a listener to stop propagation to lower-priority listeners"
                }
            ]
        },
        {
            "name": "MouseEventArgs",
            "desc": "Arguments for mousePressed / mouseReleased events. pos is local space, globalPos is screen space (equal at app level)",
            "properties": [
                {
                    "name": "pos",
                    "type": "Vec2",
                    "desc": "Cursor position in the receiving node's local space (== globalPos at app level)"
                },
                {
                    "name": "globalPos",
                    "type": "Vec2",
                    "desc": "Cursor position in screen space"
                },
                {
                    "name": "button",
                    "type": "int",
                    "desc": "Mouse button (MOUSE_BUTTON_LEFT / RIGHT / MIDDLE)"
                },
                {
                    "name": "x",
                    "type": "float",
                    "desc": "Legacy mirror of pos.x (removed at v1.0)"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Legacy mirror of pos.y (removed at v1.0)"
                },
                {
                    "name": "shift",
                    "type": "bool",
                    "desc": "Shift modifier held"
                },
                {
                    "name": "ctrl",
                    "type": "bool",
                    "desc": "Ctrl modifier held"
                },
                {
                    "name": "alt",
                    "type": "bool",
                    "desc": "Alt modifier held"
                },
                {
                    "name": "super",
                    "type": "bool",
                    "desc": "Super / Command modifier held"
                },
                {
                    "name": "consumed",
                    "type": "bool",
                    "desc": "Set true in a listener to stop propagation to lower-priority listeners"
                }
            ]
        },
        {
            "name": "MouseMoveEventArgs",
            "desc": "Arguments for mouseMoved (cursor moving with no button held)",
            "properties": [
                {
                    "name": "pos",
                    "type": "Vec2",
                    "desc": "Cursor position in local space (== globalPos at app level)"
                },
                {
                    "name": "globalPos",
                    "type": "Vec2",
                    "desc": "Cursor position in screen space"
                },
                {
                    "name": "delta",
                    "type": "Vec2",
                    "desc": "Movement since the last event, in local space"
                },
                {
                    "name": "globalDelta",
                    "type": "Vec2",
                    "desc": "Movement since the last event, in screen space"
                },
                {
                    "name": "x",
                    "type": "float",
                    "desc": "Legacy mirror of pos.x (removed at v1.0)"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Legacy mirror of pos.y (removed at v1.0)"
                },
                {
                    "name": "deltaX",
                    "type": "float",
                    "desc": "Legacy mirror of delta.x (removed at v1.0)"
                },
                {
                    "name": "deltaY",
                    "type": "float",
                    "desc": "Legacy mirror of delta.y (removed at v1.0)"
                },
                {
                    "name": "shift",
                    "type": "bool",
                    "desc": "Shift modifier held"
                },
                {
                    "name": "ctrl",
                    "type": "bool",
                    "desc": "Ctrl modifier held"
                },
                {
                    "name": "alt",
                    "type": "bool",
                    "desc": "Alt modifier held"
                },
                {
                    "name": "super",
                    "type": "bool",
                    "desc": "Super / Command modifier held"
                },
                {
                    "name": "consumed",
                    "type": "bool",
                    "desc": "Set true in a listener to stop propagation to lower-priority listeners"
                }
            ]
        },
        {
            "name": "MouseDragEventArgs",
            "desc": "Arguments for mouseDragged (cursor moving with a button held)",
            "properties": [
                {
                    "name": "pos",
                    "type": "Vec2",
                    "desc": "Cursor position in local space (== globalPos at app level)"
                },
                {
                    "name": "globalPos",
                    "type": "Vec2",
                    "desc": "Cursor position in screen space"
                },
                {
                    "name": "delta",
                    "type": "Vec2",
                    "desc": "Movement since the last event, in local space"
                },
                {
                    "name": "globalDelta",
                    "type": "Vec2",
                    "desc": "Movement since the last event, in screen space"
                },
                {
                    "name": "button",
                    "type": "int",
                    "desc": "Mouse button being dragged (MOUSE_BUTTON_*)"
                },
                {
                    "name": "x",
                    "type": "float",
                    "desc": "Legacy mirror of pos.x (removed at v1.0)"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Legacy mirror of pos.y (removed at v1.0)"
                },
                {
                    "name": "deltaX",
                    "type": "float",
                    "desc": "Legacy mirror of delta.x (removed at v1.0)"
                },
                {
                    "name": "deltaY",
                    "type": "float",
                    "desc": "Legacy mirror of delta.y (removed at v1.0)"
                },
                {
                    "name": "shift",
                    "type": "bool",
                    "desc": "Shift modifier held"
                },
                {
                    "name": "ctrl",
                    "type": "bool",
                    "desc": "Ctrl modifier held"
                },
                {
                    "name": "alt",
                    "type": "bool",
                    "desc": "Alt modifier held"
                },
                {
                    "name": "super",
                    "type": "bool",
                    "desc": "Super / Command modifier held"
                },
                {
                    "name": "consumed",
                    "type": "bool",
                    "desc": "Set true in a listener to stop propagation to lower-priority listeners"
                }
            ]
        },
        {
            "name": "ScrollEventArgs",
            "desc": "Arguments for mouseScrolled events",
            "properties": [
                {
                    "name": "pos",
                    "type": "Vec2",
                    "desc": "Cursor position in local space (== globalPos at app level)"
                },
                {
                    "name": "globalPos",
                    "type": "Vec2",
                    "desc": "Cursor position in screen space"
                },
                {
                    "name": "scroll",
                    "type": "Vec2",
                    "desc": "Scroll amount (x: horizontal, y: vertical)"
                },
                {
                    "name": "scrollX",
                    "type": "float",
                    "desc": "Legacy mirror of scroll.x (removed at v1.0)"
                },
                {
                    "name": "scrollY",
                    "type": "float",
                    "desc": "Legacy mirror of scroll.y (removed at v1.0)"
                },
                {
                    "name": "shift",
                    "type": "bool",
                    "desc": "Shift modifier held"
                },
                {
                    "name": "ctrl",
                    "type": "bool",
                    "desc": "Ctrl modifier held"
                },
                {
                    "name": "alt",
                    "type": "bool",
                    "desc": "Alt modifier held"
                },
                {
                    "name": "super",
                    "type": "bool",
                    "desc": "Super / Command modifier held"
                },
                {
                    "name": "consumed",
                    "type": "bool",
                    "desc": "Set true in a listener to stop propagation to lower-priority listeners"
                }
            ]
        },
        {
            "name": "ResizeEventArgs",
            "desc": "Arguments for windowResized events",
            "properties": [
                {
                    "name": "width",
                    "type": "int",
                    "desc": "New window width in pixels"
                },
                {
                    "name": "height",
                    "type": "int",
                    "desc": "New window height in pixels"
                }
            ]
        },
        {
            "name": "DragDropEventArgs",
            "desc": "Arguments for filesDropped events",
            "properties": [
                {
                    "name": "files",
                    "type": "vector<string>",
                    "desc": "Paths of the dropped files"
                },
                {
                    "name": "x",
                    "type": "float",
                    "desc": "Drop position x"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Drop position y"
                }
            ]
        },
        {
            "name": "ClipboardPastedEventArgs",
            "desc": "Arguments for clipboardPasted events; the only reliable way to read the clipboard on the Web platform",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "desc": "Pasted clipboard content (already read for you)"
                }
            ]
        },
        {
            "name": "TouchPoint",
            "desc": "A single finger within a TouchEventArgs",
            "properties": [
                {
                    "name": "id",
                    "type": "int",
                    "desc": "Touch ID, persistent across move events"
                },
                {
                    "name": "x",
                    "type": "float",
                    "desc": "Touch x position"
                },
                {
                    "name": "y",
                    "type": "float",
                    "desc": "Touch y position"
                },
                {
                    "name": "pressure",
                    "type": "float",
                    "desc": "Touch pressure (0.0-1.0; not yet reported by sokol, defaults to 1.0)"
                },
                {
                    "name": "changed",
                    "type": "bool",
                    "desc": "True if this touch was part of the current action"
                }
            ]
        },
        {
            "name": "TouchEventArgs",
            "desc": "Arguments for touchPressed / touchMoved / touchReleased events (multi-touch, Android/iOS)",
            "properties": [
                {
                    "name": "touches",
                    "type": "TouchPoint[8]",
                    "desc": "Array of active touch points (up to MAX_TOUCHES = 8)"
                },
                {
                    "name": "numTouches",
                    "type": "int",
                    "desc": "Number of valid entries in touches"
                },
                {
                    "name": "cancelled",
                    "type": "bool",
                    "desc": "True when touchReleased fires due to system cancellation (incoming call, system gesture)"
                }
            ]
        },
        {
            "name": "ExitRequestEventArgs",
            "desc": "Arguments for the exitRequested event",
            "properties": [
                {
                    "name": "cancel",
                    "type": "bool",
                    "desc": "Set true in a listener to cancel the requested exit"
                }
            ]
        },
        {
            "name": "LogEventArgs",
            "desc": "Arguments delivered for each log message (level, text, and timestamp)",
            "properties": [
                {
                    "name": "level",
                    "type": "LogLevel",
                    "desc": "Severity of the log message"
                },
                {
                    "name": "message",
                    "type": "string",
                    "desc": "The log message text"
                },
                {
                    "name": "timestamp",
                    "type": "string",
                    "desc": "Timestamp string (HH:MM:SS.mmm) generated when the message was logged"
                }
            ]
        },
        {
            "name": "ConsoleEventArgs",
            "desc": "Arguments for the console event (a command line received from stdin)",
            "properties": [
                {
                    "name": "raw",
                    "type": "string",
                    "desc": "Raw input line (e.g. \"tcdebug screenshot /tmp/a.png\")"
                },
                {
                    "name": "args",
                    "type": "vector<string>",
                    "desc": "Input line split on whitespace (e.g. [\"tcdebug\", \"screenshot\", \"/tmp/a.png\"])"
                }
            ]
        },
        {
            "name": "FullscreenShader",
            "desc": "Shader specialization for fullscreen post-processing effects (position + texcoord quad). Set uniforms via setParams, then call draw to render a fullscreen quad.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "setParams",
                    "return": "void",
                    "signatures": [
                        "const T& params"
                    ],
                    "desc": "Set uniform parameter block (template; copies the struct bytes). Call before draw."
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw a fullscreen quad with this shader applied"
                }
            ]
        },
        {
            "name": "Ray",
            "desc": "A ray with an origin and a normalized direction, used for unified hit testing and picking",
            "properties": [
                {
                    "name": "origin",
                    "type": "Vec3",
                    "desc": "Ray origin point"
                },
                {
                    "name": "direction",
                    "type": "Vec3",
                    "desc": "Ray direction (normalized)"
                }
            ]
        },
        {
            "name": "ColorLinear",
            "desc": "A color in linear RGB space (no gamma encoding), 0.0-1.0 float per channel",
            "properties": [
                {
                    "name": "r",
                    "type": "float",
                    "desc": "Red component (linear, 0.0-1.0)"
                },
                {
                    "name": "g",
                    "type": "float",
                    "desc": "Green component (linear, 0.0-1.0)"
                },
                {
                    "name": "b",
                    "type": "float",
                    "desc": "Blue component (linear, 0.0-1.0)"
                },
                {
                    "name": "a",
                    "type": "float",
                    "desc": "Alpha component (0.0-1.0)"
                }
            ]
        },
        {
            "name": "ColorOKLab",
            "desc": "A color in the OKLab perceptual color space (lightness + two opponent axes)",
            "properties": [
                {
                    "name": "L",
                    "type": "float",
                    "desc": "Lightness (0.0-1.0)"
                },
                {
                    "name": "a",
                    "type": "float",
                    "desc": "Green-Red opponent axis (approx -0.4 to 0.4)"
                },
                {
                    "name": "b",
                    "type": "float",
                    "desc": "Blue-Yellow opponent axis (approx -0.4 to 0.4)"
                },
                {
                    "name": "alpha",
                    "type": "float",
                    "desc": "Alpha component (0.0-1.0)"
                }
            ]
        },
        {
            "name": "Json",
            "desc": "Alias for nlohmann::json (using Json = nlohmann::json). Used as the in-memory JSON value type by loadJson, saveJson, parseJson and toJsonString. See the nlohmann/json documentation for its full API."
        },
        {
            "name": "Xml",
            "desc": "XML document wrapper around pugixml. Loads, saves and queries XML; node-level access is via XmlNode returned from root() and child().",
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
                    "desc": "Load an XML document from a file. Relative paths are resolved via getDataPath. Returns true on success."
                },
                {
                    "name": "parse",
                    "return": "bool",
                    "signatures": [
                        "const string& str"
                    ],
                    "desc": "Parse an XML document from a string. Returns true on success."
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "const string& path, const string& indent = \"  \""
                    ],
                    "desc": "Save the document to a file. Relative paths are resolved via getDataPath. indent sets the per-level indentation string. Returns true on success."
                },
                {
                    "name": "toString",
                    "return": "string",
                    "signatures": [
                        "const string& indent = \"  \""
                    ],
                    "desc": "Serialize the document to an XML string. indent sets the per-level indentation string."
                },
                {
                    "name": "root",
                    "return": "XmlNode",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the document's root element node."
                },
                {
                    "name": "addRoot",
                    "return": "XmlNode",
                    "signatures": [
                        "const string& name"
                    ],
                    "desc": "Append a new root element with the given name and return it."
                },
                {
                    "name": "child",
                    "return": "XmlNode",
                    "signatures": [
                        "const string& name"
                    ],
                    "desc": "Find a direct child node of the document by name."
                },
                {
                    "name": "document",
                    "return": "XmlDocument&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Access the underlying pugixml document for advanced operations."
                },
                {
                    "name": "empty",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true if the document has no content."
                },
                {
                    "name": "addDeclaration",
                    "return": "void",
                    "signatures": [
                        "const string& version = \"1.0\", const string& encoding = \"UTF-8\""
                    ],
                    "desc": "Prepend an XML declaration (<?xml ...?>) with the given version and encoding."
                }
            ]
        },
        {
            "name": "XmlDocument",
            "desc": "Alias for pugi::xml_document. The owning XML document type underlying the Xml wrapper; see the pugixml documentation for its full API."
        },
        {
            "name": "XmlNode",
            "desc": "Alias for pugi::xml_node. A single element/node within an XML document, returned by Xml::root() and Xml::child(); see the pugixml documentation for node query and manipulation methods."
        },
        {
            "name": "XmlAttribute",
            "desc": "Alias for pugi::xml_attribute. A name/value attribute on an XmlNode; see the pugixml documentation for its API."
        },
        {
            "name": "XmlParseResult",
            "desc": "Alias for pugi::xml_parse_result. Result of an XML parse operation, carrying success status, error description and offset."
        },
        {
            "name": "Mod",
            "desc": "Attachable behavior base class for Node. Subclass it, override the lifecycle and input hooks, and attach with node->addMod<T>(). Lifecycle: setup() on attach, then each frame earlyUpdate() -> Node::update() -> update() -> draw(), and onDestroy() on removal. Override isExclusive() to allow only one instance per Node, and canAttachTo() to restrict attachment.",
            "methods": [
                {
                    "name": "getOwner",
                    "return": "Node*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the owner Node this Mod is attached to."
                },
                {
                    "name": "removeSelf",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove this Mod from its owner (no need to name its own type). Safe to call from inside the Mod's own update/draw/event handler; destruction is deferred until the current dispatch finishes. (protected)"
                },
                {
                    "name": "setup",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called once when the Mod is attached to the Node. (protected, virtual)"
                },
                {
                    "name": "earlyUpdate",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called every frame BEFORE Node::update(). Use for applying transforms, tweens, physics. (protected, virtual)"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called every frame AFTER Node::update(). Use for reactions to node state changes. (protected, virtual)"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called during the draw phase, after Node::draw(). (protected, virtual)"
                },
                {
                    "name": "onDestroy",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called when the Mod is removed or the Node is destroyed. (protected, virtual)"
                },
                {
                    "name": "onMousePress",
                    "return": "bool",
                    "signatures": [
                        "const MouseEventArgs& e"
                    ],
                    "desc": "Override: mouse press on the hit node. Return true to consume the event (counts as the node consuming it). (protected, virtual)"
                },
                {
                    "name": "onMouseRelease",
                    "return": "bool",
                    "signatures": [
                        "const MouseEventArgs& e"
                    ],
                    "desc": "Override: mouse release on the hit node. Return true to consume. (protected, virtual)"
                },
                {
                    "name": "onMouseMove",
                    "return": "bool",
                    "signatures": [
                        "const MouseMoveEventArgs& e"
                    ],
                    "desc": "Override: mouse move over the hit node. Return true to consume. (protected, virtual)"
                },
                {
                    "name": "onMouseDrag",
                    "return": "bool",
                    "signatures": [
                        "const MouseDragEventArgs& e"
                    ],
                    "desc": "Override: mouse drag on the hit node. Return true to consume. (protected, virtual)"
                },
                {
                    "name": "onMouseScroll",
                    "return": "bool",
                    "signatures": [
                        "const ScrollEventArgs& e"
                    ],
                    "desc": "Override: mouse scroll over the hit node. Return true to consume. (protected, virtual)"
                },
                {
                    "name": "onKeyPress",
                    "return": "bool",
                    "signatures": [
                        "const KeyEventArgs& e"
                    ],
                    "desc": "Override: key press (broadcast to mods on every node). Return true to consume. (protected, virtual)"
                },
                {
                    "name": "onKeyRelease",
                    "return": "bool",
                    "signatures": [
                        "const KeyEventArgs& e"
                    ],
                    "desc": "Override: key release (broadcast to mods on every node). Return true to consume. (protected, virtual)"
                },
                {
                    "name": "onMouseEnter",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: pointer entered the owner node. (protected, virtual)"
                },
                {
                    "name": "onMouseLeave",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: pointer left the owner node. (protected, virtual)"
                },
                {
                    "name": "hitTest",
                    "return": "bool",
                    "signatures": [
                        "const Ray& localRay, float& outDistance"
                    ],
                    "desc": "Override: screen-space pointer picking (NOT physics collision). Define a hit shape in the node's LOCAL space; if the node's own test OR any mod's returns true, the node is the hit. (protected, virtual)"
                },
                {
                    "name": "isExclusive",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override to return true if only one instance of this Mod type may be attached per Node (e.g. LayoutMod). Default false. (protected, virtual)"
                },
                {
                    "name": "canAttachTo",
                    "return": "bool",
                    "signatures": [
                        "Node* node"
                    ],
                    "desc": "Override to restrict which Node types this Mod can attach to. Return false to reject attachment. Default true. (protected, virtual)"
                }
            ]
        },
        {
            "name": "RectNodeButton",
            "desc": "Simple clickable button node (a RectNode subclass). Set normalColor/hoverColor/pressColor and label; it draws a filled rect that changes color on hover/press and a centered label. Events are enabled on construction. Listen on its inherited mousePressed/mouseReleased events for clicks.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "properties": [
                {
                    "name": "normalColor",
                    "type": "Color",
                    "desc": "Fill color when idle (default dark grey)."
                },
                {
                    "name": "hoverColor",
                    "type": "Color",
                    "desc": "Fill color when the pointer is over the button."
                },
                {
                    "name": "pressColor",
                    "type": "Color",
                    "desc": "Fill color while pressed."
                },
                {
                    "name": "label",
                    "type": "string",
                    "desc": "Text drawn centered on the button (skipped if empty)."
                }
            ],
            "methods": [
                {
                    "name": "isPressed",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the button is currently pressed."
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the button: fills the rect with the state-dependent color and draws the centered label. (override)"
                }
            ]
        },
        {
            "name": "Thread",
            "desc": "Base class for background threads (ofThread compatible). Subclass it, override the protected pure-virtual threadedFunction() with a while (isThreadRunning()) { ... } loop, then control it with startThread()/stopThread()/waitForThread(). A protected mutex dataMutex_ is available for sharing data.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "startThread",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Start the background thread (runs threadedFunction). No-op if already running."
                },
                {
                    "name": "stopThread",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Send the stop signal: isThreadRunning() returns false inside threadedFunction so a while-loop can exit. Does not block."
                },
                {
                    "name": "waitForThread",
                    "return": "void",
                    "signatures": [
                        "bool callStopThread = true"
                    ],
                    "desc": "Wait (join) for the thread to finish. If callStopThread is true (default), calls stopThread() first."
                },
                {
                    "name": "isThreadRunning",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the thread is currently running."
                },
                {
                    "name": "getThreadId",
                    "return": "thread::id",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the underlying thread's ID."
                },
                {
                    "name": "threadedFunction",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override this with the work to run on the thread; recommended pattern is while (isThreadRunning()) { ... }. (protected, pure virtual)"
                }
            ],
            "static_methods": [
                {
                    "name": "Thread_sleep",
                    "return": "void",
                    "signatures": [
                        "unsigned long milliseconds"
                    ],
                    "desc": "Pause the current thread for the given number of milliseconds."
                },
                {
                    "name": "Thread_yield",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Yield execution to other threads."
                },
                {
                    "name": "Thread_isCurrentThreadTheMainThread",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the current thread is the main thread. The main thread ID must be recorded first (call getMainThreadId() from the main thread)."
                },
                {
                    "name": "Thread_getMainThreadId",
                    "return": "thread::id",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the main thread ID, recording the current thread's ID on the first call."
                }
            ]
        },
        {
            "name": "ThreadChannel",
            "desc": "Thread-safe FIFO queue for one-way inter-thread communication (ofThreadChannel compatible), template<typename T>. Producer-Consumer pattern: a worker thread send()s values and another thread receive()s them. Use two channels for bidirectional communication.",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "send",
                    "return": "bool",
                    "signatures": [
                        "const T& value",
                        "T&& value"
                    ],
                    "desc": "Send a value onto the queue (copy or move overload). Returns false if the channel is closed (with the move overload the value is invalidated even on failure)."
                },
                {
                    "name": "receive",
                    "return": "bool",
                    "signatures": [
                        "T& value"
                    ],
                    "desc": "Receive a value (blocking): waits until data arrives, writing it into value. Returns false if the channel is closed."
                },
                {
                    "name": "tryReceive",
                    "return": "bool",
                    "signatures": [
                        "T& value",
                        "T& value, int64_t timeoutMs"
                    ],
                    "desc": "Receive a value without blocking, or waiting at most timeoutMs milliseconds (timeout overload). Returns false immediately/after the timeout if no data."
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the channel, waking all waiting threads. After closing, send/receive return false."
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear the queue, discarding all pending values."
                },
                {
                    "name": "empty",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the queue is empty (approximate)."
                },
                {
                    "name": "size",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of queued values (approximate)."
                },
                {
                    "name": "isClosed",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the channel has been closed."
                }
            ]
        },
        {
            "name": "HitResult",
            "desc": "Result of a node hit test (this is Node::HitResult). Returned by Node::findHitNode() / findHitNodeFromScreen(); call hit() to check whether anything was hit.",
            "properties": [
                {
                    "name": "node",
                    "type": "Node::Ptr",
                    "desc": "The hit node (shared_ptr), or null if nothing was hit."
                },
                {
                    "name": "distance",
                    "type": "float",
                    "desc": "Distance from the ray origin to the hit point."
                },
                {
                    "name": "localPoint",
                    "type": "Vec3",
                    "desc": "Hit position in the hit node's local coordinates."
                }
            ],
            "methods": [
                {
                    "name": "hit",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether a node was hit (node is non-null)."
                }
            ]
        },
        {
            "name": "NodeWeakPtr",
            "desc": "Alias for weak_ptr<Node> (using NodeWeakPtr = weak_ptr<Node>). A non-owning weak reference to a Node; lock() it to obtain a NodePtr if the node still exists."
        },
        {
            "name": "Location",
            "desc": "GPS / WiFi location fix returned by getLocation()",
            "properties": [
                {
                    "name": "latitude",
                    "type": "double",
                    "desc": "Latitude in degrees"
                },
                {
                    "name": "longitude",
                    "type": "double",
                    "desc": "Longitude in degrees"
                },
                {
                    "name": "altitude",
                    "type": "double",
                    "desc": "Altitude in meters"
                },
                {
                    "name": "accuracy",
                    "type": "float",
                    "desc": "Horizontal accuracy in meters; -1 if not available yet"
                }
            ]
        },
        {
            "name": "FpsSettings",
            "desc": "FPS configuration returned by getFpsSettings(). Rates use VSYNC (-1) and EVENT_DRIVEN (0) sentinels, or a fixed fps",
            "properties": [
                {
                    "name": "updateFps",
                    "type": "float",
                    "desc": "Target update rate: VSYNC (-1), EVENT_DRIVEN (0), or a fixed fps"
                },
                {
                    "name": "drawFps",
                    "type": "float",
                    "desc": "Target draw rate: VSYNC (-1), EVENT_DRIVEN (0), or a fixed fps"
                },
                {
                    "name": "actualVsyncFps",
                    "type": "float",
                    "desc": "Actual monitor refresh rate (0 if unknown)"
                },
                {
                    "name": "synced",
                    "type": "bool",
                    "desc": "true when update and draw run in sync (1:1)"
                }
            ]
        },
        {
            "name": "WindowSettings",
            "desc": "Window configuration passed to the app at startup (size, title, DPI, MSAA, fullscreen, decoration, VSync). Setters chain",
            "properties": [
                {
                    "name": "width",
                    "type": "int",
                    "desc": "Window width (default 1280)"
                },
                {
                    "name": "height",
                    "type": "int",
                    "desc": "Window height (default 720)"
                },
                {
                    "name": "title",
                    "type": "string",
                    "desc": "Window title (default \"TrussC App\")"
                },
                {
                    "name": "highDpi",
                    "type": "bool",
                    "desc": "High DPI support for sharp rendering on Retina (default true)"
                },
                {
                    "name": "pixelPerfect",
                    "type": "bool",
                    "desc": "true: coords match framebuffer size; false: coords use logical size (default false)"
                },
                {
                    "name": "sampleCount",
                    "type": "int",
                    "desc": "MSAA sample count (default 4)"
                },
                {
                    "name": "fullscreen",
                    "type": "bool",
                    "desc": "Start in fullscreen (default false)"
                },
                {
                    "name": "decorated",
                    "type": "bool",
                    "desc": "false: borderless/chromeless window with no title bar (default true)"
                },
                {
                    "name": "clipboardSize",
                    "type": "int",
                    "desc": "Clipboard buffer size in bytes (default 65536)"
                },
                {
                    "name": "swapInterval",
                    "type": "int",
                    "desc": "VSync present interval: 1 = on (default), 0 = off, N = every Nth refresh"
                }
            ],
            "methods": [
                {
                    "name": "setSize",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int w, int h"
                    ],
                    "desc": "Set window size (chainable)"
                },
                {
                    "name": "setTitle",
                    "return": "WindowSettings&",
                    "signatures": [
                        "const string& t"
                    ],
                    "desc": "Set window title (chainable)"
                },
                {
                    "name": "setHighDpi",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "Enable/disable high DPI support (chainable)"
                },
                {
                    "name": "setPixelPerfect",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "Set pixel-perfect mode: true = framebuffer-size coords, false = logical-size coords (chainable)"
                },
                {
                    "name": "setSampleCount",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int count"
                    ],
                    "desc": "Set MSAA sample count (chainable)"
                },
                {
                    "name": "setFullscreen",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "Enable/disable fullscreen at startup (chainable)"
                },
                {
                    "name": "setDecorated",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "false = borderless/chromeless window that can still take focus and be closed programmatically (chainable)"
                },
                {
                    "name": "setClipboardSize",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int size"
                    ],
                    "desc": "Set clipboard buffer size in bytes (chainable)"
                },
                {
                    "name": "setSwapInterval",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int interval"
                    ],
                    "desc": "Set VSync present interval: 1 = on, 0 = off, N = every Nth refresh (chainable)"
                }
            ]
        },
        {
            "name": "HeadlessSettings",
            "desc": "Settings for runHeadlessApp() (no window / graphics). Currently just the target update rate",
            "properties": [
                {
                    "name": "targetFps",
                    "type": "float",
                    "desc": "Target update rate (default 60)"
                }
            ],
            "methods": [
                {
                    "name": "setFps",
                    "return": "HeadlessSettings&",
                    "signatures": [
                        "float fps"
                    ],
                    "desc": "Set the target update rate (chainable)"
                }
            ]
        },
        {
            "name": "FileDialogResult",
            "desc": "Result of a load/save file dialog",
            "properties": [
                {
                    "name": "filePath",
                    "type": "string",
                    "desc": "Full path to the chosen file"
                },
                {
                    "name": "fileName",
                    "type": "string",
                    "desc": "Filename only (no directory)"
                },
                {
                    "name": "success",
                    "type": "bool",
                    "desc": "true if a file was chosen, false if the dialog was cancelled"
                }
            ]
        },
        {
            "name": "Vec4",
            "desc": "4D vector (x, y, z, w). Used for homogeneous coordinates and RGBA-style data",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y, float z, float w",
                    "float v",
                    "const Vec3& v, float w = 1.0f",
                    "const Vec2& v, float z = 0.0f, float w = 1.0f"
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
                },
                {
                    "name": "w",
                    "type": "float",
                    "desc": "W component"
                }
            ],
            "methods": [
                {
                    "name": "set",
                    "return": "Vec4&",
                    "signatures": [
                        "float x, float y, float z, float w",
                        "const Vec4& v"
                    ],
                    "desc": "Set all components (chainable)"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the vector's magnitude"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the squared magnitude (cheaper than length())"
                },
                {
                    "name": "normalized",
                    "return": "Vec4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return a unit-length copy of this vector"
                },
                {
                    "name": "normalize",
                    "return": "Vec4&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize this vector in place (chainable)"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "const Vec4& v"
                    ],
                    "desc": "Dot product with another vector"
                },
                {
                    "name": "lerp",
                    "return": "Vec4",
                    "signatures": [
                        "const Vec4& v, float t"
                    ],
                    "desc": "Linearly interpolate toward v by t (0..1)"
                },
                {
                    "name": "xy",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the (x, y) components as a Vec2"
                },
                {
                    "name": "xyz",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the (x, y, z) components as a Vec3"
                }
            ]
        },
        {
            "name": "Mat3",
            "desc": "3x3 matrix for 2D affine / homography transforms (row-major). Includes static factories and a homography solver",
            "constructor": {
                "signatures": [
                    "",
                    "float m00, float m01, float m02, float m10, float m11, float m12, float m20, float m21, float m22"
                ]
            },
            "methods": [
                {
                    "name": "at",
                    "return": "float&",
                    "signatures": [
                        "int row, int col"
                    ],
                    "desc": "Access the element at (row, col)"
                },
                {
                    "name": "transposed",
                    "return": "Mat3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the transpose of this matrix"
                },
                {
                    "name": "determinant",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Compute the determinant"
                },
                {
                    "name": "inverted",
                    "return": "Mat3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the inverse matrix (identity if singular)"
                }
            ],
            "static_methods": [
                {
                    "name": "Mat3_identity",
                    "return": "Mat3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the identity matrix"
                },
                {
                    "name": "Mat3_translate",
                    "return": "Mat3",
                    "signatures": [
                        "float tx, float ty",
                        "const Vec2& t"
                    ],
                    "desc": "Build a 2D translation matrix"
                },
                {
                    "name": "Mat3_rotate",
                    "return": "Mat3",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Build a 2D rotation matrix (radians)"
                },
                {
                    "name": "Mat3_scale",
                    "return": "Mat3",
                    "signatures": [
                        "float sx, float sy",
                        "float s",
                        "const Vec2& s"
                    ],
                    "desc": "Build a 2D scale matrix"
                },
                {
                    "name": "Mat3_getHomography",
                    "return": "Mat3",
                    "signatures": [
                        "const Vec2 src[4], const Vec2 dst[4]"
                    ],
                    "desc": "Compute the homography matrix mapping 4 source points to 4 destination points (solves H * src = dst)"
                }
            ]
        },
        {
            "name": "VideoGrabber",
            "desc": "Webcam capture source. Call setup() once, then update() every frame; getTexture() (via HasTexture) gives the live frame. Move-only. Camera permission is requested automatically on macOS",
            "constructor": {
                "signatures": [
                    ""
                ]
            },
            "methods": [
                {
                    "name": "listDevices",
                    "return": "vector<VideoDeviceInfo>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the list of available camera devices"
                },
                {
                    "name": "setDeviceID",
                    "return": "void",
                    "signatures": [
                        "int deviceId"
                    ],
                    "desc": "Select which camera to use; call before setup()"
                },
                {
                    "name": "getDeviceID",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the selected device ID"
                },
                {
                    "name": "setDesiredFrameRate",
                    "return": "void",
                    "signatures": [
                        "int fps"
                    ],
                    "desc": "Request a capture frame rate; call before setup()"
                },
                {
                    "name": "getDesiredFrameRate",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the requested frame rate (-1 if unspecified)"
                },
                {
                    "name": "setVerbose",
                    "return": "void",
                    "signatures": [
                        "bool verbose"
                    ],
                    "desc": "Enable or disable verbose logging"
                },
                {
                    "name": "isVerbose",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return whether verbose logging is enabled"
                },
                {
                    "name": "setup",
                    "return": "bool",
                    "signatures": [
                        "int width = 640, int height = 480"
                    ],
                    "desc": "Start the camera at the requested size. Returns false if permission is not yet granted (it is requested asynchronously); keep calling update() and capture begins once granted"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop the camera and release its resources"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Poll for a new frame and upload it to the texture. Call every frame; also completes a setup() that was waiting on permission"
                },
                {
                    "name": "isFrameNew",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true if a new frame arrived during the most recent update()"
                },
                {
                    "name": "isInitialized",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true once the camera is set up and capturing"
                },
                {
                    "name": "isPendingPermission",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true while waiting for camera permission to be granted"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the captured frame width in pixels"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the captured frame height in pixels"
                },
                {
                    "name": "getDeviceName",
                    "return": "const string &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the name of the active capture device"
                },
                {
                    "name": "getPixels",
                    "return": "unsigned char *",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return a pointer to the current RGBA pixel buffer"
                },
                {
                    "name": "copyToImage",
                    "return": "void",
                    "signatures": [
                        "Image &image"
                    ],
                    "desc": "Copy the current frame into an Image (allocating/updating it as needed)"
                },
                {
                    "name": "getTexture",
                    "return": "Texture &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the texture holding the live camera frame (HasTexture override)"
                }
            ],
            "static_methods": [
                {
                    "name": "VideoGrabber_checkCameraPermission",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return whether camera access has been granted (macOS 10.14+)"
                },
                {
                    "name": "VideoGrabber_requestCameraPermission",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Request camera access asynchronously (macOS)"
                }
            ]
        },
        {
            "name": "Tween",
            "desc": "Animates a value of type T with easing. Templated over any lerp-able type (float, Vec2, Vec3, Vec4, Color, etc.). Auto-updates each frame via events().update once start() is called; chainable setters configure it",
            "constructor": {
                "signatures": [
                    "",
                    "T start, T end, float duration, EaseType type = EaseType::Cubic, EaseMode mode = EaseMode::InOut"
                ]
            },
            "methods": [
                {
                    "name": "from",
                    "return": "Tween &",
                    "signatures": [
                        "T value"
                    ],
                    "desc": "Set the start value (chainable)"
                },
                {
                    "name": "to",
                    "return": "Tween &",
                    "signatures": [
                        "T value"
                    ],
                    "desc": "Set the end value (chainable)"
                },
                {
                    "name": "duration",
                    "return": "Tween &",
                    "signatures": [
                        "float seconds"
                    ],
                    "desc": "Set the animation duration in seconds (chainable)"
                },
                {
                    "name": "ease",
                    "return": "Tween &",
                    "signatures": [
                        "EaseType type, EaseMode mode = EaseMode::InOut",
                        "EaseType inType, EaseType outType"
                    ],
                    "desc": "Set the easing curve; the two-type overload uses an asymmetric ease (one curve in, another out)"
                },
                {
                    "name": "loop",
                    "return": "Tween &",
                    "signatures": [
                        "int count = -1"
                    ],
                    "desc": "Repeat the animation: -1 = infinite, 0 = no loop, N = repeat N times (chainable)"
                },
                {
                    "name": "yoyo",
                    "return": "Tween &",
                    "signatures": [
                        "bool enable = true"
                    ],
                    "desc": "Reverse direction on each loop iteration (chainable)"
                },
                {
                    "name": "delay",
                    "return": "Tween &",
                    "signatures": [
                        "float seconds"
                    ],
                    "desc": "Delay before the animation starts, in seconds (chainable)"
                },
                {
                    "name": "start",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Start (or restart) the animation and begin auto-updating each frame"
                },
                {
                    "name": "pause",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Pause the animation, keeping its current progress"
                },
                {
                    "name": "resume",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Resume a paused animation"
                },
                {
                    "name": "reset",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop the animation and reset progress to the start"
                },
                {
                    "name": "finish",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Jump immediately to the end value and fire the complete event"
                },
                {
                    "name": "getValue",
                    "return": "T",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the current eased value"
                },
                {
                    "name": "getProgress",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return normalized progress through the current iteration (0.0-1.0)"
                },
                {
                    "name": "getElapsed",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return elapsed time in seconds within the current iteration"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the configured duration in seconds"
                },
                {
                    "name": "isPlaying",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true while the animation is actively playing"
                },
                {
                    "name": "isComplete",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true once the animation (all loops) has finished"
                },
                {
                    "name": "getStart",
                    "return": "T",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the start value"
                },
                {
                    "name": "getEnd",
                    "return": "T",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the end value"
                },
                {
                    "name": "getLoopCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return how many loop iterations have completed so far"
                }
            ]
        },
        {
            "name": "VideoDeviceInfo",
            "desc": "Information about an available camera device, returned by VideoGrabber::listDevices()",
            "properties": [
                {
                    "name": "deviceId",
                    "type": "int",
                    "desc": "Numeric device ID (pass to setDeviceID); -1 if unknown"
                },
                {
                    "name": "deviceName",
                    "type": "string",
                    "desc": "Human-readable device name"
                },
                {
                    "name": "uniqueId",
                    "type": "string",
                    "desc": "Stable unique identifier for the device"
                }
            ]
        },
        {
            "name": "VideoRecordSettings",
            "desc": "Encoder settings passed to VideoWriter::open(), ScreenRecorder::start(), and startRecording()",
            "properties": [
                {
                    "name": "codec",
                    "type": "VideoCodec",
                    "desc": "Output codec (default H264)"
                },
                {
                    "name": "fps",
                    "type": "float",
                    "desc": "Capture/output frame rate. For ScreenRecorder this is the capture ceiling; for VideoWriter it is the exact output rate (default 60)"
                },
                {
                    "name": "bitrate",
                    "type": "int",
                    "desc": "Target bits/sec for H.264/HEVC; 0 = auto. Ignored by ProRes"
                },
                {
                    "name": "keyframeInterval",
                    "type": "int",
                    "desc": "Frames between keyframes; 0 = encoder default"
                }
            ]
        },
        {
            "name": "Glyph",
            "desc": "A bitmap glyph to register via registerGlyph(): a codepoint plus packed 1-bit pixel rows. The data pointer must outlive every drawBitmapString call",
            "properties": [
                {
                    "name": "codepoint",
                    "type": "uint32_t",
                    "desc": "Unicode codepoint this glyph renders"
                },
                {
                    "name": "data",
                    "type": "const uint8_t *",
                    "desc": "Packed bitmap rows (MSB first); must outlive all draw calls"
                },
                {
                    "name": "width",
                    "type": "Width",
                    "desc": "Glyph width: Halfwidth (8x13) or Fullwidth (16x13)"
                }
            ]
        },
        {
            "name": "PlacedGlyph",
            "desc": "One laid-out glyph emitted by Font::forEachGlyph (nested as Font::PlacedGlyph). Carries the final codepoint and pen position so visitors can render quads, build vector paths, or hit-test independently of the layout pass",
            "properties": [
                {
                    "name": "codepoint",
                    "type": "uint32_t",
                    "desc": "Final codepoint after vertical-form mapping"
                },
                {
                    "name": "drawX",
                    "type": "float",
                    "desc": "Pen X position; the glyph's own xoffset is added on top"
                },
                {
                    "name": "baselineY",
                    "type": "float",
                    "desc": "Baseline Y position; the glyph's own yoffset is added on top"
                },
                {
                    "name": "rotationCw",
                    "type": "float",
                    "desc": "Clockwise rotation in radians: 0 (upright) or TAU/4 (90 degrees, vertical text)"
                },
                {
                    "name": "pivotX",
                    "type": "float",
                    "desc": "Rotation center X (used only when rotationCw is non-zero)"
                },
                {
                    "name": "pivotY",
                    "type": "float",
                    "desc": "Rotation center Y (used only when rotationCw is non-zero)"
                },
                {
                    "name": "scaleX",
                    "type": "float",
                    "desc": "Horizontal scale (1.0 normally, less than 1 for TCY combine)"
                }
            ]
        },
        {
            "name": "GlyphVisitor",
            "desc": "Alias for function<void(const Font::PlacedGlyph&)> (nested as Font::GlyphVisitor). The per-glyph callback type accepted by Font::forEachGlyph"
        },
        {
            "name": "StrokeMesh",
            "desc": "Variable-width polyline stroke geometry with caps, joins and miter limit; build it from points or a Path, then update() and draw()",
            "constructor": {
                "signatures": [
                    "",
                    "const Path& polyline"
                ]
            },
            "methods": [
                {
                    "name": "setWidth",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "float w"
                    ],
                    "desc": "Set the stroke width"
                },
                {
                    "name": "setColor",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "const Color& c"
                    ],
                    "desc": "Set the stroke color"
                },
                {
                    "name": "setCapType",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "StrokeMesh::CapType type"
                    ],
                    "desc": "Set the line cap shape (StrokeMesh::CapType: Butt, Round, Square)"
                },
                {
                    "name": "setJoinType",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "StrokeMesh::JoinType type"
                    ],
                    "desc": "Set the line join shape (StrokeMesh::JoinType: Miter, Round, Bevel)"
                },
                {
                    "name": "setMiterLimit",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "float limit"
                    ],
                    "desc": "Set the miter limit for sharp corners"
                },
                {
                    "name": "addVertex",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "float x, float y, float z = 0",
                        "const Vec2& v",
                        "const Vec3& v"
                    ],
                    "desc": "Append a vertex to the stroke path"
                },
                {
                    "name": "addVertexWithWidth",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "float x, float y, float width",
                        "const Vec3& p, float width"
                    ],
                    "desc": "Append a vertex with a per-vertex width"
                },
                {
                    "name": "setWidths",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "const vector<float>& w"
                    ],
                    "desc": "Set per-vertex widths from a list"
                },
                {
                    "name": "setShape",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "const Path& polyline"
                    ],
                    "desc": "Set the stroke shape from a Path"
                },
                {
                    "name": "setClosed",
                    "return": "StrokeMesh&",
                    "signatures": [
                        "bool closed"
                    ],
                    "desc": "Set whether the stroke forms a closed loop"
                },
                {
                    "name": "clear",
                    "return": "StrokeMesh&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove all vertices"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Rebuild the internal triangle mesh (call before draw after edits)"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the stroke mesh"
                }
            ]
        }
    ]
};
            
            // Export for different environments
            if (typeof module !== 'undefined' && module.exports) {
                module.exports = TrussSketchAPI;
            }
            
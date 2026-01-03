// tcScript API Definition
// This is the single source of truth for all tcScript functions.
// Used by: autocomplete, reference page, REFERENCE.md generation
//
// AUTO-GENERATED from api-definition.yaml
// Do not edit directly - edit api-definition.yaml instead

const tcScriptAPI = {
    "categories": [
        {
            "name": "Lifecycle",
            "functions": [
                {
                    "name": "setup",
                    "params": "",
                    "desc": "Called once at start",
                    "snippet": "setup() {\n\t$0\n}"
                },
                {
                    "name": "update",
                    "params": "",
                    "desc": "Called every frame before draw",
                    "snippet": "update() {\n\t$0\n}"
                },
                {
                    "name": "draw",
                    "params": "",
                    "desc": "Called every frame after update",
                    "snippet": "draw() {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Events",
            "functions": [
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "desc": "Mouse button pressed",
                    "snippet": "mousePressed(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "desc": "Mouse button released",
                    "snippet": "mouseReleased(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "desc": "Mouse moved",
                    "snippet": "mouseMoved(x, y) {\n\t$0\n}"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "desc": "Mouse dragged",
                    "snippet": "mouseDragged(x, y, button) {\n\t$0\n}"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "desc": "Key pressed",
                    "snippet": "keyPressed(key) {\n\t$0\n}"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "desc": "Key released",
                    "snippet": "keyReleased(key) {\n\t$0\n}"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "desc": "Window resized",
                    "snippet": "windowResized(width, height) {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Graphics - Color",
            "functions": [
                {
                    "name": "clear",
                    "params": "gray",
                    "desc": "Clear screen",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "r, g, b",
                    "desc": "Clear screen",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "setColor",
                    "params": "gray",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b",
                    "desc": "Set color from HSB (H: 0-TAU)",
                    "snippet": "setColorHSB(${1:0.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H",
                    "desc": "Set color from OKLCH",
                    "snippet": "setColorOKLCH(${1:0.7}, ${2:0.15}, ${3:0.0})"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a, b",
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
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "desc": "Draw line",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "desc": "Draw text",
                    "snippet": "drawBitmapString(${1:\"text\"}, ${2:x}, ${3:y})"
                }
            ]
        },
        {
            "name": "Graphics - Style",
            "functions": [
                {
                    "name": "fill",
                    "params": "",
                    "desc": "Enable fill",
                    "snippet": "fill()"
                },
                {
                    "name": "noFill",
                    "params": "",
                    "desc": "Disable fill",
                    "snippet": "noFill()"
                },
                {
                    "name": "stroke",
                    "params": "",
                    "desc": "Enable stroke",
                    "snippet": "stroke()"
                },
                {
                    "name": "noStroke",
                    "params": "",
                    "desc": "Disable stroke",
                    "snippet": "noStroke()"
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "desc": "Set stroke width",
                    "snippet": "setStrokeWeight(${1:1.0})"
                }
            ]
        },
        {
            "name": "Transform",
            "functions": [
                {
                    "name": "translate",
                    "params": "x, y",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "desc": "Rotate by radians",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "desc": "Save transform state",
                    "snippet": "pushMatrix()"
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "desc": "Restore transform state",
                    "snippet": "popMatrix()"
                }
            ]
        },
        {
            "name": "Window & Input",
            "functions": [
                {
                    "name": "getWindowWidth",
                    "params": "",
                    "desc": "Get canvas width",
                    "snippet": "getWindowWidth()"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "desc": "Get canvas height",
                    "snippet": "getWindowHeight()"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "desc": "Get mouse X position",
                    "snippet": "getMouseX()"
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "desc": "Get mouse Y position",
                    "snippet": "getMouseY()"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "desc": "Is mouse button pressed",
                    "snippet": "isMousePressed()"
                }
            ]
        },
        {
            "name": "Time - Frame",
            "functions": [
                {
                    "name": "getDeltaTime",
                    "params": "",
                    "desc": "Seconds since last frame",
                    "snippet": "getDeltaTime()"
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "desc": "Current FPS",
                    "snippet": "getFrameRate()"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "desc": "Total frames rendered",
                    "snippet": "getFrameCount()"
                }
            ]
        },
        {
            "name": "Time - Elapsed",
            "functions": [
                {
                    "name": "getElapsedTimef",
                    "params": "",
                    "desc": "Elapsed seconds (float)",
                    "snippet": "getElapsedTimef()"
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "desc": "Elapsed milliseconds (int64)",
                    "snippet": "getElapsedTimeMillis()"
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "desc": "Elapsed microseconds (int64)",
                    "snippet": "getElapsedTimeMicros()"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
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
                    "desc": "Unix time in milliseconds",
                    "snippet": "getSystemTimeMillis()"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "desc": "Unix time in microseconds",
                    "snippet": "getSystemTimeMicros()"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()"
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
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
                    "desc": "Current seconds (0-59)",
                    "snippet": "getSeconds()"
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "desc": "Current minutes (0-59)",
                    "snippet": "getMinutes()"
                },
                {
                    "name": "getHours",
                    "params": "",
                    "desc": "Current hours (0-23)",
                    "snippet": "getHours()"
                },
                {
                    "name": "getYear",
                    "params": "",
                    "desc": "Current year",
                    "snippet": "getYear()"
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "desc": "Current month (1-12)",
                    "snippet": "getMonth()"
                },
                {
                    "name": "getDay",
                    "params": "",
                    "desc": "Current day (1-31)",
                    "snippet": "getDay()"
                },
                {
                    "name": "getWeekday",
                    "params": "",
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
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "max",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "desc": "Random number",
                    "snippet": "random()"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})"
                }
            ]
        },
        {
            "name": "Math - Interpolation",
            "functions": [
                {
                    "name": "lerp",
                    "params": "a, b, t",
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:a}, ${2:b}, ${3:t})"
                },
                {
                    "name": "clamp",
                    "params": "v, min, max",
                    "desc": "Clamp value to range",
                    "snippet": "clamp(${1:v}, ${2:min}, ${3:max})"
                },
                {
                    "name": "map",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "desc": "Map value between ranges",
                    "snippet": "map(${1:v}, ${2:inMin}, ${3:inMax}, ${4:outMin}, ${5:outMax})"
                }
            ]
        },
        {
            "name": "Math - Trigonometry",
            "functions": [
                {
                    "name": "sin",
                    "params": "x",
                    "desc": "Sine",
                    "snippet": "sin(${1:x})"
                },
                {
                    "name": "cos",
                    "params": "x",
                    "desc": "Cosine",
                    "snippet": "cos(${1:x})"
                },
                {
                    "name": "tan",
                    "params": "x",
                    "desc": "Tangent",
                    "snippet": "tan(${1:x})"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "desc": "Arc sine",
                    "snippet": "asin(${1:x})"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "desc": "Arc cosine",
                    "snippet": "acos(${1:x})"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "desc": "Arc tangent",
                    "snippet": "atan(${1:x})"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "desc": "Arc tangent of y/x",
                    "snippet": "atan2(${1:y}, ${2:x})"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "desc": "Degrees to radians",
                    "snippet": "deg2rad(${1:degrees})"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
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
                    "desc": "Absolute value",
                    "snippet": "abs(${1:x})"
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "desc": "Square root",
                    "snippet": "sqrt(${1:x})"
                },
                {
                    "name": "sq",
                    "params": "x",
                    "desc": "Square (x*x)",
                    "snippet": "sq(${1:x})"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "desc": "Power (x^y)",
                    "snippet": "pow(${1:x}, ${2:y})"
                },
                {
                    "name": "log",
                    "params": "x",
                    "desc": "Natural logarithm",
                    "snippet": "log(${1:x})"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "desc": "Exponential (e^x)",
                    "snippet": "exp(${1:x})"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "desc": "Minimum",
                    "snippet": "min(${1:a}, ${2:b})"
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "desc": "Maximum",
                    "snippet": "max(${1:a}, ${2:b})"
                },
                {
                    "name": "floor",
                    "params": "x",
                    "desc": "Round down",
                    "snippet": "floor(${1:x})"
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "desc": "Round up",
                    "snippet": "ceil(${1:x})"
                },
                {
                    "name": "round",
                    "params": "x",
                    "desc": "Round to nearest",
                    "snippet": "round(${1:x})"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "desc": "Floating-point modulo",
                    "snippet": "fmod(${1:x}, ${2:y})"
                },
                {
                    "name": "sign",
                    "params": "x",
                    "desc": "Sign (-1, 0, 1)",
                    "snippet": "sign(${1:x})"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "desc": "Fractional part",
                    "snippet": "fract(${1:x})"
                }
            ]
        },
        {
            "name": "Math - Geometry",
            "functions": [
                {
                    "name": "dist",
                    "params": "x1, y1, x2, y2",
                    "desc": "Distance between points",
                    "snippet": "dist(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "desc": "Squared distance",
                    "snippet": "distSquared(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                }
            ]
        },
        {
            "name": "Utility",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "message",
                    "desc": "Print to console",
                    "snippet": "logNotice(${1:\"message\"})"
                },
                {
                    "name": "to_string",
                    "params": "value",
                    "desc": "Convert to string",
                    "snippet": "to_string(${1:value})"
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
        }
    ],
    "keywords": [
        "def",
        "var",
        "global",
        "if",
        "else",
        "for",
        "while",
        "return",
        "true",
        "false"
    ]
};

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tcScriptAPI;
}

// TrussC API Definition
// Complete C++ API reference (all functions, types, constants)
//
// AUTO-GENERATED from api-definition.yaml
// Do not edit directly - edit api-definition.yaml instead

const TrussCAPI = {
    "version": "v0.6.1",
    "lang": "all",
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
                    "snippet": "void setup() {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "開始時に一度呼ばれる",
                    "desc_ko": "시작 시 한 번 호출됨"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame before draw",
                    "snippet": "void update() {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "毎フレーム、drawの前に呼ばれる",
                    "desc_ko": "매 프레임 draw 이전에 호출됨"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame after update",
                    "snippet": "void draw() {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "毎フレーム、updateの後に呼ばれる",
                    "desc_ko": "매 프레임 update 이후에 호출됨"
                },
                {
                    "name": "cleanup",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called once before exit (optional user callback for cleanup)",
                    "snippet": "void cleanup() {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "終了前に一度呼ばれる（オプショナルなクリーンアップコールバック）",
                    "desc_ko": "종료 직전 한 번 호출됨 (선택적 정리용 콜백)"
                },
                {
                    "name": "runApp",
                    "params": "settings",
                    "params_typed": "const WindowSettings& settings = WindowSettings()",
                    "return_type": "int",
                    "desc": "Start the application main loop. Called from main()",
                    "snippet": "runApp(${1:settings})",
                    "keywords": [],
                    "desc_ja": "アプリケーションのメインループを開始。main()から呼ぶ",
                    "desc_ko": "어플리케이션 메인 루프 시작. main()에서 호출"
                }
            ],
            "name_ja": "ライフサイクル",
            "name_ko": "라이프사이클"
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
                    "snippet": "void mousePressed(float x, float y, int button) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "マウスボタンが押された",
                    "desc_ko": "마우스 버튼이 눌렸을 때",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button released",
                    "snippet": "void mouseReleased(float x, float y, int button) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "マウスボタンが離された",
                    "desc_ko": "마우스 버튼이 떼졌을 때",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Mouse moved",
                    "snippet": "void mouseMoved(float x, float y) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "マウスが移動した",
                    "desc_ko": "마우스가 움직였을 때",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse dragged",
                    "snippet": "void mouseDragged(float x, float y, int button) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "マウスがドラッグされた",
                    "desc_ko": "마우스가 드래그되었을 때",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key pressed. Use KEY_* constants for special keys, or uppercase char literals for printable keys (e.g. key == 'A', key == '1')",
                    "snippet": "void keyPressed(int key) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "キーが押された。特殊キーはKEY_*定数、印字可能キーは大文字リテラル（例: key == 'A', key == '1'）で比較",
                    "desc_ko": "키가 눌렸을 때. 특수 키는 KEY_* 상수, 출력 가능한 키는 대문자 리터럴(예: key == 'A', key == '1')로 비교",
                    "examples": [
                        {
                            "name": "keyboardExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key released",
                    "snippet": "void keyReleased(int key) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "キーが離された",
                    "desc_ko": "키가 떼졌을 때",
                    "examples": [
                        {
                            "name": "keyboardExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Window resized",
                    "snippet": "void windowResized(int width, int height) {\n\t$0\n}",
                    "keywords": [],
                    "desc_ja": "ウィンドウがリサイズされた",
                    "desc_ko": "윈도우 크기가 변경되었을 때"
                }
            ],
            "name_ja": "イベント",
            "name_ko": "이벤트"
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
                    "snippet": "clear(${1:0.0})",
                    "keywords": [],
                    "desc_ja": "画面をクリア。引数なし = 透明黒 (0,0,0,0)",
                    "desc_ko": "화면을 지움. 인자 없음 = 투명한 검정 (0,0,0,0)"
                },
                {
                    "name": "clear",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "snippet": "clear(${1:0.0})",
                    "keywords": [],
                    "desc_ja": "画面をクリア。引数なし = 透明黒 (0,0,0,0)",
                    "desc_ko": "화면을 지움. 인자 없음 = 투명한 검정 (0,0,0,0)"
                },
                {
                    "name": "clear",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "snippet": "clear(${1:0.0})",
                    "keywords": [],
                    "desc_ja": "画面をクリア。引数なし = 透明黒 (0,0,0,0)",
                    "desc_ko": "화면을 지움. 인자 없음 = 투명한 검정 (0,0,0,0)"
                },
                {
                    "name": "setColor",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})",
                    "keywords": [],
                    "desc_ja": "描画色を設定 (0.0-1.0)",
                    "desc_ko": "그리기 색상을 설정 (0.0-1.0)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setColor",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})",
                    "keywords": [],
                    "desc_ja": "描画色を設定 (0.0-1.0)",
                    "desc_ko": "그리기 색상을 설정 (0.0-1.0)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})",
                    "keywords": [],
                    "desc_ja": "描画色を設定 (0.0-1.0)",
                    "desc_ko": "그리기 색상을 설정 (0.0-1.0)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "void",
                    "desc": "Set color from HSB (H: 0-1)",
                    "snippet": "setColorHSB(${1:0.0}, ${2:1.0}, ${3:1.0})",
                    "keywords": [
                        "hsb",
                        "hsv",
                        "hue",
                        "saturation",
                        "brightness",
                        "color"
                    ],
                    "desc_ja": "HSBで色を設定 (H: 0-1)",
                    "desc_ko": "HSB로 색상을 설정 (H: 0-1)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "polylinesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "void",
                    "desc": "Set color from OKLCH",
                    "snippet": "setColorOKLCH(${1:0.7}, ${2:0.15}, ${3:0.0})",
                    "keywords": [],
                    "desc_ja": "OKLCHで色を設定",
                    "desc_ko": "OKLCH로 색상을 설정"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "void",
                    "desc": "Set color from OKLab",
                    "snippet": "setColorOKLab(${1:0.7}, ${2:0.0}, ${3:0.0})",
                    "keywords": [],
                    "desc_ja": "OKLabで色を設定",
                    "desc_ko": "OKLab으로 색상을 설정"
                },
                {
                    "name": "srgbToLinear",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Convert a single sRGB channel value to linear RGB",
                    "snippet": "srgbToLinear(${1:x})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "linearToSrgb",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Convert a single linear RGB channel value to sRGB",
                    "snippet": "linearToSrgb(${1:x})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "グラフィックス - 色",
            "name_ko": "그래픽 - 색상"
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
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形を描画",
                    "desc_ko": "사각형 그리기",
                    "related": [
                        "drawRectRounded",
                        "drawRectSquircle"
                    ],
                    "details": "Draws an axis-aligned rectangle from the top-left corner.\nRespects the current fill / noFill mode and draw color.\nWith a Vec3 position, z is used for placement in 3D mode.\nFor rounded corners, see drawRectRounded and drawRectSquircle.\n",
                    "details_ja": "左上を原点に軸並行の矩形を描画する。\n現在の fill / noFill モードと描画色に従う。\nVec3 で位置を渡すと 3D モードで z が使われる。\n角を丸くしたい場合は drawRectRounded, drawRectSquircle を参照。\n",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawRect",
                    "params": "pos, w, h",
                    "params_typed": "Vec3 pos, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形を描画",
                    "desc_ko": "사각형 그리기",
                    "related": [
                        "drawRectRounded",
                        "drawRectSquircle"
                    ],
                    "details": "Draws an axis-aligned rectangle from the top-left corner.\nRespects the current fill / noFill mode and draw color.\nWith a Vec3 position, z is used for placement in 3D mode.\nFor rounded corners, see drawRectRounded and drawRectSquircle.\n",
                    "details_ja": "左上を原点に軸並行の矩形を描画する。\n現在の fill / noFill モードと描画色に従う。\nVec3 で位置を渡すと 3D モードで z が使われる。\n角を丸くしたい場合は drawRectRounded, drawRectSquircle を参照。\n",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawRect",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, Vec2 size",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形を描画",
                    "desc_ko": "사각형 그리기",
                    "sigDesc": "Size given as a Vec2 (width, height).",
                    "sigDesc_ja": "サイズを Vec2（幅・高さ）で指定。",
                    "related": [
                        "drawRectRounded",
                        "drawRectSquircle"
                    ],
                    "details": "Draws an axis-aligned rectangle from the top-left corner.\nRespects the current fill / noFill mode and draw color.\nWith a Vec3 position, z is used for placement in 3D mode.\nFor rounded corners, see drawRectRounded and drawRectSquircle.\n",
                    "details_ja": "左上を原点に軸並行の矩形を描画する。\n現在の fill / noFill モードと描画色に従う。\nVec3 で位置を渡すと 3D モードで z が使われる。\n角を丸くしたい場合は drawRectRounded, drawRectSquircle を参照。\n",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawRectRounded",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)",
                    "snippet": "drawRectRounded(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})",
                    "keywords": [],
                    "desc_ja": "角丸矩形を描画（円弧コーナー）",
                    "desc_ko": "둥근 모서리 사각형 그리기 (원호 모서리)",
                    "examples": [
                        {
                            "name": "roundedRectExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawRectRounded",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)",
                    "snippet": "drawRectRounded(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})",
                    "keywords": [],
                    "desc_ja": "角丸矩形を描画（円弧コーナー）",
                    "desc_ko": "둥근 모서리 사각형 그리기 (원호 모서리)",
                    "examples": [
                        {
                            "name": "roundedRectExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawRectSquircle",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)",
                    "snippet": "drawRectSquircle(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})",
                    "keywords": [
                        "squircle",
                        "rounded",
                        "ios",
                        "superellipse",
                        "smooth corner"
                    ],
                    "desc_ja": "スクワークル矩形を描画（曲率連続コーナー、iOS風）",
                    "desc_ko": "스쿼클 사각형 그리기 (곡률 연속 모서리, iOS 스타일)",
                    "examples": [
                        {
                            "name": "roundedRectExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawRectSquircle",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)",
                    "snippet": "drawRectSquircle(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})",
                    "keywords": [
                        "squircle",
                        "rounded",
                        "ios",
                        "superellipse",
                        "smooth corner"
                    ],
                    "desc_ja": "スクワークル矩形を描画（曲率連続コーナー、iOS風）",
                    "desc_ko": "스쿼클 사각형 그리기 (곡률 연속 모서리, iOS 스타일)",
                    "examples": [
                        {
                            "name": "roundedRectExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "params_typed": "float x, float y, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})",
                    "keywords": [
                        "circle",
                        "round",
                        "ellipse",
                        "ball",
                        "dot"
                    ],
                    "desc_ja": "円を描画",
                    "desc_ko": "원 그리기",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawCircle",
                    "params": "center, radius",
                    "params_typed": "Vec3 center, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})",
                    "keywords": [
                        "circle",
                        "round",
                        "ellipse",
                        "ball",
                        "dot"
                    ],
                    "desc_ja": "円を描画",
                    "desc_ko": "원 그리기",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawArc",
                    "params": "x, y, radius, angleBegin, angleEnd",
                    "params_typed": "float x, float y, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Draw arc (partial circle, angles in radians)",
                    "snippet": "drawArc(${1:x}, ${2:y}, ${3:radius}, ${4:0}, ${5:TAU})",
                    "keywords": [],
                    "desc_ja": "円弧を描画（角度はradian）",
                    "desc_ko": "호 그리기 (각도는 radian)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawArc",
                    "params": "center, radius, angleBegin, angleEnd",
                    "params_typed": "Vec3 center, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Draw arc (partial circle, angles in radians)",
                    "snippet": "drawArc(${1:x}, ${2:y}, ${3:radius}, ${4:0}, ${5:TAU})",
                    "keywords": [],
                    "desc_ja": "円弧を描画（角度はradian）",
                    "desc_ko": "호 그리기 (각도는 radian)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "楕円を描画",
                    "desc_ko": "타원 그리기",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawEllipse",
                    "params": "center, rx, ry",
                    "params_typed": "Vec3 center, float rx, float ry",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "楕円を描画",
                    "desc_ko": "타원 그리기",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawEllipse",
                    "params": "center, radii",
                    "params_typed": "Vec3 center, Vec2 radii",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "楕円を描画",
                    "desc_ko": "타원 그리기",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawPoint",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw a single point",
                    "snippet": "drawPoint(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "点を描画",
                    "desc_ko": "점 그리기"
                },
                {
                    "name": "drawPoint",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Draw a single point",
                    "snippet": "drawPoint(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "点を描画",
                    "desc_ko": "점 그리기"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "線を描画（2Dまたは3D）",
                    "desc_ko": "선 그리기 (2D 또는 3D)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, z1, x2, y2, z2",
                    "params_typed": "float x1, float y1, float z1, float x2, float y2, float z2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "線を描画（2Dまたは3D）",
                    "desc_ko": "선 그리기 (2D 또는 3D)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawLine",
                    "params": "p1, p2",
                    "params_typed": "Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "線を描画（2Dまたは3D）",
                    "desc_ko": "선 그리기 (2D 또는 3D)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawBezier",
                    "params": "p0, p1, p2, p3",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)",
                    "snippet": "drawBezier(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})",
                    "keywords": [],
                    "desc_ja": "ベジェ曲線を描画（4点で3次、3点で2次、vectorでN次）",
                    "desc_ko": "베지어 곡선 그리기 (4점은 3차, 3점은 2차, vector는 N차)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawBezier",
                    "params": "p0, p1, p2",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)",
                    "snippet": "drawBezier(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})",
                    "keywords": [],
                    "desc_ja": "ベジェ曲線を描画（4点で3次、3点で2次、vectorでN次）",
                    "desc_ko": "베지어 곡선 그리기 (4점은 3차, 3점은 2차, vector는 N차)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawBezier",
                    "params": "controlPoints",
                    "params_typed": "const vector<Vec3>& controlPoints",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)",
                    "snippet": "drawBezier(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})",
                    "keywords": [],
                    "desc_ja": "ベジェ曲線を描画（4点で3次、3点で2次、vectorでN次）",
                    "desc_ko": "베지어 곡선 그리기 (4점은 3차, 3점은 2차, vector는 N차)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawCurve",
                    "params": "p0, p1, p2, p3",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)",
                    "snippet": "drawCurve(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})",
                    "keywords": [],
                    "desc_ja": "Catmull-Rom曲線を描画（4点でp1→p2を描画、vectorで内部点を通る連結、closed=trueで閉曲線）",
                    "desc_ko": "Catmull-Rom 곡선 그리기 (4점은 p1→p2 그리기, vector는 내부 점들을 통과하는 연결, closed=true는 닫힌 곡선)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawCurve",
                    "params": "points",
                    "params_typed": "const vector<Vec3>& points",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)",
                    "snippet": "drawCurve(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})",
                    "keywords": [],
                    "desc_ja": "Catmull-Rom曲線を描画（4点でp1→p2を描画、vectorで内部点を通る連結、closed=trueで閉曲線）",
                    "desc_ko": "Catmull-Rom 곡선 그리기 (4점은 p1→p2 그리기, vector는 내부 점들을 통과하는 연결, closed=true는 닫힌 곡선)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawCurve",
                    "params": "points, closed",
                    "params_typed": "const vector<Vec3>& points, bool closed",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)",
                    "snippet": "drawCurve(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})",
                    "keywords": [],
                    "desc_ja": "Catmull-Rom曲線を描画（4点でp1→p2を描画、vectorで内部点を通る連結、closed=trueで閉曲線）",
                    "desc_ko": "Catmull-Rom 곡선 그리기 (4점은 p1→p2 그리기, vector는 내부 점들을 통과하는 연결, closed=true는 닫힌 곡선)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "params_typed": "float x1, float y1, float x2, float y2, float x3, float y3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})",
                    "keywords": [],
                    "desc_ja": "三角形を描画",
                    "desc_ko": "삼각형 그리기",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawTriangle",
                    "params": "p1, p2, p3",
                    "params_typed": "Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})",
                    "keywords": [],
                    "desc_ja": "三角形を描画",
                    "desc_ko": "삼각형 그리기",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "drawBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})",
                    "keywords": [
                        "cube",
                        "box",
                        "rectangle",
                        "cuboid",
                        "3d"
                    ],
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "drawBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})",
                    "keywords": [
                        "cube",
                        "box",
                        "rectangle",
                        "cuboid",
                        "3d"
                    ],
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, size",
                    "params_typed": "float x, float y, float z, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})",
                    "keywords": [
                        "cube",
                        "box",
                        "rectangle",
                        "cuboid",
                        "3d"
                    ],
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, w, h, d",
                    "params_typed": "float x, float y, float z, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})",
                    "keywords": [
                        "cube",
                        "box",
                        "rectangle",
                        "cuboid",
                        "3d"
                    ],
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "drawBox",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})",
                    "keywords": [
                        "cube",
                        "box",
                        "rectangle",
                        "cuboid",
                        "3d"
                    ],
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "drawBox",
                    "params": "pos, w, h, d",
                    "params_typed": "Vec3 pos, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "snippet": "drawBox(${1:size})",
                    "keywords": [
                        "cube",
                        "box",
                        "rectangle",
                        "cuboid",
                        "3d"
                    ],
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "drawSphere",
                    "params": "radius",
                    "params_typed": "float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})",
                    "keywords": [],
                    "desc_ja": "3D球体を描画（fill/noFillに対応）",
                    "desc_ko": "3D 구 그리기 (fill/noFill 적용됨)"
                },
                {
                    "name": "drawSphere",
                    "params": "x, y, z, radius",
                    "params_typed": "float x, float y, float z, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})",
                    "keywords": [],
                    "desc_ja": "3D球体を描画（fill/noFillに対応）",
                    "desc_ko": "3D 구 그리기 (fill/noFill 적용됨)"
                },
                {
                    "name": "drawSphere",
                    "params": "pos, radius",
                    "params_typed": "Vec3 pos, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "snippet": "drawSphere(${1:radius})",
                    "keywords": [],
                    "desc_ja": "3D球体を描画（fill/noFillに対応）",
                    "desc_ko": "3D 구 그리기 (fill/noFill 적용됨)"
                },
                {
                    "name": "drawCone",
                    "params": "radius, height",
                    "params_typed": "float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "3D円錐を描画（fill/noFillに対応）",
                    "desc_ko": "3D 원뿔 그리기 (fill/noFill 적용됨)"
                },
                {
                    "name": "drawCone",
                    "params": "x, y, z, radius, height",
                    "params_typed": "float x, float y, float z, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "3D円錐を描画（fill/noFillに対応）",
                    "desc_ko": "3D 원뿔 그리기 (fill/noFill 적용됨)"
                },
                {
                    "name": "drawCone",
                    "params": "pos, radius, height",
                    "params_typed": "Vec3 pos, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "snippet": "drawCone(${1:radius}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "3D円錐を描画（fill/noFillに対応）",
                    "desc_ko": "3D 원뿔 그리기 (fill/noFill 적용됨)"
                },
                {
                    "name": "beginShape",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a shape",
                    "snippet": "beginShape()",
                    "keywords": [],
                    "desc_ja": "図形の描画を開始",
                    "desc_ko": "도형 그리기 시작",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "vertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "examples": [
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "vertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "examples": [
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec2& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "examples": [
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "vertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "examples": [
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "endShape",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a shape",
                    "snippet": "endShape()",
                    "keywords": [],
                    "desc_ja": "図形の描画を終了",
                    "desc_ko": "도형 그리기 종료",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "appendArc",
                    "params": "cx, cy, radius, angleBegin, angleEnd",
                    "params_typed": "float cx, float cy, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Append arc vertices to the current shape (use between beginShape/endShape)",
                    "snippet": "appendArc(${1:cx}, ${2:cy}, ${3:radius}, ${4:0}, ${5:TAU})",
                    "keywords": [],
                    "desc_ja": "現在の図形に円弧の頂点を追加（beginShape/endShape間で使用）",
                    "desc_ko": "현재 도형에 호 정점을 추가 (beginShape/endShape 사이에서 사용)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "appendArc",
                    "params": "center, radius, angleBegin, angleEnd",
                    "params_typed": "const Vec2& center, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Append arc vertices to the current shape (use between beginShape/endShape)",
                    "snippet": "appendArc(${1:cx}, ${2:cy}, ${3:radius}, ${4:0}, ${5:TAU})",
                    "keywords": [],
                    "desc_ja": "現在の図形に円弧の頂点を追加（beginShape/endShape間で使用）",
                    "desc_ko": "현재 도형에 호 정점을 추가 (beginShape/endShape 사이에서 사용)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "appendCurve",
                    "params": "points",
                    "params_typed": "const vector<Vec3>& points",
                    "return_type": "void",
                    "desc": "Append Catmull-Rom curve vertices to the current shape (use between beginShape/endShape; needs >=4 points, closed=true wraps around)",
                    "snippet": "appendCurve(${1:points})",
                    "keywords": [],
                    "desc_ja": "現在の図形にCatmull-Rom曲線の頂点を追加（beginShape/endShape間で使用、4点以上必要、closed=trueで閉曲線）",
                    "desc_ko": "현재 도형에 Catmull-Rom 곡선 정점을 추가 (beginShape/endShape 사이에서 사용, 4점 이상 필요, closed=true는 닫힌 곡선)"
                },
                {
                    "name": "appendCurve",
                    "params": "points, closed",
                    "params_typed": "const vector<Vec3>& points, bool closed",
                    "return_type": "void",
                    "desc": "Append Catmull-Rom curve vertices to the current shape (use between beginShape/endShape; needs >=4 points, closed=true wraps around)",
                    "snippet": "appendCurve(${1:points})",
                    "keywords": [],
                    "desc_ja": "現在の図形にCatmull-Rom曲線の頂点を追加（beginShape/endShape間で使用、4点以上必要、closed=trueで閉曲線）",
                    "desc_ko": "현재 도형에 Catmull-Rom 곡선 정점을 추가 (beginShape/endShape 사이에서 사용, 4점 이상 필요, closed=true는 닫힌 곡선)"
                },
                {
                    "name": "beginStroke",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a stroke (uses StrokeMesh internally)",
                    "snippet": "beginStroke()",
                    "keywords": [],
                    "desc_ja": "ストローク描画を開始（内部でStrokeMeshを使用）",
                    "desc_ko": "stroke 그리기 시작 (내부적으로 StrokeMesh 사용)",
                    "examples": [
                        {
                            "name": "grabExample",
                            "group": "node"
                        },
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "endStroke",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a stroke",
                    "snippet": "endStroke()",
                    "keywords": [],
                    "desc_ja": "ストローク描画を終了",
                    "desc_ko": "stroke 그리기 종료",
                    "examples": [
                        {
                            "name": "grabExample",
                            "group": "node"
                        },
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "beginLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin batch line drawing. Add vertex pairs with vertex(), then call endLines(). Each pair of vertices draws one independent line segment. Use setColor() between vertices for per-line colors.",
                    "snippet": "beginLines()",
                    "keywords": [],
                    "desc_ja": "バッチ線描画を開始。vertex()で頂点ペアを追加し、endLines()で描画。2頂点で1本の独立した線分。setColor()で頂点ごとに色を変更可能",
                    "desc_ko": "배치 선 그리기 시작. vertex()로 정점 쌍을 추가한 뒤 endLines()를 호출. 각 정점 쌍이 독립적인 선분 하나를 그림. 정점 사이에 setColor()로 선마다 색상 지정 가능"
                },
                {
                    "name": "endLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End batch line drawing and render all accumulated line segments",
                    "snippet": "endLines()",
                    "keywords": [],
                    "desc_ja": "バッチ線描画を終了し、蓄積された全線分を描画",
                    "desc_ko": "배치 선 그리기 종료. 누적된 모든 선을 렌더링"
                },
                {
                    "name": "drawStroke",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "単一のストロークを描画（太線、端点/結合スタイル対応）",
                    "desc_ko": "단일 stroke 세그먼트를 그림 (캡/조인이 있는 굵은 선)"
                },
                {
                    "name": "drawStroke",
                    "params": "p1, p2",
                    "params_typed": "const Vec2& p1, const Vec2& p2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "単一のストロークを描画（太線、端点/結合スタイル対応）",
                    "desc_ko": "단일 stroke 세그먼트를 그림 (캡/조인이 있는 굵은 선)"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text",
                    "snippet": "drawBitmapString(${1:\"text\"}, ${2:x}, ${3:y})",
                    "keywords": [],
                    "desc_ja": "テキストを描画",
                    "desc_ko": "비트맵 텍스트 그리기",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "bitmapStringExtendedExample",
                            "group": "font"
                        }
                    ]
                },
                {
                    "name": "drawBitmapStringHighlight",
                    "params": "text, x, y, background, foreground",
                    "params_typed": "const string& text, float x, float y, const Color& background = Color(0,0,0), const Color& foreground = Color(1,1,1)",
                    "return_type": "void",
                    "desc": "Draw text with background highlight",
                    "snippet": "drawBitmapStringHighlight(${1:\"text\"}, ${2:x}, ${3:y})",
                    "keywords": [],
                    "desc_ja": "背景ハイライト付きでテキストを描画",
                    "desc_ko": "배경 하이라이트와 함께 비트맵 텍스트 그리기",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        },
                        {
                            "name": "fullscreenShaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getBitmapStringBounds",
                    "params": "text, width, height",
                    "params_typed": "const string& text, float& width, float& height",
                    "return_type": "void",
                    "desc": "Get bitmap string bounding box size",
                    "snippet": "getBitmapStringBounds(${1:\"text\"}, ${2:w}, ${3:h})",
                    "keywords": [],
                    "desc_ja": "ビットマップ文字列のバウンディングボックスサイズを取得",
                    "desc_ko": "비트맵 문자열의 바운딩 박스 크기를 얻음"
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal",
                    "params_typed": "TextAlign horizontal",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "snippet": "setTextAlign(TextAlign::${1:Left})",
                    "keywords": [],
                    "desc_ja": "テキストの配置を設定",
                    "desc_ko": "텍스트 정렬을 설정",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "bitmapStringExtendedExample",
                            "group": "font"
                        }
                    ]
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal, vertical",
                    "params_typed": "TextAlign horizontal, TextAlign vertical",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "snippet": "setTextAlign(TextAlign::${1:Left})",
                    "keywords": [],
                    "desc_ja": "テキストの配置を設定",
                    "desc_ko": "텍스트 정렬을 설정",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "bitmapStringExtendedExample",
                            "group": "font"
                        }
                    ]
                },
                {
                    "name": "getTextAlignH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get horizontal text alignment",
                    "snippet": "getTextAlignH()",
                    "keywords": [],
                    "desc_ja": "水平方向のテキスト配置を取得",
                    "desc_ko": "수평 텍스트 정렬을 얻음"
                },
                {
                    "name": "getTextAlignV",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get vertical text alignment",
                    "snippet": "getTextAlignV()",
                    "keywords": [],
                    "desc_ja": "垂直方向のテキスト配置を取得",
                    "desc_ko": "수직 텍스트 정렬을 얻음"
                },
                {
                    "name": "getBitmapFontHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get bitmap font height",
                    "snippet": "getBitmapFontHeight()",
                    "keywords": [],
                    "desc_ja": "ビットマップフォントの高さを取得",
                    "desc_ko": "비트맵 폰트 높이를 얻음"
                },
                {
                    "name": "getBitmapStringWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width",
                    "snippet": "getBitmapStringWidth(${1:\"text\"})",
                    "keywords": [],
                    "desc_ja": "テキストの幅を取得",
                    "desc_ko": "비트맵 텍스트 너비를 얻음"
                },
                {
                    "name": "getBitmapStringHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height",
                    "snippet": "getBitmapStringHeight(${1:\"text\"})",
                    "keywords": [],
                    "desc_ja": "テキストの高さを取得",
                    "desc_ko": "비트맵 텍스트 높이를 얻음"
                },
                {
                    "name": "getBitmapStringBBox",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "Rect",
                    "desc": "Get text bounding box",
                    "snippet": "getBitmapStringBBox(${1:\"text\"}, ${2:x}, ${3:y})",
                    "keywords": [],
                    "desc_ja": "テキストのバウンディングボックスを取得",
                    "desc_ko": "비트맵 텍스트 바운딩 박스를 얻음"
                },
                {
                    "name": "bitmapfont::registerGlyph",
                    "params": "glyph",
                    "params_typed": "const bitmapfont::Glyph& g",
                    "return_type": "void",
                    "desc": "Register a bitmap glyph for a Unicode codepoint (extends drawBitmapString)",
                    "snippet": "bitmapfont::registerGlyph({${1:cp}, ${2:data}, bitmapfont::Width::${3:Fullwidth}})",
                    "keywords": [],
                    "desc_ja": "Unicode コードポイントにビットマップグリフを登録 (drawBitmapString を拡張)",
                    "desc_ko": "유니코드 코드포인트에 비트맵 글리프 등록 (drawBitmapString 확장)"
                },
                {
                    "name": "bitmapfont::registerGlyphs",
                    "params": "glyphs[]",
                    "params_typed": "const bitmapfont::Glyph (&glyphs)[N]",
                    "return_type": "void",
                    "desc": "Register a batch of bitmap glyphs at once",
                    "snippet": "bitmapfont::registerGlyphs(${1:GLYPHS})",
                    "keywords": [],
                    "desc_ja": "複数のビットマップグリフを一括登録",
                    "desc_ko": "여러 비트맵 글리프를 한 번에 등록"
                },
                {
                    "name": "bitmapfont::updateGlyph",
                    "params": "codepoint, data",
                    "params_typed": "uint32_t cp, const uint8_t* newData",
                    "return_type": "void",
                    "desc": "Swap an already-registered glyph's pixel data (atlas cell unchanged). Useful for per-frame animation.",
                    "snippet": "bitmapfont::updateGlyph(${1:0xE000}, ${2:newData})",
                    "keywords": [],
                    "desc_ja": "登録済みグリフのピクセルデータだけ差し替え（アトラス位置は維持）。フレームごとのアニメーションに便利",
                    "desc_ko": "이미 등록된 글리프의 픽셀 데이터만 교체 (아틀라스 위치 유지). 프레임 애니메이션에 유용"
                },
                {
                    "name": "bitmapfont::compile8x13",
                    "params": "rows",
                    "params_typed": "const char* const (&rows)[13]",
                    "return_type": "std::array<uint8_t, 13>",
                    "desc": "Compile-time ASCII art -> packed halfwidth (8x13) glyph bytes. '#' = lit, '.' = empty.",
                    "snippet": "bitmapfont::compile8x13({${1:rows}})",
                    "keywords": [],
                    "desc_ja": "ASCII アートをコンパイル時に半角 (8x13) パックバイトに変換。'#' = 描画、'.' = 透明",
                    "desc_ko": "ASCII 아트를 컴파일 타임에 반각 (8x13) 패킹된 바이트로 변환. '#' = 채움, '.' = 빈 칸"
                },
                {
                    "name": "bitmapfont::compile16x13",
                    "params": "rows",
                    "params_typed": "const char* const (&rows)[13]",
                    "return_type": "std::array<uint8_t, 26>",
                    "desc": "Compile-time ASCII art -> packed fullwidth (16x13) glyph bytes. '#' = lit, '.' = empty.",
                    "snippet": "bitmapfont::compile16x13({${1:rows}})",
                    "keywords": [],
                    "desc_ja": "ASCII アートをコンパイル時に全角 (16x13) パックバイトに変換。'#' = 描画、'.' = 透明",
                    "desc_ko": "ASCII 아트를 컴파일 타임에 전각 (16x13) 패킹된 바이트로 변환. '#' = 채움, '.' = 빈 칸"
                },
                {
                    "name": "setBitmapLineHeight",
                    "params": "height",
                    "params_typed": "float height",
                    "return_type": "void",
                    "desc": "Set line height for bitmap string newlines (default: 16)",
                    "snippet": "setBitmapLineHeight(${1:16})",
                    "keywords": [],
                    "desc_ja": "ビットマップ文字列の改行時の行の高さを設定（デフォルト: 16）",
                    "desc_ko": "비트맵 문자열 개행 시의 줄 높이를 설정 (기본값: 16)"
                },
                {
                    "name": "getBitmapLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height for bitmap string newlines",
                    "snippet": "getBitmapLineHeight()",
                    "keywords": [],
                    "desc_ja": "ビットマップ文字列の改行時の行の高さを取得",
                    "desc_ko": "비트맵 문자열 개행 시의 줄 높이를 얻음"
                },
                {
                    "name": "setFps",
                    "params": "fps",
                    "params_typed": "float fps",
                    "return_type": "void",
                    "desc": "Set target frame rate (VSYNC = -1.0)",
                    "snippet": "setFps(${1:60.0})",
                    "keywords": [],
                    "desc_ja": "ターゲットフレームレートを設定 (VSYNC = -1.0)",
                    "desc_ko": "목표 프레임레이트를 설정 (VSYNC = -1.0)",
                    "examples": [
                        {
                            "name": "loopModeExample",
                            "group": "windowing"
                        },
                        {
                            "name": "fontTategakiExample",
                            "group": "font"
                        }
                    ]
                }
            ],
            "name_ja": "グラフィックス - 図形",
            "name_ko": "그래픽 - 도형"
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
                    "snippet": "fill()",
                    "keywords": [],
                    "desc_ja": "塗りつぶしモードを有効化（シェイプは塗りつぶし、輪郭なし）",
                    "desc_ko": "채우기 모드 활성화 (도형이 채워지고 외곽선 없음)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "hitTestExample",
                            "group": "node"
                        },
                        {
                            "name": "uiExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "noFill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable stroke mode (shapes show outline only)",
                    "snippet": "noFill()",
                    "keywords": [],
                    "desc_ja": "ストロークモードを有効化（シェイプは輪郭のみ）",
                    "desc_ko": "stroke 모드 활성화 (도형은 외곽선만 표시)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "params_typed": "float weight",
                    "return_type": "void",
                    "desc": "Set stroke width",
                    "snippet": "setStrokeWeight(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "ストロークの太さを設定",
                    "desc_ko": "stroke 두께를 설정",
                    "examples": [
                        {
                            "name": "fontPathExample",
                            "group": "font"
                        },
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "getStrokeWeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stroke width",
                    "snippet": "getStrokeWeight()",
                    "keywords": [],
                    "desc_ja": "現在のストロークの太さを取得",
                    "desc_ko": "현재 storke 두께를 얻음"
                },
                {
                    "name": "setStrokeCap",
                    "params": "cap",
                    "params_typed": "StrokeCap cap",
                    "return_type": "void",
                    "desc": "Set stroke cap style (Butt, Round, Square)",
                    "snippet": "setStrokeCap(StrokeCap::${1:Round})",
                    "keywords": [],
                    "desc_ja": "ストローク端点のスタイルを設定",
                    "desc_ko": "stroke 끝점 스타일을 설정 (Butt, Round, Square)",
                    "examples": [
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getStrokeCap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeCap",
                    "desc": "Get current stroke cap style",
                    "snippet": "getStrokeCap()",
                    "keywords": [],
                    "desc_ja": "現在のストローク端点スタイルを取得",
                    "desc_ko": "현재 stroke 끝점 스타일을 얻음"
                },
                {
                    "name": "setStrokeJoin",
                    "params": "join",
                    "params_typed": "StrokeJoin join",
                    "return_type": "void",
                    "desc": "Set stroke join style (Miter, Round, Bevel)",
                    "snippet": "setStrokeJoin(StrokeJoin::${1:Round})",
                    "keywords": [],
                    "desc_ja": "ストローク結合部のスタイルを設定",
                    "desc_ko": "stroke 결합부 스타일을 설정 (Miter, Round, Bevel)",
                    "examples": [
                        {
                            "name": "strokeExample",
                            "group": "graphics"
                        },
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "getStrokeJoin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeJoin",
                    "desc": "Get current stroke join style",
                    "snippet": "getStrokeJoin()",
                    "keywords": [],
                    "desc_ja": "現在のストローク結合部スタイルを取得",
                    "desc_ko": "현재 stroke 결합부 스타일을 얻음"
                },
                {
                    "name": "isFillEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if fill mode is enabled",
                    "snippet": "isFillEnabled()",
                    "keywords": [],
                    "desc_ja": "塗りつぶしモードが有効か確認",
                    "desc_ko": "채우기 모드 활성 여부 확인"
                },
                {
                    "name": "isStrokeEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if stroke mode is enabled",
                    "snippet": "isStrokeEnabled()",
                    "keywords": [],
                    "desc_ja": "ストロークモードが有効か確認",
                    "desc_ko": "stroke 모드 활성 여부 확인"
                },
                {
                    "name": "setCurveTolerance",
                    "params": "pixels",
                    "params_typed": "float pixels",
                    "return_type": "void",
                    "desc": "Set adaptive curve tessellation tolerance in pixels (smaller = smoother, scale-aware)",
                    "snippet": "setCurveTolerance(${1:0.5})",
                    "keywords": [],
                    "desc_ja": "曲線の適応的分割の許容誤差をピクセル単位で設定（小さいほど滑らか、スケール対応）",
                    "desc_ko": "곡선의 적응형 분할 허용 오차를 픽셀 단위로 설정 (작을수록 부드러움, 스케일 대응)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getCurveTolerance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current curve tessellation tolerance (in pixels)",
                    "snippet": "getCurveTolerance()",
                    "keywords": [],
                    "desc_ja": "現在の曲線分割の許容誤差を取得（ピクセル単位）",
                    "desc_ko": "현재 곡선 분할 허용 오차를 얻음 (픽셀 단위)"
                },
                {
                    "name": "setCurveResolution",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "void",
                    "desc": "Set fixed curve segment count (switches off adaptive tolerance mode)",
                    "snippet": "setCurveResolution(${1:32})",
                    "keywords": [],
                    "desc_ja": "曲線の固定分割数を設定（適応的tolerance modeをオフ）",
                    "desc_ko": "곡선의 고정 분할 개수를 설정 (적응형 tolerance 모드 끔)",
                    "examples": [
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getCurveResolution",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current curve resolution",
                    "snippet": "getCurveResolution()",
                    "keywords": [],
                    "desc_ja": "現在の曲線分割数を取得",
                    "desc_ko": "현재 곡선 분할 개수를 얻음"
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save current style state (color, stroke, fill)",
                    "snippet": "pushStyle()",
                    "keywords": [],
                    "desc_ja": "現在のスタイル状態を保存（色、ストローク、塗りつぶし）",
                    "desc_ko": "현재 스타일 상태를 저장 (색상, 스트로크, 채우기)",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous style state",
                    "snippet": "popStyle()",
                    "keywords": [],
                    "desc_ja": "保存したスタイル状態を復元",
                    "desc_ko": "이전 스타일 상태를 복원",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "resetStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset style to default values (white color, fill enabled, stroke disabled)",
                    "snippet": "resetStyle()",
                    "keywords": [],
                    "desc_ja": "スタイルをデフォルト値にリセット（白色、塗りつぶし有効、ストローク無効）",
                    "desc_ko": "스타일을 기본값으로 초기화 (흰색, 채우기 활성, 스트로크 비활성)"
                },
                {
                    "name": "getColor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Get current fill color",
                    "snippet": "getColor()",
                    "keywords": [],
                    "desc_ja": "現在の塗りつぶし色を取得",
                    "desc_ko": "현재 채우기 색상을 얻음",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setScissor",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Set scissor clipping rectangle. Also available via RectNode::setClipping(true)",
                    "snippet": "setScissor(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "シザー（クリッピング）矩形を設定。RectNode::setClipping(true)でも使用可",
                    "desc_ko": "시저(클리핑) 사각형을 설정. RectNode::setClipping(true)로도 사용 가능"
                },
                {
                    "name": "resetScissor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset (disable) scissor clipping",
                    "snippet": "resetScissor()",
                    "keywords": [],
                    "desc_ja": "シザー（クリッピング）を解除",
                    "desc_ko": "시저(클리핑)를 해제"
                },
                {
                    "name": "pushScissor",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Push scissor clipping rectangle onto stack",
                    "snippet": "pushScissor(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "シザー矩形をスタックにプッシュ",
                    "desc_ko": "시저 사각형을 스택에 푸시"
                },
                {
                    "name": "popScissor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop scissor clipping rectangle from stack",
                    "snippet": "popScissor()",
                    "keywords": [],
                    "desc_ja": "シザー矩形をスタックからポップ",
                    "desc_ko": "시저 사각형을 스택에서 복원"
                },
                {
                    "name": "setBlendMode",
                    "params": "mode",
                    "params_typed": "BlendMode mode",
                    "return_type": "void",
                    "desc": "Set blend mode. BlendMode::Alpha (default), Add, Multiply, Screen, Subtract, Disabled",
                    "snippet": "setBlendMode(${1:BlendMode::Add})",
                    "keywords": [],
                    "desc_ja": "ブレンドモードを設定。BlendMode::Alpha（デフォルト）, Add, Multiply, Screen, Subtract, Disabled",
                    "desc_ko": "블렌드 모드를 설정. BlendMode::Alpha (기본값), Add, Multiply, Screen, Subtract, Disabled",
                    "examples": [
                        {
                            "name": "blendingExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getBlendMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "BlendMode",
                    "desc": "Get current blend mode",
                    "snippet": "getBlendMode()",
                    "keywords": [],
                    "desc_ja": "現在のブレンドモードを取得",
                    "desc_ko": "현재 블렌드 모드를 얻음"
                },
                {
                    "name": "resetBlendMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset blend mode to Alpha (default)",
                    "snippet": "resetBlendMode()",
                    "keywords": [],
                    "desc_ja": "ブレンドモードをAlpha（デフォルト）にリセット",
                    "desc_ko": "블렌드 모드를 Alpha (기본값)로 초기화",
                    "examples": [
                        {
                            "name": "blendingExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Push current style (color, fill, stroke, blend) onto stack",
                    "snippet": "pushStyle()",
                    "keywords": [],
                    "desc_ja": "現在のスタイル（色、塗り、ストローク、ブレンド）をスタックにプッシュ",
                    "desc_ko": "현재 스타일(색상, 채우기, 스트로크, 블렌드)을 스택에 푸시",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop style from stack, restoring previous state",
                    "snippet": "popStyle()",
                    "keywords": [],
                    "desc_ja": "スタイルをスタックからポップし、前の状態を復元",
                    "desc_ko": "스택에서 스타일을 꺼내서 이전 상태로 복원",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "resetStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset all style settings to defaults",
                    "snippet": "resetStyle()",
                    "keywords": [],
                    "desc_ja": "全スタイル設定をデフォルトにリセット",
                    "desc_ko": "모든 스타일 설정을 기본값으로 초기화"
                },
                {
                    "name": "getCurveMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "CurveStyle::Mode",
                    "desc": "Current curve tessellation mode (fixed segment count vs. adaptive tolerance)",
                    "snippet": "getCurveMode()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "グラフィックス - スタイル",
            "name_ko": "그래픽 - 스타일"
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
                    "snippet": "translate(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "原点を移動",
                    "desc_ko": "원점을 이동",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Move origin",
                    "snippet": "translate(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "原点を移動",
                    "desc_ko": "원점을 이동",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})",
                    "keywords": [],
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "rotate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})",
                    "keywords": [],
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "rotate",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})",
                    "keywords": [],
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "rotate",
                    "params": "quat",
                    "params_typed": "Quaternion quat",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "snippet": "rotate(${1:radians})",
                    "keywords": [],
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "度で回転",
                    "desc_ko": "도(degree)로 회전"
                },
                {
                    "name": "rotateDeg",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "度で回転",
                    "desc_ko": "도(degree)로 회전"
                },
                {
                    "name": "rotateDeg",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "snippet": "rotateDeg(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "度で回転",
                    "desc_ko": "도(degree)로 회전"
                },
                {
                    "name": "rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around X axis",
                    "snippet": "rotateX(${1:radians})",
                    "keywords": [],
                    "desc_ja": "X軸周りに回転",
                    "desc_ko": "X축을 중심으로 회전",
                    "examples": [
                        {
                            "name": "fboMipmapExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Y axis",
                    "snippet": "rotateY(${1:radians})",
                    "keywords": [],
                    "desc_ja": "Y軸周りに回転",
                    "desc_ko": "Y축을 중심으로 회전",
                    "examples": [
                        {
                            "name": "fboMipmapExample",
                            "group": "3d"
                        },
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Z axis",
                    "snippet": "rotateZ(${1:radians})",
                    "keywords": [],
                    "desc_ja": "Z軸周りに回転",
                    "desc_ko": "Z축을 중심으로 회전"
                },
                {
                    "name": "rotateXDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around X axis (degrees)",
                    "snippet": "rotateXDeg(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "X軸周りに回転（度）",
                    "desc_ko": "X축을 중심으로 회전 (도)"
                },
                {
                    "name": "rotateYDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Y axis (degrees)",
                    "snippet": "rotateYDeg(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "Y軸周りに回転（度）",
                    "desc_ko": "Y축을 중심으로 회전 (도)"
                },
                {
                    "name": "rotateZDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Z axis (degrees)",
                    "snippet": "rotateZDeg(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "Z軸周りに回転（度）",
                    "desc_ko": "Z축을 중심으로 회전 (도)"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "void",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})",
                    "keywords": [],
                    "desc_ja": "拡大縮小",
                    "desc_ko": "크기 조절",
                    "examples": [
                        {
                            "name": "fontPathExample",
                            "group": "font"
                        },
                        {
                            "name": "videoGrabberExample",
                            "group": "video"
                        }
                    ]
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "params_typed": "float sx, float sy",
                    "return_type": "void",
                    "desc": "Scale",
                    "snippet": "scale(${1:s})",
                    "keywords": [],
                    "desc_ja": "拡大縮小",
                    "desc_ko": "크기 조절",
                    "examples": [
                        {
                            "name": "fontPathExample",
                            "group": "font"
                        },
                        {
                            "name": "videoGrabberExample",
                            "group": "video"
                        }
                    ]
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save transform state",
                    "snippet": "pushMatrix()",
                    "keywords": [],
                    "desc_ja": "変換状態を保存",
                    "desc_ko": "변환 상태를 저장",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore transform state",
                    "snippet": "popMatrix()",
                    "keywords": [],
                    "desc_ja": "変換状態を復元",
                    "desc_ko": "변환 상태를 복원",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "getCurrentMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Get current transformation matrix",
                    "snippet": "getCurrentMatrix()",
                    "keywords": [],
                    "desc_ja": "現在の変換行列を取得",
                    "desc_ko": "현재 변환 행렬을 얻음"
                },
                {
                    "name": "resetMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset transformation matrix to identity",
                    "snippet": "resetMatrix()",
                    "keywords": [],
                    "desc_ja": "変換行列をリセット",
                    "desc_ko": "변환 행렬을 단위 행렬로 초기화"
                },
                {
                    "name": "setMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Set transformation matrix directly",
                    "snippet": "setMatrix(${1:mat})",
                    "keywords": [],
                    "desc_ja": "変換行列を直接設定",
                    "desc_ko": "변환 행렬을 직접 설정"
                }
            ],
            "name_ja": "変換",
            "name_ko": "변환"
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
                    "snippet": "getWindowWidth()",
                    "keywords": [],
                    "desc_ja": "キャンバスの幅を取得",
                    "desc_ko": "캔버스 너비를 얻음"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas height",
                    "snippet": "getWindowHeight()",
                    "keywords": [],
                    "desc_ja": "キャンバスの高さを取得",
                    "desc_ko": "캔버스 높이를 얻음"
                },
                {
                    "name": "getWindowSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get canvas size as Vec2",
                    "snippet": "getWindowSize()",
                    "keywords": [],
                    "desc_ja": "キャンバスのサイズをVec2で取得",
                    "desc_ko": "캔버스 크기를 Vec2로 얻음"
                },
                {
                    "name": "requestExitApp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Request application exit. Can be cancelled by listening to events().exitRequested and setting args.cancel = true",
                    "keywords": [],
                    "desc_ja": "アプリケーション終了を要求。events().exitRequestedをリッスンしてargs.cancel = trueでキャンセル可能",
                    "desc_ko": "어플리케이션 종료를 요청. events().exitRequested를 수신하고 args.cancel = true로 설정하면 취소 가능"
                },
                {
                    "name": "exitApp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Immediately exit the application (cannot be cancelled)",
                    "keywords": [],
                    "desc_ja": "アプリケーションを即座に終了（キャンセル不可）",
                    "desc_ko": "어플리케이션을 즉시 종료 (취소 불가)"
                },
                {
                    "name": "loadDialog",
                    "params": "title, message, defaultPath, folderSelection",
                    "params_typed": "const string& title = \"\", const string& message = \"\", const string& defaultPath = \"\", bool folderSelection = false",
                    "return_type": "FileDialogResult",
                    "desc": "Show file open dialog. Returns FileDialogResult with filePath, fileName, success",
                    "keywords": [],
                    "desc_ja": "ファイル選択ダイアログを表示。FileDialogResult（filePath, fileName, success）を返す",
                    "desc_ko": "파일 열기 대화상자 표시. filePath, fileName, success가 담긴 FileDialogResult 반환",
                    "examples": [
                        {
                            "name": "fileDialogExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "saveDialog",
                    "params": "title, message, defaultPath, defaultName",
                    "params_typed": "const string& title = \"\", const string& message = \"\", const string& defaultPath = \"\", const string& defaultName = \"\"",
                    "return_type": "FileDialogResult",
                    "desc": "Show file save dialog. Returns FileDialogResult with filePath, fileName, success",
                    "keywords": [],
                    "desc_ja": "ファイル保存ダイアログを表示。FileDialogResult（filePath, fileName, success）を返す",
                    "desc_ko": "파일 저장 대화상자 표시. filePath, fileName, success가 담긴 FileDialogResult 반환",
                    "examples": [
                        {
                            "name": "fileDialogExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "alertDialog",
                    "params": "title, message",
                    "params_typed": "const string& title, const string& message",
                    "return_type": "void",
                    "desc": "Show alert dialog with OK button",
                    "keywords": [],
                    "desc_ja": "OKボタン付きのアラートダイアログを表示",
                    "desc_ko": "OK 버튼이 있는 알림 대화상자 표시",
                    "examples": [
                        {
                            "name": "fileDialogExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "confirmDialog",
                    "params": "title, message",
                    "params_typed": "const string& title, const string& message",
                    "return_type": "bool",
                    "desc": "Show Yes/No confirmation dialog. Returns true if Yes clicked",
                    "keywords": [],
                    "desc_ja": "Yes/No確認ダイアログを表示。Yesが押されたらtrueを返す",
                    "desc_ko": "Yes/No 확인 대화상자 표시. Yes를 누르면 true 반환"
                },
                {
                    "name": "loadDialogAsync",
                    "params": "title, message, defaultPath, folderSelection, callback",
                    "params_typed": "const string& title, const string& message, const string& defaultPath, bool folderSelection, function<void(const FileDialogResult&)> callback",
                    "return_type": "void",
                    "desc": "Show file open dialog asynchronously. Callback receives FileDialogResult",
                    "keywords": [],
                    "desc_ja": "ファイル選択ダイアログを非同期で表示。コールバックにFileDialogResultが渡される",
                    "desc_ko": "파일 열기 대화상자를 비동기로 표시. 콜백에 FileDialogResult가 전달됨"
                },
                {
                    "name": "saveDialogAsync",
                    "params": "title, message, defaultPath, defaultName, callback",
                    "params_typed": "const string& title, const string& message, const string& defaultPath, const string& defaultName, function<void(const FileDialogResult&)> callback",
                    "return_type": "void",
                    "desc": "Show file save dialog asynchronously. Callback receives FileDialogResult",
                    "keywords": [],
                    "desc_ja": "ファイル保存ダイアログを非同期で表示。コールバックにFileDialogResultが渡される",
                    "desc_ko": "파일 저장 대화상자를 비동기로 표시. 콜백에 FileDialogResult가 전달됨"
                },
                {
                    "name": "alertDialogAsync",
                    "params": "title, message, callback",
                    "params_typed": "const string& title, const string& message, function<void()> callback = nullptr",
                    "return_type": "void",
                    "desc": "Show alert dialog asynchronously. Callback is called when dismissed",
                    "keywords": [],
                    "desc_ja": "アラートダイアログを非同期で表示。閉じた時にコールバックが呼ばれる",
                    "desc_ko": "알림 대화상자를 비동기로 표시. 닫힐 때 콜백 호출"
                },
                {
                    "name": "confirmDialogAsync",
                    "params": "title, message, callback",
                    "params_typed": "const string& title, const string& message, function<void(bool)> callback",
                    "return_type": "void",
                    "desc": "Show Yes/No dialog asynchronously. Callback receives true if Yes clicked",
                    "keywords": [],
                    "desc_ja": "Yes/No確認ダイアログを非同期で表示。Yesが押されたらコールバックにtrueが渡される",
                    "desc_ko": "Yes/No 대화상자를 비동기로 표시. Yes를 누르면 콜백에 true 전달"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse X position",
                    "snippet": "getMouseX()",
                    "keywords": [],
                    "desc_ja": "マウスのX座標を取得",
                    "desc_ko": "마우스 X 좌표를 얻음",
                    "examples": [
                        {
                            "name": "polylinesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "cursorExample",
                            "group": "input_output"
                        },
                        {
                            "name": "nodeExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse Y position",
                    "snippet": "getMouseY()",
                    "keywords": [],
                    "desc_ja": "マウスのY座標を取得",
                    "desc_ko": "마우스 Y 좌표를 얻음",
                    "examples": [
                        {
                            "name": "polylinesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "cursorExample",
                            "group": "input_output"
                        },
                        {
                            "name": "nodeExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "getMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get mouse position as Vec2",
                    "snippet": "getMousePos()",
                    "keywords": [],
                    "desc_ja": "マウス座標をVec2で取得",
                    "desc_ko": "마우스 좌표를 Vec2로 얻음"
                },
                {
                    "name": "getGlobalMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get global mouse position as Vec2",
                    "snippet": "getGlobalMousePos()",
                    "keywords": [],
                    "desc_ja": "グローバルマウス座標をVec2で取得",
                    "desc_ko": "전역 마우스 좌표를 Vec2로 얻음"
                },
                {
                    "name": "getGlobalMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get global mouse X (screen coordinates, not window-relative)",
                    "snippet": "getGlobalMouseX()",
                    "keywords": [],
                    "desc_ja": "グローバルマウスX座標（スクリーン座標、ウィンドウ相対ではない）",
                    "desc_ko": "전역 마우스 X (스크린 좌표, 윈도우 상대 좌표가 아님)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "fullscreenShaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getGlobalMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get global mouse Y (screen coordinates, not window-relative)",
                    "snippet": "getGlobalMouseY()",
                    "keywords": [],
                    "desc_ja": "グローバルマウスY座標（スクリーン座標、ウィンドウ相対ではない）",
                    "desc_ko": "전역 마우스 Y (스크린 좌표, 윈도우 상대 좌표가 아님)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "fullscreenShaderExample",
                            "group": "graphics"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getGlobalPMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get previous frame global mouse X",
                    "snippet": "getGlobalPMouseX()",
                    "keywords": [],
                    "desc_ja": "前フレームのグローバルマウスX座標",
                    "desc_ko": "이전 프레임의 전역 마우스 X 좌표",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "getGlobalPMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get previous frame global mouse Y",
                    "snippet": "getGlobalPMouseY()",
                    "keywords": [],
                    "desc_ja": "前フレームのグローバルマウスY座標",
                    "desc_ko": "이전 프레임의 전역 마우스 Y 좌표",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "getMouseButton",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get currently pressed mouse button",
                    "snippet": "getMouseButton()",
                    "keywords": [],
                    "desc_ja": "現在押されているマウスボタンを取得",
                    "desc_ko": "현재 눌린 마우스 버튼을 얻음",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "setTouchAsMouse",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Enable/disable touch events firing as mouse events (for Android/iOS)",
                    "snippet": "setTouchAsMouse(${1:true})",
                    "keywords": [],
                    "desc_ja": "タッチイベントをマウスイベントとして発火させるか設定（Android/iOS用）",
                    "desc_ko": "터치 이벤트를 마우스 이벤트로 발생시킬지 설정 (Android/iOS용)"
                },
                {
                    "name": "getTouchAsMouse",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get touchAsMouse state",
                    "snippet": "getTouchAsMouse()",
                    "keywords": [],
                    "desc_ja": "touchAsMouseの状態を取得",
                    "desc_ko": "touchAsMouse 상태를 얻음"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Is mouse button pressed",
                    "snippet": "isMousePressed()",
                    "keywords": [],
                    "desc_ja": "マウスボタンが押されているか",
                    "desc_ko": "마우스 버튼이 눌려 있는지",
                    "examples": [
                        {
                            "name": "polylinesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "isKeyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "bool",
                    "desc": "Is specific key currently pressed",
                    "snippet": "isKeyPressed(${1:key})",
                    "keywords": [],
                    "desc_ja": "指定キーが押されているか",
                    "desc_ko": "지정한 키가 현재 눌려 있는지"
                },
                {
                    "name": "isShiftPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Shift key (left or right) is held",
                    "snippet": "isShiftPressed()",
                    "keywords": [],
                    "desc_ja": "Shift キー (左右どちらでも) が押されているか",
                    "desc_ko": "Shift 키 (좌우 어느 쪽이든) 가 눌려 있는지"
                },
                {
                    "name": "isControlPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Control key (left or right) is held",
                    "snippet": "isControlPressed()",
                    "keywords": [],
                    "desc_ja": "Control キー (左右どちらでも) が押されているか",
                    "desc_ko": "Control 키 (좌우 어느 쪽이든) 가 눌려 있는지"
                },
                {
                    "name": "isAltPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Alt / Option key (left or right) is held",
                    "snippet": "isAltPressed()",
                    "keywords": [],
                    "desc_ja": "Alt / Option キー (左右どちらでも) が押されているか",
                    "desc_ko": "Alt / Option 키 (좌우 어느 쪽이든) 가 눌려 있는지"
                },
                {
                    "name": "isSuperPressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while either Super / Cmd / Win key (left or right) is held",
                    "snippet": "isSuperPressed()",
                    "keywords": [],
                    "desc_ja": "Super / Cmd / Win キー (左右どちらでも) が押されているか",
                    "desc_ko": "Super / Cmd / Win 키 (좌우 어느 쪽이든) 가 눌려 있는지"
                },
                {
                    "name": "showCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Show the mouse cursor (default)",
                    "snippet": "showCursor()",
                    "keywords": [],
                    "desc_ja": "マウスカーソルを表示（デフォルト）",
                    "desc_ko": "마우스 커서를 표시 (기본값)"
                },
                {
                    "name": "hideCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Hide the mouse cursor",
                    "snippet": "hideCursor()",
                    "keywords": [],
                    "desc_ja": "マウスカーソルを隠す",
                    "desc_ko": "마우스 커서를 숨김"
                },
                {
                    "name": "setCursor",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Set the mouse cursor shape",
                    "snippet": "setCursor(${1:Cursor::Hand})",
                    "keywords": [],
                    "desc_ja": "マウスカーソルの形状を設定",
                    "desc_ko": "마우스 커서 모양을 설정",
                    "examples": [
                        {
                            "name": "cursorExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "getCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Cursor",
                    "desc": "Get the current mouse cursor shape",
                    "snippet": "getCursor()",
                    "keywords": [],
                    "desc_ja": "現在のマウスカーソル形状を取得",
                    "desc_ko": "현재 마우스 커서 모양을 얻음"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, width, height, pixels, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, int width, int height, const unsigned char* pixels, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)",
                    "snippet": "bindCursorImage(${1:Cursor::Custom0}, ${2:image})",
                    "keywords": [],
                    "desc_ja": "カスタム画像をカーソルスロットにバインド（RGBAピクセルまたはImage）",
                    "desc_ko": "커서 슬롯에 커스텀 이미지를 바인딩 (RGBA 픽셀 또는 Image)",
                    "examples": [
                        {
                            "name": "cursorExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, image, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, const Image& image, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)",
                    "snippet": "bindCursorImage(${1:Cursor::Custom0}, ${2:image})",
                    "keywords": [],
                    "desc_ja": "カスタム画像をカーソルスロットにバインド（RGBAピクセルまたはImage）",
                    "desc_ko": "커서 슬롯에 커스텀 이미지를 바인딩 (RGBA 픽셀 또는 Image)",
                    "examples": [
                        {
                            "name": "cursorExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "unbindCursorImage",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Unbind a custom cursor image, restoring the system default",
                    "snippet": "unbindCursorImage(${1:Cursor::Custom0})",
                    "keywords": [],
                    "desc_ja": "カスタムカーソル画像を解除し、システムデフォルトに戻す",
                    "desc_ko": "커스텀 커서 이미지를 해제하고 시스템 기본값으로 복원"
                },
                {
                    "name": "events",
                    "params": "",
                    "params_typed": "",
                    "return_type": "CoreEvents&",
                    "desc": "Get the global CoreEvents hub holding all framework events (setup, update, draw, keyPressed, mousePressed, etc.); use events().eventName.listen(callback) to subscribe",
                    "snippet": "events()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "eventsExample",
                            "group": "events"
                        },
                        {
                            "name": "clipboardExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "isOverlayHovered",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when an overlay currently has the pointer over it (e.g. cursor over a tcxImGui panel); guard raw mouse input so clicks on UI panels are not also handled by the app",
                    "snippet": "isOverlayHovered()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "isOverlayFocused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when an overlay currently owns keyboard focus (e.g. a text input is active); guard raw key input so typing into a UI field is not also handled by the app",
                    "snippet": "isOverlayFocused()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "ウィンドウと入力",
            "name_ko": "윈도우 & 입력"
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
                    "snippet": "getDeltaTime()",
                    "keywords": [],
                    "desc_ja": "前フレームからの経過秒数",
                    "desc_ko": "이전 프레임으로부터의 경과 시간(초)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "blendingExample",
                            "group": "graphics"
                        },
                        {
                            "name": "polylinesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Current FPS",
                    "snippet": "getFrameRate()",
                    "keywords": [],
                    "desc_ja": "現在のFPS",
                    "desc_ko": "현재 FPS",
                    "examples": [
                        {
                            "name": "fontTategakiExample",
                            "group": "font"
                        },
                        {
                            "name": "fontWrapExample",
                            "group": "font"
                        },
                        {
                            "name": "soundPlayerExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "getFps",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current FPS (alias for getFrameRate)",
                    "snippet": "getFps()",
                    "keywords": [],
                    "desc_ja": "現在のFPSを取得（getFrameRateのエイリアス）",
                    "desc_ko": "현재 FPS를 얻음 (getFrameRate의 별칭)",
                    "examples": [
                        {
                            "name": "bitmapStringExtendedExample",
                            "group": "font"
                        },
                        {
                            "name": "fontPathExample",
                            "group": "font"
                        }
                    ]
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Total frames rendered",
                    "snippet": "getFrameCount()",
                    "keywords": [],
                    "desc_ja": "描画されたフレーム数",
                    "desc_ko": "렌더링된 총 프레임 수"
                },
                {
                    "name": "sleepMillis",
                    "params": "millis",
                    "params_typed": "int millis",
                    "return_type": "void",
                    "desc": "Block the current thread for the given number of milliseconds",
                    "snippet": "sleepMillis(${1:millis})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "sleepMicros",
                    "params": "micros",
                    "params_typed": "int micros",
                    "return_type": "void",
                    "desc": "Block the current thread for the given number of microseconds",
                    "snippet": "sleepMicros(${1:micros})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getUpdateCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Get the number of update() calls since the app started",
                    "snippet": "getUpdateCount()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getDrawCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Get the number of draw() calls since the app started",
                    "snippet": "getDrawCount()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getFpsSettings",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FpsSettings",
                    "desc": "Get the current FPS configuration (update/draw target rates, actual VSync rate, sync flag)",
                    "snippet": "getFpsSettings()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "loopModeExample",
                            "group": "windowing"
                        }
                    ]
                }
            ],
            "name_ja": "時間 - フレーム",
            "name_ko": "시간 - 프레임"
        },
        {
            "name": "Memory",
            "functions": [
                {
                    "name": "getSokolMemoryBytes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Total bytes allocated by sokol libraries",
                    "snippet": "getSokolMemoryBytes()",
                    "keywords": [],
                    "desc_ja": "sokolライブラリの総メモリ使用量（バイト）",
                    "desc_ko": "sokol 라이브러리로부터 할단된 총 바이트"
                },
                {
                    "name": "getSokolMemoryAllocs",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of active allocations in sokol libraries",
                    "snippet": "getSokolMemoryAllocs()",
                    "keywords": [],
                    "desc_ja": "sokolライブラリのアクティブなアロケーション数",
                    "desc_ko": "sokol 라이브러리의 활성 할당 개수"
                },
                {
                    "name": "releaseSglBuffers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Release sokol_gl vertex/command buffers (auto re-allocated on next draw)",
                    "snippet": "releaseSglBuffers()",
                    "keywords": [],
                    "desc_ja": "sokol_glのバッファを解放（次の描画時に自動再確保）",
                    "desc_ko": "sokol_gl의 정점/커맨드 버퍼를 해제 (다음 드로우 시 자동 재할당)"
                },
                {
                    "name": "getMemoryUsage",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get process memory usage in bytes (platform-specific)",
                    "snippet": "getMemoryUsage()",
                    "keywords": [],
                    "desc_ja": "プロセスのメモリ使用量をバイトで取得（プラットフォーム固有）",
                    "desc_ko": "프로세스의 메모리 사용량을 바이트로 얻음 (플랫폼-고유)"
                },
                {
                    "name": "getFboCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active FBO objects",
                    "snippet": "getFboCount()",
                    "keywords": [],
                    "desc_ja": "アクティブなFBOオブジェクト数を取得",
                    "desc_ko": "활성 FBO 객체 개수를 얻음"
                },
                {
                    "name": "getTextureCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active Texture objects",
                    "snippet": "getTextureCount()",
                    "keywords": [],
                    "desc_ja": "アクティブなTextureオブジェクト数を取得",
                    "desc_ko": "활성 Texture 객체 개수를 얻음"
                },
                {
                    "name": "getNodeCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active Node objects in scene graph",
                    "snippet": "getNodeCount()",
                    "keywords": [],
                    "desc_ja": "シーングラフ内のアクティブなNodeオブジェクト数を取得",
                    "desc_ko": "씬 그래프의 활성 Node 객체 개수를 얻음"
                }
            ],
            "name_ja": "メモリ",
            "name_ko": "메모리"
        },
        {
            "name": "Platform",
            "functions": [
                {
                    "name": "Platform::isWeb",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Web (Emscripten / WASM)",
                    "snippet": "Platform::isWeb()",
                    "keywords": [],
                    "desc_ja": "Web (Emscripten / WASM) で true",
                    "desc_ko": "Web (Emscripten / WASM)에서 true"
                },
                {
                    "name": "Platform::isMacOS",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on macOS",
                    "snippet": "Platform::isMacOS()",
                    "keywords": [],
                    "desc_ja": "macOSで true",
                    "desc_ko": "macOS에서 true"
                },
                {
                    "name": "Platform::isIOS",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on iOS",
                    "snippet": "Platform::isIOS()",
                    "keywords": [],
                    "desc_ja": "iOSで true",
                    "desc_ko": "iOS에서 true"
                },
                {
                    "name": "Platform::isWindows",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Windows",
                    "snippet": "Platform::isWindows()",
                    "keywords": [],
                    "desc_ja": "Windowsで true",
                    "desc_ko": "Windows에서 true"
                },
                {
                    "name": "Platform::isAndroid",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Android",
                    "snippet": "Platform::isAndroid()",
                    "keywords": [],
                    "desc_ja": "Androidで true",
                    "desc_ko": "Android에서 true"
                },
                {
                    "name": "Platform::isLinux",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Linux (desktop, excludes Android)",
                    "snippet": "Platform::isLinux()",
                    "keywords": [],
                    "desc_ja": "Linux (デスクトップ、Android除く) で true",
                    "desc_ko": "Linux (데스크톱, Android 제외)에서 true"
                },
                {
                    "name": "Platform::isApple",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on any Apple platform (macOS or iOS)",
                    "snippet": "Platform::isApple()",
                    "keywords": [],
                    "desc_ja": "Apple系 (macOS または iOS) で true",
                    "desc_ko": "Apple 플랫폼 (macOS 또는 iOS)에서 true"
                },
                {
                    "name": "Platform::isMobile",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on mobile (iOS or Android)",
                    "snippet": "Platform::isMobile()",
                    "keywords": [],
                    "desc_ja": "モバイル (iOS または Android) で true",
                    "desc_ko": "모바일 (iOS 또는 Android)에서 true"
                },
                {
                    "name": "Platform::isDesktop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on desktop (macOS, Windows, or Linux)",
                    "snippet": "Platform::isDesktop()",
                    "keywords": [],
                    "desc_ja": "デスクトップ (macOS, Windows, Linux) で true",
                    "desc_ko": "데스크톱 (macOS, Windows, Linux)에서 true"
                },
                {
                    "name": "Platform::name",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "snippet": "Platform::name()",
                    "keywords": [],
                    "desc_ja": "短いプラットフォーム名: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "desc_ko": "짧은 플랫폼 이름: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\""
                },
                {
                    "name": "setImmersiveMode",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Hide system UI for immersive fullscreen. Android: sticky immersive (status + navigation bars). iOS: hides status bar + home indicator. Desktop: no-op",
                    "snippet": "setImmersiveMode(${1:true})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getImmersiveMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Return whether immersive mode is currently enabled",
                    "snippet": "getImmersiveMode()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "captureWindow",
                    "params": "outPixels",
                    "params_typed": "Pixels& outPixels",
                    "return_type": "bool",
                    "desc": "Capture the current window contents into a Pixels object. Returns true on success",
                    "snippet": "captureWindow(${1:outPixels})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getSystemVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get system output volume (0.0-1.0)",
                    "snippet": "getSystemVolume()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "setSystemVolume",
                    "params": "volume",
                    "params_typed": "float volume",
                    "return_type": "void",
                    "desc": "Set system output volume (0.0-1.0). iOS: not supported by the OS (logs a warning)",
                    "snippet": "setSystemVolume(${1:volume})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getSystemBrightness",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get screen brightness (0.0-1.0). iOS: linear. Android: gamma-corrected (perceptual). Desktop: returns -1 (not supported)",
                    "snippet": "getSystemBrightness()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "setSystemBrightness",
                    "params": "brightness",
                    "params_typed": "float brightness",
                    "return_type": "void",
                    "desc": "Set screen brightness (0.0-1.0). Meaning of the value differs by platform (iOS linear, Android perceptual). Desktop: not supported",
                    "snippet": "setSystemBrightness(${1:brightness})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getThermalState",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ThermalState",
                    "desc": "Get the coarse-grained device thermal state (Nominal / Fair / Serious / Critical)",
                    "snippet": "getThermalState()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getThermalTemperature",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get device temperature in Celsius, or -1 if unavailable",
                    "snippet": "getThermalTemperature()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getBatteryLevel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get battery charge level (0.0-1.0), or -1 if unavailable (e.g. desktop without a battery)",
                    "snippet": "getBatteryLevel()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "isBatteryCharging",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Return true if the battery is currently charging",
                    "snippet": "isBatteryCharging()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getAccelerometer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get accelerometer reading in g-force (1.0 = Earth gravity). Mobile only; desktop returns zero",
                    "snippet": "getAccelerometer()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getGyroscope",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get gyroscope angular velocity in rad/s. Mobile only; desktop returns zero",
                    "snippet": "getGyroscope()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getDeviceOrientation",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Quaternion",
                    "desc": "Get the fused device attitude (accelerometer + gyroscope + magnetometer) as a quaternion. Mobile only",
                    "snippet": "getDeviceOrientation()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getCompassHeading",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get compass heading in radians (0 = north, clockwise). Mobile only",
                    "snippet": "getCompassHeading()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "isProximityClose",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Return true when the proximity sensor detects a nearby object (e.g. phone held to the ear)",
                    "snippet": "isProximityClose()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getLocation",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Location",
                    "desc": "Get the most recent GPS / WiFi location fix. Starts location updates on the first call",
                    "snippet": "getLocation()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                }
            ],
            "name_ja": "プラットフォーム",
            "name_ko": "플랫폼"
        },
        {
            "name": "Graphics Backend",
            "functions": [
                {
                    "name": "GraphicsBackend::isOpenGL",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on OpenGL (core or GLES3)",
                    "snippet": "GraphicsBackend::isOpenGL()",
                    "keywords": [],
                    "desc_ja": "OpenGL (coreまたはGLES3) で動作中なら true",
                    "desc_ko": "OpenGL (core 또는 GLES3)에서 실행 중이면 true"
                },
                {
                    "name": "GraphicsBackend::isMetal",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Apple Metal",
                    "snippet": "GraphicsBackend::isMetal()",
                    "keywords": [],
                    "desc_ja": "Apple Metalで動作中なら true",
                    "desc_ko": "Apple Metal에서 실행 중이면 true"
                },
                {
                    "name": "GraphicsBackend::isD3D11",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Direct3D 11",
                    "snippet": "GraphicsBackend::isD3D11()",
                    "keywords": [],
                    "desc_ja": "Direct3D 11で動作中なら true",
                    "desc_ko": "Direct3D 11에서 실행 중이면 true"
                },
                {
                    "name": "GraphicsBackend::isWebGPU",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGPU",
                    "snippet": "GraphicsBackend::isWebGPU()",
                    "keywords": [],
                    "desc_ja": "WebGPUで動作中なら true",
                    "desc_ko": "WebGPU에서 실행 중이면 true"
                },
                {
                    "name": "GraphicsBackend::isWebGL2",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)",
                    "snippet": "GraphicsBackend::isWebGL2()",
                    "keywords": [],
                    "desc_ja": "WebGL2 (EmscriptenのGLES3) で動作中なら true",
                    "desc_ko": "WebGL2 (Emscripten의 GLES3)에서 실행 중이면 true"
                },
                {
                    "name": "GraphicsBackend::isVulkan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Vulkan",
                    "snippet": "GraphicsBackend::isVulkan()",
                    "keywords": [],
                    "desc_ja": "Vulkanで動作中なら true",
                    "desc_ko": "Vulkan에서 실행 중이면 true"
                },
                {
                    "name": "GraphicsBackend::name",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short backend name: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "snippet": "GraphicsBackend::name()",
                    "keywords": [],
                    "desc_ja": "短いバックエンド名: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "desc_ko": "짧은 백엔드 이름: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\""
                }
            ],
            "name_ja": "グラフィックスバックエンド",
            "name_ko": "그래픽스 백엔드"
        },
        {
            "name": "Build Info",
            "functions": [
                {
                    "name": "BuildInfo::date",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time, CMake configure time)",
                    "snippet": "BuildInfo::date()",
                    "keywords": [],
                    "desc_ja": "ビルド日 \"YYYY-MM-DD\" 形式 (ローカル時刻、CMake configure 時点)",
                    "desc_ko": "빌드 날짜 \"YYYY-MM-DD\" 형식 (로컬 시간, CMake 구성 시점)"
                },
                {
                    "name": "BuildInfo::time",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build time in \"HH:MM:SS\" form (local time)",
                    "snippet": "BuildInfo::time()",
                    "keywords": [],
                    "desc_ja": "ビルド時刻 \"HH:MM:SS\" 形式 (ローカル時刻)",
                    "desc_ko": "빌드 시간 \"HH:MM:SS\" 형식 (로컬 시간)"
                },
                {
                    "name": "BuildInfo::dateTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)",
                    "snippet": "BuildInfo::dateTime()",
                    "keywords": [],
                    "desc_ja": "ビルド日時 \"YYYY-MM-DD HH:MM:SS\" 形式 (ローカル時刻)",
                    "desc_ko": "빌드 날짜와 시간 \"YYYY-MM-DD HH:MM:SS\" 형식 (로컬 시간)"
                },
                {
                    "name": "BuildInfo::timestamp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int64_t",
                    "desc": "Build timestamp as Unix seconds (UTC)",
                    "snippet": "BuildInfo::timestamp()",
                    "keywords": [],
                    "desc_ja": "ビルド時刻のUnix秒 (UTC)",
                    "desc_ko": "빌드 타임스탬프 Unix 초 (UTC)"
                },
                {
                    "name": "BuildInfo::year",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build year (e.g. 2026)",
                    "snippet": "BuildInfo::year()",
                    "keywords": [],
                    "desc_ja": "ビルド年 (例: 2026)",
                    "desc_ko": "빌드 연도 (예: 2026)"
                },
                {
                    "name": "BuildInfo::month",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build month (1-12)",
                    "snippet": "BuildInfo::month()",
                    "keywords": [],
                    "desc_ja": "ビルド月 (1-12)",
                    "desc_ko": "빌드 월 (1-12)"
                },
                {
                    "name": "BuildInfo::day",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build day of month (1-31)",
                    "snippet": "BuildInfo::day()",
                    "keywords": [],
                    "desc_ja": "ビルド日 (1-31)",
                    "desc_ko": "빌드 일 (1-31)"
                },
                {
                    "name": "BuildInfo::hour",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build hour (0-23)",
                    "snippet": "BuildInfo::hour()",
                    "keywords": [],
                    "desc_ja": "ビルド時 (0-23)",
                    "desc_ko": "빌드 시 (0-23)"
                },
                {
                    "name": "BuildInfo::minute",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build minute (0-59)",
                    "snippet": "BuildInfo::minute()",
                    "keywords": [],
                    "desc_ja": "ビルド分 (0-59)",
                    "desc_ko": "빌드 분 (0-59)"
                },
                {
                    "name": "BuildInfo::second",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build second (0-59)",
                    "snippet": "BuildInfo::second()",
                    "keywords": [],
                    "desc_ja": "ビルド秒 (0-59)",
                    "desc_ko": "빌드 초 (0-59)"
                }
            ],
            "name_ja": "ビルド情報",
            "name_ko": "빌드 정보"
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
                    "snippet": "getElapsedTimef()",
                    "keywords": [],
                    "desc_ja": "経過秒数（float）",
                    "desc_ko": "경과 시간(초, float)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        }
                    ]
                },
                {
                    "name": "getElapsedTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Elapsed seconds (alias for getElapsedTimef)",
                    "snippet": "getElapsedTime()",
                    "keywords": [],
                    "desc_ja": "経過秒数（getElapsedTimefのエイリアス）",
                    "desc_ko": "경과 시간(초, getElapsedTimef의 별칭)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed milliseconds (int64)",
                    "snippet": "getElapsedTimeMillis()",
                    "keywords": [],
                    "desc_ja": "経過ミリ秒（int64）",
                    "desc_ko": "경과 시간(밀리초, int64)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed microseconds (int64)",
                    "snippet": "getElapsedTimeMicros()",
                    "keywords": [],
                    "desc_ja": "経過マイクロ秒（int64）",
                    "desc_ko": "경과 시간(마이크로초, int64)"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset elapsed time",
                    "snippet": "resetElapsedTimeCounter()",
                    "keywords": [],
                    "desc_ja": "経過時間をリセット",
                    "desc_ko": "경과 시간을 초기화"
                }
            ],
            "name_ja": "時間 - 経過",
            "name_ko": "시간 - 경과"
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
                    "snippet": "getSystemTimeMillis()",
                    "keywords": [],
                    "desc_ja": "Unix時間（ミリ秒）",
                    "desc_ko": "Unix 시간(밀리초)"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in microseconds",
                    "snippet": "getSystemTimeMicros()",
                    "keywords": [],
                    "desc_ja": "Unix時間（マイクロ秒）",
                    "desc_ko": "Unix 시간(마이크로초)"
                },
                {
                    "name": "getUnixTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Current Unix timestamp in seconds",
                    "snippet": "getUnixTime()",
                    "keywords": [],
                    "desc_ja": "現在のUnixタイムスタンプ（秒）",
                    "desc_ko": "현재 Unix 타임스탬프(초)"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()",
                    "keywords": [],
                    "desc_ja": "フォーマット済みタイムスタンプ",
                    "desc_ko": "포맷된 타임스탬프",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        },
                        {
                            "name": "fileExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
                    "params_typed": "const string& format",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "snippet": "getTimestampString()",
                    "keywords": [],
                    "desc_ja": "フォーマット済みタイムスタンプ",
                    "desc_ko": "포맷된 타임스탬프",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        },
                        {
                            "name": "fileExample",
                            "group": "utils"
                        }
                    ]
                }
            ],
            "name_ja": "時間 - システム",
            "name_ko": "시간 - 시스템"
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
                    "snippet": "getSeconds()",
                    "keywords": [],
                    "desc_ja": "現在の秒 (0-59)",
                    "desc_ko": "현재 초 (0-59)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current minutes (0-59)",
                    "snippet": "getMinutes()",
                    "keywords": [],
                    "desc_ja": "現在の分 (0-59)",
                    "desc_ko": "현재 분 (0-59)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getHours",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current hours (0-23)",
                    "snippet": "getHours()",
                    "keywords": [],
                    "desc_ja": "現在の時 (0-23)",
                    "desc_ko": "현재 시 (0-23)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getYear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current year",
                    "snippet": "getYear()",
                    "keywords": [],
                    "desc_ja": "現在の年",
                    "desc_ko": "현재 연도",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current month (1-12)",
                    "snippet": "getMonth()",
                    "keywords": [],
                    "desc_ja": "現在の月 (1-12)",
                    "desc_ko": "현재 월 (1-12)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getDay",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current day (1-31)",
                    "snippet": "getDay()",
                    "keywords": [],
                    "desc_ja": "現在の日 (1-31)",
                    "desc_ko": "현재 일 (1-31)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getWeekday",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Weekday (0=Sun, 6=Sat)",
                    "snippet": "getWeekday()",
                    "keywords": [],
                    "desc_ja": "曜日 (0=日, 6=土)",
                    "desc_ko": "요일 (0=일, 6=토)",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                }
            ],
            "name_ja": "時間 - 現在",
            "name_ko": "시간 - 현재"
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
                    "snippet": "random()",
                    "keywords": [],
                    "desc_ja": "乱数",
                    "desc_ko": "난수",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "random",
                    "params": "max",
                    "params_typed": "float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()",
                    "keywords": [],
                    "desc_ja": "乱数",
                    "desc_ko": "난수",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "params_typed": "float min, float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "snippet": "random()",
                    "keywords": [],
                    "desc_ja": "乱数",
                    "desc_ko": "난수",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "randomInt",
                    "params": "max",
                    "params_typed": "int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "snippet": "randomInt(${1:max})",
                    "keywords": [],
                    "desc_ja": "整数の乱数",
                    "desc_ko": "정수 난수"
                },
                {
                    "name": "randomInt",
                    "params": "min, max",
                    "params_typed": "int min, int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "snippet": "randomInt(${1:max})",
                    "keywords": [],
                    "desc_ja": "整数の乱数",
                    "desc_ko": "정수 난수"
                },
                {
                    "name": "randomSeed",
                    "params": "seed",
                    "params_typed": "unsigned int seed",
                    "return_type": "void",
                    "desc": "Set random seed",
                    "snippet": "randomSeed(${1:seed})",
                    "keywords": [],
                    "desc_ja": "乱数シードを設定",
                    "desc_ko": "난수 시드를 설정"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})",
                    "keywords": [
                        "perlin",
                        "simplex",
                        "random",
                        "noise",
                        "procedural"
                    ],
                    "desc_ja": "パーリンノイズ",
                    "desc_ko": "Perlin 노이즈",
                    "examples": [
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})",
                    "keywords": [
                        "perlin",
                        "simplex",
                        "random",
                        "noise",
                        "procedural"
                    ],
                    "desc_ja": "パーリンノイズ",
                    "desc_ko": "Perlin 노이즈",
                    "examples": [
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "snippet": "noise(${1:x})",
                    "keywords": [
                        "perlin",
                        "simplex",
                        "random",
                        "noise",
                        "procedural"
                    ],
                    "desc_ja": "パーリンノイズ",
                    "desc_ko": "Perlin 노이즈",
                    "examples": [
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "signedNoise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})",
                    "keywords": [],
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})",
                    "keywords": [],
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})",
                    "keywords": [],
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z, w",
                    "params_typed": "float x, float y, float z, float w",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "snippet": "signedNoise(${1:x})",
                    "keywords": [],
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)"
                },
                {
                    "name": "fbm",
                    "params": "x, y, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "フラクタルノイズ",
                    "desc_ko": "Fractal Brownian Motion 노이즈",
                    "examples": [
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "fbm",
                    "params": "x, y, z, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, float z, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "snippet": "fbm(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "フラクタルノイズ",
                    "desc_ko": "Fractal Brownian Motion 노이즈",
                    "examples": [
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        }
                    ]
                }
            ],
            "name_ja": "数学 - 乱数とノイズ",
            "name_ko": "수학 - 난수 & 노이즈"
        },
        {
            "name": "Math - Interpolation",
            "functions": [
                {
                    "name": "lerp",
                    "params": "a, b, t",
                    "params_typed": "float a, float b, float t",
                    "return_type": "float",
                    "desc": "Linear interpolation",
                    "snippet": "lerp(${1:a}, ${2:b}, ${3:t})",
                    "keywords": [],
                    "desc_ja": "線形補間",
                    "desc_ko": "선형 보간",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "clamp",
                    "params": "v, min, max",
                    "params_typed": "float v, float min, float max",
                    "return_type": "float",
                    "desc": "Clamp value to range",
                    "snippet": "clamp(${1:v}, ${2:min}, ${3:max})",
                    "keywords": [],
                    "desc_ja": "値を範囲に制限",
                    "desc_ko": "값을 범위 내로 제한",
                    "examples": [
                        {
                            "name": "textureExample",
                            "group": "graphics"
                        },
                        {
                            "name": "uiExample",
                            "group": "node"
                        },
                        {
                            "name": "systemInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "remap",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "params_typed": "float v, float inMin, float inMax, float outMin, float outMax",
                    "return_type": "float",
                    "desc": "Remap value from one range to another",
                    "snippet": "remap(${1:v}, ${2:inMin}, ${3:inMax}, ${4:outMin}, ${5:outMax})",
                    "keywords": [],
                    "desc_ja": "値を範囲間でリマッピング",
                    "desc_ko": "값을 한 범위에서 다른 범위로 리매핑"
                }
            ],
            "name_ja": "数学 - 補間",
            "name_ko": "수학 - 보간"
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
                    "snippet": "sin(${1:x})",
                    "keywords": [],
                    "desc_ja": "正弦",
                    "desc_ko": "사인",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "cos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Cosine",
                    "snippet": "cos(${1:x})",
                    "keywords": [],
                    "desc_ja": "余弦",
                    "desc_ko": "코사인",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        },
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "tan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Tangent",
                    "snippet": "tan(${1:x})",
                    "keywords": [],
                    "desc_ja": "正接",
                    "desc_ko": "탄젠트"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc sine",
                    "snippet": "asin(${1:x})",
                    "keywords": [],
                    "desc_ja": "逆正弦",
                    "desc_ko": "역-사인"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc cosine",
                    "snippet": "acos(${1:x})",
                    "keywords": [],
                    "desc_ja": "逆余弦",
                    "desc_ko": "역-코사인"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc tangent",
                    "snippet": "atan(${1:x})",
                    "keywords": [],
                    "desc_ja": "逆正接",
                    "desc_ko": "역-탄젠트"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "params_typed": "float y, float x",
                    "return_type": "float",
                    "desc": "Arc tangent of y/x",
                    "snippet": "atan2(${1:y}, ${2:x})",
                    "keywords": [],
                    "desc_ja": "y/xの逆正接",
                    "desc_ko": "y/x의 역-탄젠트"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "float",
                    "desc": "Degrees to radians",
                    "snippet": "deg2rad(${1:degrees})",
                    "keywords": [],
                    "desc_ja": "度からラジアンへ",
                    "desc_ko": "도(degree)를 라디안으로 변환"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "float",
                    "desc": "Radians to degrees",
                    "snippet": "rad2deg(${1:radians})",
                    "keywords": [],
                    "desc_ja": "ラジアンから度へ",
                    "desc_ko": "라디안을 도(degree)로 변환",
                    "examples": [
                        {
                            "name": "fontPathExample",
                            "group": "font"
                        }
                    ]
                }
            ],
            "name_ja": "数学 - 三角関数",
            "name_ko": "수학 - 삼각함수"
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
                    "snippet": "abs(${1:x})",
                    "keywords": [],
                    "desc_ja": "絶対値",
                    "desc_ko": "절댓값",
                    "examples": [
                        {
                            "name": "imageOpsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "micInputExample",
                            "group": "sound"
                        },
                        {
                            "name": "soundPlayerFFTExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square root",
                    "snippet": "sqrt(${1:x})",
                    "keywords": [],
                    "desc_ja": "平方根",
                    "desc_ko": "제곱근",
                    "examples": [
                        {
                            "name": "imageOpsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "sq",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square (x*x)",
                    "snippet": "sq(${1:x})",
                    "keywords": [],
                    "desc_ja": "二乗 (x*x)",
                    "desc_ko": "제곱 (x*x)"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Power (x^y)",
                    "snippet": "pow(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "累乗 (x^y)",
                    "desc_ko": "거듭제곱 (x^y)",
                    "examples": [
                        {
                            "name": "chipSoundExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "log",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Natural logarithm",
                    "snippet": "log(${1:x})",
                    "keywords": [],
                    "desc_ja": "自然対数",
                    "desc_ko": "자연로그"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Exponential (e^x)",
                    "snippet": "exp(${1:x})",
                    "keywords": [],
                    "desc_ja": "指数関数 (e^x)",
                    "desc_ko": "지수함수 (e^x)"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Minimum",
                    "snippet": "min(${1:a}, ${2:b})",
                    "keywords": [],
                    "desc_ja": "最小値",
                    "desc_ko": "최솟값",
                    "examples": [
                        {
                            "name": "soundPlayerFFTExample",
                            "group": "sound"
                        },
                        {
                            "name": "imageOpsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Maximum",
                    "snippet": "max(${1:a}, ${2:b})",
                    "keywords": [],
                    "desc_ja": "最大値",
                    "desc_ko": "최댓값",
                    "examples": [
                        {
                            "name": "soundPlayerFFTExample",
                            "group": "sound"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "floor",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round down",
                    "snippet": "floor(${1:x})",
                    "keywords": [],
                    "desc_ja": "切り捨て",
                    "desc_ko": "내림",
                    "examples": [
                        {
                            "name": "textureExample",
                            "group": "graphics"
                        },
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round up",
                    "snippet": "ceil(${1:x})",
                    "keywords": [],
                    "desc_ja": "切り上げ",
                    "desc_ko": "올림"
                },
                {
                    "name": "round",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round to nearest",
                    "snippet": "round(${1:x})",
                    "keywords": [],
                    "desc_ja": "四捨五入",
                    "desc_ko": "반올림"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Floating-point modulo",
                    "snippet": "fmod(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "浮動小数点剰余",
                    "desc_ko": "부동소수점 나머지",
                    "examples": [
                        {
                            "name": "scrollContainerExample",
                            "group": "node"
                        },
                        {
                            "name": "noiseField2dExample",
                            "group": "math"
                        },
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "sign",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sign (-1, 0, 1)",
                    "snippet": "sign(${1:x})",
                    "keywords": [],
                    "desc_ja": "符号 (-1, 0, 1)",
                    "desc_ko": "부호 (-1, 0, 1)"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Fractional part",
                    "snippet": "fract(${1:x})",
                    "keywords": [],
                    "desc_ja": "小数部",
                    "desc_ko": "소수부"
                },
                {
                    "name": "wrap",
                    "params": "value, min, max",
                    "params_typed": "float value, float min, float max",
                    "return_type": "float",
                    "desc": "Wrap value within range [min, max)",
                    "snippet": "wrap(${1:value}, ${2:min}, ${3:max})",
                    "keywords": [],
                    "desc_ja": "値を範囲内にラップ [min, max)",
                    "desc_ko": "값을 [min, max) 범위 안으로 랩핑"
                },
                {
                    "name": "angleDifference",
                    "params": "angle1, angle2",
                    "params_typed": "float angle1, float angle2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in radians [-TAU/2, TAU/2]",
                    "snippet": "angleDifference(${1:angle1}, ${2:angle2})",
                    "keywords": [],
                    "desc_ja": "最短角度差（ラジアン）[-TAU/2, TAU/2]",
                    "desc_ko": "최단 각도 차이(라디안) [-TAU/2, TAU/2]"
                },
                {
                    "name": "angleDifferenceDeg",
                    "params": "deg1, deg2",
                    "params_typed": "float deg1, float deg2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in degrees [-180, 180]",
                    "snippet": "angleDifferenceDeg(${1:deg1}, ${2:deg2})",
                    "keywords": [],
                    "desc_ja": "最短角度差（度）[-180, 180]",
                    "desc_ko": "최단 각도 차이(도) [-180, 180]"
                },
                {
                    "name": "applyWindow",
                    "params": "signal, type",
                    "params_typed": "vector<float>& signal, WindowType type",
                    "return_type": "void",
                    "desc": "Apply a window function (in place) to a signal to reduce spectral leakage before FFT",
                    "snippet": "applyWindow(${1:signal}, ${2:type})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "applyWindow",
                    "params": "signal, type",
                    "params_typed": "vector<complex<float>>& signal, WindowType type",
                    "return_type": "void",
                    "desc": "Apply a window function (in place) to a signal to reduce spectral leakage before FFT",
                    "snippet": "applyWindow(${1:signal}, ${2:type})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "isPowerOfTwo",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "bool",
                    "desc": "Return true if n is a positive power of two",
                    "snippet": "isPowerOfTwo(${1:n})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "nextPowerOfTwo",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "int",
                    "desc": "Return the smallest power of two greater than or equal to n",
                    "snippet": "nextPowerOfTwo(${1:n})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "fft",
                    "params": "data",
                    "params_typed": "vector<complex<float>>& data",
                    "return_type": "void",
                    "desc": "In-place forward FFT (Cooley-Tukey radix-2); the data size must be a power of two",
                    "snippet": "fft(${1:data})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "ifft",
                    "params": "data",
                    "params_typed": "vector<complex<float>>& data",
                    "return_type": "void",
                    "desc": "In-place inverse FFT; the data size must be a power of two",
                    "snippet": "ifft(${1:data})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toComplex",
                    "params": "real",
                    "params_typed": "const vector<float>& real",
                    "return_type": "vector<complex<float>>",
                    "desc": "Convert a real-valued signal into a complex array with zero imaginary parts",
                    "snippet": "toComplex(${1:real})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "fftReal",
                    "params": "signal",
                    "params_typed": "const vector<float>& signal",
                    "return_type": "vector<complex<float>>",
                    "desc": "Compute the FFT of a real-valued signal, optionally applying a window function first",
                    "snippet": "fftReal(${1:signal})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "micInputExample",
                            "group": "sound"
                        },
                        {
                            "name": "soundPlayerFFTExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "fftReal",
                    "params": "signal, window",
                    "params_typed": "const vector<float>& signal, WindowType window",
                    "return_type": "vector<complex<float>>",
                    "desc": "Compute the FFT of a real-valued signal, optionally applying a window function first",
                    "snippet": "fftReal(${1:signal})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "micInputExample",
                            "group": "sound"
                        },
                        {
                            "name": "soundPlayerFFTExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "fftMagnitude",
                    "params": "spectrum",
                    "params_typed": "const vector<complex<float>>& spectrum",
                    "return_type": "vector<float>",
                    "desc": "Return the magnitude (amplitude) of each bin in a spectrum",
                    "snippet": "fftMagnitude(${1:spectrum})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "fftMagnitudeDb",
                    "params": "spectrum, minDb",
                    "params_typed": "const vector<complex<float>>& spectrum, float minDb = -100.0f",
                    "return_type": "vector<float>",
                    "desc": "Return the magnitude of each bin in decibels, clamped to minDb",
                    "snippet": "fftMagnitudeDb(${1:spectrum})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "fftPhase",
                    "params": "spectrum",
                    "params_typed": "const vector<complex<float>>& spectrum",
                    "return_type": "vector<float>",
                    "desc": "Return the phase angle (radians) of each bin in a spectrum",
                    "snippet": "fftPhase(${1:spectrum})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "fftPower",
                    "params": "spectrum",
                    "params_typed": "const vector<complex<float>>& spectrum",
                    "return_type": "vector<float>",
                    "desc": "Return the power spectrum (magnitude squared) of each bin",
                    "snippet": "fftPower(${1:spectrum})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "binToFrequency",
                    "params": "bin, fftSize, sampleRate",
                    "params_typed": "int bin, int fftSize, int sampleRate",
                    "return_type": "float",
                    "desc": "Convert an FFT bin index to its frequency in Hz",
                    "snippet": "binToFrequency(${1:bin}, ${2:fftSize}, ${3:sampleRate})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "frequencyToBin",
                    "params": "freq, fftSize, sampleRate",
                    "params_typed": "float freq, int fftSize, int sampleRate",
                    "return_type": "int",
                    "desc": "Convert a frequency in Hz to the nearest FFT bin index",
                    "snippet": "frequencyToBin(${1:freq}, ${2:fftSize}, ${3:sampleRate})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "windowFunction",
                    "params": "type, i, n",
                    "params_typed": "WindowType type, int i, int n",
                    "return_type": "float",
                    "desc": "Return the window coefficient for sample i of n for the given window type",
                    "snippet": "windowFunction(${1:type}, ${2:i}, ${3:n})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "数学 - 一般",
            "name_ko": "수학 - 일반"
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
                    "snippet": "dist(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "2点間の距離",
                    "desc_ko": "두 점 사이의 거리"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Squared distance",
                    "snippet": "distSquared(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})",
                    "keywords": [],
                    "desc_ja": "距離の二乗",
                    "desc_ko": "거리의 제곱"
                }
            ],
            "name_ja": "数学 - 幾何",
            "name_ko": "수학 - 기하학"
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
                    "snippet": "setWindowTitle(${1:\"title\"})",
                    "keywords": [],
                    "desc_ja": "ウィンドウのタイトルを設定",
                    "desc_ko": "윈도우 제목을 설정"
                },
                {
                    "name": "setWindowSize",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Set window size",
                    "snippet": "setWindowSize(${1:800}, ${2:600})",
                    "keywords": [],
                    "desc_ja": "ウィンドウのサイズを設定",
                    "desc_ko": "윈도우 크기를 설정"
                },
                {
                    "name": "getWindowPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "IVec2",
                    "desc": "Get window position in screen coordinates (top-left origin). macOS/Windows only; other platforms return (-1, -1)",
                    "snippet": "getWindowPosition()",
                    "keywords": [],
                    "desc_ja": "スクリーン座標でのウィンドウ位置を取得（左上原点）。macOS/Windowsのみ対応、他は(-1, -1)を返す",
                    "desc_ko": "윈도우 위치를 스크린 좌표(좌상단 원점)로 얻음. macOS/Windows만 지원, 그 외 플랫폼은 (-1, -1) 반환"
                },
                {
                    "name": "setWindowPosition",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "void",
                    "desc": "Set window position in screen coordinates (top-left origin). macOS/Windows only; no-op on other platforms",
                    "snippet": "setWindowPosition(${1:100}, ${2:100})",
                    "keywords": [],
                    "desc_ja": "スクリーン座標でウィンドウ位置を設定（左上原点）。macOS/Windowsのみ対応、他はno-op",
                    "desc_ko": "윈도우 위치를 스크린 좌표(좌상단 원점)로 설정. macOS/Windows만 지원, 그 외 플랫폼은 동작하지 않음"
                },
                {
                    "name": "toggleFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle fullscreen mode",
                    "snippet": "toggleFullscreen()",
                    "keywords": [],
                    "desc_ja": "フルスクリーンを切り替え",
                    "desc_ko": "전체 화면 모드 토글",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setClipboardString",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "void",
                    "desc": "Copy text to clipboard",
                    "snippet": "setClipboardString(${1:\"text\"})",
                    "keywords": [],
                    "desc_ja": "クリップボードにコピー",
                    "desc_ko": "텍스트를 클립보드에 복사",
                    "examples": [
                        {
                            "name": "clipboardExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getClipboardString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get text from clipboard",
                    "snippet": "getClipboardString()",
                    "keywords": [],
                    "desc_ja": "クリップボードから取得",
                    "desc_ko": "클립보드에서 텍스트를 얻음",
                    "examples": [
                        {
                            "name": "clipboardExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getDpiScale",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get display DPI scale factor (e.g. 2.0 for Retina)",
                    "snippet": "getDpiScale()",
                    "keywords": [],
                    "desc_ja": "ディスプレイのDPIスケール係数を取得（Retinaなら2.0等）",
                    "desc_ko": "디스플레이 DPI 스케일 계수를 얻음 (Retina는 2.0 등)"
                },
                {
                    "name": "getFramebufferWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get framebuffer width in pixels (window width * DPI scale)",
                    "snippet": "getFramebufferWidth()",
                    "keywords": [],
                    "desc_ja": "フレームバッファ幅をピクセルで取得（ウィンドウ幅 × DPIスケール）",
                    "desc_ko": "프레임버퍼 너비를 픽셀로 얻음 (윈도우 너비 × DPI 스케일)"
                },
                {
                    "name": "getFramebufferHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get framebuffer height in pixels (window height * DPI scale)",
                    "snippet": "getFramebufferHeight()",
                    "keywords": [],
                    "desc_ja": "フレームバッファ高さをピクセルで取得（ウィンドウ高さ × DPIスケール）",
                    "desc_ko": "프레임버퍼 높이를 픽셀로 얻음 (윈도우 높이 × DPI 스케일)"
                },
                {
                    "name": "getAspectRatio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get window aspect ratio (width / height)",
                    "snippet": "getAspectRatio()",
                    "keywords": [],
                    "desc_ja": "ウィンドウのアスペクト比を取得（幅 / 高さ）",
                    "desc_ko": "윈도우 종횡비를 얻음 (너비 / 높이)"
                },
                {
                    "name": "setOrientation",
                    "params": "mask",
                    "params_typed": "Orientation mask",
                    "return_type": "void",
                    "desc": "Set allowed screen orientations (mobile). Values: Orientation::Portrait, Landscape, All",
                    "snippet": "setOrientation(${1:Orientation::All})",
                    "keywords": [],
                    "desc_ja": "画面の向きを設定（モバイル用）。Orientation::Portrait, Landscape, All",
                    "desc_ko": "허용되는 화면 방향을 설정 (모바일). 값: Orientation::Portrait, Landscape, All"
                },
                {
                    "name": "setKeepScreenOn",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Prevent display sleep / auto-lock while the app is running. Supported: Android, iOS, macOS, Windows. Linux / Web: no-op",
                    "snippet": "setKeepScreenOn(${1:true})",
                    "keywords": [],
                    "desc_ja": "アプリ実行中に画面スリープ/自動ロックを抑止。対応: Android, iOS, macOS, Windows。Linux / Web は no-op",
                    "desc_ko": "앱 실행 중 화면 절전/자동 잠금을 방지. 지원: Android, iOS, macOS, Windows. Linux / Web는 동작하지 않음"
                },
                {
                    "name": "getKeepScreenOn",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check whether keep-screen-on is currently enabled",
                    "snippet": "getKeepScreenOn()",
                    "keywords": [],
                    "desc_ja": "現在 keep-screen-on が有効かどうかを取得",
                    "desc_ko": "현재 keep-screen-on이 활성화되어 있는지 확인"
                },
                {
                    "name": "setIndependentFps",
                    "params": "updateFps, drawFps",
                    "params_typed": "float updateFps, float drawFps",
                    "return_type": "void",
                    "desc": "Set independent update and draw frame rates",
                    "snippet": "setIndependentFps(${1:60}, ${2:30})",
                    "keywords": [],
                    "desc_ja": "updateとdrawのフレームレートを個別に設定",
                    "desc_ko": "update와 draw의 프레임레이트를 독립적으로 설정",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "loopModeExample",
                            "group": "windowing"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "grabScreen",
                    "params": "outPixels",
                    "params_typed": "Pixels& outPixels",
                    "return_type": "bool",
                    "desc": "Capture current screen to Pixels",
                    "snippet": "grabScreen(${1:pixels})",
                    "keywords": [],
                    "desc_ja": "現在の画面をPixelsにキャプチャ",
                    "desc_ko": "현재 화면을 Pixels에 캡처"
                },
                {
                    "name": "saveScreenshot",
                    "params": "path",
                    "params_typed": "const std::filesystem::path& path",
                    "return_type": "bool",
                    "desc": "Save a screenshot of the rendered frame (png/jpg/bmp). Safe to call from anywhere; capture is deferred to after present(). Returns true when the destination was prepared and the capture queued (parent dir created/writable), not that the file is already written.",
                    "snippet": "saveScreenshot(${1:\"shot.png\"})",
                    "keywords": [],
                    "desc_ja": "描画済みフレームのスクショを保存（png/jpg/bmp）。どこから呼んでもよく、キャプチャはpresent()後に遅延実行。戻り値trueは「保存先を準備しキューに積めた（親フォルダ生成・書き込み可）」の意味で、ファイル書き込み完了ではない",
                    "desc_ko": "렌더링된 프레임의 스크린샷 저장(png/jpg/bmp). 어디서든 호출 가능하며 캡처는 present() 이후로 지연. 반환값 true는 '대상 준비 및 캡처 큐 등록 성공(상위 폴더 생성·쓰기 가능)'을 의미하며 파일 기록 완료가 아님"
                },
                {
                    "name": "startRecording",
                    "params": "path, settings",
                    "params_typed": "const string& path, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Start recording the window to a video file (native encoder, no ffmpeg)",
                    "snippet": "startRecording(${1:\"out.mp4\"})",
                    "keywords": [],
                    "desc_ja": "ウィンドウを動画ファイルに録画開始（ネイティブエンコーダ、ffmpeg不要）",
                    "desc_ko": "윈도우를 동영상 파일로 녹화 시작 (네이티브 인코더, ffmpeg 불필요)"
                },
                {
                    "name": "stopRecording",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop the current recording and finalize the file",
                    "snippet": "stopRecording()",
                    "keywords": [],
                    "desc_ja": "録画を停止してファイルを確定",
                    "desc_ko": "녹화를 중지하고 파일을 마무리"
                },
                {
                    "name": "isRecording",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check whether a recording is in progress",
                    "snippet": "isRecording()",
                    "keywords": [],
                    "desc_ja": "録画中かどうか確認",
                    "desc_ko": "녹화 중인지 확인"
                },
                {
                    "name": "recordingFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of frames captured so far in the current recording",
                    "snippet": "recordingFrameCount()",
                    "keywords": [],
                    "desc_ja": "現在の録画でこれまでにキャプチャしたフレーム数",
                    "desc_ko": "현재 녹화에서 지금까지 캡처한 프레임 수"
                },
                {
                    "name": "recordingPath",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const string&",
                    "desc": "Output file path of the current recording",
                    "snippet": "recordingPath()",
                    "keywords": [],
                    "desc_ja": "現在の録画の出力ファイルパス",
                    "desc_ko": "현재 녹화의 출력 파일 경로"
                },
                {
                    "name": "isFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if window is fullscreen",
                    "snippet": "isFullscreen()",
                    "keywords": [],
                    "desc_ja": "フルスクリーンかどうか確認",
                    "desc_ko": "윈도우가 전체 화면인지 확인"
                },
                {
                    "name": "setFullscreen",
                    "params": "fullscreen",
                    "params_typed": "bool fullscreen",
                    "return_type": "void",
                    "desc": "Set fullscreen mode",
                    "snippet": "setFullscreen(${1:true})",
                    "keywords": [],
                    "desc_ja": "フルスクリーンを設定",
                    "desc_ko": "전체 화면 모드를 설정"
                },
                {
                    "name": "redraw",
                    "params": "count",
                    "params_typed": "int count = 1",
                    "return_type": "void",
                    "desc": "Request extra redraws (useful for event-driven rendering)",
                    "snippet": "redraw()",
                    "keywords": [],
                    "desc_ja": "追加の再描画を要求（イベント駆動レンダリング用）",
                    "desc_ko": "추가 다시그리기를 요청 (이벤트 기반 렌더링에 유용)",
                    "examples": [
                        {
                            "name": "loopModeExample",
                            "group": "windowing"
                        }
                    ]
                },
                {
                    "name": "getBackendName",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the active graphics backend name (e.g. \"Metal (macOS)\", \"D3D11\", \"OpenGL\", \"WebGPU\")",
                    "snippet": "getBackendName()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "bringWindowToFront",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Activate and raise the application window, giving it focus. Desktop only; no-op on mobile/web",
                    "snippet": "bringWindowToFront()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getDisplayScaleFactor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the DPI scale of the main display (available before window creation). macOS: 1.0 or 2.0 (Retina); other platforms: 1.0",
                    "snippet": "getDisplayScaleFactor()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "setWindowDecorated",
                    "params": "decorated",
                    "params_typed": "bool decorated",
                    "return_type": "void",
                    "desc": "Toggle the window's standard decorations (title bar, borders, buttons). false = borderless but still focusable and closable. Desktop only",
                    "snippet": "setWindowDecorated(${1:true})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "setWindowSizeLogical",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Resize the window to the given logical size (logical pixels)",
                    "snippet": "setWindowSizeLogical(${1:width}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "runHeadlessApp",
                    "params": "settings",
                    "params_typed": "const HeadlessSettings& settings = HeadlessSettings()",
                    "return_type": "int",
                    "desc": "Run an app class without a window or graphics context (update loop only). Template on the app type; returns the process exit code",
                    "snippet": "runHeadlessApp<${1:AppClass}>()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "ウィンドウとシステム",
            "name_ko": "윈도우 & 시스템"
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
                    "snippet": "logNotice(${1:\"message\"})",
                    "keywords": [],
                    "desc_ja": "コンソールに出力",
                    "desc_ko": "콘솔에 출력"
                },
                {
                    "name": "compress",
                    "params": "src, nbytes, out, codec",
                    "params_typed": "const void* src, size_t nbytes, vector<uint8_t>& out, Codec codec",
                    "return_type": "bool",
                    "desc": "Compress a byte buffer with the given codec (Codec::None or Codec::LZ4). The vector form resizes out and returns bool; the raw form writes into dst (capacity dstCapacity) and returns the number of bytes written (or -1), useful for compressing into a region of a buffer / parallel chunks",
                    "snippet": "compress(${1:src}, ${2:nbytes}, ${3:out}, ${4:Codec::LZ4})",
                    "keywords": [],
                    "desc_ja": "バイト列を指定コーデック（Codec::None / Codec::LZ4）で圧縮する。vector版は out をリサイズして bool を返す。raw版は dst（容量 dstCapacity）に書き込み、書き込みバイト数（失敗 -1）を返す（バッファの一部への圧縮・並列チャンク向け）",
                    "desc_ko": "지정한 코덱(Codec::None / Codec::LZ4)으로 바이트 버퍼를 압축. vector형은 out을 리사이즈하고 bool 반환, raw형은 dst(용량 dstCapacity)에 써서 바이트 수(실패 -1) 반환 (버퍼 일부 압축·병렬 청크용)"
                },
                {
                    "name": "compress",
                    "params": "src, nbytes, dst, dstCapacity, codec",
                    "params_typed": "const void* src, size_t nbytes, void* dst, size_t dstCapacity, Codec codec",
                    "return_type": "bool",
                    "desc": "Compress a byte buffer with the given codec (Codec::None or Codec::LZ4). The vector form resizes out and returns bool; the raw form writes into dst (capacity dstCapacity) and returns the number of bytes written (or -1), useful for compressing into a region of a buffer / parallel chunks",
                    "snippet": "compress(${1:src}, ${2:nbytes}, ${3:out}, ${4:Codec::LZ4})",
                    "keywords": [],
                    "desc_ja": "バイト列を指定コーデック（Codec::None / Codec::LZ4）で圧縮する。vector版は out をリサイズして bool を返す。raw版は dst（容量 dstCapacity）に書き込み、書き込みバイト数（失敗 -1）を返す（バッファの一部への圧縮・並列チャンク向け）",
                    "desc_ko": "지정한 코덱(Codec::None / Codec::LZ4)으로 바이트 버퍼를 압축. vector형은 out을 리사이즈하고 bool 반환, raw형은 dst(용량 dstCapacity)에 써서 바이트 수(실패 -1) 반환 (버퍼 일부 압축·병렬 청크용)"
                },
                {
                    "name": "decompress",
                    "params": "src, nbytes, out, decompressedSize, codec",
                    "params_typed": "const void* src, size_t nbytes, vector<uint8_t>& out, size_t decompressedSize, Codec codec",
                    "return_type": "bool",
                    "desc": "Decompress a byte buffer; decompressedSize is the known original byte count. The vector form resizes out and returns bool; the raw form writes into dst (capacity dstCapacity) and returns bytes written (or -1) - it can write into a region of an existing buffer (dst + offset), enabling parallel per-chunk decompression",
                    "snippet": "decompress(${1:src}, ${2:nbytes}, ${3:out}, ${4:decompressedSize}, ${5:Codec::LZ4})",
                    "keywords": [],
                    "desc_ja": "バイト列を展開する。decompressedSize は元の（展開後）バイト数。vector版は out をリサイズして bool を返す。raw版は dst（容量 dstCapacity）に書き込みバイト数（失敗 -1）を返し、既存バッファの途中（dst + offset）にも書ける（並列チャンク展開向け）",
                    "desc_ko": "바이트 버퍼를 해제. decompressedSize는 원본 바이트 수. vector형은 out을 리사이즈하고 bool 반환, raw형은 dst(용량 dstCapacity)에 써서 바이트 수(실패 -1) 반환하며 기존 버퍼 일부(dst + offset)에도 쓸 수 있음 (병렬 청크 해제용)"
                },
                {
                    "name": "decompress",
                    "params": "src, nbytes, dst, dstCapacity, codec",
                    "params_typed": "const void* src, size_t nbytes, void* dst, size_t dstCapacity, Codec codec",
                    "return_type": "bool",
                    "desc": "Decompress a byte buffer; decompressedSize is the known original byte count. The vector form resizes out and returns bool; the raw form writes into dst (capacity dstCapacity) and returns bytes written (or -1) - it can write into a region of an existing buffer (dst + offset), enabling parallel per-chunk decompression",
                    "snippet": "decompress(${1:src}, ${2:nbytes}, ${3:out}, ${4:decompressedSize}, ${5:Codec::LZ4})",
                    "keywords": [],
                    "desc_ja": "バイト列を展開する。decompressedSize は元の（展開後）バイト数。vector版は out をリサイズして bool を返す。raw版は dst（容量 dstCapacity）に書き込みバイト数（失敗 -1）を返し、既存バッファの途中（dst + offset）にも書ける（並列チャンク展開向け）",
                    "desc_ko": "바이트 버퍼를 해제. decompressedSize는 원본 바이트 수. vector형은 out을 리사이즈하고 bool 반환, raw형은 dst(용량 dstCapacity)에 써서 바이트 수(실패 -1) 반환하며 기존 버퍼 일부(dst + offset)에도 쓸 수 있음 (병렬 청크 해제용)"
                },
                {
                    "name": "toString",
                    "params": "value",
                    "params_typed": "value",
                    "return_type": "string",
                    "desc": "Convert to string",
                    "snippet": "toString(${1:value})",
                    "keywords": [],
                    "desc_ja": "文字列に変換",
                    "desc_ko": "문자열로 변환",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        },
                        {
                            "name": "loopModeExample",
                            "group": "windowing"
                        }
                    ]
                },
                {
                    "name": "beep",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "snippet": "beep()",
                    "keywords": [],
                    "desc_ja": "ビープ音を再生",
                    "desc_ko": "비프음 재생",
                    "examples": [
                        {
                            "name": "beepSoundExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "beep",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "snippet": "beep()",
                    "keywords": [],
                    "desc_ja": "ビープ音を再生",
                    "desc_ko": "비프음 재생",
                    "examples": [
                        {
                            "name": "beepSoundExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "toInt",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "int",
                    "desc": "Convert string to int",
                    "snippet": "toInt(${1:str})",
                    "keywords": [],
                    "desc_ja": "文字列を整数に変換",
                    "desc_ko": "문자열을 정수로 변환"
                },
                {
                    "name": "toFloat",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "float",
                    "desc": "Convert string to float",
                    "snippet": "toFloat(${1:str})",
                    "keywords": [],
                    "desc_ja": "文字列を浮動小数点数に変換",
                    "desc_ko": "문자열을 부동소수점으로 변환"
                },
                {
                    "name": "splitString",
                    "params": "source, delimiter",
                    "params_typed": "const string& source, const string& delimiter",
                    "return_type": "vector<string>",
                    "desc": "Split string by delimiter",
                    "snippet": "splitString(${1:str}, ${2:delimiter})",
                    "keywords": [],
                    "desc_ja": "文字列をデリミタで分割",
                    "desc_ko": "구분자로 문자열을 분할",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "joinString",
                    "params": "elements, delimiter",
                    "params_typed": "const vector<string>& elements, const string& delimiter",
                    "return_type": "string",
                    "desc": "Join strings with delimiter",
                    "snippet": "joinString(${1:elements}, ${2:delimiter})",
                    "keywords": [],
                    "desc_ja": "文字列配列をデリミタで結合",
                    "desc_ko": "문자열 배열을 구분자로 결합",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "stringReplace",
                    "params": "input, search, replace",
                    "params_typed": "string& input, const string& searchStr, const string& replaceStr",
                    "return_type": "void",
                    "desc": "Replace substring in place",
                    "snippet": "stringReplace(${1:str}, ${2:search}, ${3:replace})",
                    "keywords": [],
                    "desc_ja": "部分文字列を置換（直接変更）",
                    "desc_ko": "부분 문자열을 직접 치환"
                },
                {
                    "name": "toLower",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to lower case",
                    "snippet": "toLower(${1:str})",
                    "keywords": [],
                    "desc_ja": "小文字に変換",
                    "desc_ko": "소문자로 변환",
                    "examples": [
                        {
                            "name": "dragDropExample",
                            "group": "input_output"
                        },
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "toUpper",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to upper case",
                    "snippet": "toUpper(${1:str})",
                    "keywords": [],
                    "desc_ja": "大文字に変換",
                    "desc_ko": "대문자로 변환",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "intersectRect",
                    "params": "x1, y1, w1, h1, x2, y2, w2, h2, ox, oy, ow, oh",
                    "params_typed": "float x1, float y1, float w1, float h1, float x2, float y2, float w2, float h2, float& ox, float& oy, float& ow, float& oh",
                    "return_type": "void",
                    "desc": "Compute intersection of two rectangles",
                    "snippet": "intersectRect(${1:x1}, ${2:y1}, ${3:w1}, ${4:h1}, ${5:x2}, ${6:y2}, ${7:w2}, ${8:h2}, ${9:ox}, ${10:oy}, ${11:ow}, ${12:oh})",
                    "keywords": [],
                    "desc_ja": "2つの矩形の交差部分を計算",
                    "desc_ko": "두 사각형의 교차 영역을 계산"
                },
                {
                    "name": "mcp::registerDebuggerTools",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Opt in to the MCP debugger tools, letting an AI agent drive the app: input injection (mouse_click, key_press, mouse_move, scroll) plus node selection and scene mutation (select_node, set_node_members). Call once in setup(); calling it IS the opt-in (there is no separate enable step). The tools do nothing unless the MCP server is running (TRUSSC_MCP=1), so it is safe to leave in. Read-only inspection — screenshots and the node tree — needs no opt-in and is always available when MCP is on.",
                    "snippet": "mcp::registerDebuggerTools()",
                    "keywords": [],
                    "desc_ja": "MCP のデバッガツールを有効化し、AI エージェントがアプリを操作できるようにする：入力注入（mouse_click, key_press, mouse_move, scroll）に加え、ノード選択・シーン書き換え（select_node, set_node_members）。setup() で一度呼ぶだけで opt-in 完了（別途の有効化呼び出しは不要）。MCP サーバ起動時（TRUSSC_MCP=1）以外は何もしないので、入れっぱなしでも安全。スクリーンショットやノードツリーの読み取りは opt-in 不要で、MCP が有効なら常に使える。",
                    "desc_ko": "MCP 디버거 도구를 활성화하여 AI 에이전트가 앱을 조작할 수 있게 한다: 입력 주입(mouse_click, key_press, mouse_move, scroll)과 노드 선택·씬 변경(select_node, set_node_members). setup()에서 한 번 호출하면 그것이 곧 opt-in이다(별도의 활성화 단계 없음). MCP 서버가 실행 중(TRUSSC_MCP=1)이 아니면 아무 동작도 하지 않으므로 그대로 두어도 안전하다. 스크린샷과 노드 트리 같은 읽기 전용 조회는 opt-in이 필요 없으며 MCP가 켜져 있으면 항상 사용할 수 있다."
                },
                {
                    "name": "logVerbose",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based verbose-level log output",
                    "snippet": "logVerbose() << ${1:value}",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "nodeExample",
                            "group": "node"
                        },
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "logWarning",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based warning-level log output",
                    "snippet": "logWarning() << ${1:value}",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "imageLoaderExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "logError",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based error-level log output",
                    "snippet": "logError() << ${1:value}",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "fullscreenShaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "logFatal",
                    "params": "module",
                    "params_typed": "const string& module = \"\"",
                    "return_type": "LogStream",
                    "desc": "Stream-based fatal-level log output",
                    "snippet": "logFatal() << ${1:value}",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "logAt",
                    "params": "level",
                    "params_typed": "LogLevel level = LogLevel::Notice",
                    "return_type": "LogStream",
                    "desc": "Stream-based log output at a runtime-selected level",
                    "snippet": "logAt(${1:LogLevel::Warning}) << ${2:value}",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getLogger",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Logger&",
                    "desc": "Access the global logger instance",
                    "snippet": "getLogger()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "setConsoleLogLevel",
                    "params": "level",
                    "params_typed": "LogLevel level",
                    "return_type": "void",
                    "desc": "Set the minimum log level printed to the console",
                    "snippet": "setConsoleLogLevel(${1:LogLevel::Notice})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "jsonXmlExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "setFileLogLevel",
                    "params": "level",
                    "params_typed": "LogLevel level",
                    "return_type": "void",
                    "desc": "Set the minimum log level written to the log file",
                    "snippet": "setFileLogLevel(${1:LogLevel::Notice})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "setLogFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Open a file to receive log output",
                    "snippet": "setLogFile(${1:\"log.txt\"})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "closeLogFile",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the current log file",
                    "snippet": "closeLogFile()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "compressBound",
                    "params": "nbytes, codec",
                    "params_typed": "size_t nbytes, Codec codec",
                    "return_type": "size_t",
                    "desc": "Worst-case compressed size, for sizing a destination buffer",
                    "snippet": "compressBound(${1:nbytes}, ${2:Codec::LZ4})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toInt64",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "int64_t",
                    "desc": "Parse a string into a 64-bit integer",
                    "snippet": "toInt64(${1:str})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toDouble",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "double",
                    "desc": "Parse a string into a double",
                    "snippet": "toDouble(${1:str})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toBool",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "bool",
                    "desc": "Parse a string into a bool",
                    "snippet": "toBool(${1:str})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toBinary",
                    "params": "value",
                    "params_typed": "int value",
                    "return_type": "string",
                    "desc": "Convert an integer to a binary string",
                    "snippet": "toBinary(${1:value})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "hexToInt",
                    "params": "hexStr",
                    "params_typed": "const string& hexStr",
                    "return_type": "int",
                    "desc": "Parse a hex string into a signed int",
                    "snippet": "hexToInt(${1:hexStr})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "hexToUInt",
                    "params": "hexStr",
                    "params_typed": "const string& hexStr",
                    "return_type": "unsigned int",
                    "desc": "Parse a hex string into an unsigned int",
                    "snippet": "hexToUInt(${1:hexStr})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toBase64",
                    "params": "bytes, len",
                    "params_typed": "const unsigned char* bytes, size_t len",
                    "return_type": "string",
                    "desc": "Encode raw bytes as a Base64 string",
                    "snippet": "toBase64(${1:bytes}, ${2:len})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "isStringInString",
                    "params": "haystack, needle",
                    "params_typed": "const string& haystack, const string& needle",
                    "return_type": "bool",
                    "desc": "Check whether one string contains another",
                    "snippet": "isStringInString(${1:haystack}, ${2:needle})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "stringTimesInString",
                    "params": "haystack, needle",
                    "params_typed": "const string& haystack, const string& needle",
                    "return_type": "size_t",
                    "desc": "Count occurrences of a substring in a string",
                    "snippet": "stringTimesInString(${1:haystack}, ${2:needle})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "trim",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Trim whitespace from both ends of a string",
                    "snippet": "trim(${1:src})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "utilsExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "trimFront",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Trim leading whitespace from a string",
                    "snippet": "trimFront(${1:src})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "trimBack",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Trim trailing whitespace from a string",
                    "snippet": "trimBack(${1:src})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "parseJson",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "Json",
                    "desc": "Parse a JSON string into a Json object; returns an empty Json on parse error.",
                    "snippet": "parseJson(${1:str})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "toJsonString",
                    "params": "j, indent",
                    "params_typed": "const Json& j, int indent = 2",
                    "return_type": "string",
                    "desc": "Serialize a Json object to a string. indent sets the pretty-print width (negative for compact).",
                    "snippet": "toJsonString(${1:j})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "jsonXmlExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "parseXml",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "Xml",
                    "desc": "Parse an XML string into an Xml object.",
                    "snippet": "parseXml(${1:str})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "reflectToJson",
                    "params": "obj",
                    "params_typed": "T& obj",
                    "return_type": "Json",
                    "desc": "Return all reflected (TC_REFLECT) members of obj as a Json object. Works on any reflected type such as a Node or Mod.",
                    "snippet": "reflectToJson(${1:obj})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "reflectFromJson",
                    "params": "obj, j",
                    "params_typed": "T& obj, const Json& j",
                    "return_type": "JsonReadReflector",
                    "desc": "Apply the keys of a Json object onto obj's reflected (TC_REFLECT) members. Returns the reflector so callers can inspect which members were applied, skipped, read-only, or unknown.",
                    "snippet": "reflectFromJson(${1:obj}, ${2:json})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "isMainThread",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Whether the calling thread is the main (scene) thread. The main thread ID is recorded on the first call to getMainThreadId().",
                    "snippet": "isMainThread()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getMainThreadId",
                    "params": "",
                    "params_typed": "",
                    "return_type": "thread::id",
                    "desc": "Get the main thread ID. Records the current thread's ID on the first call, so it must first be called from the main thread.",
                    "snippet": "getMainThreadId()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "ユーティリティ",
            "name_ko": "유틸리티"
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
                    "snippet": "getDataPath(${1:path})",
                    "keywords": [],
                    "desc_ja": "データディレクトリからの相対パスを取得",
                    "desc_ko": "데이터 디렉토리 기준의 전체 경로를 얻음",
                    "examples": [
                        {
                            "name": "imageLoaderExample",
                            "group": "input_output"
                        },
                        {
                            "name": "soundPlayerExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "getAbsolutePath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get absolute path",
                    "snippet": "getAbsolutePath(${1:path})",
                    "keywords": [],
                    "desc_ja": "絶対パスを取得",
                    "desc_ko": "절대 경로를 얻음"
                },
                {
                    "name": "getFileName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename from path",
                    "snippet": "getFileName(${1:path})",
                    "keywords": [],
                    "desc_ja": "パスからファイル名を取得",
                    "desc_ko": "경로에서 파일명을 얻음",
                    "examples": [
                        {
                            "name": "dragDropExample",
                            "group": "input_output"
                        },
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "getBaseName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename without extension",
                    "snippet": "getBaseName(${1:path})",
                    "keywords": [],
                    "desc_ja": "拡張子なしのファイル名を取得",
                    "desc_ko": "확장자를 제외한 파일명을 얻음",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "getFileExtension",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get file extension without dot",
                    "snippet": "getFileExtension(${1:path})",
                    "keywords": [],
                    "desc_ja": "拡張子を取得（ドットなし）",
                    "desc_ko": "파일 확장자를 얻음 (점 제외)",
                    "examples": [
                        {
                            "name": "dragDropExample",
                            "group": "input_output"
                        },
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "getParentDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get parent directory",
                    "snippet": "getParentDirectory(${1:path})",
                    "keywords": [],
                    "desc_ja": "親ディレクトリを取得",
                    "desc_ko": "부모 디렉토리를 얻음",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "joinPath",
                    "params": "dir, file",
                    "params_typed": "const string& dir, const string& file",
                    "return_type": "string",
                    "desc": "Join directory and filename",
                    "snippet": "joinPath(${1:dir}, ${2:file})",
                    "keywords": [],
                    "desc_ja": "ディレクトリとファイル名を結合",
                    "desc_ko": "디렉토리와 파일명을 결합",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "getAbsolutePath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get absolute path",
                    "snippet": "getAbsolutePath(${1:path})",
                    "keywords": [],
                    "desc_ja": "絶対パスを取得",
                    "desc_ko": "절대 경로를 얻음"
                },
                {
                    "name": "fileExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if file exists",
                    "snippet": "fileExists(${1:path})",
                    "keywords": [],
                    "desc_ja": "ファイルが存在するか確認",
                    "desc_ko": "파일 존재 여부를 확인",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "directoryExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if directory exists",
                    "snippet": "directoryExists(${1:path})",
                    "keywords": [],
                    "desc_ja": "ディレクトリが存在するか確認",
                    "desc_ko": "디렉토리 존재 여부를 확인",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "createDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Create directory (and parents)",
                    "snippet": "createDirectory(${1:path})",
                    "keywords": [],
                    "desc_ja": "ディレクトリを作成（親も含む）",
                    "desc_ko": "디렉토리를 생성 (상위 포함)",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "listDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "vector<string>",
                    "desc": "List files in directory",
                    "snippet": "listDirectory(${1:path})",
                    "keywords": [],
                    "desc_ja": "ディレクトリ内のファイル一覧",
                    "desc_ko": "디렉토리 내 파일 목록",
                    "examples": [
                        {
                            "name": "fileExample",
                            "group": "utils"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "removeFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Remove file",
                    "snippet": "removeFile(${1:path})",
                    "keywords": [],
                    "desc_ja": "ファイルを削除",
                    "desc_ko": "파일을 삭제"
                },
                {
                    "name": "getFileSize",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "int64_t",
                    "desc": "Get file size in bytes",
                    "snippet": "getFileSize(${1:path})",
                    "keywords": [],
                    "desc_ja": "ファイルサイズを取得（バイト）",
                    "desc_ko": "파일 크기를 바이트로 얻음"
                },
                {
                    "name": "loadTextFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Load entire text file",
                    "snippet": "loadTextFile(${1:path})",
                    "keywords": [],
                    "desc_ja": "テキストファイルを読み込む",
                    "desc_ko": "텍스트 파일 전체를 로드"
                },
                {
                    "name": "saveTextFile",
                    "params": "path, content",
                    "params_typed": "const string& path, const string& content",
                    "return_type": "bool",
                    "desc": "Save string to text file",
                    "snippet": "saveTextFile(${1:path}, ${2:content})",
                    "keywords": [],
                    "desc_ja": "文字列をファイルに保存",
                    "desc_ko": "문자열을 텍스트 파일로 저장"
                },
                {
                    "name": "appendToFile",
                    "params": "path, content",
                    "params_typed": "const string& path, const string& content",
                    "return_type": "bool",
                    "desc": "Append string to file",
                    "snippet": "appendToFile(${1:path}, ${2:content})",
                    "keywords": [],
                    "desc_ja": "ファイルに追記",
                    "desc_ko": "파일에 문자열을 추가"
                },
                {
                    "name": "createFileWriter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FileWriter@",
                    "desc": "Create a file writer (TrussSketch factory)",
                    "snippet": "FileWriter@ writer = createFileWriter();",
                    "keywords": [],
                    "desc_ja": "ファイルライターを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "파일 라이터를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "createFileReader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FileReader@",
                    "desc": "Create a file reader (TrussSketch factory)",
                    "snippet": "FileReader@ reader = createFileReader();",
                    "keywords": [],
                    "desc_ja": "ファイルリーダーを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "파일 리더를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "loadJson",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "Json",
                    "desc": "Load a JSON file and return it as a Json object. Relative paths are resolved via getDataPath; returns an empty Json on error.",
                    "snippet": "loadJson(${1:path})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "jsonXmlExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "saveJson",
                    "params": "j, path, indent",
                    "params_typed": "const Json& j, const string& path, int indent = 2",
                    "return_type": "bool",
                    "desc": "Write a Json object to a file. Relative paths are resolved via getDataPath. indent sets the pretty-print width (negative for compact). Returns true on success.",
                    "snippet": "saveJson(${1:j}, ${2:path})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "jsonXmlExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "loadXml",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "Xml",
                    "desc": "Load an XML file and return it as an Xml object. Relative paths are resolved via getDataPath.",
                    "snippet": "loadXml(${1:path})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "jsonXmlExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "setDataPathRoot",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "void",
                    "desc": "Set the root directory used to resolve relative data paths. A relative path is resolved against the executable directory; an absolute path (starting with /) is used as-is. A trailing slash is added automatically.",
                    "snippet": "setDataPathRoot(${1:path})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getDataPathRoot",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the current data path root (with trailing slash).",
                    "snippet": "getDataPathRoot()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "setDataPathToResources",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Point the data path root at the macOS app bundle's Contents/Resources/data folder for distribution. No-op on non-macOS platforms.",
                    "snippet": "setDataPathToResources()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getExecutablePath",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the absolute path of the running executable.",
                    "snippet": "getExecutablePath()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getExecutableDir",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the directory containing the running executable (with trailing slash).",
                    "snippet": "getExecutableDir()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "ファイル",
            "name_ko": "파일"
        },
        {
            "name": "Sound",
            "functions": [
                {
                    "name": "Sound",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a sound player",
                    "snippet": "Sound()",
                    "keywords": [],
                    "desc_ja": "サウンドプレイヤーを作成",
                    "desc_ko": "사운드 플레이어를 생성",
                    "examples": [
                        {
                            "name": "chipSoundExample",
                            "group": "sound"
                        },
                        {
                            "name": "soundPlayerExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "createSound",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Create a sound player (TrussSketch factory)",
                    "snippet": "Sound@ snd = createSound();",
                    "keywords": [],
                    "desc_ja": "サウンドプレイヤーを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "사운드 플레이어를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load sound file. Format auto-detected by extension: .wav .mp3 .ogg .flac .aac .m4a",
                    "snippet": "load(${1:\"sound.wav\"})",
                    "keywords": [],
                    "desc_ja": "サウンドファイルを読み込む。拡張子で自動判別: .wav .mp3 .ogg .flac .aac .m4a",
                    "desc_ko": "사운드 파일을 로드. 확장자로 자동 판별: .wav .mp3 .ogg .flac .aac .m4a"
                },
                {
                    "name": "loadStream",
                    "params": "path, maxPolyphony",
                    "params_typed": "const string& path, int maxPolyphony = 1",
                    "return_type": "bool",
                    "desc": "Stream sound from disk (WAV/MP3/FLAC). Best for long files; cuts memory. maxPolyphony = simultaneous play() count.",
                    "snippet": "loadStream(${1:\"music.wav\"})",
                    "keywords": [],
                    "desc_ja": "ディスクからストリーミング再生 (WAV/MP3/FLAC)。長尺ファイル向け、メモリ節約。maxPolyphony は同時再生数",
                    "desc_ko": "디스크에서 스트리밍 재생 (WAV/MP3/FLAC). 긴 파일 적합, 메모리 절약. maxPolyphony는 동시 재생 수"
                },
                {
                    "name": "isStreaming",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True if this Sound was loaded via loadStream() (vs eager load())",
                    "snippet": "isStreaming()",
                    "keywords": [],
                    "desc_ja": "loadStream() で読み込んでいれば true",
                    "desc_ko": "loadStream()으로 로드되었으면 true"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play sound",
                    "snippet": "play()",
                    "keywords": [],
                    "desc_ja": "再生",
                    "desc_ko": "사운드 재생"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop sound",
                    "snippet": "stop()",
                    "keywords": [],
                    "desc_ja": "停止",
                    "desc_ko": "사운드 정지"
                },
                {
                    "name": "pause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pause playback (resume() to continue)",
                    "snippet": "pause()",
                    "keywords": [],
                    "desc_ja": "再生を一時停止 (resume() で再開)",
                    "desc_ko": "재생을 일시 정지 (resume()로 재개)"
                },
                {
                    "name": "resume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Resume paused playback",
                    "snippet": "resume()",
                    "keywords": [],
                    "desc_ja": "一時停止していた再生を再開",
                    "desc_ko": "일시 정지된 재생을 재개"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while playing (false if stopped, paused, or never played)",
                    "snippet": "isPlaying()",
                    "keywords": [],
                    "desc_ja": "再生中なら true (停止/一時停止/未再生なら false)",
                    "desc_ko": "재생 중이면 true (정지/일시정지/미재생이면 false)"
                },
                {
                    "name": "isPaused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True while paused",
                    "snippet": "isPaused()",
                    "keywords": [],
                    "desc_ja": "一時停止中なら true",
                    "desc_ko": "일시 정지 중이면 true"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True after a successful load() / loadStream() / loadTestTone()",
                    "snippet": "isLoaded()",
                    "keywords": [],
                    "desc_ja": "load() / loadStream() / loadTestTone() に成功していれば true",
                    "desc_ko": "load() / loadStream() / loadTestTone()이 성공했으면 true"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback position in seconds",
                    "snippet": "getPosition()",
                    "keywords": [],
                    "desc_ja": "現在の再生位置を秒で取得",
                    "desc_ko": "현재 재생 위치를 초로 가져옴"
                },
                {
                    "name": "setPosition",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Seek to a specific time in seconds. On streams, costs ~10 ms blackout while the ring refills.",
                    "snippet": "setPosition(${1:5.0})",
                    "keywords": [],
                    "desc_ja": "指定秒数にシーク。ストリームでは ring 補充に ~10ms 無音",
                    "desc_ko": "지정 시간(초)으로 시크. 스트림은 링 재충전에 ~10ms 무음"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get total duration of the loaded sound in seconds",
                    "snippet": "getDuration()",
                    "keywords": [],
                    "desc_ja": "読み込まれたサウンドの全体長を秒で取得",
                    "desc_ko": "로드된 사운드의 전체 길이를 초로 가져옴"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "setVolume(${1:0.8})",
                    "keywords": [],
                    "desc_ja": "音量を設定",
                    "desc_ko": "음량을 설정 (0.0-1.0)"
                },
                {
                    "name": "getVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current volume",
                    "snippet": "getVolume()",
                    "keywords": [],
                    "desc_ja": "現在の音量を取得",
                    "desc_ko": "현재 음량을 가져옴"
                },
                {
                    "name": "setPan",
                    "params": "pan",
                    "params_typed": "float pan",
                    "return_type": "void",
                    "desc": "Set stereo balance (-1.0 left ~ 0 center ~ +1.0 right). On multi-ch devices only affects ch0/ch1.",
                    "snippet": "setPan(${1:0.0})",
                    "keywords": [],
                    "desc_ja": "ステレオバランス (-1.0=L, 0=中央, +1.0=R) を設定。多 ch デバイスでは ch0/ch1 のみに作用",
                    "desc_ko": "스테레오 밸런스 (-1.0=좌, 0=중앙, +1.0=우) 설정. 다채널 장치는 ch0/ch1만 적용"
                },
                {
                    "name": "getPan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current pan value",
                    "snippet": "getPan()",
                    "keywords": [],
                    "desc_ja": "現在の pan を取得",
                    "desc_ko": "현재 pan을 가져옴"
                },
                {
                    "name": "setSpeed",
                    "params": "speed",
                    "params_typed": "float speed",
                    "return_type": "void",
                    "desc": "Playback speed [-10, 10]. Negative = reverse (eager only). Streams clamp to [0, 10]. 0 = freeze.",
                    "snippet": "setSpeed(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "再生速度 [-10, 10]。負=逆再生 (eager のみ)。stream は [0, 10] にクランプ。0=フリーズ",
                    "desc_ko": "재생 속도 [-10, 10]. 음수=역재생 (eager만). 스트림은 [0, 10]으로 클램프. 0=프리즈"
                },
                {
                    "name": "getSpeed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback speed",
                    "snippet": "getSpeed()",
                    "keywords": [],
                    "desc_ja": "現在の再生速度を取得",
                    "desc_ko": "현재 재생 속도를 가져옴"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping",
                    "snippet": "setLoop(${1:true})",
                    "keywords": [],
                    "desc_ja": "ループ再生を設定",
                    "desc_ko": "반복 재생을 활성/비활성"
                },
                {
                    "name": "isLoop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True if looping is enabled",
                    "snippet": "isLoop()",
                    "keywords": [],
                    "desc_ja": "ループ再生が有効なら true",
                    "desc_ko": "반복 재생이 활성화되어 있으면 true"
                },
                {
                    "name": "setMixMode",
                    "params": "mode",
                    "params_typed": "MixMode m",
                    "return_type": "void",
                    "desc": "Channel routing preset. Auto (default) = mono broadcasts / multi 1:1. DownmixMono = average src to all out ch.",
                    "snippet": "setMixMode(MixMode::DownmixMono)",
                    "keywords": [],
                    "desc_ja": "チャンネルルーティング preset。Auto (デフォ)=mono は broadcast / multi は 1:1、DownmixMono=全 src を平均して全 out ch に同じ音",
                    "desc_ko": "채널 라우팅 프리셋. Auto=mono는 broadcast / multi는 1:1, DownmixMono=모든 소스를 평균하여 모든 출력 채널로"
                },
                {
                    "name": "setChannelMap",
                    "params": "map",
                    "params_typed": "const vector<int>& map",
                    "return_type": "void",
                    "desc": "Per-output-channel routing. 1D: each entry is a src ch index (-1 = silent). 2D: each entry lists src ch indices that sum into that output.",
                    "snippet": "setChannelMap({0, 1})",
                    "keywords": [],
                    "desc_ja": "出力 ch ごとのルーティング。1D 版は各要素が src ch index (-1=無音)、2D 版は各要素が sum 対象の src ch リスト",
                    "desc_ko": "출력 채널별 라우팅. 1D는 각 항목이 src ch 인덱스 (-1=무음), 2D는 각 항목이 합산할 src ch 리스트"
                },
                {
                    "name": "setChannelMap",
                    "params": "map",
                    "params_typed": "vector<vector<int>> map",
                    "return_type": "void",
                    "desc": "Per-output-channel routing. 1D: each entry is a src ch index (-1 = silent). 2D: each entry lists src ch indices that sum into that output.",
                    "snippet": "setChannelMap({0, 1})",
                    "keywords": [],
                    "desc_ja": "出力 ch ごとのルーティング。1D 版は各要素が src ch index (-1=無音)、2D 版は各要素が sum 対象の src ch リスト",
                    "desc_ko": "출력 채널별 라우팅. 1D는 각 항목이 src ch 인덱스 (-1=무음), 2D는 각 항목이 합산할 src ch 리스트"
                },
                {
                    "name": "setChannelGains",
                    "params": "gains",
                    "params_typed": "const vector<float>& gains",
                    "return_type": "void",
                    "desc": "Per-output-channel gain multiplier. Entries beyond .size() default to 1.0. No internal normalization (setVolume is the overall gain).",
                    "snippet": "setChannelGains({1.0, 1.0})",
                    "keywords": [],
                    "desc_ja": "出力 ch ごとのゲイン倍率。.size() を超える ch は 1.0、内部正規化なし (setVolume が全体ゲイン)",
                    "desc_ko": "출력 채널별 게인 배율. .size()를 넘는 채널은 1.0, 내부 정규화 없음 (setVolume이 전체 게인)"
                },
                {
                    "name": "clearChannelMap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear the explicit channel map; routing falls back to setMixMode rules.",
                    "snippet": "clearChannelMap()",
                    "keywords": [],
                    "desc_ja": "ChannelMap を解除して MixMode ルールに戻す",
                    "desc_ko": "채널 맵을 해제하고 MixMode 규칙으로 복귀"
                },
                {
                    "name": "clearChannelGains",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear per-channel gains (back to uniform 1.0).",
                    "snippet": "clearChannelGains()",
                    "keywords": [],
                    "desc_ja": "ChannelGains を解除して uniform 1.0 に戻す",
                    "desc_ko": "채널 게인을 해제하고 uniform 1.0으로 복귀"
                },
                {
                    "name": "setBeepVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set the output volume for beep() (0.0-1.0).",
                    "snippet": "setBeepVolume(${1:vol})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "beepSoundExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "getBeepVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the current beep() output volume (0.0-1.0).",
                    "snippet": "getBeepVolume()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "beepSoundExample",
                            "group": "sound"
                        }
                    ]
                }
            ],
            "name_ja": "サウンド",
            "name_ko": "사운드"
        },
        {
            "name": "AudioEngine",
            "functions": [
                {
                    "name": "getInstance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "AudioEngine&",
                    "desc": "Get the global AudioEngine singleton",
                    "snippet": "AudioEngine::getInstance()",
                    "keywords": [],
                    "desc_ja": "AudioEngine シングルトンを取得",
                    "desc_ko": "AudioEngine 싱글톤을 가져옴",
                    "examples": [
                        {
                            "name": "audioDeviceExample",
                            "group": "sound"
                        },
                        {
                            "name": "audioSynthExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "init",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Initialize / re-initialize audio engine. Re-entrant: calling on a running engine stops the device, migrates active voices to new settings, restarts. ~30-100 ms gap; voices keep playback position.",
                    "snippet": "AudioEngine::getInstance().init()",
                    "keywords": [],
                    "desc_ja": "オーディオエンジンを初期化 / 再初期化。再 init で active な voice を移行しつつデバイス再起動 (~30-100ms 無音)",
                    "desc_ko": "오디오 엔진 초기화 / 재초기화. 재 init 시 활성 voice를 이전하며 장치 재시작 (~30-100ms 무음)"
                },
                {
                    "name": "init",
                    "params": "settings",
                    "params_typed": "const AudioSettings& settings",
                    "return_type": "bool",
                    "desc": "Initialize / re-initialize audio engine. Re-entrant: calling on a running engine stops the device, migrates active voices to new settings, restarts. ~30-100 ms gap; voices keep playback position.",
                    "snippet": "AudioEngine::getInstance().init()",
                    "keywords": [],
                    "desc_ja": "オーディオエンジンを初期化 / 再初期化。再 init で active な voice を移行しつつデバイス再起動 (~30-100ms 無音)",
                    "desc_ko": "오디오 엔진 초기화 / 재초기화. 재 init 시 활성 voice를 이전하며 장치 재시작 (~30-100ms 무음)"
                },
                {
                    "name": "shutdown",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Shut down the audio device. Usually called automatically at program exit.",
                    "snippet": "AudioEngine::getInstance().shutdown()",
                    "keywords": [],
                    "desc_ja": "オーディオデバイスを停止。通常はプログラム終了時に自動呼出",
                    "desc_ko": "오디오 장치를 종료. 일반적으로 프로그램 종료 시 자동 호출"
                },
                {
                    "name": "listDevices",
                    "params": "",
                    "params_typed": "",
                    "return_type": "vector<AudioDeviceInfo>",
                    "desc": "Enumerate available playback devices. Returns name + isDefault for each.",
                    "snippet": "AudioEngine::listDevices()",
                    "keywords": [],
                    "desc_ja": "利用可能な再生デバイスを列挙。各 device の name + isDefault を返す",
                    "desc_ko": "사용 가능한 재생 장치 열거. 각 장치의 name + isDefault 반환",
                    "examples": [
                        {
                            "name": "audioSynthExample",
                            "group": "sound"
                        },
                        {
                            "name": "audioDeviceExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "getSampleRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current engine sample rate (Hz). Returns default (48000) if not yet initialized.",
                    "snippet": "AudioEngine::getInstance().getSampleRate()",
                    "keywords": [],
                    "desc_ja": "現在のエンジン sample rate (Hz)。未 init なら default (48000)",
                    "desc_ko": "현재 엔진 sample rate (Hz). 미 init이면 default (48000)"
                },
                {
                    "name": "getChannels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current engine output channel count",
                    "snippet": "AudioEngine::getInstance().getChannels()",
                    "keywords": [],
                    "desc_ja": "現在のエンジン出力 ch 数",
                    "desc_ko": "현재 엔진 출력 채널 수"
                },
                {
                    "name": "getMaxPolyphony",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Max simultaneously-playing Sound voices",
                    "snippet": "AudioEngine::getInstance().getMaxPolyphony()",
                    "keywords": [],
                    "desc_ja": "同時再生可能な Sound voice 数",
                    "desc_ko": "동시 재생 가능한 Sound voice 수"
                },
                {
                    "name": "getBufferSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current device buffer size in frames (0 = miniaudio default)",
                    "snippet": "AudioEngine::getInstance().getBufferSize()",
                    "keywords": [],
                    "desc_ja": "現在のデバイス buffer サイズ (frames)、0 は miniaudio おまかせ",
                    "desc_ko": "현재 장치 버퍼 크기 (frames), 0은 miniaudio 기본값"
                },
                {
                    "name": "isInitialized",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True after a successful init()",
                    "snippet": "AudioEngine::getInstance().isInitialized()",
                    "keywords": [],
                    "desc_ja": "init() に成功していれば true",
                    "desc_ko": "init()이 성공했으면 true"
                },
                {
                    "name": "audioOut",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Event<AudioOutBuffer>",
                    "desc": "Real-time playback callback event. listen() to add a synthesis / processing listener. Fires per audio buffer on the audio thread; keep RT-safe.",
                    "snippet": "AudioEngine::getInstance().audioOut.listen([](AudioOutBuffer& buf){ /* ... */ })",
                    "keywords": [],
                    "desc_ja": "リアルタイム再生コールバック event。listen() でシンセ / 処理用 listener を追加。各バッファごとに audio thread で発火、RT-safe を維持",
                    "desc_ko": "실시간 재생 콜백 이벤트. listen()으로 신스 / 처리 리스너 추가. 버퍼별로 오디오 스레드에서 발화, RT-safe 유지",
                    "examples": [
                        {
                            "name": "audioSynthExample",
                            "group": "sound"
                        },
                        {
                            "name": "audioDeviceExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "audioIn",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Event<AudioInBuffer>",
                    "desc": "Real-time capture callback event (microphone input). RT-safe same as audioOut.",
                    "snippet": "AudioEngine::getInstance().audioIn.listen([](AudioInBuffer& buf){ /* ... */ })",
                    "keywords": [],
                    "desc_ja": "リアルタイム入力コールバック event (マイク入力)。RT-safe 要件は audioOut と同様",
                    "desc_ko": "실시간 캡처 콜백 이벤트 (마이크 입력). RT-safe 요건은 audioOut과 동일"
                },
                {
                    "name": "audioDeviceChanged",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Event<AudioDeviceChangedArgs>",
                    "desc": "Fires after every successful init() (initial AND re-init). Args carry the resolved device's real name, isDefaultDevice flag, sampleRate, channels, bufferSize, maxPolyphony. Listener runs on the thread that called init() (main), not the audio thread.",
                    "snippet": "AudioEngine::getInstance().audioDeviceChanged.listen([](AudioDeviceChangedArgs& a){ /* ... */ })",
                    "keywords": [],
                    "desc_ja": "成功した init() (初回 / 再 init) 後に発火。args は解決済みデバイス名、isDefaultDevice、sampleRate、channels、bufferSize、maxPolyphony。listener は init() を呼んだスレッド (通常 main) で実行",
                    "desc_ko": "성공한 init() (초기 / 재 init) 후 발화. args는 해결된 장치명, isDefaultDevice, sampleRate, channels, bufferSize, maxPolyphony. listener는 init()을 호출한 스레드 (보통 main)에서 실행"
                },
                {
                    "name": "initAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Initialize the global AudioEngine. Called automatically by Sound::load() / play(), so manual use is only needed to start audio early (e.g. before an audioOut synthesis listener).",
                    "snippet": "initAudio()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "shutdownAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Shut down the global AudioEngine and close the audio device. Usually unnecessary (runs at program exit).",
                    "snippet": "shutdownAudio()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getAudioAnalysisBuffer",
                    "params": "outBuffer, numSamples",
                    "params_typed": "float* outBuffer, size_t numSamples",
                    "return_type": "size_t",
                    "desc": "Copy the latest mixed output samples (mono, L+R average) into outBuffer for FFT / visualization. numSamples is capped at the analysis buffer size (4096). Returns the number of samples written.",
                    "snippet": "getAudioAnalysisBuffer(${1:outBuffer}, ${2:numSamples})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "soundPlayerFFTExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "getMicInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "MicInput&",
                    "desc": "Get the global MicInput singleton (microphone capture). Call start() on it to open the device.",
                    "snippet": "getMicInput()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "micInputExample",
                            "group": "sound"
                        }
                    ]
                },
                {
                    "name": "getMicAnalysisBuffer",
                    "params": "outBuffer, numSamples",
                    "params_typed": "float* outBuffer, size_t numSamples",
                    "return_type": "size_t",
                    "desc": "Copy the latest microphone input samples into outBuffer. Convenience wrapper over getMicInput().getBuffer(). numSamples is capped at the mic buffer size (4096). Returns the number of samples written.",
                    "snippet": "getMicAnalysisBuffer(${1:outBuffer}, ${2:numSamples})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "micInputExample",
                            "group": "sound"
                        }
                    ]
                }
            ],
            "name_ja": "オーディオエンジン",
            "name_ko": "오디오 엔진"
        },
        {
            "name": "ChipSound",
            "functions": [
                {
                    "name": "ChipSoundNote",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a chip sound note (8-bit style sound)",
                    "snippet": "ChipSoundNote note;",
                    "keywords": [],
                    "desc_ja": "チップサウンドノートを作成（8bitスタイルのサウンド）",
                    "desc_ko": "칩 사운드 노트를 생성 (8비트 스타일 사운드)"
                },
                {
                    "name": "wave",
                    "params": "type",
                    "params_typed": "Wave type",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set wave type (Sin, Square, Triangle, Sawtooth, Noise, PinkNoise)",
                    "snippet": "wave(Wave::Square)",
                    "keywords": [],
                    "desc_ja": "波形タイプを設定",
                    "desc_ko": "파형 타입을 설정 (Sin, Square, Triangle, Sawtooth, Noise, PinkNoise)"
                },
                {
                    "name": "hz",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set frequency in Hz",
                    "snippet": "hz(${1:440})",
                    "keywords": [],
                    "desc_ja": "周波数を設定（Hz）",
                    "desc_ko": "주파수를 Hz로 설정"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set note duration in seconds",
                    "snippet": "duration(${1:0.5})",
                    "keywords": [],
                    "desc_ja": "ノートの長さを設定（秒）",
                    "desc_ko": "노트 길이를 초 단위로 설정"
                },
                {
                    "name": "volume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set volume (0.0-1.0)",
                    "snippet": "volume(${1:0.8})",
                    "keywords": [],
                    "desc_ja": "音量を設定",
                    "desc_ko": "음량을 설정 (0.0-1.0)"
                },
                {
                    "name": "attack",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set attack time (ADSR envelope)",
                    "snippet": "attack(${1:0.01})",
                    "keywords": [],
                    "desc_ja": "アタック時間を設定",
                    "desc_ko": "어택 시간을 설정 (ADSR 엔벨로프)"
                },
                {
                    "name": "decay",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set decay time (ADSR envelope)",
                    "snippet": "decay(${1:0.1})",
                    "keywords": [],
                    "desc_ja": "ディケイ時間を設定",
                    "desc_ko": "디케이 시간을 설정 (ADSR 엔벨로프)"
                },
                {
                    "name": "sustain",
                    "params": "level",
                    "params_typed": "float level",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set sustain level (0.0-1.0)",
                    "snippet": "sustain(${1:0.7})",
                    "keywords": [],
                    "desc_ja": "サスティンレベルを設定",
                    "desc_ko": "서스테인 레벨을 설정 (0.0-1.0)"
                },
                {
                    "name": "release",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set release time (ADSR envelope)",
                    "snippet": "release(${1:0.2})",
                    "keywords": [],
                    "desc_ja": "リリース時間を設定",
                    "desc_ko": "릴리스 시간을 설정 (ADSR 엔벨로프)"
                },
                {
                    "name": "adsr",
                    "params": "a, d, s, r",
                    "params_typed": "float a, float d, float s, float r",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set ADSR envelope (attack, decay, sustain, release)",
                    "snippet": "adsr(${1:0.01}, ${2:0.1}, ${3:0.7}, ${4:0.2})",
                    "keywords": [],
                    "desc_ja": "ADSRエンベロープを設定",
                    "desc_ko": "ADSR 엔벨로프 설정 (어택, 디케이, 서스테인, 릴리스)"
                },
                {
                    "name": "build",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Build and return Sound object from note",
                    "snippet": "build()",
                    "keywords": [],
                    "desc_ja": "ノートからSoundオブジェクトを生成",
                    "desc_ko": "노트로부터 Sound 객체를 생성하여 반환"
                },
                {
                    "name": "createChipBundle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle@",
                    "desc": "Create a chip sound bundle for sequencing multiple notes",
                    "snippet": "ChipSoundBundle@ bundle = createChipBundle();",
                    "keywords": [],
                    "desc_ja": "複数ノートのシーケンス用バンドルを作成",
                    "desc_ko": "여러 노트를 시퀀싱하기 위한 칩 사운드 번들을 생성"
                },
                {
                    "name": "add",
                    "params": "note, time",
                    "params_typed": "const ChipSoundNote& note, float time",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Add a note at specified time (seconds)",
                    "snippet": "add(${1:note}, ${2:0.0})",
                    "keywords": [],
                    "desc_ja": "指定時間にノートを追加",
                    "desc_ko": "지정한 시간(초)에 노트를 추가"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Clear all notes from bundle",
                    "snippet": "clear()",
                    "keywords": [],
                    "desc_ja": "バンドル内の全ノートをクリア",
                    "desc_ko": "번들의 모든 노트를 지움"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the total duration of the bundle",
                    "snippet": "getDuration()",
                    "keywords": [],
                    "desc_ja": "バンドルの総再生時間を取得",
                    "desc_ko": "번들의 총 재생 시간을 얻음"
                }
            ],
            "name_ja": "チップサウンド",
            "name_ko": "칩사운드"
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
                    "snippet": "Font@ font = createFont();",
                    "keywords": [],
                    "desc_ja": "TrueTypeフォントを作成",
                    "desc_ko": "TrueType 폰트를 생성"
                },
                {
                    "name": "load",
                    "params": "path, size",
                    "params_typed": "const string& path, int size",
                    "return_type": "bool",
                    "desc": "Load TTF font file",
                    "snippet": "load(FONT_SANS, ${1:24})",
                    "keywords": [],
                    "desc_ja": "TTFフォントを読み込む",
                    "desc_ko": "TTF 폰트 파일을 로드"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if font is loaded",
                    "snippet": "isLoaded()",
                    "keywords": [],
                    "desc_ja": "フォントが読み込まれているか",
                    "desc_ko": "폰트가 로드되었는지 확인"
                },
                {
                    "name": "drawString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text at position",
                    "snippet": "drawString(${1:\"Hello\"}, ${2:100}, ${3:100})",
                    "keywords": [],
                    "desc_ja": "テキストを描画",
                    "desc_ko": "지정한 위치에 텍스트를 그림"
                },
                {
                    "name": "getStringPath",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "Path",
                    "desc": "Get text outline as a Path (one subpath per contour). Stays crisp under scale / rotation; use drawStroke / drawFill (holes auto-detected for e, a, O, 日, etc.).",
                    "snippet": "getStringPath(${1:\"Hello\"}, ${2:100}, ${3:100})",
                    "keywords": [],
                    "desc_ja": "テキストの輪郭を Path で取得 (1 contour = 1 subpath)。拡大・回転に強く、drawStroke / drawFill (e, a, O, 日 等の穴は自動検出) で描画。",
                    "desc_ko": "텍스트 윤곽을 Path로 가져오기 (1 contour = 1 subpath). 확대 / 회전에 강함. drawStroke / drawFill (구멍 자동 검출)."
                },
                {
                    "name": "getWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width in pixels",
                    "snippet": "getWidth(${1:\"text\"})",
                    "keywords": [],
                    "desc_ja": "テキストの幅を取得",
                    "desc_ko": "텍스트 너비를 픽셀로 얻음"
                },
                {
                    "name": "getHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height in pixels",
                    "snippet": "getHeight(${1:\"text\"})",
                    "keywords": [],
                    "desc_ja": "テキストの高さを取得",
                    "desc_ko": "텍스트 높이를 픽셀로 얻음"
                },
                {
                    "name": "getLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height",
                    "snippet": "getLineHeight()",
                    "keywords": [],
                    "desc_ja": "行の高さを取得",
                    "desc_ko": "줄 높이를 얻음"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get font size",
                    "snippet": "getSize()",
                    "keywords": [],
                    "desc_ja": "フォントサイズを取得",
                    "desc_ko": "폰트 크기를 얻음"
                },
                {
                    "name": "systemFontPath",
                    "params": "name",
                    "params_typed": "const string& name",
                    "return_type": "string",
                    "desc": "Resolve a system font name (PostScript / family) to a file path. Returns empty string if not found. macOS uses CoreText; Linux/Windows currently stub.",
                    "snippet": "systemFontPath(${1:\"HiraginoSans-W3\"})",
                    "keywords": [],
                    "desc_ja": "システムフォント名（PostScript 名や family 名）をファイルパスに解決。見つからなければ空文字を返す。macOS は CoreText、Linux/Win は現状スタブ",
                    "desc_ko": "시스템 폰트 이름을 파일 경로로 변환"
                },
                {
                    "name": "listSystemFonts",
                    "params": "",
                    "params_typed": "",
                    "return_type": "vector<string>",
                    "desc": "Enumerate names of all fonts known to the OS",
                    "snippet": "listSystemFonts()",
                    "keywords": [],
                    "desc_ja": "OS が認識している全フォント名を取得",
                    "desc_ko": "시스템에 설치된 모든 폰트 이름을 나열"
                },
                {
                    "name": "registerGlyph",
                    "params": "g",
                    "params_typed": "const Glyph &g",
                    "return_type": "void",
                    "desc": "Register one bitmap glyph so drawBitmapString can render its codepoint. Replaces any glyph already registered at the same codepoint and marks the atlas dirty for re-upload",
                    "snippet": "registerGlyph(${1:glyph})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "registerGlyphs",
                    "params": "glyphs",
                    "params_typed": "const Glyph (&glyphs)[N]",
                    "return_type": "void",
                    "desc": "Register a fixed-size array of bitmap glyphs in one call (template over the array size)",
                    "snippet": "registerGlyphs(${1:glyphs})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "bitmapStringExtendedExample",
                            "group": "font"
                        }
                    ]
                },
                {
                    "name": "updateGlyph",
                    "params": "cp, newData",
                    "params_typed": "uint32_t cp, const uint8_t *newData",
                    "return_type": "void",
                    "desc": "Swap the pixel data of an already-registered glyph without changing its atlas position. Useful for animating a glyph by updating its data each frame",
                    "snippet": "updateGlyph(${1:codepoint}, ${2:newData})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": "",
                    "examples": [
                        {
                            "name": "bitmapStringExtendedExample",
                            "group": "font"
                        }
                    ]
                }
            ],
            "name_ja": "フォント",
            "name_ko": "폰트"
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
                    "snippet": "ease(${1:t}, EaseType::${2:Cubic}, EaseMode::${3:InOut})",
                    "keywords": [],
                    "desc_ja": "イージングを適用 (0-1)",
                    "desc_ko": "값에 easing 적용 (0-1)",
                    "examples": [
                        {
                            "name": "tweenExample",
                            "group": "animation"
                        }
                    ]
                },
                {
                    "name": "easeIn",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in to value (0-1)",
                    "snippet": "easeIn(${1:t}, EaseType::${2:Cubic})",
                    "keywords": [],
                    "desc_ja": "イーズインを適用 (0-1)",
                    "desc_ko": "값에 ease-in 적용 (0-1)"
                },
                {
                    "name": "easeOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-out to value (0-1)",
                    "snippet": "easeOut(${1:t}, EaseType::${2:Cubic})",
                    "keywords": [],
                    "desc_ja": "イーズアウトを適用 (0-1)",
                    "desc_ko": "값에 ease-out 적용 (0-1)"
                },
                {
                    "name": "easeInOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in-out to value (0-1)",
                    "snippet": "easeInOut(${1:t}, EaseType::${2:Cubic})",
                    "keywords": [],
                    "desc_ja": "イーズインアウトを適用 (0-1)",
                    "desc_ko": "값에 ease-in-out 적용 (0-1)"
                },
                {
                    "name": "createTween",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Create a tween object",
                    "snippet": "createTween()",
                    "keywords": [],
                    "desc_ja": "トゥイーンを作成",
                    "desc_ko": "tween 객체를 생성"
                },
                {
                    "name": "from",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set start value",
                    "snippet": "from(${1:0.0})",
                    "keywords": [],
                    "desc_ja": "開始値を設定",
                    "desc_ko": "시작 값을 설정"
                },
                {
                    "name": "to",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set end value",
                    "snippet": "to(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "終了値を設定",
                    "desc_ko": "끝 값을 설정"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "Tween@",
                    "desc": "Set animation duration",
                    "snippet": "duration(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "再生時間を設定",
                    "desc_ko": "애니메이션 길이를 설정"
                },
                {
                    "name": "ease",
                    "params": "type",
                    "params_typed": "EaseType type",
                    "return_type": "Tween@",
                    "desc": "Set easing type",
                    "snippet": "ease(EaseType::${1:Cubic})",
                    "keywords": [],
                    "desc_ja": "イージングタイプを設定",
                    "desc_ko": "easing 타입을 설정",
                    "examples": [
                        {
                            "name": "tweenExample",
                            "group": "animation"
                        }
                    ]
                },
                {
                    "name": "start",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Start animation (chainable)",
                    "snippet": "start()",
                    "keywords": [],
                    "desc_ja": "開始（チェーン可能）",
                    "desc_ko": "애니메이션 시작 (체이닝 가능)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "pause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Pause animation (chainable)",
                    "snippet": "pause()",
                    "keywords": [],
                    "desc_ja": "一時停止（チェーン可能）",
                    "desc_ko": "애니메이션 일시정지 (체이닝 가능)"
                },
                {
                    "name": "resume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Resume animation (chainable)",
                    "snippet": "resume()",
                    "keywords": [],
                    "desc_ja": "再開（チェーン可能）",
                    "desc_ko": "애니메이션 재개 (체이닝 가능)"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Reset animation (chainable)",
                    "snippet": "reset()",
                    "keywords": [],
                    "desc_ja": "リセット（チェーン可能）",
                    "desc_ko": "애니메이션 리셋 (체이닝 가능)"
                },
                {
                    "name": "finish",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Jump to end (chainable)",
                    "snippet": "finish()",
                    "keywords": [],
                    "desc_ja": "終了位置にジャンプ（チェーン可能）",
                    "desc_ko": "끝 위치로 점프 (체이닝 가능)"
                },
                {
                    "name": "loop",
                    "params": "count",
                    "params_typed": "int count = -1",
                    "return_type": "Tween@",
                    "desc": "Set loop count (-1=infinite, 0=none, N=repeat N times)",
                    "snippet": "loop(${1:-1})",
                    "keywords": [],
                    "desc_ja": "ループ回数を設定 (-1=無限, 0=なし, N=N回繰り返し)",
                    "desc_ko": "반복 횟수 설정 (-1=무한, 0=없음, N=N번 반복)"
                },
                {
                    "name": "yoyo",
                    "params": "enable",
                    "params_typed": "bool enable = true",
                    "return_type": "Tween@",
                    "desc": "Enable yoyo (reverse direction each loop)",
                    "snippet": "yoyo()",
                    "keywords": [],
                    "desc_ja": "ヨーヨー（ループごとに方向反転）を有効化",
                    "desc_ko": "요요 활성화 (반복마다 방향 반전)"
                },
                {
                    "name": "getValue",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current tween value",
                    "snippet": "getValue()",
                    "keywords": [],
                    "desc_ja": "現在の値を取得",
                    "desc_ko": "현재 트윈 값을 얻음",
                    "examples": [
                        {
                            "name": "uiExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "getProgress",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get progress (0-1)",
                    "snippet": "getProgress()",
                    "keywords": [],
                    "desc_ja": "進行度を取得 (0-1)",
                    "desc_ko": "진행도를 얻음 (0-1)"
                },
                {
                    "name": "getElapsed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get elapsed time",
                    "snippet": "getElapsed()",
                    "keywords": [],
                    "desc_ja": "経過時間を取得",
                    "desc_ko": "경과 시간을 얻음"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get duration",
                    "snippet": "getDuration()",
                    "keywords": [],
                    "desc_ja": "再生時間を取得",
                    "desc_ko": "재생 시간을 얻음"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playing",
                    "snippet": "isPlaying()",
                    "keywords": [],
                    "desc_ja": "再生中か確認",
                    "desc_ko": "재생 중인지 확인"
                },
                {
                    "name": "isComplete",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if complete",
                    "snippet": "isComplete()",
                    "keywords": [],
                    "desc_ja": "完了したか確認",
                    "desc_ko": "완료되었는지 확인"
                },
                {
                    "name": "getStart",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get start value",
                    "snippet": "getStart()",
                    "keywords": [],
                    "desc_ja": "開始値を取得",
                    "desc_ko": "시작 값을 얻음"
                },
                {
                    "name": "getEnd",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get end value",
                    "snippet": "getEnd()",
                    "keywords": [],
                    "desc_ja": "終了値を取得",
                    "desc_ko": "끝 값을 얻음"
                },
                {
                    "name": "getLoopCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get number of completed loop iterations",
                    "snippet": "getLoopCount()",
                    "keywords": [],
                    "desc_ja": "完了したループ回数を取得",
                    "desc_ko": "완료된 반복 횟수를 얻음"
                }
            ],
            "name_ja": "アニメーション",
            "name_ko": "애니메이션"
        },
        {
            "name": "Types - Vec2",
            "functions": [
                {
                    "name": "Vec2",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)",
                    "snippet": "Vec2(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "2Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "2D 벡터를 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "Vec2",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)",
                    "snippet": "Vec2(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "2Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "2D 벡터를 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "Vec2",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)",
                    "snippet": "Vec2(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "2Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "2D 벡터를 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "set",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "Vec2&",
                    "desc": "Set vector components (type method)",
                    "snippet": "set(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "set",
                    "params": "v",
                    "params_typed": "Vec2 v",
                    "return_type": "Vec2&",
                    "desc": "Set vector components (type method)",
                    "snippet": "set(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})",
                    "keywords": [],
                    "desc_ja": "角度からVec2を作成",
                    "desc_ko": "각도로부터 Vec2를 생성"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "params_typed": "float radians, float length",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "snippet": "Vec2_fromAngle(${1:radians})",
                    "keywords": [],
                    "desc_ja": "角度からVec2を作成",
                    "desc_ko": "각도로부터 Vec2를 생성"
                }
            ],
            "name_ja": "型 - Vec2",
            "name_ko": "타입 - Vec2"
        },
        {
            "name": "Types - Vec3",
            "functions": [
                {
                    "name": "Vec3",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "3Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "3D 벡터를 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "Vec3",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "3Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "3D 벡터를 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "Vec3",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "3Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "3D 벡터를 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "curveVariationsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "curvesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "set",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Vec3&",
                    "desc": "Set vector components (type method)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "set",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "Vec3&",
                    "desc": "Set vector components (type method)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)"
                }
            ],
            "name_ja": "型 - Vec3",
            "name_ko": "타입 - Vec3"
        },
        {
            "name": "Types - Color",
            "functions": [
                {
                    "name": "Color",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create color (type constructor)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色を作成（型コンストラクタ）",
                    "desc_ko": "색상을 생성 (타입 생성자)"
                },
                {
                    "name": "Color",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "",
                    "desc": "Create color (type constructor)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色を作成（型コンストラクタ）",
                    "desc_ko": "색상을 생성 (타입 생성자)"
                },
                {
                    "name": "Color",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "",
                    "desc": "Create color (type constructor)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色を作成（型コンストラクタ）",
                    "desc_ko": "색상을 생성 (타입 생성자)"
                },
                {
                    "name": "set",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "set",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "set",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "set",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)"
                },
                {
                    "name": "toHSB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorHSB",
                    "desc": "Convert to HSB color space (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "toHSB()",
                    "keywords": [],
                    "desc_ja": "HSB色空間に変換 (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ko": "HSB 색공간으로 변환 (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "toOKLab",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLab",
                    "desc": "Convert to OKLab color space (perceptually uniform)",
                    "snippet": "toOKLab()",
                    "keywords": [],
                    "desc_ja": "OKLab色空間に変換（知覚的に均一）",
                    "desc_ko": "OKLab 색공간으로 변환 (지각적으로 균일)"
                },
                {
                    "name": "toOKLCH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLCH",
                    "desc": "Convert to OKLCH color space (L: 0-1, C: 0-0.4, H: 0-1)",
                    "snippet": "toOKLCH()",
                    "keywords": [],
                    "desc_ja": "OKLCH色空間に変換 (L: 0-1, C: 0-0.4, H: 0-1)",
                    "desc_ko": "OKLCH 색공간으로 변환 (L: 0-1, C: 0-0.4, H: 0-1)"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "HSBからColorを作成 (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ko": "HSB로부터 Color를 생성 (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "HSBからColorを作成 (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ko": "HSB로부터 Color를 생성 (H: 0-1, S: 0-1, B: 0-1)"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)",
                    "snippet": "colorFromHSB(${1:h}, ${2:s}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "HSBからColorを作成（Color_fromHSBのエイリアス）",
                    "desc_ko": "HSB로부터 Color를 생성 (Color_fromHSB의 별칭)",
                    "examples": [
                        {
                            "name": "strokeMeshExample",
                            "group": "graphics"
                        },
                        {
                            "name": "clippingExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)",
                    "snippet": "colorFromHSB(${1:h}, ${2:s}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "HSBからColorを作成（Color_fromHSBのエイリアス）",
                    "desc_ko": "HSB로부터 Color를 생성 (Color_fromHSB의 별칭)",
                    "examples": [
                        {
                            "name": "strokeMeshExample",
                            "group": "graphics"
                        },
                        {
                            "name": "clippingExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})",
                    "keywords": [],
                    "desc_ja": "OKLCHからColorを作成",
                    "desc_ko": "OKLCH로부터 Color를 생성"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})",
                    "keywords": [],
                    "desc_ja": "OKLCHからColorを作成",
                    "desc_ko": "OKLCH로부터 Color를 생성"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "OKLabからColorを作成",
                    "desc_ko": "OKLab으로부터 Color를 생성"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b, alpha",
                    "params_typed": "float L, float a, float b, float alpha",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "OKLabからColorを作成",
                    "desc_ko": "OKLab으로부터 Color를 생성"
                }
            ],
            "name_ja": "型 - Color",
            "name_ko": "타입 - Color"
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
                    "snippet": "ColorHSB(${1:h}, ${2:s}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "HSBカラー型 (H: 0-1, S: 0-1, B: 0-1)。toRGB()でColorに変換",
                    "desc_ko": "HSB 색상 타입 (H: 0-1, S: 0-1, B: 0-1). toRGB()로 Color로 변환",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        },
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "ColorHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "",
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color",
                    "snippet": "ColorHSB(${1:h}, ${2:s}, ${3:b})",
                    "keywords": [],
                    "desc_ja": "HSBカラー型 (H: 0-1, S: 0-1, B: 0-1)。toRGB()でColorに変換",
                    "desc_ko": "HSB 색상 타입 (H: 0-1, S: 0-1, B: 0-1). toRGB()로 Color로 변환",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        },
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorHSB to Color (RGB)",
                    "snippet": "toRGB()",
                    "keywords": [],
                    "desc_ja": "ColorHSBをColor (RGB) に変換",
                    "desc_ko": "ColorHSB를 Color (RGB)로 변환"
                },
                {
                    "name": "lerp",
                    "params": "target, t",
                    "params_typed": "ColorHSB target, float t",
                    "return_type": "ColorHSB",
                    "desc": "Interpolate in HSB space (shortest hue path)",
                    "snippet": "lerp(${1:target}, ${2:t})",
                    "keywords": [],
                    "desc_ja": "HSB空間で補間（色相は最短経路）",
                    "desc_ko": "HSB 공간에서 보간 (색상은 최단 경로)",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                }
            ],
            "name_ja": "型 - ColorHSB",
            "name_ko": "타입 - ColorHSB"
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
                    "snippet": "ColorOKLCH(${1:L}, ${2:C}, ${3:H})",
                    "keywords": [],
                    "desc_ja": "OKLCHカラー型 (L: 0-1, C: 0-0.4, H: 0-1)。知覚的に均一",
                    "desc_ko": "OKLCH 색상 타입 (L: 0-1, C: 0-0.4, H: 0-1). 지각적으로 균일",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "ColorOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "",
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform",
                    "snippet": "ColorOKLCH(${1:L}, ${2:C}, ${3:H})",
                    "keywords": [],
                    "desc_ja": "OKLCHカラー型 (L: 0-1, C: 0-0.4, H: 0-1)。知覚的に均一",
                    "desc_ko": "OKLCH 색상 타입 (L: 0-1, C: 0-0.4, H: 0-1). 지각적으로 균일",
                    "examples": [
                        {
                            "name": "colorExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorOKLCH to Color (RGB)",
                    "snippet": "toRGB()",
                    "keywords": [],
                    "desc_ja": "ColorOKLCHをColor (RGB) に変換",
                    "desc_ko": "ColorOKLCH를 Color (RGB)로 변환"
                },
                {
                    "name": "lerp",
                    "params": "target, t",
                    "params_typed": "ColorOKLCH target, float t",
                    "return_type": "ColorOKLCH",
                    "desc": "Interpolate in OKLCH space (shortest hue path, perceptually uniform)",
                    "snippet": "lerp(${1:target}, ${2:t})",
                    "keywords": [],
                    "desc_ja": "OKLCH空間で補間（色相は最短経路、知覚的に均一）",
                    "desc_ko": "OKLCH 공간에서 보간 (색상은 최단 경로, 지각적으로 균일)",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                }
            ],
            "name_ja": "型 - ColorOKLCH",
            "name_ko": "타입 - ColorOKLCH"
        },
        {
            "name": "Types - Rect",
            "functions": [
                {
                    "name": "Rect",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a rectangle (type constructor)",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形を作成（型コンストラクタ）",
                    "desc_ko": "사각형을 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "Rect",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "",
                    "desc": "Create a rectangle (type constructor)",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形を作成（型コンストラクタ）",
                    "desc_ko": "사각형을 생성 (타입 생성자)",
                    "examples": [
                        {
                            "name": "fontExample",
                            "group": "font"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "set",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties (type method)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形のプロパティを設定（型メソッド）",
                    "desc_ko": "사각형 속성을 설정 (타입 메서드)"
                },
                {
                    "name": "set",
                    "params": "pos, w, h",
                    "params_typed": "Vec2 pos, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties (type method)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})",
                    "keywords": [],
                    "desc_ja": "矩形のプロパティを設定（型メソッド）",
                    "desc_ko": "사각형 속성을 설정 (타입 메서드)"
                },
                {
                    "name": "contains",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "bool",
                    "desc": "Check if point is inside (type method)",
                    "snippet": "contains(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "点が内部にあるか判定（型メソッド）",
                    "desc_ko": "점이 내부에 있는지 확인 (타입 메서드)"
                },
                {
                    "name": "intersects",
                    "params": "other",
                    "params_typed": "Rect other",
                    "return_type": "bool",
                    "desc": "Check intersection (type method)",
                    "snippet": "intersects(${1:other})",
                    "keywords": [],
                    "desc_ja": "交差判定（型メソッド）",
                    "desc_ko": "교차 여부 확인 (타입 메서드)"
                }
            ],
            "name_ja": "型 - Rect",
            "name_ko": "타입 - Rect"
        },
        {
            "name": "Scene Graph",
            "functions": [
                {
                    "name": "Node",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a base scene node (C++ only - uses shared_ptr)",
                    "snippet": "Node()",
                    "keywords": [],
                    "desc_ja": "ベースノードを作成（C++のみ - shared_ptr使用）",
                    "desc_ko": "기본 씬 노드를 생성 (C++ 전용 - shared_ptr 사용)"
                },
                {
                    "name": "addChild",
                    "params": "child",
                    "params_typed": "shared_ptr<Node> child",
                    "return_type": "void",
                    "desc": "Add a child node (C++ only)",
                    "snippet": "addChild(${1:child})",
                    "keywords": [],
                    "desc_ja": "子ノードを追加（C++のみ）",
                    "desc_ko": "자식 노드를 추가 (C++ 전용)",
                    "examples": [
                        {
                            "name": "chipSoundExample",
                            "group": "sound"
                        },
                        {
                            "name": "timerExample",
                            "group": "utils"
                        },
                        {
                            "name": "tweenModExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "moveToFront",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Move this node to the end of its parent's child list — drawn last, on top of siblings. No-op if no parent or already last (C++ only)",
                    "snippet": "moveToFront()",
                    "keywords": [],
                    "desc_ja": "親の子リストの末尾へ移動。最後に描画され、兄弟の最前面に表示される。親がない / すでに末尾の場合は何もしない（C++のみ）",
                    "desc_ko": "이 노드를 부모의 자식 리스트 끝으로 이동 — 마지막에 그려지므로 형제들 위에 표시됨. 부모가 없거나 이미 마지막이면 동작 안 함 (C++ 전용)"
                },
                {
                    "name": "moveToBack",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Move this node to the beginning of its parent's child list — drawn first, beneath siblings. No-op if no parent or already first (C++ only)",
                    "snippet": "moveToBack()",
                    "keywords": [],
                    "desc_ja": "親の子リストの先頭へ移動。最初に描画され、兄弟の最背面に表示される。親がない / すでに先頭の場合は何もしない（C++のみ）",
                    "desc_ko": "이 노드를 부모의 자식 리스트 처음으로 이동 — 먼저 그려지므로 형제들 아래에 표시됨. 부모가 없거나 이미 처음이면 동작 안 함 (C++ 전용)"
                },
                {
                    "name": "destroy",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Mark node for deferred removal from scene graph (C++ only)",
                    "snippet": "destroy()",
                    "keywords": [],
                    "desc_ja": "ノードを削除予約する（次のupdate時にツリーから除去、C++のみ）",
                    "desc_ko": "노드를 지연 제거 대상으로 표시 (다음 update에서 트리에서 제거, C++ 전용)"
                },
                {
                    "name": "isDead",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if node is marked for destruction (C++ only)",
                    "snippet": "isDead()",
                    "keywords": [],
                    "desc_ja": "ノードが削除予約されているか（C++のみ）",
                    "desc_ko": "노드가 제거 대상으로 표시되었는지 확인 (C++ 전용)"
                },
                {
                    "name": "setPosition",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Set position (C++ only)",
                    "snippet": "setPosition(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "位置を設定（C++のみ）",
                    "desc_ko": "위치를 설정 (C++ 전용)"
                },
                {
                    "name": "setPosition",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Set position (C++ only)",
                    "snippet": "setPosition(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "位置を設定（C++のみ）",
                    "desc_ko": "위치를 설정 (C++ 전용)"
                },
                {
                    "name": "RectNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 2D rectangle node (C++ only - uses shared_ptr)",
                    "snippet": "RectNode()",
                    "keywords": [],
                    "desc_ja": "矩形ノードを作成（C++のみ - shared_ptr使用）",
                    "desc_ko": "2D 사각형 노드를 생성 (C++ 전용 - shared_ptr 사용)"
                },
                {
                    "name": "setSize",
                    "params": "w, h",
                    "params_typed": "float w, float h",
                    "return_type": "void",
                    "desc": "Set size (C++ only)",
                    "snippet": "setSize(${1:w}, ${2:h})",
                    "keywords": [],
                    "desc_ja": "サイズを設定（C++のみ）",
                    "desc_ko": "크기를 설정 (C++ 전용)",
                    "examples": [
                        {
                            "name": "uiExample",
                            "group": "node"
                        },
                        {
                            "name": "layoutModExample",
                            "group": "node"
                        },
                        {
                            "name": "scrollContainerExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "setClipping",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Enable/disable scissor clipping for RectNode (C++ only)",
                    "snippet": "setClipping(${1:true})",
                    "keywords": [],
                    "desc_ja": "RectNodeのシザークリッピングを有効/無効化（C++のみ）",
                    "desc_ko": "RectNode의 시저 클리핑을 활성/비활성 (C++ 전용)",
                    "examples": [
                        {
                            "name": "clippingExample",
                            "group": "graphics"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "enableEvents",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse/key events for this node (C++ only)",
                    "snippet": "enableEvents()",
                    "keywords": [],
                    "desc_ja": "このノードのマウス/キーイベントを有効化（C++のみ）",
                    "desc_ko": "이 노드의 마우스/키 이벤트를 활성화 (C++ 전용)",
                    "examples": [
                        {
                            "name": "hitTestExample",
                            "group": "node"
                        },
                        {
                            "name": "uiExample",
                            "group": "node"
                        },
                        {
                            "name": "grabExample",
                            "group": "node"
                        }
                    ]
                },
                {
                    "name": "ScrollContainer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Scrollable container node with clipping (C++ only)",
                    "snippet": "make_shared<ScrollContainer>()",
                    "keywords": [],
                    "desc_ja": "クリッピング付きスクロール可能コンテナノード（C++のみ）",
                    "desc_ko": "클리핑이 있는 스크롤 가능 컨테이너 노드 (C++ 전용)"
                },
                {
                    "name": "setContent",
                    "params": "content",
                    "params_typed": "shared_ptr<RectNode> content",
                    "return_type": "void",
                    "desc": "Set content node for ScrollContainer (C++ only)",
                    "snippet": "setContent(${1:content})",
                    "keywords": [],
                    "desc_ja": "ScrollContainerのコンテンツノードを設定（C++のみ）",
                    "desc_ko": "ScrollContainer의 콘텐츠 노드를 설정 (C++ 전용)"
                },
                {
                    "name": "setScrollY",
                    "params": "y",
                    "params_typed": "float y",
                    "return_type": "void",
                    "desc": "Set vertical scroll position (C++ only)",
                    "snippet": "setScrollY(${1:0})",
                    "keywords": [],
                    "desc_ja": "縦スクロール位置を設定（C++のみ）",
                    "desc_ko": "수직 스크롤 위치를 설정 (C++ 전용)"
                },
                {
                    "name": "ScrollBar",
                    "params": "container, dir",
                    "params_typed": "ScrollContainer* container, Direction dir = Vertical",
                    "return_type": "",
                    "desc": "Visual scroll indicator for ScrollContainer (C++ only)",
                    "snippet": "make_shared<ScrollBar>(${1:container}, ScrollBar::Vertical)",
                    "keywords": [],
                    "desc_ja": "ScrollContainer用のスクロールバー表示（C++のみ）",
                    "desc_ko": "ScrollContainer용 시각적 스크롤 인디케이터 (C++ 전용)"
                },
                {
                    "name": "LayoutMod",
                    "params": "dir, spacing",
                    "params_typed": "LayoutDirection dir, float spacing = 0",
                    "return_type": "",
                    "desc": "Layout modifier for automatic child arrangement (C++ only)",
                    "snippet": "addMod<LayoutMod>(LayoutDirection::Vertical, ${1:8.0f})",
                    "keywords": [],
                    "desc_ja": "子ノードの自動配置用レイアウトMod（C++のみ）",
                    "desc_ko": "자식 노드 자동 배치를 위한 레이아웃 모디파이어 (C++ 전용)"
                },
                {
                    "name": "updateLayout",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Recalculate layout (call after adding/removing children) (C++ only)",
                    "snippet": "updateLayout()",
                    "keywords": [],
                    "desc_ja": "レイアウトを再計算（子の追加/削除後に呼ぶ）（C++のみ）",
                    "desc_ko": "레이아웃을 재계산 (자식 추가/제거 후 호출) (C++ 전용)"
                },
                {
                    "name": "TweenMod",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Animation modifier for Node properties (position, scale, rotation) with easing (C++ only)",
                    "snippet": "addMod<TweenMod>()",
                    "keywords": [],
                    "desc_ja": "Nodeプロパティ（位置、スケール、回転）のイージングアニメーションMod（C++のみ）",
                    "desc_ko": "Node 속성(위치, 스케일, 회전)에 이징 애니메이션을 적용하는 모디파이어 (C++ 전용)"
                },
                {
                    "name": "moveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "TweenMod&",
                    "desc": "Animate position to target (TweenMod method) (C++ only)",
                    "snippet": "moveTo(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "位置を目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "위치를 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "moveTo",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "TweenMod&",
                    "desc": "Animate position to target (TweenMod method) (C++ only)",
                    "snippet": "moveTo(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "位置を目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "위치를 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "moveBy",
                    "params": "dx, dy",
                    "params_typed": "float dx, float dy",
                    "return_type": "TweenMod&",
                    "desc": "Animate position by relative amount (TweenMod method) (C++ only)",
                    "snippet": "moveBy(${1:dx}, ${2:dy})",
                    "keywords": [],
                    "desc_ja": "位置を相対量だけアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "위치를 상대적인 양만큼 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "scaleTo",
                    "params": "uniform",
                    "params_typed": "float uniform",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale to target (TweenMod method) (C++ only)",
                    "snippet": "scaleTo(${1:scale})",
                    "keywords": [],
                    "desc_ja": "スケールを目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "스케일을 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "scaleTo",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz = 1",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale to target (TweenMod method) (C++ only)",
                    "snippet": "scaleTo(${1:scale})",
                    "keywords": [],
                    "desc_ja": "スケールを目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "스케일을 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "scaleBy",
                    "params": "factor",
                    "params_typed": "float factor",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale by relative multiplier (TweenMod method) (C++ only)",
                    "snippet": "scaleBy(${1:factor})",
                    "keywords": [],
                    "desc_ja": "スケールを相対倍率でアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "스케일을 상대 배율로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "rotateTo",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation to target angle or quaternion (TweenMod method) (C++ only)",
                    "snippet": "rotateTo(${1:radians})",
                    "keywords": [],
                    "desc_ja": "回転を目標角度またはクォータニオンへアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "회전을 목표 각도 또는 쿼터니언으로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "rotateTo",
                    "params": "q",
                    "params_typed": "Quaternion q",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation to target angle or quaternion (TweenMod method) (C++ only)",
                    "snippet": "rotateTo(${1:radians})",
                    "keywords": [],
                    "desc_ja": "回転を目標角度またはクォータニオンへアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "회전을 목표 각도 또는 쿼터니언으로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "rotateBy",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation by relative angle (TweenMod method) (C++ only)",
                    "snippet": "rotateBy(${1:radians})",
                    "keywords": [],
                    "desc_ja": "回転を相対角度でアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "회전을 상대 각도로 애니메이션 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "TweenMod&",
                    "desc": "Set animation duration (TweenMod method) (C++ only)",
                    "snippet": "duration(${1:1.0f})",
                    "keywords": [],
                    "desc_ja": "アニメーション時間を設定（TweenModメソッド）（C++のみ）",
                    "desc_ko": "애니메이션 길이를 설정 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "ease",
                    "params": "type, mode",
                    "params_typed": "EaseType type, EaseMode mode = InOut",
                    "return_type": "TweenMod&",
                    "desc": "Set easing function (TweenMod method). Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce. Modes: In, Out, InOut (C++ only)",
                    "snippet": "ease(EaseType::${1:Cubic}, EaseMode::${2:InOut})",
                    "keywords": [],
                    "desc_ja": "イージング関数を設定（TweenModメソッド）。Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce。Modes: In, Out, InOut（C++のみ）",
                    "desc_ko": "easing 함수를 설정 (TweenMod 메서드). Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce. Modes: In, Out, InOut (C++ 전용)",
                    "examples": [
                        {
                            "name": "tweenExample",
                            "group": "animation"
                        }
                    ]
                },
                {
                    "name": "delay",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "TweenMod&",
                    "desc": "Set delay before animation starts (TweenMod method) (C++ only)",
                    "snippet": "delay(${1:0.5f})",
                    "keywords": [],
                    "desc_ja": "アニメーション開始前の遅延を設定（TweenModメソッド）（C++のみ）",
                    "desc_ko": "애니메이션 시작 전 지연을 설정 (TweenMod 메서드) (C++ 전용)"
                },
                {
                    "name": "getSelectedNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Node*",
                    "desc": "Get the currently selected node (the last-clicked node, held by the Node system; null if none). A tool such as an inspector can read it and drive it via setSelectedNode().",
                    "snippet": "getSelectedNode()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "setSelectedNode",
                    "params": "n",
                    "params_typed": "Node* n",
                    "return_type": "void",
                    "desc": "Set the currently selected node. Pass nullptr to clear the selection.",
                    "snippet": "setSelectedNode(${1:n})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getRootNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Node*",
                    "desc": "Get the running App as the root of the node tree (set by the framework while the app is alive, null otherwise). Lets tools walk the whole tree without the app passing itself around.",
                    "snippet": "getRootNode()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "シーングラフ",
            "name_ko": "씬 그래프"
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
                    "snippet": "setupScreenPerspective()",
                    "keywords": [],
                    "desc_ja": "パースペクティブ投影を設定（oF風デフォルト3D）",
                    "desc_ko": "원근 투영을 설정 (oF 스타일 기본 3D)"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()",
                    "keywords": [],
                    "desc_ja": "パースペクティブ投影を設定（oF風デフォルト3D）",
                    "desc_ko": "원근 투영을 설정 (oF 스타일 기본 3D)"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "snippet": "setupScreenPerspective()",
                    "keywords": [],
                    "desc_ja": "パースペクティブ投影を設定（oF風デフォルト3D）",
                    "desc_ko": "원근 투영을 설정 (oF 스타일 기본 3D)"
                },
                {
                    "name": "setupScreenOrtho",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up orthographic projection (2D mode)",
                    "snippet": "setupScreenOrtho()",
                    "keywords": [],
                    "desc_ja": "正投影を設定（2Dモード）",
                    "desc_ko": "정사영 투영을 설정 (2D 모드)"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "snippet": "setupScreenFov(${1:45.0})",
                    "keywords": [],
                    "desc_ja": "指定したFOVで画面投影を設定（0 = 正投影、0より大 = パースペクティブ）",
                    "desc_ko": "지정한 FOV로 화면 투영을 설정 (0 = 정사영, 0보다 크면 원근)"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "snippet": "setupScreenFov(${1:45.0})",
                    "keywords": [],
                    "desc_ja": "指定したFOVで画面投影を設定（0 = 正投影、0より大 = パースペクティブ）",
                    "desc_ko": "지정한 FOV로 화면 투영을 설정 (0 = 정사영, 0보다 크면 원근)"
                },
                {
                    "name": "setDefaultScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set default screen FOV (applied at frame start)",
                    "snippet": "setDefaultScreenFov(${1:45.0})",
                    "keywords": [],
                    "desc_ja": "デフォルトのスクリーンFOVを設定（フレーム開始時に適用）",
                    "desc_ko": "기본 스크린 FOV를 설정 (프레임 시작 시 적용)"
                },
                {
                    "name": "getDefaultScreenFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current default screen FOV",
                    "snippet": "getDefaultScreenFov()",
                    "keywords": [],
                    "desc_ja": "現在のデフォルトスクリーンFOVを取得",
                    "desc_ko": "현재 기본 스크린 FOV를 얻음"
                },
                {
                    "name": "worldToScreen",
                    "params": "worldPos",
                    "params_typed": "const Vec3& worldPos",
                    "return_type": "Vec3",
                    "desc": "Convert world coordinate to screen coordinate (x, y = screen pos, z = depth 0-1)",
                    "snippet": "worldToScreen(${1:worldPos})",
                    "keywords": [],
                    "desc_ja": "ワールド座標をスクリーン座標に変換（x, y = 画面位置, z = 深度 0-1）",
                    "desc_ko": "월드 좌표를 스크린 좌표로 변환 (x, y = 스크린 위치, z = 깊이 0-1)",
                    "examples": [
                        {
                            "name": "coordinateConversionExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "screenToWorld",
                    "params": "screenPos",
                    "params_typed": "const Vec2& screenPos",
                    "return_type": "Vec3",
                    "desc": "Convert screen coordinate to world coordinate on Z plane",
                    "snippet": "screenToWorld(${1:screenPos}, ${2:0.0f})",
                    "keywords": [],
                    "desc_ja": "スクリーン座標をワールド座標に変換（Z平面上）",
                    "desc_ko": "스크린 좌표를 Z 평면상의 월드 좌표로 변환",
                    "examples": [
                        {
                            "name": "coordinateConversionExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "screenToWorld",
                    "params": "screenPos, worldZ",
                    "params_typed": "const Vec2& screenPos, float worldZ",
                    "return_type": "Vec3",
                    "desc": "Convert screen coordinate to world coordinate on Z plane",
                    "snippet": "screenToWorld(${1:screenPos}, ${2:0.0f})",
                    "keywords": [],
                    "desc_ja": "スクリーン座標をワールド座標に変換（Z平面上）",
                    "desc_ko": "스크린 좌표를 Z 평면상의 월드 좌표로 변환",
                    "examples": [
                        {
                            "name": "coordinateConversionExample",
                            "group": "3d"
                        }
                    ]
                }
            ],
            "name_ja": "3Dセットアップ",
            "name_ko": "3D 셋업"
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
                    "snippet": "createEasyCam()",
                    "keywords": [],
                    "desc_ja": "EasyCamインスタンスを作成",
                    "desc_ko": "EasyCam 인스턴스를 생성"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Apply camera transform (start 3D mode)",
                    "snippet": "begin()",
                    "keywords": [],
                    "desc_ja": "カメラ視点を適用（3Dモード開始）",
                    "desc_ko": "카메라 변환을 적용 (3D 모드 시작)"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous transform (end 3D mode)",
                    "snippet": "end()",
                    "keywords": [],
                    "desc_ja": "カメラ視点を解除（3Dモード終了）",
                    "desc_ko": "이전 변환으로 복원 (3D 모드 종료)"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset camera to default position",
                    "snippet": "reset()",
                    "keywords": [],
                    "desc_ja": "カメラをデフォルト位置にリセット",
                    "desc_ko": "카메라를 기본 위치로 초기화"
                },
                {
                    "name": "setTarget",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera look-at target",
                    "snippet": "setTarget(${1:0}, ${2:0}, ${3:0})",
                    "keywords": [],
                    "desc_ja": "カメラの注視点を設定",
                    "desc_ko": "카메라의 look-at 타겟을 설정"
                },
                {
                    "name": "setTarget",
                    "params": "target",
                    "params_typed": "const Vec3 &in target",
                    "return_type": "void",
                    "desc": "Set camera look-at target",
                    "snippet": "setTarget(${1:0}, ${2:0}, ${3:0})",
                    "keywords": [],
                    "desc_ja": "カメラの注視点を設定",
                    "desc_ko": "카메라의 look-at 타겟을 설정"
                },
                {
                    "name": "getTarget",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera look-at target",
                    "snippet": "getTarget()",
                    "keywords": [],
                    "desc_ja": "カメラの注視点を取得",
                    "desc_ko": "카메라의 look-at 타겟을 얻음"
                },
                {
                    "name": "setDistance",
                    "params": "distance",
                    "params_typed": "float distance",
                    "return_type": "void",
                    "desc": "Set distance from target",
                    "snippet": "setDistance(${1:400})",
                    "keywords": [],
                    "desc_ja": "注視点からの距離を設定",
                    "desc_ko": "타겟으로부터의 거리를 설정"
                },
                {
                    "name": "getDistance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get distance from target",
                    "snippet": "getDistance()",
                    "keywords": [],
                    "desc_ja": "注視点からの距離を取得",
                    "desc_ko": "타겟으로부터의 거리를 얻음"
                },
                {
                    "name": "setAzimuth",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set orbit azimuth (horizontal angle, radians)",
                    "snippet": "setAzimuth(${1:0.7})",
                    "keywords": [],
                    "desc_ja": "周回の方位角（水平角・ラジアン）を設定",
                    "desc_ko": "궤도 방위각(수평각, 라디안)을 설정"
                },
                {
                    "name": "getAzimuth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get orbit azimuth (horizontal angle, radians)",
                    "snippet": "getAzimuth()",
                    "keywords": [],
                    "desc_ja": "周回の方位角（水平角・ラジアン）を取得",
                    "desc_ko": "궤도 방위각(수평각, 라디안)을 얻음"
                },
                {
                    "name": "setElevation",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set orbit elevation (vertical angle, radians; clamped to ~±80°)",
                    "snippet": "setElevation(${1:0.5})",
                    "keywords": [],
                    "desc_ja": "周回の仰角（垂直角・ラジアン、約±80°でクランプ）を設定",
                    "desc_ko": "궤도 고도각(수직각, 라디안; 약 ±80°로 제한)을 설정"
                },
                {
                    "name": "getElevation",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get orbit elevation (vertical angle, radians)",
                    "snippet": "getElevation()",
                    "keywords": [],
                    "desc_ja": "周回の仰角（垂直角・ラジアン）を取得",
                    "desc_ko": "궤도 고도각(수직각, 라디안)을 얻음"
                },
                {
                    "name": "setFov",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set field of view in radians",
                    "snippet": "setFov(${1:0.785})",
                    "keywords": [],
                    "desc_ja": "視野角をラジアンで設定",
                    "desc_ko": "시야각을 라디안으로 설정"
                },
                {
                    "name": "getFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get field of view in radians",
                    "snippet": "getFov()",
                    "keywords": [],
                    "desc_ja": "視野角をラジアンで取得",
                    "desc_ko": "시야각을 라디안으로 얻음"
                },
                {
                    "name": "setFovDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Set field of view in degrees",
                    "snippet": "setFovDeg(${1:45})",
                    "keywords": [],
                    "desc_ja": "視野角を度数で設定",
                    "desc_ko": "시야각을 도(degree)로 설정"
                },
                {
                    "name": "setNearClip",
                    "params": "nearClip",
                    "params_typed": "float nearClip",
                    "return_type": "void",
                    "desc": "Set near clipping plane",
                    "snippet": "setNearClip(${1:0.1})",
                    "keywords": [],
                    "desc_ja": "近クリップ面を設定",
                    "desc_ko": "근평면(near clip plane)을 설정"
                },
                {
                    "name": "setFarClip",
                    "params": "farClip",
                    "params_typed": "float farClip",
                    "return_type": "void",
                    "desc": "Set far clipping plane",
                    "snippet": "setFarClip(${1:10000})",
                    "keywords": [],
                    "desc_ja": "遠クリップ面を設定",
                    "desc_ko": "원평면(far clip plane)을 설정"
                },
                {
                    "name": "getNearClip",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get near clipping plane distance",
                    "snippet": "getNearClip()",
                    "keywords": [],
                    "desc_ja": "近クリップ面の距離を取得",
                    "desc_ko": "근평면 거리를 얻음"
                },
                {
                    "name": "getFarClip",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get far clipping plane distance",
                    "snippet": "getFarClip()",
                    "keywords": [],
                    "desc_ja": "遠クリップ面の距離を取得",
                    "desc_ko": "원평면 거리를 얻음"
                },
                {
                    "name": "enableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse input for camera control",
                    "snippet": "enableMouseInput()",
                    "keywords": [],
                    "desc_ja": "マウス入力によるカメラ操作を有効化",
                    "desc_ko": "카메라 조작을 위한 마우스 입력 활성화"
                },
                {
                    "name": "disableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Disable mouse input for camera control",
                    "snippet": "disableMouseInput()",
                    "keywords": [],
                    "desc_ja": "マウス入力によるカメラ操作を無効化",
                    "desc_ko": "카메라 조작을 위한 마우스 입력 비활성화"
                },
                {
                    "name": "isMouseInputEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if mouse input is enabled",
                    "snippet": "isMouseInputEnabled()",
                    "keywords": [],
                    "desc_ja": "マウス入力が有効かどうか確認",
                    "desc_ko": "마우스 입력이 활성화되어 있는지 확인"
                },
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse press event",
                    "snippet": "mousePressed(${1:x}, ${2:y}, ${3:button})",
                    "keywords": [],
                    "desc_ja": "マウス押下イベントを処理",
                    "desc_ko": "마우스 누름 이벤트 처리",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse release event",
                    "snippet": "mouseReleased(${1:x}, ${2:y}, ${3:button})",
                    "keywords": [],
                    "desc_ja": "マウス離上イベントを処理",
                    "desc_ko": "마우스 떼기 이벤트 처리",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse drag event",
                    "snippet": "mouseDragged(${1:x}, ${2:y}, ${3:button})",
                    "keywords": [],
                    "desc_ja": "マウスドラッグイベントを処理",
                    "desc_ko": "마우스 드래그 이벤트 처리",
                    "examples": [
                        {
                            "name": "mouseExample",
                            "group": "input_output"
                        }
                    ]
                },
                {
                    "name": "mouseScrolled",
                    "params": "dx, dy",
                    "params_typed": "float dx, float dy",
                    "return_type": "void",
                    "desc": "Handle mouse scroll event (for zoom)",
                    "snippet": "mouseScrolled(${1:dx}, ${2:dy})",
                    "keywords": [],
                    "desc_ja": "マウススクロールイベントを処理（ズーム用）",
                    "desc_ko": "마우스 스크롤 이벤트 처리 (줌용)",
                    "examples": [
                        {
                            "name": "emptyExample",
                            "group": "templates"
                        },
                        {
                            "name": "platformInfoExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera position",
                    "snippet": "getPosition()",
                    "keywords": [],
                    "desc_ja": "カメラ位置を取得",
                    "desc_ko": "카메라 위치를 얻음"
                },
                {
                    "name": "setSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set rotation sensitivity",
                    "snippet": "setSensitivity(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "回転感度を設定",
                    "desc_ko": "회전 감도를 설정"
                },
                {
                    "name": "setZoomSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set zoom sensitivity",
                    "snippet": "setZoomSensitivity(${1:10.0})",
                    "keywords": [],
                    "desc_ja": "ズーム感度を設定",
                    "desc_ko": "줌 감도를 설정"
                },
                {
                    "name": "setPanSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set pan sensitivity",
                    "snippet": "setPanSensitivity(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "パン感度を設定",
                    "desc_ko": "팬 감도를 설정"
                },
                {
                    "name": "getCameraPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const Vec3&",
                    "desc": "Current camera position used for specular/PBR view vector",
                    "snippet": "getCameraPosition()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "3Dカメラ",
            "name_ko": "3D 카메라"
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
                    "snippet": "addLight(${1:light})",
                    "keywords": [],
                    "desc_ja": "シーンにlightを追加",
                    "desc_ko": "씬에 조명을 추가",
                    "examples": [
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "removeLight",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Remove a light from the scene",
                    "snippet": "removeLight(${1:light})",
                    "keywords": [],
                    "desc_ja": "シーンからlightを削除",
                    "desc_ko": "씬에서 조명을 제거"
                },
                {
                    "name": "clearLights",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Remove all lights from the scene",
                    "snippet": "clearLights()",
                    "keywords": [],
                    "desc_ja": "全てのlightを削除",
                    "desc_ko": "모든 조명을 제거",
                    "examples": [
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        },
                        {
                            "name": "pbrSpheresExample",
                            "group": "3d"
                        },
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setMaterial",
                    "params": "material",
                    "params_typed": "Material& material",
                    "return_type": "void",
                    "desc": "Set material for subsequent mesh draws (activates PBR)",
                    "snippet": "setMaterial(${1:material})",
                    "keywords": [],
                    "desc_ja": "以降のmesh描画に使うmaterialを設定（PBR有効化）",
                    "desc_ko": "이후 메쉬 렌더링에 사용할 재질을 설정 (PBR 활성화)",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "clearMaterial",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear material (return to default rendering)",
                    "snippet": "clearMaterial()",
                    "keywords": [],
                    "desc_ja": "materialをクリア（デフォルトに戻す）",
                    "desc_ko": "재질을 해제 (기본 렌더링으로 복귀)",
                    "examples": [
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        },
                        {
                            "name": "pbrSpheresExample",
                            "group": "3d"
                        },
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setCameraPosition",
                    "params": "pos",
                    "params_typed": "const Vec3& pos",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation",
                    "snippet": "setCameraPosition(${1:cam.getPosition()})",
                    "keywords": [],
                    "desc_ja": "specular計算用のcamera位置を設定",
                    "desc_ko": "스페큘러 계산을 위한 카메라 위치를 설정",
                    "examples": [
                        {
                            "name": "pbrSpheresExample",
                            "group": "3d"
                        },
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setCameraPosition",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation",
                    "snippet": "setCameraPosition(${1:cam.getPosition()})",
                    "keywords": [],
                    "desc_ja": "specular計算用のcamera位置を設定",
                    "desc_ko": "스페큘러 계산을 위한 카메라 위치를 설정",
                    "examples": [
                        {
                            "name": "pbrSpheresExample",
                            "group": "3d"
                        },
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setEnvironment",
                    "params": "env",
                    "params_typed": "Environment& env",
                    "return_type": "void",
                    "desc": "Set IBL environment for PBR ambient lighting",
                    "snippet": "setEnvironment(${1:env})",
                    "keywords": [],
                    "desc_ja": "PBR ambient用のIBL environment mapを設定",
                    "desc_ko": "PBR 앰비언트용 IBL 환경맵을 설정",
                    "examples": [
                        {
                            "name": "pbrSpheresExample",
                            "group": "3d"
                        },
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        },
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "clearEnvironment",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear IBL environment",
                    "snippet": "clearEnvironment()",
                    "keywords": [],
                    "desc_ja": "IBL environment mapをクリア",
                    "desc_ko": "IBL 환경맵을 해제"
                },
                {
                    "name": "beginShadowPass",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Begin shadow depth pass from the light's point of view",
                    "snippet": "beginShadowPass(${1:light})",
                    "keywords": [],
                    "desc_ja": "light視点のshadow depth passを開始",
                    "desc_ko": "조명 시점의 섀도우 뎁스 패스를 시작",
                    "examples": [
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "endShadowPass",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shadow depth pass",
                    "snippet": "endShadowPass()",
                    "keywords": [],
                    "desc_ja": "shadow depth passを終了",
                    "desc_ko": "섀도우 뎁스 패스를 종료",
                    "examples": [
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "shadowDraw",
                    "params": "mesh",
                    "params_typed": "const Mesh& mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh into the shadow depth pass (depth only)",
                    "snippet": "shadowDraw(${1:mesh})",
                    "keywords": [],
                    "desc_ja": "shadow depth passにmeshを描画（depthのみ）",
                    "desc_ko": "섀도우 뎁스 패스에 메쉬를 렌더링 (뎁스 전용)",
                    "examples": [
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "getNumLights",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of currently active lights",
                    "snippet": "getNumLights()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "getEnvironment",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Environment*",
                    "desc": "Get the current environment (IBL/skybox), or nullptr if none is set",
                    "snippet": "getEnvironment()",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "calculateLighting",
                    "params": "worldPos, worldNormal, material",
                    "params_typed": "const Vec3& worldPos, const Vec3& worldNormal, const Material& material",
                    "return_type": "Color",
                    "desc": "CPU-side lighting result for a world position and normal, summing all active lights with the given material",
                    "snippet": "calculateLighting(${1:worldPos}, ${2:worldNormal}, ${3:material})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "照明・PBR",
            "name_ko": "조명 및 PBR"
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
                    "snippet": "Mat4_identity()",
                    "keywords": [],
                    "desc_ja": "単位行列を作成",
                    "desc_ko": "단위 행렬을 생성"
                },
                {
                    "name": "Mat4_translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix",
                    "snippet": "Mat4_translate(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "平行移動行列を作成",
                    "desc_ko": "이동 행렬을 생성"
                },
                {
                    "name": "Mat4_translate",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix",
                    "snippet": "Mat4_translate(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "平行移動行列を作成",
                    "desc_ko": "이동 행렬을 생성"
                },
                {
                    "name": "Mat4_rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create X-axis rotation matrix",
                    "snippet": "Mat4_rotateX(${1:radians})",
                    "keywords": [],
                    "desc_ja": "X軸回転行列を作成",
                    "desc_ko": "X축 회전 행렬을 생성"
                },
                {
                    "name": "Mat4_rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Y-axis rotation matrix",
                    "snippet": "Mat4_rotateY(${1:radians})",
                    "keywords": [],
                    "desc_ja": "Y軸回転行列を作成",
                    "desc_ko": "Y축 회전 행렬을 생성"
                },
                {
                    "name": "Mat4_rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Z-axis rotation matrix",
                    "snippet": "Mat4_rotateZ(${1:radians})",
                    "keywords": [],
                    "desc_ja": "Z軸回転行列を作成",
                    "desc_ko": "Z축 회전 행렬을 생성"
                },
                {
                    "name": "Mat4_scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix",
                    "snippet": "Mat4_scale(${1:s})",
                    "keywords": [],
                    "desc_ja": "スケーリング行列を作成",
                    "desc_ko": "스케일 행렬을 생성"
                },
                {
                    "name": "Mat4_scale",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix",
                    "snippet": "Mat4_scale(${1:s})",
                    "keywords": [],
                    "desc_ja": "スケーリング行列を作成",
                    "desc_ko": "스케일 행렬을 생성"
                },
                {
                    "name": "Mat4_lookAt",
                    "params": "eye, target, up",
                    "params_typed": "Vec3 eye, Vec3 target, Vec3 up",
                    "return_type": "Mat4",
                    "desc": "Create a view matrix",
                    "snippet": "Mat4_lookAt(${1:eye}, ${2:target}, ${3:up})",
                    "keywords": [],
                    "desc_ja": "ビュー行列を作成",
                    "desc_ko": "뷰 행렬을 생성"
                },
                {
                    "name": "Mat4_ortho",
                    "params": "left, right, bottom, top, near, far",
                    "params_typed": "float left, float right, float bottom, float top, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create an orthographic projection matrix",
                    "snippet": "Mat4_ortho(${1:left}, ${2:right}, ${3:bottom}, ${4:top}, ${5:near}, ${6:far})",
                    "keywords": [],
                    "desc_ja": "正投影行列を作成",
                    "desc_ko": "정사영 투영 행렬을 생성"
                },
                {
                    "name": "Mat4_perspective",
                    "params": "fov, aspect, near, far",
                    "params_typed": "float fovY, float aspect, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create a perspective projection matrix",
                    "snippet": "Mat4_perspective(${1:fov}, ${2:aspect}, ${3:near}, ${4:far})",
                    "keywords": [],
                    "desc_ja": "透視投影行列を作成",
                    "desc_ko": "원근 투영 행렬을 생성"
                },
                {
                    "name": "Quaternion_identity",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Quaternion",
                    "desc": "Create an identity quaternion",
                    "snippet": "Quaternion_identity()",
                    "keywords": [],
                    "desc_ja": "単位クォータニオンを作成",
                    "desc_ko": "단위 쿼터니언을 생성"
                },
                {
                    "name": "Quaternion_fromAxisAngle",
                    "params": "axis, radians",
                    "params_typed": "Vec3 axis, float radians",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from axis-angle",
                    "snippet": "Quaternion_fromAxisAngle(${1:axis}, ${2:radians})",
                    "keywords": [],
                    "desc_ja": "軸-角度からクォータニオンを作成",
                    "desc_ko": "축-각도로부터 쿼터니언을 생성"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "pitch, yaw, roll",
                    "params_typed": "float pitch, float yaw, float roll",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles",
                    "snippet": "Quaternion_fromEuler(${1:pitch}, ${2:yaw}, ${3:roll})",
                    "keywords": [],
                    "desc_ja": "オイラー角からクォータニオンを作成",
                    "desc_ko": "오일러 각도로부터 쿼터니언을 생성"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles",
                    "snippet": "Quaternion_fromEuler(${1:pitch}, ${2:yaw}, ${3:roll})",
                    "keywords": [],
                    "desc_ja": "オイラー角からクォータニオンを作成",
                    "desc_ko": "오일러 각도로부터 쿼터니언을 생성"
                },
                {
                    "name": "Quaternion_slerp",
                    "params": "a, b, t",
                    "params_typed": "Quaternion a, Quaternion b, float t",
                    "return_type": "Quaternion",
                    "desc": "Spherical linear interpolation",
                    "snippet": "Quaternion_slerp(${1:a}, ${2:b}, ${3:t})",
                    "keywords": [],
                    "desc_ja": "球面線形補間",
                    "desc_ko": "구면 선형 보간"
                }
            ],
            "name_ja": "数学 - 3D",
            "name_ko": "수학 - 3D"
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
                    "snippet": "drawMesh(${1:mesh})",
                    "keywords": [],
                    "desc_ja": "メッシュを描画",
                    "desc_ko": "메쉬를 그림",
                    "examples": [
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "drawPolyline",
                    "params": "polyline",
                    "params_typed": "Polyline polyline",
                    "return_type": "void",
                    "desc": "Draw a polyline",
                    "snippet": "drawPolyline(${1:polyline})",
                    "keywords": [],
                    "desc_ja": "ポリラインを描画",
                    "desc_ko": "폴리라인을 그림"
                },
                {
                    "name": "createBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "snippet": "createBox(${1:size})",
                    "keywords": [],
                    "desc_ja": "ボックスメッシュを作成",
                    "desc_ko": "박스 메쉬를 생성",
                    "examples": [
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "coordinateConversionExample",
                            "group": "3d"
                        },
                        {
                            "name": "fboMipmapExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "snippet": "createBox(${1:size})",
                    "keywords": [],
                    "desc_ja": "ボックスメッシュを作成",
                    "desc_ko": "박스 메쉬를 생성",
                    "examples": [
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "coordinateConversionExample",
                            "group": "3d"
                        },
                        {
                            "name": "fboMipmapExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createPlane",
                    "params": "width, height, cols, rows",
                    "params_typed": "float width, float height, int cols = 2, int rows = 2",
                    "return_type": "Mesh",
                    "desc": "Create a plane mesh (subdivided quad on the XY plane)",
                    "snippet": "createPlane(${1:width}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "平面メッシュを作成（XY平面上の分割された四角形）",
                    "desc_ko": "평면 메쉬를 생성 (XY 평면의 분할된 사각형)",
                    "examples": [
                        {
                            "name": "projectorSimulationExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createCylinder",
                    "params": "radius, height, resolution",
                    "params_typed": "float radius, float height, int resolution = 16",
                    "return_type": "Mesh",
                    "desc": "Create a cylinder mesh",
                    "snippet": "createCylinder(${1:radius}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "円柱メッシュを作成",
                    "desc_ko": "원기둥 메쉬를 생성",
                    "examples": [
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        },
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createCone",
                    "params": "radius, height, resolution",
                    "params_typed": "float radius, float height, int resolution = 16",
                    "return_type": "Mesh",
                    "desc": "Create a cone mesh",
                    "snippet": "createCone(${1:radius}, ${2:height})",
                    "keywords": [],
                    "desc_ja": "円錐メッシュを作成",
                    "desc_ko": "원뿔 메쉬를 생성",
                    "examples": [
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        },
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createIcoSphere",
                    "params": "radius, subdivisions",
                    "params_typed": "float radius, int subdivisions = 2",
                    "return_type": "Mesh",
                    "desc": "Create an icosphere mesh (geodesic sphere with uniform triangles)",
                    "snippet": "createIcoSphere(${1:radius})",
                    "keywords": [],
                    "desc_ja": "アイコスフィアメッシュを作成（三角形が均一な測地球）",
                    "desc_ko": "아이코스피어 메쉬를 생성 (삼각형이 균일한 측지구)",
                    "examples": [
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createTorus",
                    "params": "radius, tubeRadius, sides, rings",
                    "params_typed": "float radius, float tubeRadius, int sides = 24, int rings = 16",
                    "return_type": "Mesh",
                    "desc": "Create a torus (donut) mesh",
                    "snippet": "createTorus(${1:radius}, ${2:tubeRadius})",
                    "keywords": [],
                    "desc_ja": "トーラス（ドーナツ）メッシュを作成",
                    "desc_ko": "토러스(도넛) 메쉬를 생성",
                    "examples": [
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createSphere",
                    "params": "radius, res",
                    "params_typed": "float radius, int res = 20",
                    "return_type": "Mesh",
                    "desc": "Create a sphere mesh",
                    "snippet": "createSphere(${1:radius})",
                    "keywords": [],
                    "desc_ja": "球体メッシュを作成",
                    "desc_ko": "구 메쉬를 생성",
                    "examples": [
                        {
                            "name": "coordinateConversionExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "pbrSpheresExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "createCapsule",
                    "params": "radius, cylinderHeight, res",
                    "params_typed": "float radius, float cylinderHeight, int res = 16",
                    "return_type": "Mesh",
                    "desc": "Create a capsule mesh (Y-up: cylinder capped by two hemispheres)",
                    "snippet": "createCapsule(${1:radius}, ${2:cylinderHeight})",
                    "keywords": [],
                    "desc_ja": "カプセルメッシュを作成（Y軸、円柱の両端を半球で閉じた形）",
                    "desc_ko": "캡슐 메쉬를 생성 (Y축, 원기둥 양 끝을 반구로 막은 형태)"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y",
                    "params_typed": "const Texture& tex, float x, float y",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})",
                    "keywords": [],
                    "desc_ja": "テクスチャを描画",
                    "desc_ko": "텍스처를 그림"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y, w, h",
                    "params_typed": "const Texture& tex, float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})",
                    "keywords": [],
                    "desc_ja": "テクスチャを描画",
                    "desc_ko": "텍스처를 그림"
                }
            ],
            "name_ja": "グラフィックス - 高度",
            "name_ko": "그래픽 - 고급"
        },
        {
            "name": "Graphics - Texture & GPU",
            "functions": [
                {
                    "name": "Texture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a texture",
                    "snippet": "Texture()",
                    "keywords": [],
                    "desc_ja": "テクスチャを作成",
                    "desc_ko": "텍스처를 생성",
                    "examples": [
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "createTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture@",
                    "desc": "Create a texture (TrussSketch factory)",
                    "snippet": "Texture@ tex = createTexture();",
                    "keywords": [],
                    "desc_ja": "テクスチャを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "텍스처를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load image from file",
                    "snippet": "load(${1:\"image.png\"})",
                    "keywords": [],
                    "desc_ja": "ファイルから画像を読み込む",
                    "desc_ko": "파일에서 이미지를 로드"
                },
                {
                    "name": "loadFromPixels",
                    "params": "pixels",
                    "params_typed": "const Pixels& pixels",
                    "return_type": "bool",
                    "desc": "Load from pixel data",
                    "snippet": "loadFromPixels(${1:pixels})",
                    "keywords": [],
                    "desc_ja": "ピクセルデータから読み込む",
                    "desc_ko": "픽셀 데이터에서 로드"
                },
                {
                    "name": "bind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Bind texture",
                    "snippet": "bind(${1:0})",
                    "keywords": [],
                    "desc_ja": "テクスチャをバインド",
                    "desc_ko": "텍스처를 바인딩"
                },
                {
                    "name": "unbind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Unbind texture",
                    "snippet": "unbind(${1:0})",
                    "keywords": [],
                    "desc_ja": "テクスチャのバインド解除",
                    "desc_ko": "텍스처 바인딩을 해제"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get width",
                    "snippet": "getWidth()",
                    "keywords": [],
                    "desc_ja": "幅を取得",
                    "desc_ko": "너비를 얻음"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get height",
                    "snippet": "getHeight()",
                    "keywords": [],
                    "desc_ja": "高さを取得",
                    "desc_ko": "높이를 얻음"
                },
                {
                    "name": "channelCount",
                    "params": "fmt",
                    "params_typed": "TextureFormat fmt",
                    "return_type": "int",
                    "desc": "Number of color channels for a TextureFormat (1, 2, or 4)",
                    "snippet": "channelCount(${1:fmt})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "bytesPerPixel",
                    "params": "fmt",
                    "params_typed": "TextureFormat fmt",
                    "return_type": "int",
                    "desc": "Bytes per pixel for a TextureFormat",
                    "snippet": "bytesPerPixel(${1:fmt})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                },
                {
                    "name": "isFloatFormat",
                    "params": "fmt",
                    "params_typed": "TextureFormat fmt",
                    "return_type": "bool",
                    "desc": "Whether a TextureFormat uses floating-point components",
                    "snippet": "isFloatFormat(${1:fmt})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "グラフィックス - テクスチャとGPU",
            "name_ko": "그래픽 - 텍스처 & GPU"
        },
        {
            "name": "Graphics - FBO",
            "functions": [
                {
                    "name": "Fbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create an FBO",
                    "snippet": "Fbo()",
                    "keywords": [],
                    "desc_ja": "FBOを作成",
                    "desc_ko": "FBO를 생성",
                    "examples": [
                        {
                            "name": "fboMipmapExample",
                            "group": "3d"
                        },
                        {
                            "name": "fboExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "createFbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Fbo@",
                    "desc": "Create an FBO (TrussSketch factory)",
                    "snippet": "Fbo@ fbo = createFbo();",
                    "keywords": [],
                    "desc_ja": "FBOを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "FBO를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "allocate",
                    "params": "w, h",
                    "params_typed": "int w, int h",
                    "return_type": "void",
                    "desc": "Allocate buffer",
                    "snippet": "allocate(${1:800}, ${2:600})",
                    "keywords": [],
                    "desc_ja": "バッファを確保",
                    "desc_ko": "버퍼를 할당"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color",
                    "snippet": "begin()",
                    "keywords": [],
                    "desc_ja": "FBOへの描画を開始。引数なし = 前の内容を保持。引数あり = 指定色でクリア",
                    "desc_ko": "FBO 그리기 시작. 인자 없음 = 이전 내용 유지. 인자 있음 = 지정한 색으로 클리어"
                },
                {
                    "name": "begin",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a = 1.0",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color",
                    "snippet": "begin()",
                    "keywords": [],
                    "desc_ja": "FBOへの描画を開始。引数なし = 前の内容を保持。引数あり = 指定色でクリア",
                    "desc_ko": "FBO 그리기 시작. 인자 없음 = 이전 내용 유지. 인자 있음 = 지정한 색으로 클리어"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End drawing to FBO",
                    "snippet": "end()",
                    "keywords": [],
                    "desc_ja": "FBOへの描画を終了",
                    "desc_ko": "FBO 그리기 종료"
                },
                {
                    "name": "getTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture&",
                    "desc": "Get internal texture",
                    "snippet": "getTexture()",
                    "keywords": [],
                    "desc_ja": "内部テクスチャを取得",
                    "desc_ko": "내부 텍스처를 얻음"
                },
                {
                    "name": "readToPixels",
                    "params": "pixels",
                    "params_typed": "Pixels& pixels",
                    "return_type": "void",
                    "desc": "Read pixels to CPU memory",
                    "snippet": "readToPixels(${1:pixels})",
                    "keywords": [],
                    "desc_ja": "ピクセルをCPUメモリに読み出す",
                    "desc_ko": "픽셀을 CPU 메모리로 읽음"
                }
            ],
            "name_ja": "グラフィックス - FBO",
            "name_ko": "그래픽 - FBO"
        },
        {
            "name": "Graphics - Shader",
            "functions": [
                {
                    "name": "Shader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a shader (base class, inheritable)",
                    "keywords": [],
                    "desc_ja": "シェーダーを作成（基底クラス、継承可能）",
                    "desc_ko": "셰이더를 생성 (베이스 클래스, 상속 가능)"
                },
                {
                    "name": "load",
                    "params": "descFn",
                    "params_typed": "const sg_shader_desc* (*descFn)(sg_backend)",
                    "return_type": "bool",
                    "desc": "Load from sokol-shdc generated function",
                    "keywords": [],
                    "desc_ja": "sokol-shdc生成関数からロード",
                    "desc_ko": "sokol-shdc로 생성된 함수에서 로드"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if shader is loaded",
                    "keywords": [],
                    "desc_ja": "シェーダーが読み込まれているか確認",
                    "desc_ko": "셰이더가 로드되었는지 확인"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin shader (pushes to stack)",
                    "keywords": [],
                    "desc_ja": "シェーダーを開始（スタックにプッシュ）",
                    "desc_ko": "셰이더 시작 (스택에 푸시)"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shader (pops from stack)",
                    "keywords": [],
                    "desc_ja": "シェーダーを終了（スタックからポップ）",
                    "desc_ko": "셰이더 종료 (스택에서 팝)"
                },
                {
                    "name": "pushShader",
                    "params": "shader",
                    "params_typed": "Shader& shader",
                    "return_type": "void",
                    "desc": "Push shader to stack (subsequent draws use this shader)",
                    "keywords": [],
                    "desc_ja": "シェーダーをスタックにプッシュ（以降の描画にこのシェーダーを使用）",
                    "desc_ko": "셰이더를 스택에 푸시 (이후 드로우에 사용)",
                    "examples": [
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "popShader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop shader from stack",
                    "keywords": [],
                    "desc_ja": "シェーダーをスタックからポップ",
                    "desc_ko": "셰이더를 스택에서 꺼냄",
                    "examples": [
                        {
                            "name": "shaderExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "setUniform",
                    "params": "slot, value",
                    "params_typed": "int slot, float value",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec2& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec3& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec4& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, c",
                    "params_typed": "int slot, const Color& c",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<float>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec2>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec3>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec4>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "keywords": [],
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setTexture",
                    "params": "slot, view, sampler",
                    "params_typed": "int slot, sg_view view, sg_sampler sampler",
                    "return_type": "void",
                    "desc": "Bind texture to slot",
                    "keywords": [],
                    "desc_ja": "スロットにテクスチャをバインド",
                    "desc_ko": "슬롯에 텍스처를 바인딩"
                }
            ],
            "name_ja": "グラフィックス - シェーダー",
            "name_ko": "그래픽 - 셰이더"
        },
        {
            "name": "Types - Pixels",
            "functions": [
                {
                    "name": "Pixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create pixel buffer",
                    "snippet": "Pixels()",
                    "keywords": [],
                    "desc_ja": "ピクセルバッファを作成",
                    "desc_ko": "픽셀 버퍼를 생성",
                    "examples": [
                        {
                            "name": "normalMapExample",
                            "group": "3d"
                        },
                        {
                            "name": "AllFeaturesExample",
                            "group": "tests"
                        }
                    ]
                },
                {
                    "name": "createPixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Pixels@",
                    "desc": "Create pixel buffer (TrussSketch factory)",
                    "snippet": "Pixels@ px = createPixels();",
                    "keywords": [],
                    "desc_ja": "ピクセルバッファを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "픽셀 버퍼를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "allocate",
                    "params": "w, h, channels",
                    "params_typed": "int w, int h, int channels",
                    "return_type": "void",
                    "desc": "Allocate memory",
                    "snippet": "allocate(${1:800}, ${2:600}, ${3:4})",
                    "keywords": [],
                    "desc_ja": "メモリを確保",
                    "desc_ko": "메모리를 할당"
                },
                {
                    "name": "getData",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint8_t*",
                    "desc": "Get raw data pointer",
                    "keywords": [],
                    "desc_ja": "生データポインタを取得",
                    "desc_ko": "원본 데이터 포인터를 얻음"
                },
                {
                    "name": "getColor",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "Color",
                    "desc": "Get color at pixel",
                    "snippet": "getColor(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "指定座標の色を取得",
                    "desc_ko": "픽셀의 색상을 얻음",
                    "examples": [
                        {
                            "name": "easyCamExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setColor",
                    "params": "x, y, c",
                    "params_typed": "int x, int y, const Color& c",
                    "return_type": "void",
                    "desc": "Set color at pixel",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})",
                    "keywords": [],
                    "desc_ja": "指定座標の色を設定",
                    "desc_ko": "픽셀의 색상을 설정",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "save",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Save to file",
                    "keywords": [],
                    "desc_ja": "ファイルに保存",
                    "desc_ko": "파일로 저장"
                }
            ],
            "name_ja": "型 - Pixels",
            "name_ko": "타입 - Pixels"
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
                    "snippet": "Mesh@ mesh = createMesh();",
                    "keywords": [],
                    "desc_ja": "メッシュを作成",
                    "desc_ko": "새 Mesh를 생성"
                },
                {
                    "name": "Mesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Mesh (constructor)",
                    "snippet": "Mesh()",
                    "keywords": [],
                    "desc_ja": "メッシュを作成（コンストラクタ）",
                    "desc_ko": "새 Mesh를 생성 (생성자)",
                    "examples": [
                        {
                            "name": "meshAppendExample",
                            "group": "3d"
                        },
                        {
                            "name": "meshTextureExample",
                            "group": "3d"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setMode",
                    "params": "mode",
                    "params_typed": "int mode",
                    "return_type": "void",
                    "desc": "Set primitive mode (MESH_TRIANGLES, etc.)",
                    "snippet": "setMode(${1:MESH_TRIANGLES})",
                    "keywords": [],
                    "desc_ja": "描画モードを設定",
                    "desc_ko": "프리미티브 모드 설정 (MESH_TRIANGLES 등)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점을 추가"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점을 추가"
                },
                {
                    "name": "addColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})",
                    "keywords": [],
                    "desc_ja": "頂点カラーを追加",
                    "desc_ko": "정점에 색상을 추가"
                },
                {
                    "name": "addColor",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})",
                    "keywords": [],
                    "desc_ja": "頂点カラーを追加",
                    "desc_ko": "정점에 색상을 추가"
                },
                {
                    "name": "addTexCoord",
                    "params": "u, v",
                    "params_typed": "float u, float v",
                    "return_type": "void",
                    "desc": "Add a texture coordinate",
                    "snippet": "addTexCoord(${1:u}, ${2:v})",
                    "keywords": [],
                    "desc_ja": "テクスチャ座標を追加",
                    "desc_ko": "텍스처 좌표를 추가"
                },
                {
                    "name": "addNormal",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a normal vector",
                    "snippet": "addNormal(${1:x}, ${2:y}, ${3:z})",
                    "keywords": [],
                    "desc_ja": "法線を追加",
                    "desc_ko": "법선 벡터를 추가"
                },
                {
                    "name": "addIndex",
                    "params": "index",
                    "params_typed": "int index",
                    "return_type": "void",
                    "desc": "Add an index",
                    "snippet": "addIndex(${1:index})",
                    "keywords": [],
                    "desc_ja": "インデックスを追加",
                    "desc_ko": "인덱스를 추가"
                },
                {
                    "name": "addTriangle",
                    "params": "i1, i2, i3",
                    "params_typed": "int i1, int i2, int i3",
                    "return_type": "void",
                    "desc": "Add a triangle (3 indices)",
                    "snippet": "addTriangle(${1:i1}, ${2:i2}, ${3:i3})",
                    "keywords": [],
                    "desc_ja": "三角形を追加（インデックス3つ）",
                    "desc_ko": "삼각형을 추가 (인덱스 3개)"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear all data",
                    "snippet": "clear()",
                    "keywords": [],
                    "desc_ja": "データをクリア",
                    "desc_ko": "모든 데이터를 지움"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the mesh",
                    "snippet": "draw()",
                    "keywords": [],
                    "desc_ja": "メッシュを描画",
                    "desc_ko": "메쉬를 그림"
                }
            ],
            "name_ja": "型 - Mesh",
            "name_ko": "타입 - Mesh"
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
                    "snippet": "Path@ path = createPath();",
                    "keywords": [],
                    "desc_ja": "パスを作成",
                    "desc_ko": "새 Path를 생성"
                },
                {
                    "name": "Path",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Path (constructor)",
                    "snippet": "Path()",
                    "keywords": [],
                    "desc_ja": "パスを作成（コンストラクタ）",
                    "desc_ko": "새 Path를 생성 (생성자)",
                    "examples": [
                        {
                            "name": "fontPathExample",
                            "group": "font"
                        },
                        {
                            "name": "polylinesExample",
                            "group": "graphics"
                        },
                        {
                            "name": "strokeMeshExample",
                            "group": "graphics"
                        }
                    ]
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "snippet": "addVertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점을 추가"
                },
                {
                    "name": "lineTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a line segment to point",
                    "snippet": "lineTo(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "指定点まで線を追加",
                    "desc_ko": "특정 점까지 선분을 추가"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y",
                    "params_typed": "float cx1, float cy1, float cx2, float cy2, float x, float y",
                    "return_type": "void",
                    "desc": "Add a cubic bezier curve",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})",
                    "keywords": [],
                    "desc_ja": "3次ベジェ曲線を追加",
                    "desc_ko": "3차 베지어 곡선을 추가"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y",
                    "params_typed": "float cx, float cy, float x, float y",
                    "return_type": "void",
                    "desc": "Add a quadratic bezier curve",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})",
                    "keywords": [],
                    "desc_ja": "2次ベジェ曲線を追加",
                    "desc_ko": "2차 베지어 곡선을 추가"
                },
                {
                    "name": "curveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a Catmull-Rom curve segment",
                    "snippet": "curveTo(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "Catmull-Rom曲線を追加",
                    "desc_ko": "Catmull-Rom 곡선 구간을 추가"
                },
                {
                    "name": "arc",
                    "params": "x, y, rX, rY, start, end",
                    "params_typed": "float x, float y, float rX, float rY, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Add an arc",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:rX}, ${4:rY}, ${5:0}, ${6:360})",
                    "keywords": [],
                    "desc_ja": "円弧を追加",
                    "desc_ko": "호를 추가"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the shape",
                    "snippet": "close()",
                    "keywords": [],
                    "desc_ja": "パスを閉じる",
                    "desc_ko": "도형을 닫음"
                }
            ],
            "name_ja": "型 - Path",
            "name_ko": "타입 - Path"
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
                    "snippet": "createStrokeMesh()",
                    "keywords": [],
                    "desc_ja": "StrokeMeshインスタンスを作成",
                    "desc_ko": "새 StrokeMesh 인스턴스를 생성"
                },
                {
                    "name": "setWidth",
                    "params": "width",
                    "params_typed": "float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke width (method chaining)",
                    "snippet": "setWidth(${1:5.0})",
                    "keywords": [],
                    "desc_ja": "線の太さを設定（メソッドチェーン対応）",
                    "desc_ko": "스트로크 너비를 설정 (메서드 체이닝)"
                },
                {
                    "name": "setColor",
                    "params": "color",
                    "params_typed": "const Color &in color",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke color (method chaining)",
                    "snippet": "setColor(${1:color})",
                    "keywords": [],
                    "desc_ja": "線の色を設定（メソッドチェーン対応）",
                    "desc_ko": "스트로크 색상을 설정 (메서드 체이닝)",
                    "examples": [
                        {
                            "name": "graphicsExample",
                            "group": "graphics"
                        },
                        {
                            "name": "3DPrimitivesExample",
                            "group": "3d"
                        }
                    ]
                },
                {
                    "name": "setCapType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set cap type: Butt, Round, Square (method chaining)",
                    "snippet": "setCapType(${1:Round})",
                    "keywords": [],
                    "desc_ja": "端点の形状を設定（メソッドチェーン対応）",
                    "desc_ko": "캡 타입 설정: Butt, Round, Square (메서드 체이닝)"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set join type: Miter, Round, Bevel (method chaining)",
                    "snippet": "setJoinType(${1:Round})",
                    "keywords": [],
                    "desc_ja": "結合部の形状を設定（メソッドチェーン対応）",
                    "desc_ko": "조인 타입 설정: Miter, Round, Bevel (메서드 체이닝)"
                },
                {
                    "name": "setMiterLimit",
                    "params": "limit",
                    "params_typed": "float limit",
                    "return_type": "StrokeMesh&",
                    "desc": "Set miter limit for sharp corners (method chaining)",
                    "snippet": "setMiterLimit(${1:10.0})",
                    "keywords": [],
                    "desc_ja": "マイター結合の限界値を設定（メソッドチェーン対応）",
                    "desc_ko": "날카로운 모서리의 미터 한계를 설정 (메서드 체이닝)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec2 &in v",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec3 &in v",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "snippet": "addVertex(${1:x}, ${2:y})",
                    "keywords": [],
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)"
                },
                {
                    "name": "addVertexWithWidth",
                    "params": "x, y, width",
                    "params_typed": "float x, float y, float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex with variable width (method chaining)",
                    "snippet": "addVertexWithWidth(${1:x}, ${2:y}, ${3:width})",
                    "keywords": [],
                    "desc_ja": "可変幅で頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "가변 너비를 가진 정점을 추가 (메서드 체이닝)"
                },
                {
                    "name": "setShape",
                    "params": "path",
                    "params_typed": "Path@ path",
                    "return_type": "StrokeMesh&",
                    "desc": "Set shape from Path (method chaining)",
                    "snippet": "setShape(${1:path})",
                    "keywords": [],
                    "desc_ja": "Pathから形状を設定（メソッドチェーン対応）",
                    "desc_ko": "Path로부터 도형을 설정 (메서드 체이닝)"
                },
                {
                    "name": "setClosed",
                    "params": "closed",
                    "params_typed": "bool closed",
                    "return_type": "StrokeMesh&",
                    "desc": "Set whether the stroke is closed (method chaining)",
                    "snippet": "setClosed(${1:true})",
                    "keywords": [],
                    "desc_ja": "閉じたストロークかどうかを設定（メソッドチェーン対応）",
                    "desc_ko": "스트로크가 닫혀 있는지 설정 (메서드 체이닝)"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeMesh&",
                    "desc": "Clear all vertices (method chaining)",
                    "snippet": "clear()",
                    "keywords": [],
                    "desc_ja": "全頂点をクリア（メソッドチェーン対応）",
                    "desc_ko": "모든 정점을 지움 (메서드 체이닝)"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the internal mesh (required before draw)",
                    "snippet": "update()",
                    "keywords": [],
                    "desc_ja": "内部メッシュを更新（描画前に必須）",
                    "desc_ko": "내부 메쉬를 업데이트 (그리기 전에 필요)"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the stroke mesh",
                    "snippet": "draw()",
                    "keywords": [],
                    "desc_ja": "ストロークメッシュを描画",
                    "desc_ko": "스트로크 메쉬를 그림"
                }
            ],
            "name_ja": "型 - StrokeMesh",
            "name_ko": "타입 - StrokeMesh"
        },
        {
            "name": "Video",
            "functions": [
                {
                    "name": "VideoPlayer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a video player",
                    "snippet": "VideoPlayer()",
                    "keywords": [],
                    "desc_ja": "ビデオプレイヤーを作成",
                    "desc_ko": "비디오 플레이어를 생성"
                },
                {
                    "name": "createVideoPlayer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "VideoPlayer@",
                    "desc": "Create a video player (TrussSketch factory)",
                    "snippet": "VideoPlayer@ vid = createVideoPlayer();",
                    "keywords": [],
                    "desc_ja": "ビデオプレイヤーを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "비디오 플레이어를 생성 (TrussSketch 팩토리)"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load a video file",
                    "snippet": "load(${1:\"video.mp4\"})",
                    "keywords": [],
                    "desc_ja": "ビデオファイルを読み込む",
                    "desc_ko": "비디오 파일을 로드"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the video and release resources",
                    "snippet": "close()",
                    "keywords": [],
                    "desc_ja": "ビデオを閉じてリソースを解放",
                    "desc_ko": "비디오를 닫고 리소스를 해제"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a video is loaded",
                    "snippet": "isLoaded()",
                    "keywords": [],
                    "desc_ja": "ビデオが読み込まれているか確認",
                    "desc_ko": "비디오가 로드되었는지 확인"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Start or resume playback",
                    "snippet": "play()",
                    "keywords": [],
                    "desc_ja": "再生を開始または再開",
                    "desc_ko": "재생을 시작하거나 재개"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop playback and reset to beginning",
                    "snippet": "stop()",
                    "keywords": [],
                    "desc_ja": "再生を停止して先頭に戻す",
                    "desc_ko": "재생을 중지하고 처음으로 되돌림"
                },
                {
                    "name": "setPaused",
                    "params": "paused",
                    "params_typed": "bool paused",
                    "return_type": "void",
                    "desc": "Pause or resume playback",
                    "snippet": "setPaused(${1:true})",
                    "keywords": [],
                    "desc_ja": "一時停止または再開",
                    "desc_ko": "일시정지 또는 재개"
                },
                {
                    "name": "togglePause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle pause state",
                    "snippet": "togglePause()",
                    "keywords": [],
                    "desc_ja": "一時停止を切り替え",
                    "desc_ko": "일시정지 상태를 전환"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the video frame. Call once per frame in update()",
                    "snippet": "update()",
                    "keywords": [],
                    "desc_ja": "ビデオフレームを更新。update()内で毎フレーム呼ぶ",
                    "desc_ko": "비디오 프레임을 업데이트. update()에서 매 프레임 호출"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is currently playing (not paused)",
                    "snippet": "isPlaying()",
                    "keywords": [],
                    "desc_ja": "再生中か確認（一時停止中は false）",
                    "desc_ko": "현재 재생 중인지 확인 (일시정지 시 false)"
                },
                {
                    "name": "isPaused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is paused",
                    "snippet": "isPaused()",
                    "keywords": [],
                    "desc_ja": "一時停止中か確認",
                    "desc_ko": "일시정지 상태인지 확인"
                },
                {
                    "name": "isFrameNew",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a new frame is available since last update",
                    "snippet": "isFrameNew()",
                    "keywords": [],
                    "desc_ja": "前回のupdate以降に新しいフレームがあるか確認",
                    "desc_ko": "마지막 업데이트 이후 새 프레임이 있는지 확인"
                },
                {
                    "name": "isDone",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playback has reached the end",
                    "snippet": "isDone()",
                    "keywords": [],
                    "desc_ja": "再生が末尾に達したか確認",
                    "desc_ko": "재생이 끝에 도달했는지 확인"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video width in pixels",
                    "snippet": "getWidth()",
                    "keywords": [],
                    "desc_ja": "ビデオの幅をピクセル単位で取得",
                    "desc_ko": "비디오 너비를 픽셀 단위로 가져옴"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video height in pixels",
                    "snippet": "getHeight()",
                    "keywords": [],
                    "desc_ja": "ビデオの高さをピクセル単位で取得",
                    "desc_ko": "비디오 높이를 픽셀 단위로 가져옴"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get total duration in seconds",
                    "snippet": "getDuration()",
                    "keywords": [],
                    "desc_ja": "総再生時間を秒単位で取得",
                    "desc_ko": "전체 재생 시간을 초 단위로 가져옴"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current position (0.0 to 1.0)",
                    "snippet": "getPosition()",
                    "keywords": [],
                    "desc_ja": "現在の再生位置を取得（0.0〜1.0）",
                    "desc_ko": "현재 재생 위치를 가져옴 (0.0~1.0)"
                },
                {
                    "name": "setPosition",
                    "params": "pct",
                    "params_typed": "float pct",
                    "return_type": "void",
                    "desc": "Seek to position (0.0 to 1.0)",
                    "snippet": "setPosition(${1:0.5})",
                    "keywords": [],
                    "desc_ja": "指定位置にシーク（0.0〜1.0）",
                    "desc_ko": "지정된 위치로 이동 (0.0~1.0)"
                },
                {
                    "name": "getCurrentTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback time in seconds",
                    "snippet": "getCurrentTime()",
                    "keywords": [],
                    "desc_ja": "現在の再生時間を秒単位で取得",
                    "desc_ko": "현재 재생 시간을 초 단위로 가져옴"
                },
                {
                    "name": "setCurrentTime",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Seek to a specific time in seconds",
                    "snippet": "setCurrentTime(${1:10.0})",
                    "keywords": [],
                    "desc_ja": "指定した秒数にシーク",
                    "desc_ko": "지정된 시간(초)으로 이동"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set audio volume (0.0 to 1.0)",
                    "snippet": "setVolume(${1:0.8})",
                    "keywords": [],
                    "desc_ja": "音量を設定（0.0〜1.0）",
                    "desc_ko": "음량을 설정 (0.0~1.0)"
                },
                {
                    "name": "getVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current volume",
                    "snippet": "getVolume()",
                    "keywords": [],
                    "desc_ja": "現在の音量を取得",
                    "desc_ko": "현재 음량을 가져옴"
                },
                {
                    "name": "setSpeed",
                    "params": "speed",
                    "params_typed": "float speed",
                    "return_type": "void",
                    "desc": "Set playback speed (1.0 = normal, 2.0 = double speed)",
                    "snippet": "setSpeed(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "再生速度を設定（1.0=通常、2.0=2倍速）",
                    "desc_ko": "재생 속도를 설정 (1.0=보통, 2.0=2배속)"
                },
                {
                    "name": "getSpeed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback speed",
                    "snippet": "getSpeed()",
                    "keywords": [],
                    "desc_ja": "現在の再生速度を取得",
                    "desc_ko": "현재 재생 속도를 가져옴"
                },
                {
                    "name": "setPan",
                    "params": "pan",
                    "params_typed": "float pan",
                    "return_type": "void",
                    "desc": "Set stereo pan (-1.0 left, 0.0 center, 1.0 right)",
                    "snippet": "setPan(${1:0.0})",
                    "keywords": [],
                    "desc_ja": "ステレオパンを設定（-1.0=左、0.0=中央、1.0=右）",
                    "desc_ko": "스테레오 팬을 설정 (-1.0=좌, 0.0=중앙, 1.0=우)"
                },
                {
                    "name": "getPan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stereo pan",
                    "snippet": "getPan()",
                    "keywords": [],
                    "desc_ja": "現在のステレオパンを取得",
                    "desc_ko": "현재 스테레오 팬을 가져옴"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping",
                    "snippet": "setLoop(${1:true})",
                    "keywords": [],
                    "desc_ja": "ループ再生を設定",
                    "desc_ko": "반복 재생을 활성/비활성"
                },
                {
                    "name": "isLoop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if looping is enabled",
                    "snippet": "isLoop()",
                    "keywords": [],
                    "desc_ja": "ループ再生が有効か確認",
                    "desc_ko": "반복 재생이 활성화되었는지 확인"
                },
                {
                    "name": "getCurrentFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current frame number",
                    "snippet": "getCurrentFrame()",
                    "keywords": [],
                    "desc_ja": "現在のフレーム番号を取得",
                    "desc_ko": "현재 프레임 번호를 가져옴"
                },
                {
                    "name": "getTotalFrames",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get total number of frames",
                    "snippet": "getTotalFrames()",
                    "keywords": [],
                    "desc_ja": "総フレーム数を取得",
                    "desc_ko": "전체 프레임 수를 가져옴"
                },
                {
                    "name": "setFrame",
                    "params": "frame",
                    "params_typed": "int frame",
                    "return_type": "void",
                    "desc": "Seek to a specific frame number",
                    "snippet": "setFrame(${1:0})",
                    "keywords": [],
                    "desc_ja": "指定フレームにシーク",
                    "desc_ko": "지정된 프레임으로 이동"
                },
                {
                    "name": "nextFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Advance to the next frame",
                    "snippet": "nextFrame()",
                    "keywords": [],
                    "desc_ja": "次のフレームに進む",
                    "desc_ko": "다음 프레임으로 이동"
                },
                {
                    "name": "previousFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go back to the previous frame",
                    "snippet": "previousFrame()",
                    "keywords": [],
                    "desc_ja": "前のフレームに戻る",
                    "desc_ko": "이전 프레임으로 이동"
                },
                {
                    "name": "firstFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go to the first frame",
                    "snippet": "firstFrame()",
                    "keywords": [],
                    "desc_ja": "最初のフレームに移動",
                    "desc_ko": "첫 프레임으로 이동"
                },
                {
                    "name": "setGammaCorrection",
                    "params": "gamma",
                    "params_typed": "float gamma",
                    "return_type": "void",
                    "desc": "Set gamma correction (1.0 = none). Use ~0.45 to brighten on platforms with dark output (e.g. macOS AVFoundation)",
                    "snippet": "setGammaCorrection(${1:1.0})",
                    "keywords": [],
                    "desc_ja": "ガンマ補正を設定（1.0=補正なし）。macOS等で暗くなる場合に~0.45で明るくする",
                    "desc_ko": "감마 보정을 설정 (1.0=보정 없음). macOS 등에서 어둡게 나오면 ~0.45로 밝게"
                },
                {
                    "name": "getGammaCorrection",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current gamma correction value",
                    "snippet": "getGammaCorrection()",
                    "keywords": [],
                    "desc_ja": "現在のガンマ補正値を取得",
                    "desc_ko": "현재 감마 보정 값을 가져옴"
                },
                {
                    "name": "setUseHwAccel",
                    "params": "enable",
                    "params_typed": "bool enable",
                    "return_type": "void",
                    "desc": "Enable/disable hardware decoding. Must be called before load(). Default: true. When enabled, the player probes available HW backends (VAAPI, V4L2M2M, CUDA, etc.) and falls back to software if none are available. Currently affects the Linux backend only.",
                    "snippet": "setUseHwAccel(${1:true})",
                    "keywords": [],
                    "desc_ja": "ハードウェアデコードの有効/無効。load()の前に呼ぶ。デフォルト: true。有効時はHWバックエンド（VAAPI, V4L2M2M, CUDA等）を自動検出し、なければソフトウェアにフォールバック。現在Linuxのみ対応",
                    "desc_ko": "하드웨어 디코딩 활성/비활성. load() 전에 호출. 기본값: true. 활성화 시 HW 백엔드(VAAPI, V4L2M2M, CUDA 등)를 자동 탐색하고, 없으면 소프트웨어로 폴백. 현재 Linux만 지원"
                },
                {
                    "name": "getUseHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get HW accel preference (not the actual backend — use isUsingHwAccel() for that)",
                    "snippet": "getUseHwAccel()",
                    "keywords": [],
                    "desc_ja": "HWアクセル設定を取得（実際のバックエンドはisUsingHwAccel()で確認）",
                    "desc_ko": "HW 가속 설정을 가져옴 (실제 백엔드는 isUsingHwAccel()로 확인)"
                },
                {
                    "name": "isUsingHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if hardware decoding is currently active (after load)",
                    "snippet": "isUsingHwAccel()",
                    "keywords": [],
                    "desc_ja": "ハードウェアデコードが現在有効か確認（load後に使用）",
                    "desc_ko": "하드웨어 디코딩이 현재 활성 상태인지 확인 (load 후 사용)"
                },
                {
                    "name": "getHwAccelName",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the name of the active decode backend. Returns 'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', or 'none'",
                    "snippet": "getHwAccelName()",
                    "keywords": [],
                    "desc_ja": "使用中のデコードバックエンド名を取得。'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', 'none' のいずれか",
                    "desc_ko": "사용 중인 디코드 백엔드 이름을 가져옴. 'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', 'none' 중 하나"
                },
                {
                    "name": "setResyncThreshold",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Set the maximum video/audio drift before hard re-sync. When drift exceeds this threshold, video seeks to match audio position instead of catching up frame-by-frame. Set to 0 to disable. Default: 0.5s. Primarily affects Linux (FFmpeg) backend.",
                    "snippet": "setResyncThreshold(${1:0.5})",
                    "keywords": [],
                    "desc_ja": "映像/音声のズレが許容値を超えた場合にハードリシンクする閾値を設定。ズレがこの値を超えるとフレーム送りではなくシークで同期。0で無効。デフォルト: 0.5秒。主にLinux(FFmpeg)で有効",
                    "desc_ko": "비디오/오디오 드리프트가 임계값을 초과하면 하드 리싱크하는 값을 설정. 드리프트가 이 값을 초과하면 프레임 추적 대신 시크로 동기화. 0이면 비활성. 기본값: 0.5초. 주로 Linux(FFmpeg)에서 유효"
                },
                {
                    "name": "getResyncThreshold",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the current resync threshold in seconds",
                    "snippet": "getResyncThreshold()",
                    "keywords": [],
                    "desc_ja": "現在のリシンク閾値を秒単位で取得",
                    "desc_ko": "현재 리싱크 임계값을 초 단위로 가져옴"
                },
                {
                    "name": "hasAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if the loaded video has an audio track",
                    "snippet": "hasAudio()",
                    "keywords": [],
                    "desc_ja": "読み込んだビデオに音声トラックがあるか確認",
                    "desc_ko": "로드된 비디오에 오디오 트랙이 있는지 확인"
                },
                {
                    "name": "extractFrame",
                    "params": "path, outPixels, timeSec",
                    "params_typed": "const string& path, Pixels& outPixels, float timeSec",
                    "return_type": "bool",
                    "desc": "Extract a single frame from a video file without loading the full video. Useful for thumbnails",
                    "snippet": "VideoPlayer::extractFrame(${1:\"video.mp4\"}, pixels, ${2:0.0})",
                    "keywords": [],
                    "desc_ja": "ビデオファイルから1フレームを抽出（全体を読み込まずに）。サムネイル生成に便利",
                    "desc_ko": "비디오 파일에서 전체를 로드하지 않고 단일 프레임을 추출. 썸네일 생성에 유용"
                },
                {
                    "name": "ScreenRecorder",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Live screen recorder: captures the window (or an Fbo) every frame to a video file (native encoder, no ffmpeg)",
                    "snippet": "ScreenRecorder()",
                    "keywords": [],
                    "desc_ja": "ライブ画面録画：ウィンドウ（またはFbo）を毎フレーム動画ファイルに録画（ネイティブエンコーダ、ffmpeg不要）",
                    "desc_ko": "라이브 화면 녹화: 윈도우(또는 Fbo)를 매 프레임 동영상 파일로 녹화 (네이티브 인코더, ffmpeg 불필요)"
                },
                {
                    "name": "start",
                    "params": "path, settings",
                    "params_typed": "const string& path, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Start live capture (window, or an Fbo for clean GUI-free output); size is taken automatically",
                    "snippet": "start(${1:\"out.mp4\"})",
                    "keywords": [],
                    "desc_ja": "ライブ録画開始（ウィンドウ、またはGUIなしのクリーン出力はFbo）。サイズは自動取得",
                    "desc_ko": "라이브 녹화 시작 (윈도우, 또는 GUI 없는 클린 출력은 Fbo); 크기는 자동 취득",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "start",
                    "params": "fbo, path, settings",
                    "params_typed": "const Fbo& fbo, const string& path, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Start live capture (window, or an Fbo for clean GUI-free output); size is taken automatically",
                    "snippet": "start(${1:\"out.mp4\"})",
                    "keywords": [],
                    "desc_ja": "ライブ録画開始（ウィンドウ、またはGUIなしのクリーン出力はFbo）。サイズは自動取得",
                    "desc_ko": "라이브 녹화 시작 (윈도우, 또는 GUI 없는 클린 출력은 Fbo); 크기는 자동 취득",
                    "examples": [
                        {
                            "name": "vectorMathExample",
                            "group": "math"
                        }
                    ]
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop live capture and finalize the file",
                    "snippet": "stop()",
                    "keywords": [],
                    "desc_ja": "ライブ録画を停止してファイルを確定",
                    "desc_ko": "라이브 녹화를 중지하고 파일을 마무리"
                },
                {
                    "name": "VideoWriter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Low-level video encoder: you feed it frames (deterministic, fixed-rate offline render)",
                    "snippet": "VideoWriter()",
                    "keywords": [],
                    "desc_ja": "低レベル動画エンコーダ：フレームを自分で渡す（決定論的・固定レートのオフライン書き出し）",
                    "desc_ko": "저수준 동영상 인코더: 프레임을 직접 공급 (결정론적·고정 레이트 오프라인 렌더)"
                },
                {
                    "name": "open",
                    "params": "path, width, height, settings",
                    "params_typed": "const string& path, int width, int height, const VideoRecordSettings& settings = {}",
                    "return_type": "bool",
                    "desc": "Open the encoder at the given size (path resolved via getDataPath)",
                    "snippet": "open(${1:\"out.mp4\"}, ${2:1280}, ${3:720})",
                    "keywords": [],
                    "desc_ja": "指定サイズでエンコーダを開く（パスはgetDataPathで解決）",
                    "desc_ko": "지정 크기로 인코더를 엽니다 (경로는 getDataPath로 해석)"
                },
                {
                    "name": "addFrame",
                    "params": "fbo",
                    "params_typed": "const Fbo& fbo",
                    "return_type": "bool",
                    "desc": "Append one frame at the fixed-rate clock (frameIndex/fps)",
                    "snippet": "addFrame(${1:fbo})",
                    "keywords": [],
                    "desc_ja": "1フレームを固定レート（frameIndex/fps）で追加",
                    "desc_ko": "한 프레임을 고정 레이트(frameIndex/fps)로 추가"
                },
                {
                    "name": "addFrame",
                    "params": "pixels",
                    "params_typed": "const Pixels& pixels",
                    "return_type": "bool",
                    "desc": "Append one frame at the fixed-rate clock (frameIndex/fps)",
                    "snippet": "addFrame(${1:fbo})",
                    "keywords": [],
                    "desc_ja": "1フレームを固定レート（frameIndex/fps）で追加",
                    "desc_ko": "한 프레임을 고정 레이트(frameIndex/fps)로 추가"
                },
                {
                    "name": "addFrameAt",
                    "params": "fbo, timeSec",
                    "params_typed": "const Fbo& fbo, double timeSec",
                    "return_type": "bool",
                    "desc": "Append one frame at an explicit presentation time (seconds)",
                    "snippet": "addFrameAt(${1:fbo}, ${2:t})",
                    "keywords": [],
                    "desc_ja": "1フレームを明示的な表示時刻（秒）で追加",
                    "desc_ko": "한 프레임을 명시적 표시 시각(초)으로 추가"
                },
                {
                    "name": "addFrameAt",
                    "params": "pixels, timeSec",
                    "params_typed": "const Pixels& pixels, double timeSec",
                    "return_type": "bool",
                    "desc": "Append one frame at an explicit presentation time (seconds)",
                    "snippet": "addFrameAt(${1:fbo}, ${2:t})",
                    "keywords": [],
                    "desc_ja": "1フレームを明示的な表示時刻（秒）で追加",
                    "desc_ko": "한 프레임을 명시적 표시 시각(초)으로 추가"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Finalize and flush the video file",
                    "snippet": "close()",
                    "keywords": [],
                    "desc_ja": "動画ファイルを確定してフラッシュ",
                    "desc_ko": "동영상 파일을 마무리하고 플러시"
                },
                {
                    "name": "videoCodecName",
                    "params": "c",
                    "params_typed": "VideoCodec c",
                    "return_type": "const char *",
                    "desc": "Return a human-readable name for a VideoCodec value (e.g. \"H.264\", \"HEVC\", \"ProRes 422\")",
                    "snippet": "videoCodecName(${1:codec})",
                    "keywords": [],
                    "desc_ja": "",
                    "desc_ko": ""
                }
            ],
            "name_ja": "ビデオ",
            "name_ko": "비디오"
        },
        {
            "name": "Addon: tcxLut (Color Grading)",
            "functions": [
                {
                    "name": "tcx::lut::Lut3D",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 3D LUT for color grading",
                    "keywords": [],
                    "desc_ja": "カラーグレーディング用3D LUTを作成",
                    "desc_ko": "컬러 그레이딩용 3D LUT를 생성"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const fs::path& path",
                    "return_type": "bool",
                    "desc": "Load .cube file",
                    "keywords": [],
                    "desc_ja": ".cubeファイルを読み込む",
                    "desc_ko": ".cube 파일을 로드"
                },
                {
                    "name": "allocate",
                    "params": "size, data",
                    "params_typed": "int size, const float* data = nullptr",
                    "return_type": "void",
                    "desc": "Allocate LUT with optional data",
                    "keywords": [],
                    "desc_ja": "LUTをメモリ確保（データ指定可）",
                    "desc_ko": "선택적 데이터로 LUT를 할당"
                },
                {
                    "name": "isAllocated",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if LUT is allocated",
                    "keywords": [],
                    "desc_ja": "LUTが確保済みか確認",
                    "desc_ko": "LUT가 할당되었는지 확인"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get LUT size (e.g., 32 for 32x32x32)",
                    "keywords": [],
                    "desc_ja": "LUTサイズを取得（32x32x32なら32）",
                    "desc_ko": "LUT 크기를 얻음 (예: 32x32x32의 경우 32)"
                },
                {
                    "name": "tcx::lut::createIdentity",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create identity LUT (no color change)",
                    "keywords": [],
                    "desc_ja": "Identity LUTを生成（色変更なし）",
                    "desc_ko": "단위 LUT를 생성 (색상 변화 없음)"
                },
                {
                    "name": "tcx::lut::createVintage",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create vintage/faded look LUT",
                    "keywords": [],
                    "desc_ja": "ビンテージ/フェード風LUTを生成",
                    "desc_ko": "빈티지/페이드 룩 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createCinematic",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cinematic orange/teal LUT",
                    "keywords": [],
                    "desc_ja": "シネマティック（オレンジ/ティール）LUTを生成",
                    "desc_ko": "시네마틱 오렌지/틸 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createFilmNoir",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create film noir high-contrast B&W LUT",
                    "keywords": [],
                    "desc_ja": "フィルムノワール（高コントラストB&W）LUTを生成",
                    "desc_ko": "필름 누아르 고대비 흑백 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createWarm",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create warm color shift LUT",
                    "keywords": [],
                    "desc_ja": "暖色系LUTを生成",
                    "desc_ko": "따뜻한 색조 시프트 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createCool",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cool color shift LUT",
                    "keywords": [],
                    "desc_ja": "寒色系LUTを生成",
                    "desc_ko": "차가운 색조 시프트 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createCyberpunk",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cyberpunk neon pink/cyan LUT",
                    "keywords": [],
                    "desc_ja": "サイバーパンク（ネオンピンク/シアン）LUTを生成",
                    "desc_ko": "사이버펑크 네온 핑크/시안 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createPastel",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create soft pastel LUT",
                    "keywords": [],
                    "desc_ja": "パステル調LUTを生成",
                    "desc_ko": "부드러운 파스텔 LUT를 생성"
                },
                {
                    "name": "tcx::lut::LutShader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a LUT shader for color grading",
                    "keywords": [],
                    "desc_ja": "カラーグレーディング用LUTシェーダーを作成",
                    "desc_ko": "컬러 그레이딩용 LUT 셰이더를 생성"
                },
                {
                    "name": "setTexture",
                    "params": "tex",
                    "params_typed": "const T& tex",
                    "return_type": "void",
                    "desc": "Set source texture (VideoGrabber, Texture, Fbo, etc.)",
                    "keywords": [],
                    "desc_ja": "ソーステクスチャを設定（VideoGrabber, Texture, Fboなど）",
                    "desc_ko": "소스 텍스처 설정 (VideoGrabber, Texture, Fbo 등)"
                },
                {
                    "name": "setLut",
                    "params": "lut",
                    "params_typed": "const Lut3D& lut",
                    "return_type": "void",
                    "desc": "Set LUT to apply",
                    "keywords": [],
                    "desc_ja": "適用するLUTを設定",
                    "desc_ko": "적용할 LUT를 설정"
                },
                {
                    "name": "setBlend",
                    "params": "blend",
                    "params_typed": "float blend",
                    "return_type": "void",
                    "desc": "Set blend amount (0=original, 1=full LUT)",
                    "keywords": [],
                    "desc_ja": "ブレンド量を設定（0=元画像, 1=LUT全適用）",
                    "desc_ko": "블렌드 양 설정 (0=원본, 1=LUT 완전 적용)"
                },
                {
                    "name": "draw",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw with LUT applied",
                    "keywords": [],
                    "desc_ja": "LUTを適用して描画",
                    "desc_ko": "LUT를 적용하여 그림"
                },
                {
                    "name": "draw",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw with LUT applied",
                    "keywords": [],
                    "desc_ja": "LUTを適用して描画",
                    "desc_ko": "LUT를 적용하여 그림"
                },
                {
                    "name": "drawSubsection",
                    "params": "x, y, w, h, sx, sy, sw, sh",
                    "params_typed": "float x, float y, float w, float h, float sx, float sy, float sw, float sh",
                    "return_type": "void",
                    "desc": "Draw subsection with LUT applied",
                    "keywords": [],
                    "desc_ja": "LUTを適用して部分描画",
                    "desc_ko": "LUT를 적용하여 부분을 그림"
                }
            ],
            "name_ja": "アドオン: tcxLut（カラーグレーディング）",
            "name_ko": "애드온: tcxLut (컬러 그레이딩)"
        },
        {
            "name": "Timers",
            "functions": [
                {
                    "name": "callAfter",
                    "params": "delay, callback",
                    "params_typed": "double delay, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Run callback once after delay seconds. Fired from the update loop (frame-quantized). Returns a timer id.",
                    "snippet": "callAfter(1.0, [this]() {\n\t$0\n});",
                    "keywords": [],
                    "desc_ja": "delay秒後にcallbackを1回実行。更新ループから発火（フレーム単位）。タイマーidを返す",
                    "desc_ko": "delay초 후 callback을 한 번 실행. 업데이트 루프에서 발생(프레임 단위). 타이머 id를 반환",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "callEvery",
                    "params": "interval, callback",
                    "params_typed": "double interval, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Run callback repeatedly every interval seconds. Fired from the update loop (frame-quantized). Returns a timer id.",
                    "snippet": "callEvery(0.5, [this]() {\n\t$0\n});",
                    "keywords": [],
                    "desc_ja": "interval秒ごとにcallbackを繰り返し実行。更新ループから発火（フレーム単位）。タイマーidを返す",
                    "desc_ko": "interval초마다 callback을 반복 실행. 업데이트 루프에서 발생(프레임 단위). 타이머 id를 반환",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "callAfterAsync",
                    "params": "delay, callback",
                    "params_typed": "double delay, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Like callAfter, but fired by a precise background scheduler thread (no frame jitter). The callback runs OFF the main thread: guard shared state with a mutex, never draw from it, and don't cancel while holding that mutex. Native only (uses a real thread). Returns a timer id.",
                    "snippet": "callAfterAsync(1.0, [this]() {\n\t$0\n});",
                    "keywords": [],
                    "desc_ja": "callAfterの精密版。バックグラウンドのスケジューラスレッドが正確な時刻に発火（フレームジッタなし）。コールバックはメインスレッド外で走る：共有状態はmutexで保護、描画は禁止、そのmutexを保持したままcancelしない。ネイティブ専用（実スレッド使用）。タイマーidを返す",
                    "desc_ko": "callAfter의 정밀 버전. 백그라운드 스케줄러 스레드가 정확한 시각에 실행(프레임 지터 없음). 콜백은 메인 스레드 밖에서 실행됨: 공유 상태는 mutex로 보호, 그리기 금지, 해당 mutex를 들고 cancel하지 말 것. 네이티브 전용(실제 스레드 사용). 타이머 id를 반환"
                },
                {
                    "name": "callEveryAsync",
                    "params": "interval, callback",
                    "params_typed": "double interval, std::function<void()> callback",
                    "return_type": "uint64_t",
                    "desc": "Like callEvery, but fired by a precise background scheduler thread with no drift (reschedules at absolute times). Ideal for sequencer clocks and LED/MIDI output timing. Same threading rules as callAfterAsync. Native only. Returns a timer id.",
                    "snippet": "callEveryAsync(0.5, [this]() {\n\t$0\n});",
                    "keywords": [],
                    "desc_ja": "callEveryの精密版。バックグラウンドのスケジューラスレッドがドリフトなく発火（絶対時刻で再スケジュール）。シーケンサのクロックやLED/MIDI出力のタイミングに最適。スレッドの注意点はcallAfterAsyncと同じ。ネイティブ専用。タイマーidを返す",
                    "desc_ko": "callEvery의 정밀 버전. 백그라운드 스케줄러 스레드가 드리프트 없이 실행(절대 시각으로 재예약). 시퀀서 클럭이나 LED/MIDI 출력 타이밍에 적합. 스레드 주의사항은 callAfterAsync와 동일. 네이티브 전용. 타이머 id를 반환"
                },
                {
                    "name": "cancelTimer",
                    "params": "id",
                    "params_typed": "uint64_t id",
                    "return_type": "void",
                    "desc": "Cancel a frame timer (callAfter/callEvery) by id.",
                    "snippet": "cancelTimer(id);",
                    "keywords": [],
                    "desc_ja": "id指定でフレームタイマー（callAfter/callEvery）をキャンセル",
                    "desc_ko": "id로 프레임 타이머(callAfter/callEvery)를 취소",
                    "examples": [
                        {
                            "name": "timerExample",
                            "group": "utils"
                        }
                    ]
                },
                {
                    "name": "cancelAllTimers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Cancel all frame timers on this node.",
                    "snippet": "cancelAllTimers();",
                    "keywords": [],
                    "desc_ja": "このノードのフレームタイマーを全てキャンセル",
                    "desc_ko": "이 노드의 모든 프레임 타이머를 취소"
                },
                {
                    "name": "cancelAsyncTimer",
                    "params": "id",
                    "params_typed": "uint64_t id",
                    "return_type": "void",
                    "desc": "Cancel an async timer by id. Blocks until its callback finishes if it is running now (unless called from inside the callback). Do not call while holding the mutex the callback uses.",
                    "snippet": "cancelAsyncTimer(id);",
                    "keywords": [],
                    "desc_ja": "id指定で非同期タイマーをキャンセル。実行中なら完了を待つ（コールバック内から呼ぶ場合を除く）。コールバックが使うmutexを保持したまま呼ばないこと",
                    "desc_ko": "id로 비동기 타이머를 취소. 실행 중이면 완료를 기다림(콜백 내부에서 호출하는 경우 제외). 콜백이 쓰는 mutex를 들고 호출하지 말 것"
                },
                {
                    "name": "cancelAllAsyncTimers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Cancel all async timers on this node (e.g. on mode change). Waits out any in-flight callback. Call it WITHOUT holding the callback's mutex to avoid a deadlock.",
                    "snippet": "cancelAllAsyncTimers();",
                    "keywords": [],
                    "desc_ja": "このノードの非同期タイマーを全てキャンセル（モード変更時など）。実行中のコールバックの完了を待つ。デッドロック回避のため、コールバックのmutexを保持せずに呼ぶこと",
                    "desc_ko": "이 노드의 모든 비동기 타이머를 취소(모드 전환 등). 실행 중인 콜백의 완료를 기다림. 데드락 방지를 위해 콜백의 mutex를 들지 않고 호출할 것"
                }
            ],
            "name_ja": "タイマー",
            "name_ko": "타이머"
        },
        {
            "name": "Network",
            "functions": [
                {
                    "name": "listNetworkInterfaces",
                    "params": "",
                    "params_typed": "",
                    "return_type": "std::vector<NetworkInterface>",
                    "desc": "List all network interface address entries (IPv4/IPv6, loopback, up or down)",
                    "snippet": "listNetworkInterfaces()",
                    "keywords": [],
                    "desc_ja": "全ネットワークインターフェースのアドレスを列挙（IPv4/IPv6・ループバック・up/down含む）",
                    "desc_ko": "모든 네트워크 인터페이스 주소를 나열 (IPv4/IPv6, 루프백, up/down 포함)"
                },
                {
                    "name": "printNetworkInterfaces",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Log the interface list (one line per entry)",
                    "snippet": "printNetworkInterfaces()",
                    "keywords": [],
                    "desc_ja": "インターフェース一覧をログ出力（1エントリ1行）",
                    "desc_ko": "인터페이스 목록을 로그로 출력 (항목당 한 줄)"
                },
                {
                    "name": "getLocalIp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "std::string",
                    "desc": "The most likely LAN address (skips loopback/down, IPv4 preferred). \"\" if none",
                    "snippet": "getLocalIp()",
                    "keywords": [],
                    "desc_ja": "一番それっぽいLANアドレス（ループバック/downを除外、IPv4優先）。無ければ\"\"",
                    "desc_ko": "가장 적합한 LAN 주소 (루프백/down 제외, IPv4 우선). 없으면 \"\""
                },
                {
                    "name": "getLocalIps",
                    "params": "",
                    "params_typed": "",
                    "return_type": "std::vector<std::string>",
                    "desc": "Every non-loopback address (one per interface entry)",
                    "snippet": "getLocalIps()",
                    "keywords": [],
                    "desc_ja": "ループバック以外の全アドレス（インターフェースごと）",
                    "desc_ko": "루프백이 아닌 모든 주소 (인터페이스 항목별)"
                },
                {
                    "name": "isLoopback",
                    "params": "addr",
                    "params_typed": "const std::string& addr",
                    "return_type": "bool",
                    "desc": "True if addr is a loopback address (127.0.0.0/8 or ::1)",
                    "snippet": "isLoopback(${1:addr})",
                    "keywords": [],
                    "desc_ja": "addrがループバックアドレスならtrue（127.0.0.0/8 または ::1）",
                    "desc_ko": "addr이 루프백 주소이면 true (127.0.0.0/8 또는 ::1)"
                },
                {
                    "name": "isPrivate",
                    "params": "addr",
                    "params_typed": "const std::string& addr",
                    "return_type": "bool",
                    "desc": "True if addr is a private IPv4 (10/8, 172.16/12, 192.168/16)",
                    "snippet": "isPrivate(${1:addr})",
                    "keywords": [],
                    "desc_ja": "addrがプライベートIPv4ならtrue（10/8, 172.16/12, 192.168/16）",
                    "desc_ko": "addr이 사설 IPv4이면 true (10/8, 172.16/12, 192.168/16)"
                },
                {
                    "name": "isLinkLocal",
                    "params": "addr",
                    "params_typed": "const std::string& addr",
                    "return_type": "bool",
                    "desc": "True if addr is link-local (169.254/16 or fe80::/10)",
                    "snippet": "isLinkLocal(${1:addr})",
                    "keywords": [],
                    "desc_ja": "addrがリンクローカルならtrue（169.254/16 または fe80::/10）",
                    "desc_ko": "addr이 링크-로컬이면 true (169.254/16 또는 fe80::/10)"
                },
                {
                    "name": "sameSubnet",
                    "params": "a, b, netmask",
                    "params_typed": "const std::string& a, const std::string& b, const std::string& netmask",
                    "return_type": "bool",
                    "desc": "True if IPv4 a and b are on the same subnet under netmask",
                    "snippet": "sameSubnet(${1:a}, ${2:b}, ${3:netmask})",
                    "keywords": [],
                    "desc_ja": "IPv4のaとbがnetmask下で同じサブネットならtrue",
                    "desc_ko": "IPv4 a와 b가 netmask 하에서 같은 서브넷이면 true"
                },
                {
                    "name": "getOui",
                    "params": "mac",
                    "params_typed": "const std::string& mac",
                    "return_type": "std::string",
                    "desc": "The OUI (first 3 bytes) of a MAC, uppercase \"A4:83:E7\". \"\" if unparseable",
                    "snippet": "getOui(${1:mac})",
                    "keywords": [],
                    "desc_ja": "MACのOUI（先頭3バイト）を大文字で返す \"A4:83:E7\"。解析不能なら\"\"",
                    "desc_ko": "MAC의 OUI(앞 3바이트)를 대문자로 \"A4:83:E7\". 해석 불가 시 \"\""
                },
                {
                    "name": "isLocallyAdministered",
                    "params": "mac",
                    "params_typed": "const std::string& mac",
                    "return_type": "bool",
                    "desc": "True if the MAC's locally-administered bit is set (randomized/virtual MAC)",
                    "snippet": "isLocallyAdministered(${1:mac})",
                    "keywords": [],
                    "desc_ja": "MACのlocally-administeredビットが立っていればtrue（ランダム化/仮想MAC）",
                    "desc_ko": "MAC의 locally-administered 비트가 설정되어 있으면 true (랜덤/가상 MAC)"
                }
            ],
            "name_ja": "ネットワーク",
            "name_ko": "네트워크"
        }
    ],
    "constants": [
        {
            "name": "TAU",
            "value": "6.283...",
            "desc": "Full circle (2*PI)",
            "keywords": []
        },
        {
            "name": "HALF_TAU",
            "value": "3.141...",
            "desc": "Half circle (PI)",
            "keywords": []
        },
        {
            "name": "QUARTER_TAU",
            "value": "1.570...",
            "desc": "Quarter circle (PI/2)",
            "keywords": []
        },
        {
            "name": "PI",
            "value": "3.141...",
            "desc": "Pi (use TAU instead)",
            "keywords": []
        },
        {
            "name": "FONT_SANS",
            "value": "string",
            "desc": "System sans-serif font path (CDN URL on Web)",
            "keywords": []
        },
        {
            "name": "FONT_SERIF",
            "value": "string",
            "desc": "System serif font path (CDN URL on Web)",
            "keywords": []
        },
        {
            "name": "FONT_MONO",
            "value": "string",
            "desc": "System monospace font path (CDN URL on Web)",
            "keywords": []
        },
        {
            "name": "FONT_SANS_JA",
            "value": "string",
            "desc": "Japanese sans-serif font (Hiragino Sans on macOS, Yu Gothic on Win, Noto Sans CJK JP on Linux/Android, Google Fonts CDN URL on Web)",
            "keywords": []
        },
        {
            "name": "FONT_SERIF_JA",
            "value": "string",
            "desc": "Japanese serif font (Hiragino Mincho on macOS, Yu Mincho on Win, Noto Serif CJK JP on Linux/Android, Google Fonts CDN URL on Web)",
            "keywords": []
        },
        {
            "name": "KEY_SPACE",
            "value": "32",
            "desc": "Space key",
            "keywords": []
        },
        {
            "name": "KEY_ESCAPE",
            "value": "256",
            "desc": "Escape key",
            "keywords": []
        },
        {
            "name": "KEY_ENTER",
            "value": "257",
            "desc": "Enter/Return key",
            "keywords": []
        },
        {
            "name": "KEY_TAB",
            "value": "258",
            "desc": "Tab key",
            "keywords": []
        },
        {
            "name": "KEY_BACKSPACE",
            "value": "259",
            "desc": "Backspace key",
            "keywords": []
        },
        {
            "name": "KEY_DELETE",
            "value": "261",
            "desc": "Delete key",
            "keywords": []
        },
        {
            "name": "KEY_RIGHT",
            "value": "262",
            "desc": "Right arrow key",
            "keywords": []
        },
        {
            "name": "KEY_LEFT",
            "value": "263",
            "desc": "Left arrow key",
            "keywords": []
        },
        {
            "name": "KEY_DOWN",
            "value": "264",
            "desc": "Down arrow key",
            "keywords": []
        },
        {
            "name": "KEY_UP",
            "value": "265",
            "desc": "Up arrow key",
            "keywords": []
        },
        {
            "name": "KEY_LEFT_SHIFT",
            "value": "340",
            "desc": "Left Shift key",
            "keywords": []
        },
        {
            "name": "KEY_RIGHT_SHIFT",
            "value": "344",
            "desc": "Right Shift key",
            "keywords": []
        },
        {
            "name": "KEY_LEFT_CONTROL",
            "value": "341",
            "desc": "Left Control key",
            "keywords": []
        },
        {
            "name": "KEY_RIGHT_CONTROL",
            "value": "345",
            "desc": "Right Control key",
            "keywords": []
        },
        {
            "name": "KEY_LEFT_ALT",
            "value": "342",
            "desc": "Left Alt/Option key",
            "keywords": []
        },
        {
            "name": "KEY_RIGHT_ALT",
            "value": "346",
            "desc": "Right Alt/Option key",
            "keywords": []
        },
        {
            "name": "KEY_LEFT_SUPER",
            "value": "343",
            "desc": "Left Super/Command key",
            "keywords": []
        },
        {
            "name": "KEY_RIGHT_SUPER",
            "value": "347",
            "desc": "Right Super/Command key",
            "keywords": []
        },
        {
            "name": "MOUSE_BUTTON_LEFT",
            "value": "0",
            "desc": "Left mouse button",
            "keywords": []
        },
        {
            "name": "MOUSE_BUTTON_RIGHT",
            "value": "1",
            "desc": "Right mouse button",
            "keywords": []
        },
        {
            "name": "MOUSE_BUTTON_MIDDLE",
            "value": "2",
            "desc": "Middle mouse button",
            "keywords": []
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
            "keywords": [],
            "desc_ja": "2Dベクトル (x, y)",
            "desc_ko": "2D 벡터 (x, y)",
            "examples": [
                {
                    "name": "vectorMathExample",
                    "group": "math"
                },
                {
                    "name": "grabExample",
                    "group": "node"
                }
            ],
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
            "keywords": [],
            "desc_ja": "3Dベクトル (x, y, z)",
            "desc_ko": "3D 벡터 (x, y, z)",
            "examples": [
                {
                    "name": "curveVariationsExample",
                    "group": "graphics"
                },
                {
                    "name": "curvesExample",
                    "group": "graphics"
                },
                {
                    "name": "projectorSimulationExample",
                    "group": "3d"
                }
            ],
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
            "keywords": [],
            "desc_ja": "2D整数ベクトル (x, y)",
            "desc_ko": "2D 정수 벡터 (x, y)",
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
            "keywords": [],
            "desc_ja": "3D整数ベクトル (x, y, z)",
            "desc_ko": "3D 정수 벡터 (x, y, z)",
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
            "keywords": [],
            "desc_ja": "2D整数ベクトル (x, y)",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "3D整数ベクトル (x, y, z)",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "RGBAカラー (0.0-1.0範囲)",
            "desc_ko": "RGBA 색상 (0.0-1.0 범위)",
            "examples": [
                {
                    "name": "graphicsExample",
                    "group": "graphics"
                },
                {
                    "name": "colorExample",
                    "group": "graphics"
                }
            ],
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
            "keywords": [],
            "desc_ja": "矩形 (x, y, width, height)",
            "desc_ko": "사각형 (x, y, width, height)",
            "examples": [
                {
                    "name": "fontExample",
                    "group": "font"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
            "keywords": [],
            "desc_ja": "3D変換用4x4行列",
            "desc_ko": "3D 변환용 4x4 행렬",
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
            "keywords": [],
            "desc_ja": "3D回転用単位クォータニオン",
            "desc_ko": "3D 회전용 단위 쿼터니언",
            "examples": [
                {
                    "name": "systemInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "画像操作用ピクセルバッファ",
            "desc_ko": "이미지 조작용 픽셀 버퍼",
            "examples": [
                {
                    "name": "normalMapExample",
                    "group": "3d"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
                    "name": "halve",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Replace with 2x2 box-averaged half. Gamma-correct for U8.",
                    "snippet": "halve()"
                },
                {
                    "name": "resize",
                    "return": "void",
                    "signatures": [
                        "int newWidth, int newHeight"
                    ],
                    "desc": "Quality resize: BoxArea on downscale, Catmull-Rom bicubic on upscale, gamma-correct for U8.",
                    "snippet": "resize(${1:newWidth}, ${2:newHeight})"
                },
                {
                    "name": "crop",
                    "return": "void",
                    "signatures": [
                        "int x, int y, int w, int h"
                    ],
                    "desc": "Crop to (w x h) region starting at (x, y). Out-of-bounds samples use clamp-to-edge.",
                    "snippet": "crop(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "mirror",
                    "return": "void",
                    "signatures": [
                        "bool horizontal, bool vertical"
                    ],
                    "desc": "Flip in place. Both true is 180°.",
                    "snippet": "mirror(${1:horizontal}, ${2:vertical})"
                },
                {
                    "name": "mirrorH",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror horizontally (alias for mirror(true, false))",
                    "snippet": "mirrorH()"
                },
                {
                    "name": "mirrorV",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror vertically (alias for mirror(false, true))",
                    "snippet": "mirrorV()"
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
            "keywords": [],
            "desc_ja": "CPUピクセルとGPUテクスチャを持つ画像",
            "desc_ko": "CPU 픽셀과 GPU 텍스처를 가진 이미지",
            "examples": [
                {
                    "name": "imageOpsExample",
                    "group": "graphics"
                },
                {
                    "name": "imageLoaderExample",
                    "group": "input_output"
                },
                {
                    "name": "textureExample",
                    "group": "graphics"
                }
            ],
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "string path",
                        "string path, bool mipmaps"
                    ],
                    "desc": "Load image from file. `mipmaps=true` builds a mip chain — recommended when the image will be sampled at varying scales (e.g. mapped onto a 3D surface).",
                    "snippet": "load(${1:\"path\"})"
                },
                {
                    "name": "loadFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const uint8_t* buffer, int len",
                        "const uint8_t* buffer, int len, bool mipmaps"
                    ],
                    "desc": "Load image from memory. `mipmaps=true` builds a mip chain.",
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
                        "int width, int height, int channels",
                        "int width, int height, int channels, bool mipmaps"
                    ],
                    "desc": "Allocate empty image for dynamic updates. `mipmaps=true` builds a chain refreshed on every update().",
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
                    "name": "halve",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Replace with 2x2 box-averaged half. Gamma-correct for U8.",
                    "snippet": "halve()"
                },
                {
                    "name": "resize",
                    "return": "void",
                    "signatures": [
                        "int newWidth, int newHeight"
                    ],
                    "desc": "Quality resize: BoxArea on downscale, Catmull-Rom bicubic on upscale, gamma-correct for U8. Use FBO sampling for fast paths.",
                    "snippet": "resize(${1:newWidth}, ${2:newHeight})"
                },
                {
                    "name": "crop",
                    "return": "void",
                    "signatures": [
                        "int x, int y, int w, int h"
                    ],
                    "desc": "Crop to (w x h) region starting at (x, y). Out-of-bounds samples use clamp-to-edge.",
                    "snippet": "crop(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "mirror",
                    "return": "void",
                    "signatures": [
                        "bool horizontal, bool vertical"
                    ],
                    "desc": "Flip the image. `horizontal=true` mirrors left-right; `vertical=true` mirrors top-bottom; both true is 180°.",
                    "snippet": "mirror(${1:horizontal}, ${2:vertical})"
                },
                {
                    "name": "mirrorH",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror horizontally (alias for mirror(true, false))",
                    "snippet": "mirrorH()"
                },
                {
                    "name": "mirrorV",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Mirror vertically (alias for mirror(false, true))",
                    "snippet": "mirrorV()"
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
            "keywords": [],
            "desc_ja": "レンダリング用GPUテクスチャ",
            "desc_ko": "렌더링용 GPU 텍스처",
            "examples": [
                {
                    "name": "normalMapExample",
                    "group": "3d"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
            "keywords": [],
            "desc_ja": "オフスクリーンレンダリング用FBO",
            "desc_ko": "오프스크린 렌더링용 프레임버퍼 객체",
            "examples": [
                {
                    "name": "fboMipmapExample",
                    "group": "3d"
                },
                {
                    "name": "fboExample",
                    "group": "graphics"
                }
            ],
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
                        "int width, int height",
                        "int width, int height, int sampleCount",
                        "int width, int height, int sampleCount, TextureFormat format",
                        "int width, int height, int sampleCount, TextureFormat format, bool mipmaps"
                    ],
                    "desc": "Allocate framebuffer. `mipmaps=true` builds a full mip chain that is refreshed automatically at end().",
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
            "keywords": [],
            "desc_ja": "線と曲線のパス/ポリライン",
            "desc_ko": "선과 곡선을 위한 경로/폴리라인",
            "examples": [
                {
                    "name": "fontPathExample",
                    "group": "font"
                },
                {
                    "name": "polylinesExample",
                    "group": "graphics"
                },
                {
                    "name": "strokeMeshExample",
                    "group": "graphics"
                }
            ],
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
                    "name": "moveTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y",
                        "float x, float y, float z",
                        "Vec2 p",
                        "Vec3 p"
                    ],
                    "desc": "Start a new subpath at (x, y). A single Path can hold multiple disjoint contours (think SVG `<path>` with `M ... M ...`) — used by Font::getGlyphPath to keep an outer ring and its holes in one Path so drawFill can detect holes.",
                    "snippet": "moveTo(${1:x}, ${2:y})"
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
                        "float cx1, float cy1, float cx2, float cy2, float x, float y, int resolution = -1",
                        "Vec2 cp1, Vec2 cp2, Vec2 to, int resolution = -1",
                        "Vec3 cp1, Vec3 cp2, Vec3 to, int resolution = -1"
                    ],
                    "desc": "Add cubic bezier curve (resolution=-1 uses current curve style)",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})"
                },
                {
                    "name": "quadBezierTo",
                    "return": "void",
                    "signatures": [
                        "float cx, float cy, float x, float y, int resolution = -1",
                        "Vec2 cp, Vec2 to, int resolution = -1",
                        "Vec3 cp, Vec3 to, int resolution = -1"
                    ],
                    "desc": "Add quadratic bezier curve (resolution=-1 uses current curve style)",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})"
                },
                {
                    "name": "curveTo",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float z = 0, int resolution = -1",
                        "Vec2 to, int resolution = -1",
                        "Vec3 to, int resolution = -1"
                    ],
                    "desc": "Add Catmull-Rom curve segment (needs >=4 consecutive calls; resolution=-1 uses current curve style)",
                    "snippet": "curveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "arc",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float radius, float angleBegin, float angleEnd, bool clockwise = true",
                        "Vec2 center, float radius, float angleBegin, float angleEnd, bool clockwise = true",
                        "Vec3 center, float radius, float angleBegin, float angleEnd, bool clockwise = true"
                    ],
                    "desc": "Add an arc (angles in radians)",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:radius}, ${4:0}, ${5:TAU})"
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
                    "name": "reverseWinding",
                    "return": "Path&",
                    "signatures": [
                        "",
                        "size_t subpath"
                    ],
                    "desc": "Reverse the winding direction (vertex order) of all subpaths, or of one subpath. Under drawFill's non-zero winding rule, reversing a subpath toggles it between filling and cutting — e.g. build a circle contour, then reverseWinding(i) it into a hole punch. Reversing ALL subpaths leaves the render unchanged (only relative direction matters) — handy for imported outlines using the opposite convention.",
                    "snippet": "reverseWinding(${1:1})"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the polyline (fill + 1px stroke based on current style — fill uses triangle fan, convex only). For concave shapes / holes use drawFill.",
                    "snippet": "draw()"
                },
                {
                    "name": "drawFill",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Fill the path as a concave polygon with holes (earcut tessellation). Subpaths follow the non-zero winding rule (SVG / PostScript default): a subpath wound opposite to its enclosing ring becomes a hole; same-direction subpaths union (never punch holes). Handles glyphs with holes (e, a, O, 日 ...), overlapping contours, and both TrueType / CFF winding conventions. To cut a hole in a hand-built Path, wind the inner subpath opposite (see reverseWinding).",
                    "snippet": "drawFill()"
                },
                {
                    "name": "drawStroke",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Thick stroke via StrokeMesh (respects strokeWeight / strokeCap / strokeJoin), per-subpath. Use draw() for 1-pixel lines.",
                    "snippet": "drawStroke()"
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
            "keywords": [],
            "desc_ja": "頂点・色・法線・インデックスを持つ3Dメッシュ",
            "desc_ko": "정점, 색상, 노멀, 인덱스를 가진 3D 메쉬",
            "examples": [
                {
                    "name": "meshAppendExample",
                    "group": "3d"
                },
                {
                    "name": "meshTextureExample",
                    "group": "3d"
                },
                {
                    "name": "3DPrimitivesExample",
                    "group": "3d"
                }
            ],
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
                },
                {
                    "name": "drawGpuPbr",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the mesh through the GPU PBR pipeline (uploads to GPU buffers as needed, then renders using active lights, material and environment)",
                    "snippet": "drawGpuPbr()"
                }
            ]
        },
        {
            "name": "Sound",
            "desc": "Audio playback",
            "keywords": [],
            "desc_ja": "オーディオ再生",
            "desc_ko": "오디오 재생",
            "examples": [
                {
                    "name": "chipSoundExample",
                    "group": "sound"
                },
                {
                    "name": "soundPlayerExample",
                    "group": "sound"
                }
            ],
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
                    "desc": "Load audio file. Format auto-detected by extension: .wav .mp3 .ogg .flac .aac .m4a",
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
            "keywords": [],
            "desc_ja": "テキストレンダリング用TrueTypeフォント",
            "desc_ko": "텍스트 렌더링용 트루타입 폰트",
            "examples": [
                {
                    "name": "fontWrapExample",
                    "group": "font"
                },
                {
                    "name": "fontTategakiExample",
                    "group": "font"
                },
                {
                    "name": "fontExample",
                    "group": "font"
                }
            ],
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
                    "name": "getGlyphPath",
                    "return": "Path",
                    "signatures": [
                        "uint32_t codepoint"
                    ],
                    "desc": "Vector outline of a single glyph as one Path with one subpath per contour. Em-normalized (1.0 = em), screen Y-down, baseline at y=0, pen at x=0. Use Path::drawFill() for filled rendering — holes (e, a, O, 日 ...) are auto-detected via earcut.",
                    "snippet": "getGlyphPath(${1:codepoint})"
                },
                {
                    "name": "getStringPath",
                    "return": "Path",
                    "signatures": [
                        "string text, float x, float y",
                        "string text, float x, float y, Direction h, Direction v"
                    ],
                    "desc": "Vector outline of the whole string at (x, y) as one Path containing every glyph's contours (one subpath each). Uses the same layout pipeline as drawString (writing mode, alignment, wrap, kinsoku, TCY). Logical pixels — drawStroke / drawFill / transform freely.",
                    "snippet": "getStringPath(${1:\"text\"}, ${2:x}, ${3:y})"
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
                },
                {
                    "name": "setWritingMode",
                    "return": "void",
                    "signatures": [
                        "WritingMode mode"
                    ],
                    "desc": "Switch between horizontal and vertical (tategaki) writing. Default is Horizontal (existing behavior unchanged).",
                    "snippet": "setWritingMode(${1:WritingMode::VerticalRL})"
                },
                {
                    "name": "getWritingMode",
                    "return": "WritingMode",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current writing mode",
                    "snippet": "getWritingMode()"
                },
                {
                    "name": "setTcyDigits",
                    "return": "void",
                    "signatures": [
                        "int maxDigits, TcyMode inMode, TcyMode overflowMode"
                    ],
                    "desc": "Tate-chu-yoko config for ASCII digit runs in vertical text. Runs with <= maxDigits use inMode (typically Combine — squeezed into one cell); longer runs fall back to overflowMode (typically Rotate).",
                    "snippet": "setTcyDigits(${1:2}, ${2:TcyMode::Combine}, ${3:TcyMode::Rotate})"
                },
                {
                    "name": "setTcyLatin",
                    "return": "void",
                    "signatures": [
                        "TcyMode mode"
                    ],
                    "desc": "Tate-chu-yoko mode for Latin letter runs in vertical text. Default is Rotate (whole run rotated 90 CW).",
                    "snippet": "setTcyLatin(${1:TcyMode::Rotate})"
                }
            ]
        },
        {
            "name": "FileWriter",
            "desc": "Streaming file writer with immediate flush",
            "keywords": [],
            "desc_ja": "即時フラッシュ付きストリーミングファイルライター",
            "desc_ko": "즉시 플러시되는 스트리밍 파일 라이터",
            "examples": [
                {
                    "name": "fileExample",
                    "group": "utils"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
            "keywords": [],
            "desc_ja": "大きなファイル用ストリーミングファイルリーダー",
            "desc_ko": "대용량 파일용 스트리밍 파일 리더",
            "examples": [
                {
                    "name": "fileExample",
                    "group": "utils"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
            "name": "ColorHSB",
            "desc": "HSB color space (H/S/B: 0-1)",
            "keywords": [],
            "desc_ja": "HSB色空間 (H/S/B: 0-1)",
            "desc_ko": "HSB 색공간 (H/S/B: 0-1)",
            "examples": [
                {
                    "name": "colorExample",
                    "group": "graphics"
                },
                {
                    "name": "mouseExample",
                    "group": "input_output"
                }
            ]
        },
        {
            "name": "ColorOKLCH",
            "desc": "Perceptually uniform OKLCH color",
            "keywords": [],
            "desc_ja": "知覚均一なOKLCHカラー",
            "desc_ko": "지각적 균일 OKLCH 색상",
            "examples": [
                {
                    "name": "colorExample",
                    "group": "graphics"
                }
            ]
        },
        {
            "name": "ChipSound",
            "desc": "Chip/synthesized sound generation",
            "keywords": [],
            "desc_ja": "チップ/合成サウンド生成",
            "desc_ko": "칩/합성 사운드 생성"
        },
        {
            "name": "Light",
            "desc": "Light source for 3D PBR rendering (directional, point, or spot)",
            "keywords": [],
            "desc_ja": "3D PBR用light（directional, point, spot）",
            "desc_ko": "3D PBR 렌더링용 광원 (평행광, 점광, 스포트라이트)",
            "examples": [
                {
                    "name": "pbrSpheresExample",
                    "group": "3d"
                },
                {
                    "name": "projectorSimulationExample",
                    "group": "3d"
                },
                {
                    "name": "normalMapExample",
                    "group": "3d"
                }
            ],
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
            "keywords": [],
            "desc_ja": "PBR material（metallic-roughness、glTF 2.0互換）",
            "desc_ko": "PBR 재질 (메탈릭-러프니스 워크플로우, glTF 2.0 호환)",
            "examples": [
                {
                    "name": "easyCamExample",
                    "group": "3d"
                },
                {
                    "name": "3DPrimitivesExample",
                    "group": "3d"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
            "keywords": [],
            "desc_ja": "IESNA LM-63配光profile（角度別の光強度分布）",
            "desc_ko": "IESNA LM-63 배광 프로파일 (각도별 조명 강도)",
            "examples": [
                {
                    "name": "projectorSimulationExample",
                    "group": "3d"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
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
            "keywords": [],
            "desc_ja": "PBR ambient用IBL environment map（irradiance + prefilter + BRDF LUT）",
            "desc_ko": "PBR 앰비언트용 IBL 환경맵 (이래디언스 + 프리필터 + BRDF LUT)",
            "examples": [
                {
                    "name": "pbrSpheresExample",
                    "group": "3d"
                },
                {
                    "name": "normalMapExample",
                    "group": "3d"
                },
                {
                    "name": "3DPrimitivesExample",
                    "group": "3d"
                }
            ],
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
            "name": "EasyCam",
            "desc": "3D camera with mouse control",
            "keywords": [],
            "desc_ja": "マウス操作対応3Dカメラ",
            "desc_ko": "마우스 조작 가능한 3D 카메라",
            "examples": [
                {
                    "name": "easyCamExample",
                    "group": "3d"
                },
                {
                    "name": "coordinateConversionExample",
                    "group": "3d"
                },
                {
                    "name": "fboMipmapExample",
                    "group": "3d"
                }
            ]
        },
        {
            "name": "Platform",
            "desc": "Compile-time OS detection. All methods are constexpr and resolve at compile time based on the target platform.",
            "keywords": [],
            "desc_ja": "コンパイル時のOS判定。全メソッドはconstexprで、ターゲットプラットフォームに応じてコンパイル時に解決される",
            "desc_ko": "컴파일 타임 OS 감지. 모든 메서드는 constexpr이며 대상 플랫폼에 따라 컴파일 타임에 결정됨",
            "examples": [
                {
                    "name": "platformInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "sokol_gfxのバックエンドを実行時に判定。値はsg_setup()完了後 (最初のsetup()以降) のみ有効",
            "desc_ko": "sokol_gfx 백엔드의 런타임 쿼리. 값은 sg_setup() 완료 후 (첫 setup() 이후) 에만 유효",
            "examples": [
                {
                    "name": "platformInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "trussc_app() がCMake configure 時にコンパイル定義として注入するビルド時刻情報。cmake 再実行で更新される。date/time系フィールドは configure マシンのローカル時刻、timestamp は UTC Unix秒",
            "desc_ko": "trussc_app()이 CMake 구성 시점에 컴파일 정의로 주입하는 빌드 타임스탬프. cmake 재구성 시 갱신됨. date/time 필드는 로컬 시간, timestamp는 UTC Unix 초",
            "examples": [
                {
                    "name": "platformInfoExample",
                    "group": "utils"
                }
            ],
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
        },
        {
            "name": "NetworkInterface",
            "desc": "One address entry of a network interface (returned by listNetworkInterfaces)",
            "keywords": [],
            "desc_ja": "ネットワークインターフェースの1アドレスエントリ（listNetworkInterfacesが返す）",
            "desc_ko": "네트워크 인터페이스의 주소 항목 하나 (listNetworkInterfaces가 반환)",
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
                    "desc": "Interface name",
                    "snippet": "getName()"
                },
                {
                    "name": "getAddress",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "IP address",
                    "snippet": "getAddress()"
                },
                {
                    "name": "getNetmask",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Subnet mask",
                    "snippet": "getNetmask()"
                },
                {
                    "name": "getMac",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "MAC address",
                    "snippet": "getMac()"
                },
                {
                    "name": "getIsIPv4",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the address is IPv4",
                    "snippet": "getIsIPv4()"
                },
                {
                    "name": "getIsLoopback",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether this is a loopback interface",
                    "snippet": "getIsLoopback()"
                },
                {
                    "name": "getIsUp",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the link is up",
                    "snippet": "getIsUp()"
                }
            ]
        },
        {
            "name": "UdpSocket",
            "desc": "UDP socket (send/receive datagrams, broadcast, multicast)",
            "keywords": [],
            "desc_ja": "UDPソケット（データグラム送受信・ブロードキャスト・マルチキャスト）",
            "desc_ko": "UDP 소켓 (데이터그램 송수신, 브로드캐스트, 멀티캐스트)",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "UdpSocket"
            },
            "properties": [
                {
                    "name": "onReceive",
                    "type": "Event<UdpReceiveEventArgs>",
                    "desc": "Fired when data is received"
                },
                {
                    "name": "onError",
                    "type": "Event<UdpErrorEventArgs>",
                    "desc": "Fired on error"
                }
            ],
            "methods": [
                {
                    "name": "create",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Create the socket explicitly (usually auto-created by bind/connect)",
                    "snippet": "create()"
                },
                {
                    "name": "bind",
                    "return": "bool",
                    "signatures": [
                        "int port, bool startReceiving = true"
                    ],
                    "desc": "Bind a port for receiving (startReceiving auto-starts the receive thread)",
                    "snippet": "bind(${1:port})"
                },
                {
                    "name": "connect",
                    "return": "bool",
                    "signatures": [
                        "const std::string& host, int port"
                    ],
                    "desc": "Set the destination for send()",
                    "snippet": "connect(${1:host}, ${2:port})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the socket",
                    "snippet": "close()"
                },
                {
                    "name": "sendTo",
                    "return": "bool",
                    "signatures": [
                        "const std::string& host, int port, const void* data, size_t size",
                        "const std::string& host, int port, const std::string& message"
                    ],
                    "desc": "Send data to a specific host and port",
                    "snippet": "sendTo(${1:host}, ${2:port}, ${3:message})"
                },
                {
                    "name": "send",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t size",
                        "const std::string& message"
                    ],
                    "desc": "Send to the destination set by connect()",
                    "snippet": "send(${1:message})"
                },
                {
                    "name": "receive",
                    "return": "int",
                    "signatures": [
                        "void* buffer, size_t bufferSize",
                        "void* buffer, size_t bufferSize, std::string& remoteHost, int& remotePort"
                    ],
                    "desc": "Blocking receive (for non-event use); returns byte count or -1",
                    "snippet": "receive(${1:buffer}, ${2:bufferSize})"
                },
                {
                    "name": "startReceiving",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Start the receive thread (auto-called after bind)",
                    "snippet": "startReceiving()"
                },
                {
                    "name": "stopReceiving",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop the receive thread",
                    "snippet": "stopReceiving()"
                },
                {
                    "name": "isReceiving",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the receive thread is active",
                    "snippet": "isReceiving()"
                },
                {
                    "name": "setNonBlocking",
                    "return": "bool",
                    "signatures": [
                        "bool nonBlocking"
                    ],
                    "desc": "Set non-blocking mode",
                    "snippet": "setNonBlocking(${1:nonBlocking})"
                },
                {
                    "name": "setBroadcast",
                    "return": "bool",
                    "signatures": [
                        "bool enable"
                    ],
                    "desc": "Allow broadcast sending",
                    "snippet": "setBroadcast(${1:enable})"
                },
                {
                    "name": "setReuseAddress",
                    "return": "bool",
                    "signatures": [
                        "bool enable"
                    ],
                    "desc": "Allow address reuse (set before bind)",
                    "snippet": "setReuseAddress(${1:enable})"
                },
                {
                    "name": "setReusePort",
                    "return": "bool",
                    "signatures": [
                        "bool enable"
                    ],
                    "desc": "Allow multiple sockets on the same port (multicast receivers; set before bind)",
                    "snippet": "setReusePort(${1:enable})"
                },
                {
                    "name": "setReceiveBufferSize",
                    "return": "bool",
                    "signatures": [
                        "int size"
                    ],
                    "desc": "Set the receive buffer size",
                    "snippet": "setReceiveBufferSize(${1:size})"
                },
                {
                    "name": "setSendBufferSize",
                    "return": "bool",
                    "signatures": [
                        "int size"
                    ],
                    "desc": "Set the send buffer size",
                    "snippet": "setSendBufferSize(${1:size})"
                },
                {
                    "name": "setReceiveTimeout",
                    "return": "bool",
                    "signatures": [
                        "int timeoutMs"
                    ],
                    "desc": "Set the receive timeout (0 = infinite)",
                    "snippet": "setReceiveTimeout(${1:timeoutMs})"
                },
                {
                    "name": "setUseThread",
                    "return": "void",
                    "signatures": [
                        "bool useThread"
                    ],
                    "desc": "Whether to use a receive thread (must be false on Wasm)",
                    "snippet": "setUseThread(${1:useThread})"
                },
                {
                    "name": "joinMulticastGroup",
                    "return": "bool",
                    "signatures": [
                        "const std::string& groupAddr, const std::string& interfaceAddr = \"\""
                    ],
                    "desc": "Join a multicast group for receiving (call after bind; \"\" = default route)",
                    "snippet": "joinMulticastGroup(${1:groupAddr})"
                },
                {
                    "name": "leaveMulticastGroup",
                    "return": "bool",
                    "signatures": [
                        "const std::string& groupAddr, const std::string& interfaceAddr = \"\""
                    ],
                    "desc": "Leave a previously joined multicast group",
                    "snippet": "leaveMulticastGroup(${1:groupAddr})"
                },
                {
                    "name": "setMulticastTTL",
                    "return": "bool",
                    "signatures": [
                        "int ttl"
                    ],
                    "desc": "Hop limit for outgoing multicast (default 1 = local subnet)",
                    "snippet": "setMulticastTTL(${1:ttl})"
                },
                {
                    "name": "setMulticastLoopback",
                    "return": "bool",
                    "signatures": [
                        "bool enable"
                    ],
                    "desc": "Whether outgoing multicast loops back to local listeners (default on)",
                    "snippet": "setMulticastLoopback(${1:enable})"
                },
                {
                    "name": "setMulticastInterface",
                    "return": "bool",
                    "signatures": [
                        "const std::string& interfaceAddr"
                    ],
                    "desc": "Pick the NIC for outgoing multicast (\"\" = default route)",
                    "snippet": "setMulticastInterface(${1:interfaceAddr})"
                },
                {
                    "name": "getLocalPort",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "The bound local port",
                    "snippet": "getLocalPort()"
                },
                {
                    "name": "isValid",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the socket is valid",
                    "snippet": "isValid()"
                },
                {
                    "name": "getConnectedHost",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Destination host from connect()",
                    "snippet": "getConnectedHost()"
                },
                {
                    "name": "getConnectedPort",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Destination port from connect()",
                    "snippet": "getConnectedPort()"
                }
            ]
        },
        {
            "name": "UdpReceiveEventArgs",
            "desc": "Event args for UdpSocket::onReceive",
            "keywords": [],
            "desc_ja": "UdpSocket::onReceiveのイベント引数",
            "desc_ko": "UdpSocket::onReceive의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "UdpSocket::onErrorのイベント引数",
            "desc_ko": "UdpSocket::onError의 이벤트 인자",
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
            "name": "TcpClient",
            "desc": "TCP client connection (connect, send/receive a stream)",
            "keywords": [],
            "desc_ja": "TCPクライアント接続（接続・ストリーム送受信）",
            "desc_ko": "TCP 클라이언트 연결 (연결, 스트림 송수신)",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "TcpClient"
            },
            "properties": [
                {
                    "name": "onConnect",
                    "type": "Event<TcpConnectEventArgs>",
                    "desc": "Fired when the connection completes"
                },
                {
                    "name": "onReceive",
                    "type": "Event<TcpReceiveEventArgs>",
                    "desc": "Fired when data is received"
                },
                {
                    "name": "onDisconnect",
                    "type": "Event<TcpDisconnectEventArgs>",
                    "desc": "Fired when disconnected"
                },
                {
                    "name": "onError",
                    "type": "Event<TcpErrorEventArgs>",
                    "desc": "Fired on error"
                }
            ],
            "methods": [
                {
                    "name": "connect",
                    "return": "bool",
                    "signatures": [
                        "const std::string& host, int port"
                    ],
                    "desc": "Connect to a server (blocking)",
                    "snippet": "connect(${1:host}, ${2:port})"
                },
                {
                    "name": "connectAsync",
                    "return": "void",
                    "signatures": [
                        "const std::string& host, int port"
                    ],
                    "desc": "Connect asynchronously (notifies via onConnect)",
                    "snippet": "connectAsync(${1:host}, ${2:port})"
                },
                {
                    "name": "disconnect",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disconnect",
                    "snippet": "disconnect()"
                },
                {
                    "name": "isConnected",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether currently connected",
                    "snippet": "isConnected()"
                },
                {
                    "name": "send",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t size",
                        "const std::vector<char>& data",
                        "const std::string& message"
                    ],
                    "desc": "Send data to the server",
                    "snippet": "send(${1:message})"
                },
                {
                    "name": "setReceiveBufferSize",
                    "return": "void",
                    "signatures": [
                        "size_t size"
                    ],
                    "desc": "Set the receive buffer size",
                    "snippet": "setReceiveBufferSize(${1:size})"
                },
                {
                    "name": "setBlocking",
                    "return": "void",
                    "signatures": [
                        "bool blocking"
                    ],
                    "desc": "Set blocking mode",
                    "snippet": "setBlocking(${1:blocking})"
                },
                {
                    "name": "setUseThread",
                    "return": "void",
                    "signatures": [
                        "bool useThread"
                    ],
                    "desc": "Whether to use threads (must be false on Wasm)",
                    "snippet": "setUseThread(${1:useThread})"
                },
                {
                    "name": "isUsingThread",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether threading is in use",
                    "snippet": "isUsingThread()"
                },
                {
                    "name": "getRemoteHost",
                    "return": "std::string",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remote host name",
                    "snippet": "getRemoteHost()"
                },
                {
                    "name": "getRemotePort",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remote port",
                    "snippet": "getRemotePort()"
                }
            ]
        },
        {
            "name": "TcpConnectEventArgs",
            "desc": "Event args for TcpClient::onConnect",
            "keywords": [],
            "desc_ja": "TcpClient::onConnectのイベント引数",
            "desc_ko": "TcpClient::onConnect의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "TcpClient::onReceiveのイベント引数",
            "desc_ko": "TcpClient::onReceive의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "TcpClient::onDisconnectのイベント引数",
            "desc_ko": "TcpClient::onDisconnect의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "TcpClient::onErrorのイベント引数",
            "desc_ko": "TcpClient::onError의 이벤트 인자",
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
            "name": "TcpServer",
            "desc": "TCP server (accept clients, send/broadcast)",
            "keywords": [],
            "desc_ja": "TCPサーバ（クライアント受け入れ・送信/ブロードキャスト）",
            "desc_ko": "TCP 서버 (클라이언트 수락, 전송/브로드캐스트)",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "TcpServer"
            },
            "properties": [
                {
                    "name": "onClientConnect",
                    "type": "Event<TcpClientConnectEventArgs>",
                    "desc": "Fired when a client connects"
                },
                {
                    "name": "onReceive",
                    "type": "Event<TcpServerReceiveEventArgs>",
                    "desc": "Fired when data is received from a client"
                },
                {
                    "name": "onClientDisconnect",
                    "type": "Event<TcpClientDisconnectEventArgs>",
                    "desc": "Fired when a client disconnects"
                },
                {
                    "name": "onError",
                    "type": "Event<TcpServerErrorEventArgs>",
                    "desc": "Fired on a server or per-client error"
                }
            ],
            "methods": [
                {
                    "name": "start",
                    "return": "bool",
                    "signatures": [
                        "int port, int maxClients = 10"
                    ],
                    "desc": "Start listening on a port",
                    "snippet": "start(${1:port})"
                },
                {
                    "name": "stop",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop the server",
                    "snippet": "stop()"
                },
                {
                    "name": "isRunning",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the server is running",
                    "snippet": "isRunning()"
                },
                {
                    "name": "disconnectClient",
                    "return": "void",
                    "signatures": [
                        "int clientId"
                    ],
                    "desc": "Disconnect a specific client",
                    "snippet": "disconnectClient(${1:clientId})"
                },
                {
                    "name": "disconnectAllClients",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disconnect all clients",
                    "snippet": "disconnectAllClients()"
                },
                {
                    "name": "getClientCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of connected clients",
                    "snippet": "getClientCount()"
                },
                {
                    "name": "getClientIds",
                    "return": "std::vector<int>",
                    "signatures": [
                        ""
                    ],
                    "desc": "IDs of all connected clients",
                    "snippet": "getClientIds()"
                },
                {
                    "name": "getClient",
                    "return": "const TcpServerClient*",
                    "signatures": [
                        "int clientId"
                    ],
                    "desc": "Client info (nullptr if not found)",
                    "snippet": "getClient(${1:clientId})"
                },
                {
                    "name": "send",
                    "return": "bool",
                    "signatures": [
                        "int clientId, const void* data, size_t size",
                        "int clientId, const std::vector<char>& data",
                        "int clientId, const std::string& message"
                    ],
                    "desc": "Send data to a specific client",
                    "snippet": "send(${1:clientId}, ${2:message})"
                },
                {
                    "name": "broadcast",
                    "return": "void",
                    "signatures": [
                        "const void* data, size_t size",
                        "const std::vector<char>& data",
                        "const std::string& message"
                    ],
                    "desc": "Broadcast data to all clients",
                    "snippet": "broadcast(${1:message})"
                },
                {
                    "name": "setReceiveBufferSize",
                    "return": "void",
                    "signatures": [
                        "size_t size"
                    ],
                    "desc": "Set the receive buffer size",
                    "snippet": "setReceiveBufferSize(${1:size})"
                },
                {
                    "name": "getPort",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "The listening port",
                    "snippet": "getPort()"
                }
            ]
        },
        {
            "name": "TcpServerClient",
            "desc": "A client connected to a TcpServer (read-only handle)",
            "keywords": [],
            "desc_ja": "TcpServerに接続したクライアント（読み取り専用ハンドル）",
            "desc_ko": "TcpServer에 연결된 클라이언트 (읽기 전용 핸들)",
            "methods": [
                {
                    "name": "getId",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Client ID assigned by the server",
                    "snippet": "getId()"
                },
                {
                    "name": "getHost",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Client IP address",
                    "snippet": "getHost()"
                },
                {
                    "name": "getPort",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Client port",
                    "snippet": "getPort()"
                }
            ]
        },
        {
            "name": "TcpClientConnectEventArgs",
            "desc": "Event args for TcpServer::onClientConnect",
            "keywords": [],
            "desc_ja": "TcpServer::onClientConnectのイベント引数",
            "desc_ko": "TcpServer::onClientConnect의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "TcpServer::onReceiveのイベント引数",
            "desc_ko": "TcpServer::onReceive의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "TcpServer::onClientDisconnectのイベント引数",
            "desc_ko": "TcpServer::onClientDisconnect의 이벤트 인자",
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
            "keywords": [],
            "desc_ja": "TcpServer::onErrorのイベント引数",
            "desc_ko": "TcpServer::onError의 이벤트 인자",
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
            "name": "Serial",
            "desc": "Cross-platform serial port (USB/COM): connect, read/write bytes",
            "keywords": [],
            "desc_ja": "クロスプラットフォームのシリアルポート（USB/COM）：接続・バイト読み書き",
            "desc_ko": "크로스플랫폼 시리얼 포트 (USB/COM): 연결, 바이트 읽기/쓰기",
            "examples": [
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Serial"
            },
            "methods": [
                {
                    "name": "setup",
                    "return": "bool",
                    "signatures": [
                        "const std::string& portName, int baudRate",
                        "int deviceIndex, int baudRate"
                    ],
                    "desc": "Connect to a port by path or by index from listDevices()",
                    "snippet": "setup(${1:portName}, ${2:baudRate})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Disconnect and release resources",
                    "snippet": "close()"
                },
                {
                    "name": "isInitialized",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether currently connected",
                    "snippet": "isInitialized()"
                },
                {
                    "name": "getDevicePath",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current device path",
                    "snippet": "getDevicePath()"
                },
                {
                    "name": "available",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of bytes available to read",
                    "snippet": "available()"
                },
                {
                    "name": "readBytes",
                    "return": "int",
                    "signatures": [
                        "void* buffer, int length",
                        "std::string& buffer, int length"
                    ],
                    "desc": "Read bytes; returns actual count (>=0) or -1 on error",
                    "snippet": "readBytes(${1:buffer}, ${2:length})"
                },
                {
                    "name": "readByte",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Read a single byte; 0-255 on success, -1 no data, -2 error",
                    "snippet": "readByte()"
                },
                {
                    "name": "writeBytes",
                    "return": "int",
                    "signatures": [
                        "const void* buffer, int length",
                        "const std::string& buffer"
                    ],
                    "desc": "Write bytes; returns actual count or -1 on error",
                    "snippet": "writeBytes(${1:buffer}, ${2:length})"
                },
                {
                    "name": "writeByte",
                    "return": "bool",
                    "signatures": [
                        "unsigned char byte"
                    ],
                    "desc": "Write a single byte; true on success",
                    "snippet": "writeByte(${1:byte})"
                },
                {
                    "name": "flushInput",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear the input buffer",
                    "snippet": "flushInput()"
                },
                {
                    "name": "flushOutput",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear the output buffer",
                    "snippet": "flushOutput()"
                },
                {
                    "name": "flush",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear both input and output buffers",
                    "snippet": "flush()"
                },
                {
                    "name": "drain",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Wait until output transmission completes",
                    "snippet": "drain()"
                }
            ],
            "static_methods": [
                {
                    "name": "listDevices",
                    "return": "std::vector<SerialDeviceInfo>",
                    "signatures": [
                        ""
                    ],
                    "desc": "List available serial devices",
                    "snippet": "Serial::listDevices()"
                },
                {
                    "name": "printDevices",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Log all available serial devices",
                    "snippet": "Serial::printDevices()"
                }
            ]
        },
        {
            "name": "SerialDeviceInfo",
            "desc": "Info for one serial device (from Serial::listDevices)",
            "keywords": [],
            "desc_ja": "1シリアルデバイスの情報（Serial::listDevicesが返す）",
            "desc_ko": "시리얼 장치 하나의 정보 (Serial::listDevices가 반환)",
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
                    "desc": "Device index",
                    "snippet": "getDeviceID()"
                },
                {
                    "name": "getDevicePath",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Device path",
                    "snippet": "getDevicePath()"
                },
                {
                    "name": "getDeviceName",
                    "return": "const std::string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Device name",
                    "snippet": "getDeviceName()"
                }
            ]
        },
        {
            "name": "SoundSource",
            "desc": "Abstract base for anything Sound::play() can consume. Two concrete subclasses: SoundBuffer (eager, full PCM in RAM) and SoundStream (decoded on demand from disk). Holds the shared channels / sampleRate fields and the kind() / getDuration() interface.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
                    "desc": "Source kind (Eager for SoundBuffer, Stream for SoundStream). Lets the mixer dispatch without a virtual call per frame.",
                    "snippet": "kind()"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Duration in seconds. numSamples/sampleRate for buffers; the decoded file's duration for streams.",
                    "snippet": "getDuration()"
                }
            ]
        },
        {
            "name": "SoundBuffer",
            "desc": "Eager sound source: the full file decoded into interleaved float PCM held in RAM. Derives from SoundSource (inherits channels / sampleRate / kind() / getDuration()). Also provides waveform generators, an ADSR envelope, and mixing helpers, so it doubles as a procedural-audio scratch buffer. Best for short SFX and zero-latency play / seek / multi-instance.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "SoundBuffer()"
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
                    "desc": "Decode a file into PCM, auto-detecting format from the extension (.wav .mp3 .ogg .flac .aac .m4a, case-insensitive). Returns false on failure.",
                    "snippet": "load(${1:path})"
                },
                {
                    "name": "loadWav",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode a WAV file into PCM.",
                    "snippet": "loadWav(${1:path})"
                },
                {
                    "name": "loadMp3",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode an MP3 file into PCM.",
                    "snippet": "loadMp3(${1:path})"
                },
                {
                    "name": "loadOgg",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode an OGG Vorbis file into PCM (via stb_vorbis).",
                    "snippet": "loadOgg(${1:path})"
                },
                {
                    "name": "loadFlac",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode a FLAC file into PCM.",
                    "snippet": "loadFlac(${1:path})"
                },
                {
                    "name": "loadAac",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Decode an AAC / M4A file into PCM (platform-specific; returns false on unsupported platforms).",
                    "snippet": "loadAac(${1:path})"
                },
                {
                    "name": "loadWavFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode WAV data from a memory buffer.",
                    "snippet": "loadWavFromMemory(${1:data}, ${2:dataSize})"
                },
                {
                    "name": "loadMp3FromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode MP3 data from a memory buffer.",
                    "snippet": "loadMp3FromMemory(${1:data}, ${2:dataSize})"
                },
                {
                    "name": "loadOggFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode OGG Vorbis data from a memory buffer.",
                    "snippet": "loadOggFromMemory(${1:data}, ${2:dataSize})"
                },
                {
                    "name": "loadFlacFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode FLAC data from a memory buffer.",
                    "snippet": "loadFlacFromMemory(${1:data}, ${2:dataSize})"
                },
                {
                    "name": "loadAacFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize"
                    ],
                    "desc": "Decode AAC data from a memory buffer (platform-specific; returns false on unsupported platforms).",
                    "snippet": "loadAacFromMemory(${1:data}, ${2:dataSize})"
                },
                {
                    "name": "loadPcmFromMemory",
                    "return": "bool",
                    "signatures": [
                        "const void* data, size_t dataSize, int numChannels, int rate, int bitsPerSample = 16, bool bigEndian = false"
                    ],
                    "desc": "Load raw interleaved PCM (16-bit signed or 32-bit float) from memory with explicit format. Returns false for unsupported bit depths.",
                    "snippet": "loadPcmFromMemory(${1:data}, ${2:dataSize}, ${3:numChannels}, ${4:rate})"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Duration in seconds (numSamples / sampleRate).",
                    "snippet": "getDuration()"
                },
                {
                    "name": "generateSineWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono sine wave of the given frequency (Hz) and duration (seconds).",
                    "snippet": "generateSineWave(${1:frequency}, ${2:duration})"
                },
                {
                    "name": "generateSquareWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono square wave.",
                    "snippet": "generateSquareWave(${1:frequency}, ${2:duration})"
                },
                {
                    "name": "generateTriangleWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono triangle wave.",
                    "snippet": "generateTriangleWave(${1:frequency}, ${2:duration})"
                },
                {
                    "name": "generateSawtoothWave",
                    "return": "void",
                    "signatures": [
                        "float frequency, float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with a mono sawtooth wave.",
                    "snippet": "generateSawtoothWave(${1:frequency}, ${2:duration})"
                },
                {
                    "name": "generateNoise",
                    "return": "void",
                    "signatures": [
                        "float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with mono white noise.",
                    "snippet": "generateNoise(${1:duration})"
                },
                {
                    "name": "generatePinkNoise",
                    "return": "void",
                    "signatures": [
                        "float duration, float volume = 0.5f, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with mono pink noise (1/f spectrum, Paul Kellet's method).",
                    "snippet": "generatePinkNoise(${1:duration})"
                },
                {
                    "name": "generateSilence",
                    "return": "void",
                    "signatures": [
                        "float duration, int sr = 44100"
                    ],
                    "desc": "Fill the buffer with silence of the given duration (useful as a base for mixFrom).",
                    "snippet": "generateSilence(${1:duration})"
                },
                {
                    "name": "applyADSR",
                    "return": "void",
                    "signatures": [
                        "float attack, float decay, float sustainLevel, float release"
                    ],
                    "desc": "Apply an ADSR amplitude envelope to the buffer in place (attack / decay / release in seconds, sustainLevel 0-1).",
                    "snippet": "applyADSR(${1:attack}, ${2:decay}, ${3:sustainLevel}, ${4:release})"
                },
                {
                    "name": "mixFrom",
                    "return": "void",
                    "signatures": [
                        "const SoundBuffer& other, size_t offsetSamples, float volume = 1.0f"
                    ],
                    "desc": "Additively mix another buffer into this one starting at offsetSamples, growing this buffer if needed.",
                    "snippet": "mixFrom(${1:other}, ${2:offsetSamples})"
                },
                {
                    "name": "clip",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Hard-clip all samples into the -1.0 .. 1.0 range.",
                    "snippet": "clip()"
                }
            ],
            "static_methods": [
                {
                    "name": "SoundBuffer_getAdtsSampleRateIndex",
                    "return": "int",
                    "signatures": [
                        "int sampleRate"
                    ],
                    "desc": "ADTS sample-rate index for the given rate (AAC-in-MOV container helper).",
                    "snippet": "SoundBuffer::getAdtsSampleRateIndex(${1:sampleRate})"
                },
                {
                    "name": "SoundBuffer_createAdtsHeader",
                    "return": "void",
                    "signatures": [
                        "uint8_t* header, int frameLength, int sampleRate, int channels, int profile = 2"
                    ],
                    "desc": "Write a 7-byte ADTS header for one raw AAC frame into header (AAC-in-MOV container helper).",
                    "snippet": "SoundBuffer::createAdtsHeader(${1:header}, ${2:frameLength}, ${3:sampleRate}, ${4:channels})"
                }
            ]
        },
        {
            "name": "SoundStream",
            "desc": "Streaming sound source: the file stays open and is decoded on demand into a small per-voice ring buffer instead of full PCM in RAM. Derives from SoundSource (inherits channels / sampleRate / kind() / getDuration()). Best for long files (BGM, podcasts). Trade-offs vs SoundBuffer: setSpeed() is treated as 1.0, setPosition() seeks with a ~10 ms refill, and each polyphony slot costs one open file handle + decoder + ring buffer.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "SoundStream()"
            },
            "methods": [
                {
                    "name": "loadStream",
                    "return": "bool",
                    "signatures": [
                        "const string& path, int maxPolyphony = 1"
                    ],
                    "desc": "Open the file, validate format (.wav .mp3 .flac .ogg), and populate channels / sampleRate / duration. maxPolyphony reserves that many concurrent decoder slots. Returns false if the file can't be opened or the format is unsupported.",
                    "snippet": "loadStream(${1:path})"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Decoded file duration in seconds.",
                    "snippet": "getDuration()"
                },
                {
                    "name": "getPath",
                    "return": "const string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Path the stream was opened from.",
                    "snippet": "getPath()"
                },
                {
                    "name": "getMaxPolyphony",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of concurrent decoder slots reserved at loadStream().",
                    "snippet": "getMaxPolyphony()"
                }
            ]
        },
        {
            "name": "AudioEngine",
            "desc": "Singleton miniaudio-based mixer engine. Owns the output device, mixes all playing Sound voices, exposes real-time audioOut / audioIn / audioDeviceChanged events, and an FFT analysis ring buffer. Access via AudioEngine::getInstance(); most apps drive it indirectly through the Sound class and the global initAudio() / shutdownAudio() helpers.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "audioDeviceExample",
                    "group": "sound"
                },
                {
                    "name": "audioSynthExample",
                    "group": "sound"
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
                    "desc": "Initialize the engine with defaults, or with an AudioSettings override. Re-init on a running engine migrates active voices to the new settings. Returns true on success.",
                    "snippet": "AudioEngine::getInstance().init()"
                },
                {
                    "name": "shutdown",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop and close the audio device.",
                    "snippet": "AudioEngine::getInstance().shutdown()"
                },
                {
                    "name": "getSampleRate",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current engine output sample rate (Hz). Returns the default (48000) before init().",
                    "snippet": "AudioEngine::getInstance().getSampleRate()"
                },
                {
                    "name": "getChannels",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current engine output channel count.",
                    "snippet": "AudioEngine::getInstance().getChannels()"
                },
                {
                    "name": "getMaxPolyphony",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Maximum number of simultaneously-playing Sound voices.",
                    "snippet": "AudioEngine::getInstance().getMaxPolyphony()"
                },
                {
                    "name": "getBufferSize",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Current device buffer size in frames (0 = miniaudio default).",
                    "snippet": "AudioEngine::getInstance().getBufferSize()"
                },
                {
                    "name": "isInitialized",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True after a successful init().",
                    "snippet": "AudioEngine::getInstance().isInitialized()"
                },
                {
                    "name": "getAnalysisBuffer",
                    "return": "size_t",
                    "signatures": [
                        "float* outBuffer, size_t numSamples"
                    ],
                    "desc": "Copy the latest mixed output samples (mono, L+R average) into outBuffer. numSamples is capped at 4096. Returns the number of samples written. (Global wrapper: getAudioAnalysisBuffer.)",
                    "snippet": "AudioEngine::getInstance().getAnalysisBuffer(${1:outBuffer}, ${2:numSamples})"
                }
            ],
            "static_methods": [
                {
                    "name": "AudioEngine_getInstance",
                    "return": "AudioEngine&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the global AudioEngine singleton.",
                    "snippet": "AudioEngine::getInstance()"
                },
                {
                    "name": "AudioEngine_listDevices",
                    "return": "vector<AudioDeviceInfo>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Enumerate available playback devices (name + isDefault). Empty if unsupported on the platform.",
                    "snippet": "AudioEngine::listDevices()"
                }
            ]
        },
        {
            "name": "MicInput",
            "desc": "Microphone capture (miniaudio). Opens an input device and exposes the latest samples through a ring buffer. Use the global getMicInput() to access the shared instance, then start() it; getMicAnalysisBuffer() is a convenience wrapper over getBuffer().",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "MicInput()"
            },
            "methods": [
                {
                    "name": "start",
                    "return": "bool",
                    "signatures": [
                        "int sampleRate = 44100"
                    ],
                    "desc": "Open the microphone device at the given sample rate and begin capturing. Returns false on failure.",
                    "snippet": "start()"
                },
                {
                    "name": "stop",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop capture and close the microphone device.",
                    "snippet": "stop()"
                },
                {
                    "name": "getBuffer",
                    "return": "size_t",
                    "signatures": [
                        "float* outBuffer, size_t numSamples"
                    ],
                    "desc": "Copy the latest captured samples into outBuffer. numSamples is capped at the ring buffer size (4096). Returns the number of samples written.",
                    "snippet": "getBuffer(${1:outBuffer}, ${2:numSamples})"
                },
                {
                    "name": "isRunning",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True while the microphone device is open and capturing.",
                    "snippet": "isRunning()"
                },
                {
                    "name": "getSampleRate",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Sample rate the microphone was opened at.",
                    "snippet": "getSampleRate()"
                }
            ]
        },
        {
            "name": "AudioSettings",
            "desc": "Configuration passed to AudioEngine::init() to override engine defaults (sample rate, channels, buffer size, polyphony, device). Empty deviceName selects the system default playback device.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "audioSynthExample",
                    "group": "sound"
                },
                {
                    "name": "audioDeviceExample",
                    "group": "sound"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "audioSynthExample",
                    "group": "sound"
                },
                {
                    "name": "audioDeviceExample",
                    "group": "sound"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "audioDeviceExample",
                    "group": "sound"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "audioSynthExample",
                    "group": "sound"
                },
                {
                    "name": "audioDeviceExample",
                    "group": "sound"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "name": "ChipSoundBundle",
            "desc": "A timeline of chiptune notes (ChipSoundNote + start time) that builds into a single mixed Sound. Add notes at times, then call build() to render the mix with ADSR and clipping applied.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "chipSoundExample",
                    "group": "sound"
                }
            ],
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "ChipSoundBundle()"
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
                    "return": "void",
                    "signatures": [
                        "const ChipSoundNote& note, float time",
                        "ChipSoundNote::Wave wave, float hz, float duration, float time, float vol = 0.5f"
                    ],
                    "desc": "Schedule a note to start at the given time (seconds). The second overload constructs the note inline from wave / frequency / duration.",
                    "snippet": "add(${1:note}, ${2:time})"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove all scheduled notes.",
                    "snippet": "clear()"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Total duration in seconds, auto-computed from the last note's end.",
                    "snippet": "getDuration()"
                },
                {
                    "name": "build",
                    "return": "Sound",
                    "signatures": [
                        ""
                    ],
                    "desc": "Render all scheduled notes into a single mixed, clipped Sound ready to play.",
                    "snippet": "build()"
                }
            ]
        },
        {
            "name": "Logger",
            "desc": "Logging core with console and file output and an onLog event; access the global instance via getLogger()",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "methods": [
                {
                    "name": "log",
                    "return": "void",
                    "signatures": [
                        "LogLevel level, const string& message"
                    ],
                    "desc": "Emit a log message at the given level",
                    "snippet": "log(${1:LogLevel::Notice}, ${2:message})"
                },
                {
                    "name": "setConsoleLogLevel",
                    "return": "void",
                    "signatures": [
                        "LogLevel level"
                    ],
                    "desc": "Set the minimum console log level",
                    "snippet": "setConsoleLogLevel(${1:LogLevel::Notice})"
                },
                {
                    "name": "getConsoleLogLevel",
                    "return": "LogLevel",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the current console log level",
                    "snippet": "getConsoleLogLevel()"
                },
                {
                    "name": "setLogFile",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Open a file to receive log output",
                    "snippet": "setLogFile(${1:path})"
                },
                {
                    "name": "closeFile",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the current log file",
                    "snippet": "closeFile()"
                },
                {
                    "name": "setFileLogLevel",
                    "return": "void",
                    "signatures": [
                        "LogLevel level"
                    ],
                    "desc": "Set the minimum file log level",
                    "snippet": "setFileLogLevel(${1:LogLevel::Notice})"
                },
                {
                    "name": "getFileLogLevel",
                    "return": "LogLevel",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the current file log level",
                    "snippet": "getFileLogLevel()"
                },
                {
                    "name": "getLogFilePath",
                    "return": "const string&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the path of the current log file",
                    "snippet": "getLogFilePath()"
                },
                {
                    "name": "isFileOpen",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Check whether a log file is currently open",
                    "snippet": "isFileOpen()"
                }
            ]
        },
        {
            "name": "CoreEvents",
            "desc": "Hub of all framework core events. Each member is an Event you subscribe to with .listen(callback); access the global instance via events()",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "methods": [
                {
                    "name": "listen",
                    "return": "EventListener",
                    "signatures": [
                        "Callback callback, int priority = EventPriority::App",
                        "Callback callback, Deliver deliver, int priority = EventPriority::App"
                    ],
                    "desc": "Register a listener callback and return an EventListener token; lower priority runs first, and Deliver::Main runs the callback on the main thread",
                    "snippet": "listen(${1:callback})"
                },
                {
                    "name": "notify",
                    "return": "void",
                    "signatures": [
                        "T& arg"
                    ],
                    "desc": "Fire the event, calling all listeners in priority order (no argument for Event<void>); stops early if a listener marks an input arg consumed",
                    "snippet": "notify(${1:arg})"
                },
                {
                    "name": "listenerCount",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of currently registered listeners",
                    "snippet": "listenerCount()"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove all listeners",
                    "snippet": "clear()"
                }
            ]
        },
        {
            "name": "EventListener",
            "desc": "RAII token returned by Event::listen(); the listener is automatically disconnected when this token is destroyed or reassigned. Move-only",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "eventsExample",
                    "group": "events"
                }
            ],
            "methods": [
                {
                    "name": "disconnect",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Explicitly disconnect the listener now (otherwise happens automatically on destruction)",
                    "snippet": "disconnect()"
                },
                {
                    "name": "isConnected",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "True while the listener is still connected to its event",
                    "snippet": "isConnected()"
                }
            ]
        },
        {
            "name": "KeyEventArgs",
            "desc": "Arguments for keyPressed / keyReleased events",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "eventsExample",
                    "group": "events"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "emptyExample",
                    "group": "templates"
                },
                {
                    "name": "platformInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "emptyExample",
                    "group": "templates"
                },
                {
                    "name": "platformInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "emptyExample",
                    "group": "templates"
                },
                {
                    "name": "platformInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "clipboardExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "systemInfoExample",
                    "group": "utils"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "fullscreenShaderExample",
                    "group": "graphics"
                }
            ],
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "FullscreenShader()"
            },
            "methods": [
                {
                    "name": "setParams",
                    "return": "void",
                    "signatures": [
                        "const T& params"
                    ],
                    "desc": "Set uniform parameter block (template; copies the struct bytes). Call before draw.",
                    "snippet": "setParams(${1:params})"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw a fullscreen quad with this shader applied",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Ray",
            "desc": "A ray with an origin and a normalized direction, used for unified hit testing and picking",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "desc": "Alias for nlohmann::json (using Json = nlohmann::json). Used as the in-memory JSON value type by loadJson, saveJson, parseJson and toJsonString. See the nlohmann/json documentation for its full API.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "jsonXmlExample",
                    "group": "input_output"
                }
            ]
        },
        {
            "name": "Xml",
            "desc": "XML document wrapper around pugixml. Loads, saves and queries XML; node-level access is via XmlNode returned from root() and child().",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "jsonXmlExample",
                    "group": "input_output"
                }
            ],
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Xml()"
            },
            "methods": [
                {
                    "name": "load",
                    "return": "bool",
                    "signatures": [
                        "const string& path"
                    ],
                    "desc": "Load an XML document from a file. Relative paths are resolved via getDataPath. Returns true on success.",
                    "snippet": "load(${1:path})"
                },
                {
                    "name": "parse",
                    "return": "bool",
                    "signatures": [
                        "const string& str"
                    ],
                    "desc": "Parse an XML document from a string. Returns true on success.",
                    "snippet": "parse(${1:str})"
                },
                {
                    "name": "save",
                    "return": "bool",
                    "signatures": [
                        "const string& path, const string& indent = \"  \""
                    ],
                    "desc": "Save the document to a file. Relative paths are resolved via getDataPath. indent sets the per-level indentation string. Returns true on success.",
                    "snippet": "save(${1:path})"
                },
                {
                    "name": "toString",
                    "return": "string",
                    "signatures": [
                        "const string& indent = \"  \""
                    ],
                    "desc": "Serialize the document to an XML string. indent sets the per-level indentation string.",
                    "snippet": "toString()"
                },
                {
                    "name": "root",
                    "return": "XmlNode",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the document's root element node.",
                    "snippet": "root()"
                },
                {
                    "name": "addRoot",
                    "return": "XmlNode",
                    "signatures": [
                        "const string& name"
                    ],
                    "desc": "Append a new root element with the given name and return it.",
                    "snippet": "addRoot(${1:name})"
                },
                {
                    "name": "child",
                    "return": "XmlNode",
                    "signatures": [
                        "const string& name"
                    ],
                    "desc": "Find a direct child node of the document by name.",
                    "snippet": "child(${1:name})"
                },
                {
                    "name": "document",
                    "return": "XmlDocument&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Access the underlying pugixml document for advanced operations.",
                    "snippet": "document()"
                },
                {
                    "name": "empty",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true if the document has no content.",
                    "snippet": "empty()"
                },
                {
                    "name": "addDeclaration",
                    "return": "void",
                    "signatures": [
                        "const string& version = \"1.0\", const string& encoding = \"UTF-8\""
                    ],
                    "desc": "Prepend an XML declaration (<?xml ...?>) with the given version and encoding.",
                    "snippet": "addDeclaration()"
                }
            ]
        },
        {
            "name": "XmlDocument",
            "desc": "Alias for pugi::xml_document. The owning XML document type underlying the Xml wrapper; see the pugixml documentation for its full API.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "XmlNode",
            "desc": "Alias for pugi::xml_node. A single element/node within an XML document, returned by Xml::root() and Xml::child(); see the pugixml documentation for node query and manipulation methods.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "XmlAttribute",
            "desc": "Alias for pugi::xml_attribute. A name/value attribute on an XmlNode; see the pugixml documentation for its API.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "XmlParseResult",
            "desc": "Alias for pugi::xml_parse_result. Result of an XML parse operation, carrying success status, error description and offset.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Mod",
            "desc": "Attachable behavior base class for Node. Subclass it, override the lifecycle and input hooks, and attach with node->addMod<T>(). Lifecycle: setup() on attach, then each frame earlyUpdate() -> Node::update() -> update() -> draw(), and onDestroy() on removal. Override isExclusive() to allow only one instance per Node, and canAttachTo() to restrict attachment.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "methods": [
                {
                    "name": "getOwner",
                    "return": "Node*",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the owner Node this Mod is attached to.",
                    "snippet": "getOwner()"
                },
                {
                    "name": "removeSelf",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove this Mod from its owner (no need to name its own type). Safe to call from inside the Mod's own update/draw/event handler; destruction is deferred until the current dispatch finishes. (protected)",
                    "snippet": "removeSelf()"
                },
                {
                    "name": "setup",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called once when the Mod is attached to the Node. (protected, virtual)",
                    "snippet": "setup()"
                },
                {
                    "name": "earlyUpdate",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called every frame BEFORE Node::update(). Use for applying transforms, tweens, physics. (protected, virtual)",
                    "snippet": "earlyUpdate()"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called every frame AFTER Node::update(). Use for reactions to node state changes. (protected, virtual)",
                    "snippet": "update()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called during the draw phase, after Node::draw(). (protected, virtual)",
                    "snippet": "draw()"
                },
                {
                    "name": "onDestroy",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: called when the Mod is removed or the Node is destroyed. (protected, virtual)",
                    "snippet": "onDestroy()"
                },
                {
                    "name": "onMousePress",
                    "return": "bool",
                    "signatures": [
                        "const MouseEventArgs& e"
                    ],
                    "desc": "Override: mouse press on the hit node. Return true to consume the event (counts as the node consuming it). (protected, virtual)",
                    "snippet": "onMousePress(${1:e})"
                },
                {
                    "name": "onMouseRelease",
                    "return": "bool",
                    "signatures": [
                        "const MouseEventArgs& e"
                    ],
                    "desc": "Override: mouse release on the hit node. Return true to consume. (protected, virtual)",
                    "snippet": "onMouseRelease(${1:e})"
                },
                {
                    "name": "onMouseMove",
                    "return": "bool",
                    "signatures": [
                        "const MouseMoveEventArgs& e"
                    ],
                    "desc": "Override: mouse move over the hit node. Return true to consume. (protected, virtual)",
                    "snippet": "onMouseMove(${1:e})"
                },
                {
                    "name": "onMouseDrag",
                    "return": "bool",
                    "signatures": [
                        "const MouseDragEventArgs& e"
                    ],
                    "desc": "Override: mouse drag on the hit node. Return true to consume. (protected, virtual)",
                    "snippet": "onMouseDrag(${1:e})"
                },
                {
                    "name": "onMouseScroll",
                    "return": "bool",
                    "signatures": [
                        "const ScrollEventArgs& e"
                    ],
                    "desc": "Override: mouse scroll over the hit node. Return true to consume. (protected, virtual)",
                    "snippet": "onMouseScroll(${1:e})"
                },
                {
                    "name": "onKeyPress",
                    "return": "bool",
                    "signatures": [
                        "const KeyEventArgs& e"
                    ],
                    "desc": "Override: key press (broadcast to mods on every node). Return true to consume. (protected, virtual)",
                    "snippet": "onKeyPress(${1:e})"
                },
                {
                    "name": "onKeyRelease",
                    "return": "bool",
                    "signatures": [
                        "const KeyEventArgs& e"
                    ],
                    "desc": "Override: key release (broadcast to mods on every node). Return true to consume. (protected, virtual)",
                    "snippet": "onKeyRelease(${1:e})"
                },
                {
                    "name": "onMouseEnter",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: pointer entered the owner node. (protected, virtual)",
                    "snippet": "onMouseEnter()"
                },
                {
                    "name": "onMouseLeave",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override: pointer left the owner node. (protected, virtual)",
                    "snippet": "onMouseLeave()"
                },
                {
                    "name": "hitTest",
                    "return": "bool",
                    "signatures": [
                        "const Ray& localRay, float& outDistance"
                    ],
                    "desc": "Override: screen-space pointer picking (NOT physics collision). Define a hit shape in the node's LOCAL space; if the node's own test OR any mod's returns true, the node is the hit. (protected, virtual)",
                    "snippet": "hitTest(${1:localRay}, ${2:outDistance})"
                },
                {
                    "name": "isExclusive",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override to return true if only one instance of this Mod type may be attached per Node (e.g. LayoutMod). Default false. (protected, virtual)",
                    "snippet": "isExclusive()"
                },
                {
                    "name": "canAttachTo",
                    "return": "bool",
                    "signatures": [
                        "Node* node"
                    ],
                    "desc": "Override to restrict which Node types this Mod can attach to. Return false to reject attachment. Default true. (protected, virtual)",
                    "snippet": "canAttachTo(${1:node})"
                }
            ]
        },
        {
            "name": "RectNodeButton",
            "desc": "Simple clickable button node (a RectNode subclass). Set normalColor/hoverColor/pressColor and label; it draws a filled rect that changes color on hover/press and a centered label. Events are enabled on construction. Listen on its inherited mousePressed/mouseReleased events for clicks.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "RectNodeButton()"
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
                    "desc": "Whether the button is currently pressed.",
                    "snippet": "isPressed()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the button: fills the rect with the state-dependent color and draws the centered label. (override)",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Thread",
            "desc": "Base class for background threads (ofThread compatible). Subclass it, override the protected pure-virtual threadedFunction() with a while (isThreadRunning()) { ... } loop, then control it with startThread()/stopThread()/waitForThread(). A protected mutex dataMutex_ is available for sharing data.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "Thread()"
            },
            "methods": [
                {
                    "name": "startThread",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Start the background thread (runs threadedFunction). No-op if already running.",
                    "snippet": "startThread()"
                },
                {
                    "name": "stopThread",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Send the stop signal: isThreadRunning() returns false inside threadedFunction so a while-loop can exit. Does not block.",
                    "snippet": "stopThread()"
                },
                {
                    "name": "waitForThread",
                    "return": "void",
                    "signatures": [
                        "bool callStopThread = true"
                    ],
                    "desc": "Wait (join) for the thread to finish. If callStopThread is true (default), calls stopThread() first.",
                    "snippet": "waitForThread()"
                },
                {
                    "name": "isThreadRunning",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the thread is currently running.",
                    "snippet": "isThreadRunning()"
                },
                {
                    "name": "getThreadId",
                    "return": "thread::id",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the underlying thread's ID.",
                    "snippet": "getThreadId()"
                },
                {
                    "name": "threadedFunction",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Override this with the work to run on the thread; recommended pattern is while (isThreadRunning()) { ... }. (protected, pure virtual)",
                    "snippet": "threadedFunction()"
                }
            ],
            "static_methods": [
                {
                    "name": "Thread_sleep",
                    "return": "void",
                    "signatures": [
                        "unsigned long milliseconds"
                    ],
                    "desc": "Pause the current thread for the given number of milliseconds.",
                    "snippet": "Thread::sleep(${1:milliseconds})"
                },
                {
                    "name": "Thread_yield",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Yield execution to other threads.",
                    "snippet": "Thread::yield()"
                },
                {
                    "name": "Thread_isCurrentThreadTheMainThread",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the current thread is the main thread. The main thread ID must be recorded first (call getMainThreadId() from the main thread).",
                    "snippet": "Thread::isCurrentThreadTheMainThread()"
                },
                {
                    "name": "Thread_getMainThreadId",
                    "return": "thread::id",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the main thread ID, recording the current thread's ID on the first call.",
                    "snippet": "Thread::getMainThreadId()"
                }
            ]
        },
        {
            "name": "ThreadChannel",
            "desc": "Thread-safe FIFO queue for one-way inter-thread communication (ofThreadChannel compatible), template<typename T>. Producer-Consumer pattern: a worker thread send()s values and another thread receive()s them. Use two channels for bidirectional communication.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "ThreadChannel<T>()"
            },
            "methods": [
                {
                    "name": "send",
                    "return": "bool",
                    "signatures": [
                        "const T& value",
                        "T&& value"
                    ],
                    "desc": "Send a value onto the queue (copy or move overload). Returns false if the channel is closed (with the move overload the value is invalidated even on failure).",
                    "snippet": "send(${1:value})"
                },
                {
                    "name": "receive",
                    "return": "bool",
                    "signatures": [
                        "T& value"
                    ],
                    "desc": "Receive a value (blocking): waits until data arrives, writing it into value. Returns false if the channel is closed.",
                    "snippet": "receive(${1:value})"
                },
                {
                    "name": "tryReceive",
                    "return": "bool",
                    "signatures": [
                        "T& value",
                        "T& value, int64_t timeoutMs"
                    ],
                    "desc": "Receive a value without blocking, or waiting at most timeoutMs milliseconds (timeout overload). Returns false immediately/after the timeout if no data.",
                    "snippet": "tryReceive(${1:value})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Close the channel, waking all waiting threads. After closing, send/receive return false.",
                    "snippet": "close()"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Clear the queue, discarding all pending values.",
                    "snippet": "clear()"
                },
                {
                    "name": "empty",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the queue is empty (approximate).",
                    "snippet": "empty()"
                },
                {
                    "name": "size",
                    "return": "size_t",
                    "signatures": [
                        ""
                    ],
                    "desc": "Number of queued values (approximate).",
                    "snippet": "size()"
                },
                {
                    "name": "isClosed",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Whether the channel has been closed.",
                    "snippet": "isClosed()"
                }
            ]
        },
        {
            "name": "HitResult",
            "desc": "Result of a node hit test (this is Node::HitResult). Returned by Node::findHitNode() / findHitNodeFromScreen(); call hit() to check whether anything was hit.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
                    "desc": "Whether a node was hit (node is non-null).",
                    "snippet": "hit()"
                }
            ]
        },
        {
            "name": "NodeWeakPtr",
            "desc": "Alias for weak_ptr<Node> (using NodeWeakPtr = weak_ptr<Node>). A non-owning weak reference to a Node; lock() it to obtain a NodePtr if the node still exists.",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Location",
            "desc": "GPS / WiFi location fix returned by getLocation()",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
                    "desc": "Set window size (chainable)",
                    "snippet": "setSize(${1:w}, ${2:h})"
                },
                {
                    "name": "setTitle",
                    "return": "WindowSettings&",
                    "signatures": [
                        "const string& t"
                    ],
                    "desc": "Set window title (chainable)",
                    "snippet": "setTitle(${1:title})"
                },
                {
                    "name": "setHighDpi",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "Enable/disable high DPI support (chainable)",
                    "snippet": "setHighDpi(${1:true})"
                },
                {
                    "name": "setPixelPerfect",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "Set pixel-perfect mode: true = framebuffer-size coords, false = logical-size coords (chainable)",
                    "snippet": "setPixelPerfect(${1:true})"
                },
                {
                    "name": "setSampleCount",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int count"
                    ],
                    "desc": "Set MSAA sample count (chainable)",
                    "snippet": "setSampleCount(${1:count})"
                },
                {
                    "name": "setFullscreen",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "Enable/disable fullscreen at startup (chainable)",
                    "snippet": "setFullscreen(${1:true})"
                },
                {
                    "name": "setDecorated",
                    "return": "WindowSettings&",
                    "signatures": [
                        "bool enabled"
                    ],
                    "desc": "false = borderless/chromeless window that can still take focus and be closed programmatically (chainable)",
                    "snippet": "setDecorated(${1:true})"
                },
                {
                    "name": "setClipboardSize",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int size"
                    ],
                    "desc": "Set clipboard buffer size in bytes (chainable)",
                    "snippet": "setClipboardSize(${1:size})"
                },
                {
                    "name": "setSwapInterval",
                    "return": "WindowSettings&",
                    "signatures": [
                        "int interval"
                    ],
                    "desc": "Set VSync present interval: 1 = on, 0 = off, N = every Nth refresh (chainable)",
                    "snippet": "setSwapInterval(${1:interval})"
                }
            ]
        },
        {
            "name": "HeadlessSettings",
            "desc": "Settings for runHeadlessApp() (no window / graphics). Currently just the target update rate",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
                    "desc": "Set the target update rate (chainable)",
                    "snippet": "setFps(${1:fps})"
                }
            ]
        },
        {
            "name": "FileDialogResult",
            "desc": "Result of a load/save file dialog",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "fileDialogExample",
                    "group": "input_output"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    "",
                    "float x, float y, float z, float w",
                    "float v",
                    "const Vec3& v, float w = 1.0f",
                    "const Vec2& v, float z = 0.0f, float w = 1.0f"
                ],
                "snippet": "Vec4(${1:x}, ${2:y}, ${3:z}, ${4:w})"
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
                    "desc": "Set all components (chainable)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z}, ${4:w})"
                },
                {
                    "name": "length",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the vector's magnitude",
                    "snippet": "length()"
                },
                {
                    "name": "lengthSquared",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the squared magnitude (cheaper than length())",
                    "snippet": "lengthSquared()"
                },
                {
                    "name": "normalized",
                    "return": "Vec4",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return a unit-length copy of this vector",
                    "snippet": "normalized()"
                },
                {
                    "name": "normalize",
                    "return": "Vec4&",
                    "signatures": [
                        ""
                    ],
                    "desc": "Normalize this vector in place (chainable)",
                    "snippet": "normalize()"
                },
                {
                    "name": "dot",
                    "return": "float",
                    "signatures": [
                        "const Vec4& v"
                    ],
                    "desc": "Dot product with another vector",
                    "snippet": "dot(${1:v})"
                },
                {
                    "name": "lerp",
                    "return": "Vec4",
                    "signatures": [
                        "const Vec4& v, float t"
                    ],
                    "desc": "Linearly interpolate toward v by t (0..1)",
                    "snippet": "lerp(${1:v}, ${2:t})"
                },
                {
                    "name": "xy",
                    "return": "Vec2",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the (x, y) components as a Vec2",
                    "snippet": "xy()"
                },
                {
                    "name": "xyz",
                    "return": "Vec3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Get the (x, y, z) components as a Vec3",
                    "snippet": "xyz()"
                }
            ]
        },
        {
            "name": "Mat3",
            "desc": "3x3 matrix for 2D affine / homography transforms (row-major). Includes static factories and a homography solver",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "constructor": {
                "signatures": [
                    "",
                    "float m00, float m01, float m02, float m10, float m11, float m12, float m20, float m21, float m22"
                ],
                "snippet": "Mat3()"
            },
            "methods": [
                {
                    "name": "at",
                    "return": "float&",
                    "signatures": [
                        "int row, int col"
                    ],
                    "desc": "Access the element at (row, col)",
                    "snippet": "at(${1:row}, ${2:col})"
                },
                {
                    "name": "transposed",
                    "return": "Mat3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the transpose of this matrix",
                    "snippet": "transposed()"
                },
                {
                    "name": "determinant",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Compute the determinant",
                    "snippet": "determinant()"
                },
                {
                    "name": "inverted",
                    "return": "Mat3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the inverse matrix (identity if singular)",
                    "snippet": "inverted()"
                }
            ],
            "static_methods": [
                {
                    "name": "Mat3_identity",
                    "return": "Mat3",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the identity matrix",
                    "snippet": "Mat3::identity()"
                },
                {
                    "name": "Mat3_translate",
                    "return": "Mat3",
                    "signatures": [
                        "float tx, float ty",
                        "const Vec2& t"
                    ],
                    "desc": "Build a 2D translation matrix",
                    "snippet": "Mat3::translate(${1:tx}, ${2:ty})"
                },
                {
                    "name": "Mat3_rotate",
                    "return": "Mat3",
                    "signatures": [
                        "float radians"
                    ],
                    "desc": "Build a 2D rotation matrix (radians)",
                    "snippet": "Mat3::rotate(${1:radians})"
                },
                {
                    "name": "Mat3_scale",
                    "return": "Mat3",
                    "signatures": [
                        "float sx, float sy",
                        "float s",
                        "const Vec2& s"
                    ],
                    "desc": "Build a 2D scale matrix",
                    "snippet": "Mat3::scale(${1:sx}, ${2:sy})"
                },
                {
                    "name": "Mat3_getHomography",
                    "return": "Mat3",
                    "signatures": [
                        "const Vec2 src[4], const Vec2 dst[4]"
                    ],
                    "desc": "Compute the homography matrix mapping 4 source points to 4 destination points (solves H * src = dst)",
                    "snippet": "Mat3::getHomography(${1:src}, ${2:dst})"
                }
            ]
        },
        {
            "name": "VideoGrabber",
            "desc": "Webcam capture source. Call setup() once, then update() every frame; getTexture() (via HasTexture) gives the live frame. Move-only. Camera permission is requested automatically on macOS",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "videoGrabberExample",
                    "group": "video"
                }
            ],
            "constructor": {
                "signatures": [
                    ""
                ],
                "snippet": "VideoGrabber()"
            },
            "methods": [
                {
                    "name": "listDevices",
                    "return": "vector<VideoDeviceInfo>",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the list of available camera devices",
                    "snippet": "listDevices()"
                },
                {
                    "name": "setDeviceID",
                    "return": "void",
                    "signatures": [
                        "int deviceId"
                    ],
                    "desc": "Select which camera to use; call before setup()",
                    "snippet": "setDeviceID(${1:deviceId})"
                },
                {
                    "name": "getDeviceID",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the selected device ID",
                    "snippet": "getDeviceID()"
                },
                {
                    "name": "setDesiredFrameRate",
                    "return": "void",
                    "signatures": [
                        "int fps"
                    ],
                    "desc": "Request a capture frame rate; call before setup()",
                    "snippet": "setDesiredFrameRate(${1:fps})"
                },
                {
                    "name": "getDesiredFrameRate",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the requested frame rate (-1 if unspecified)",
                    "snippet": "getDesiredFrameRate()"
                },
                {
                    "name": "setVerbose",
                    "return": "void",
                    "signatures": [
                        "bool verbose"
                    ],
                    "desc": "Enable or disable verbose logging",
                    "snippet": "setVerbose(${1:verbose})"
                },
                {
                    "name": "isVerbose",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return whether verbose logging is enabled",
                    "snippet": "isVerbose()"
                },
                {
                    "name": "setup",
                    "return": "bool",
                    "signatures": [
                        "int width = 640, int height = 480"
                    ],
                    "desc": "Start the camera at the requested size. Returns false if permission is not yet granted (it is requested asynchronously); keep calling update() and capture begins once granted",
                    "snippet": "setup(${1:width}, ${2:height})"
                },
                {
                    "name": "close",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop the camera and release its resources",
                    "snippet": "close()"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Poll for a new frame and upload it to the texture. Call every frame; also completes a setup() that was waiting on permission",
                    "snippet": "update()"
                },
                {
                    "name": "isFrameNew",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true if a new frame arrived during the most recent update()",
                    "snippet": "isFrameNew()"
                },
                {
                    "name": "isInitialized",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true once the camera is set up and capturing",
                    "snippet": "isInitialized()"
                },
                {
                    "name": "isPendingPermission",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true while waiting for camera permission to be granted",
                    "snippet": "isPendingPermission()"
                },
                {
                    "name": "getWidth",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the captured frame width in pixels",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the captured frame height in pixels",
                    "snippet": "getHeight()"
                },
                {
                    "name": "getDeviceName",
                    "return": "const string &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the name of the active capture device",
                    "snippet": "getDeviceName()"
                },
                {
                    "name": "getPixels",
                    "return": "unsigned char *",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return a pointer to the current RGBA pixel buffer",
                    "snippet": "getPixels()"
                },
                {
                    "name": "copyToImage",
                    "return": "void",
                    "signatures": [
                        "Image &image"
                    ],
                    "desc": "Copy the current frame into an Image (allocating/updating it as needed)",
                    "snippet": "copyToImage(${1:image})"
                },
                {
                    "name": "getTexture",
                    "return": "Texture &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the texture holding the live camera frame (HasTexture override)",
                    "snippet": "getTexture()"
                }
            ],
            "static_methods": [
                {
                    "name": "VideoGrabber_checkCameraPermission",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return whether camera access has been granted (macOS 10.14+)",
                    "snippet": "VideoGrabber::checkCameraPermission()"
                },
                {
                    "name": "VideoGrabber_requestCameraPermission",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Request camera access asynchronously (macOS)",
                    "snippet": "VideoGrabber::requestCameraPermission()"
                }
            ]
        },
        {
            "name": "Tween",
            "desc": "Animates a value of type T with easing. Templated over any lerp-able type (float, Vec2, Vec3, Vec4, Color, etc.). Auto-updates each frame via events().update once start() is called; chainable setters configure it",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "tweenExample",
                    "group": "animation"
                },
                {
                    "name": "AllFeaturesExample",
                    "group": "tests"
                }
            ],
            "constructor": {
                "signatures": [
                    "",
                    "T start, T end, float duration, EaseType type = EaseType::Cubic, EaseMode mode = EaseMode::InOut"
                ],
                "snippet": "Tween<${1:T}>(${2:start}, ${3:end}, ${4:duration})"
            },
            "methods": [
                {
                    "name": "from",
                    "return": "Tween &",
                    "signatures": [
                        "T value"
                    ],
                    "desc": "Set the start value (chainable)",
                    "snippet": "from(${1:value})"
                },
                {
                    "name": "to",
                    "return": "Tween &",
                    "signatures": [
                        "T value"
                    ],
                    "desc": "Set the end value (chainable)",
                    "snippet": "to(${1:value})"
                },
                {
                    "name": "duration",
                    "return": "Tween &",
                    "signatures": [
                        "float seconds"
                    ],
                    "desc": "Set the animation duration in seconds (chainable)",
                    "snippet": "duration(${1:seconds})"
                },
                {
                    "name": "ease",
                    "return": "Tween &",
                    "signatures": [
                        "EaseType type, EaseMode mode = EaseMode::InOut",
                        "EaseType inType, EaseType outType"
                    ],
                    "desc": "Set the easing curve; the two-type overload uses an asymmetric ease (one curve in, another out)",
                    "snippet": "ease(${1:type})"
                },
                {
                    "name": "loop",
                    "return": "Tween &",
                    "signatures": [
                        "int count = -1"
                    ],
                    "desc": "Repeat the animation: -1 = infinite, 0 = no loop, N = repeat N times (chainable)",
                    "snippet": "loop(${1:count})"
                },
                {
                    "name": "yoyo",
                    "return": "Tween &",
                    "signatures": [
                        "bool enable = true"
                    ],
                    "desc": "Reverse direction on each loop iteration (chainable)",
                    "snippet": "yoyo(${1:enable})"
                },
                {
                    "name": "delay",
                    "return": "Tween &",
                    "signatures": [
                        "float seconds"
                    ],
                    "desc": "Delay before the animation starts, in seconds (chainable)",
                    "snippet": "delay(${1:seconds})"
                },
                {
                    "name": "start",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Start (or restart) the animation and begin auto-updating each frame",
                    "snippet": "start()"
                },
                {
                    "name": "pause",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Pause the animation, keeping its current progress",
                    "snippet": "pause()"
                },
                {
                    "name": "resume",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Resume a paused animation",
                    "snippet": "resume()"
                },
                {
                    "name": "reset",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Stop the animation and reset progress to the start",
                    "snippet": "reset()"
                },
                {
                    "name": "finish",
                    "return": "Tween &",
                    "signatures": [
                        ""
                    ],
                    "desc": "Jump immediately to the end value and fire the complete event",
                    "snippet": "finish()"
                },
                {
                    "name": "getValue",
                    "return": "T",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the current eased value",
                    "snippet": "getValue()"
                },
                {
                    "name": "getProgress",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return normalized progress through the current iteration (0.0-1.0)",
                    "snippet": "getProgress()"
                },
                {
                    "name": "getElapsed",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return elapsed time in seconds within the current iteration",
                    "snippet": "getElapsed()"
                },
                {
                    "name": "getDuration",
                    "return": "float",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the configured duration in seconds",
                    "snippet": "getDuration()"
                },
                {
                    "name": "isPlaying",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true while the animation is actively playing",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "isComplete",
                    "return": "bool",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return true once the animation (all loops) has finished",
                    "snippet": "isComplete()"
                },
                {
                    "name": "getStart",
                    "return": "T",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the start value",
                    "snippet": "getStart()"
                },
                {
                    "name": "getEnd",
                    "return": "T",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return the end value",
                    "snippet": "getEnd()"
                },
                {
                    "name": "getLoopCount",
                    "return": "int",
                    "signatures": [
                        ""
                    ],
                    "desc": "Return how many loop iterations have completed so far",
                    "snippet": "getLoopCount()"
                }
            ]
        },
        {
            "name": "VideoDeviceInfo",
            "desc": "Information about an available camera device, returned by VideoGrabber::listDevices()",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "bitmapStringExtendedExample",
                    "group": "font"
                }
            ],
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
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
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
            "desc": "Alias for function<void(const Font::PlacedGlyph&)> (nested as Font::GlyphVisitor). The per-glyph callback type accepted by Font::forEachGlyph",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "StrokeMesh",
            "desc": "Variable-width polyline stroke geometry with caps, joins and miter limit; build it from points or a Path, then update() and draw()",
            "keywords": [],
            "desc_ja": "",
            "desc_ko": "",
            "examples": [
                {
                    "name": "strokeMeshExample",
                    "group": "graphics"
                }
            ],
            "constructor": {
                "signatures": [
                    "",
                    "const Path& polyline"
                ],
                "snippet": "StrokeMesh()"
            },
            "methods": [
                {
                    "name": "setWidth",
                    "return": "void",
                    "signatures": [
                        "float width"
                    ],
                    "desc": "Set the stroke width",
                    "snippet": "setWidth(${1:5.0})"
                },
                {
                    "name": "setColor",
                    "return": "void",
                    "signatures": [
                        "const Color& color"
                    ],
                    "desc": "Set the stroke color",
                    "snippet": "setColor(${1:color})"
                },
                {
                    "name": "setCapType",
                    "return": "void",
                    "signatures": [
                        "CapType type"
                    ],
                    "desc": "Set the line cap shape (StrokeMesh::CapType: Butt, Round, Square)",
                    "snippet": "setCapType(${1:StrokeMesh::CapType::Round})"
                },
                {
                    "name": "setJoinType",
                    "return": "void",
                    "signatures": [
                        "JoinType type"
                    ],
                    "desc": "Set the line join shape (StrokeMesh::JoinType: Miter, Round, Bevel)",
                    "snippet": "setJoinType(${1:StrokeMesh::JoinType::Round})"
                },
                {
                    "name": "setMiterLimit",
                    "return": "void",
                    "signatures": [
                        "float limit"
                    ],
                    "desc": "Set the miter limit for sharp corners",
                    "snippet": "setMiterLimit(${1:10.0})"
                },
                {
                    "name": "addVertex",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float z = 0",
                        "const Vec2& p",
                        "const Vec3& p"
                    ],
                    "desc": "Append a vertex to the stroke path",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertexWithWidth",
                    "return": "void",
                    "signatures": [
                        "float x, float y, float width",
                        "const Vec3& p, float width"
                    ],
                    "desc": "Append a vertex with a per-vertex width",
                    "snippet": "addVertexWithWidth(${1:x}, ${2:y}, ${3:width})"
                },
                {
                    "name": "setWidths",
                    "return": "void",
                    "signatures": [
                        "const vector<float>& w"
                    ],
                    "desc": "Set per-vertex widths from a list",
                    "snippet": "setWidths(${1:widths})"
                },
                {
                    "name": "setShape",
                    "return": "void",
                    "signatures": [
                        "const Path& polyline"
                    ],
                    "desc": "Set the stroke shape from a Path",
                    "snippet": "setShape(${1:path})"
                },
                {
                    "name": "setClosed",
                    "return": "void",
                    "signatures": [
                        "bool closed"
                    ],
                    "desc": "Set whether the stroke forms a closed loop",
                    "snippet": "setClosed(${1:true})"
                },
                {
                    "name": "clear",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Remove all vertices",
                    "snippet": "clear()"
                },
                {
                    "name": "update",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Rebuild the internal triangle mesh (call before draw after edits)",
                    "snippet": "update()"
                },
                {
                    "name": "draw",
                    "return": "void",
                    "signatures": [
                        ""
                    ],
                    "desc": "Draw the stroke mesh",
                    "snippet": "draw()"
                }
            ]
        }
    ],
    "enums": [
        {
            "name": "BlendMode",
            "desc": "",
            "values": [
                {
                    "name": "Alpha",
                    "value": 0,
                    "desc": "Normal alpha blending (default)"
                },
                {
                    "name": "Add",
                    "value": 1,
                    "desc": "Additive blending"
                },
                {
                    "name": "Multiply",
                    "value": 2,
                    "desc": "Multiply blending"
                },
                {
                    "name": "Screen",
                    "value": 3,
                    "desc": "Screen blending"
                },
                {
                    "name": "Subtract",
                    "value": 4,
                    "desc": "Subtractive blending"
                },
                {
                    "name": "Disabled",
                    "value": 5,
                    "desc": "No blending (overwrite)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "TextureFilter",
            "desc": "",
            "values": [
                {
                    "name": "Nearest",
                    "value": 0,
                    "desc": "Nearest neighbor (for pixel art)"
                },
                {
                    "name": "Linear",
                    "value": 1,
                    "desc": "Bilinear interpolation (default)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "TextureWrap",
            "desc": "",
            "values": [
                {
                    "name": "Repeat",
                    "value": 0,
                    "desc": "Repeat"
                },
                {
                    "name": "ClampToEdge",
                    "value": 1,
                    "desc": "Clamp to edge pixel (default)"
                },
                {
                    "name": "MirroredRepeat",
                    "value": 2,
                    "desc": "Mirrored repeat"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Cursor",
            "desc": "",
            "values": [
                {
                    "name": "Default",
                    "value": 0,
                    "desc": "System default cursor"
                },
                {
                    "name": "Arrow",
                    "value": 1,
                    "desc": "Arrow cursor"
                },
                {
                    "name": "IBeam",
                    "value": 2,
                    "desc": "Text input cursor"
                },
                {
                    "name": "Crosshair",
                    "value": 3,
                    "desc": "Crosshair cursor"
                },
                {
                    "name": "Hand",
                    "value": 4,
                    "desc": "Pointing hand cursor"
                },
                {
                    "name": "ResizeEW",
                    "value": 5,
                    "desc": "East-west resize cursor"
                },
                {
                    "name": "ResizeNS",
                    "value": 6,
                    "desc": "North-south resize cursor"
                },
                {
                    "name": "ResizeNWSE",
                    "value": 7,
                    "desc": "NW-SE diagonal resize cursor"
                },
                {
                    "name": "ResizeNESW",
                    "value": 8,
                    "desc": "NE-SW diagonal resize cursor"
                },
                {
                    "name": "ResizeAll",
                    "value": 9,
                    "desc": "Move/resize all directions cursor"
                },
                {
                    "name": "NotAllowed",
                    "value": 10,
                    "desc": "Not allowed cursor"
                },
                {
                    "name": "Custom0",
                    "value": 11,
                    "desc": "Custom cursor slot 0 (bind image first)"
                },
                {
                    "name": "Custom1",
                    "value": 12,
                    "desc": "Custom cursor slot 1"
                },
                {
                    "name": "Custom2",
                    "value": 13,
                    "desc": "Custom cursor slot 2"
                },
                {
                    "name": "Custom3",
                    "value": 14,
                    "desc": "Custom cursor slot 3"
                },
                {
                    "name": "Custom4",
                    "value": 15
                },
                {
                    "name": "Custom5",
                    "value": 16
                },
                {
                    "name": "Custom6",
                    "value": 17
                },
                {
                    "name": "Custom7",
                    "value": 18
                },
                {
                    "name": "Custom8",
                    "value": 19
                },
                {
                    "name": "Custom9",
                    "value": 20
                },
                {
                    "name": "Custom10",
                    "value": 21
                },
                {
                    "name": "Custom11",
                    "value": 22
                },
                {
                    "name": "Custom12",
                    "value": 23
                },
                {
                    "name": "Custom13",
                    "value": 24
                },
                {
                    "name": "Custom14",
                    "value": 25
                },
                {
                    "name": "Custom15",
                    "value": 26
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Modifier",
            "desc": "",
            "values": [
                {
                    "name": "None",
                    "value": 0
                },
                {
                    "name": "Shift",
                    "value": 1
                },
                {
                    "name": "Ctrl",
                    "value": 2
                },
                {
                    "name": "Alt",
                    "value": 3
                },
                {
                    "name": "Super",
                    "value": 4
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "LightType",
            "desc": "",
            "values": [
                {
                    "name": "Directional",
                    "value": 0,
                    "desc": "Parallel light (sunlight)"
                },
                {
                    "name": "Point",
                    "value": 1,
                    "desc": "Point light"
                },
                {
                    "name": "Spot",
                    "value": 2,
                    "desc": "Spot light (point + cone)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "EaseType",
            "desc": "",
            "values": [
                {
                    "name": "Linear",
                    "value": 0,
                    "desc": "No easing"
                },
                {
                    "name": "Quad",
                    "value": 1,
                    "desc": "Quadratic (t^2)"
                },
                {
                    "name": "Cubic",
                    "value": 2,
                    "desc": "Cubic (t^3)"
                },
                {
                    "name": "Quart",
                    "value": 3,
                    "desc": "Quartic (t^4)"
                },
                {
                    "name": "Quint",
                    "value": 4,
                    "desc": "Quintic (t^5)"
                },
                {
                    "name": "Sine",
                    "value": 5,
                    "desc": "Sinusoidal"
                },
                {
                    "name": "Expo",
                    "value": 6,
                    "desc": "Exponential"
                },
                {
                    "name": "Circ",
                    "value": 7,
                    "desc": "Circular"
                },
                {
                    "name": "Back",
                    "value": 8,
                    "desc": "Overshoot"
                },
                {
                    "name": "Elastic",
                    "value": 9,
                    "desc": "Elastic spring"
                },
                {
                    "name": "Bounce",
                    "value": 10,
                    "desc": "Bouncing"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "EaseMode",
            "desc": "",
            "values": [
                {
                    "name": "In",
                    "value": 0,
                    "desc": "Accelerate"
                },
                {
                    "name": "Out",
                    "value": 1,
                    "desc": "Decelerate"
                },
                {
                    "name": "InOut",
                    "value": 2,
                    "desc": "Accelerate then decelerate"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Deliver",
            "desc": "",
            "values": [
                {
                    "name": "Inline",
                    "value": 0
                },
                {
                    "name": "Main",
                    "value": 1
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "MouseButton",
            "desc": "",
            "values": [
                {
                    "name": "Left",
                    "value": 0,
                    "desc": "SAPP_MOUSEBUTTON_LEFT"
                },
                {
                    "name": "Right",
                    "value": 1,
                    "desc": "SAPP_MOUSEBUTTON_RIGHT"
                },
                {
                    "name": "Middle",
                    "value": 2,
                    "desc": "SAPP_MOUSEBUTTON_MIDDLE"
                },
                {
                    "name": "None",
                    "value": 256,
                    "desc": "SAPP_MOUSEBUTTON_INVALID (no button; e.g. during a plain move)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "TextureFormat",
            "desc": "",
            "values": [
                {
                    "name": "RGBA8",
                    "value": 0,
                    "desc": "4ch, 8-bit/ch (default)"
                },
                {
                    "name": "RGBA16F",
                    "value": 1,
                    "desc": "4ch, 16-bit float/ch"
                },
                {
                    "name": "RGBA32F",
                    "value": 2,
                    "desc": "4ch, 32-bit float/ch"
                },
                {
                    "name": "R8",
                    "value": 3,
                    "desc": "1ch, 8-bit"
                },
                {
                    "name": "R16F",
                    "value": 4,
                    "desc": "1ch, 16-bit float"
                },
                {
                    "name": "R32F",
                    "value": 5,
                    "desc": "1ch, 32-bit float"
                },
                {
                    "name": "RG8",
                    "value": 6,
                    "desc": "2ch, 8-bit/ch"
                },
                {
                    "name": "RG16F",
                    "value": 7,
                    "desc": "2ch, 16-bit float/ch"
                },
                {
                    "name": "RG32F",
                    "value": 8,
                    "desc": "2ch, 32-bit float/ch"
                },
                {
                    "name": "BGRA8",
                    "value": 9,
                    "desc": "4ch, 8-bit/ch, B-G-R-A byte order (swapchain / Syphon / video interop)"
                },
                {
                    "name": "RGBA16",
                    "value": 10,
                    "desc": "4ch, 16-bit unorm/ch (high-precision integer; texture-sharing interop)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "TextureUsage",
            "desc": "",
            "values": [
                {
                    "name": "Immutable",
                    "value": 0,
                    "desc": "Set once, cannot update (for Image::load)"
                },
                {
                    "name": "Dynamic",
                    "value": 1,
                    "desc": "Update periodically from CPU (for Image::allocate)"
                },
                {
                    "name": "Stream",
                    "value": 2,
                    "desc": "Update every frame (for VideoGrabber)"
                },
                {
                    "name": "RenderTarget",
                    "value": 3,
                    "desc": "For FBO color attachment"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "WritingMode",
            "desc": "",
            "values": [
                {
                    "name": "Horizontal",
                    "value": 0,
                    "desc": "Left-to-right horizontal text (default)"
                },
                {
                    "name": "VerticalRL",
                    "value": 1,
                    "desc": "Top-to-bottom columns, columns flow right-to-left (Japanese tategaki)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "ImageType",
            "desc": "",
            "values": [
                {
                    "name": "Color",
                    "value": 0,
                    "desc": "RGBA"
                },
                {
                    "name": "Grayscale",
                    "value": 1,
                    "desc": "Grayscale"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "PrimitiveMode",
            "desc": "",
            "values": [
                {
                    "name": "Triangles",
                    "value": 0
                },
                {
                    "name": "TriangleStrip",
                    "value": 1
                },
                {
                    "name": "TriangleFan",
                    "value": 2
                },
                {
                    "name": "Lines",
                    "value": 3
                },
                {
                    "name": "LineStrip",
                    "value": 4
                },
                {
                    "name": "LineLoop",
                    "value": 5
                },
                {
                    "name": "Points",
                    "value": 6
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "PixelFormat",
            "desc": "",
            "values": [
                {
                    "name": "U8",
                    "value": 0
                },
                {
                    "name": "F32",
                    "value": 1
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "StrokeCap",
            "desc": "",
            "values": [
                {
                    "name": "Butt",
                    "value": 0,
                    "desc": "Flat line cap (no extension)"
                },
                {
                    "name": "Round",
                    "value": 1,
                    "desc": "Rounded line cap"
                },
                {
                    "name": "Square",
                    "value": 2,
                    "desc": "Square line cap (extends by half stroke width)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "StrokeJoin",
            "desc": "",
            "values": [
                {
                    "name": "Miter",
                    "value": 0,
                    "desc": "Sharp corner join"
                },
                {
                    "name": "Round",
                    "value": 1,
                    "desc": "Rounded corner join"
                },
                {
                    "name": "Bevel",
                    "value": 2,
                    "desc": "Beveled corner join"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "PrimitiveType",
            "desc": "",
            "values": [
                {
                    "name": "Points",
                    "value": 0
                },
                {
                    "name": "Lines",
                    "value": 1
                },
                {
                    "name": "LineStrip",
                    "value": 2
                },
                {
                    "name": "Triangles",
                    "value": 3
                },
                {
                    "name": "TriangleStrip",
                    "value": 4
                },
                {
                    "name": "Quads",
                    "value": 5
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "WindowType",
            "desc": "",
            "values": [
                {
                    "name": "Rect",
                    "value": 0,
                    "desc": "Rectangular window (no window)"
                },
                {
                    "name": "Hanning",
                    "value": 1,
                    "desc": "Hanning window"
                },
                {
                    "name": "Hamming",
                    "value": 2,
                    "desc": "Hamming window"
                },
                {
                    "name": "Blackman",
                    "value": 3,
                    "desc": "Blackman window"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Wave",
            "desc": "",
            "values": [
                {
                    "name": "Sin",
                    "value": 0,
                    "desc": "Sine wave (smooth, pure tone)"
                },
                {
                    "name": "Square",
                    "value": 1,
                    "desc": "Square wave (harsh, 8-bit style)"
                },
                {
                    "name": "Triangle",
                    "value": 2,
                    "desc": "Triangle wave (softer than square)"
                },
                {
                    "name": "Sawtooth",
                    "value": 3,
                    "desc": "Sawtooth wave (bright, buzzy)"
                },
                {
                    "name": "Noise",
                    "value": 4,
                    "desc": "White noise"
                },
                {
                    "name": "PinkNoise",
                    "value": 5,
                    "desc": "Pink noise (1/f noise, more natural)"
                },
                {
                    "name": "Silent",
                    "value": 6,
                    "desc": "Silent (no sound)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "MixMode",
            "desc": "",
            "values": [
                {
                    "name": "Auto",
                    "value": 0
                },
                {
                    "name": "DownmixMono",
                    "value": 1
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Direction",
            "desc": "",
            "values": [
                {
                    "name": "Left",
                    "value": 0
                },
                {
                    "name": "Center",
                    "value": 1
                },
                {
                    "name": "Right",
                    "value": 2
                },
                {
                    "name": "Top",
                    "value": 3
                },
                {
                    "name": "Bottom",
                    "value": 4
                },
                {
                    "name": "Baseline",
                    "value": 5,
                    "desc": "Text-specific: character baseline"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "LayoutDirection",
            "desc": "",
            "values": [
                {
                    "name": "Vertical",
                    "value": 0,
                    "desc": "VStack: top to bottom"
                },
                {
                    "name": "Horizontal",
                    "value": 1,
                    "desc": "HStack: left to right"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "AxisMode",
            "desc": "",
            "values": [
                {
                    "name": "None",
                    "value": 0,
                    "desc": "Don't change size (default)"
                },
                {
                    "name": "Fill",
                    "value": 1,
                    "desc": "Stretch children to fill parent"
                },
                {
                    "name": "Content",
                    "value": 2,
                    "desc": "Resize parent to fit children"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Codec",
            "desc": "",
            "values": [
                {
                    "name": "None",
                    "value": 0,
                    "desc": "store verbatim (identity copy) - the \"no compression\" option"
                },
                {
                    "name": "LZ4",
                    "value": 1,
                    "desc": "LZ4 block compression (fast, lossless)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "LogLevel",
            "desc": "",
            "values": [
                {
                    "name": "Verbose",
                    "value": 0,
                    "desc": "Detailed info (for debugging)"
                },
                {
                    "name": "Notice",
                    "value": 1,
                    "desc": "Normal info"
                },
                {
                    "name": "Warning",
                    "value": 2,
                    "desc": "Warning"
                },
                {
                    "name": "Error",
                    "value": 3,
                    "desc": "Error"
                },
                {
                    "name": "Fatal",
                    "value": 4,
                    "desc": "Fatal error"
                },
                {
                    "name": "Silent",
                    "value": 5,
                    "desc": "No output (for filtering)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Beep",
            "desc": "",
            "values": [
                {
                    "name": "ping",
                    "value": 0,
                    "desc": "Single beep (default)"
                },
                {
                    "name": "success",
                    "value": 1,
                    "desc": "Two-tone rising (pico)"
                },
                {
                    "name": "complete",
                    "value": 2,
                    "desc": "Task completion fanfare"
                },
                {
                    "name": "coin",
                    "value": 3,
                    "desc": "Game item pickup (sparkly)"
                },
                {
                    "name": "error",
                    "value": 4,
                    "desc": "Low buzz (boo)"
                },
                {
                    "name": "warning",
                    "value": 5,
                    "desc": "Attention (two short beeps)"
                },
                {
                    "name": "cancel",
                    "value": 6,
                    "desc": "Cancel/back"
                },
                {
                    "name": "click",
                    "value": 7,
                    "desc": "UI selection click"
                },
                {
                    "name": "typing",
                    "value": 8,
                    "desc": "Key input feedback"
                },
                {
                    "name": "notify",
                    "value": 9,
                    "desc": "Two-tone notification"
                },
                {
                    "name": "sweep",
                    "value": 10,
                    "desc": "Screen transition whoosh"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "VideoCodec",
            "desc": "",
            "values": [
                {
                    "name": "H264",
                    "value": 0,
                    "desc": "H.264 / AVC — broad compatibility (default)"
                },
                {
                    "name": "HEVC",
                    "value": 1,
                    "desc": "H.265 / HEVC — smaller files, hardware-encoded"
                },
                {
                    "name": "ProRes422",
                    "value": 2,
                    "desc": "Apple ProRes 422 — editing-grade, macOS/iOS only (.mov)"
                },
                {
                    "name": "ProRes4444",
                    "value": 3,
                    "desc": "Apple ProRes 4444 — highest quality + alpha, macOS/iOS only (.mov)"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "Source",
            "desc": "",
            "values": [
                {
                    "name": "None",
                    "value": 0
                },
                {
                    "name": "Swapchain",
                    "value": 1
                },
                {
                    "name": "Fbo",
                    "value": 2
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "ThermalState",
            "desc": "",
            "values": [
                {
                    "name": "Nominal",
                    "value": 0,
                    "desc": "Normal operation"
                },
                {
                    "name": "Fair",
                    "value": 1,
                    "desc": "Slightly elevated, performance may be reduced"
                },
                {
                    "name": "Serious",
                    "value": 2,
                    "desc": "High temperature, should reduce workload"
                },
                {
                    "name": "Critical",
                    "value": 3,
                    "desc": "Thermal throttling active, risk of shutdown"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        },
        {
            "name": "TcyMode",
            "desc": "Tate-chu-yoko: how Latin / digit runs are laid out within vertical text",
            "values": [
                {
                    "name": "Rotate",
                    "value": 0,
                    "desc": "Rotate the whole Latin / digit run 90 degrees CW so it reads top-to-bottom"
                },
                {
                    "name": "Upright",
                    "value": 1,
                    "desc": "Each glyph upright, one per CJK-sized cell (一文字ずつ正立)"
                },
                {
                    "name": "Combine",
                    "value": 2,
                    "desc": "Squeeze a Latin / digit run into a single CJK cell (true 縦中横)"
                }
            ],
            "desc_ja": "縦中横: 縦書き内の Latin / 数字の連続の配置方法",
            "desc_ko": ""
        },
        {
            "name": "KinsokuLevel",
            "desc": "Line-breaking (kinsoku) strictness for vertical / Japanese text",
            "values": [
                {
                    "name": "Off",
                    "value": 0,
                    "desc": "No line-break prohibition rules"
                },
                {
                    "name": "PunctuationOnly",
                    "value": 1,
                    "desc": "Only punctuation kinsoku rules"
                },
                {
                    "name": "Standard",
                    "value": 2,
                    "desc": "Standard kinsoku rules"
                }
            ],
            "desc_ja": "縦書き / 日本語の禁則処理レベル",
            "desc_ko": ""
        },
        {
            "name": "Orientation",
            "desc": "Screen orientation mask passed to setOrientation (iOS/Android); values are bit flags and can be combined with |",
            "values": [
                {
                    "name": "Portrait",
                    "value": 2,
                    "desc": "Portrait, home button at bottom"
                },
                {
                    "name": "PortraitUpsideDown",
                    "value": 4,
                    "desc": "Portrait, home button at top"
                },
                {
                    "name": "LandscapeLeft",
                    "value": 16,
                    "desc": "Landscape, home button on the left"
                },
                {
                    "name": "LandscapeRight",
                    "value": 8,
                    "desc": "Landscape, home button on the right"
                },
                {
                    "name": "Landscape",
                    "value": 24,
                    "desc": "Either landscape orientation"
                },
                {
                    "name": "All",
                    "value": 30,
                    "desc": "All four orientations"
                },
                {
                    "name": "AllButUpsideDown",
                    "value": 26,
                    "desc": "All orientations except portrait-upside-down"
                }
            ],
            "desc_ja": "",
            "desc_ko": ""
        }
    ],
    "macros": [
        {
            "name": "TC_RUN_APP",
            "signature": "TC_RUN_APP(AppClass, settings)",
            "desc": "Application entry-point macro. Expands to main() and runs AppClass. Required to enable hot reload.",
            "desc_ja": "アプリのエントリポイントマクロ。main() を展開し AppClass を実行する。ホットリロードを使うには必須。",
            "desc_ko": ""
        },
        {
            "name": "TC_HOT_RELOAD",
            "signature": "TC_HOT_RELOAD(AppClass)",
            "desc": "Opt the app into hot reload. Place in the app's .cpp; triggers a CMake reconfigure on next build.",
            "desc_ja": "アプリをホットリロード対応にする。アプリの .cpp に置く。次回ビルドで CMake が再構成される。",
            "desc_ko": ""
        },
        {
            "name": "TC_REFLECT",
            "signature": "TC_REFLECT(Self, ...Bases) { TC_VALUE(...) ... }",
            "desc": "Declare reflected members inside a class (exposed to the inspector, serialization, and MCP). Bases are the direct base classes.",
            "desc_ja": "クラス内で反映メンバーを宣言する（インスペクタ・シリアライズ・MCP に公開）。Bases は直接の基底クラス。",
            "desc_ko": ""
        },
        {
            "name": "TC_REFLECT_ROOT",
            "signature": "TC_REFLECT_ROOT(Self) { TC_VALUE(...) ... }",
            "desc": "Like TC_REFLECT but for a root type with no reflected base classes.",
            "desc_ja": "TC_REFLECT と同じだが、反映する基底クラスを持たないルート型向け。",
            "desc_ko": ""
        },
        {
            "name": "TC_REFLECT_FREE",
            "signature": "TC_REFLECT_FREE(Type) { TC_VALUE(...) ... }",
            "desc": "Reflect a non-member / external type at namespace scope (for types you can't add TC_REFLECT inside).",
            "desc_ja": "メンバー外・外部の型を名前空間スコープで反映する（TC_REFLECT をクラス内に書けない型向け）。",
            "desc_ko": ""
        },
        {
            "name": "TC_VALUE",
            "signature": "TC_VALUE(member) | TC_VALUE(name, getter) | TC_VALUE(name, getter, setter)",
            "desc": "Declare one reflected member inside a TC_REFLECT body. 1 arg = in-place, 2 = read-only, 3 = getter/setter.",
            "desc_ja": "TC_REFLECT 本体内で反映メンバーを1つ宣言する。引数1=直接、2=読み取り専用、3=getter/setter。",
            "desc_ko": ""
        },
        {
            "name": "TC_ENUM_LABELS",
            "signature": "TC_ENUM_LABELS(EnumType, \"Label0\", \"Label1\", ...)",
            "desc": "Declare string labels for an enum (labels[(int)value] == name), used by the inspector and serialization.",
            "desc_ja": "enum の文字列ラベルを宣言する（labels[(int)value] == name）。インスペクタやシリアライズで使われる。",
            "desc_ko": ""
        }
    ]
};

// Export for different environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TrussCAPI;
}

// TrussC API Definition
// Complete C++ API reference (all functions, types, constants)
//
// AUTO-GENERATED from api-definition.yaml
// Do not edit directly - edit api-definition.yaml instead

const TrussCAPI = {
    "version": "v0.5.2",
    "categories": [
        {
            "name": "Lifecycle",
            "name_ja": "ライフサイクル",
            "name_ko": "라이프사이클",
            "functions": [
                {
                    "name": "setup",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called once at start",
                    "desc_ja": "開始時に一度呼ばれる",
                    "desc_ko": "시작 시 한 번 호출됨",
                    "snippet": "void setup() {\n\t$0\n}"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame before draw",
                    "desc_ja": "毎フレーム、drawの前に呼ばれる",
                    "desc_ko": "매 프레임 draw 이전에 호출됨",
                    "snippet": "void update() {\n\t$0\n}"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called every frame after update",
                    "desc_ja": "毎フレーム、updateの後に呼ばれる",
                    "desc_ko": "매 프레임 update 이후에 호출됨",
                    "snippet": "void draw() {\n\t$0\n}"
                },
                {
                    "name": "cleanup",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Called once before exit (optional user callback for cleanup)",
                    "desc_ja": "終了前に一度呼ばれる（オプショナルなクリーンアップコールバック）",
                    "desc_ko": "종료 직전 한 번 호출됨 (선택적 정리용 콜백)",
                    "snippet": "void cleanup() {\n\t$0\n}"
                },
                {
                    "name": "runApp",
                    "params": "settings",
                    "params_typed": "const WindowSettings& settings = WindowSettings()",
                    "return_type": "int",
                    "desc": "Start the application main loop. Called from main()",
                    "desc_ja": "アプリケーションのメインループを開始。main()から呼ぶ",
                    "desc_ko": "어플리케이션 메인 루프 시작. main()에서 호출",
                    "snippet": "runApp(${1:settings})"
                }
            ]
        },
        {
            "name": "Events",
            "name_ja": "イベント",
            "name_ko": "이벤트",
            "functions": [
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button pressed",
                    "desc_ja": "マウスボタンが押された",
                    "desc_ko": "마우스 버튼이 눌렸을 때",
                    "snippet": "void mousePressed(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse button released",
                    "desc_ja": "マウスボタンが離された",
                    "desc_ko": "마우스 버튼이 떼졌을 때",
                    "snippet": "void mouseReleased(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "mouseMoved",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Mouse moved",
                    "desc_ja": "マウスが移動した",
                    "desc_ko": "마우스가 움직였을 때",
                    "snippet": "void mouseMoved(float x, float y) {\n\t$0\n}"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "float x, float y, int button",
                    "return_type": "void",
                    "desc": "Mouse dragged",
                    "desc_ja": "マウスがドラッグされた",
                    "desc_ko": "마우스가 드래그되었을 때",
                    "snippet": "void mouseDragged(float x, float y, int button) {\n\t$0\n}"
                },
                {
                    "name": "keyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key pressed. Use KEY_* constants for special keys, or uppercase char literals for printable keys (e.g. key == 'A', key == '1')",
                    "desc_ja": "キーが押された。特殊キーはKEY_*定数、印字可能キーは大文字リテラル（例: key == 'A', key == '1'）で比較",
                    "desc_ko": "키가 눌렸을 때. 특수 키는 KEY_* 상수, 출력 가능한 키는 대문자 리터럴(예: key == 'A', key == '1')로 비교",
                    "snippet": "void keyPressed(int key) {\n\t$0\n}"
                },
                {
                    "name": "keyReleased",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "void",
                    "desc": "Key released",
                    "desc_ja": "キーが離された",
                    "desc_ko": "키가 떼졌을 때",
                    "snippet": "void keyReleased(int key) {\n\t$0\n}"
                },
                {
                    "name": "windowResized",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Window resized",
                    "desc_ja": "ウィンドウがリサイズされた",
                    "desc_ko": "윈도우 크기가 변경되었을 때",
                    "snippet": "void windowResized(int width, int height) {\n\t$0\n}"
                }
            ]
        },
        {
            "name": "Graphics - Color",
            "name_ja": "グラフィックス - 色",
            "name_ko": "그래픽 - 색상",
            "functions": [
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "desc_ja": "画面をクリア。引数なし = 透明黒 (0,0,0,0)",
                    "desc_ko": "화면을 지움. 인자 없음 = 투명한 검정 (0,0,0,0)",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "desc_ja": "画面をクリア。引数なし = 透明黒 (0,0,0,0)",
                    "desc_ko": "화면을 지움. 인자 없음 = 투명한 검정 (0,0,0,0)",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "clear",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Clear screen. No args = transparent black (0,0,0,0)",
                    "desc_ja": "画面をクリア。引数なし = 透明黒 (0,0,0,0)",
                    "desc_ko": "화면을 지움. 인자 없음 = 투명한 검정 (0,0,0,0)",
                    "snippet": "clear(${1:0.0})"
                },
                {
                    "name": "setColor",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "desc_ja": "描画色を設定 (0.0-1.0)",
                    "desc_ko": "그리기 색상을 설정 (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "desc_ja": "描画色を設定 (0.0-1.0)",
                    "desc_ko": "그리기 색상을 설정 (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Set drawing color (0.0-1.0)",
                    "desc_ja": "描画色を設定 (0.0-1.0)",
                    "desc_ko": "그리기 색상을 설정 (0.0-1.0)",
                    "snippet": "setColor(${1:1.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "void",
                    "desc": "Set color from HSB (H: 0-1)",
                    "desc_ja": "HSBで色を設定 (H: 0-1)",
                    "desc_ko": "HSB로 색상을 설정 (H: 0-1)",
                    "snippet": "setColorHSB(${1:0.0}, ${2:1.0}, ${3:1.0})"
                },
                {
                    "name": "setColorOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "void",
                    "desc": "Set color from OKLCH",
                    "desc_ja": "OKLCHで色を設定",
                    "desc_ko": "OKLCH로 색상을 설정",
                    "snippet": "setColorOKLCH(${1:0.7}, ${2:0.15}, ${3:0.0})"
                },
                {
                    "name": "setColorOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "void",
                    "desc": "Set color from OKLab",
                    "desc_ja": "OKLabで色を設定",
                    "desc_ko": "OKLab으로 색상을 설정",
                    "snippet": "setColorOKLab(${1:0.7}, ${2:0.0}, ${3:0.0})"
                }
            ]
        },
        {
            "name": "Graphics - Shapes",
            "name_ja": "グラフィックス - 図形",
            "name_ko": "그래픽 - 도형",
            "functions": [
                {
                    "name": "drawRect",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "desc_ja": "矩形を描画",
                    "desc_ko": "사각형 그리기",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRect",
                    "params": "pos, w, h",
                    "params_typed": "Vec3 pos, float w, float h",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "desc_ja": "矩形を描画",
                    "desc_ko": "사각형 그리기",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRect",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, Vec2 size",
                    "return_type": "void",
                    "desc": "Draw rectangle",
                    "desc_ja": "矩形を描画",
                    "desc_ko": "사각형 그리기",
                    "snippet": "drawRect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawRectRounded",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)",
                    "desc_ja": "角丸矩形を描画（円弧コーナー）",
                    "desc_ko": "둥근 모서리 사각형 그리기 (원호 모서리)",
                    "snippet": "drawRectRounded(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawRectRounded",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw rounded rectangle (circular arc corners)",
                    "desc_ja": "角丸矩形を描画（円弧コーナー）",
                    "desc_ko": "둥근 모서리 사각형 그리기 (원호 모서리)",
                    "snippet": "drawRectRounded(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawRectSquircle",
                    "params": "x, y, w, h, radius",
                    "params_typed": "float x, float y, float w, float h, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)",
                    "desc_ja": "スクワークル矩形を描画（曲率連続コーナー、iOS風）",
                    "desc_ko": "스쿼클 사각형 그리기 (곡률 연속 모서리, iOS 스타일)",
                    "snippet": "drawRectSquircle(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawRectSquircle",
                    "params": "pos, size, radius",
                    "params_typed": "Vec3 pos, Vec2 size, float radius",
                    "return_type": "void",
                    "desc": "Draw squircle rectangle (curvature-continuous corners, iOS-style)",
                    "desc_ja": "スクワークル矩形を描画（曲率連続コーナー、iOS風）",
                    "desc_ko": "스쿼클 사각형 그리기 (곡률 연속 모서리, iOS 스타일)",
                    "snippet": "drawRectSquircle(${1:x}, ${2:y}, ${3:w}, ${4:h}, ${5:radius})"
                },
                {
                    "name": "drawCircle",
                    "params": "x, y, radius",
                    "params_typed": "float x, float y, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "desc_ja": "円を描画",
                    "desc_ko": "원 그리기",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawCircle",
                    "params": "center, radius",
                    "params_typed": "Vec3 center, float radius",
                    "return_type": "void",
                    "desc": "Draw circle",
                    "desc_ja": "円を描画",
                    "desc_ko": "원 그리기",
                    "snippet": "drawCircle(${1:x}, ${2:y}, ${3:radius})"
                },
                {
                    "name": "drawArc",
                    "params": "x, y, radius, angleBegin, angleEnd",
                    "params_typed": "float x, float y, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Draw arc (partial circle, angles in radians)",
                    "desc_ja": "円弧を描画（角度はradian）",
                    "desc_ko": "호 그리기 (각도는 radian)",
                    "snippet": "drawArc(${1:x}, ${2:y}, ${3:radius}, ${4:0}, ${5:TAU})"
                },
                {
                    "name": "drawArc",
                    "params": "center, radius, angleBegin, angleEnd",
                    "params_typed": "Vec3 center, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Draw arc (partial circle, angles in radians)",
                    "desc_ja": "円弧を描画（角度はradian）",
                    "desc_ko": "호 그리기 (각도는 radian)",
                    "snippet": "drawArc(${1:x}, ${2:y}, ${3:radius}, ${4:0}, ${5:TAU})"
                },
                {
                    "name": "drawEllipse",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "desc_ja": "楕円を描画",
                    "desc_ko": "타원 그리기",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, rx, ry",
                    "params_typed": "Vec3 center, float rx, float ry",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "desc_ja": "楕円を描画",
                    "desc_ko": "타원 그리기",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawEllipse",
                    "params": "center, radii",
                    "params_typed": "Vec3 center, Vec2 radii",
                    "return_type": "void",
                    "desc": "Draw ellipse",
                    "desc_ja": "楕円を描画",
                    "desc_ko": "타원 그리기",
                    "snippet": "drawEllipse(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "drawPoint",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw a single point",
                    "desc_ja": "点を描画",
                    "desc_ko": "점 그리기",
                    "snippet": "drawPoint(${1:x}, ${2:y})"
                },
                {
                    "name": "drawPoint",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Draw a single point",
                    "desc_ja": "点を描画",
                    "desc_ko": "점 그리기",
                    "snippet": "drawPoint(${1:x}, ${2:y})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "desc_ja": "線を描画（2Dまたは3D）",
                    "desc_ko": "선 그리기 (2D 또는 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawLine",
                    "params": "x1, y1, z1, x2, y2, z2",
                    "params_typed": "float x1, float y1, float z1, float x2, float y2, float z2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "desc_ja": "線を描画（2Dまたは3D）",
                    "desc_ko": "선 그리기 (2D 또는 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawLine",
                    "params": "p1, p2",
                    "params_typed": "Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw line (2D or 3D)",
                    "desc_ja": "線を描画（2Dまたは3D）",
                    "desc_ko": "선 그리기 (2D 또는 3D)",
                    "snippet": "drawLine(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawBezier",
                    "params": "p0, p1, p2, p3",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)",
                    "desc_ja": "ベジェ曲線を描画（4点で3次、3点で2次、vectorでN次）",
                    "desc_ko": "베지어 곡선 그리기 (4점은 3차, 3점은 2차, vector는 N차)",
                    "snippet": "drawBezier(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})"
                },
                {
                    "name": "drawBezier",
                    "params": "p0, p1, p2",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)",
                    "desc_ja": "ベジェ曲線を描画（4点で3次、3点で2次、vectorでN次）",
                    "desc_ko": "베지어 곡선 그리기 (4점은 3차, 3점은 2차, vector는 N차)",
                    "snippet": "drawBezier(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})"
                },
                {
                    "name": "drawBezier",
                    "params": "controlPoints",
                    "params_typed": "const vector<Vec3>& controlPoints",
                    "return_type": "void",
                    "desc": "Draw bezier curve (cubic with 4 points, quadratic with 3, or N-th order via vector)",
                    "desc_ja": "ベジェ曲線を描画（4点で3次、3点で2次、vectorでN次）",
                    "desc_ko": "베지어 곡선 그리기 (4점은 3차, 3점은 2차, vector는 N차)",
                    "snippet": "drawBezier(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})"
                },
                {
                    "name": "drawCurve",
                    "params": "p0, p1, p2, p3",
                    "params_typed": "Vec3 p0, Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)",
                    "desc_ja": "Catmull-Rom曲線を描画（4点でp1→p2を描画、vectorで内部点を通る連結、closed=trueで閉曲線）",
                    "desc_ko": "Catmull-Rom 곡선 그리기 (4점은 p1→p2 그리기, vector는 내부 점들을 통과하는 연결, closed=true는 닫힌 곡선)",
                    "snippet": "drawCurve(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})"
                },
                {
                    "name": "drawCurve",
                    "params": "points",
                    "params_typed": "const vector<Vec3>& points",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)",
                    "desc_ja": "Catmull-Rom曲線を描画（4点でp1→p2を描画、vectorで内部点を通る連結、closed=trueで閉曲線）",
                    "desc_ko": "Catmull-Rom 곡선 그리기 (4점은 p1→p2 그리기, vector는 내부 점들을 통과하는 연결, closed=true는 닫힌 곡선)",
                    "snippet": "drawCurve(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})"
                },
                {
                    "name": "drawCurve",
                    "params": "points, closed",
                    "params_typed": "const vector<Vec3>& points, bool closed",
                    "return_type": "void",
                    "desc": "Draw Catmull-Rom curve (4 control points draw p1->p2; vector chains segments passing through interior points; closed=true wraps around)",
                    "desc_ja": "Catmull-Rom曲線を描画（4点でp1→p2を描画、vectorで内部点を通る連結、closed=trueで閉曲線）",
                    "desc_ko": "Catmull-Rom 곡선 그리기 (4점은 p1→p2 그리기, vector는 내부 점들을 통과하는 연결, closed=true는 닫힌 곡선)",
                    "snippet": "drawCurve(${1:p0}, ${2:p1}, ${3:p2}, ${4:p3})"
                },
                {
                    "name": "drawTriangle",
                    "params": "x1, y1, x2, y2, x3, y3",
                    "params_typed": "float x1, float y1, float x2, float y2, float x3, float y3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "desc_ja": "三角形を描画",
                    "desc_ko": "삼각형 그리기",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawTriangle",
                    "params": "p1, p2, p3",
                    "params_typed": "Vec3 p1, Vec3 p2, Vec3 p3",
                    "return_type": "void",
                    "desc": "Draw triangle",
                    "desc_ja": "三角形を描画",
                    "desc_ko": "삼각형 그리기",
                    "snippet": "drawTriangle(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2}, ${5:x3}, ${6:y3})"
                },
                {
                    "name": "drawBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, size",
                    "params_typed": "float x, float y, float z, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "x, y, z, w, h, d",
                    "params_typed": "float x, float y, float z, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "pos, size",
                    "params_typed": "Vec3 pos, float size",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawBox",
                    "params": "pos, w, h, d",
                    "params_typed": "Vec3 pos, float w, float h, float d",
                    "return_type": "void",
                    "desc": "Draw 3D box (respects fill/noFill)",
                    "desc_ja": "3Dボックスを描画（fill/noFillに対応）",
                    "desc_ko": "3D 박스 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawBox(${1:size})"
                },
                {
                    "name": "drawSphere",
                    "params": "radius",
                    "params_typed": "float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "desc_ja": "3D球体を描画（fill/noFillに対応）",
                    "desc_ko": "3D 구 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawSphere",
                    "params": "x, y, z, radius",
                    "params_typed": "float x, float y, float z, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "desc_ja": "3D球体を描画（fill/noFillに対応）",
                    "desc_ko": "3D 구 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawSphere",
                    "params": "pos, radius",
                    "params_typed": "Vec3 pos, float radius",
                    "return_type": "void",
                    "desc": "Draw 3D sphere (respects fill/noFill)",
                    "desc_ja": "3D球体を描画（fill/noFillに対応）",
                    "desc_ko": "3D 구 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawSphere(${1:radius})"
                },
                {
                    "name": "drawCone",
                    "params": "radius, height",
                    "params_typed": "float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "desc_ja": "3D円錐を描画（fill/noFillに対応）",
                    "desc_ko": "3D 원뿔 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "drawCone",
                    "params": "x, y, z, radius, height",
                    "params_typed": "float x, float y, float z, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "desc_ja": "3D円錐を描画（fill/noFillに対応）",
                    "desc_ko": "3D 원뿔 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "drawCone",
                    "params": "pos, radius, height",
                    "params_typed": "Vec3 pos, float radius, float height",
                    "return_type": "void",
                    "desc": "Draw 3D cone (respects fill/noFill)",
                    "desc_ja": "3D円錐を描画（fill/noFillに対応）",
                    "desc_ko": "3D 원뿔 그리기 (fill/noFill 적용됨)",
                    "snippet": "drawCone(${1:radius}, ${2:height})"
                },
                {
                    "name": "beginShape",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a shape",
                    "desc_ja": "図形の描画を開始",
                    "desc_ko": "도형 그리기 시작",
                    "snippet": "beginShape()"
                },
                {
                    "name": "vertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec2& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "vertex",
                    "params": "v",
                    "params_typed": "const Vec3& v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점 추가",
                    "snippet": "vertex(${1:x}, ${2:y})"
                },
                {
                    "name": "endShape",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a shape",
                    "desc_ja": "図形の描画を終了",
                    "desc_ko": "도형 그리기 종료",
                    "snippet": "endShape()"
                },
                {
                    "name": "appendArc",
                    "params": "cx, cy, radius, angleBegin, angleEnd",
                    "params_typed": "float cx, float cy, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Append arc vertices to the current shape (use between beginShape/endShape)",
                    "desc_ja": "現在の図形に円弧の頂点を追加（beginShape/endShape間で使用）",
                    "desc_ko": "현재 도형에 호 정점을 추가 (beginShape/endShape 사이에서 사용)",
                    "snippet": "appendArc(${1:cx}, ${2:cy}, ${3:radius}, ${4:0}, ${5:TAU})"
                },
                {
                    "name": "appendArc",
                    "params": "center, radius, angleBegin, angleEnd",
                    "params_typed": "const Vec2& center, float radius, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Append arc vertices to the current shape (use between beginShape/endShape)",
                    "desc_ja": "現在の図形に円弧の頂点を追加（beginShape/endShape間で使用）",
                    "desc_ko": "현재 도형에 호 정점을 추가 (beginShape/endShape 사이에서 사용)",
                    "snippet": "appendArc(${1:cx}, ${2:cy}, ${3:radius}, ${4:0}, ${5:TAU})"
                },
                {
                    "name": "appendCurve",
                    "params": "points",
                    "params_typed": "const vector<Vec3>& points",
                    "return_type": "void",
                    "desc": "Append Catmull-Rom curve vertices to the current shape (use between beginShape/endShape; needs >=4 points, closed=true wraps around)",
                    "desc_ja": "現在の図形にCatmull-Rom曲線の頂点を追加（beginShape/endShape間で使用、4点以上必要、closed=trueで閉曲線）",
                    "desc_ko": "현재 도형에 Catmull-Rom 곡선 정점을 추가 (beginShape/endShape 사이에서 사용, 4점 이상 필요, closed=true는 닫힌 곡선)",
                    "snippet": "appendCurve(${1:points})"
                },
                {
                    "name": "appendCurve",
                    "params": "points, closed",
                    "params_typed": "const vector<Vec3>& points, bool closed",
                    "return_type": "void",
                    "desc": "Append Catmull-Rom curve vertices to the current shape (use between beginShape/endShape; needs >=4 points, closed=true wraps around)",
                    "desc_ja": "現在の図形にCatmull-Rom曲線の頂点を追加（beginShape/endShape間で使用、4点以上必要、closed=trueで閉曲線）",
                    "desc_ko": "현재 도형에 Catmull-Rom 곡선 정점을 추가 (beginShape/endShape 사이에서 사용, 4점 이상 필요, closed=true는 닫힌 곡선)",
                    "snippet": "appendCurve(${1:points})"
                },
                {
                    "name": "beginStroke",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing a stroke (uses StrokeMesh internally)",
                    "desc_ja": "ストローク描画を開始（内部でStrokeMeshを使用）",
                    "desc_ko": "stroke 그리기 시작 (내부적으로 StrokeMesh 사용)",
                    "snippet": "beginStroke()"
                },
                {
                    "name": "endStroke",
                    "params": "close",
                    "params_typed": "bool close = false",
                    "return_type": "void",
                    "desc": "End drawing a stroke",
                    "desc_ja": "ストローク描画を終了",
                    "desc_ko": "stroke 그리기 종료",
                    "snippet": "endStroke()"
                },
                {
                    "name": "beginLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin batch line drawing. Add vertex pairs with vertex(), then call endLines(). Each pair of vertices draws one independent line segment. Use setColor() between vertices for per-line colors.",
                    "desc_ja": "バッチ線描画を開始。vertex()で頂点ペアを追加し、endLines()で描画。2頂点で1本の独立した線分。setColor()で頂点ごとに色を変更可能",
                    "desc_ko": "배치 선 그리기 시작. vertex()로 정점 쌍을 추가한 뒤 endLines()를 호출. 각 정점 쌍이 독립적인 선분 하나를 그림. 정점 사이에 setColor()로 선마다 색상 지정 가능",
                    "snippet": "beginLines()"
                },
                {
                    "name": "endLines",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End batch line drawing and render all accumulated line segments",
                    "desc_ja": "バッチ線描画を終了し、蓄積された全線分を描画",
                    "desc_ko": "배치 선 그리기 종료. 누적된 모든 선을 렌더링",
                    "snippet": "endLines()"
                },
                {
                    "name": "drawStroke",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "desc_ja": "単一のストロークを描画（太線、端点/結合スタイル対応）",
                    "desc_ko": "단일 stroke 세그먼트를 그림 (캡/조인이 있는 굵은 선)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawStroke",
                    "params": "p1, p2",
                    "params_typed": "const Vec2& p1, const Vec2& p2",
                    "return_type": "void",
                    "desc": "Draw a single stroke segment (thick line with cap/join)",
                    "desc_ja": "単一のストロークを描画（太線、端点/結合スタイル対応）",
                    "desc_ko": "단일 stroke 세그먼트를 그림 (캡/조인이 있는 굵은 선)",
                    "snippet": "drawStroke(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "drawBitmapString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text",
                    "desc_ja": "テキストを描画",
                    "desc_ko": "비트맵 텍스트 그리기",
                    "snippet": "drawBitmapString(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "drawBitmapStringHighlight",
                    "params": "text, x, y, background, foreground",
                    "params_typed": "const string& text, float x, float y, const Color& background = Color(0,0,0), const Color& foreground = Color(1,1,1)",
                    "return_type": "void",
                    "desc": "Draw text with background highlight",
                    "desc_ja": "背景ハイライト付きでテキストを描画",
                    "desc_ko": "배경 하이라이트와 함께 비트맵 텍스트 그리기",
                    "snippet": "drawBitmapStringHighlight(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "getBitmapStringBounds",
                    "params": "text, width, height",
                    "params_typed": "const string& text, float& width, float& height",
                    "return_type": "void",
                    "desc": "Get bitmap string bounding box size",
                    "desc_ja": "ビットマップ文字列のバウンディングボックスサイズを取得",
                    "desc_ko": "비트맵 문자열의 바운딩 박스 크기를 얻음",
                    "snippet": "getBitmapStringBounds(${1:\"text\"}, ${2:w}, ${3:h})"
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal",
                    "params_typed": "TextAlign horizontal",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "desc_ja": "テキストの配置を設定",
                    "desc_ko": "텍스트 정렬을 설정",
                    "snippet": "setTextAlign(TextAlign::${1:Left})"
                },
                {
                    "name": "setTextAlign",
                    "params": "horizontal, vertical",
                    "params_typed": "TextAlign horizontal, TextAlign vertical",
                    "return_type": "void",
                    "desc": "Set text alignment",
                    "desc_ja": "テキストの配置を設定",
                    "desc_ko": "텍스트 정렬을 설정",
                    "snippet": "setTextAlign(TextAlign::${1:Left})"
                },
                {
                    "name": "getTextAlignH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get horizontal text alignment",
                    "desc_ja": "水平方向のテキスト配置を取得",
                    "desc_ko": "수평 텍스트 정렬을 얻음",
                    "snippet": "getTextAlignH()"
                },
                {
                    "name": "getTextAlignV",
                    "params": "",
                    "params_typed": "",
                    "return_type": "TextAlign",
                    "desc": "Get vertical text alignment",
                    "desc_ja": "垂直方向のテキスト配置を取得",
                    "desc_ko": "수직 텍스트 정렬을 얻음",
                    "snippet": "getTextAlignV()"
                },
                {
                    "name": "getBitmapFontHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get bitmap font height",
                    "desc_ja": "ビットマップフォントの高さを取得",
                    "desc_ko": "비트맵 폰트 높이를 얻음",
                    "snippet": "getBitmapFontHeight()"
                },
                {
                    "name": "getBitmapStringWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width",
                    "desc_ja": "テキストの幅を取得",
                    "desc_ko": "비트맵 텍스트 너비를 얻음",
                    "snippet": "getBitmapStringWidth(${1:\"text\"})"
                },
                {
                    "name": "getBitmapStringHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height",
                    "desc_ja": "テキストの高さを取得",
                    "desc_ko": "비트맵 텍스트 높이를 얻음",
                    "snippet": "getBitmapStringHeight(${1:\"text\"})"
                },
                {
                    "name": "getBitmapStringBBox",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "Rect",
                    "desc": "Get text bounding box",
                    "desc_ja": "テキストのバウンディングボックスを取得",
                    "desc_ko": "비트맵 텍스트 바운딩 박스를 얻음",
                    "snippet": "getBitmapStringBBox(${1:\"text\"}, ${2:x}, ${3:y})"
                },
                {
                    "name": "setBitmapLineHeight",
                    "params": "height",
                    "params_typed": "float height",
                    "return_type": "void",
                    "desc": "Set line height for bitmap string newlines (default: 16)",
                    "desc_ja": "ビットマップ文字列の改行時の行の高さを設定（デフォルト: 16）",
                    "desc_ko": "비트맵 문자열 개행 시의 줄 높이를 설정 (기본값: 16)",
                    "snippet": "setBitmapLineHeight(${1:16})"
                },
                {
                    "name": "getBitmapLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height for bitmap string newlines",
                    "desc_ja": "ビットマップ文字列の改行時の行の高さを取得",
                    "desc_ko": "비트맵 문자열 개행 시의 줄 높이를 얻음",
                    "snippet": "getBitmapLineHeight()"
                },
                {
                    "name": "setFps",
                    "params": "fps",
                    "params_typed": "float fps",
                    "return_type": "void",
                    "desc": "Set target frame rate (VSYNC = -1.0)",
                    "desc_ja": "ターゲットフレームレートを設定 (VSYNC = -1.0)",
                    "desc_ko": "목표 프레임레이트를 설정 (VSYNC = -1.0)",
                    "snippet": "setFps(${1:60.0})"
                }
            ]
        },
        {
            "name": "Graphics - Style",
            "name_ja": "グラフィックス - スタイル",
            "name_ko": "그래픽 - 스타일",
            "functions": [
                {
                    "name": "fill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable fill mode (shapes are solid, no outline)",
                    "desc_ja": "塗りつぶしモードを有効化（シェイプは塗りつぶし、輪郭なし）",
                    "desc_ko": "채우기 모드 활성화 (도형이 채워지고 외곽선 없음)",
                    "snippet": "fill()"
                },
                {
                    "name": "noFill",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable stroke mode (shapes show outline only)",
                    "desc_ja": "ストロークモードを有効化（シェイプは輪郭のみ）",
                    "desc_ko": "stroke 모드 활성화 (도형은 외곽선만 표시)",
                    "snippet": "noFill()"
                },
                {
                    "name": "setStrokeWeight",
                    "params": "weight",
                    "params_typed": "float weight",
                    "return_type": "void",
                    "desc": "Set stroke width",
                    "desc_ja": "ストロークの太さを設定",
                    "desc_ko": "stroke 두께를 설정",
                    "snippet": "setStrokeWeight(${1:1.0})"
                },
                {
                    "name": "getStrokeWeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stroke width",
                    "desc_ja": "現在のストロークの太さを取得",
                    "desc_ko": "현재 storke 두께를 얻음",
                    "snippet": "getStrokeWeight()"
                },
                {
                    "name": "setStrokeCap",
                    "params": "cap",
                    "params_typed": "StrokeCap cap",
                    "return_type": "void",
                    "desc": "Set stroke cap style (Butt, Round, Square)",
                    "desc_ja": "ストローク端点のスタイルを設定",
                    "desc_ko": "stroke 끝점 스타일을 설정 (Butt, Round, Square)",
                    "snippet": "setStrokeCap(StrokeCap::${1:Round})"
                },
                {
                    "name": "getStrokeCap",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeCap",
                    "desc": "Get current stroke cap style",
                    "desc_ja": "現在のストローク端点スタイルを取得",
                    "desc_ko": "현재 stroke 끝점 스타일을 얻음",
                    "snippet": "getStrokeCap()"
                },
                {
                    "name": "setStrokeJoin",
                    "params": "join",
                    "params_typed": "StrokeJoin join",
                    "return_type": "void",
                    "desc": "Set stroke join style (Miter, Round, Bevel)",
                    "desc_ja": "ストローク結合部のスタイルを設定",
                    "desc_ko": "stroke 결합부 스타일을 설정 (Miter, Round, Bevel)",
                    "snippet": "setStrokeJoin(StrokeJoin::${1:Round})"
                },
                {
                    "name": "getStrokeJoin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeJoin",
                    "desc": "Get current stroke join style",
                    "desc_ja": "現在のストローク結合部スタイルを取得",
                    "desc_ko": "현재 stroke 결합부 스타일을 얻음",
                    "snippet": "getStrokeJoin()"
                },
                {
                    "name": "isFillEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if fill mode is enabled",
                    "desc_ja": "塗りつぶしモードが有効か確認",
                    "desc_ko": "채우기 모드 활성 여부 확인",
                    "snippet": "isFillEnabled()"
                },
                {
                    "name": "isStrokeEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if stroke mode is enabled",
                    "desc_ja": "ストロークモードが有効か確認",
                    "desc_ko": "stroke 모드 활성 여부 확인",
                    "snippet": "isStrokeEnabled()"
                },
                {
                    "name": "setCurveTolerance",
                    "params": "pixels",
                    "params_typed": "float pixels",
                    "return_type": "void",
                    "desc": "Set adaptive curve tessellation tolerance in pixels (smaller = smoother, scale-aware)",
                    "desc_ja": "曲線の適応的分割の許容誤差をピクセル単位で設定（小さいほど滑らか、スケール対応）",
                    "desc_ko": "곡선의 적응형 분할 허용 오차를 픽셀 단위로 설정 (작을수록 부드러움, 스케일 대응)",
                    "snippet": "setCurveTolerance(${1:0.5})"
                },
                {
                    "name": "getCurveTolerance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current curve tessellation tolerance (in pixels)",
                    "desc_ja": "現在の曲線分割の許容誤差を取得（ピクセル単位）",
                    "desc_ko": "현재 곡선 분할 허용 오차를 얻음 (픽셀 단위)",
                    "snippet": "getCurveTolerance()"
                },
                {
                    "name": "setCurveResolution",
                    "params": "n",
                    "params_typed": "int n",
                    "return_type": "void",
                    "desc": "Set fixed curve segment count (switches off adaptive tolerance mode)",
                    "desc_ja": "曲線の固定分割数を設定（適応的tolerance modeをオフ）",
                    "desc_ko": "곡선의 고정 분할 개수를 설정 (적응형 tolerance 모드 끔)",
                    "snippet": "setCurveResolution(${1:32})"
                },
                {
                    "name": "getCurveResolution",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current curve resolution",
                    "desc_ja": "現在の曲線分割数を取得",
                    "desc_ko": "현재 곡선 분할 개수를 얻음",
                    "snippet": "getCurveResolution()"
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save current style state (color, stroke, fill)",
                    "desc_ja": "現在のスタイル状態を保存（色、ストローク、塗りつぶし）",
                    "desc_ko": "현재 스타일 상태를 저장 (색상, 스트로크, 채우기)",
                    "snippet": "pushStyle()"
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous style state",
                    "desc_ja": "保存したスタイル状態を復元",
                    "desc_ko": "이전 스타일 상태를 복원",
                    "snippet": "popStyle()"
                },
                {
                    "name": "resetStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset style to default values (white color, fill enabled, stroke disabled)",
                    "desc_ja": "スタイルをデフォルト値にリセット（白色、塗りつぶし有効、ストローク無効）",
                    "desc_ko": "스타일을 기본값으로 초기화 (흰색, 채우기 활성, 스트로크 비활성)",
                    "snippet": "resetStyle()"
                },
                {
                    "name": "getColor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Get current fill color",
                    "desc_ja": "現在の塗りつぶし色を取得",
                    "desc_ko": "현재 채우기 색상을 얻음",
                    "snippet": "getColor()"
                },
                {
                    "name": "setScissor",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Set scissor clipping rectangle. Also available via RectNode::setClipping(true)",
                    "desc_ja": "シザー（クリッピング）矩形を設定。RectNode::setClipping(true)でも使用可",
                    "desc_ko": "시저(클리핑) 사각형을 설정. RectNode::setClipping(true)로도 사용 가능",
                    "snippet": "setScissor(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "resetScissor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset (disable) scissor clipping",
                    "desc_ja": "シザー（クリッピング）を解除",
                    "desc_ko": "시저(클리핑)를 해제",
                    "snippet": "resetScissor()"
                },
                {
                    "name": "pushScissor",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Push scissor clipping rectangle onto stack",
                    "desc_ja": "シザー矩形をスタックにプッシュ",
                    "desc_ko": "시저 사각형을 스택에 푸시",
                    "snippet": "pushScissor(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "popScissor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop scissor clipping rectangle from stack",
                    "desc_ja": "シザー矩形をスタックからポップ",
                    "desc_ko": "시저 사각형을 스택에서 복원",
                    "snippet": "popScissor()"
                },
                {
                    "name": "setBlendMode",
                    "params": "mode",
                    "params_typed": "BlendMode mode",
                    "return_type": "void",
                    "desc": "Set blend mode. BlendMode::Alpha (default), Add, Multiply, Screen, Subtract, Disabled",
                    "desc_ja": "ブレンドモードを設定。BlendMode::Alpha（デフォルト）, Add, Multiply, Screen, Subtract, Disabled",
                    "desc_ko": "블렌드 모드를 설정. BlendMode::Alpha (기본값), Add, Multiply, Screen, Subtract, Disabled",
                    "snippet": "setBlendMode(${1:BlendMode::Add})"
                },
                {
                    "name": "getBlendMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "BlendMode",
                    "desc": "Get current blend mode",
                    "desc_ja": "現在のブレンドモードを取得",
                    "desc_ko": "현재 블렌드 모드를 얻음",
                    "snippet": "getBlendMode()"
                },
                {
                    "name": "resetBlendMode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset blend mode to Alpha (default)",
                    "desc_ja": "ブレンドモードをAlpha（デフォルト）にリセット",
                    "desc_ko": "블렌드 모드를 Alpha (기본값)로 초기화",
                    "snippet": "resetBlendMode()"
                },
                {
                    "name": "pushStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Push current style (color, fill, stroke, blend) onto stack",
                    "desc_ja": "現在のスタイル（色、塗り、ストローク、ブレンド）をスタックにプッシュ",
                    "desc_ko": "현재 스타일(색상, 채우기, 스트로크, 블렌드)을 스택에 푸시",
                    "snippet": "pushStyle()"
                },
                {
                    "name": "popStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop style from stack, restoring previous state",
                    "desc_ja": "スタイルをスタックからポップし、前の状態を復元",
                    "desc_ko": "스택에서 스타일을 꺼내서 이전 상태로 복원",
                    "snippet": "popStyle()"
                },
                {
                    "name": "resetStyle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset all style settings to defaults",
                    "desc_ja": "全スタイル設定をデフォルトにリセット",
                    "desc_ko": "모든 스타일 설정을 기본값으로 초기화",
                    "snippet": "resetStyle()"
                }
            ]
        },
        {
            "name": "Transform",
            "name_ja": "変換",
            "name_ko": "변환",
            "functions": [
                {
                    "name": "translate",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Move origin",
                    "desc_ja": "原点を移動",
                    "desc_ko": "원점을 이동",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Move origin",
                    "desc_ja": "原点を移動",
                    "desc_ko": "원점을 이동",
                    "snippet": "translate(${1:x}, ${2:y})"
                },
                {
                    "name": "rotate",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotate",
                    "params": "quat",
                    "params_typed": "Quaternion quat",
                    "return_type": "void",
                    "desc": "Rotate by radians (single axis, euler angles, or quaternion)",
                    "desc_ja": "ラジアンで回転（単軸、オイラー角、またはクォータニオン）",
                    "desc_ko": "라디안으로 회전 (단일 축, 오일러 각도 또는 쿼터니언)",
                    "snippet": "rotate(${1:radians})"
                },
                {
                    "name": "rotateDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "desc_ja": "度で回転",
                    "desc_ko": "도(degree)로 회전",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateDeg",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "desc_ja": "度で回転",
                    "desc_ko": "도(degree)로 회전",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateDeg",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "void",
                    "desc": "Rotate by degrees",
                    "desc_ja": "度で回転",
                    "desc_ko": "도(degree)로 회전",
                    "snippet": "rotateDeg(${1:degrees})"
                },
                {
                    "name": "rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around X axis",
                    "desc_ja": "X軸周りに回転",
                    "desc_ko": "X축을 중심으로 회전",
                    "snippet": "rotateX(${1:radians})"
                },
                {
                    "name": "rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Y axis",
                    "desc_ja": "Y軸周りに回転",
                    "desc_ko": "Y축을 중심으로 회전",
                    "snippet": "rotateY(${1:radians})"
                },
                {
                    "name": "rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Rotate around Z axis",
                    "desc_ja": "Z軸周りに回転",
                    "desc_ko": "Z축을 중심으로 회전",
                    "snippet": "rotateZ(${1:radians})"
                },
                {
                    "name": "rotateXDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around X axis (degrees)",
                    "desc_ja": "X軸周りに回転（度）",
                    "desc_ko": "X축을 중심으로 회전 (도)",
                    "snippet": "rotateXDeg(${1:degrees})"
                },
                {
                    "name": "rotateYDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Y axis (degrees)",
                    "desc_ja": "Y軸周りに回転（度）",
                    "desc_ko": "Y축을 중심으로 회전 (도)",
                    "snippet": "rotateYDeg(${1:degrees})"
                },
                {
                    "name": "rotateZDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Rotate around Z axis (degrees)",
                    "desc_ja": "Z軸周りに回転（度）",
                    "desc_ko": "Z축을 중심으로 회전 (도)",
                    "snippet": "rotateZDeg(${1:degrees})"
                },
                {
                    "name": "scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "void",
                    "desc": "Scale",
                    "desc_ja": "拡大縮小",
                    "desc_ko": "크기 조절",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "scale",
                    "params": "sx, sy",
                    "params_typed": "float sx, float sy",
                    "return_type": "void",
                    "desc": "Scale",
                    "desc_ja": "拡大縮小",
                    "desc_ko": "크기 조절",
                    "snippet": "scale(${1:s})"
                },
                {
                    "name": "pushMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Save transform state",
                    "desc_ja": "変換状態を保存",
                    "desc_ko": "변환 상태를 저장",
                    "snippet": "pushMatrix()"
                },
                {
                    "name": "popMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore transform state",
                    "desc_ja": "変換状態を復元",
                    "desc_ko": "변환 상태를 복원",
                    "snippet": "popMatrix()"
                },
                {
                    "name": "getCurrentMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Get current transformation matrix",
                    "desc_ja": "現在の変換行列を取得",
                    "desc_ko": "현재 변환 행렬을 얻음",
                    "snippet": "getCurrentMatrix()"
                },
                {
                    "name": "resetMatrix",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset transformation matrix to identity",
                    "desc_ja": "変換行列をリセット",
                    "desc_ko": "변환 행렬을 단위 행렬로 초기화",
                    "snippet": "resetMatrix()"
                },
                {
                    "name": "setMatrix",
                    "params": "mat",
                    "params_typed": "const Mat4& mat",
                    "return_type": "void",
                    "desc": "Set transformation matrix directly",
                    "desc_ja": "変換行列を直接設定",
                    "desc_ko": "변환 행렬을 직접 설정",
                    "snippet": "setMatrix(${1:mat})"
                }
            ]
        },
        {
            "name": "Window & Input",
            "name_ja": "ウィンドウと入力",
            "name_ko": "윈도우 & 입력",
            "functions": [
                {
                    "name": "getWindowWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas width",
                    "desc_ja": "キャンバスの幅を取得",
                    "desc_ko": "캔버스 너비를 얻음",
                    "snippet": "getWindowWidth()"
                },
                {
                    "name": "getWindowHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get canvas height",
                    "desc_ja": "キャンバスの高さを取得",
                    "desc_ko": "캔버스 높이를 얻음",
                    "snippet": "getWindowHeight()"
                },
                {
                    "name": "getWindowSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get canvas size as Vec2",
                    "desc_ja": "キャンバスのサイズをVec2で取得",
                    "desc_ko": "캔버스 크기를 Vec2로 얻음",
                    "snippet": "getWindowSize()"
                },
                {
                    "name": "requestExitApp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Request application exit. Can be cancelled by listening to events().exitRequested and setting args.cancel = true",
                    "desc_ja": "アプリケーション終了を要求。events().exitRequestedをリッスンしてargs.cancel = trueでキャンセル可能",
                    "desc_ko": "어플리케이션 종료를 요청. events().exitRequested를 수신하고 args.cancel = true로 설정하면 취소 가능"
                },
                {
                    "name": "exitApp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Immediately exit the application (cannot be cancelled)",
                    "desc_ja": "アプリケーションを即座に終了（キャンセル不可）",
                    "desc_ko": "어플리케이션을 즉시 종료 (취소 불가)"
                },
                {
                    "name": "loadDialog",
                    "params": "title, message, defaultPath, folderSelection",
                    "params_typed": "const string& title = \"\", const string& message = \"\", const string& defaultPath = \"\", bool folderSelection = false",
                    "return_type": "FileDialogResult",
                    "desc": "Show file open dialog. Returns FileDialogResult with filePath, fileName, success",
                    "desc_ja": "ファイル選択ダイアログを表示。FileDialogResult（filePath, fileName, success）を返す",
                    "desc_ko": "파일 열기 대화상자 표시. filePath, fileName, success가 담긴 FileDialogResult 반환"
                },
                {
                    "name": "saveDialog",
                    "params": "title, message, defaultPath, defaultName",
                    "params_typed": "const string& title = \"\", const string& message = \"\", const string& defaultPath = \"\", const string& defaultName = \"\"",
                    "return_type": "FileDialogResult",
                    "desc": "Show file save dialog. Returns FileDialogResult with filePath, fileName, success",
                    "desc_ja": "ファイル保存ダイアログを表示。FileDialogResult（filePath, fileName, success）を返す",
                    "desc_ko": "파일 저장 대화상자 표시. filePath, fileName, success가 담긴 FileDialogResult 반환"
                },
                {
                    "name": "alertDialog",
                    "params": "title, message",
                    "params_typed": "const string& title, const string& message",
                    "return_type": "void",
                    "desc": "Show alert dialog with OK button",
                    "desc_ja": "OKボタン付きのアラートダイアログを表示",
                    "desc_ko": "OK 버튼이 있는 알림 대화상자 표시"
                },
                {
                    "name": "confirmDialog",
                    "params": "title, message",
                    "params_typed": "const string& title, const string& message",
                    "return_type": "bool",
                    "desc": "Show Yes/No confirmation dialog. Returns true if Yes clicked",
                    "desc_ja": "Yes/No確認ダイアログを表示。Yesが押されたらtrueを返す",
                    "desc_ko": "Yes/No 확인 대화상자 표시. Yes를 누르면 true 반환"
                },
                {
                    "name": "loadDialogAsync",
                    "params": "title, message, defaultPath, folderSelection, callback",
                    "params_typed": "const string& title, const string& message, const string& defaultPath, bool folderSelection, function<void(const FileDialogResult&)> callback",
                    "return_type": "void",
                    "desc": "Show file open dialog asynchronously. Callback receives FileDialogResult",
                    "desc_ja": "ファイル選択ダイアログを非同期で表示。コールバックにFileDialogResultが渡される",
                    "desc_ko": "파일 열기 대화상자를 비동기로 표시. 콜백에 FileDialogResult가 전달됨"
                },
                {
                    "name": "saveDialogAsync",
                    "params": "title, message, defaultPath, defaultName, callback",
                    "params_typed": "const string& title, const string& message, const string& defaultPath, const string& defaultName, function<void(const FileDialogResult&)> callback",
                    "return_type": "void",
                    "desc": "Show file save dialog asynchronously. Callback receives FileDialogResult",
                    "desc_ja": "ファイル保存ダイアログを非同期で表示。コールバックにFileDialogResultが渡される",
                    "desc_ko": "파일 저장 대화상자를 비동기로 표시. 콜백에 FileDialogResult가 전달됨"
                },
                {
                    "name": "alertDialogAsync",
                    "params": "title, message, callback",
                    "params_typed": "const string& title, const string& message, function<void()> callback = nullptr",
                    "return_type": "void",
                    "desc": "Show alert dialog asynchronously. Callback is called when dismissed",
                    "desc_ja": "アラートダイアログを非同期で表示。閉じた時にコールバックが呼ばれる",
                    "desc_ko": "알림 대화상자를 비동기로 표시. 닫힐 때 콜백 호출"
                },
                {
                    "name": "confirmDialogAsync",
                    "params": "title, message, callback",
                    "params_typed": "const string& title, const string& message, function<void(bool)> callback",
                    "return_type": "void",
                    "desc": "Show Yes/No dialog asynchronously. Callback receives true if Yes clicked",
                    "desc_ja": "Yes/No確認ダイアログを非同期で表示。Yesが押されたらコールバックにtrueが渡される",
                    "desc_ko": "Yes/No 대화상자를 비동기로 표시. Yes를 누르면 콜백에 true 전달"
                },
                {
                    "name": "getMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse X position",
                    "desc_ja": "マウスのX座標を取得",
                    "desc_ko": "마우스 X 좌표를 얻음",
                    "snippet": "getMouseX()"
                },
                {
                    "name": "getMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get mouse Y position",
                    "desc_ja": "マウスのY座標を取得",
                    "desc_ko": "마우스 Y 좌표를 얻음",
                    "snippet": "getMouseY()"
                },
                {
                    "name": "getMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get mouse position as Vec2",
                    "desc_ja": "マウス座標をVec2で取得",
                    "desc_ko": "마우스 좌표를 Vec2로 얻음",
                    "snippet": "getMousePos()"
                },
                {
                    "name": "getGlobalMousePos",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec2",
                    "desc": "Get global mouse position as Vec2",
                    "desc_ja": "グローバルマウス座標をVec2で取得",
                    "desc_ko": "전역 마우스 좌표를 Vec2로 얻음",
                    "snippet": "getGlobalMousePos()"
                },
                {
                    "name": "getGlobalMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get global mouse X (screen coordinates, not window-relative)",
                    "desc_ja": "グローバルマウスX座標（スクリーン座標、ウィンドウ相対ではない）",
                    "desc_ko": "전역 마우스 X (스크린 좌표, 윈도우 상대 좌표가 아님)",
                    "snippet": "getGlobalMouseX()"
                },
                {
                    "name": "getGlobalMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get global mouse Y (screen coordinates, not window-relative)",
                    "desc_ja": "グローバルマウスY座標（スクリーン座標、ウィンドウ相対ではない）",
                    "desc_ko": "전역 마우스 Y (스크린 좌표, 윈도우 상대 좌표가 아님)",
                    "snippet": "getGlobalMouseY()"
                },
                {
                    "name": "getGlobalPMouseX",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get previous frame global mouse X",
                    "desc_ja": "前フレームのグローバルマウスX座標",
                    "desc_ko": "이전 프레임의 전역 마우스 X 좌표",
                    "snippet": "getGlobalPMouseX()"
                },
                {
                    "name": "getGlobalPMouseY",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get previous frame global mouse Y",
                    "desc_ja": "前フレームのグローバルマウスY座標",
                    "desc_ko": "이전 프레임의 전역 마우스 Y 좌표",
                    "snippet": "getGlobalPMouseY()"
                },
                {
                    "name": "getMouseButton",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get currently pressed mouse button",
                    "desc_ja": "現在押されているマウスボタンを取得",
                    "desc_ko": "현재 눌린 마우스 버튼을 얻음",
                    "snippet": "getMouseButton()"
                },
                {
                    "name": "setTouchAsMouse",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Enable/disable touch events firing as mouse events (for Android/iOS)",
                    "desc_ja": "タッチイベントをマウスイベントとして発火させるか設定（Android/iOS用）",
                    "desc_ko": "터치 이벤트를 마우스 이벤트로 발생시킬지 설정 (Android/iOS용)",
                    "snippet": "setTouchAsMouse(${1:true})"
                },
                {
                    "name": "getTouchAsMouse",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get touchAsMouse state",
                    "desc_ja": "touchAsMouseの状態を取得",
                    "desc_ko": "touchAsMouse 상태를 얻음",
                    "snippet": "getTouchAsMouse()"
                },
                {
                    "name": "isMousePressed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Is mouse button pressed",
                    "desc_ja": "マウスボタンが押されているか",
                    "desc_ko": "마우스 버튼이 눌려 있는지",
                    "snippet": "isMousePressed()"
                },
                {
                    "name": "isKeyPressed",
                    "params": "key",
                    "params_typed": "int key",
                    "return_type": "bool",
                    "desc": "Is specific key currently pressed",
                    "desc_ja": "指定キーが押されているか",
                    "desc_ko": "지정한 키가 현재 눌려 있는지",
                    "snippet": "isKeyPressed(${1:key})"
                },
                {
                    "name": "showCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Show the mouse cursor (default)",
                    "desc_ja": "マウスカーソルを表示（デフォルト）",
                    "desc_ko": "마우스 커서를 표시 (기본값)",
                    "snippet": "showCursor()"
                },
                {
                    "name": "hideCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Hide the mouse cursor",
                    "desc_ja": "マウスカーソルを隠す",
                    "desc_ko": "마우스 커서를 숨김",
                    "snippet": "hideCursor()"
                },
                {
                    "name": "setCursor",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Set the mouse cursor shape",
                    "desc_ja": "マウスカーソルの形状を設定",
                    "desc_ko": "마우스 커서 모양을 설정",
                    "snippet": "setCursor(${1:Cursor::Hand})"
                },
                {
                    "name": "getCursor",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Cursor",
                    "desc": "Get the current mouse cursor shape",
                    "desc_ja": "現在のマウスカーソル形状を取得",
                    "desc_ko": "현재 마우스 커서 모양을 얻음",
                    "snippet": "getCursor()"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, width, height, pixels, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, int width, int height, const unsigned char* pixels, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)",
                    "desc_ja": "カスタム画像をカーソルスロットにバインド（RGBAピクセルまたはImage）",
                    "desc_ko": "커서 슬롯에 커스텀 이미지를 바인딩 (RGBA 픽셀 또는 Image)",
                    "snippet": "bindCursorImage(${1:Cursor::Custom0}, ${2:image})"
                },
                {
                    "name": "bindCursorImage",
                    "params": "cursor, image, hotspotX, hotspotY",
                    "params_typed": "Cursor cursor, const Image& image, int hotspotX = 0, int hotspotY = 0",
                    "return_type": "void",
                    "desc": "Bind a custom image to a cursor slot (RGBA pixels or Image)",
                    "desc_ja": "カスタム画像をカーソルスロットにバインド（RGBAピクセルまたはImage）",
                    "desc_ko": "커서 슬롯에 커스텀 이미지를 바인딩 (RGBA 픽셀 또는 Image)",
                    "snippet": "bindCursorImage(${1:Cursor::Custom0}, ${2:image})"
                },
                {
                    "name": "unbindCursorImage",
                    "params": "cursor",
                    "params_typed": "Cursor cursor",
                    "return_type": "void",
                    "desc": "Unbind a custom cursor image, restoring the system default",
                    "desc_ja": "カスタムカーソル画像を解除し、システムデフォルトに戻す",
                    "desc_ko": "커스텀 커서 이미지를 해제하고 시스템 기본값으로 복원",
                    "snippet": "unbindCursorImage(${1:Cursor::Custom0})"
                }
            ]
        },
        {
            "name": "Time - Frame",
            "name_ja": "時間 - フレーム",
            "name_ko": "시간 - 프레임",
            "functions": [
                {
                    "name": "getDeltaTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Seconds since last frame",
                    "desc_ja": "前フレームからの経過秒数",
                    "desc_ko": "이전 프레임으로부터의 경과 시간(초)",
                    "snippet": "getDeltaTime()"
                },
                {
                    "name": "getFrameRate",
                    "params": "",
                    "params_typed": "",
                    "return_type": "double",
                    "desc": "Current FPS",
                    "desc_ja": "現在のFPS",
                    "desc_ko": "현재 FPS",
                    "snippet": "getFrameRate()"
                },
                {
                    "name": "getFps",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current FPS (alias for getFrameRate)",
                    "desc_ja": "現在のFPSを取得（getFrameRateのエイリアス）",
                    "desc_ko": "현재 FPS를 얻음 (getFrameRate의 별칭)",
                    "snippet": "getFps()"
                },
                {
                    "name": "getFrameCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Total frames rendered",
                    "desc_ja": "描画されたフレーム数",
                    "desc_ko": "렌더링된 총 프레임 수",
                    "snippet": "getFrameCount()"
                }
            ]
        },
        {
            "name": "Memory",
            "name_ja": "メモリ",
            "name_ko": "메모리",
            "functions": [
                {
                    "name": "getSokolMemoryBytes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Total bytes allocated by sokol libraries",
                    "desc_ja": "sokolライブラリの総メモリ使用量（バイト）",
                    "desc_ko": "sokol 라이브러리로부터 할단된 총 바이트",
                    "snippet": "getSokolMemoryBytes()"
                },
                {
                    "name": "getSokolMemoryAllocs",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Number of active allocations in sokol libraries",
                    "desc_ja": "sokolライブラリのアクティブなアロケーション数",
                    "desc_ko": "sokol 라이브러리의 활성 할당 개수",
                    "snippet": "getSokolMemoryAllocs()"
                },
                {
                    "name": "releaseSglBuffers",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Release sokol_gl vertex/command buffers (auto re-allocated on next draw)",
                    "desc_ja": "sokol_glのバッファを解放（次の描画時に自動再確保）",
                    "desc_ko": "sokol_gl의 정점/커맨드 버퍼를 해제 (다음 드로우 시 자동 재할당)",
                    "snippet": "releaseSglBuffers()"
                },
                {
                    "name": "getMemoryUsage",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get process memory usage in bytes (platform-specific)",
                    "desc_ja": "プロセスのメモリ使用量をバイトで取得（プラットフォーム固有）",
                    "desc_ko": "프로세스의 메모리 사용량을 바이트로 얻음 (플랫폼-고유)",
                    "snippet": "getMemoryUsage()"
                },
                {
                    "name": "getFboCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active FBO objects",
                    "desc_ja": "アクティブなFBOオブジェクト数を取得",
                    "desc_ko": "활성 FBO 객체 개수를 얻음",
                    "snippet": "getFboCount()"
                },
                {
                    "name": "getTextureCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active Texture objects",
                    "desc_ja": "アクティブなTextureオブジェクト数を取得",
                    "desc_ko": "활성 Texture 객체 개수를 얻음",
                    "snippet": "getTextureCount()"
                },
                {
                    "name": "getNodeCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "size_t",
                    "desc": "Get number of active Node objects in scene graph",
                    "desc_ja": "シーングラフ内のアクティブなNodeオブジェクト数を取得",
                    "desc_ko": "씬 그래프의 활성 Node 객체 개수를 얻음",
                    "snippet": "getNodeCount()"
                }
            ]
        },
        {
            "name": "Platform",
            "name_ja": "プラットフォーム",
            "name_ko": "플랫폼",
            "functions": [
                {
                    "name": "Platform::isWeb",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Web (Emscripten / WASM)",
                    "desc_ja": "Web (Emscripten / WASM) で true",
                    "desc_ko": "Web (Emscripten / WASM)에서 true",
                    "snippet": "Platform::isWeb()"
                },
                {
                    "name": "Platform::isMacOS",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on macOS",
                    "desc_ja": "macOSで true",
                    "desc_ko": "macOS에서 true",
                    "snippet": "Platform::isMacOS()"
                },
                {
                    "name": "Platform::isIOS",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on iOS",
                    "desc_ja": "iOSで true",
                    "desc_ko": "iOS에서 true",
                    "snippet": "Platform::isIOS()"
                },
                {
                    "name": "Platform::isWindows",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Windows",
                    "desc_ja": "Windowsで true",
                    "desc_ko": "Windows에서 true",
                    "snippet": "Platform::isWindows()"
                },
                {
                    "name": "Platform::isAndroid",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Android",
                    "desc_ja": "Androidで true",
                    "desc_ko": "Android에서 true",
                    "snippet": "Platform::isAndroid()"
                },
                {
                    "name": "Platform::isLinux",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on Linux (desktop, excludes Android)",
                    "desc_ja": "Linux (デスクトップ、Android除く) で true",
                    "desc_ko": "Linux (데스크톱, Android 제외)에서 true",
                    "snippet": "Platform::isLinux()"
                },
                {
                    "name": "Platform::isApple",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on any Apple platform (macOS or iOS)",
                    "desc_ja": "Apple系 (macOS または iOS) で true",
                    "desc_ko": "Apple 플랫폼 (macOS 또는 iOS)에서 true",
                    "snippet": "Platform::isApple()"
                },
                {
                    "name": "Platform::isMobile",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on mobile (iOS or Android)",
                    "desc_ja": "モバイル (iOS または Android) で true",
                    "desc_ko": "모바일 (iOS 또는 Android)에서 true",
                    "snippet": "Platform::isMobile()"
                },
                {
                    "name": "Platform::isDesktop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True on desktop (macOS, Windows, or Linux)",
                    "desc_ja": "デスクトップ (macOS, Windows, Linux) で true",
                    "desc_ko": "데스크톱 (macOS, Windows, Linux)에서 true",
                    "snippet": "Platform::isDesktop()"
                },
                {
                    "name": "Platform::name",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short platform name: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "desc_ja": "短いプラットフォーム名: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "desc_ko": "짧은 플랫폼 이름: \"web\" / \"macos\" / \"ios\" / \"windows\" / \"android\" / \"linux\" / \"unknown\"",
                    "snippet": "Platform::name()"
                }
            ]
        },
        {
            "name": "Graphics Backend",
            "name_ja": "グラフィックスバックエンド",
            "name_ko": "그래픽스 백엔드",
            "functions": [
                {
                    "name": "GraphicsBackend::isOpenGL",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on OpenGL (core or GLES3)",
                    "desc_ja": "OpenGL (coreまたはGLES3) で動作中なら true",
                    "desc_ko": "OpenGL (core 또는 GLES3)에서 실행 중이면 true",
                    "snippet": "GraphicsBackend::isOpenGL()"
                },
                {
                    "name": "GraphicsBackend::isMetal",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Apple Metal",
                    "desc_ja": "Apple Metalで動作中なら true",
                    "desc_ko": "Apple Metal에서 실행 중이면 true",
                    "snippet": "GraphicsBackend::isMetal()"
                },
                {
                    "name": "GraphicsBackend::isD3D11",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Direct3D 11",
                    "desc_ja": "Direct3D 11で動作中なら true",
                    "desc_ko": "Direct3D 11에서 실행 중이면 true",
                    "snippet": "GraphicsBackend::isD3D11()"
                },
                {
                    "name": "GraphicsBackend::isWebGPU",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGPU",
                    "desc_ja": "WebGPUで動作中なら true",
                    "desc_ko": "WebGPU에서 실행 중이면 true",
                    "snippet": "GraphicsBackend::isWebGPU()"
                },
                {
                    "name": "GraphicsBackend::isWebGL2",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on WebGL2 (GLES3 under Emscripten)",
                    "desc_ja": "WebGL2 (EmscriptenのGLES3) で動作中なら true",
                    "desc_ko": "WebGL2 (Emscripten의 GLES3)에서 실행 중이면 true",
                    "snippet": "GraphicsBackend::isWebGL2()"
                },
                {
                    "name": "GraphicsBackend::isVulkan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "True when running on Vulkan",
                    "desc_ja": "Vulkanで動作中なら true",
                    "desc_ko": "Vulkan에서 실행 중이면 true",
                    "snippet": "GraphicsBackend::isVulkan()"
                },
                {
                    "name": "GraphicsBackend::name",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Short backend name: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "desc_ja": "短いバックエンド名: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "desc_ko": "짧은 백엔드 이름: \"opengl\" / \"gles3\" / \"webgl2\" / \"d3d11\" / \"metal\" / \"webgpu\" / \"vulkan\" / \"dummy\" / \"unknown\"",
                    "snippet": "GraphicsBackend::name()"
                }
            ]
        },
        {
            "name": "Build Info",
            "name_ja": "ビルド情報",
            "name_ko": "빌드 정보",
            "functions": [
                {
                    "name": "BuildInfo::date",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date in \"YYYY-MM-DD\" form (local time, CMake configure time)",
                    "desc_ja": "ビルド日 \"YYYY-MM-DD\" 形式 (ローカル時刻、CMake configure 時点)",
                    "desc_ko": "빌드 날짜 \"YYYY-MM-DD\" 형식 (로컬 시간, CMake 구성 시점)",
                    "snippet": "BuildInfo::date()"
                },
                {
                    "name": "BuildInfo::time",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build time in \"HH:MM:SS\" form (local time)",
                    "desc_ja": "ビルド時刻 \"HH:MM:SS\" 形式 (ローカル時刻)",
                    "desc_ko": "빌드 시간 \"HH:MM:SS\" 형식 (로컬 시간)",
                    "snippet": "BuildInfo::time()"
                },
                {
                    "name": "BuildInfo::dateTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "const char*",
                    "desc": "Build date-time in \"YYYY-MM-DD HH:MM:SS\" form (local time)",
                    "desc_ja": "ビルド日時 \"YYYY-MM-DD HH:MM:SS\" 形式 (ローカル時刻)",
                    "desc_ko": "빌드 날짜와 시간 \"YYYY-MM-DD HH:MM:SS\" 형식 (로컬 시간)",
                    "snippet": "BuildInfo::dateTime()"
                },
                {
                    "name": "BuildInfo::timestamp",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int64_t",
                    "desc": "Build timestamp as Unix seconds (UTC)",
                    "desc_ja": "ビルド時刻のUnix秒 (UTC)",
                    "desc_ko": "빌드 타임스탬프 Unix 초 (UTC)",
                    "snippet": "BuildInfo::timestamp()"
                },
                {
                    "name": "BuildInfo::year",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build year (e.g. 2026)",
                    "desc_ja": "ビルド年 (例: 2026)",
                    "desc_ko": "빌드 연도 (예: 2026)",
                    "snippet": "BuildInfo::year()"
                },
                {
                    "name": "BuildInfo::month",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build month (1-12)",
                    "desc_ja": "ビルド月 (1-12)",
                    "desc_ko": "빌드 월 (1-12)",
                    "snippet": "BuildInfo::month()"
                },
                {
                    "name": "BuildInfo::day",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build day of month (1-31)",
                    "desc_ja": "ビルド日 (1-31)",
                    "desc_ko": "빌드 일 (1-31)",
                    "snippet": "BuildInfo::day()"
                },
                {
                    "name": "BuildInfo::hour",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build hour (0-23)",
                    "desc_ja": "ビルド時 (0-23)",
                    "desc_ko": "빌드 시 (0-23)",
                    "snippet": "BuildInfo::hour()"
                },
                {
                    "name": "BuildInfo::minute",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build minute (0-59)",
                    "desc_ja": "ビルド分 (0-59)",
                    "desc_ko": "빌드 분 (0-59)",
                    "snippet": "BuildInfo::minute()"
                },
                {
                    "name": "BuildInfo::second",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Build second (0-59)",
                    "desc_ja": "ビルド秒 (0-59)",
                    "desc_ko": "빌드 초 (0-59)",
                    "snippet": "BuildInfo::second()"
                }
            ]
        },
        {
            "name": "Time - Elapsed",
            "name_ja": "時間 - 経過",
            "name_ko": "시간 - 경과",
            "functions": [
                {
                    "name": "getElapsedTimef",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Elapsed seconds (float)",
                    "desc_ja": "経過秒数（float）",
                    "desc_ko": "경과 시간(초, float)",
                    "snippet": "getElapsedTimef()"
                },
                {
                    "name": "getElapsedTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Elapsed seconds (alias for getElapsedTimef)",
                    "desc_ja": "経過秒数（getElapsedTimefのエイリアス）",
                    "desc_ko": "경과 시간(초, getElapsedTimef의 별칭)",
                    "snippet": "getElapsedTime()"
                },
                {
                    "name": "getElapsedTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed milliseconds (int64)",
                    "desc_ja": "経過ミリ秒（int64）",
                    "desc_ko": "경과 시간(밀리초, int64)",
                    "snippet": "getElapsedTimeMillis()"
                },
                {
                    "name": "getElapsedTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Elapsed microseconds (int64)",
                    "desc_ja": "経過マイクロ秒（int64）",
                    "desc_ko": "경과 시간(마이크로초, int64)",
                    "snippet": "getElapsedTimeMicros()"
                },
                {
                    "name": "resetElapsedTimeCounter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset elapsed time",
                    "desc_ja": "経過時間をリセット",
                    "desc_ko": "경과 시간을 초기화",
                    "snippet": "resetElapsedTimeCounter()"
                }
            ]
        },
        {
            "name": "Time - System",
            "name_ja": "時間 - システム",
            "name_ko": "시간 - 시스템",
            "functions": [
                {
                    "name": "getSystemTimeMillis",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in milliseconds",
                    "desc_ja": "Unix時間（ミリ秒）",
                    "desc_ko": "Unix 시간(밀리초)",
                    "snippet": "getSystemTimeMillis()"
                },
                {
                    "name": "getSystemTimeMicros",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Unix time in microseconds",
                    "desc_ja": "Unix時間（マイクロ秒）",
                    "desc_ko": "Unix 시간(마이크로초)",
                    "snippet": "getSystemTimeMicros()"
                },
                {
                    "name": "getUnixTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint64_t",
                    "desc": "Current Unix timestamp in seconds",
                    "desc_ja": "現在のUnixタイムスタンプ（秒）",
                    "desc_ko": "현재 Unix 타임스탬프(초)",
                    "snippet": "getUnixTime()"
                },
                {
                    "name": "getTimestampString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "desc_ja": "フォーマット済みタイムスタンプ",
                    "desc_ko": "포맷된 타임스탬프",
                    "snippet": "getTimestampString()"
                },
                {
                    "name": "getTimestampString",
                    "params": "format",
                    "params_typed": "const string& format",
                    "return_type": "string",
                    "desc": "Formatted timestamp",
                    "desc_ja": "フォーマット済みタイムスタンプ",
                    "desc_ko": "포맷된 타임스탬프",
                    "snippet": "getTimestampString()"
                }
            ]
        },
        {
            "name": "Time - Current",
            "name_ja": "時間 - 現在",
            "name_ko": "시간 - 현재",
            "functions": [
                {
                    "name": "getSeconds",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current seconds (0-59)",
                    "desc_ja": "現在の秒 (0-59)",
                    "desc_ko": "현재 초 (0-59)",
                    "snippet": "getSeconds()"
                },
                {
                    "name": "getMinutes",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current minutes (0-59)",
                    "desc_ja": "現在の分 (0-59)",
                    "desc_ko": "현재 분 (0-59)",
                    "snippet": "getMinutes()"
                },
                {
                    "name": "getHours",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current hours (0-23)",
                    "desc_ja": "現在の時 (0-23)",
                    "desc_ko": "현재 시 (0-23)",
                    "snippet": "getHours()"
                },
                {
                    "name": "getYear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current year",
                    "desc_ja": "現在の年",
                    "desc_ko": "현재 연도",
                    "snippet": "getYear()"
                },
                {
                    "name": "getMonth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current month (1-12)",
                    "desc_ja": "現在の月 (1-12)",
                    "desc_ko": "현재 월 (1-12)",
                    "snippet": "getMonth()"
                },
                {
                    "name": "getDay",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Current day (1-31)",
                    "desc_ja": "現在の日 (1-31)",
                    "desc_ko": "현재 일 (1-31)",
                    "snippet": "getDay()"
                },
                {
                    "name": "getWeekday",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Weekday (0=Sun, 6=Sat)",
                    "desc_ja": "曜日 (0=日, 6=土)",
                    "desc_ko": "요일 (0=일, 6=토)",
                    "snippet": "getWeekday()"
                }
            ]
        },
        {
            "name": "Math - Random & Noise",
            "name_ja": "数学 - 乱数とノイズ",
            "name_ko": "수학 - 난수 & 노이즈",
            "functions": [
                {
                    "name": "random",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Random number",
                    "desc_ja": "乱数",
                    "desc_ko": "난수",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "max",
                    "params_typed": "float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "desc_ja": "乱数",
                    "desc_ko": "난수",
                    "snippet": "random()"
                },
                {
                    "name": "random",
                    "params": "min, max",
                    "params_typed": "float min, float max",
                    "return_type": "float",
                    "desc": "Random number",
                    "desc_ja": "乱数",
                    "desc_ko": "난수",
                    "snippet": "random()"
                },
                {
                    "name": "randomInt",
                    "params": "max",
                    "params_typed": "int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "desc_ja": "整数の乱数",
                    "desc_ko": "정수 난수",
                    "snippet": "randomInt(${1:max})"
                },
                {
                    "name": "randomInt",
                    "params": "min, max",
                    "params_typed": "int min, int max",
                    "return_type": "int",
                    "desc": "Random integer",
                    "desc_ja": "整数の乱数",
                    "desc_ko": "정수 난수",
                    "snippet": "randomInt(${1:max})"
                },
                {
                    "name": "randomSeed",
                    "params": "seed",
                    "params_typed": "unsigned int seed",
                    "return_type": "void",
                    "desc": "Set random seed",
                    "desc_ja": "乱数シードを設定",
                    "desc_ko": "난수 시드를 설정",
                    "snippet": "randomSeed(${1:seed})"
                },
                {
                    "name": "noise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "desc_ja": "パーリンノイズ",
                    "desc_ko": "Perlin 노이즈",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "desc_ja": "パーリンノイズ",
                    "desc_ko": "Perlin 노이즈",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "noise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise",
                    "desc_ja": "パーリンノイズ",
                    "desc_ko": "Perlin 노이즈",
                    "snippet": "noise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "signedNoise",
                    "params": "x, y, z, w",
                    "params_typed": "float x, float y, float z, float w",
                    "return_type": "float",
                    "desc": "Perlin noise (-1.0 to 1.0)",
                    "desc_ja": "パーリンノイズ (-1.0〜1.0)",
                    "desc_ko": "Perlin 노이즈 (-1.0~1.0)",
                    "snippet": "signedNoise(${1:x})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "desc_ja": "フラクタルノイズ",
                    "desc_ko": "Fractal Brownian Motion 노이즈",
                    "snippet": "fbm(${1:x}, ${2:y})"
                },
                {
                    "name": "fbm",
                    "params": "x, y, z, octaves, lacunarity, gain",
                    "params_typed": "float x, float y, float z, int octaves = 4, float lacunarity = 2.0, float gain = 0.5",
                    "return_type": "float",
                    "desc": "Fractal Brownian Motion noise",
                    "desc_ja": "フラクタルノイズ",
                    "desc_ko": "Fractal Brownian Motion 노이즈",
                    "snippet": "fbm(${1:x}, ${2:y})"
                }
            ]
        },
        {
            "name": "Math - Interpolation",
            "name_ja": "数学 - 補間",
            "name_ko": "수학 - 보간",
            "functions": [
                {
                    "name": "lerp",
                    "params": "a, b, t",
                    "params_typed": "float a, float b, float t",
                    "return_type": "float",
                    "desc": "Linear interpolation",
                    "desc_ja": "線形補間",
                    "desc_ko": "선형 보간",
                    "snippet": "lerp(${1:a}, ${2:b}, ${3:t})"
                },
                {
                    "name": "clamp",
                    "params": "v, min, max",
                    "params_typed": "float v, float min, float max",
                    "return_type": "float",
                    "desc": "Clamp value to range",
                    "desc_ja": "値を範囲に制限",
                    "desc_ko": "값을 범위 내로 제한",
                    "snippet": "clamp(${1:v}, ${2:min}, ${3:max})"
                },
                {
                    "name": "remap",
                    "params": "v, inMin, inMax, outMin, outMax",
                    "params_typed": "float v, float inMin, float inMax, float outMin, float outMax",
                    "return_type": "float",
                    "desc": "Remap value from one range to another",
                    "desc_ja": "値を範囲間でリマッピング",
                    "desc_ko": "값을 한 범위에서 다른 범위로 리매핑",
                    "snippet": "remap(${1:v}, ${2:inMin}, ${3:inMax}, ${4:outMin}, ${5:outMax})"
                }
            ]
        },
        {
            "name": "Math - Trigonometry",
            "name_ja": "数学 - 三角関数",
            "name_ko": "수학 - 삼각함수",
            "functions": [
                {
                    "name": "sin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sine",
                    "desc_ja": "正弦",
                    "desc_ko": "사인",
                    "snippet": "sin(${1:x})"
                },
                {
                    "name": "cos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Cosine",
                    "desc_ja": "余弦",
                    "desc_ko": "코사인",
                    "snippet": "cos(${1:x})"
                },
                {
                    "name": "tan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Tangent",
                    "desc_ja": "正接",
                    "desc_ko": "탄젠트",
                    "snippet": "tan(${1:x})"
                },
                {
                    "name": "asin",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc sine",
                    "desc_ja": "逆正弦",
                    "desc_ko": "역-사인",
                    "snippet": "asin(${1:x})"
                },
                {
                    "name": "acos",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc cosine",
                    "desc_ja": "逆余弦",
                    "desc_ko": "역-코사인",
                    "snippet": "acos(${1:x})"
                },
                {
                    "name": "atan",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Arc tangent",
                    "desc_ja": "逆正接",
                    "desc_ko": "역-탄젠트",
                    "snippet": "atan(${1:x})"
                },
                {
                    "name": "atan2",
                    "params": "y, x",
                    "params_typed": "float y, float x",
                    "return_type": "float",
                    "desc": "Arc tangent of y/x",
                    "desc_ja": "y/xの逆正接",
                    "desc_ko": "y/x의 역-탄젠트",
                    "snippet": "atan2(${1:y}, ${2:x})"
                },
                {
                    "name": "deg2rad",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "float",
                    "desc": "Degrees to radians",
                    "desc_ja": "度からラジアンへ",
                    "desc_ko": "도(degree)를 라디안으로 변환",
                    "snippet": "deg2rad(${1:degrees})"
                },
                {
                    "name": "rad2deg",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "float",
                    "desc": "Radians to degrees",
                    "desc_ja": "ラジアンから度へ",
                    "desc_ko": "라디안을 도(degree)로 변환",
                    "snippet": "rad2deg(${1:radians})"
                }
            ]
        },
        {
            "name": "Math - General",
            "name_ja": "数学 - 一般",
            "name_ko": "수학 - 일반",
            "functions": [
                {
                    "name": "abs",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Absolute value",
                    "desc_ja": "絶対値",
                    "desc_ko": "절댓값",
                    "snippet": "abs(${1:x})"
                },
                {
                    "name": "sqrt",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square root",
                    "desc_ja": "平方根",
                    "desc_ko": "제곱근",
                    "snippet": "sqrt(${1:x})"
                },
                {
                    "name": "sq",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Square (x*x)",
                    "desc_ja": "二乗 (x*x)",
                    "desc_ko": "제곱 (x*x)",
                    "snippet": "sq(${1:x})"
                },
                {
                    "name": "pow",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Power (x^y)",
                    "desc_ja": "累乗 (x^y)",
                    "desc_ko": "거듭제곱 (x^y)",
                    "snippet": "pow(${1:x}, ${2:y})"
                },
                {
                    "name": "log",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Natural logarithm",
                    "desc_ja": "自然対数",
                    "desc_ko": "자연로그",
                    "snippet": "log(${1:x})"
                },
                {
                    "name": "exp",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Exponential (e^x)",
                    "desc_ja": "指数関数 (e^x)",
                    "desc_ko": "지수함수 (e^x)",
                    "snippet": "exp(${1:x})"
                },
                {
                    "name": "min",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Minimum",
                    "desc_ja": "最小値",
                    "desc_ko": "최솟값",
                    "snippet": "min(${1:a}, ${2:b})"
                },
                {
                    "name": "max",
                    "params": "a, b",
                    "params_typed": "float a, float b",
                    "return_type": "float",
                    "desc": "Maximum",
                    "desc_ja": "最大値",
                    "desc_ko": "최댓값",
                    "snippet": "max(${1:a}, ${2:b})"
                },
                {
                    "name": "floor",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round down",
                    "desc_ja": "切り捨て",
                    "desc_ko": "내림",
                    "snippet": "floor(${1:x})"
                },
                {
                    "name": "ceil",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round up",
                    "desc_ja": "切り上げ",
                    "desc_ko": "올림",
                    "snippet": "ceil(${1:x})"
                },
                {
                    "name": "round",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Round to nearest",
                    "desc_ja": "四捨五入",
                    "desc_ko": "반올림",
                    "snippet": "round(${1:x})"
                },
                {
                    "name": "fmod",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "float",
                    "desc": "Floating-point modulo",
                    "desc_ja": "浮動小数点剰余",
                    "desc_ko": "부동소수점 나머지",
                    "snippet": "fmod(${1:x}, ${2:y})"
                },
                {
                    "name": "sign",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Sign (-1, 0, 1)",
                    "desc_ja": "符号 (-1, 0, 1)",
                    "desc_ko": "부호 (-1, 0, 1)",
                    "snippet": "sign(${1:x})"
                },
                {
                    "name": "fract",
                    "params": "x",
                    "params_typed": "float x",
                    "return_type": "float",
                    "desc": "Fractional part",
                    "desc_ja": "小数部",
                    "desc_ko": "소수부",
                    "snippet": "fract(${1:x})"
                },
                {
                    "name": "wrap",
                    "params": "value, min, max",
                    "params_typed": "float value, float min, float max",
                    "return_type": "float",
                    "desc": "Wrap value within range [min, max)",
                    "desc_ja": "値を範囲内にラップ [min, max)",
                    "desc_ko": "값을 [min, max) 범위 안으로 랩핑",
                    "snippet": "wrap(${1:value}, ${2:min}, ${3:max})"
                },
                {
                    "name": "angleDifference",
                    "params": "angle1, angle2",
                    "params_typed": "float angle1, float angle2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in radians [-TAU/2, TAU/2]",
                    "desc_ja": "最短角度差（ラジアン）[-TAU/2, TAU/2]",
                    "desc_ko": "최단 각도 차이(라디안) [-TAU/2, TAU/2]",
                    "snippet": "angleDifference(${1:angle1}, ${2:angle2})"
                },
                {
                    "name": "angleDifferenceDeg",
                    "params": "deg1, deg2",
                    "params_typed": "float deg1, float deg2",
                    "return_type": "float",
                    "desc": "Shortest angle difference in degrees [-180, 180]",
                    "desc_ja": "最短角度差（度）[-180, 180]",
                    "desc_ko": "최단 각도 차이(도) [-180, 180]",
                    "snippet": "angleDifferenceDeg(${1:deg1}, ${2:deg2})"
                }
            ]
        },
        {
            "name": "Math - Geometry",
            "name_ja": "数学 - 幾何",
            "name_ko": "수학 - 기하학",
            "functions": [
                {
                    "name": "dist",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Distance between points",
                    "desc_ja": "2点間の距離",
                    "desc_ko": "두 점 사이의 거리",
                    "snippet": "dist(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                },
                {
                    "name": "distSquared",
                    "params": "x1, y1, x2, y2",
                    "params_typed": "float x1, float y1, float x2, float y2",
                    "return_type": "float",
                    "desc": "Squared distance",
                    "desc_ja": "距離の二乗",
                    "desc_ko": "거리의 제곱",
                    "snippet": "distSquared(${1:x1}, ${2:y1}, ${3:x2}, ${4:y2})"
                }
            ]
        },
        {
            "name": "Window & System",
            "name_ja": "ウィンドウとシステム",
            "name_ko": "윈도우 & 시스템",
            "functions": [
                {
                    "name": "setWindowTitle",
                    "params": "title",
                    "params_typed": "const string& title",
                    "return_type": "void",
                    "desc": "Set window title",
                    "desc_ja": "ウィンドウのタイトルを設定",
                    "desc_ko": "윈도우 제목을 설정",
                    "snippet": "setWindowTitle(${1:\"title\"})"
                },
                {
                    "name": "setWindowSize",
                    "params": "width, height",
                    "params_typed": "int width, int height",
                    "return_type": "void",
                    "desc": "Set window size",
                    "desc_ja": "ウィンドウのサイズを設定",
                    "desc_ko": "윈도우 크기를 설정",
                    "snippet": "setWindowSize(${1:800}, ${2:600})"
                },
                {
                    "name": "getWindowPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "IVec2",
                    "desc": "Get window position in screen coordinates (top-left origin). macOS/Windows only; other platforms return (-1, -1)",
                    "desc_ja": "スクリーン座標でのウィンドウ位置を取得（左上原点）。macOS/Windowsのみ対応、他は(-1, -1)を返す",
                    "desc_ko": "윈도우 위치를 스크린 좌표(좌상단 원점)로 얻음. macOS/Windows만 지원, 그 외 플랫폼은 (-1, -1) 반환",
                    "snippet": "getWindowPosition()"
                },
                {
                    "name": "setWindowPosition",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "void",
                    "desc": "Set window position in screen coordinates (top-left origin). macOS/Windows only; no-op on other platforms",
                    "desc_ja": "スクリーン座標でウィンドウ位置を設定（左上原点）。macOS/Windowsのみ対応、他はno-op",
                    "desc_ko": "윈도우 위치를 스크린 좌표(좌상단 원점)로 설정. macOS/Windows만 지원, 그 외 플랫폼은 동작하지 않음",
                    "snippet": "setWindowPosition(${1:100}, ${2:100})"
                },
                {
                    "name": "toggleFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle fullscreen mode",
                    "desc_ja": "フルスクリーンを切り替え",
                    "desc_ko": "전체 화면 모드 토글",
                    "snippet": "toggleFullscreen()"
                },
                {
                    "name": "setClipboardString",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "void",
                    "desc": "Copy text to clipboard",
                    "desc_ja": "クリップボードにコピー",
                    "desc_ko": "텍스트를 클립보드에 복사",
                    "snippet": "setClipboardString(${1:\"text\"})"
                },
                {
                    "name": "getClipboardString",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get text from clipboard",
                    "desc_ja": "クリップボードから取得",
                    "desc_ko": "클립보드에서 텍스트를 얻음",
                    "snippet": "getClipboardString()"
                },
                {
                    "name": "getDpiScale",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get display DPI scale factor (e.g. 2.0 for Retina)",
                    "desc_ja": "ディスプレイのDPIスケール係数を取得（Retinaなら2.0等）",
                    "desc_ko": "디스플레이 DPI 스케일 계수를 얻음 (Retina는 2.0 등)",
                    "snippet": "getDpiScale()"
                },
                {
                    "name": "getFramebufferWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get framebuffer width in pixels (window width * DPI scale)",
                    "desc_ja": "フレームバッファ幅をピクセルで取得（ウィンドウ幅 × DPIスケール）",
                    "desc_ko": "프레임버퍼 너비를 픽셀로 얻음 (윈도우 너비 × DPI 스케일)",
                    "snippet": "getFramebufferWidth()"
                },
                {
                    "name": "getFramebufferHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get framebuffer height in pixels (window height * DPI scale)",
                    "desc_ja": "フレームバッファ高さをピクセルで取得（ウィンドウ高さ × DPIスケール）",
                    "desc_ko": "프레임버퍼 높이를 픽셀로 얻음 (윈도우 높이 × DPI 스케일)",
                    "snippet": "getFramebufferHeight()"
                },
                {
                    "name": "getAspectRatio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get window aspect ratio (width / height)",
                    "desc_ja": "ウィンドウのアスペクト比を取得（幅 / 高さ）",
                    "desc_ko": "윈도우 종횡비를 얻음 (너비 / 높이)",
                    "snippet": "getAspectRatio()"
                },
                {
                    "name": "setOrientation",
                    "params": "mask",
                    "params_typed": "Orientation mask",
                    "return_type": "void",
                    "desc": "Set allowed screen orientations (mobile). Values: Orientation::Portrait, Landscape, All",
                    "desc_ja": "画面の向きを設定（モバイル用）。Orientation::Portrait, Landscape, All",
                    "desc_ko": "허용되는 화면 방향을 설정 (모바일). 값: Orientation::Portrait, Landscape, All",
                    "snippet": "setOrientation(${1:Orientation::All})"
                },
                {
                    "name": "setKeepScreenOn",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Prevent display sleep / auto-lock while the app is running. Supported: Android, iOS, macOS, Windows. Linux / Web: no-op",
                    "desc_ja": "アプリ実行中に画面スリープ/自動ロックを抑止。対応: Android, iOS, macOS, Windows。Linux / Web は no-op",
                    "desc_ko": "앱 실행 중 화면 절전/자동 잠금을 방지. 지원: Android, iOS, macOS, Windows. Linux / Web는 동작하지 않음",
                    "snippet": "setKeepScreenOn(${1:true})"
                },
                {
                    "name": "getKeepScreenOn",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check whether keep-screen-on is currently enabled",
                    "desc_ja": "現在 keep-screen-on が有効かどうかを取得",
                    "desc_ko": "현재 keep-screen-on이 활성화되어 있는지 확인",
                    "snippet": "getKeepScreenOn()"
                },
                {
                    "name": "setIndependentFps",
                    "params": "updateFps, drawFps",
                    "params_typed": "float updateFps, float drawFps",
                    "return_type": "void",
                    "desc": "Set independent update and draw frame rates",
                    "desc_ja": "updateとdrawのフレームレートを個別に設定",
                    "desc_ko": "update와 draw의 프레임레이트를 독립적으로 설정",
                    "snippet": "setIndependentFps(${1:60}, ${2:30})"
                },
                {
                    "name": "grabScreen",
                    "params": "outPixels",
                    "params_typed": "Pixels& outPixels",
                    "return_type": "bool",
                    "desc": "Capture current screen to Pixels",
                    "desc_ja": "現在の画面をPixelsにキャプチャ",
                    "desc_ko": "현재 화면을 Pixels에 캡처",
                    "snippet": "grabScreen(${1:pixels})"
                },
                {
                    "name": "isFullscreen",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if window is fullscreen",
                    "desc_ja": "フルスクリーンかどうか確認",
                    "desc_ko": "윈도우가 전체 화면인지 확인",
                    "snippet": "isFullscreen()"
                },
                {
                    "name": "setFullscreen",
                    "params": "fullscreen",
                    "params_typed": "bool fullscreen",
                    "return_type": "void",
                    "desc": "Set fullscreen mode",
                    "desc_ja": "フルスクリーンを設定",
                    "desc_ko": "전체 화면 모드를 설정",
                    "snippet": "setFullscreen(${1:true})"
                },
                {
                    "name": "redraw",
                    "params": "count",
                    "params_typed": "int count = 1",
                    "return_type": "void",
                    "desc": "Request extra redraws (useful for event-driven rendering)",
                    "desc_ja": "追加の再描画を要求（イベント駆動レンダリング用）",
                    "desc_ko": "추가 다시그리기를 요청 (이벤트 기반 렌더링에 유용)",
                    "snippet": "redraw()"
                }
            ]
        },
        {
            "name": "Utility",
            "name_ja": "ユーティリティ",
            "name_ko": "유틸리티",
            "functions": [
                {
                    "name": "logNotice",
                    "params": "message",
                    "params_typed": "const string& message",
                    "return_type": "void",
                    "desc": "Print to console",
                    "desc_ja": "コンソールに出力",
                    "desc_ko": "콘솔에 출력",
                    "snippet": "logNotice(${1:\"message\"})"
                },
                {
                    "name": "toString",
                    "params": "value",
                    "params_typed": "value",
                    "return_type": "string",
                    "desc": "Convert to string",
                    "desc_ja": "文字列に変換",
                    "desc_ko": "문자열로 변환",
                    "snippet": "toString(${1:value})"
                },
                {
                    "name": "beep",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "desc_ja": "ビープ音を再生",
                    "desc_ko": "비프음 재생",
                    "snippet": "beep()"
                },
                {
                    "name": "beep",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "void",
                    "desc": "Play a beep sound",
                    "desc_ja": "ビープ音を再生",
                    "desc_ko": "비프음 재생",
                    "snippet": "beep()"
                },
                {
                    "name": "toInt",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "int",
                    "desc": "Convert string to int",
                    "desc_ja": "文字列を整数に変換",
                    "desc_ko": "문자열을 정수로 변환",
                    "snippet": "toInt(${1:str})"
                },
                {
                    "name": "toFloat",
                    "params": "str",
                    "params_typed": "const string& str",
                    "return_type": "float",
                    "desc": "Convert string to float",
                    "desc_ja": "文字列を浮動小数点数に変換",
                    "desc_ko": "문자열을 부동소수점으로 변환",
                    "snippet": "toFloat(${1:str})"
                },
                {
                    "name": "splitString",
                    "params": "source, delimiter",
                    "params_typed": "const string& source, const string& delimiter",
                    "return_type": "vector<string>",
                    "desc": "Split string by delimiter",
                    "desc_ja": "文字列をデリミタで分割",
                    "desc_ko": "구분자로 문자열을 분할",
                    "snippet": "splitString(${1:str}, ${2:delimiter})"
                },
                {
                    "name": "joinString",
                    "params": "elements, delimiter",
                    "params_typed": "const vector<string>& elements, const string& delimiter",
                    "return_type": "string",
                    "desc": "Join strings with delimiter",
                    "desc_ja": "文字列配列をデリミタで結合",
                    "desc_ko": "문자열 배열을 구분자로 결합",
                    "snippet": "joinString(${1:elements}, ${2:delimiter})"
                },
                {
                    "name": "stringReplace",
                    "params": "input, search, replace",
                    "params_typed": "string& input, const string& searchStr, const string& replaceStr",
                    "return_type": "void",
                    "desc": "Replace substring in place",
                    "desc_ja": "部分文字列を置換（直接変更）",
                    "desc_ko": "부분 문자열을 직접 치환",
                    "snippet": "stringReplace(${1:str}, ${2:search}, ${3:replace})"
                },
                {
                    "name": "toLower",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to lower case",
                    "desc_ja": "小文字に変換",
                    "desc_ko": "소문자로 변환",
                    "snippet": "toLower(${1:str})"
                },
                {
                    "name": "toUpper",
                    "params": "src",
                    "params_typed": "const string& src",
                    "return_type": "string",
                    "desc": "Convert to upper case",
                    "desc_ja": "大文字に変換",
                    "desc_ko": "대문자로 변환",
                    "snippet": "toUpper(${1:str})"
                },
                {
                    "name": "intersectRect",
                    "params": "x1, y1, w1, h1, x2, y2, w2, h2, ox, oy, ow, oh",
                    "params_typed": "float x1, float y1, float w1, float h1, float x2, float y2, float w2, float h2, float& ox, float& oy, float& ow, float& oh",
                    "return_type": "void",
                    "desc": "Compute intersection of two rectangles",
                    "desc_ja": "2つの矩形の交差部分を計算",
                    "desc_ko": "두 사각형의 교차 영역을 계산",
                    "snippet": "intersectRect(${1:x1}, ${2:y1}, ${3:w1}, ${4:h1}, ${5:x2}, ${6:y2}, ${7:w2}, ${8:h2}, ${9:ox}, ${10:oy}, ${11:ow}, ${12:oh})"
                }
            ]
        },
        {
            "name": "File",
            "name_ja": "ファイル",
            "name_ko": "파일",
            "functions": [
                {
                    "name": "getDataPath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get full path relative to data directory",
                    "desc_ja": "データディレクトリからの相対パスを取得",
                    "desc_ko": "데이터 디렉토리 기준의 전체 경로를 얻음",
                    "snippet": "getDataPath(${1:path})"
                },
                {
                    "name": "getAbsolutePath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get absolute path",
                    "desc_ja": "絶対パスを取得",
                    "desc_ko": "절대 경로를 얻음",
                    "snippet": "getAbsolutePath(${1:path})"
                },
                {
                    "name": "getFileName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename from path",
                    "desc_ja": "パスからファイル名を取得",
                    "desc_ko": "경로에서 파일명을 얻음",
                    "snippet": "getFileName(${1:path})"
                },
                {
                    "name": "getBaseName",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get filename without extension",
                    "desc_ja": "拡張子なしのファイル名を取得",
                    "desc_ko": "확장자를 제외한 파일명을 얻음",
                    "snippet": "getBaseName(${1:path})"
                },
                {
                    "name": "getFileExtension",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get file extension without dot",
                    "desc_ja": "拡張子を取得（ドットなし）",
                    "desc_ko": "파일 확장자를 얻음 (점 제외)",
                    "snippet": "getFileExtension(${1:path})"
                },
                {
                    "name": "getParentDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get parent directory",
                    "desc_ja": "親ディレクトリを取得",
                    "desc_ko": "부모 디렉토리를 얻음",
                    "snippet": "getParentDirectory(${1:path})"
                },
                {
                    "name": "joinPath",
                    "params": "dir, file",
                    "params_typed": "const string& dir, const string& file",
                    "return_type": "string",
                    "desc": "Join directory and filename",
                    "desc_ja": "ディレクトリとファイル名を結合",
                    "desc_ko": "디렉토리와 파일명을 결합",
                    "snippet": "joinPath(${1:dir}, ${2:file})"
                },
                {
                    "name": "getAbsolutePath",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Get absolute path",
                    "desc_ja": "絶対パスを取得",
                    "desc_ko": "절대 경로를 얻음",
                    "snippet": "getAbsolutePath(${1:path})"
                },
                {
                    "name": "fileExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if file exists",
                    "desc_ja": "ファイルが存在するか確認",
                    "desc_ko": "파일 존재 여부를 확인",
                    "snippet": "fileExists(${1:path})"
                },
                {
                    "name": "directoryExists",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Check if directory exists",
                    "desc_ja": "ディレクトリが存在するか確認",
                    "desc_ko": "디렉토리 존재 여부를 확인",
                    "snippet": "directoryExists(${1:path})"
                },
                {
                    "name": "createDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Create directory (and parents)",
                    "desc_ja": "ディレクトリを作成（親も含む）",
                    "desc_ko": "디렉토리를 생성 (상위 포함)",
                    "snippet": "createDirectory(${1:path})"
                },
                {
                    "name": "listDirectory",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "vector<string>",
                    "desc": "List files in directory",
                    "desc_ja": "ディレクトリ内のファイル一覧",
                    "desc_ko": "디렉토리 내 파일 목록",
                    "snippet": "listDirectory(${1:path})"
                },
                {
                    "name": "removeFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Remove file",
                    "desc_ja": "ファイルを削除",
                    "desc_ko": "파일을 삭제",
                    "snippet": "removeFile(${1:path})"
                },
                {
                    "name": "getFileSize",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "int64_t",
                    "desc": "Get file size in bytes",
                    "desc_ja": "ファイルサイズを取得（バイト）",
                    "desc_ko": "파일 크기를 바이트로 얻음",
                    "snippet": "getFileSize(${1:path})"
                },
                {
                    "name": "loadTextFile",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "string",
                    "desc": "Load entire text file",
                    "desc_ja": "テキストファイルを読み込む",
                    "desc_ko": "텍스트 파일 전체를 로드",
                    "snippet": "loadTextFile(${1:path})"
                },
                {
                    "name": "saveTextFile",
                    "params": "path, content",
                    "params_typed": "const string& path, const string& content",
                    "return_type": "bool",
                    "desc": "Save string to text file",
                    "desc_ja": "文字列をファイルに保存",
                    "desc_ko": "문자열을 텍스트 파일로 저장",
                    "snippet": "saveTextFile(${1:path}, ${2:content})"
                },
                {
                    "name": "appendToFile",
                    "params": "path, content",
                    "params_typed": "const string& path, const string& content",
                    "return_type": "bool",
                    "desc": "Append string to file",
                    "desc_ja": "ファイルに追記",
                    "desc_ko": "파일에 문자열을 추가",
                    "snippet": "appendToFile(${1:path}, ${2:content})"
                },
                {
                    "name": "createFileWriter",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FileWriter@",
                    "desc": "Create a file writer (TrussSketch factory)",
                    "desc_ja": "ファイルライターを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "파일 라이터를 생성 (TrussSketch 팩토리)",
                    "snippet": "FileWriter@ writer = createFileWriter();"
                },
                {
                    "name": "createFileReader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "FileReader@",
                    "desc": "Create a file reader (TrussSketch factory)",
                    "desc_ja": "ファイルリーダーを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "파일 리더를 생성 (TrussSketch 팩토리)",
                    "snippet": "FileReader@ reader = createFileReader();"
                }
            ]
        },
        {
            "name": "Sound",
            "name_ja": "サウンド",
            "name_ko": "사운드",
            "functions": [
                {
                    "name": "Sound",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a sound player",
                    "desc_ja": "サウンドプレイヤーを作成",
                    "desc_ko": "사운드 플레이어를 생성",
                    "snippet": "Sound()"
                },
                {
                    "name": "createSound",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Create a sound player (TrussSketch factory)",
                    "desc_ja": "サウンドプレイヤーを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "사운드 플레이어를 생성 (TrussSketch 팩토리)",
                    "snippet": "Sound@ snd = createSound();"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load sound file. Format auto-detected by extension: .wav .mp3 .ogg .flac .aac .m4a",
                    "desc_ja": "サウンドファイルを読み込む。拡張子で自動判別: .wav .mp3 .ogg .flac .aac .m4a",
                    "desc_ko": "사운드 파일을 로드. 확장자로 자동 판별: .wav .mp3 .ogg .flac .aac .m4a",
                    "snippet": "load(${1:\"sound.wav\"})"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Play sound",
                    "desc_ja": "再生",
                    "desc_ko": "사운드 재생",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop sound",
                    "desc_ja": "停止",
                    "desc_ko": "사운드 정지",
                    "snippet": "stop()"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set volume (0.0-1.0)",
                    "desc_ja": "音量を設定",
                    "desc_ko": "음량을 설정 (0.0-1.0)",
                    "snippet": "setVolume(${1:0.8})"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping",
                    "desc_ja": "ループ再生を設定",
                    "desc_ko": "반복 재생을 활성/비활성",
                    "snippet": "setLoop(${1:true})"
                }
            ]
        },
        {
            "name": "ChipSound",
            "name_ja": "チップサウンド",
            "name_ko": "칩사운드",
            "functions": [
                {
                    "name": "ChipSoundNote",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a chip sound note (8-bit style sound)",
                    "desc_ja": "チップサウンドノートを作成（8bitスタイルのサウンド）",
                    "desc_ko": "칩 사운드 노트를 생성 (8비트 스타일 사운드)",
                    "snippet": "ChipSoundNote note;"
                },
                {
                    "name": "wave",
                    "params": "type",
                    "params_typed": "Wave type",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set wave type (Sin, Square, Triangle, Sawtooth, Noise, PinkNoise)",
                    "desc_ja": "波形タイプを設定",
                    "desc_ko": "파형 타입을 설정 (Sin, Square, Triangle, Sawtooth, Noise, PinkNoise)",
                    "snippet": "wave(Wave::Square)"
                },
                {
                    "name": "hz",
                    "params": "frequency",
                    "params_typed": "float frequency",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set frequency in Hz",
                    "desc_ja": "周波数を設定（Hz）",
                    "desc_ko": "주파수를 Hz로 설정",
                    "snippet": "hz(${1:440})"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set note duration in seconds",
                    "desc_ja": "ノートの長さを設定（秒）",
                    "desc_ko": "노트 길이를 초 단위로 설정",
                    "snippet": "duration(${1:0.5})"
                },
                {
                    "name": "volume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set volume (0.0-1.0)",
                    "desc_ja": "音量を設定",
                    "desc_ko": "음량을 설정 (0.0-1.0)",
                    "snippet": "volume(${1:0.8})"
                },
                {
                    "name": "attack",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set attack time (ADSR envelope)",
                    "desc_ja": "アタック時間を設定",
                    "desc_ko": "어택 시간을 설정 (ADSR 엔벨로프)",
                    "snippet": "attack(${1:0.01})"
                },
                {
                    "name": "decay",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set decay time (ADSR envelope)",
                    "desc_ja": "ディケイ時間を設定",
                    "desc_ko": "디케이 시간을 설정 (ADSR 엔벨로프)",
                    "snippet": "decay(${1:0.1})"
                },
                {
                    "name": "sustain",
                    "params": "level",
                    "params_typed": "float level",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set sustain level (0.0-1.0)",
                    "desc_ja": "サスティンレベルを設定",
                    "desc_ko": "서스테인 레벨을 설정 (0.0-1.0)",
                    "snippet": "sustain(${1:0.7})"
                },
                {
                    "name": "release",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set release time (ADSR envelope)",
                    "desc_ja": "リリース時間を設定",
                    "desc_ko": "릴리스 시간을 설정 (ADSR 엔벨로프)",
                    "snippet": "release(${1:0.2})"
                },
                {
                    "name": "adsr",
                    "params": "a, d, s, r",
                    "params_typed": "float a, float d, float s, float r",
                    "return_type": "ChipSoundNote&",
                    "desc": "Set ADSR envelope (attack, decay, sustain, release)",
                    "desc_ja": "ADSRエンベロープを設定",
                    "desc_ko": "ADSR 엔벨로프 설정 (어택, 디케이, 서스테인, 릴리스)",
                    "snippet": "adsr(${1:0.01}, ${2:0.1}, ${3:0.7}, ${4:0.2})"
                },
                {
                    "name": "build",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Sound@",
                    "desc": "Build and return Sound object from note",
                    "desc_ja": "ノートからSoundオブジェクトを生成",
                    "desc_ko": "노트로부터 Sound 객체를 생성하여 반환",
                    "snippet": "build()"
                },
                {
                    "name": "createChipBundle",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle@",
                    "desc": "Create a chip sound bundle for sequencing multiple notes",
                    "desc_ja": "複数ノートのシーケンス用バンドルを作成",
                    "desc_ko": "여러 노트를 시퀀싱하기 위한 칩 사운드 번들을 생성",
                    "snippet": "ChipSoundBundle@ bundle = createChipBundle();"
                },
                {
                    "name": "add",
                    "params": "note, time",
                    "params_typed": "const ChipSoundNote& note, float time",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Add a note at specified time (seconds)",
                    "desc_ja": "指定時間にノートを追加",
                    "desc_ko": "지정한 시간(초)에 노트를 추가",
                    "snippet": "add(${1:note}, ${2:0.0})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ChipSoundBundle&",
                    "desc": "Clear all notes from bundle",
                    "desc_ja": "バンドル内の全ノートをクリア",
                    "desc_ko": "번들의 모든 노트를 지움",
                    "snippet": "clear()"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the total duration of the bundle",
                    "desc_ja": "バンドルの総再生時間を取得",
                    "desc_ko": "번들의 총 재생 시간을 얻음",
                    "snippet": "getDuration()"
                }
            ]
        },
        {
            "name": "Font",
            "name_ja": "フォント",
            "name_ko": "폰트",
            "functions": [
                {
                    "name": "createFont",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Font@",
                    "desc": "Create a TrueType font",
                    "desc_ja": "TrueTypeフォントを作成",
                    "desc_ko": "TrueType 폰트를 생성",
                    "snippet": "Font@ font = createFont();"
                },
                {
                    "name": "load",
                    "params": "path, size",
                    "params_typed": "const string& path, int size",
                    "return_type": "bool",
                    "desc": "Load TTF font file",
                    "desc_ja": "TTFフォントを読み込む",
                    "desc_ko": "TTF 폰트 파일을 로드",
                    "snippet": "load(FONT_SANS, ${1:24})"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if font is loaded",
                    "desc_ja": "フォントが読み込まれているか",
                    "desc_ko": "폰트가 로드되었는지 확인",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "drawString",
                    "params": "text, x, y",
                    "params_typed": "const string& text, float x, float y",
                    "return_type": "void",
                    "desc": "Draw text at position",
                    "desc_ja": "テキストを描画",
                    "desc_ko": "지정한 위치에 텍스트를 그림",
                    "snippet": "drawString(${1:\"Hello\"}, ${2:100}, ${3:100})"
                },
                {
                    "name": "getWidth",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text width in pixels",
                    "desc_ja": "テキストの幅を取得",
                    "desc_ko": "텍스트 너비를 픽셀로 얻음",
                    "snippet": "getWidth(${1:\"text\"})"
                },
                {
                    "name": "getHeight",
                    "params": "text",
                    "params_typed": "const string& text",
                    "return_type": "float",
                    "desc": "Get text height in pixels",
                    "desc_ja": "テキストの高さを取得",
                    "desc_ko": "텍스트 높이를 픽셀로 얻음",
                    "snippet": "getHeight(${1:\"text\"})"
                },
                {
                    "name": "getLineHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get line height",
                    "desc_ja": "行の高さを取得",
                    "desc_ko": "줄 높이를 얻음",
                    "snippet": "getLineHeight()"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get font size",
                    "desc_ja": "フォントサイズを取得",
                    "desc_ko": "폰트 크기를 얻음",
                    "snippet": "getSize()"
                }
            ]
        },
        {
            "name": "Animation",
            "name_ja": "アニメーション",
            "name_ko": "애니메이션",
            "functions": [
                {
                    "name": "ease",
                    "params": "t, type, mode",
                    "params_typed": "float t, EaseType type, EaseMode mode",
                    "return_type": "float",
                    "desc": "Apply easing to value (0-1)",
                    "desc_ja": "イージングを適用 (0-1)",
                    "desc_ko": "값에 easing 적용 (0-1)",
                    "snippet": "ease(${1:t}, EaseType::${2:Cubic}, EaseMode::${3:InOut})"
                },
                {
                    "name": "easeIn",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in to value (0-1)",
                    "desc_ja": "イーズインを適用 (0-1)",
                    "desc_ko": "값에 ease-in 적용 (0-1)",
                    "snippet": "easeIn(${1:t}, EaseType::${2:Cubic})"
                },
                {
                    "name": "easeOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-out to value (0-1)",
                    "desc_ja": "イーズアウトを適用 (0-1)",
                    "desc_ko": "값에 ease-out 적용 (0-1)",
                    "snippet": "easeOut(${1:t}, EaseType::${2:Cubic})"
                },
                {
                    "name": "easeInOut",
                    "params": "t, type",
                    "params_typed": "float t, EaseType type",
                    "return_type": "float",
                    "desc": "Apply ease-in-out to value (0-1)",
                    "desc_ja": "イーズインアウトを適用 (0-1)",
                    "desc_ko": "값에 ease-in-out 적용 (0-1)",
                    "snippet": "easeInOut(${1:t}, EaseType::${2:Cubic})"
                },
                {
                    "name": "createTween",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Create a tween object",
                    "desc_ja": "トゥイーンを作成",
                    "desc_ko": "tween 객체를 생성",
                    "snippet": "createTween()"
                },
                {
                    "name": "from",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set start value",
                    "desc_ja": "開始値を設定",
                    "desc_ko": "시작 값을 설정",
                    "snippet": "from(${1:0.0})"
                },
                {
                    "name": "to",
                    "params": "value",
                    "params_typed": "float value",
                    "return_type": "Tween@",
                    "desc": "Set end value",
                    "desc_ja": "終了値を設定",
                    "desc_ko": "끝 값을 설정",
                    "snippet": "to(${1:1.0})"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "Tween@",
                    "desc": "Set animation duration",
                    "desc_ja": "再生時間を設定",
                    "desc_ko": "애니메이션 길이를 설정",
                    "snippet": "duration(${1:1.0})"
                },
                {
                    "name": "ease",
                    "params": "type",
                    "params_typed": "EaseType type",
                    "return_type": "Tween@",
                    "desc": "Set easing type",
                    "desc_ja": "イージングタイプを設定",
                    "desc_ko": "easing 타입을 설정",
                    "snippet": "ease(EaseType::${1:Cubic})"
                },
                {
                    "name": "start",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Start animation (chainable)",
                    "desc_ja": "開始（チェーン可能）",
                    "desc_ko": "애니메이션 시작 (체이닝 가능)",
                    "snippet": "start()"
                },
                {
                    "name": "pause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Pause animation (chainable)",
                    "desc_ja": "一時停止（チェーン可能）",
                    "desc_ko": "애니메이션 일시정지 (체이닝 가능)",
                    "snippet": "pause()"
                },
                {
                    "name": "resume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Resume animation (chainable)",
                    "desc_ja": "再開（チェーン可能）",
                    "desc_ko": "애니메이션 재개 (체이닝 가능)",
                    "snippet": "resume()"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Reset animation (chainable)",
                    "desc_ja": "リセット（チェーン可能）",
                    "desc_ko": "애니메이션 리셋 (체이닝 가능)",
                    "snippet": "reset()"
                },
                {
                    "name": "finish",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Tween@",
                    "desc": "Jump to end (chainable)",
                    "desc_ja": "終了位置にジャンプ（チェーン可能）",
                    "desc_ko": "끝 위치로 점프 (체이닝 가능)",
                    "snippet": "finish()"
                },
                {
                    "name": "loop",
                    "params": "count",
                    "params_typed": "int count = -1",
                    "return_type": "Tween@",
                    "desc": "Set loop count (-1=infinite, 0=none, N=repeat N times)",
                    "desc_ja": "ループ回数を設定 (-1=無限, 0=なし, N=N回繰り返し)",
                    "desc_ko": "반복 횟수 설정 (-1=무한, 0=없음, N=N번 반복)",
                    "snippet": "loop(${1:-1})"
                },
                {
                    "name": "yoyo",
                    "params": "enable",
                    "params_typed": "bool enable = true",
                    "return_type": "Tween@",
                    "desc": "Enable yoyo (reverse direction each loop)",
                    "desc_ja": "ヨーヨー（ループごとに方向反転）を有効化",
                    "desc_ko": "요요 활성화 (반복마다 방향 반전)",
                    "snippet": "yoyo()"
                },
                {
                    "name": "getValue",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current tween value",
                    "desc_ja": "現在の値を取得",
                    "desc_ko": "현재 트윈 값을 얻음",
                    "snippet": "getValue()"
                },
                {
                    "name": "getProgress",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get progress (0-1)",
                    "desc_ja": "進行度を取得 (0-1)",
                    "desc_ko": "진행도를 얻음 (0-1)",
                    "snippet": "getProgress()"
                },
                {
                    "name": "getElapsed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get elapsed time",
                    "desc_ja": "経過時間を取得",
                    "desc_ko": "경과 시간을 얻음",
                    "snippet": "getElapsed()"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get duration",
                    "desc_ja": "再生時間を取得",
                    "desc_ko": "재생 시간을 얻음",
                    "snippet": "getDuration()"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playing",
                    "desc_ja": "再生中か確認",
                    "desc_ko": "재생 중인지 확인",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "isComplete",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if complete",
                    "desc_ja": "完了したか確認",
                    "desc_ko": "완료되었는지 확인",
                    "snippet": "isComplete()"
                },
                {
                    "name": "getStart",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get start value",
                    "desc_ja": "開始値を取得",
                    "desc_ko": "시작 값을 얻음",
                    "snippet": "getStart()"
                },
                {
                    "name": "getEnd",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get end value",
                    "desc_ja": "終了値を取得",
                    "desc_ko": "끝 값을 얻음",
                    "snippet": "getEnd()"
                },
                {
                    "name": "getLoopCount",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get number of completed loop iterations",
                    "desc_ja": "完了したループ回数を取得",
                    "desc_ko": "완료된 반복 횟수를 얻음",
                    "snippet": "getLoopCount()"
                }
            ]
        },
        {
            "name": "Types - Vec2",
            "name_ja": "型 - Vec2",
            "name_ko": "타입 - Vec2",
            "functions": [
                {
                    "name": "Vec2",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)",
                    "desc_ja": "2Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "2D 벡터를 생성 (타입 생성자)",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)",
                    "desc_ja": "2Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "2D 벡터를 생성 (타입 생성자)",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 2D vector (type constructor)",
                    "desc_ja": "2Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "2D 벡터를 생성 (타입 생성자)",
                    "snippet": "Vec2(${1:x}, ${2:y})"
                },
                {
                    "name": "set",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "Vec2&",
                    "desc": "Set vector components (type method)",
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "set",
                    "params": "v",
                    "params_typed": "Vec2 v",
                    "return_type": "Vec2&",
                    "desc": "Set vector components (type method)",
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:x}, ${2:y})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "desc_ja": "角度からVec2を作成",
                    "desc_ko": "각도로부터 Vec2를 생성",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                },
                {
                    "name": "Vec2_fromAngle",
                    "params": "radians, length",
                    "params_typed": "float radians, float length",
                    "return_type": "Vec2",
                    "desc": "Create Vec2 from angle",
                    "desc_ja": "角度からVec2を作成",
                    "desc_ko": "각도로부터 Vec2를 생성",
                    "snippet": "Vec2_fromAngle(${1:radians})"
                }
            ]
        },
        {
            "name": "Types - Vec3",
            "name_ja": "型 - Vec3",
            "name_ko": "타입 - Vec3",
            "functions": [
                {
                    "name": "Vec3",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)",
                    "desc_ja": "3Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "3D 벡터를 생성 (타입 생성자)",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Vec3",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)",
                    "desc_ja": "3Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "3D 벡터를 생성 (타입 생성자)",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Vec3",
                    "params": "v",
                    "params_typed": "float v",
                    "return_type": "",
                    "desc": "Create 3D vector (type constructor)",
                    "desc_ja": "3Dベクトルを作成（型コンストラクタ）",
                    "desc_ko": "3D 벡터를 생성 (타입 생성자)",
                    "snippet": "Vec3(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "set",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Vec3&",
                    "desc": "Set vector components (type method)",
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "set",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "Vec3&",
                    "desc": "Set vector components (type method)",
                    "desc_ja": "ベクトルの成分を設定（型メソッド）",
                    "desc_ko": "벡터 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:z})"
                }
            ]
        },
        {
            "name": "Types - Color",
            "name_ja": "型 - Color",
            "name_ko": "타입 - Color",
            "functions": [
                {
                    "name": "Color",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create color (type constructor)",
                    "desc_ja": "色を作成（型コンストラクタ）",
                    "desc_ko": "색상을 생성 (타입 생성자)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "",
                    "desc": "Create color (type constructor)",
                    "desc_ja": "色を作成（型コンストラクタ）",
                    "desc_ko": "색상을 생성 (타입 생성자)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "Color",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "",
                    "desc": "Create color (type constructor)",
                    "desc_ja": "色を作成（型コンストラクタ）",
                    "desc_ko": "색상을 생성 (타입 생성자)",
                    "snippet": "Color(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "r, g, b",
                    "params_typed": "float r, float g, float b",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "gray",
                    "params_typed": "float gray",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "set",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "Color&",
                    "desc": "Set color components (type method)",
                    "desc_ja": "色の成分を設定（型メソッド）",
                    "desc_ko": "색상 성분을 설정 (타입 메서드)",
                    "snippet": "set(${1:r}, ${2:g}, ${3:b})"
                },
                {
                    "name": "toHSB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorHSB",
                    "desc": "Convert to HSB color space (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ja": "HSB色空間に変換 (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ko": "HSB 색공간으로 변환 (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "toHSB()"
                },
                {
                    "name": "toOKLab",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLab",
                    "desc": "Convert to OKLab color space (perceptually uniform)",
                    "desc_ja": "OKLab色空間に変換（知覚的に均一）",
                    "desc_ko": "OKLab 색공간으로 변환 (지각적으로 균일)",
                    "snippet": "toOKLab()"
                },
                {
                    "name": "toOKLCH",
                    "params": "",
                    "params_typed": "",
                    "return_type": "ColorOKLCH",
                    "desc": "Convert to OKLCH color space (L: 0-1, C: 0-0.4, H: 0-1)",
                    "desc_ja": "OKLCH色空間に変換 (L: 0-1, C: 0-0.4, H: 0-1)",
                    "desc_ko": "OKLCH 색공간으로 변환 (L: 0-1, C: 0-0.4, H: 0-1)",
                    "snippet": "toOKLCH()"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ja": "HSBからColorを作成 (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ko": "HSB로부터 Color를 생성 (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ja": "HSBからColorを作成 (H: 0-1, S: 0-1, B: 0-1)",
                    "desc_ko": "HSB로부터 Color를 생성 (H: 0-1, S: 0-1, B: 0-1)",
                    "snippet": "Color_fromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)",
                    "desc_ja": "HSBからColorを作成（Color_fromHSBのエイリアス）",
                    "desc_ko": "HSB로부터 Color를 생성 (Color_fromHSB의 별칭)",
                    "snippet": "colorFromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "colorFromHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "Color",
                    "desc": "Create Color from HSB (alias for Color_fromHSB)",
                    "desc_ja": "HSBからColorを作成（Color_fromHSBのエイリアス）",
                    "desc_ko": "HSB로부터 Color를 생성 (Color_fromHSB의 별칭)",
                    "snippet": "colorFromHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "desc_ja": "OKLCHからColorを作成",
                    "desc_ko": "OKLCH로부터 Color를 생성",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "Color",
                    "desc": "Create Color from OKLCH",
                    "desc_ja": "OKLCHからColorを作成",
                    "desc_ko": "OKLCH로부터 Color를 생성",
                    "snippet": "Color_fromOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b",
                    "params_typed": "float L, float a, float b",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "desc_ja": "OKLabからColorを作成",
                    "desc_ko": "OKLab으로부터 Color를 생성",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                },
                {
                    "name": "Color_fromOKLab",
                    "params": "L, a, b, alpha",
                    "params_typed": "float L, float a, float b, float alpha",
                    "return_type": "Color",
                    "desc": "Create Color from OKLab",
                    "desc_ja": "OKLabからColorを作成",
                    "desc_ko": "OKLab으로부터 Color를 생성",
                    "snippet": "Color_fromOKLab(${1:L}, ${2:a}, ${3:b})"
                }
            ]
        },
        {
            "name": "Types - ColorHSB",
            "name_ja": "型 - ColorHSB",
            "name_ko": "타입 - ColorHSB",
            "functions": [
                {
                    "name": "ColorHSB",
                    "params": "h, s, b",
                    "params_typed": "float h, float s, float b",
                    "return_type": "",
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color",
                    "desc_ja": "HSBカラー型 (H: 0-1, S: 0-1, B: 0-1)。toRGB()でColorに変換",
                    "desc_ko": "HSB 색상 타입 (H: 0-1, S: 0-1, B: 0-1). toRGB()로 Color로 변환",
                    "snippet": "ColorHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "ColorHSB",
                    "params": "h, s, b, a",
                    "params_typed": "float h, float s, float b, float a",
                    "return_type": "",
                    "desc": "HSB color type (H: 0-1, S: 0-1, B: 0-1). Use toRGB() to convert to Color",
                    "desc_ja": "HSBカラー型 (H: 0-1, S: 0-1, B: 0-1)。toRGB()でColorに変換",
                    "desc_ko": "HSB 색상 타입 (H: 0-1, S: 0-1, B: 0-1). toRGB()로 Color로 변환",
                    "snippet": "ColorHSB(${1:h}, ${2:s}, ${3:b})"
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorHSB to Color (RGB)",
                    "desc_ja": "ColorHSBをColor (RGB) に変換",
                    "desc_ko": "ColorHSB를 Color (RGB)로 변환",
                    "snippet": "toRGB()"
                },
                {
                    "name": "lerp",
                    "params": "target, t",
                    "params_typed": "ColorHSB target, float t",
                    "return_type": "ColorHSB",
                    "desc": "Interpolate in HSB space (shortest hue path)",
                    "desc_ja": "HSB空間で補間（色相は最短経路）",
                    "desc_ko": "HSB 공간에서 보간 (색상은 최단 경로)",
                    "snippet": "lerp(${1:target}, ${2:t})"
                }
            ]
        },
        {
            "name": "Types - ColorOKLCH",
            "name_ja": "型 - ColorOKLCH",
            "name_ko": "타입 - ColorOKLCH",
            "functions": [
                {
                    "name": "ColorOKLCH",
                    "params": "L, C, H",
                    "params_typed": "float L, float C, float H",
                    "return_type": "",
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform",
                    "desc_ja": "OKLCHカラー型 (L: 0-1, C: 0-0.4, H: 0-1)。知覚的に均一",
                    "desc_ko": "OKLCH 색상 타입 (L: 0-1, C: 0-0.4, H: 0-1). 지각적으로 균일",
                    "snippet": "ColorOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "ColorOKLCH",
                    "params": "L, C, H, a",
                    "params_typed": "float L, float C, float H, float a",
                    "return_type": "",
                    "desc": "OKLCH color type (L: 0-1, C: 0-0.4, H: 0-1). Perceptually uniform",
                    "desc_ja": "OKLCHカラー型 (L: 0-1, C: 0-0.4, H: 0-1)。知覚的に均一",
                    "desc_ko": "OKLCH 색상 타입 (L: 0-1, C: 0-0.4, H: 0-1). 지각적으로 균일",
                    "snippet": "ColorOKLCH(${1:L}, ${2:C}, ${3:H})"
                },
                {
                    "name": "toRGB",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Color",
                    "desc": "Convert ColorOKLCH to Color (RGB)",
                    "desc_ja": "ColorOKLCHをColor (RGB) に変換",
                    "desc_ko": "ColorOKLCH를 Color (RGB)로 변환",
                    "snippet": "toRGB()"
                },
                {
                    "name": "lerp",
                    "params": "target, t",
                    "params_typed": "ColorOKLCH target, float t",
                    "return_type": "ColorOKLCH",
                    "desc": "Interpolate in OKLCH space (shortest hue path, perceptually uniform)",
                    "desc_ja": "OKLCH空間で補間（色相は最短経路、知覚的に均一）",
                    "desc_ko": "OKLCH 공간에서 보간 (색상은 최단 경로, 지각적으로 균일)",
                    "snippet": "lerp(${1:target}, ${2:t})"
                }
            ]
        },
        {
            "name": "Types - Rect",
            "name_ja": "型 - Rect",
            "name_ko": "타입 - Rect",
            "functions": [
                {
                    "name": "Rect",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a rectangle (type constructor)",
                    "desc_ja": "矩形を作成（型コンストラクタ）",
                    "desc_ko": "사각형을 생성 (타입 생성자)",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "Rect",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "",
                    "desc": "Create a rectangle (type constructor)",
                    "desc_ja": "矩形を作成（型コンストラクタ）",
                    "desc_ko": "사각형을 생성 (타입 생성자)",
                    "snippet": "Rect(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "set",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties (type method)",
                    "desc_ja": "矩形のプロパティを設定（型メソッド）",
                    "desc_ko": "사각형 속성을 설정 (타입 메서드)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "set",
                    "params": "pos, w, h",
                    "params_typed": "Vec2 pos, float w, float h",
                    "return_type": "Rect&",
                    "desc": "Set rectangle properties (type method)",
                    "desc_ja": "矩形のプロパティを設定（型メソッド）",
                    "desc_ko": "사각형 속성을 설정 (타입 메서드)",
                    "snippet": "set(${1:x}, ${2:y}, ${3:w}, ${4:h})"
                },
                {
                    "name": "contains",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "bool",
                    "desc": "Check if point is inside (type method)",
                    "desc_ja": "点が内部にあるか判定（型メソッド）",
                    "desc_ko": "점이 내부에 있는지 확인 (타입 메서드)",
                    "snippet": "contains(${1:x}, ${2:y})"
                },
                {
                    "name": "intersects",
                    "params": "other",
                    "params_typed": "Rect other",
                    "return_type": "bool",
                    "desc": "Check intersection (type method)",
                    "desc_ja": "交差判定（型メソッド）",
                    "desc_ko": "교차 여부 확인 (타입 메서드)",
                    "snippet": "intersects(${1:other})"
                }
            ]
        },
        {
            "name": "Scene Graph",
            "name_ja": "シーングラフ",
            "name_ko": "씬 그래프",
            "functions": [
                {
                    "name": "Node",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a base scene node (C++ only - uses shared_ptr)",
                    "desc_ja": "ベースノードを作成（C++のみ - shared_ptr使用）",
                    "desc_ko": "기본 씬 노드를 생성 (C++ 전용 - shared_ptr 사용)",
                    "snippet": "Node()"
                },
                {
                    "name": "addChild",
                    "params": "child",
                    "params_typed": "shared_ptr<Node> child",
                    "return_type": "void",
                    "desc": "Add a child node (C++ only)",
                    "desc_ja": "子ノードを追加（C++のみ）",
                    "desc_ko": "자식 노드를 추가 (C++ 전용)",
                    "snippet": "addChild(${1:child})"
                },
                {
                    "name": "moveToFront",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Move this node to the end of its parent's child list — drawn last, on top of siblings. No-op if no parent or already last (C++ only)",
                    "desc_ja": "親の子リストの末尾へ移動。最後に描画され、兄弟の最前面に表示される。親がない / すでに末尾の場合は何もしない（C++のみ）",
                    "desc_ko": "이 노드를 부모의 자식 리스트 끝으로 이동 — 마지막에 그려지므로 형제들 위에 표시됨. 부모가 없거나 이미 마지막이면 동작 안 함 (C++ 전용)",
                    "snippet": "moveToFront()"
                },
                {
                    "name": "moveToBack",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Move this node to the beginning of its parent's child list — drawn first, beneath siblings. No-op if no parent or already first (C++ only)",
                    "desc_ja": "親の子リストの先頭へ移動。最初に描画され、兄弟の最背面に表示される。親がない / すでに先頭の場合は何もしない（C++のみ）",
                    "desc_ko": "이 노드를 부모의 자식 리스트 처음으로 이동 — 먼저 그려지므로 형제들 아래에 표시됨. 부모가 없거나 이미 처음이면 동작 안 함 (C++ 전용)",
                    "snippet": "moveToBack()"
                },
                {
                    "name": "destroy",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Mark node for deferred removal from scene graph (C++ only)",
                    "desc_ja": "ノードを削除予約する（次のupdate時にツリーから除去、C++のみ）",
                    "desc_ko": "노드를 지연 제거 대상으로 표시 (다음 update에서 트리에서 제거, C++ 전용)",
                    "snippet": "destroy()"
                },
                {
                    "name": "isDead",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if node is marked for destruction (C++ only)",
                    "desc_ja": "ノードが削除予約されているか（C++のみ）",
                    "desc_ko": "노드가 제거 대상으로 표시되었는지 확인 (C++ 전용)",
                    "snippet": "isDead()"
                },
                {
                    "name": "setPosition",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Set position (C++ only)",
                    "desc_ja": "位置を設定（C++のみ）",
                    "desc_ko": "위치를 설정 (C++ 전용)",
                    "snippet": "setPosition(${1:x}, ${2:y})"
                },
                {
                    "name": "setPosition",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "void",
                    "desc": "Set position (C++ only)",
                    "desc_ja": "位置を設定（C++のみ）",
                    "desc_ko": "위치를 설정 (C++ 전용)",
                    "snippet": "setPosition(${1:x}, ${2:y})"
                },
                {
                    "name": "RectNode",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 2D rectangle node (C++ only - uses shared_ptr)",
                    "desc_ja": "矩形ノードを作成（C++のみ - shared_ptr使用）",
                    "desc_ko": "2D 사각형 노드를 생성 (C++ 전용 - shared_ptr 사용)",
                    "snippet": "RectNode()"
                },
                {
                    "name": "setSize",
                    "params": "w, h",
                    "params_typed": "float w, float h",
                    "return_type": "void",
                    "desc": "Set size (C++ only)",
                    "desc_ja": "サイズを設定（C++のみ）",
                    "desc_ko": "크기를 설정 (C++ 전용)",
                    "snippet": "setSize(${1:w}, ${2:h})"
                },
                {
                    "name": "setClipping",
                    "params": "enabled",
                    "params_typed": "bool enabled",
                    "return_type": "void",
                    "desc": "Enable/disable scissor clipping for RectNode (C++ only)",
                    "desc_ja": "RectNodeのシザークリッピングを有効/無効化（C++のみ）",
                    "desc_ko": "RectNode의 시저 클리핑을 활성/비활성 (C++ 전용)",
                    "snippet": "setClipping(${1:true})"
                },
                {
                    "name": "enableEvents",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse/key events for this node (C++ only)",
                    "desc_ja": "このノードのマウス/キーイベントを有効化（C++のみ）",
                    "desc_ko": "이 노드의 마우스/키 이벤트를 활성화 (C++ 전용)",
                    "snippet": "enableEvents()"
                },
                {
                    "name": "ScrollContainer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Scrollable container node with clipping (C++ only)",
                    "desc_ja": "クリッピング付きスクロール可能コンテナノード（C++のみ）",
                    "desc_ko": "클리핑이 있는 스크롤 가능 컨테이너 노드 (C++ 전용)",
                    "snippet": "make_shared<ScrollContainer>()"
                },
                {
                    "name": "setContent",
                    "params": "content",
                    "params_typed": "shared_ptr<RectNode> content",
                    "return_type": "void",
                    "desc": "Set content node for ScrollContainer (C++ only)",
                    "desc_ja": "ScrollContainerのコンテンツノードを設定（C++のみ）",
                    "desc_ko": "ScrollContainer의 콘텐츠 노드를 설정 (C++ 전용)",
                    "snippet": "setContent(${1:content})"
                },
                {
                    "name": "setScrollY",
                    "params": "y",
                    "params_typed": "float y",
                    "return_type": "void",
                    "desc": "Set vertical scroll position (C++ only)",
                    "desc_ja": "縦スクロール位置を設定（C++のみ）",
                    "desc_ko": "수직 스크롤 위치를 설정 (C++ 전용)",
                    "snippet": "setScrollY(${1:0})"
                },
                {
                    "name": "ScrollBar",
                    "params": "container, dir",
                    "params_typed": "ScrollContainer* container, Direction dir = Vertical",
                    "return_type": "",
                    "desc": "Visual scroll indicator for ScrollContainer (C++ only)",
                    "desc_ja": "ScrollContainer用のスクロールバー表示（C++のみ）",
                    "desc_ko": "ScrollContainer용 시각적 스크롤 인디케이터 (C++ 전용)",
                    "snippet": "make_shared<ScrollBar>(${1:container}, ScrollBar::Vertical)"
                },
                {
                    "name": "LayoutMod",
                    "params": "dir, spacing",
                    "params_typed": "LayoutDirection dir, float spacing = 0",
                    "return_type": "",
                    "desc": "Layout modifier for automatic child arrangement (C++ only)",
                    "desc_ja": "子ノードの自動配置用レイアウトMod（C++のみ）",
                    "desc_ko": "자식 노드 자동 배치를 위한 레이아웃 모디파이어 (C++ 전용)",
                    "snippet": "addMod<LayoutMod>(LayoutDirection::Vertical, ${1:8.0f})"
                },
                {
                    "name": "updateLayout",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Recalculate layout (call after adding/removing children) (C++ only)",
                    "desc_ja": "レイアウトを再計算（子の追加/削除後に呼ぶ）（C++のみ）",
                    "desc_ko": "레이아웃을 재계산 (자식 추가/제거 후 호출) (C++ 전용)",
                    "snippet": "updateLayout()"
                },
                {
                    "name": "TweenMod",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Animation modifier for Node properties (position, scale, rotation) with easing (C++ only)",
                    "desc_ja": "Nodeプロパティ（位置、スケール、回転）のイージングアニメーションMod（C++のみ）",
                    "desc_ko": "Node 속성(위치, 스케일, 회전)에 이징 애니메이션을 적용하는 모디파이어 (C++ 전용)",
                    "snippet": "addMod<TweenMod>()"
                },
                {
                    "name": "moveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "TweenMod&",
                    "desc": "Animate position to target (TweenMod method) (C++ only)",
                    "desc_ja": "位置を目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "위치를 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "moveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "moveTo",
                    "params": "pos",
                    "params_typed": "Vec3 pos",
                    "return_type": "TweenMod&",
                    "desc": "Animate position to target (TweenMod method) (C++ only)",
                    "desc_ja": "位置を目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "위치를 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "moveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "moveBy",
                    "params": "dx, dy",
                    "params_typed": "float dx, float dy",
                    "return_type": "TweenMod&",
                    "desc": "Animate position by relative amount (TweenMod method) (C++ only)",
                    "desc_ja": "位置を相対量だけアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "위치를 상대적인 양만큼 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "moveBy(${1:dx}, ${2:dy})"
                },
                {
                    "name": "scaleTo",
                    "params": "uniform",
                    "params_typed": "float uniform",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale to target (TweenMod method) (C++ only)",
                    "desc_ja": "スケールを目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "스케일을 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "scaleTo(${1:scale})"
                },
                {
                    "name": "scaleTo",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz = 1",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale to target (TweenMod method) (C++ only)",
                    "desc_ja": "スケールを目標値へアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "스케일을 목표값으로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "scaleTo(${1:scale})"
                },
                {
                    "name": "scaleBy",
                    "params": "factor",
                    "params_typed": "float factor",
                    "return_type": "TweenMod&",
                    "desc": "Animate scale by relative multiplier (TweenMod method) (C++ only)",
                    "desc_ja": "スケールを相対倍率でアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "스케일을 상대 배율로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "scaleBy(${1:factor})"
                },
                {
                    "name": "rotateTo",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation to target angle or quaternion (TweenMod method) (C++ only)",
                    "desc_ja": "回転を目標角度またはクォータニオンへアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "회전을 목표 각도 또는 쿼터니언으로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "rotateTo(${1:radians})"
                },
                {
                    "name": "rotateTo",
                    "params": "q",
                    "params_typed": "Quaternion q",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation to target angle or quaternion (TweenMod method) (C++ only)",
                    "desc_ja": "回転を目標角度またはクォータニオンへアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "회전을 목표 각도 또는 쿼터니언으로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "rotateTo(${1:radians})"
                },
                {
                    "name": "rotateBy",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "TweenMod&",
                    "desc": "Animate rotation by relative angle (TweenMod method) (C++ only)",
                    "desc_ja": "回転を相対角度でアニメーション（TweenModメソッド）（C++のみ）",
                    "desc_ko": "회전을 상대 각도로 애니메이션 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "rotateBy(${1:radians})"
                },
                {
                    "name": "duration",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "TweenMod&",
                    "desc": "Set animation duration (TweenMod method) (C++ only)",
                    "desc_ja": "アニメーション時間を設定（TweenModメソッド）（C++のみ）",
                    "desc_ko": "애니메이션 길이를 설정 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "duration(${1:1.0f})"
                },
                {
                    "name": "ease",
                    "params": "type, mode",
                    "params_typed": "EaseType type, EaseMode mode = InOut",
                    "return_type": "TweenMod&",
                    "desc": "Set easing function (TweenMod method). Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce. Modes: In, Out, InOut (C++ only)",
                    "desc_ja": "イージング関数を設定（TweenModメソッド）。Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce。Modes: In, Out, InOut（C++のみ）",
                    "desc_ko": "easing 함수를 설정 (TweenMod 메서드). Types: Linear, Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Back, Elastic, Bounce. Modes: In, Out, InOut (C++ 전용)",
                    "snippet": "ease(EaseType::${1:Cubic}, EaseMode::${2:InOut})"
                },
                {
                    "name": "delay",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "TweenMod&",
                    "desc": "Set delay before animation starts (TweenMod method) (C++ only)",
                    "desc_ja": "アニメーション開始前の遅延を設定（TweenModメソッド）（C++のみ）",
                    "desc_ko": "애니메이션 시작 전 지연을 설정 (TweenMod 메서드) (C++ 전용)",
                    "snippet": "delay(${1:0.5f})"
                }
            ]
        },
        {
            "name": "3D Setup",
            "name_ja": "3Dセットアップ",
            "name_ko": "3D 셋업",
            "functions": [
                {
                    "name": "setupScreenPerspective",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "desc_ja": "パースペクティブ投影を設定（oF風デフォルト3D）",
                    "desc_ko": "원근 투영을 설정 (oF 스타일 기본 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "desc_ja": "パースペクティブ投影を設定（oF風デフォルト3D）",
                    "desc_ko": "원근 투영을 설정 (oF 스타일 기본 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenPerspective",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up perspective projection (oF-style default 3D)",
                    "desc_ja": "パースペクティブ投影を設定（oF風デフォルト3D）",
                    "desc_ko": "원근 투영을 설정 (oF 스타일 기본 3D)",
                    "snippet": "setupScreenPerspective()"
                },
                {
                    "name": "setupScreenOrtho",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Set up orthographic projection (2D mode)",
                    "desc_ja": "正投影を設定（2Dモード）",
                    "desc_ko": "정사영 투영을 설정 (2D 모드)",
                    "snippet": "setupScreenOrtho()"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "desc_ja": "指定したFOVで画面投影を設定（0 = 正投影、0より大 = パースペクティブ）",
                    "desc_ko": "지정한 FOV로 화면 투영을 설정 (0 = 정사영, 0보다 크면 원근)",
                    "snippet": "setupScreenFov(${1:45.0})"
                },
                {
                    "name": "setupScreenFov",
                    "params": "fovDeg, nearDist, farDist",
                    "params_typed": "float fovDeg, float nearDist, float farDist",
                    "return_type": "void",
                    "desc": "Set up screen projection with specified FOV (0 = ortho, >0 = perspective)",
                    "desc_ja": "指定したFOVで画面投影を設定（0 = 正投影、0より大 = パースペクティブ）",
                    "desc_ko": "지정한 FOV로 화면 투영을 설정 (0 = 정사영, 0보다 크면 원근)",
                    "snippet": "setupScreenFov(${1:45.0})"
                },
                {
                    "name": "setDefaultScreenFov",
                    "params": "fovDeg",
                    "params_typed": "float fovDeg",
                    "return_type": "void",
                    "desc": "Set default screen FOV (applied at frame start)",
                    "desc_ja": "デフォルトのスクリーンFOVを設定（フレーム開始時に適用）",
                    "desc_ko": "기본 스크린 FOV를 설정 (프레임 시작 시 적용)",
                    "snippet": "setDefaultScreenFov(${1:45.0})"
                },
                {
                    "name": "getDefaultScreenFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current default screen FOV",
                    "desc_ja": "現在のデフォルトスクリーンFOVを取得",
                    "desc_ko": "현재 기본 스크린 FOV를 얻음",
                    "snippet": "getDefaultScreenFov()"
                },
                {
                    "name": "worldToScreen",
                    "params": "worldPos",
                    "params_typed": "const Vec3& worldPos",
                    "return_type": "Vec3",
                    "desc": "Convert world coordinate to screen coordinate (x, y = screen pos, z = depth 0-1)",
                    "desc_ja": "ワールド座標をスクリーン座標に変換（x, y = 画面位置, z = 深度 0-1）",
                    "desc_ko": "월드 좌표를 스크린 좌표로 변환 (x, y = 스크린 위치, z = 깊이 0-1)",
                    "snippet": "worldToScreen(${1:worldPos})"
                },
                {
                    "name": "screenToWorld",
                    "params": "screenPos",
                    "params_typed": "const Vec2& screenPos",
                    "return_type": "Vec3",
                    "desc": "Convert screen coordinate to world coordinate on Z plane",
                    "desc_ja": "スクリーン座標をワールド座標に変換（Z平面上）",
                    "desc_ko": "스크린 좌표를 Z 평면상의 월드 좌표로 변환",
                    "snippet": "screenToWorld(${1:screenPos}, ${2:0.0f})"
                },
                {
                    "name": "screenToWorld",
                    "params": "screenPos, worldZ",
                    "params_typed": "const Vec2& screenPos, float worldZ",
                    "return_type": "Vec3",
                    "desc": "Convert screen coordinate to world coordinate on Z plane",
                    "desc_ja": "スクリーン座標をワールド座標に変換（Z平面上）",
                    "desc_ko": "스크린 좌표를 Z 평면상의 월드 좌표로 변환",
                    "snippet": "screenToWorld(${1:screenPos}, ${2:0.0f})"
                }
            ]
        },
        {
            "name": "3D Camera",
            "name_ja": "3Dカメラ",
            "name_ko": "3D 카메라",
            "functions": [
                {
                    "name": "createEasyCam",
                    "params": "",
                    "params_typed": "",
                    "return_type": "EasyCam@",
                    "desc": "Create an EasyCam instance",
                    "desc_ja": "EasyCamインスタンスを作成",
                    "desc_ko": "EasyCam 인스턴스를 생성",
                    "snippet": "createEasyCam()"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Apply camera transform (start 3D mode)",
                    "desc_ja": "カメラ視点を適用（3Dモード開始）",
                    "desc_ko": "카메라 변환을 적용 (3D 모드 시작)",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Restore previous transform (end 3D mode)",
                    "desc_ja": "カメラ視点を解除（3Dモード終了）",
                    "desc_ko": "이전 변환으로 복원 (3D 모드 종료)",
                    "snippet": "end()"
                },
                {
                    "name": "reset",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Reset camera to default position",
                    "desc_ja": "カメラをデフォルト位置にリセット",
                    "desc_ko": "카메라를 기본 위치로 초기화",
                    "snippet": "reset()"
                },
                {
                    "name": "setTarget",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera look-at target",
                    "desc_ja": "カメラの注視点を設定",
                    "desc_ko": "카메라의 look-at 타겟을 설정",
                    "snippet": "setTarget(${1:0}, ${2:0}, ${3:0})"
                },
                {
                    "name": "setTarget",
                    "params": "target",
                    "params_typed": "const Vec3 &in target",
                    "return_type": "void",
                    "desc": "Set camera look-at target",
                    "desc_ja": "カメラの注視点を設定",
                    "desc_ko": "카메라의 look-at 타겟을 설정",
                    "snippet": "setTarget(${1:0}, ${2:0}, ${3:0})"
                },
                {
                    "name": "getTarget",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera look-at target",
                    "desc_ja": "カメラの注視点を取得",
                    "desc_ko": "카메라의 look-at 타겟을 얻음",
                    "snippet": "getTarget()"
                },
                {
                    "name": "setDistance",
                    "params": "distance",
                    "params_typed": "float distance",
                    "return_type": "void",
                    "desc": "Set distance from target",
                    "desc_ja": "注視点からの距離を設定",
                    "desc_ko": "타겟으로부터의 거리를 설정",
                    "snippet": "setDistance(${1:400})"
                },
                {
                    "name": "getDistance",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get distance from target",
                    "desc_ja": "注視点からの距離を取得",
                    "desc_ko": "타겟으로부터의 거리를 얻음",
                    "snippet": "getDistance()"
                },
                {
                    "name": "setFov",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "void",
                    "desc": "Set field of view in radians",
                    "desc_ja": "視野角をラジアンで設定",
                    "desc_ko": "시야각을 라디안으로 설정",
                    "snippet": "setFov(${1:0.785})"
                },
                {
                    "name": "getFov",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get field of view in radians",
                    "desc_ja": "視野角をラジアンで取得",
                    "desc_ko": "시야각을 라디안으로 얻음",
                    "snippet": "getFov()"
                },
                {
                    "name": "setFovDeg",
                    "params": "degrees",
                    "params_typed": "float degrees",
                    "return_type": "void",
                    "desc": "Set field of view in degrees",
                    "desc_ja": "視野角を度数で設定",
                    "desc_ko": "시야각을 도(degree)로 설정",
                    "snippet": "setFovDeg(${1:45})"
                },
                {
                    "name": "setNearClip",
                    "params": "nearClip",
                    "params_typed": "float nearClip",
                    "return_type": "void",
                    "desc": "Set near clipping plane",
                    "desc_ja": "近クリップ面を設定",
                    "desc_ko": "근평면(near clip plane)을 설정",
                    "snippet": "setNearClip(${1:0.1})"
                },
                {
                    "name": "setFarClip",
                    "params": "farClip",
                    "params_typed": "float farClip",
                    "return_type": "void",
                    "desc": "Set far clipping plane",
                    "desc_ja": "遠クリップ面を設定",
                    "desc_ko": "원평면(far clip plane)을 설정",
                    "snippet": "setFarClip(${1:10000})"
                },
                {
                    "name": "getNearClip",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get near clipping plane distance",
                    "desc_ja": "近クリップ面の距離を取得",
                    "desc_ko": "근평면 거리를 얻음",
                    "snippet": "getNearClip()"
                },
                {
                    "name": "getFarClip",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get far clipping plane distance",
                    "desc_ja": "遠クリップ面の距離を取得",
                    "desc_ko": "원평면 거리를 얻음",
                    "snippet": "getFarClip()"
                },
                {
                    "name": "enableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Enable mouse input for camera control",
                    "desc_ja": "マウス入力によるカメラ操作を有効化",
                    "desc_ko": "카메라 조작을 위한 마우스 입력 활성화",
                    "snippet": "enableMouseInput()"
                },
                {
                    "name": "disableMouseInput",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Disable mouse input for camera control",
                    "desc_ja": "マウス入力によるカメラ操作を無効化",
                    "desc_ko": "카메라 조작을 위한 마우스 입력 비활성화",
                    "snippet": "disableMouseInput()"
                },
                {
                    "name": "isMouseInputEnabled",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if mouse input is enabled",
                    "desc_ja": "マウス入力が有効かどうか確認",
                    "desc_ko": "마우스 입력이 활성화되어 있는지 확인",
                    "snippet": "isMouseInputEnabled()"
                },
                {
                    "name": "mousePressed",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse press event",
                    "desc_ja": "マウス押下イベントを処理",
                    "desc_ko": "마우스 누름 이벤트 처리",
                    "snippet": "mousePressed(${1:x}, ${2:y}, ${3:button})"
                },
                {
                    "name": "mouseReleased",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse release event",
                    "desc_ja": "マウス離上イベントを処理",
                    "desc_ko": "마우스 떼기 이벤트 처리",
                    "snippet": "mouseReleased(${1:x}, ${2:y}, ${3:button})"
                },
                {
                    "name": "mouseDragged",
                    "params": "x, y, button",
                    "params_typed": "int x, int y, int button",
                    "return_type": "void",
                    "desc": "Handle mouse drag event",
                    "desc_ja": "マウスドラッグイベントを処理",
                    "desc_ko": "마우스 드래그 이벤트 처리",
                    "snippet": "mouseDragged(${1:x}, ${2:y}, ${3:button})"
                },
                {
                    "name": "mouseScrolled",
                    "params": "dx, dy",
                    "params_typed": "float dx, float dy",
                    "return_type": "void",
                    "desc": "Handle mouse scroll event (for zoom)",
                    "desc_ja": "マウススクロールイベントを処理（ズーム用）",
                    "desc_ko": "마우스 스크롤 이벤트 처리 (줌용)",
                    "snippet": "mouseScrolled(${1:dx}, ${2:dy})"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Vec3",
                    "desc": "Get camera position",
                    "desc_ja": "カメラ位置を取得",
                    "desc_ko": "카메라 위치를 얻음",
                    "snippet": "getPosition()"
                },
                {
                    "name": "setSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set rotation sensitivity",
                    "desc_ja": "回転感度を設定",
                    "desc_ko": "회전 감도를 설정",
                    "snippet": "setSensitivity(${1:1.0})"
                },
                {
                    "name": "setZoomSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set zoom sensitivity",
                    "desc_ja": "ズーム感度を設定",
                    "desc_ko": "줌 감도를 설정",
                    "snippet": "setZoomSensitivity(${1:10.0})"
                },
                {
                    "name": "setPanSensitivity",
                    "params": "sensitivity",
                    "params_typed": "float sensitivity",
                    "return_type": "void",
                    "desc": "Set pan sensitivity",
                    "desc_ja": "パン感度を設定",
                    "desc_ko": "팬 감도를 설정",
                    "snippet": "setPanSensitivity(${1:1.0})"
                }
            ]
        },
        {
            "name": "Lighting & PBR",
            "name_ja": "照明・PBR",
            "name_ko": "조명 및 PBR",
            "functions": [
                {
                    "name": "addLight",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Add a light to the scene",
                    "desc_ja": "シーンにlightを追加",
                    "desc_ko": "씬에 조명을 추가",
                    "snippet": "addLight(${1:light})"
                },
                {
                    "name": "removeLight",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Remove a light from the scene",
                    "desc_ja": "シーンからlightを削除",
                    "desc_ko": "씬에서 조명을 제거",
                    "snippet": "removeLight(${1:light})"
                },
                {
                    "name": "clearLights",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Remove all lights from the scene",
                    "desc_ja": "全てのlightを削除",
                    "desc_ko": "모든 조명을 제거",
                    "snippet": "clearLights()"
                },
                {
                    "name": "setMaterial",
                    "params": "material",
                    "params_typed": "Material& material",
                    "return_type": "void",
                    "desc": "Set material for subsequent mesh draws (activates PBR)",
                    "desc_ja": "以降のmesh描画に使うmaterialを設定（PBR有効化）",
                    "desc_ko": "이후 메쉬 렌더링에 사용할 재질을 설정 (PBR 활성화)",
                    "snippet": "setMaterial(${1:material})"
                },
                {
                    "name": "clearMaterial",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear material (return to default rendering)",
                    "desc_ja": "materialをクリア（デフォルトに戻す）",
                    "desc_ko": "재질을 해제 (기본 렌더링으로 복귀)",
                    "snippet": "clearMaterial()"
                },
                {
                    "name": "setCameraPosition",
                    "params": "pos",
                    "params_typed": "const Vec3& pos",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation",
                    "desc_ja": "specular計算用のcamera位置を設定",
                    "desc_ko": "스페큘러 계산을 위한 카메라 위치를 설정",
                    "snippet": "setCameraPosition(${1:cam.getPosition()})"
                },
                {
                    "name": "setCameraPosition",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Set camera position for specular calculation",
                    "desc_ja": "specular計算用のcamera位置を設定",
                    "desc_ko": "스페큘러 계산을 위한 카메라 위치를 설정",
                    "snippet": "setCameraPosition(${1:cam.getPosition()})"
                },
                {
                    "name": "setEnvironment",
                    "params": "env",
                    "params_typed": "Environment& env",
                    "return_type": "void",
                    "desc": "Set IBL environment for PBR ambient lighting",
                    "desc_ja": "PBR ambient用のIBL environment mapを設定",
                    "desc_ko": "PBR 앰비언트용 IBL 환경맵을 설정",
                    "snippet": "setEnvironment(${1:env})"
                },
                {
                    "name": "clearEnvironment",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear IBL environment",
                    "desc_ja": "IBL environment mapをクリア",
                    "desc_ko": "IBL 환경맵을 해제",
                    "snippet": "clearEnvironment()"
                },
                {
                    "name": "beginShadowPass",
                    "params": "light",
                    "params_typed": "Light& light",
                    "return_type": "void",
                    "desc": "Begin shadow depth pass from the light's point of view",
                    "desc_ja": "light視点のshadow depth passを開始",
                    "desc_ko": "조명 시점의 섀도우 뎁스 패스를 시작",
                    "snippet": "beginShadowPass(${1:light})"
                },
                {
                    "name": "endShadowPass",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shadow depth pass",
                    "desc_ja": "shadow depth passを終了",
                    "desc_ko": "섀도우 뎁스 패스를 종료",
                    "snippet": "endShadowPass()"
                },
                {
                    "name": "shadowDraw",
                    "params": "mesh",
                    "params_typed": "const Mesh& mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh into the shadow depth pass (depth only)",
                    "desc_ja": "shadow depth passにmeshを描画（depthのみ）",
                    "desc_ko": "섀도우 뎁스 패스에 메쉬를 렌더링 (뎁스 전용)",
                    "snippet": "shadowDraw(${1:mesh})"
                }
            ]
        },
        {
            "name": "Math - 3D",
            "name_ja": "数学 - 3D",
            "name_ko": "수학 - 3D",
            "functions": [
                {
                    "name": "Mat4_identity",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mat4",
                    "desc": "Create an identity matrix",
                    "desc_ja": "単位行列を作成",
                    "desc_ko": "단위 행렬을 생성",
                    "snippet": "Mat4_identity()"
                },
                {
                    "name": "Mat4_translate",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix",
                    "desc_ja": "平行移動行列を作成",
                    "desc_ko": "이동 행렬을 생성",
                    "snippet": "Mat4_translate(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Mat4_translate",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "Mat4",
                    "desc": "Create a translation matrix",
                    "desc_ja": "平行移動行列を作成",
                    "desc_ko": "이동 행렬을 생성",
                    "snippet": "Mat4_translate(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "Mat4_rotateX",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create X-axis rotation matrix",
                    "desc_ja": "X軸回転行列を作成",
                    "desc_ko": "X축 회전 행렬을 생성",
                    "snippet": "Mat4_rotateX(${1:radians})"
                },
                {
                    "name": "Mat4_rotateY",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Y-axis rotation matrix",
                    "desc_ja": "Y軸回転行列を作成",
                    "desc_ko": "Y축 회전 행렬을 생성",
                    "snippet": "Mat4_rotateY(${1:radians})"
                },
                {
                    "name": "Mat4_rotateZ",
                    "params": "radians",
                    "params_typed": "float radians",
                    "return_type": "Mat4",
                    "desc": "Create Z-axis rotation matrix",
                    "desc_ja": "Z軸回転行列を作成",
                    "desc_ko": "Z축 회전 행렬을 생성",
                    "snippet": "Mat4_rotateZ(${1:radians})"
                },
                {
                    "name": "Mat4_scale",
                    "params": "s",
                    "params_typed": "float s",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix",
                    "desc_ja": "スケーリング行列を作成",
                    "desc_ko": "스케일 행렬을 생성",
                    "snippet": "Mat4_scale(${1:s})"
                },
                {
                    "name": "Mat4_scale",
                    "params": "sx, sy, sz",
                    "params_typed": "float sx, float sy, float sz",
                    "return_type": "Mat4",
                    "desc": "Create a scaling matrix",
                    "desc_ja": "スケーリング行列を作成",
                    "desc_ko": "스케일 행렬을 생성",
                    "snippet": "Mat4_scale(${1:s})"
                },
                {
                    "name": "Mat4_lookAt",
                    "params": "eye, target, up",
                    "params_typed": "Vec3 eye, Vec3 target, Vec3 up",
                    "return_type": "Mat4",
                    "desc": "Create a view matrix",
                    "desc_ja": "ビュー行列を作成",
                    "desc_ko": "뷰 행렬을 생성",
                    "snippet": "Mat4_lookAt(${1:eye}, ${2:target}, ${3:up})"
                },
                {
                    "name": "Mat4_ortho",
                    "params": "left, right, bottom, top, near, far",
                    "params_typed": "float left, float right, float bottom, float top, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create an orthographic projection matrix",
                    "desc_ja": "正投影行列を作成",
                    "desc_ko": "정사영 투영 행렬을 생성",
                    "snippet": "Mat4_ortho(${1:left}, ${2:right}, ${3:bottom}, ${4:top}, ${5:near}, ${6:far})"
                },
                {
                    "name": "Mat4_perspective",
                    "params": "fov, aspect, near, far",
                    "params_typed": "float fovY, float aspect, float nearPlane, float farPlane",
                    "return_type": "Mat4",
                    "desc": "Create a perspective projection matrix",
                    "desc_ja": "透視投影行列を作成",
                    "desc_ko": "원근 투영 행렬을 생성",
                    "snippet": "Mat4_perspective(${1:fov}, ${2:aspect}, ${3:near}, ${4:far})"
                },
                {
                    "name": "Quaternion_identity",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Quaternion",
                    "desc": "Create an identity quaternion",
                    "desc_ja": "単位クォータニオンを作成",
                    "desc_ko": "단위 쿼터니언을 생성",
                    "snippet": "Quaternion_identity()"
                },
                {
                    "name": "Quaternion_fromAxisAngle",
                    "params": "axis, radians",
                    "params_typed": "Vec3 axis, float radians",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from axis-angle",
                    "desc_ja": "軸-角度からクォータニオンを作成",
                    "desc_ko": "축-각도로부터 쿼터니언을 생성",
                    "snippet": "Quaternion_fromAxisAngle(${1:axis}, ${2:radians})"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "pitch, yaw, roll",
                    "params_typed": "float pitch, float yaw, float roll",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles",
                    "desc_ja": "オイラー角からクォータニオンを作成",
                    "desc_ko": "오일러 각도로부터 쿼터니언을 생성",
                    "snippet": "Quaternion_fromEuler(${1:pitch}, ${2:yaw}, ${3:roll})"
                },
                {
                    "name": "Quaternion_fromEuler",
                    "params": "euler",
                    "params_typed": "Vec3 euler",
                    "return_type": "Quaternion",
                    "desc": "Create quaternion from Euler angles",
                    "desc_ja": "オイラー角からクォータニオンを作成",
                    "desc_ko": "오일러 각도로부터 쿼터니언을 생성",
                    "snippet": "Quaternion_fromEuler(${1:pitch}, ${2:yaw}, ${3:roll})"
                },
                {
                    "name": "Quaternion_slerp",
                    "params": "a, b, t",
                    "params_typed": "Quaternion a, Quaternion b, float t",
                    "return_type": "Quaternion",
                    "desc": "Spherical linear interpolation",
                    "desc_ja": "球面線形補間",
                    "desc_ko": "구면 선형 보간",
                    "snippet": "Quaternion_slerp(${1:a}, ${2:b}, ${3:t})"
                }
            ]
        },
        {
            "name": "Graphics - Advanced",
            "name_ja": "グラフィックス - 高度",
            "name_ko": "그래픽 - 고급",
            "functions": [
                {
                    "name": "drawMesh",
                    "params": "mesh",
                    "params_typed": "Mesh mesh",
                    "return_type": "void",
                    "desc": "Draw a mesh",
                    "desc_ja": "メッシュを描画",
                    "desc_ko": "메쉬를 그림",
                    "snippet": "drawMesh(${1:mesh})"
                },
                {
                    "name": "drawPolyline",
                    "params": "polyline",
                    "params_typed": "Polyline polyline",
                    "return_type": "void",
                    "desc": "Draw a polyline",
                    "desc_ja": "ポリラインを描画",
                    "desc_ko": "폴리라인을 그림",
                    "snippet": "drawPolyline(${1:polyline})"
                },
                {
                    "name": "createBox",
                    "params": "size",
                    "params_typed": "float size",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "desc_ja": "ボックスメッシュを作成",
                    "desc_ko": "박스 메쉬를 생성",
                    "snippet": "createBox(${1:size})"
                },
                {
                    "name": "createBox",
                    "params": "w, h, d",
                    "params_typed": "float w, float h, float d",
                    "return_type": "Mesh",
                    "desc": "Create a box mesh",
                    "desc_ja": "ボックスメッシュを作成",
                    "desc_ko": "박스 메쉬를 생성",
                    "snippet": "createBox(${1:size})"
                },
                {
                    "name": "createSphere",
                    "params": "radius, res",
                    "params_typed": "float radius, int res = 20",
                    "return_type": "Mesh",
                    "desc": "Create a sphere mesh",
                    "desc_ja": "球体メッシュを作成",
                    "desc_ko": "구 메쉬를 생성",
                    "snippet": "createSphere(${1:radius})"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y",
                    "params_typed": "const Texture& tex, float x, float y",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "desc_ja": "テクスチャを描画",
                    "desc_ko": "텍스처를 그림",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})"
                },
                {
                    "name": "drawTexture",
                    "params": "tex, x, y, w, h",
                    "params_typed": "const Texture& tex, float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw a texture",
                    "desc_ja": "テクスチャを描画",
                    "desc_ko": "텍스처를 그림",
                    "snippet": "drawTexture(${1:tex}, ${2:x}, ${3:y})"
                }
            ]
        },
        {
            "name": "Graphics - Texture & GPU",
            "name_ja": "グラフィックス - テクスチャとGPU",
            "name_ko": "그래픽 - 텍스처 & GPU",
            "functions": [
                {
                    "name": "Texture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a texture",
                    "desc_ja": "テクスチャを作成",
                    "desc_ko": "텍스처를 생성",
                    "snippet": "Texture()"
                },
                {
                    "name": "createTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture@",
                    "desc": "Create a texture (TrussSketch factory)",
                    "desc_ja": "テクスチャを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "텍스처를 생성 (TrussSketch 팩토리)",
                    "snippet": "Texture@ tex = createTexture();"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load image from file",
                    "desc_ja": "ファイルから画像を読み込む",
                    "desc_ko": "파일에서 이미지를 로드",
                    "snippet": "load(${1:\"image.png\"})"
                },
                {
                    "name": "loadFromPixels",
                    "params": "pixels",
                    "params_typed": "const Pixels& pixels",
                    "return_type": "bool",
                    "desc": "Load from pixel data",
                    "desc_ja": "ピクセルデータから読み込む",
                    "desc_ko": "픽셀 데이터에서 로드",
                    "snippet": "loadFromPixels(${1:pixels})"
                },
                {
                    "name": "bind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Bind texture",
                    "desc_ja": "テクスチャをバインド",
                    "desc_ko": "텍스처를 바인딩",
                    "snippet": "bind(${1:0})"
                },
                {
                    "name": "unbind",
                    "params": "slot",
                    "params_typed": "int slot = 0",
                    "return_type": "void",
                    "desc": "Unbind texture",
                    "desc_ja": "テクスチャのバインド解除",
                    "desc_ko": "텍스처 바인딩을 해제",
                    "snippet": "unbind(${1:0})"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get width",
                    "desc_ja": "幅を取得",
                    "desc_ko": "너비를 얻음",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get height",
                    "desc_ja": "高さを取得",
                    "desc_ko": "높이를 얻음",
                    "snippet": "getHeight()"
                }
            ]
        },
        {
            "name": "Graphics - FBO",
            "name_ja": "グラフィックス - FBO",
            "name_ko": "그래픽 - FBO",
            "functions": [
                {
                    "name": "Fbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create an FBO",
                    "desc_ja": "FBOを作成",
                    "desc_ko": "FBO를 생성",
                    "snippet": "Fbo()"
                },
                {
                    "name": "createFbo",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Fbo@",
                    "desc": "Create an FBO (TrussSketch factory)",
                    "desc_ja": "FBOを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "FBO를 생성 (TrussSketch 팩토리)",
                    "snippet": "Fbo@ fbo = createFbo();"
                },
                {
                    "name": "allocate",
                    "params": "w, h",
                    "params_typed": "int w, int h",
                    "return_type": "void",
                    "desc": "Allocate buffer",
                    "desc_ja": "バッファを確保",
                    "desc_ko": "버퍼를 할당",
                    "snippet": "allocate(${1:800}, ${2:600})"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color",
                    "desc_ja": "FBOへの描画を開始。引数なし = 前の内容を保持。引数あり = 指定色でクリア",
                    "desc_ko": "FBO 그리기 시작. 인자 없음 = 이전 내용 유지. 인자 있음 = 지정한 색으로 클리어",
                    "snippet": "begin()"
                },
                {
                    "name": "begin",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a = 1.0",
                    "return_type": "void",
                    "desc": "Begin drawing to FBO. No args = preserve previous content. With args = clear with specified color",
                    "desc_ja": "FBOへの描画を開始。引数なし = 前の内容を保持。引数あり = 指定色でクリア",
                    "desc_ko": "FBO 그리기 시작. 인자 없음 = 이전 내용 유지. 인자 있음 = 지정한 색으로 클리어",
                    "snippet": "begin()"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End drawing to FBO",
                    "desc_ja": "FBOへの描画を終了",
                    "desc_ko": "FBO 그리기 종료",
                    "snippet": "end()"
                },
                {
                    "name": "getTexture",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Texture&",
                    "desc": "Get internal texture",
                    "desc_ja": "内部テクスチャを取得",
                    "desc_ko": "내부 텍스처를 얻음",
                    "snippet": "getTexture()"
                },
                {
                    "name": "readToPixels",
                    "params": "pixels",
                    "params_typed": "Pixels& pixels",
                    "return_type": "void",
                    "desc": "Read pixels to CPU memory",
                    "desc_ja": "ピクセルをCPUメモリに読み出す",
                    "desc_ko": "픽셀을 CPU 메모리로 읽음",
                    "snippet": "readToPixels(${1:pixels})"
                }
            ]
        },
        {
            "name": "Graphics - Shader",
            "name_ja": "グラフィックス - シェーダー",
            "name_ko": "그래픽 - 셰이더",
            "functions": [
                {
                    "name": "Shader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a shader (base class, inheritable)",
                    "desc_ja": "シェーダーを作成（基底クラス、継承可能）",
                    "desc_ko": "셰이더를 생성 (베이스 클래스, 상속 가능)"
                },
                {
                    "name": "load",
                    "params": "descFn",
                    "params_typed": "const sg_shader_desc* (*descFn)(sg_backend)",
                    "return_type": "bool",
                    "desc": "Load from sokol-shdc generated function",
                    "desc_ja": "sokol-shdc生成関数からロード",
                    "desc_ko": "sokol-shdc로 생성된 함수에서 로드"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if shader is loaded",
                    "desc_ja": "シェーダーが読み込まれているか確認",
                    "desc_ko": "셰이더가 로드되었는지 확인"
                },
                {
                    "name": "begin",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Begin shader (pushes to stack)",
                    "desc_ja": "シェーダーを開始（スタックにプッシュ）",
                    "desc_ko": "셰이더 시작 (스택에 푸시)"
                },
                {
                    "name": "end",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "End shader (pops from stack)",
                    "desc_ja": "シェーダーを終了（スタックからポップ）",
                    "desc_ko": "셰이더 종료 (스택에서 팝)"
                },
                {
                    "name": "pushShader",
                    "params": "shader",
                    "params_typed": "Shader& shader",
                    "return_type": "void",
                    "desc": "Push shader to stack (subsequent draws use this shader)",
                    "desc_ja": "シェーダーをスタックにプッシュ（以降の描画にこのシェーダーを使用）",
                    "desc_ko": "셰이더를 스택에 푸시 (이후 드로우에 사용)"
                },
                {
                    "name": "popShader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Pop shader from stack",
                    "desc_ja": "シェーダーをスタックからポップ",
                    "desc_ko": "셰이더를 스택에서 꺼냄"
                },
                {
                    "name": "setUniform",
                    "params": "slot, value",
                    "params_typed": "int slot, float value",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec2& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec3& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const Vec4& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, c",
                    "params_typed": "int slot, const Color& c",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<float>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec2>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec3>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setUniform",
                    "params": "slot, v",
                    "params_typed": "int slot, const vector<Vec4>& v",
                    "return_type": "void",
                    "desc": "Set uniform variable by slot (vector overloads send arrays; Vec3 array is padded to Vec4 per std140)",
                    "desc_ja": "スロット番号でUniform変数を設定 (vector版は配列送信、Vec3配列はstd140に合わせて内部でVec4にパディング)",
                    "desc_ko": "슬롯별로 유니폼 변수를 설정 (vector 오버로드는 배열 전송, Vec3 배열은 std140에 맞춰 내부적으로 Vec4로 패딩)"
                },
                {
                    "name": "setTexture",
                    "params": "slot, view, sampler",
                    "params_typed": "int slot, sg_view view, sg_sampler sampler",
                    "return_type": "void",
                    "desc": "Bind texture to slot",
                    "desc_ja": "スロットにテクスチャをバインド",
                    "desc_ko": "슬롯에 텍스처를 바인딩"
                }
            ]
        },
        {
            "name": "Types - Pixels",
            "name_ja": "型 - Pixels",
            "name_ko": "타입 - Pixels",
            "functions": [
                {
                    "name": "Pixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create pixel buffer",
                    "desc_ja": "ピクセルバッファを作成",
                    "desc_ko": "픽셀 버퍼를 생성",
                    "snippet": "Pixels()"
                },
                {
                    "name": "createPixels",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Pixels@",
                    "desc": "Create pixel buffer (TrussSketch factory)",
                    "desc_ja": "ピクセルバッファを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "픽셀 버퍼를 생성 (TrussSketch 팩토리)",
                    "snippet": "Pixels@ px = createPixels();"
                },
                {
                    "name": "allocate",
                    "params": "w, h, channels",
                    "params_typed": "int w, int h, int channels",
                    "return_type": "void",
                    "desc": "Allocate memory",
                    "desc_ja": "メモリを確保",
                    "desc_ko": "메모리를 할당",
                    "snippet": "allocate(${1:800}, ${2:600}, ${3:4})"
                },
                {
                    "name": "getData",
                    "params": "",
                    "params_typed": "",
                    "return_type": "uint8_t*",
                    "desc": "Get raw data pointer",
                    "desc_ja": "生データポインタを取得",
                    "desc_ko": "원본 데이터 포인터를 얻음"
                },
                {
                    "name": "getColor",
                    "params": "x, y",
                    "params_typed": "int x, int y",
                    "return_type": "Color",
                    "desc": "Get color at pixel",
                    "desc_ja": "指定座標の色を取得",
                    "desc_ko": "픽셀의 색상을 얻음",
                    "snippet": "getColor(${1:x}, ${2:y})"
                },
                {
                    "name": "setColor",
                    "params": "x, y, c",
                    "params_typed": "int x, int y, const Color& c",
                    "return_type": "void",
                    "desc": "Set color at pixel",
                    "desc_ja": "指定座標の色を設定",
                    "desc_ko": "픽셀의 색상을 설정",
                    "snippet": "setColor(${1:x}, ${2:y}, ${3:color})"
                },
                {
                    "name": "save",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Save to file",
                    "desc_ja": "ファイルに保存",
                    "desc_ko": "파일로 저장"
                }
            ]
        },
        {
            "name": "Types - Mesh",
            "name_ja": "型 - Mesh",
            "name_ko": "타입 - Mesh",
            "functions": [
                {
                    "name": "createMesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Mesh@",
                    "desc": "Create a new Mesh",
                    "desc_ja": "メッシュを作成",
                    "desc_ko": "새 Mesh를 생성",
                    "snippet": "Mesh@ mesh = createMesh();"
                },
                {
                    "name": "Mesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Mesh (constructor)",
                    "desc_ja": "メッシュを作成（コンストラクタ）",
                    "desc_ko": "새 Mesh를 생성 (생성자)",
                    "snippet": "Mesh()"
                },
                {
                    "name": "setMode",
                    "params": "mode",
                    "params_typed": "int mode",
                    "return_type": "void",
                    "desc": "Set primitive mode (MESH_TRIANGLES, etc.)",
                    "desc_ja": "描画モードを設定",
                    "desc_ko": "프리미티브 모드 설정 (MESH_TRIANGLES 등)",
                    "snippet": "setMode(${1:MESH_TRIANGLES})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점을 추가",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "Vec3 v",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점을 추가",
                    "snippet": "addVertex(${1:x}, ${2:y}, ${3:0})"
                },
                {
                    "name": "addColor",
                    "params": "r, g, b, a",
                    "params_typed": "float r, float g, float b, float a",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "desc_ja": "頂点カラーを追加",
                    "desc_ko": "정점에 색상을 추가",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addColor",
                    "params": "c",
                    "params_typed": "Color c",
                    "return_type": "void",
                    "desc": "Add a color for the vertex",
                    "desc_ja": "頂点カラーを追加",
                    "desc_ko": "정점에 색상을 추가",
                    "snippet": "addColor(${1:1}, ${2:1}, ${3:1}, ${4:1})"
                },
                {
                    "name": "addTexCoord",
                    "params": "u, v",
                    "params_typed": "float u, float v",
                    "return_type": "void",
                    "desc": "Add a texture coordinate",
                    "desc_ja": "テクスチャ座標を追加",
                    "desc_ko": "텍스처 좌표를 추가",
                    "snippet": "addTexCoord(${1:u}, ${2:v})"
                },
                {
                    "name": "addNormal",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "void",
                    "desc": "Add a normal vector",
                    "desc_ja": "法線を追加",
                    "desc_ko": "법선 벡터를 추가",
                    "snippet": "addNormal(${1:x}, ${2:y}, ${3:z})"
                },
                {
                    "name": "addIndex",
                    "params": "index",
                    "params_typed": "int index",
                    "return_type": "void",
                    "desc": "Add an index",
                    "desc_ja": "インデックスを追加",
                    "desc_ko": "인덱스를 추가",
                    "snippet": "addIndex(${1:index})"
                },
                {
                    "name": "addTriangle",
                    "params": "i1, i2, i3",
                    "params_typed": "int i1, int i2, int i3",
                    "return_type": "void",
                    "desc": "Add a triangle (3 indices)",
                    "desc_ja": "三角形を追加（インデックス3つ）",
                    "desc_ko": "삼각형을 추가 (인덱스 3개)",
                    "snippet": "addTriangle(${1:i1}, ${2:i2}, ${3:i3})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Clear all data",
                    "desc_ja": "データをクリア",
                    "desc_ko": "모든 데이터를 지움",
                    "snippet": "clear()"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the mesh",
                    "desc_ja": "メッシュを描画",
                    "desc_ko": "메쉬를 그림",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Types - Path",
            "name_ja": "型 - Path",
            "name_ko": "타입 - Path",
            "functions": [
                {
                    "name": "createPath",
                    "params": "",
                    "params_typed": "",
                    "return_type": "Path@",
                    "desc": "Create a new Path",
                    "desc_ja": "パスを作成",
                    "desc_ko": "새 Path를 생성",
                    "snippet": "Path@ path = createPath();"
                },
                {
                    "name": "Path",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a new Path (constructor)",
                    "desc_ja": "パスを作成（コンストラクタ）",
                    "desc_ko": "새 Path를 생성 (생성자)",
                    "snippet": "Path()"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a vertex",
                    "desc_ja": "頂点を追加",
                    "desc_ko": "정점을 추가",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "lineTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a line segment to point",
                    "desc_ja": "指定点まで線を追加",
                    "desc_ko": "특정 점까지 선분을 추가",
                    "snippet": "lineTo(${1:x}, ${2:y})"
                },
                {
                    "name": "bezierTo",
                    "params": "cx1, cy1, cx2, cy2, x, y",
                    "params_typed": "float cx1, float cy1, float cx2, float cy2, float x, float y",
                    "return_type": "void",
                    "desc": "Add a cubic bezier curve",
                    "desc_ja": "3次ベジェ曲線を追加",
                    "desc_ko": "3차 베지어 곡선을 추가",
                    "snippet": "bezierTo(${1:cx1}, ${2:cy1}, ${3:cx2}, ${4:cy2}, ${5:x}, ${6:y})"
                },
                {
                    "name": "quadBezierTo",
                    "params": "cx, cy, x, y",
                    "params_typed": "float cx, float cy, float x, float y",
                    "return_type": "void",
                    "desc": "Add a quadratic bezier curve",
                    "desc_ja": "2次ベジェ曲線を追加",
                    "desc_ko": "2차 베지어 곡선을 추가",
                    "snippet": "quadBezierTo(${1:cx}, ${2:cy}, ${3:x}, ${4:y})"
                },
                {
                    "name": "curveTo",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Add a Catmull-Rom curve segment",
                    "desc_ja": "Catmull-Rom曲線を追加",
                    "desc_ko": "Catmull-Rom 곡선 구간을 추가",
                    "snippet": "curveTo(${1:x}, ${2:y})"
                },
                {
                    "name": "arc",
                    "params": "x, y, rX, rY, start, end",
                    "params_typed": "float x, float y, float rX, float rY, float angleBegin, float angleEnd",
                    "return_type": "void",
                    "desc": "Add an arc",
                    "desc_ja": "円弧を追加",
                    "desc_ko": "호를 추가",
                    "snippet": "arc(${1:x}, ${2:y}, ${3:rX}, ${4:rY}, ${5:0}, ${6:360})"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the shape",
                    "desc_ja": "パスを閉じる",
                    "desc_ko": "도형을 닫음",
                    "snippet": "close()"
                }
            ]
        },
        {
            "name": "Types - StrokeMesh",
            "name_ja": "型 - StrokeMesh",
            "name_ko": "타입 - StrokeMesh",
            "functions": [
                {
                    "name": "createStrokeMesh",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeMesh@",
                    "desc": "Create a new StrokeMesh instance",
                    "desc_ja": "StrokeMeshインスタンスを作成",
                    "desc_ko": "새 StrokeMesh 인스턴스를 생성",
                    "snippet": "createStrokeMesh()"
                },
                {
                    "name": "setWidth",
                    "params": "width",
                    "params_typed": "float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke width (method chaining)",
                    "desc_ja": "線の太さを設定（メソッドチェーン対応）",
                    "desc_ko": "스트로크 너비를 설정 (메서드 체이닝)",
                    "snippet": "setWidth(${1:5.0})"
                },
                {
                    "name": "setColor",
                    "params": "color",
                    "params_typed": "const Color &in color",
                    "return_type": "StrokeMesh&",
                    "desc": "Set stroke color (method chaining)",
                    "desc_ja": "線の色を設定（メソッドチェーン対応）",
                    "desc_ko": "스트로크 색상을 설정 (메서드 체이닝)",
                    "snippet": "setColor(${1:color})"
                },
                {
                    "name": "setCapType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set cap type: Butt, Round, Square (method chaining)",
                    "desc_ja": "端点の形状を設定（メソッドチェーン対応）",
                    "desc_ko": "캡 타입 설정: Butt, Round, Square (메서드 체이닝)",
                    "snippet": "setCapType(${1:Round})"
                },
                {
                    "name": "setJoinType",
                    "params": "type",
                    "params_typed": "int type",
                    "return_type": "StrokeMesh&",
                    "desc": "Set join type: Miter, Round, Bevel (method chaining)",
                    "desc_ja": "結合部の形状を設定（メソッドチェーン対応）",
                    "desc_ko": "조인 타입 설정: Miter, Round, Bevel (메서드 체이닝)",
                    "snippet": "setJoinType(${1:Round})"
                },
                {
                    "name": "setMiterLimit",
                    "params": "limit",
                    "params_typed": "float limit",
                    "return_type": "StrokeMesh&",
                    "desc": "Set miter limit for sharp corners (method chaining)",
                    "desc_ja": "マイター結合の限界値を設定（メソッドチェーン対応）",
                    "desc_ko": "날카로운 모서리의 미터 한계를 설정 (메서드 체이닝)",
                    "snippet": "setMiterLimit(${1:10.0})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertex",
                    "params": "x, y, z",
                    "params_typed": "float x, float y, float z",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec2 &in v",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertex",
                    "params": "v",
                    "params_typed": "const Vec3 &in v",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex (method chaining)",
                    "desc_ja": "頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "정점을 추가 (메서드 체이닝)",
                    "snippet": "addVertex(${1:x}, ${2:y})"
                },
                {
                    "name": "addVertexWithWidth",
                    "params": "x, y, width",
                    "params_typed": "float x, float y, float width",
                    "return_type": "StrokeMesh&",
                    "desc": "Add a vertex with variable width (method chaining)",
                    "desc_ja": "可変幅で頂点を追加（メソッドチェーン対応）",
                    "desc_ko": "가변 너비를 가진 정점을 추가 (메서드 체이닝)",
                    "snippet": "addVertexWithWidth(${1:x}, ${2:y}, ${3:width})"
                },
                {
                    "name": "setShape",
                    "params": "path",
                    "params_typed": "Path@ path",
                    "return_type": "StrokeMesh&",
                    "desc": "Set shape from Path (method chaining)",
                    "desc_ja": "Pathから形状を設定（メソッドチェーン対応）",
                    "desc_ko": "Path로부터 도형을 설정 (메서드 체이닝)",
                    "snippet": "setShape(${1:path})"
                },
                {
                    "name": "setClosed",
                    "params": "closed",
                    "params_typed": "bool closed",
                    "return_type": "StrokeMesh&",
                    "desc": "Set whether the stroke is closed (method chaining)",
                    "desc_ja": "閉じたストロークかどうかを設定（メソッドチェーン対応）",
                    "desc_ko": "스트로크가 닫혀 있는지 설정 (메서드 체이닝)",
                    "snippet": "setClosed(${1:true})"
                },
                {
                    "name": "clear",
                    "params": "",
                    "params_typed": "",
                    "return_type": "StrokeMesh&",
                    "desc": "Clear all vertices (method chaining)",
                    "desc_ja": "全頂点をクリア（メソッドチェーン対応）",
                    "desc_ko": "모든 정점을 지움 (메서드 체이닝)",
                    "snippet": "clear()"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the internal mesh (required before draw)",
                    "desc_ja": "内部メッシュを更新（描画前に必須）",
                    "desc_ko": "내부 메쉬를 업데이트 (그리기 전에 필요)",
                    "snippet": "update()"
                },
                {
                    "name": "draw",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Draw the stroke mesh",
                    "desc_ja": "ストロークメッシュを描画",
                    "desc_ko": "스트로크 메쉬를 그림",
                    "snippet": "draw()"
                }
            ]
        },
        {
            "name": "Video",
            "name_ja": "ビデオ",
            "name_ko": "비디오",
            "functions": [
                {
                    "name": "VideoPlayer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a video player",
                    "desc_ja": "ビデオプレイヤーを作成",
                    "desc_ko": "비디오 플레이어를 생성",
                    "snippet": "VideoPlayer()"
                },
                {
                    "name": "createVideoPlayer",
                    "params": "",
                    "params_typed": "",
                    "return_type": "VideoPlayer@",
                    "desc": "Create a video player (TrussSketch factory)",
                    "desc_ja": "ビデオプレイヤーを作成（TrussSketch用ファクトリ）",
                    "desc_ko": "비디오 플레이어를 생성 (TrussSketch 팩토리)",
                    "snippet": "VideoPlayer@ vid = createVideoPlayer();"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const string& path",
                    "return_type": "bool",
                    "desc": "Load a video file",
                    "desc_ja": "ビデオファイルを読み込む",
                    "desc_ko": "비디오 파일을 로드",
                    "snippet": "load(${1:\"video.mp4\"})"
                },
                {
                    "name": "close",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Close the video and release resources",
                    "desc_ja": "ビデオを閉じてリソースを解放",
                    "desc_ko": "비디오를 닫고 리소스를 해제",
                    "snippet": "close()"
                },
                {
                    "name": "isLoaded",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a video is loaded",
                    "desc_ja": "ビデオが読み込まれているか確認",
                    "desc_ko": "비디오가 로드되었는지 확인",
                    "snippet": "isLoaded()"
                },
                {
                    "name": "play",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Start or resume playback",
                    "desc_ja": "再生を開始または再開",
                    "desc_ko": "재생을 시작하거나 재개",
                    "snippet": "play()"
                },
                {
                    "name": "stop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Stop playback and reset to beginning",
                    "desc_ja": "再生を停止して先頭に戻す",
                    "desc_ko": "재생을 중지하고 처음으로 되돌림",
                    "snippet": "stop()"
                },
                {
                    "name": "setPaused",
                    "params": "paused",
                    "params_typed": "bool paused",
                    "return_type": "void",
                    "desc": "Pause or resume playback",
                    "desc_ja": "一時停止または再開",
                    "desc_ko": "일시정지 또는 재개",
                    "snippet": "setPaused(${1:true})"
                },
                {
                    "name": "togglePause",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Toggle pause state",
                    "desc_ja": "一時停止を切り替え",
                    "desc_ko": "일시정지 상태를 전환",
                    "snippet": "togglePause()"
                },
                {
                    "name": "update",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Update the video frame. Call once per frame in update()",
                    "desc_ja": "ビデオフレームを更新。update()内で毎フレーム呼ぶ",
                    "desc_ko": "비디오 프레임을 업데이트. update()에서 매 프레임 호출",
                    "snippet": "update()"
                },
                {
                    "name": "isPlaying",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is currently playing (not paused)",
                    "desc_ja": "再生中か確認（一時停止中は false）",
                    "desc_ko": "현재 재생 중인지 확인 (일시정지 시 false)",
                    "snippet": "isPlaying()"
                },
                {
                    "name": "isPaused",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if video is paused",
                    "desc_ja": "一時停止中か確認",
                    "desc_ko": "일시정지 상태인지 확인",
                    "snippet": "isPaused()"
                },
                {
                    "name": "isFrameNew",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if a new frame is available since last update",
                    "desc_ja": "前回のupdate以降に新しいフレームがあるか確認",
                    "desc_ko": "마지막 업데이트 이후 새 프레임이 있는지 확인",
                    "snippet": "isFrameNew()"
                },
                {
                    "name": "isDone",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if playback has reached the end",
                    "desc_ja": "再生が末尾に達したか確認",
                    "desc_ko": "재생이 끝에 도달했는지 확인",
                    "snippet": "isDone()"
                },
                {
                    "name": "getWidth",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video width in pixels",
                    "desc_ja": "ビデオの幅をピクセル単位で取得",
                    "desc_ko": "비디오 너비를 픽셀 단위로 가져옴",
                    "snippet": "getWidth()"
                },
                {
                    "name": "getHeight",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get video height in pixels",
                    "desc_ja": "ビデオの高さをピクセル単位で取得",
                    "desc_ko": "비디오 높이를 픽셀 단위로 가져옴",
                    "snippet": "getHeight()"
                },
                {
                    "name": "getDuration",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get total duration in seconds",
                    "desc_ja": "総再生時間を秒単位で取得",
                    "desc_ko": "전체 재생 시간을 초 단위로 가져옴",
                    "snippet": "getDuration()"
                },
                {
                    "name": "getPosition",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current position (0.0 to 1.0)",
                    "desc_ja": "現在の再生位置を取得（0.0〜1.0）",
                    "desc_ko": "현재 재생 위치를 가져옴 (0.0~1.0)",
                    "snippet": "getPosition()"
                },
                {
                    "name": "setPosition",
                    "params": "pct",
                    "params_typed": "float pct",
                    "return_type": "void",
                    "desc": "Seek to position (0.0 to 1.0)",
                    "desc_ja": "指定位置にシーク（0.0〜1.0）",
                    "desc_ko": "지정된 위치로 이동 (0.0~1.0)",
                    "snippet": "setPosition(${1:0.5})"
                },
                {
                    "name": "getCurrentTime",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback time in seconds",
                    "desc_ja": "現在の再生時間を秒単位で取得",
                    "desc_ko": "현재 재생 시간을 초 단위로 가져옴",
                    "snippet": "getCurrentTime()"
                },
                {
                    "name": "setCurrentTime",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Seek to a specific time in seconds",
                    "desc_ja": "指定した秒数にシーク",
                    "desc_ko": "지정된 시간(초)으로 이동",
                    "snippet": "setCurrentTime(${1:10.0})"
                },
                {
                    "name": "setVolume",
                    "params": "vol",
                    "params_typed": "float vol",
                    "return_type": "void",
                    "desc": "Set audio volume (0.0 to 1.0)",
                    "desc_ja": "音量を設定（0.0〜1.0）",
                    "desc_ko": "음량을 설정 (0.0~1.0)",
                    "snippet": "setVolume(${1:0.8})"
                },
                {
                    "name": "getVolume",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current volume",
                    "desc_ja": "現在の音量を取得",
                    "desc_ko": "현재 음량을 가져옴",
                    "snippet": "getVolume()"
                },
                {
                    "name": "setSpeed",
                    "params": "speed",
                    "params_typed": "float speed",
                    "return_type": "void",
                    "desc": "Set playback speed (1.0 = normal, 2.0 = double speed)",
                    "desc_ja": "再生速度を設定（1.0=通常、2.0=2倍速）",
                    "desc_ko": "재생 속도를 설정 (1.0=보통, 2.0=2배속)",
                    "snippet": "setSpeed(${1:1.0})"
                },
                {
                    "name": "getSpeed",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current playback speed",
                    "desc_ja": "現在の再生速度を取得",
                    "desc_ko": "현재 재생 속도를 가져옴",
                    "snippet": "getSpeed()"
                },
                {
                    "name": "setPan",
                    "params": "pan",
                    "params_typed": "float pan",
                    "return_type": "void",
                    "desc": "Set stereo pan (-1.0 left, 0.0 center, 1.0 right)",
                    "desc_ja": "ステレオパンを設定（-1.0=左、0.0=中央、1.0=右）",
                    "desc_ko": "스테레오 팬을 설정 (-1.0=좌, 0.0=중앙, 1.0=우)",
                    "snippet": "setPan(${1:0.0})"
                },
                {
                    "name": "getPan",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current stereo pan",
                    "desc_ja": "現在のステレオパンを取得",
                    "desc_ko": "현재 스테레오 팬을 가져옴",
                    "snippet": "getPan()"
                },
                {
                    "name": "setLoop",
                    "params": "loop",
                    "params_typed": "bool loop",
                    "return_type": "void",
                    "desc": "Enable/disable looping",
                    "desc_ja": "ループ再生を設定",
                    "desc_ko": "반복 재생을 활성/비활성",
                    "snippet": "setLoop(${1:true})"
                },
                {
                    "name": "isLoop",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if looping is enabled",
                    "desc_ja": "ループ再生が有効か確認",
                    "desc_ko": "반복 재생이 활성화되었는지 확인",
                    "snippet": "isLoop()"
                },
                {
                    "name": "getCurrentFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get current frame number",
                    "desc_ja": "現在のフレーム番号を取得",
                    "desc_ko": "현재 프레임 번호를 가져옴",
                    "snippet": "getCurrentFrame()"
                },
                {
                    "name": "getTotalFrames",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get total number of frames",
                    "desc_ja": "総フレーム数を取得",
                    "desc_ko": "전체 프레임 수를 가져옴",
                    "snippet": "getTotalFrames()"
                },
                {
                    "name": "setFrame",
                    "params": "frame",
                    "params_typed": "int frame",
                    "return_type": "void",
                    "desc": "Seek to a specific frame number",
                    "desc_ja": "指定フレームにシーク",
                    "desc_ko": "지정된 프레임으로 이동",
                    "snippet": "setFrame(${1:0})"
                },
                {
                    "name": "nextFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Advance to the next frame",
                    "desc_ja": "次のフレームに進む",
                    "desc_ko": "다음 프레임으로 이동",
                    "snippet": "nextFrame()"
                },
                {
                    "name": "previousFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go back to the previous frame",
                    "desc_ja": "前のフレームに戻る",
                    "desc_ko": "이전 프레임으로 이동",
                    "snippet": "previousFrame()"
                },
                {
                    "name": "firstFrame",
                    "params": "",
                    "params_typed": "",
                    "return_type": "void",
                    "desc": "Go to the first frame",
                    "desc_ja": "最初のフレームに移動",
                    "desc_ko": "첫 프레임으로 이동",
                    "snippet": "firstFrame()"
                },
                {
                    "name": "setGammaCorrection",
                    "params": "gamma",
                    "params_typed": "float gamma",
                    "return_type": "void",
                    "desc": "Set gamma correction (1.0 = none). Use ~0.45 to brighten on platforms with dark output (e.g. macOS AVFoundation)",
                    "desc_ja": "ガンマ補正を設定（1.0=補正なし）。macOS等で暗くなる場合に~0.45で明るくする",
                    "desc_ko": "감마 보정을 설정 (1.0=보정 없음). macOS 등에서 어둡게 나오면 ~0.45로 밝게",
                    "snippet": "setGammaCorrection(${1:1.0})"
                },
                {
                    "name": "getGammaCorrection",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get current gamma correction value",
                    "desc_ja": "現在のガンマ補正値を取得",
                    "desc_ko": "현재 감마 보정 값을 가져옴",
                    "snippet": "getGammaCorrection()"
                },
                {
                    "name": "setUseHwAccel",
                    "params": "enable",
                    "params_typed": "bool enable",
                    "return_type": "void",
                    "desc": "Enable/disable hardware decoding. Must be called before load(). Default: true. When enabled, the player probes available HW backends (VAAPI, V4L2M2M, CUDA, etc.) and falls back to software if none are available. Currently affects the Linux backend only.",
                    "desc_ja": "ハードウェアデコードの有効/無効。load()の前に呼ぶ。デフォルト: true。有効時はHWバックエンド（VAAPI, V4L2M2M, CUDA等）を自動検出し、なければソフトウェアにフォールバック。現在Linuxのみ対応",
                    "desc_ko": "하드웨어 디코딩 활성/비활성. load() 전에 호출. 기본값: true. 활성화 시 HW 백엔드(VAAPI, V4L2M2M, CUDA 등)를 자동 탐색하고, 없으면 소프트웨어로 폴백. 현재 Linux만 지원",
                    "snippet": "setUseHwAccel(${1:true})"
                },
                {
                    "name": "getUseHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Get HW accel preference (not the actual backend — use isUsingHwAccel() for that)",
                    "desc_ja": "HWアクセル設定を取得（実際のバックエンドはisUsingHwAccel()で確認）",
                    "desc_ko": "HW 가속 설정을 가져옴 (실제 백엔드는 isUsingHwAccel()로 확인)",
                    "snippet": "getUseHwAccel()"
                },
                {
                    "name": "isUsingHwAccel",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if hardware decoding is currently active (after load)",
                    "desc_ja": "ハードウェアデコードが現在有効か確認（load後に使用）",
                    "desc_ko": "하드웨어 디코딩이 현재 활성 상태인지 확인 (load 후 사용)",
                    "snippet": "isUsingHwAccel()"
                },
                {
                    "name": "getHwAccelName",
                    "params": "",
                    "params_typed": "",
                    "return_type": "string",
                    "desc": "Get the name of the active decode backend. Returns 'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', or 'none'",
                    "desc_ja": "使用中のデコードバックエンド名を取得。'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', 'none' のいずれか",
                    "desc_ko": "사용 중인 디코드 백엔드 이름을 가져옴. 'vaapi', 'v4l2m2m', 'cuda', 'videotoolbox', 'mediafoundation', 'software', 'none' 중 하나",
                    "snippet": "getHwAccelName()"
                },
                {
                    "name": "setResyncThreshold",
                    "params": "seconds",
                    "params_typed": "float seconds",
                    "return_type": "void",
                    "desc": "Set the maximum video/audio drift before hard re-sync. When drift exceeds this threshold, video seeks to match audio position instead of catching up frame-by-frame. Set to 0 to disable. Default: 0.5s. Primarily affects Linux (FFmpeg) backend.",
                    "desc_ja": "映像/音声のズレが許容値を超えた場合にハードリシンクする閾値を設定。ズレがこの値を超えるとフレーム送りではなくシークで同期。0で無効。デフォルト: 0.5秒。主にLinux(FFmpeg)で有効",
                    "desc_ko": "비디오/오디오 드리프트가 임계값을 초과하면 하드 리싱크하는 값을 설정. 드리프트가 이 값을 초과하면 프레임 추적 대신 시크로 동기화. 0이면 비활성. 기본값: 0.5초. 주로 Linux(FFmpeg)에서 유효",
                    "snippet": "setResyncThreshold(${1:0.5})"
                },
                {
                    "name": "getResyncThreshold",
                    "params": "",
                    "params_typed": "",
                    "return_type": "float",
                    "desc": "Get the current resync threshold in seconds",
                    "desc_ja": "現在のリシンク閾値を秒単位で取得",
                    "desc_ko": "현재 리싱크 임계값을 초 단위로 가져옴",
                    "snippet": "getResyncThreshold()"
                },
                {
                    "name": "hasAudio",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if the loaded video has an audio track",
                    "desc_ja": "読み込んだビデオに音声トラックがあるか確認",
                    "desc_ko": "로드된 비디오에 오디오 트랙이 있는지 확인",
                    "snippet": "hasAudio()"
                },
                {
                    "name": "extractFrame",
                    "params": "path, outPixels, timeSec",
                    "params_typed": "const string& path, Pixels& outPixels, float timeSec",
                    "return_type": "bool",
                    "desc": "Extract a single frame from a video file without loading the full video. Useful for thumbnails",
                    "desc_ja": "ビデオファイルから1フレームを抽出（全体を読み込まずに）。サムネイル生成に便利",
                    "desc_ko": "비디오 파일에서 전체를 로드하지 않고 단일 프레임을 추출. 썸네일 생성에 유용",
                    "snippet": "VideoPlayer::extractFrame(${1:\"video.mp4\"}, pixels, ${2:0.0})"
                }
            ]
        },
        {
            "name": "Addon: tcxLut (Color Grading)",
            "name_ja": "アドオン: tcxLut（カラーグレーディング）",
            "name_ko": "애드온: tcxLut (컬러 그레이딩)",
            "functions": [
                {
                    "name": "tcx::lut::Lut3D",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a 3D LUT for color grading",
                    "desc_ja": "カラーグレーディング用3D LUTを作成",
                    "desc_ko": "컬러 그레이딩용 3D LUT를 생성"
                },
                {
                    "name": "load",
                    "params": "path",
                    "params_typed": "const fs::path& path",
                    "return_type": "bool",
                    "desc": "Load .cube file",
                    "desc_ja": ".cubeファイルを読み込む",
                    "desc_ko": ".cube 파일을 로드"
                },
                {
                    "name": "allocate",
                    "params": "size, data",
                    "params_typed": "int size, const float* data = nullptr",
                    "return_type": "void",
                    "desc": "Allocate LUT with optional data",
                    "desc_ja": "LUTをメモリ確保（データ指定可）",
                    "desc_ko": "선택적 데이터로 LUT를 할당"
                },
                {
                    "name": "isAllocated",
                    "params": "",
                    "params_typed": "",
                    "return_type": "bool",
                    "desc": "Check if LUT is allocated",
                    "desc_ja": "LUTが確保済みか確認",
                    "desc_ko": "LUT가 할당되었는지 확인"
                },
                {
                    "name": "getSize",
                    "params": "",
                    "params_typed": "",
                    "return_type": "int",
                    "desc": "Get LUT size (e.g., 32 for 32x32x32)",
                    "desc_ja": "LUTサイズを取得（32x32x32なら32）",
                    "desc_ko": "LUT 크기를 얻음 (예: 32x32x32의 경우 32)"
                },
                {
                    "name": "tcx::lut::createIdentity",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create identity LUT (no color change)",
                    "desc_ja": "Identity LUTを生成（色変更なし）",
                    "desc_ko": "단위 LUT를 생성 (색상 변화 없음)"
                },
                {
                    "name": "tcx::lut::createVintage",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create vintage/faded look LUT",
                    "desc_ja": "ビンテージ/フェード風LUTを生成",
                    "desc_ko": "빈티지/페이드 룩 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createCinematic",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cinematic orange/teal LUT",
                    "desc_ja": "シネマティック（オレンジ/ティール）LUTを生成",
                    "desc_ko": "시네마틱 오렌지/틸 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createFilmNoir",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create film noir high-contrast B&W LUT",
                    "desc_ja": "フィルムノワール（高コントラストB&W）LUTを生成",
                    "desc_ko": "필름 누아르 고대비 흑백 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createWarm",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create warm color shift LUT",
                    "desc_ja": "暖色系LUTを生成",
                    "desc_ko": "따뜻한 색조 시프트 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createCool",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cool color shift LUT",
                    "desc_ja": "寒色系LUTを生成",
                    "desc_ko": "차가운 색조 시프트 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createCyberpunk",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create cyberpunk neon pink/cyan LUT",
                    "desc_ja": "サイバーパンク（ネオンピンク/シアン）LUTを生成",
                    "desc_ko": "사이버펑크 네온 핑크/시안 LUT를 생성"
                },
                {
                    "name": "tcx::lut::createPastel",
                    "params": "size",
                    "params_typed": "int size = 32",
                    "return_type": "Lut3D",
                    "desc": "Create soft pastel LUT",
                    "desc_ja": "パステル調LUTを生成",
                    "desc_ko": "부드러운 파스텔 LUT를 생성"
                },
                {
                    "name": "tcx::lut::LutShader",
                    "params": "",
                    "params_typed": "",
                    "return_type": "",
                    "desc": "Create a LUT shader for color grading",
                    "desc_ja": "カラーグレーディング用LUTシェーダーを作成",
                    "desc_ko": "컬러 그레이딩용 LUT 셰이더를 생성"
                },
                {
                    "name": "setTexture",
                    "params": "tex",
                    "params_typed": "const T& tex",
                    "return_type": "void",
                    "desc": "Set source texture (VideoGrabber, Texture, Fbo, etc.)",
                    "desc_ja": "ソーステクスチャを設定（VideoGrabber, Texture, Fboなど）",
                    "desc_ko": "소스 텍스처 설정 (VideoGrabber, Texture, Fbo 등)"
                },
                {
                    "name": "setLut",
                    "params": "lut",
                    "params_typed": "const Lut3D& lut",
                    "return_type": "void",
                    "desc": "Set LUT to apply",
                    "desc_ja": "適用するLUTを設定",
                    "desc_ko": "적용할 LUT를 설정"
                },
                {
                    "name": "setBlend",
                    "params": "blend",
                    "params_typed": "float blend",
                    "return_type": "void",
                    "desc": "Set blend amount (0=original, 1=full LUT)",
                    "desc_ja": "ブレンド量を設定（0=元画像, 1=LUT全適用）",
                    "desc_ko": "블렌드 양 설정 (0=원본, 1=LUT 완전 적용)"
                },
                {
                    "name": "draw",
                    "params": "x, y",
                    "params_typed": "float x, float y",
                    "return_type": "void",
                    "desc": "Draw with LUT applied",
                    "desc_ja": "LUTを適用して描画",
                    "desc_ko": "LUT를 적용하여 그림"
                },
                {
                    "name": "draw",
                    "params": "x, y, w, h",
                    "params_typed": "float x, float y, float w, float h",
                    "return_type": "void",
                    "desc": "Draw with LUT applied",
                    "desc_ja": "LUTを適用して描画",
                    "desc_ko": "LUT를 적용하여 그림"
                },
                {
                    "name": "drawSubsection",
                    "params": "x, y, w, h, sx, sy, sw, sh",
                    "params_typed": "float x, float y, float w, float h, float sx, float sy, float sw, float sh",
                    "return_type": "void",
                    "desc": "Draw subsection with LUT applied",
                    "desc_ja": "LUTを適用して部分描画",
                    "desc_ko": "LUT를 적용하여 부분을 그림"
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
            "desc_ja": "2Dベクトル (x, y)",
            "desc_ko": "2D 벡터 (x, y)",
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
            "desc_ja": "3Dベクトル (x, y, z)",
            "desc_ko": "3D 벡터 (x, y, z)",
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
            "desc_ja": "RGBAカラー (0.0-1.0範囲)",
            "desc_ko": "RGBA 색상 (0.0-1.0 범위)",
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
            "desc_ja": "矩形 (x, y, width, height)",
            "desc_ko": "사각형 (x, y, width, height)",
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
            "desc_ja": "3D回転用単位クォータニオン",
            "desc_ko": "3D 회전용 단위 쿼터니언",
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
            "desc_ja": "画像操作用ピクセルバッファ",
            "desc_ko": "이미지 조작용 픽셀 버퍼",
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
            "desc_ja": "CPUピクセルとGPUテクスチャを持つ画像",
            "desc_ko": "CPU 픽셀과 GPU 텍스처를 가진 이미지",
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
            "desc_ja": "レンダリング用GPUテクスチャ",
            "desc_ko": "렌더링용 GPU 텍스처",
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
            "desc_ja": "オフスクリーンレンダリング用FBO",
            "desc_ko": "오프스크린 렌더링용 프레임버퍼 객체",
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
            "desc_ja": "線と曲線のパス/ポリライン",
            "desc_ko": "선과 곡선을 위한 경로/폴리라인",
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
            "desc_ja": "頂点・色・法線・インデックスを持つ3Dメッシュ",
            "desc_ko": "정점, 색상, 노멀, 인덱스를 가진 3D 메쉬",
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
            "desc_ja": "オーディオ再生",
            "desc_ko": "오디오 재생",
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
            "desc_ja": "テキストレンダリング用TrueTypeフォント",
            "desc_ko": "텍스트 렌더링용 트루타입 폰트",
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
            "desc_ja": "即時フラッシュ付きストリーミングファイルライター",
            "desc_ko": "즉시 플러시되는 스트리밍 파일 라이터",
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
            "desc_ja": "大きなファイル用ストリーミングファイルリーダー",
            "desc_ko": "대용량 파일용 스트리밍 파일 리더",
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
            "desc_ja": "HSB色空間 (H/S/B: 0-1)",
            "desc_ko": "HSB 색공간 (H/S/B: 0-1)"
        },
        {
            "name": "ColorOKLCH",
            "desc": "Perceptually uniform OKLCH color",
            "desc_ja": "知覚均一なOKLCHカラー",
            "desc_ko": "지각적 균일 OKLCH 색상"
        },
        {
            "name": "ChipSound",
            "desc": "Chip/synthesized sound generation",
            "desc_ja": "チップ/合成サウンド生成",
            "desc_ko": "칩/합성 사운드 생성"
        },
        {
            "name": "Light",
            "desc": "Light source for 3D PBR rendering (directional, point, or spot)",
            "desc_ja": "3D PBR用light（directional, point, spot）",
            "desc_ko": "3D PBR 렌더링용 광원 (평행광, 점광, 스포트라이트)",
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
            "desc_ja": "PBR material（metallic-roughness、glTF 2.0互換）",
            "desc_ko": "PBR 재질 (메탈릭-러프니스 워크플로우, glTF 2.0 호환)",
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
            "desc_ja": "IESNA LM-63配光profile（角度別の光強度分布）",
            "desc_ko": "IESNA LM-63 배광 프로파일 (각도별 조명 강도)",
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
            "desc_ja": "PBR ambient用IBL environment map（irradiance + prefilter + BRDF LUT）",
            "desc_ko": "PBR 앰비언트용 IBL 환경맵 (이래디언스 + 프리필터 + BRDF LUT)",
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
            "desc_ja": "マウス操作対応3Dカメラ",
            "desc_ko": "마우스 조작 가능한 3D 카메라"
        },
        {
            "name": "Platform",
            "desc": "Compile-time OS detection. All methods are constexpr and resolve at compile time based on the target platform.",
            "desc_ja": "コンパイル時のOS判定。全メソッドはconstexprで、ターゲットプラットフォームに応じてコンパイル時に解決される",
            "desc_ko": "컴파일 타임 OS 감지. 모든 메서드는 constexpr이며 대상 플랫폼에 따라 컴파일 타임에 결정됨",
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
            "desc_ja": "sokol_gfxのバックエンドを実行時に判定。値はsg_setup()完了後 (最初のsetup()以降) のみ有効",
            "desc_ko": "sokol_gfx 백엔드의 런타임 쿼리. 값은 sg_setup() 완료 후 (첫 setup() 이후) 에만 유효",
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
            "desc_ja": "trussc_app() がCMake configure 時にコンパイル定義として注入するビルド時刻情報。cmake 再実行で更新される。date/time系フィールドは configure マシンのローカル時刻、timestamp は UTC Unix秒",
            "desc_ko": "trussc_app()이 CMake 구성 시점에 컴파일 정의로 주입하는 빌드 타임스탬프. cmake 재구성 시 갱신됨. date/time 필드는 로컬 시간, timestamp는 UTC Unix 초",
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
    module.exports = TrussCAPI;
}

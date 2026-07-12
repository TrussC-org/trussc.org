        let editor;
        let isModified = false;
        let editorReady = false;
        let engineReady = false;

        // Check if project is in initial state (default code, unmodified)
        function isInitialState() {
            if (files.size !== 1) return false;
            const mainFile = files.get('main.tcs');
            if (!mainFile) return false;
            return !isModified && mainFile.model.getValue() === defaultCode;
        }

        // Load project from directory handle
        // Load project from .tcsproj (ZIP) file
        async function loadProjectFromZip(file) {
            try {
                const zip = await JSZip.loadAsync(file);

                // Find truss-project.json for file ordering
                let config = null;
                const configEntry = zip.file('truss-project.json');
                if (configEntry) {
                    config = JSON.parse(await configEntry.async('string'));
                }

                // Clear current project
                for (const [name, f] of files) {
                    f.model.dispose();
                }
                files.clear();
                assets.clear();

                // Load source files
                if (config && config.files) {
                    // Load in order specified by config
                    for (const filePath of config.files) {
                        const entry = zip.file(filePath);
                        if (entry) {
                            const content = await entry.async('string');
                            const fileName = filePath.split('/').pop();
                            const tcsName = fileName;
                            const model = monaco.editor.createModel(content, 'trusssketch');
                            model.onDidChangeContent(() => checkModified());
                            files.set(tcsName, { model, savedContent: content });
                        }
                    }
                } else {
                    // No config: load all .tcs files from src/
                    for (const [path, entry] of Object.entries(zip.files)) {
                        if (path.startsWith('src/') && path.endsWith('.tcs') && !entry.dir) {
                            const content = await entry.async('string');
                            const fileName = path.split('/').pop();
                            const tcsName = fileName;
                            const model = monaco.editor.createModel(content, 'trusssketch');
                            model.onDidChangeContent(() => checkModified());
                            files.set(tcsName, { model, savedContent: content });
                        }
                    }
                }

                // Load assets from data/
                for (const [path, entry] of Object.entries(zip.files)) {
                    if (path.startsWith('data/') && !entry.dir && !path.endsWith('manifest.json')) {
                        const blob = await entry.async('blob');
                        const name = path.replace(/^data\//, '');
                        const file = new File([blob], name);
                        addAsset(file);
                    }
                }

                // Setup editor
                if (files.size > 0) {
                    currentFile = files.keys().next().value;
                    editor.setModel(files.get(currentFile).model);
                } else {
                    addFile('main.tcs', '');
                }

                renderFileTabs();
                renderFilePanel();
                isModified = false;
                logToConsole('Project loaded: ' + file.name, 'success');
                runScript();

            } catch (e) {
                logToConsole('Load error: ' + e.message, 'error');
            }
        }

        // Load a single .tcs file
        async function loadSingleTcsFile(file) {
            const content = await file.text();

            // Clear current project
            for (const [name, f] of files) {
                f.model.dispose();
            }
            files.clear();
            assets.clear();

            const tcsName = file.name;
            const model = monaco.editor.createModel(content, 'trusssketch');
            model.onDidChangeContent(() => checkModified());
            files.set(tcsName, { model, savedContent: content });

            currentFile = tcsName;
            editor.setModel(model);
            renderFileTabs();
            renderFilePanel();
            isModified = false;
            logToConsole('Loaded: ' + file.name, 'success');
            runScript();
        }

        // Auto-run when both editor and engine are ready
        function tryAutoRun() {
            if (editorReady && engineReady) {
                runScript();
                if (editor) editor.focus();
            }
        }

        // Random project name generator
        let randomNameData = null;
        fetch('random-names.json')
            .then(r => r.json())
            .then(data => { randomNameData = data; })
            .catch(() => { randomNameData = { adjectives: ['my'], nouns: ['sketch'] }; });

        function generateRandomName() {
            if (!randomNameData) return 'myCode';
            const adj = randomNameData.adjectives[Math.floor(Math.random() * randomNameData.adjectives.length)];
            const noun = randomNameData.nouns[Math.floor(Math.random() * randomNameData.nouns.length)];
            // Capitalize first letter of noun
            return adj + noun.charAt(0).toUpperCase() + noun.slice(1) + 'Code';
        }

        // i18n - Localization
        const i18n = {
            en: {
                videoSaved: '🎬 Nice one!',
                shareDesc: 'Your video is ready! Share it with the world ✨\nJust attach the downloaded file!',
                close: 'Maybe later',
                copy: 'Copy',
                assetWarning: 'Heads up! This project has assets (images, etc.) that can\'t be shared via URL.\n\nOnly the code will be shared. Cool?',
                shareText: 'Made with TrussSketch ✨',
                askBtn: 'ask AI',
                askThinking: 'Asking the AI teacher…',
                askLimit: 'That\'s enough asking for today. Try reading the error message carefully!',
                askFailed: 'Can\'t reach the AI teacher right now. Try again in a bit.',
            },
            ja: {
                videoSaved: '🎬 できた！',
                shareDesc: '動画の準備完了！みんなにシェアしよう ✨\nダウンロードしたファイルを添付してね！',
                close: 'あとで',
                copy: 'コピー',
                assetWarning: 'ちょっと待って！このプロジェクトにはアセット（画像など）があるけど、URLには含められないんだ。\n\nコードだけシェアするけどOK？',
                shareText: 'TrussSketchで作ったよ ✨',
                askBtn: 'せんせいに聞く',
                askThinking: '先生AIに聞いてるよ…',
                askLimit: '今日はここまで。エラーメッセージをよく読んでみよう',
                askFailed: 'いま先生AIにつながらないみたい。ちょっとしてからまた試してね',
            },
            'zh-Hans': {
                videoSaved: '🎬 搞定！',
                shareDesc: '视频准备好啦！快分享给大家吧 ✨\n别忘了附上下载的文件哦！',
                close: '稍后再说',
                copy: '复制',
                assetWarning: '注意！这个项目有一些资源（图片等）没办法通过链接分享。\n\n只分享代码，可以吗？',
                shareText: '用TrussSketch做的 ✨',
            },
            'zh-Hant': {
                videoSaved: '🎬 完成！',
                shareDesc: '影片準備好啦！快分享給大家吧 ✨\n別忘了附上下載的檔案喔！',
                close: '稍後再說',
                copy: '複製',
                assetWarning: '注意！這個專案有一些資源（圖片等）沒辦法透過連結分享。\n\n只分享程式碼，可以嗎？',
                shareText: '用TrussSketch做的 ✨',
            },
            ko: {
                videoSaved: '🎬 완성!',
                shareDesc: '영상 준비 완료! 세상에 공유해보세요 ✨\n다운로드한 파일을 첨부해주세요!',
                close: '나중에',
                copy: '복사',
                assetWarning: '잠깐! 이 프로젝트에는 URL로 공유할 수 없는 에셋(이미지 등)이 있어요.\n\n코드만 공유할까요?',
                shareText: 'TrussSketch로 만들었어요 ✨',
            },
            es: {
                videoSaved: '🎬 ¡Genial!',
                shareDesc: '¡Tu video está listo! Compártelo con el mundo ✨\n¡Solo adjunta el archivo descargado!',
                close: 'Luego',
                copy: 'Copiar',
                assetWarning: '¡Ojo! Este proyecto tiene recursos (imágenes, etc.) que no se pueden compartir por URL.\n\n¿Compartimos solo el código?',
                shareText: 'Hecho con TrussSketch ✨',
            },
            pt: {
                videoSaved: '🎬 Ficou show!',
                shareDesc: 'Seu vídeo está pronto! Compartilha com o mundo ✨\nÉ só anexar o arquivo baixado!',
                close: 'Depois',
                copy: 'Copiar',
                assetWarning: 'Opa! Este projeto tem recursos (imagens, etc.) que não dá pra compartilhar por URL.\n\nCompartilhar só o código?',
                shareText: 'Feito com TrussSketch ✨',
            }
        };

        function getLang() {
            const lang = navigator.language || 'en';
            if (lang.startsWith('ja')) return 'ja';
            if (lang.startsWith('ko')) return 'ko';
            if (lang.startsWith('es')) return 'es';
            if (lang.startsWith('pt')) return 'pt';
            // Traditional Chinese: Taiwan, Hong Kong, Macau
            if (lang === 'zh-TW' || lang === 'zh-HK' || lang === 'zh-MO' || lang === 'zh-Hant') return 'zh-Hant';
            // Simplified Chinese: China, Singapore
            if (lang.startsWith('zh')) return 'zh-Hans';
            return 'en';
        }

        function t(key) {
            const lang = getLang();
            return i18n[lang][key] || i18n.en[key];
        }

        // Multi-file management
        const files = new Map();  // filename -> { model: Monaco.ITextModel, savedContent: string }
        let currentFile = 'main.tcs';

        // Assets management (images, sounds, etc.)
        const assets = new Map();  // filename -> { blob: Blob, url: string (object URL) }

        // File panel state
        let filePanelOpen = false;

        // Auto-run mode (hot reload) — on by default; the undefined-global lint
        // + candidate-state build in the engine keep broken edits from applying.
        let autoRunEnabled = true;
        let autoRunTimer = null;
        const AUTO_RUN_DELAY = 500;  // ms after typing stops

        function scheduleAutoRun() {
            if (!autoRunEnabled) return;
            if (autoRunTimer) clearTimeout(autoRunTimer);
            autoRunTimer = setTimeout(() => {
                autoRunTimer = null;
                // A slider drag already rebuilt via the tcs-number-tweak fast
                // path; skip the redundant (and console-clearing) rerun.
                if (Date.now() - lastTweakTime < 600) return;
                // Pulse effect
                const runBtn = document.getElementById('runBtn');
                if (runBtn) {
                    runBtn.classList.remove('pulse');
                    void runBtn.offsetWidth;  // Force reflow
                    runBtn.classList.add('pulse');
                }
                runScript();
            }, AUTO_RUN_DELAY);
        }

        function updateRunButtonState() {
            const runBtn = document.getElementById('runBtn');
            if (!runBtn) return;
            runBtn.classList.toggle('auto-run', autoRunEnabled);
        }

        // Number-tweak slider (cm-editor.js) fires this on every slider-driven
        // edit. Rebuild on a tight throttle (leading + trailing) so the sketch
        // tracks the drag instead of waiting out the 500ms auto-run debounce.
        let lastTweakTime = 0;
        let tweakLastRunTime = 0;
        let tweakTrailingTimer = null;
        document.addEventListener('tcs-number-tweak', () => {
            lastTweakTime = Date.now();
            const since = lastTweakTime - tweakLastRunTime;
            if (since >= 150) {
                tweakLastRunTime = Date.now();
                runScript(true);
            } else if (!tweakTrailingTimer) {
                tweakTrailingTimer = setTimeout(() => {
                    tweakTrailingTimer = null;
                    tweakLastRunTime = Date.now();
                    runScript(true);  // trailing run: the final value always applies
                }, 150 - since);
            }
        });

        function toggleAutoRun() {
            autoRunEnabled = !autoRunEnabled;
            updateRunButtonState();
            if (autoRunEnabled) {
                logToConsole('Auto-run enabled', 'notice');
            } else {
                logToConsole('Auto-run disabled', 'notice');
                if (autoRunTimer) {
                    clearTimeout(autoRunTimer);
                    autoRunTimer = null;
                }
            }
        }

        function isRunning() {
            const runBtn = document.getElementById('runBtn');
            return runBtn && runBtn.classList.contains('running');
        }

        // Toggle file panel visibility
        function toggleFilePanel() {
            filePanelOpen = !filePanelOpen;
            const panel = document.getElementById('filePanel');
            const btn = document.getElementById('filesBtn');
            panel.classList.toggle('collapsed', !filePanelOpen);
            btn.classList.toggle('active', filePanelOpen);
            if (filePanelOpen) {
                renderFilePanel();
            }
        }

        // Toggle section collapse
        function toggleSection(sectionId) {
            document.getElementById(sectionId).classList.toggle('collapsed');
        }

        // Get file icon based on extension
        function getFileIcon(filename) {
            const ext = filename.split('.').pop().toLowerCase();
            const icons = {
                'as': '<svg viewBox="0 0 16 16"><path d="M4 2h5l3 3v9H4V2z" fill="none" stroke="#569cd6" stroke-width="1.2"/></svg>',
                'tcs': '<svg viewBox="0 0 16 16"><path d="M4 2h5l3 3v9H4V2z" fill="none" stroke="#569cd6" stroke-width="1.2"/></svg>',
                'png': '<svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="1" fill="none" stroke="#89d185" stroke-width="1.2"/><circle cx="6" cy="6" r="1.5" fill="#89d185"/></svg>',
                'jpg': '<svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="1" fill="none" stroke="#89d185" stroke-width="1.2"/><circle cx="6" cy="6" r="1.5" fill="#89d185"/></svg>',
                'jpeg': '<svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="1" fill="none" stroke="#89d185" stroke-width="1.2"/><circle cx="6" cy="6" r="1.5" fill="#89d185"/></svg>',
                'gif': '<svg viewBox="0 0 16 16"><rect x="2" y="2" width="12" height="12" rx="1" fill="none" stroke="#89d185" stroke-width="1.2"/><circle cx="6" cy="6" r="1.5" fill="#89d185"/></svg>',
                'mp3': '<svg viewBox="0 0 16 16"><circle cx="8" cy="10" r="3" fill="none" stroke="#ce9178" stroke-width="1.2"/><path d="M11 10V4" stroke="#ce9178" stroke-width="1.2"/></svg>',
                'wav': '<svg viewBox="0 0 16 16"><circle cx="8" cy="10" r="3" fill="none" stroke="#ce9178" stroke-width="1.2"/><path d="M11 10V4" stroke="#ce9178" stroke-width="1.2"/></svg>',
                'ogg': '<svg viewBox="0 0 16 16"><circle cx="8" cy="10" r="3" fill="none" stroke="#ce9178" stroke-width="1.2"/><path d="M11 10V4" stroke="#ce9178" stroke-width="1.2"/></svg>',
                'json': '<svg viewBox="0 0 16 16"><path d="M4 2h5l3 3v9H4V2z" fill="none" stroke="#dcdcaa" stroke-width="1.2"/></svg>',
            };
            return icons[ext] || '<svg viewBox="0 0 16 16"><path d="M4 2h5l3 3v9H4V2z" fill="none" stroke="#888" stroke-width="1.2"/></svg>';
        }

        // Format file size
        function formatSize(bytes) {
            if (bytes < 1024) return bytes + ' B';
            if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
            return (bytes / 1024 / 1024).toFixed(1) + ' MB';
        }

        // Render file panel
        function renderFilePanel() {
            // Sources
            const sourcesList = document.getElementById('sourcesList');
            sourcesList.innerHTML = '';
            for (const [name, file] of files) {
                const item = document.createElement('div');
                item.className = 'file-panel-item' + (name === currentFile ? ' active' : '');
                const displayName = name.replace(/\.tcs$/, '');
                item.innerHTML = `
                    <span class="file-panel-item-icon">${getFileIcon(name)}</span>
                    <span class="file-panel-item-name">${displayName}</span>
                `;
                item.onclick = () => switchToFile(name);
                sourcesList.appendChild(item);
            }

            // Assets
            const assetsList = document.getElementById('assetsList');
            assetsList.innerHTML = '';
            if (assets.size === 0) {
                assetsList.innerHTML = '<div class="file-panel-item" style="color:#666;cursor:default;">No assets</div>';
            } else {
                for (const [name, asset] of assets) {
                    const item = document.createElement('div');
                    item.className = 'file-panel-item';
                    item.innerHTML = `
                        <span class="file-panel-item-icon">${getFileIcon(name)}</span>
                        <span class="file-panel-item-name">${name}</span>
                        <span class="file-panel-item-size">${formatSize(asset.blob.size)}</span>
                        <span class="file-panel-item-delete" onclick="event.stopPropagation(); removeAsset('${name}')">
                            <svg viewBox="0 0 16 16"><path d="M4 4l8 8m0-8l-8 8" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
                        </span>
                    `;
                    item.onclick = () => previewAsset(name);
                    item.ondblclick = () => insertAssetPath(name);
                    assetsList.appendChild(item);
                }
            }
        }

        // Add asset file
        function addAsset(file) {
            const name = file.name;
            if (assets.has(name)) {
                if (!confirm(`"${name}" already exists. Replace?`)) return;
                URL.revokeObjectURL(assets.get(name).url);
            }
            const url = URL.createObjectURL(file);
            assets.set(name, { blob: file, url });
            renderFilePanel();
            logToConsole('Added asset: ' + name, 'success');

            // Mount to Emscripten virtual filesystem if available
            mountAssetToFS(name, file);
        }

        // Mount asset to Emscripten virtual filesystem
        async function mountAssetToFS(name, blob) {
            if (!window.Module || !window.Module.FS) return;

            try {
                const FS = window.Module.FS;
                const data = new Uint8Array(await blob.arrayBuffer());

                // Create parent directories if needed
                const parts = name.split('/');
                let path = '';
                for (let i = 0; i < parts.length - 1; i++) {
                    path += '/' + parts[i];
                    try {
                        FS.mkdir(path);
                    } catch (e) {
                        // Directory might already exist
                    }
                }

                // Write file (overwrite if exists)
                const filePath = '/' + name;
                try {
                    FS.unlink(filePath);
                } catch (e) {
                    // File doesn't exist, that's fine
                }
                FS.createDataFile('/', name, data, true, true);
                console.log('Mounted asset to FS:', filePath);
            } catch (e) {
                console.warn('Failed to mount asset to FS:', name, e);
            }
        }

        // Mount all assets to Emscripten FS (called after runtime init)
        async function mountAllAssetsToFS() {
            for (const [name, asset] of assets) {
                await mountAssetToFS(name, asset.blob);
            }
        }

        // Hook fetch to serve assets from memory
        (function() {
            const originalFetch = window.fetch;
            window.fetch = function(input, init) {
                const url = typeof input === 'string' ? input : input.url;

                // Extract filename from URL
                const filename = url.split('/').pop().split('?')[0];

                // Check if it's in our assets map
                if (assets.has(filename)) {
                    const asset = assets.get(filename);
                    console.log('Serving from assets:', filename);
                    return Promise.resolve(new Response(asset.blob));
                }

                // Also check with path
                for (const [name, asset] of assets) {
                    if (url.endsWith(name) || url.endsWith('/' + name)) {
                        console.log('Serving from assets:', name);
                        return Promise.resolve(new Response(asset.blob));
                    }
                }

                // Fall back to original fetch
                return originalFetch.apply(this, arguments);
            };
        })();

        // Remove asset
        function removeAsset(name) {
            if (!confirm(`Delete "${name}"?`)) return;
            const asset = assets.get(name);
            if (asset) {
                URL.revokeObjectURL(asset.url);
                assets.delete(name);
            }
            // Also remove from Emscripten FS
            if (window.Module && window.Module.FS) {
                try {
                    window.Module.FS.unlink('/' + name);
                } catch (e) { /* ignore */ }
            }
            renderFilePanel();
            logToConsole('Removed asset: ' + name, 'notice');
        }

        // Preview asset (for images)
        function previewAsset(name) {
            const asset = assets.get(name);
            if (!asset) return;
            const ext = name.split('.').pop().toLowerCase();
            if (['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext)) {
                window.open(asset.url, '_blank');
            }
        }

        // Insert asset path into editor
        function insertAssetPath(name) {
            if (editor) {
                const selection = editor.getSelection();
                editor.executeEdits('', [{
                    range: selection,
                    text: `"${name}"`
                }]);
                editor.focus();
            }
        }

        // Add asset from file picker
        function addAssetFromPicker() {
            const input = document.createElement('input');
            input.type = 'file';
            input.multiple = true;
            input.accept = 'image/*,audio/*,.json,.txt';
            input.onchange = (e) => {
                for (const file of e.target.files) {
                    addAsset(file);
                }
            };
            input.click();
        }

        // Setup drop zone
        function setupDropZone() {
            const dropZone = document.getElementById('dropZone');
            const filePanel = document.getElementById('filePanel');

            // Prevent browser default file handling on the whole page
            document.addEventListener('dragover', (e) => e.preventDefault());
            document.addEventListener('drop', (e) => {
                e.preventDefault();
                handleDrop(e.dataTransfer);
            });

            // Drop zone events
            ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
                dropZone.addEventListener(eventName, (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                });
            });

            dropZone.addEventListener('dragenter', () => dropZone.classList.add('drag-over'));
            dropZone.addEventListener('dragleave', () => dropZone.classList.remove('drag-over'));
            dropZone.addEventListener('dragover', () => dropZone.classList.add('drag-over'));
            dropZone.addEventListener('drop', (e) => {
                dropZone.classList.remove('drag-over');
                handleDrop(e.dataTransfer);
            });

            // Also handle drops on the whole file panel
            filePanel.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('drag-over');
            });
            filePanel.addEventListener('dragleave', (e) => {
                if (!filePanel.contains(e.relatedTarget)) {
                    dropZone.classList.remove('drag-over');
                }
            });
            filePanel.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('drag-over');
                handleDrop(e.dataTransfer);
            });
        }

        // Handle dropped files/folders
        async function handleDrop(dataTransfer) {
            const items = dataTransfer.items;
            if (!items) return;

            // .tcsproj drop → replace entire project
            const firstFile = items[0].getAsFile ? items[0].getAsFile() : null;
            if (firstFile && firstFile.name.endsWith('.tcsproj')) {
                await loadProjectFromZip(firstFile);
                return;
            }

            // .tcs and other files → add as tab or asset
            for (const item of items) {
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    if (file) processFile(file, '');
                }
            }
        }

        // Process file system entry (file or directory)
        async function processEntry(entry, basePath) {
            if (entry.isFile) {
                return new Promise((resolve) => {
                    entry.file((file) => {
                        processFile(file, basePath);
                        resolve();
                    });
                });
            } else if (entry.isDirectory) {
                const reader = entry.createReader();
                return new Promise((resolve) => {
                    reader.readEntries(async (entries) => {
                        for (const e of entries) {
                            await processEntry(e, basePath + entry.name + '/');
                        }
                        resolve();
                    });
                });
            }
        }

        // Process a single file
        function processFile(file, basePath) {
            const ext = file.name.split('.').pop().toLowerCase();
            const fullPath = basePath + file.name;

            // Source files
            if (ext === 'as' || ext === 'tcs') {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const name = file.name;
                    
                    // If initial state, replace main.tcs
                    if (isInitialState()) {
                        // Clear existing
                        for (const [n, f] of files) f.model.dispose();
                        files.clear();
                        addFile(name, e.target.result);
                        logToConsole('Project started with: ' + name, 'success');
                    } else {
                        // Just add
                        addFile(name, e.target.result);
                    }
                };
                reader.readAsText(file);
            }
            // Asset files
            else if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'mp3', 'wav', 'ogg', 'json', 'txt'].includes(ext)) {
                addAsset(new File([file], fullPath.replace(/^(data|src)\//, ''), { type: file.type }));
            }
        }

        // Warn before leaving if there are unsaved changes
        window.addEventListener('beforeunload', (e) => {
            if (isModified) {
                e.preventDefault();
                e.returnValue = '';
            }
        });

        // Check if any file has unsaved changes
        function checkModified() {
            for (const [name, file] of files) {
                if (file.model.getValue() !== file.savedContent) {
                    isModified = true;
                    scheduleAutoRun();  // Trigger auto-run if enabled
                    return;
                }
            }
            isModified = false;
        }

        // Drag and drop state
        let draggedTab = null;

        // Render file tabs (and update file panel if open)
        function renderFileTabs() {
            const container = document.getElementById('fileTabs');
            container.innerHTML = '';
            if (filePanelOpen) renderFilePanel();

            for (const [name, file] of files) {
                const tab = document.createElement('div');
                tab.className = 'file-tab' + (name === currentFile ? ' active' : '');
                tab.draggable = true;
                tab.dataset.filename = name;
                const displayName = name.replace(/\.tcs$/, '');
                tab.innerHTML = `
                    <span class="file-tab-name">${displayName}</span>
                    ${files.size > 1 ? `<span class="file-tab-close" onclick="event.stopPropagation(); removeFile('${name}')">
                        <svg viewBox="0 0 16 16"><path d="M4 4l8 8m0-8l-8 8" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
                    </span>` : ''}
                `;
                tab.onclick = () => switchToFile(name);
                tab.ondblclick = () => renameFile(name);

                // Drag events
                tab.ondragstart = (e) => {
                    draggedTab = name;
                    tab.classList.add('dragging');
                    e.dataTransfer.effectAllowed = 'move';
                };
                tab.ondragend = () => {
                    draggedTab = null;
                    tab.classList.remove('dragging');
                };
                tab.ondragover = (e) => {
                    e.preventDefault();
                    if (draggedTab && draggedTab !== name) {
                        tab.classList.add('drag-over');
                    }
                };
                tab.ondragleave = () => {
                    tab.classList.remove('drag-over');
                };
                tab.ondrop = (e) => {
                    e.preventDefault();
                    tab.classList.remove('drag-over');
                    if (draggedTab && draggedTab !== name) {
                        reorderFiles(draggedTab, name);
                    }
                };

                container.appendChild(tab);
            }

            // Add button
            const addBtn = document.createElement('div');
            addBtn.className = 'file-tab-add';
            addBtn.innerHTML = '<svg viewBox="0 0 16 16"><path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>';
            addBtn.onclick = () => addFile();
            addBtn.title = 'Add new file';
            container.appendChild(addBtn);
        }

        // Reorder files: move 'from' before 'to'
        function reorderFiles(from, to) {
            const entries = [...files.entries()];
            const fromIndex = entries.findIndex(([name]) => name === from);
            const toIndex = entries.findIndex(([name]) => name === to);
            if (fromIndex === -1 || toIndex === -1) return;

            const [removed] = entries.splice(fromIndex, 1);
            entries.splice(toIndex, 0, removed);

            files.clear();
            for (const [name, file] of entries) {
                files.set(name, file);
            }
            renderFileTabs();
        }

        // Switch to a different file
        function switchToFile(name) {
            if (!files.has(name)) return;
            currentFile = name;
            editor.setModel(files.get(name).model);
            renderFileTabs();
        }

        // Add a new file
        function addFile(name = null, content = '') {
            if (!name) {
                // Generate default name: newfile, newfile-1, newfile-2, ...
                let defaultName = 'newfile';
                let suffix = 0;
                while (files.has(defaultName + '.tcs')) {
                    suffix++;
                    defaultName = 'newfile-' + suffix;
                }
                name = prompt('Enter file name:', defaultName);
                if (!name) return;
            }
            if (!name.endsWith('.tcs')) name += '.tcs';
            if (files.has(name)) {
                logToConsole('File already exists: ' + name, 'error');
                return;
            }

            const model = monaco.editor.createModel(content, 'trusssketch');
            model.onDidChangeContent(() => checkModified());
            files.set(name, { model, savedContent: content });

            switchToFile(name);
            logToConsole('Created file: ' + name, 'success');
        }

        // Remove a file
        function removeFile(name) {
            if (files.size <= 1) {
                logToConsole('Cannot delete the last file', 'error');
                return;
            }
            if (!confirm('Delete ' + name + '?')) return;

            const file = files.get(name);
            if (file) {
                file.model.dispose();
                files.delete(name);
            }

            if (currentFile === name) {
                currentFile = files.keys().next().value;
                editor.setModel(files.get(currentFile).model);
            }
            renderFileTabs();
            checkModified();
            logToConsole('Deleted file: ' + name, 'notice');
        }

        // Rename a file
        function renameFile(oldName) {
            const oldDisplayName = oldName.replace(/\.tcs$/, '');
            const newName = prompt('Rename file:', oldDisplayName);
            if (!newName || newName === oldDisplayName) return;

            const finalName = newName.endsWith('.tcs') ? newName : newName + '.tcs';
            if (files.has(finalName)) {
                logToConsole('File already exists: ' + finalName, 'error');
                return;
            }

            const file = files.get(oldName);
            files.delete(oldName);
            files.set(finalName, file);

            if (currentFile === oldName) currentFile = finalName;
            renderFileTabs();
            logToConsole('Renamed: ' + oldName + ' -> ' + finalName, 'success');
        }

        const defaultCode = `-- TrussSketch (Lua) - Creative Coding Playground
local t = 0

function setup()
    t = 0
end

function update()
    t = t + getDeltaTime()
end

function draw()
    clear(1)

    local cx = getWindowWidth() / 2
    local cy = getWindowHeight() / 2

    -- Bars
    for i = 0, 9 do
        local bh = 30 + math.abs(math.sin(t * 2 + i * 0.4)) * 120
        setColor(0.2, 0.5 + i * 0.04, 0.9)
        drawRect(40 + i * 52, getWindowHeight() - bh - 30, 40, bh)
    end

    -- Pulsing circle
    setColor(0.95, 0.3, 0.4)
    drawCircle(cx - 120, cy, 40 + math.sin(t * 3) * 10)

    -- Rotating square
    setColor(0.3, 0.8, 0.5)
    pushMatrix()
    translate(cx + 120, cy)
    rotate(t)
    drawRect(-35, -35, 70, 70)
    popMatrix()

    -- Mouse follower
    setColor(0.1, 0.1, 0.1, 0.5)
    drawCircle(getMouseX(), getMouseY(), 8)
end
`;

        // Load code from URL hash (LZString compressed)
        // Supports both single-file (string) and multi-file (JSON object) formats
        function loadFromHash() {
            const hash = window.location.hash;
            if (hash.startsWith('#')) {
                try {
                    const compressed = hash.substring(1);
                    const data = LZString.decompressFromEncodedURIComponent(compressed);
                    if (!data) return null;

                    // Try parsing as JSON (multi-file format)
                    try {
                        const parsed = JSON.parse(data);
                        if (parsed.files && typeof parsed.files === 'object') {
                            return parsed;  // Multi-file format: { files: { "main.tcs": "...", ... } }
                        }
                    } catch (e) {
                        // Not JSON, treat as single-file code
                    }

                    return data;  // Single-file format: raw code string
                } catch (e) {
                    console.error('Failed to decode URL:', e);
                }
            }
            return null;
        }

        // Initialize editor (CodeMirror 6 via the Monaco-compatible shim in cm-editor.js)
        window.__cmReady.then(function() {
            // Define TrussSketch language (AngelScript-like)
            monaco.languages.register({ id: 'trusssketch' });
            monaco.languages.setMonarchTokensProvider('trusssketch', {
                keywords: ['and', 'break', 'do', 'else', 'elseif', 'end', 'false', 'for', 'function', 'goto', 'if', 'in', 'local', 'nil', 'not', 'or', 'repeat', 'return', 'then', 'true', 'until', 'while'],
                typeKeywords: (TrussSketchAPI.types || []).map(t => t.name),   // all bound types/enums (from trusssketch-api.js)
                operators: ['+', '-', '*', '/', '%', '=', '==', '!=', '<', '>', '<=', '>=', '&&', '||', '!'],
                symbols: /[=><!~?:&|+\-*\/\^%]+/,
                tokenizer: {
                    root: [
                        [/[a-zA-Z_]\w*/, { cases: { '@keywords': 'keyword', '@typeKeywords': 'type', '@default': 'identifier' } }],
                        [/[0-9]+\.?[0-9]*/, 'number'],
                        [/"[^"]*"/, 'string'],
                        [/\/\/.*$/, 'comment'],
                        [/[{}()\[\]]/, '@brackets'],
                        [/@symbols/, { cases: { '@operators': 'operator', '@default': '' } }],
                    ]
                }
            });

            monaco.editor.defineTheme('trusssketch-dark', {
                base: 'vs-dark',
                inherit: true,
                rules: [
                    { token: 'keyword', foreground: 'c586c0' },
                    { token: 'identifier', foreground: '9cdcfe' },
                    { token: 'number', foreground: 'b5cea8' },
                    { token: 'string', foreground: 'ce9178' },
                    { token: 'comment', foreground: '6a9955' },
                ],
                colors: {
                    'editor.background': '#1e1e1e',
                }
            });

            // Register autocomplete provider from trusssketch-api.js

            // Build type lookup map
            const typeMap = {};
            if (TrussSketchAPI.types) {
                for (const type of TrussSketchAPI.types) {
                    typeMap[type.name] = type;
                }
            }

            // Known return types for common functions
            const returnTypes = {
                // Vec2-returning functions
                'getMousePos': 'Vec2',
                'getWindowSize': 'Vec2',
                // Constructors (for chaining like Vec2(1,2).normalize())
                'Vec2': 'Vec2',
                'Vec3': 'Vec3',
                'Color': 'Color',
                'Rect': 'Rect',
                'Pixels': 'Pixels',
                'Texture': 'Texture',
                'Fbo': 'Fbo',
                'Sound': 'Sound',
                'Font': 'Font'
            };

            // Build global completions (functions, constants, constructors)
            function buildGlobalCompletions() {
                const completions = [];

                // Add functions (excluding type methods which are in "Types - X" categories)
                for (const cat of TrussSketchAPI.categories) {
                    // Skip "Types - X" categories (now handled by types section)
                    if (cat.name.startsWith('Types - ')) continue;

                    for (const fn of cat.functions) {
                        completions.push({
                            label: fn.name,
                            kind: monaco.languages.CompletionItemKind.Function,
                            insertText: fn.snippet,
                            insertTextRules: fn.snippet.includes('$') ?
                                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet : undefined,
                            detail: fn.desc
                        });
                    }
                }

                // Cooperative task API (host prelude, not in the generated data)
                const taskFns = [
                    { name: 'spawn',   snippet: 'spawn(function()\n\t$0\nend)', desc: 'Start a cooperative task (coroutine); runs until the function returns.' },
                    { name: 'wait',    snippet: 'wait($0)',                     desc: 'Inside a task, suspend for N seconds. wait() / wait(0) resumes next frame.' },
                    { name: 'forever', snippet: 'forever(function()\n\t$0\nend)', desc: 'Spawn a task that repeats forever (an implicit wait(0) runs after each pass).' }
                ];
                for (const fn of taskFns) {
                    completions.push({
                        label: fn.name,
                        kind: monaco.languages.CompletionItemKind.Function,
                        insertText: fn.snippet,
                        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                        detail: fn.desc
                    });
                }

                // Add constants
                for (const c of TrussSketchAPI.constants) {
                    completions.push({
                        label: c.name,
                        kind: monaco.languages.CompletionItemKind.Constant,
                        insertText: c.name,
                        detail: `${c.value} - ${c.desc}`
                    });
                }

                // Add type constructors
                for (const type of TrussSketchAPI.types || []) {
                    if (type.constructor) {
                        completions.push({
                            label: type.name,
                            kind: monaco.languages.CompletionItemKind.Constructor,
                            insertText: type.constructor.snippet,
                            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                            detail: type.desc
                        });
                    }
                }

                return completions;
            }

            // Lua access rules: `.` reads fields (v.x) / statics (Vec2.fromAngle),
            // `:` calls instance methods (v:length()).
            function buildPropertyCompletions(typeName) {
                const type = typeMap[typeName];
                if (!type || !type.properties) return null;
                return type.properties.map(prop => ({
                    label: prop.name,
                    kind: monaco.languages.CompletionItemKind.Field,
                    insertText: prop.name,
                    detail: `${prop.type} - ${prop.desc}`
                }));
            }

            function buildMethodCompletions(typeName) {
                const type = typeMap[typeName];
                if (!type || !type.methods) return null;
                return type.methods.map(method => ({
                    label: method.name,
                    kind: monaco.languages.CompletionItemKind.Method,
                    insertText: method.snippet,
                    insertTextRules: method.snippet.includes('$') ?
                        monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet : undefined,
                    detail: `${method.return} - ${method.desc}`
                }));
            }

            // Build static method completions for a type
            function buildStaticCompletions(typeName) {
                const type = typeMap[typeName];
                if (!type || !type.static_methods) return null;

                const completions = [];
                for (const method of type.static_methods) {
                    completions.push({
                        label: method.name,
                        kind: monaco.languages.CompletionItemKind.Method,
                        insertText: method.snippet,
                        insertTextRules: method.snippet.includes('$') ?
                            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet : undefined,
                        detail: `${method.return} - ${method.desc}`
                    });
                }
                return completions;
            }

            // Infer type from identifier
            function inferType(identifier, model) {
                // Check if it's a known type name (for static access like Vec2.fromAngle)
                if (typeMap[identifier]) {
                    return { type: identifier, isStatic: true };
                }

                // Check known return types
                if (returnTypes[identifier]) {
                    return { type: returnTypes[identifier], isStatic: false };
                }

                // Search for a Lua declaration in the code:
                //   local v = Vec2(...)   v = Vec2.new(...)   local c = colors.red
                const fullText = model.getValue();
                for (const typeName of Object.keys(typeMap)) {
                    const pattern = new RegExp(`(?:local\\s+)?${identifier}\\s*=\\s*${typeName}\\s*[.(]`);
                    if (pattern.test(fullText)) {
                        return { type: typeName, isStatic: false };
                    }
                }

                return null;
            }

            const globalCompletions = buildGlobalCompletions();

            monaco.languages.registerCompletionItemProvider('trusssketch', {
                triggerCharacters: ['.', ':'],
                provideCompletionItems: function(model, position) {
                    const word = model.getWordUntilPosition(position);
                    const range = {
                        startLineNumber: position.lineNumber,
                        endLineNumber: position.lineNumber,
                        startColumn: word.startColumn,
                        endColumn: word.endColumn
                    };

                    // Get text before cursor on current line
                    const lineContent = model.getLineContent(position.lineNumber);
                    const textBeforeCursor = lineContent.substring(0, position.column - 1);

                    // Member access: `.` (fields / statics / enum values) or `:` (Lua methods)
                    const dotMatch = textBeforeCursor.match(/(\w+)([.:])(\w*)$/);
                    if (dotMatch) {
                        const identifier = dotMatch[1];
                        const sep = dotMatch[2];
                        const typeInfo = inferType(identifier, model);

                        if (typeInfo) {
                            let completions;
                            if (sep === ':') {
                                // v:length() — instance methods only
                                completions = typeInfo.isStatic ? null : buildMethodCompletions(typeInfo.type);
                            } else if (typeInfo.isStatic) {
                                // Vec2.fromAngle / BlendMode.Add / colors.red
                                completions = buildStaticCompletions(typeInfo.type);
                            } else {
                                // v.x — fields
                                completions = buildPropertyCompletions(typeInfo.type);
                            }

                            if (completions && completions.length > 0) {
                                return {
                                    suggestions: completions.map(item => ({
                                        ...item,
                                        range: range
                                    }))
                                };
                            }
                        }

                        // Unknown type after dot - return empty to avoid wrong suggestions
                        return { suggestions: [] };
                    }

                    // Not after dot - return global completions
                    return {
                        suggestions: globalCompletions.map(item => ({
                            ...item,
                            range: range
                        }))
                    };
                }
            });

            // Create editor instance (without initial model)
            editor = monaco.editor.create(document.getElementById('editor'), {
                language: 'trusssketch',
                theme: 'trusssketch-dark',
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 4,
                insertSpaces: true,
                detectIndentation: false,
            });

            // Cmd+Enter / Ctrl+Enter to run script
            editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
                // Pulse effect
                const runBtn = document.getElementById('runBtn');
                if (runBtn) {
                    runBtn.classList.remove('pulse');
                    void runBtn.offsetWidth;  // Force reflow
                    runBtn.classList.add('pulse');
                }
                runScript();
            });

            // Initialize files from URL hash or default
            const hashData = loadFromHash();
            if (hashData && typeof hashData === 'object' && hashData.files) {
                // Multi-file format from URL
                for (const [name, content] of Object.entries(hashData.files)) {
                    const model = monaco.editor.createModel(content, 'trusssketch');
                    model.onDidChangeContent(() => checkModified());
                    files.set(name, { model, savedContent: content });
                }
                currentFile = files.keys().next().value;
            } else {
                // Single-file format or default
                const content = (typeof hashData === 'string') ? hashData : defaultCode;
                const model = monaco.editor.createModel(content, 'trusssketch');
                model.onDidChangeContent(() => checkModified());
                // Use random name for new projects, 'main.tcs' for loaded single-file
                const fileName = hashData ? 'main.tcs' : (generateRandomName() + '.tcs');
                files.set(fileName, { model, savedContent: content });
                currentFile = fileName;
            }

            // Set initial model and render tabs
            editor.setModel(files.get(currentFile).model);
            renderFileTabs();

            // Setup drop zone for assets
            setupDropZone();

            // Mark editor as ready and try auto-run
            editorReady = true;
            tryAutoRun();

        });

        // Console logging
        function logToConsole(message, type = 'normal') {
            const consoleEl = document.getElementById('console');
            const line = document.createElement('div');
            line.className = 'console-line ' + type;
            line.textContent = message;
            consoleEl.appendChild(line);
            consoleEl.scrollTop = consoleEl.scrollHeight;
        }

        function clearConsole() {
            document.getElementById('console').innerHTML = '';
        }

        // =====================================================================
        // Errors as conversation: kid-friendly messages + an "ask AI" button.
        // =====================================================================

        // The docs bot (chat-widget.js) contract: POST {API}/chat with a JSON
        // body, reply streamed as SSE (event: token|replace|done|error). We reuse
        // that exact contract here — no new server API. If it were missing we'd
        // flip ASK_ENABLED off and hide the button; it exists, so it's on.
        const ASK_ENABLED = true;
        const ASK_API = 'https://api.trussc.org';

        // Two-letter friendly locale: ja is authored, everything else falls to en.
        function friendlyLang() { return getLang() === 'ja' ? 'ja' : 'en'; }

        // Translate one engine error line into a short kid-readable sentence.
        // Input is a full "file (line, col) : message" line; we match on the
        // message tail. Returns null when nothing matches (caller shows raw only).
        function friendlyError(rawLine) {
            const loc = rawLine.match(/\)\s*:\s*([\s\S]*)$/);
            const msg = loc ? loc[1].trim() : rawLine.trim();
            const ja = friendlyLang() === 'ja';
            let m;

            // undefined variable 'X' (+ optional did you mean 'Y'?)
            m = msg.match(/undefined variable '([^']+)'(?:\s*\(did you mean '([^']+)'\?\))?/);
            if (m) {
                if (ja) {
                    let s = `変数 '${m[1]}' はまだ作られていないよ。`;
                    if (m[2]) s += `もしかして '${m[2]}' のこと？`;
                    return s;
                }
                let s = `The variable '${m[1]}' hasn't been created yet.`;
                if (m[2]) s += ` Did you mean '${m[2]}'?`;
                return s;
            }

            // arithmetic on a nil value (local/global/field/upvalue 'X')
            m = msg.match(/attempt to perform arithmetic on a nil value(?:\s*\((?:local|global|field|upvalue) '([^']+)'\))?/);
            if (m) {
                if (ja) return m[1]
                    ? `'${m[1]}' に値が入っていないのに計算に使おうとしたよ。`
                    : `値が入っていない(nil)ものを計算に使おうとしたよ。`;
                return m[1]
                    ? `'${m[1]}' has no value yet, but you tried to do math with it.`
                    : `You tried to do math with something that has no value (nil).`;
            }

            // call a nil value (global/field/local/method 'X')
            m = msg.match(/attempt to call a nil value(?:\s*\((?:global|field|local|method|upvalue) '([^']+)'\))?/);
            if (m) {
                if (ja) return m[1]
                    ? `'${m[1]}' という関数は見つからないよ。名前を確認してね。`
                    : `その関数は見つからないよ。名前を確認してね。`;
                return m[1]
                    ? `There's no function called '${m[1]}'. Check the spelling.`
                    : `That function can't be found. Check the spelling.`;
            }

            // index a nil value (reading into something empty)
            if (/attempt to index a nil value/.test(msg)) {
                return ja
                    ? `中身が空っぽ(nil)のものの中を見ようとしたよ。`
                    : `You tried to look inside something that's empty (nil).`;
            }

            // compare across types
            if (/attempt to compare/.test(msg)) {
                return ja
                    ? `種類のちがうもの同士を比べようとしたよ。`
                    : `You tried to compare two different kinds of things.`;
            }

            // 'end' expected (check before the generic syntax matcher)
            if (/'end' expected/.test(msg)) {
                return ja ? `'end' が足りないみたい。` : `Looks like an 'end' is missing.`;
            }

            // syntax error / unexpected symbol near 'X'
            m = msg.match(/(?:syntax error|unexpected symbol)[^\n]*?near '?([^'\n]*?)'?$/) ||
                msg.match(/(?:syntax error|unexpected symbol)[^\n]*?near '([^'\n]+)'/);
            if (m) {
                const near = (m[1] || '').trim();
                if (ja) return near
                    ? `'${near}' の近くで書き方がおかしいみたい。`
                    : `書き方がおかしいところがあるみたい。`;
                return near
                    ? `Something's written wrong near '${near}'.`
                    : `Something's written wrong somewhere.`;
            }

            return null;  // unmatched → no friendly line
        }

        // Normalized signature for caching: drop file names and line/column
        // numbers (position noise) but KEEP quoted identifier names, so the same
        // kind of error reuses one answer regardless of where it happens.
        function errorSignature(rawLine) {
            let s = rawLine
                .replace(/^\S+\s*\(\d+,\s*\d+\)\s*:\s*/, '')  // strip "file (l, c) :"
                .replace(/:\d+:/g, ':')                        // stray line refs
                .replace(/\bline \d+/g, 'line')
                .trim();
            return friendlyLang() + '|' + s;
        }

        // Grab the offending source line ±3 for the AI question.
        // (The CM6 model shim only implements getValue(), not the Monaco
        // getLineCount/getLineContent pair.)
        function getCodeContext(loc) {
            if (!loc || !files.has(loc.file)) return '';
            const lines = files.get(loc.file).model.getValue().split('\n');
            const from = Math.max(1, loc.line - 3);
            const to = Math.min(lines.length, loc.line + 3);
            return lines.slice(from - 1, to).join('\n');
        }

        // ---- ask-cost controls (client side) --------------------------------
        const ASK_CACHE_KEY = 'trusssketch-ask-cache-v1';
        const ASK_RATE_KEY = 'trusssketch-ask-rate-v1';
        const ASK_CACHE_MAX = 50;
        const ASK_DAILY_MAX = 10;

        function askCacheGet(sig) {
            try {
                const c = JSON.parse(localStorage.getItem(ASK_CACHE_KEY)) || { order: [], map: {} };
                if (!(sig in c.map)) return null;
                // LRU touch: move to front.
                c.order = [sig].concat(c.order.filter(s => s !== sig));
                localStorage.setItem(ASK_CACHE_KEY, JSON.stringify(c));
                return c.map[sig];
            } catch (e) { return null; }
        }
        function askCacheSet(sig, answer) {
            try {
                const c = JSON.parse(localStorage.getItem(ASK_CACHE_KEY)) || { order: [], map: {} };
                c.map[sig] = answer;
                c.order = [sig].concat(c.order.filter(s => s !== sig));
                while (c.order.length > ASK_CACHE_MAX) {
                    const drop = c.order.pop();
                    delete c.map[drop];
                }
                localStorage.setItem(ASK_CACHE_KEY, JSON.stringify(c));
            } catch (e) { /* storage full/blocked: skip caching */ }
        }
        function askRateState() {
            const today = new Date().toISOString().slice(0, 10);
            let r;
            try { r = JSON.parse(localStorage.getItem(ASK_RATE_KEY)); } catch (e) { r = null; }
            if (!r || r.date !== today) r = { date: today, count: 0 };
            return r;
        }
        function askRateAllowed() { return askRateState().count < ASK_DAILY_MAX; }
        function askRateConsume() {
            const r = askRateState();
            r.count += 1;
            try { localStorage.setItem(ASK_RATE_KEY, JSON.stringify(r)); } catch (e) {}
        }

        // Stable per-session conversation id (groups asks server-side).
        const askConvId = (window.crypto && crypto.randomUUID)
            ? crypto.randomUUID()
            : 'sk-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);

        // Render (or create) an answer block in the console; returns the element
        // so streaming tokens can update it in place.
        function renderAnswerBlock(text) {
            const consoleEl = document.getElementById('console');
            const el = document.createElement('div');
            el.className = 'console-line answer';
            el.textContent = '🧑‍🏫 ' + text;
            consoleEl.appendChild(el);
            consoleEl.scrollTop = consoleEl.scrollHeight;
            return el;
        }

        async function askAboutError(rawLine, loc, btn) {
            if (!ASK_ENABLED) return;
            if (btn) btn.disabled = true;

            const sig = errorSignature(rawLine);
            const cached = askCacheGet(sig);
            if (cached) { renderAnswerBlock(cached); if (btn) btn.disabled = false; return; }

            if (!askRateAllowed()) {
                logToConsole(t('askLimit'), 'muted');
                if (btn) btn.disabled = false;
                return;
            }

            const answerEl = renderAnswerBlock(t('askThinking'));
            const ja = friendlyLang() === 'ja';
            const errLine = (rawLine.match(/\)\s*:\s*([\s\S]*)$/) || [null, rawLine])[1].trim();
            const context = getCodeContext(loc);
            const question = ja
                ? `TrussSketchでこのエラーが出たよ。意味と直し方を小学生にもわかるように短く教えて。\nエラー: ${errLine}\nコードの該当部分:\n${context}`
                : `I got this error in TrussSketch. Explain what it means and how to fix it, short and simple enough for a young kid.\nError: ${errLine}\nThe relevant code:\n${context}`;

            try {
                const r = await fetch(ASK_API + '/chat', {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify({ question: question, history: [], convId: askConvId, page: null, pinned: [] }),
                });
                if (!r.ok || !r.body) throw new Error('bad response');
                const reader = r.body.getReader();
                const dec = new TextDecoder();
                let buf = '', acc = '';
                for (;;) {
                    const chunk = await reader.read();
                    if (chunk.done) break;
                    buf += dec.decode(chunk.value, { stream: true });
                    let sep;
                    while ((sep = buf.indexOf('\n\n')) !== -1) {
                        const block = buf.slice(0, sep); buf = buf.slice(sep + 2);
                        const ev = (/event: (.+)/.exec(block) || [])[1];
                        const data = (/data: ([\s\S]+)/.exec(block) || [])[1];
                        if (!ev || data === undefined) continue;
                        let payload;
                        try { payload = JSON.parse(data); } catch (e) { continue; }
                        if (ev === 'token') { acc += payload; answerEl.textContent = '🧑‍🏫 ' + acc; }
                        else if (ev === 'replace') { acc = payload; answerEl.textContent = '🧑‍🏫 ' + acc; }
                        // sources/links/done/error events are ignored here.
                        document.getElementById('console').scrollTop = document.getElementById('console').scrollHeight;
                    }
                }
                if (!acc.trim()) throw new Error('empty answer');
                answerEl.textContent = '🧑‍🏫 ' + acc;
                askCacheSet(sig, acc);
                askRateConsume();
            } catch (e) {
                // Never surface a raw exception to a kid.
                answerEl.textContent = '🧑‍🏫 ' + t('askFailed');
            }
            if (btn) btn.disabled = false;
        }

        // Log an error-styled console line with an inline "ask AI" button.
        function logErrorWithAsk(text, rawLine, loc) {
            const consoleEl = document.getElementById('console');
            const line = document.createElement('div');
            line.className = 'console-line error';
            const span = document.createElement('span');
            span.textContent = text;
            line.appendChild(span);
            if (ASK_ENABLED) {
                const btn = document.createElement('button');
                btn.className = 'console-ask-btn';
                btn.type = 'button';
                btn.textContent = t('askBtn');
                btn.onclick = () => askAboutError(rawLine, loc, btn);
                line.appendChild(btn);
            }
            consoleEl.appendChild(line);
            consoleEl.scrollTop = consoleEl.scrollHeight;
        }

        // Turn an engine error report into the "friendly first, raw muted" console
        // shape. Line markers are still handled separately by showScriptErrors().
        // Raw `stack traceback:` blocks are suppressed from the console entirely.
        function displayScriptError(rawError) {
            const lines = rawError.split('\n');
            for (const line of lines) {
                if (/^\s*stack traceback:/.test(line)) break;  // drop traceback tail
                if (line.trim() === '') continue;
                const loc = parseErrorLocation(line);
                if (loc) {
                    const friendly = friendlyError(line);
                    if (friendly) {
                        logErrorWithAsk(loc.file + ' (' + loc.line + ') : ' + friendly, line, loc);
                        logToConsole(line, 'muted');  // original, de-emphasized
                    } else {
                        logErrorWithAsk(line, line, loc);  // no friendly form: raw + ask
                    }
                } else {
                    logToConsole(line, 'muted');  // continuation / unrecognized
                }
            }
        }

        function setStatus(message, type = '') {
            const status = document.getElementById('status');
            status.textContent = message;
            status.className = 'status ' + type;
        }

        // Clear error markers from all files
        function clearErrorMarkers() {
            if (monaco) {
                for (const [name, file] of files) {
                    monaco.editor.setModelMarkers(file.model, 'trusssketch', []);
                }
            }
        }

        // Parse error message for line/column info
        // Format: "filename (line, col) : message"
        function parseErrorLocation(errorMsg) {
            // Multi-file format: "main (12, 5) : ..." or "utils (3, 10) : ..."
            const match = errorMsg.match(/^(\S+)\s*\((\d+),\s*(\d+)\)/);
            if (match) {
                return { file: match[1], line: parseInt(match[2]), column: parseInt(match[3]) };
            }
            return null;
        }

        // Set error marker in the correct file
        function setErrorMarkerInFile(file, line, column, message) {
            if (!files.has(file)) return;
            const model = files.get(file).model;
            monaco.editor.setModelMarkers(model, 'trusssketch', [{
                startLineNumber: line,
                startColumn: column,
                endLineNumber: line,
                endColumn: column + 10,
                message: message,
                severity: monaco.MarkerSeverity.Error
            }]);
            // Switch to the file with error
            if (currentFile !== file) {
                switchToFile(file);
            }
        }

        // Parse an engine error report (one "file (line, col) : msg" per line),
        // set markers in the affected files and jump to the first one.
        function showScriptErrors(error) {
            const errorLines = error.split('\n');
            const markersByFile = new Map();
            for (const line of errorLines) {
                const loc = parseErrorLocation(line);
                if (loc) {
                    if (!markersByFile.has(loc.file)) {
                        markersByFile.set(loc.file, []);
                    }
                    markersByFile.get(loc.file).push({
                        startLineNumber: loc.line,
                        startColumn: loc.column,
                        endLineNumber: loc.line,
                        endColumn: loc.column + 10,
                        message: line,
                        severity: monaco.MarkerSeverity.Error
                    });
                }
            }
            for (const [file, markers] of markersByFile) {
                if (files.has(file)) {
                    monaco.editor.setModelMarkers(files.get(file).model, 'trusssketch', markers);
                }
            }
            // Switch to first error's file
            if (errorLines.length > 0) {
                const firstLoc = parseErrorLocation(errorLines[0]);
                if (firstLoc && files.has(firstLoc.file) && currentFile !== firstLoc.file) {
                    switchToFile(firstLoc.file);
                }
            }
        }

        // Poll for errors raised inside per-frame callbacks (draw/update/events).
        // Build errors surface synchronously in runScript; these only exist at
        // runtime, so without polling they'd be invisible (the old bug where a
        // nil-value crash in draw() showed nothing at all).
        let lastRuntimeError = '';
        setInterval(() => {
            if (!Module || !Module.ccall || !isRunning()) return;
            try {
                const err = Module.ccall('getRuntimeError', 'string', [], []);
                if (err && err.length > 0 && err !== lastRuntimeError) {
                    lastRuntimeError = err;
                    displayScriptError(err);
                    showScriptErrors(err);
                }
            } catch (e) { /* engine mid-reload; try again next tick */ }
        }, 500);

        // Run script. quiet=true (number-tweak drags) skips the console
        // chatter so rapid rebuilds don't wipe/flood the console panel.
        function runScript(quiet) {
            if (!editor) {
                logToConsole('Editor not ready yet!', 'error');
                return;
            }
            if (!Module || !Module.ccall) {
                logToConsole('Engine not ready yet!', 'error');
                return;
            }

            if (!quiet) clearConsole();
            clearErrorMarkers();
            lastRuntimeError = '';
            if (!quiet) logToConsole('Running script...', 'notice');

            try {
                // Resume engine if it was paused
                Module.ccall('resumeEngine', null, [], []);

                // Always use multi-file API (even for single file, to preserve filename)
                Module.ccall('clearScriptFiles', null, [], []);
                for (const [name, file] of [...files].reverse()) {
                    const code = file.model.getValue();
                    Module.ccall('addScriptFile', null, ['string', 'string'], [name, code]);
                }
                Module.ccall('buildScriptFiles', null, [], []);

                // Check for script errors
                const error = Module.ccall('getScriptError', 'string', [], []);
                if (error && error.length > 0) {
                    displayScriptError(error);
                    showScriptErrors(error);
                } else {
                    if (!quiet) logToConsole('Script loaded successfully!', 'success');
                    // Set running state
                    document.getElementById('runBtn').classList.add('running');
                    document.getElementById('stopBtn').classList.add('running');
                }
            } catch (e) {
                logToConsole('Error: ' + e.message, 'error');
            }
        }

        // Stop script (pause engine for power saving)
        function stopScript() {
            if (!Module || !Module.ccall) {
                logToConsole('Engine not ready yet!', 'error');
                return;
            }

            try {
                Module.ccall('pauseEngine', null, [], []);
                clearErrorMarkers();
                logToConsole('Engine paused.', 'notice');
                // Clear running state
                document.getElementById('runBtn').classList.remove('running');
                document.getElementById('stopBtn').classList.remove('running');
                // Disable auto-run when stopped
                if (autoRunEnabled) {
                    autoRunEnabled = false;
                    updateRunButtonState();
                    if (autoRunTimer) {
                        clearTimeout(autoRunTimer);
                        autoRunTimer = null;
                    }
                }
            } catch (e) {
                logToConsole('Error: ' + e.message, 'error');
            }
        }

        // Video recording
        let mediaRecorder = null;
        let recordedChunks = [];

        function toggleRecording() {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                stopRecording();
            } else {
                startRecording();
            }
        }

        function startRecording() {
            const canvas = document.getElementById('canvas');
            if (!canvas) {
                logToConsole('Canvas not ready!', 'error');
                return;
            }

            try {
                const stream = canvas.captureStream(30); // 30 fps

                // Safari: mp4, Chrome/Firefox: webm
                // (Chrome claims mp4 support but outputs broken files)
                const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
                const mimeType = isSafari && MediaRecorder.isTypeSupported('video/mp4')
                    ? 'video/mp4'
                    : 'video/webm';

                mediaRecorder = new MediaRecorder(stream, { mimeType });
                recordedChunks = [];

                mediaRecorder.ondataavailable = (e) => {
                    if (e.data.size > 0) {
                        recordedChunks.push(e.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    const ext = mimeType.includes('mp4') ? 'mp4' : 'webm';
                    const blob = new Blob(recordedChunks, { type: mimeType });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `trusssketch-${Date.now()}.${ext}`;
                    a.click();
                    URL.revokeObjectURL(url);
                    logToConsole(`Video saved! (${(blob.size / 1024 / 1024).toFixed(1)} MB)`, 'success');
                    // Show share modal after video download
                    showShareModal();
                };

                mediaRecorder.start();
                document.getElementById('recordBtn').classList.add('recording');
                logToConsole('Recording started... Click again to stop.', 'notice');
            } catch (e) {
                logToConsole('Recording error: ' + e.message, 'error');
            }
        }

        function stopRecording() {
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
                document.getElementById('recordBtn').classList.remove('recording');
                logToConsole('Recording stopped.', 'notice');
            }
        }

        // Share modal functions
        function showShareModal() {
            document.getElementById('shareModalTitle').innerHTML = t('videoSaved') + ' <span class="wiggle-emoji">🎉</span>';
            document.getElementById('shareModalDesc').textContent = t('shareDesc');
            document.getElementById('shareModalCopy').lastChild.textContent = ' ' + t('copy');
            document.getElementById('shareModalClose').textContent = t('close');
            document.getElementById('shareModal').classList.add('active');
        }

        function closeShareModal() {
            document.getElementById('shareModal').classList.remove('active');
        }

        // Get share URL (returns null if assets exist)
        async function getShareUrl() {
            if (assets.size > 0) {
                return null;  // Can't share projects with assets via URL
            }
            const data = getSaveData();
            const compressed = LZString.compressToEncodedURIComponent(data);

            // Try short URL first
            try {
                const response = await fetch('/api/shorten', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code: compressed })
                });
                if (response.ok) {
                    const { url } = await response.json();
                    return url;
                }
            } catch (e) {}

            // Fallback to long URL
            return window.location.origin + window.location.pathname + '#' + compressed;
        }

        function getShareText(url) {
            const text = t('shareText');
            if (url) {
                return `${text}\n${url}`;
            } else {
                return `${text}\nhttps://trussc.org/sketch`;
            }
        }

        async function shareToX() {
            const url = await getShareUrl();
            const text = getShareText(url);
            const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
            window.open(intentUrl, '_blank');
        }

        async function shareToBluesky() {
            const url = await getShareUrl();
            const text = getShareText(url);
            const intentUrl = `https://bsky.app/intent/compose?text=${encodeURIComponent(text)}`;
            window.open(intentUrl, '_blank');
        }

        async function copyShareText() {
            const url = await getShareUrl();
            const text = getShareText(url);
            try {
                await navigator.clipboard.writeText(text);
                logToConsole('Copied!', 'success');
            } catch (e) {
                logToConsole('Copy failed: ' + e.message, 'error');
            }
        }

        // Get save data (always JSON to preserve tab names)
        function getSaveData() {
            const data = { files: {} };
            for (const [name, file] of files) {
                data.files[name] = file.model.getValue();
            }
            return JSON.stringify(data, null, 2);
        }

        // Get project name (first tab name without .tcs)
        function getProjectName() {
            const firstName = files.keys().next().value || 'sketch';
            return firstName.replace(/\.tcs$/, '');
        }

        // Mark all files as saved
        function markAllSaved() {
            for (const [name, file] of files) {
                file.savedContent = file.model.getValue();
            }
            isModified = false;
        }

        // No longer used (was for directory save)

        // Check if project is simple (single source, no assets)
        function isSimpleProject() {
            return files.size === 1 && assets.size === 0;
        }

        // Generate index.html for web deployment
        function generateIndexHtml(projectName) {
            const mainFile = files.keys().next().value || 'main.tcs';
            const dpr = window.devicePixelRatio || 1;
            const canvasWidth = canvas ? Math.round(canvas.width / dpr) : 800;
            const canvasHeight = canvas ? Math.round(canvas.height / dpr) : 600;
            // Note: </scr + ipt> split to avoid breaking outer script tag
            return `<!DOCTYPE html>
<!--
    Web deployment sample for TrussSketch.
    To publish your sketch on the web:
    1. Upload this folder to any static hosting (GitHub Pages, Netlify, etc.)
    2. Open index.html in a browser — that's it!
    The sketch runtime is loaded from CDN, so no build step is needed.
-->
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <style>
        body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #1e1e1e; }
        truss-sketch { max-width: 100vw; max-height: 100vh; }
    </style>
</head>
<body>
    <script src="https://cdn.trussc.org/sketch.js"><` + `/script>
    <truss-sketch src="src/${mainFile}" data-base="./data/" width="${canvasWidth}" height="${canvasHeight}"></truss-sketch>
</body>
</html>`;
        }

        // Build ZIP blob for project
        async function buildProjectZip(projectName) {
            const zip = new JSZip();

            // src/ — script files
            for (const [name, file] of files) {
                const fileName = name;
                zip.file('src/' + fileName, file.model.getValue());
            }

            // data/ — assets
            if (assets.size > 0) {
                const assetNames = [];
                for (const [name, asset] of assets) {
                    assetNames.push(name);
                    zip.file('data/' + name, asset.blob);
                }
                zip.file('data/manifest.json', JSON.stringify({ files: assetNames }, null, 2));
            }

            // index.html — web deploy sample
            zip.file('index.html', generateIndexHtml(projectName));

            // truss-project.json — project manifest
            const projectConfig = {
                files: Array.from(files.keys()).map(name => 'src/' + name)
            };
            zip.file('truss-project.json', JSON.stringify(projectConfig, null, 2));

            return await zip.generateAsync({ type: 'blob' });
        }

        // Save project as .tcsproj (ZIP)
        async function saveScript(forceNew = false) {
            const projectName = getProjectName();
            const fileName = projectName + '.tcsproj';

            try {
                const blob = await buildProjectZip(projectName);

                if ('showSaveFilePicker' in window) {
                    try {
                        const handle = await window.showSaveFilePicker({
                            suggestedName: fileName,
                            types: [{
                                description: 'TrussSketch Project',
                                accept: { 'application/zip': ['.tcsproj'] }
                            }]
                        });
                        const writable = await handle.createWritable();
                        await writable.write(blob);
                        await writable.close();
                        logToConsole('Saved: ' + handle.name, 'success');
                        markAllSaved();
                        return;
                    } catch (e) {
                        if (e.name === 'AbortError') return;
                    }
                }

                // Fallback: download link
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                a.click();
                URL.revokeObjectURL(url);
                logToConsole('Saved: ' + fileName, 'success');
                markAllSaved();
            } catch (e) {
                logToConsole('Save error: ' + e.message, 'error');
            }
        }

        // Save button Shift key handling
        (function() {
            const saveBtn = document.getElementById('saveBtn');
            if (!saveBtn) return;

            // Update button text based on Shift key
            function updateSaveButton(e) {
                if (e.shiftKey) {
                    saveBtn.textContent = 'Save New';
                } else {
                    saveBtn.textContent = 'Save';
                }
            }

            document.addEventListener('keydown', updateSaveButton);
            document.addEventListener('keyup', updateSaveButton);

            // Override onclick to check Shift
            saveBtn.onclick = (e) => {
                saveScript(e.shiftKey);
            };
        })();

        // Run button click handling
        (function() {
            const runBtn = document.getElementById('runBtn');
            if (!runBtn) return;

            runBtn.onclick = (e) => {
                if (isRunning()) {
                    // Already running - toggle auto-run mode
                    toggleAutoRun();
                } else {
                    // Not running - start execution
                    runScript();
                }
            };
            updateRunButtonState();  // reflect the default auto-run state
        })();

        // Keyboard shortcuts (Cmd+Enter / Ctrl+Enter to run) - fallback for when editor not focused
        document.addEventListener('keydown', (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
                e.preventDefault();
                // Pulse effect
                const runBtn = document.getElementById('runBtn');
                if (runBtn) {
                    runBtn.classList.remove('pulse');
                    void runBtn.offsetWidth;  // Force reflow
                    runBtn.classList.add('pulse');
                }
                runScript();
            }
        });

        // Load files from parsed data
        function loadFilesFromData(data, sourceName) {
            // Clear existing files
            for (const [name, file] of files) {
                file.model.dispose();
            }
            files.clear();

            if (typeof data === 'object' && data.files) {
                // Multi-file format
                for (const [name, content] of Object.entries(data.files)) {
                    const model = monaco.editor.createModel(content, 'trusssketch');
                    model.onDidChangeContent(() => checkModified());
                    files.set(name, { model, savedContent: content });
                }
                currentFile = files.has('main') ? 'main' : files.keys().next().value;
            } else {
                // Single file format
                const content = typeof data === 'string' ? data : JSON.stringify(data);
                const model = monaco.editor.createModel(content, 'trusssketch');
                model.onDidChangeContent(() => checkModified());
                files.set('main.tcs', { model, savedContent: content });
                currentFile = 'main.tcs';
            }

            editor.setModel(files.get(currentFile).model);
            renderFileTabs();
            isModified = false;
            logToConsole('Loaded from: ' + sourceName, 'success');
        }

        // Load script (Directory picker)
        async function loadScript() {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = '.tcsproj,.tcs';
            input.onchange = async function(e) {
                const file = e.target.files[0];
                if (!file) return;

                if (file.name.endsWith('.tcsproj')) {
                    await loadProjectFromZip(file);
                } else if (file.name.endsWith('.tcs')) {
                    await loadSingleTcsFile(file);
                } else {
                    logToConsole('Unsupported file type. Use .tcsproj or .tcs', 'error');
                }
            };
            input.click();
        }

        // Share script via short URL (with fallback to long URL)
        async function shareScript() {
            // Warn if assets exist
            if (assets.size > 0) {
                const proceed = confirm(t('assetWarning'));
                if (!proceed) return;
            }

            const btn = document.getElementById('shareBtn');
            const originalText = btn.textContent;

            // Immediately show "Copied!" feedback
            btn.textContent = 'Copied!';
            btn.style.background = '#2ea043';

            // Revert after 2 seconds
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
            }, 2000);

            // Get data (plain text for single file, JSON for multi-file)
            const data = getSaveData();
            const compressed = LZString.compressToEncodedURIComponent(data);

            // Try to create short URL first
            try {
                const response = await fetch('/api/shorten', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ code: compressed })
                });

                if (response.ok) {
                    const { url } = await response.json();
                    await navigator.clipboard.writeText(url);
                    logToConsole('Short URL copied! ' + url, 'success');
                    return;
                } else {
                    logToConsole('Shortener API error: ' + response.status, 'error');
                }
            } catch (e) {
                logToConsole('Shortener error: ' + e.message, 'error');
            }

            // Fallback to long URL
            const url = window.location.origin + window.location.pathname + '#' + compressed;
            try {
                await navigator.clipboard.writeText(url);
                logToConsole('Long URL copied (' + compressed.length + ' chars)', 'success');
            } catch (e) {
                logToConsole('Share URL: ' + url, 'notice');
            }
        }

        // Toggle fullscreen for canvas
        function toggleFullscreen() {
            const canvas = document.getElementById('canvas');
            if (!document.fullscreenElement) {
                canvas.requestFullscreen().catch(err => {
                    logToConsole('Fullscreen error: ' + err.message, 'error');
                });
            } else {
                document.exitFullscreen();
            }
        }

        // CDN configuration
        const CDN_BASE = 'https://cdn.trussc.org/';
        const isLocalDev = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        let useLocalFiles = false; // Will be set after checking local file availability

        // Initialize Emscripten Module
        var Module = {
            locateFile: function(path, prefix) {
                if (useLocalFiles) {
                    // Local development: use local files
                    return path + '?v=' + new Date().getTime();
                } else {
                    // Production: use CDN
                    return CDN_BASE + path + '?v=' + new Date().getTime();
                }
            },
            canvas: (function() {
                return document.getElementById('canvas');
            })(),
            // Required for direct character input to work properly
            keyboardListeningElement: document.getElementById('canvas'),
            onRuntimeInitialized: function() {
                document.getElementById('loading').style.display = 'none';
                const canvas = document.getElementById('canvas');
                canvas.style.display = 'block';
                // Immediately resize to prevent 2x flash
                resizeCanvas();
                requestAnimationFrame(resizeCanvas);
                setStatus('Ready', 'ready');
                logToConsole('TrussSketch engine ready!', 'success');
                // Focus canvas when clicked (required for keyboard input)
                canvas.addEventListener('mousedown', () => canvas.focus());
                // Mount any pre-loaded assets to virtual filesystem
                mountAllAssetsToFS();
                // Poll until C++ app is fully initialized.
                // With WebGPU + ASYNCIFY, main() completes asynchronously
                // after onRuntimeInitialized, so g_app may not be set yet.
                (function waitForApp() {
                    try {
                        if (Module.ccall('isAppReady', 'number', [], [])) {
                            engineReady = true;
                            tryAutoRun();
                        } else {
                            setTimeout(waitForApp, 50);
                        }
                    } catch(e) {
                        setTimeout(waitForApp, 50);
                    }
                })();
            },
            print: function(text) {
                logToConsole(text);
            },
            printErr: function(text) {
                // Filter out some noise
                if (text.includes('[NOTICE]')) {
                    logToConsole(text.replace(/\[.*?\]\s*\[NOTICE\]\s*/, ''), 'notice');
                } else if (text.includes('[ERROR]')) {
                    logToConsole(text.replace(/\[.*?\]\s*\[ERROR\]\s*/, ''), 'error');
                } else if (!text.includes('warning:')) {
                    logToConsole(text, 'error');
                }
            }
        };

        // Resize canvas to fit container while maintaining aspect ratio
        function resizeCanvas() {
            const canvas = document.getElementById('canvas');
            const container = document.getElementById('canvasContainer');
            if (!canvas || !container || canvas.style.display === 'none') return;

            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;
            const canvasRatio = 1; // 600x600 = 1:1

            let width, height;
            if (containerWidth / containerHeight > canvasRatio) {
                // Container is wider than canvas ratio
                height = containerHeight;
                width = height * canvasRatio;
            } else {
                // Container is taller than canvas ratio
                width = containerWidth;
                height = width / canvasRatio;
            }

            // Apply CSS size (not internal resolution)
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
        }

        // Call on load and resize
        window.addEventListener('resize', resizeCanvas);
        // Also call when resizers are used
        const originalResizeCanvas = resizeCanvas;
        setInterval(resizeCanvas, 500); // Fallback for resizer changes

        // Resizable panel dividers
        (function() {
            // Horizontal (left-right) resizer
            const resizer = document.getElementById('resizer');
            const editorPanel = document.getElementById('editorPanel');
            const canvasPanel = document.getElementById('canvasPanel');
            let isResizing = false;

            resizer.addEventListener('mousedown', function(e) {
                isResizing = true;
                resizer.classList.add('active');
                document.body.style.cursor = 'col-resize';
                document.body.style.userSelect = 'none';
            });

            document.addEventListener('mousemove', function(e) {
                if (!isResizing) return;

                const containerRect = document.querySelector('.main').getBoundingClientRect();
                const newEditorWidth = e.clientX - containerRect.left;
                const containerWidth = containerRect.width;

                // Limit resize range (20% - 80%)
                const minWidth = containerWidth * 0.2;
                const maxWidth = containerWidth * 0.8;

                if (newEditorWidth >= minWidth && newEditorWidth <= maxWidth) {
                    const editorPercent = (newEditorWidth / containerWidth) * 100;
                    editorPanel.style.width = editorPercent + '%';
                    canvasPanel.style.width = (100 - editorPercent) + '%';
                }
            });

            document.addEventListener('mouseup', function(e) {
                if (isResizing) {
                    isResizing = false;
                    resizer.classList.remove('active');
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                }
            });

            // Vertical (console height) resizer
            const resizerH = document.getElementById('resizerH');
            const consoleEl = document.getElementById('console');
            let isResizingH = false;

            resizerH.addEventListener('mousedown', function(e) {
                isResizingH = true;
                resizerH.classList.add('active');
                document.body.style.cursor = 'row-resize';
                document.body.style.userSelect = 'none';
            });

            document.addEventListener('mousemove', function(e) {
                if (!isResizingH) return;

                const panelRect = canvasPanel.getBoundingClientRect();
                const newConsoleHeight = panelRect.bottom - e.clientY;

                // Limit resize range (60px - 400px)
                if (newConsoleHeight >= 60 && newConsoleHeight <= 400) {
                    consoleEl.style.height = newConsoleHeight + 'px';
                }
            });

            document.addEventListener('mouseup', function(e) {
                if (isResizingH) {
                    isResizingH = false;
                    resizerH.classList.remove('active');
                    document.body.style.cursor = '';
                    document.body.style.userSelect = '';
                }
            });
        })();

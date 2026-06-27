// TrussC docs assistant — self-contained, injectable chat widget.
//
// Drop into any page with one line:
//   <script defer src="/chat-widget.js" data-api="https://api.trussc.org"></script>
//
// It injects its own CSS + DOM and is HEALTH-GATED: nothing appears unless the
// API answers GET /api?... → /health. So shipping this to the live site while the
// backend is undeployed keeps the assistant invisible — it self-enables the day
// the server comes online. F1 is the (intentionally obscure) reveal trigger.
//
// Config (in priority order):
//   <script data-api="…">         per-tag API origin
//   window.TRUSSC_CHAT_API        global override
//   (default) location.origin     same-origin (the dev server serves this file)
(function () {
  'use strict';
  if (window.__trusscChat) return;           // guard against double-injection
  window.__trusscChat = true;

  var cur = document.currentScript;
  var API = (cur && cur.dataset && cur.dataset.api) || window.TRUSSC_CHAT_API || location.origin;
  API = API.replace(/\/+$/, '');             // no trailing slash

  // --- styles (scoped under .cw- prefixes; safe to drop on any page) ----------
  var css = `
    .cw-bubble {
      position: fixed; right: 22px; bottom: 22px; width: 52px; height: 52px; border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary,#6366f1), var(--color-accent,#22d3ee));
      display: none; align-items: center; justify-content: center; cursor: pointer;
      box-shadow: 0 6px 20px rgba(0,0,0,0.5); z-index: 9998; border: none; transition: transform 0.15s;
    }
    .cw-bubble:hover { transform: translateY(-2px); }
    .cw-bubble svg { width: 26px; height: 26px; stroke: #fff; fill: none; stroke-width: 2; }
    .cw-bubble.show { display: flex; }

    .cw-panel {
      position: fixed; right: 22px; bottom: 22px; width: 546px; max-width: calc(100vw - 24px);
      height: 560px; max-height: calc(100vh - 44px);
      background: var(--color-bg-card,#16161a); border: 1px solid var(--color-border,#27272a); border-radius: 14px;
      display: none; flex-direction: column; overflow: hidden; z-index: 9999;
      box-shadow: 0 12px 40px rgba(0,0,0,0.6);
      font-family: var(--font-sans,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif);
      color: var(--color-text,#e8e8ed);
    }
    .cw-panel.open { display: flex; }
    .cw-head { display: flex; align-items: center; gap: 8px; padding: 12px 14px; border-bottom: 1px solid var(--color-border,#27272a); background: var(--color-bg-alt,#111113); }
    .cw-head .cw-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent,#22d3ee); }
    .cw-head .cw-title { font-size: 14px; font-weight: 600; }
    .cw-head .cw-sub { font-size: 11px; color: var(--color-text-muted,#8b8b93); }
    .cw-head .cw-act { background: none; border: 1px solid var(--color-border,#27272a); border-radius: 6px; color: var(--color-text-muted,#8b8b93); cursor: pointer; font-size: 11px; padding: 3px 8px; }
    .cw-head .cw-act:hover { color: var(--color-text,#e8e8ed); border-color: var(--color-text-muted,#8b8b93); }
    .cw-head .cw-copy { margin-left: auto; }
    .cw-head .cw-x { background: none; border: none; color: var(--color-text-muted,#8b8b93); cursor: pointer; font-size: 18px; line-height: 1; padding: 0 2px; }
    .cw-head .cw-x:hover { color: var(--color-text,#e8e8ed); }

    .cw-msgs { flex: 1; overflow-y: auto; padding: 14px; display: flex; flex-direction: column; gap: 12px; }
    .cw-msgs::-webkit-scrollbar { width: 7px; }
    .cw-msgs::-webkit-scrollbar-thumb { background: var(--color-border,#27272a); border-radius: 4px; }

    .cw-msg { font-size: 13.5px; line-height: 1.6; max-width: 92%; }
    .cw-msg.user { align-self: flex-end; background: var(--color-primary,#6366f1); color: #fff; padding: 8px 12px; border-radius: 12px 12px 2px 12px; }
    .cw-msg.bot { align-self: flex-start; color: var(--color-text,#e8e8ed); }
    .cw-msg.bot pre { background: var(--color-bg,#0a0a0b); border: 1px solid var(--color-border,#27272a); border-radius: 7px; padding: 8px 10px; margin: 6px 0; overflow-x: auto; font-family: var(--font-mono,'JetBrains Mono','SF Mono',Consolas,monospace); font-size: 12px; }
    .cw-msg.bot code { font-family: var(--font-mono,'JetBrains Mono','SF Mono',Consolas,monospace); font-size: 12px; }
    .cw-msg.bot a { color: var(--color-accent,#22d3ee); text-decoration: none; }
    .cw-msg.bot a:hover { text-decoration: underline; }
    .cw-msg .cw-reflinks { margin-top: 8px; font-size: 12px; color: var(--color-text-muted,#8b8b93); }
    .cw-msg .cw-reflinks a { color: var(--color-accent,#22d3ee); text-decoration: none; }
    .cw-msg .cw-reflinks a:hover { text-decoration: underline; }
    .cw-msg .cw-sources { margin-top: 8px; font-size: 11px; color: var(--color-text-muted,#8b8b93); }
    .cw-msg .cw-sources summary { cursor: pointer; user-select: none; }
    .cw-msg .cw-sources .cw-src { padding: 2px 0; }
    .cw-msg .cw-sources .cw-tag { color: var(--color-accent,#22d3ee); }

    .cw-inp { display: flex; gap: 8px; padding: 10px; border-top: 1px solid var(--color-border,#27272a); }
    .cw-inp textarea {
      flex: 1; resize: none; height: 38px; max-height: 110px; background: var(--color-bg,#0a0a0b); color: var(--color-text,#e8e8ed);
      border: 1px solid var(--color-border,#27272a); border-radius: 9px; padding: 9px 11px;
      font-family: var(--font-sans,-apple-system,sans-serif); font-size: 13px; outline: none;
    }
    .cw-inp textarea:focus { border-color: var(--color-primary,#6366f1); }
    .cw-inp button { background: var(--color-primary,#6366f1); color: #fff; border: none; border-radius: 9px; padding: 0 14px; cursor: pointer; font-size: 13px; font-weight: 600; }
    .cw-inp button:disabled { opacity: 0.5; cursor: default; }
    .cw-blink::after { content: '▍'; color: var(--color-text-muted,#8b8b93); animation: cw-blink 1s step-end infinite; }
    @keyframes cw-blink { 50% { opacity: 0; } }
  `;
  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // --- DOM --------------------------------------------------------------------
  var root = document.createElement('div');
  root.innerHTML = `
    <button class="cw-bubble" aria-label="Open TrussC assistant">
      <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    </button>
    <div class="cw-panel">
      <div class="cw-head">
        <span class="cw-dot"></span>
        <div>
          <div class="cw-title">TrussC Assistant</div>
          <div class="cw-sub">beginner docs helper · local LLM</div>
        </div>
        <button class="cw-act cw-copy" aria-label="Copy conversation" title="Copy conversation">copy</button>
        <button class="cw-act cw-clear" aria-label="Clear conversation" title="Clear conversation">clear</button>
        <button class="cw-x" aria-label="Close">×</button>
      </div>
      <div class="cw-msgs"></div>
      <div class="cw-inp">
        <textarea class="cw-q" placeholder="Ask about TrussC… (e.g. how do I draw a curve?)" rows="1"></textarea>
        <button class="cw-send">Send</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);

  var bubble = root.querySelector('.cw-bubble');
  var panel = root.querySelector('.cw-panel');
  var msgs = root.querySelector('.cw-msgs');
  var qEl = root.querySelector('.cw-q');
  var sendBtn = root.querySelector('.cw-send');

  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  var online = false, busy = false;

  // Localized strings. The page locale comes from <html lang> (en/ja/ko on
  // trussc.org). The greeting sets expectations: a reference/examples guide that
  // points you to the right API — not an all-purpose assistant.
  var LANG = (function () {
    var l = (document.documentElement.lang || '').slice(0, 2).toLowerCase();
    return l === 'ja' || l === 'ko' ? l : 'en';
  })();
  var I18N = {
    en: {
      greeting: "Hi! I'm your TrussC guide — ask me anything in the docs.",
      placeholder: 'e.g. "How do I draw a curve?" "Any shader examples?"',
      more: 'See also: ',
      sources: 'sources',
    },
    ja: {
      greeting: 'こんにちは！TrussC の案内役だよ。ドキュメントのことなら気軽に聞いてね。',
      placeholder: '例:「曲線の書き方は？」「シェーダのサンプルある？」',
      more: '詳しくは: ',
      sources: '出典',
    },
    ko: {
      greeting: '안녕하세요! TrussC 안내 도우미예요. 문서에 관한 거라면 편하게 물어보세요.',
      placeholder: '예: "곡선은 어떻게 그리나요?" "셰이더 예제 있어요?"',
      more: '자세히: ',
      sources: '출처',
    },
  };
  var STR = I18N[LANG];
  var GREETING = STR.greeting;
  qEl.placeholder = STR.placeholder;

  // Conversation history. Persisted to localStorage so closing the tab doesn't lose
  // the chat — restored (text only; ephemeral links/sources footers are not
  // re-rendered) when the panel reopens. Deliberately lightweight: a single thread,
  // capped to the last 40 turns, dropped after 24h of inactivity. No history list —
  // it's a convenience, fine to lose.
  var STORE_KEY = 'trussc-chat-v2';
  var TTL_MS = 24 * 60 * 60 * 1000;
  function loadConvo() {
    try {
      var o = JSON.parse(localStorage.getItem(STORE_KEY));
      if (!o || !Array.isArray(o.c) || (Date.now() - o.ts) > TTL_MS) { localStorage.removeItem(STORE_KEY); return []; }
      return o.c;
    } catch (e) { return []; }
  }
  function saveConvo() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify({ ts: Date.now(), c: convo.slice(-40) })); } catch (e) {}
  }
  var convo = loadConvo();   // conversation history sent back each turn for follow-up chains

  // Health gate: only reveal on F1 if the server answers.
  fetch(API + '/health').then(function (r) { return r.json(); })
    .then(function (j) { online = !!j.ok; })
    .catch(function () { online = false; });

  function openPanel() {
    if (!online) return;
    bubble.classList.remove('show');
    panel.classList.add('open');
    qEl.focus();
    if (msgs.children.length) return;          // already populated this session
    if (convo.length) {
      // restore a prior conversation across tab closes (text bubbles only)
      for (var i = 0; i < convo.length; i++) {
        if (convo[i].role === 'user') addUser(convo[i].content);
        else { var rb = addBot(convo[i].content); var rbl = rb.el.querySelector('.cw-blink'); if (rbl) rbl.classList.remove('cw-blink'); }
      }
    } else {
      var b = addBot(GREETING);
      var blink = b.el.querySelector('.cw-blink'); if (blink) blink.classList.remove('cw-blink');
    }
  }
  function closePanel() { panel.classList.remove('open'); if (online) bubble.classList.add('show'); }
  function clearConvo() {
    convo = [];
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    msgs.innerHTML = '';
    var b = addBot(GREETING); var bl = b.el.querySelector('.cw-blink'); if (bl) bl.classList.remove('cw-blink');
    qEl.focus();
  }
  function copyConvo(btn) {
    if (!convo.length) return;
    var text = convo.map(function (t) { return (t.role === 'user' ? 'You: ' : 'TrussC: ') + t.content; }).join('\n\n');
    var done = function () { var o = btn.textContent; btn.textContent = 'copied'; setTimeout(function () { btn.textContent = o; }, 1200); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, function () {});
    else { var ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); done(); } catch (e) {} document.body.removeChild(ta); }
  }

  // F1 reveals the bubble (easter egg) and opens the panel.
  window.addEventListener('keydown', function (e) {
    if (e.key === 'F1') { e.preventDefault(); if (online) { bubble.classList.add('show'); openPanel(); } }
  });
  bubble.addEventListener('click', openPanel);
  root.querySelector('.cw-x').addEventListener('click', closePanel);
  root.querySelector('.cw-clear').addEventListener('click', clearConvo);
  root.querySelector('.cw-copy').addEventListener('click', function (e) { copyConvo(e.currentTarget); });

  // --- rendering: escape, then ```code``` → <pre>, links, inline `code`, <br> --
  function render(text) {
    var parts = String(text).split(/```/);
    return parts.map(function (p, i) {
      return i % 2
        ? '<pre>' + esc(p.replace(/^[a-zA-Z]*\n/, '')) + '</pre>'
        : esc(p)
            .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
            .replace(/`([^`]+)`/g, '<code>$1</code>')
            .replace(/\n/g, '<br>');
    }).join('');
  }
  function addUser(text) {
    var el = document.createElement('div'); el.className = 'cw-msg user'; el.textContent = text;
    msgs.appendChild(el); msgs.scrollTop = msgs.scrollHeight;
  }
  function addBot(text) {
    text = text || '';
    var el = document.createElement('div'); el.className = 'cw-msg bot';
    el.innerHTML = render(text) + '<span class="cw-blink"></span>';
    msgs.appendChild(el); msgs.scrollTop = msgs.scrollHeight;
    return { el: el, buf: text };
  }

  async function send() {
    var q = qEl.value.trim();
    if (!q || busy || !online) return;
    busy = true; sendBtn.disabled = true;
    qEl.value = ''; qEl.style.height = '38px';   // clear input + collapse back to one row
    addUser(q);
    var bot = addBot('');
    var srcs = null, links = null;
    try {
      var r = await fetch(API + '/chat', {
        method: 'POST', headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question: q, history: convo }),
      });
      var reader = r.body.getReader(); var dec = new TextDecoder(); var buf = '';
      for (;;) {
        var chunk = await reader.read(); if (chunk.done) break;
        buf += dec.decode(chunk.value, { stream: true });
        var sep;
        while ((sep = buf.indexOf('\n\n')) !== -1) {
          var block = buf.slice(0, sep); buf = buf.slice(sep + 2);
          var ev = (/event: (.+)/.exec(block) || [])[1];
          var data = (/data: ([\s\S]+)/.exec(block) || [])[1];
          if (!ev || data === undefined) continue;
          var payload = JSON.parse(data);
          if (ev === 'token') { bot.buf += payload; bot.el.innerHTML = render(bot.buf) + '<span class="cw-blink"></span>'; msgs.scrollTop = msgs.scrollHeight; }
          else if (ev === 'sources') { srcs = payload; }
          else if (ev === 'links') { links = payload; }
          else if (ev === 'error') { bot.buf += '\n\n[error: ' + payload + ']'; }
        }
      }
    } catch (e) {
      bot.buf += '\n\n[connection error]';
    }
    // finalize: drop the cursor; append "詳しくは" links + the sources disclosure
    var html = render(bot.buf);
    if (links && links.length) {
      html += '<div class="cw-reflinks">' + STR.more +
        links.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + '</a>'; }).join(' · ') +
        '</div>';
    }
    if (srcs && srcs.length) {
      html += '<details class="cw-sources"><summary>' + STR.sources + ' (' + srcs.length + ')</summary>' +
        srcs.map(function (s) {
          var t = s.link ? '<a href="' + esc(s.link) + '" target="_blank" rel="noopener">' + esc(s.title) + '</a>' : esc(s.title);
          return '<div class="cw-src"><span class="cw-tag">[' + esc(s.source) + ']</span> ' + t + ' · ' + s.score.toFixed(2) + '</div>';
        }).join('') +
        '</details>';
    }
    bot.el.innerHTML = html;
    convo.push({ role: 'user', content: q }, { role: 'assistant', content: bot.buf });
    saveConvo();   // survive tab close
    busy = false; sendBtn.disabled = false; qEl.focus();
  }

  sendBtn.addEventListener('click', send);
  // Ignore Enter while the IME is composing (Japanese/Korean confirm key).
  qEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && e.keyCode !== 229) { e.preventDefault(); send(); }
  });
  qEl.addEventListener('input', function (e) {
    e.target.style.height = '38px';
    e.target.style.height = Math.min(110, e.target.scrollHeight) + 'px';
  });
})();

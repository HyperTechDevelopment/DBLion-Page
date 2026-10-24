"use strict";

var I18N = {
  en: {
    "nav.docs": "Install",
    "nav.proof": "App",
    "nav.safety": "Guard",
    "nav.repo": "GitHub repo",
    "nav.lang": "PT",
    "err.eyebrow": "404 · off the map",
    "err.h1": "This page does not exist.",
    "err.lede": "The address may be mistyped or the page may have moved. The app itself lives on GitHub.",
    "err.home": "Back to the page",
    "err.repo": "GitHub repo",
    "hero.eyebrow": "v0.1.0 · Guarded AI database IDE · Windows x64",
    "hero.h1": "The AI proposes. You execute.",
    "hero.sub": "DBLion is a desktop AI database IDE: Electron + React + TypeScript. Read-only by default, one token, secrets in safeStorage. The AI never executes.",
    "hero.cta.primary": "Download v0.1.0",
    "hero.cta.secondary": "Run it locally",
    "hero.micro": "7 engines · 14 built-in themes · MIT · Public repo, open source",
    "hero.figcap": "Diagram of the guard: a SELECT statement leaves the proposal side, passes a READ-ONLY gate, and returns two rows on the gated side.",
    "proof.eyebrow": "Fullscreen screenshot",
    "proof.h2": "The real app, fullscreen",
    "proof.cap.main": "DBLion app window · fullscreen screenshot",
    "proof.cap.pycharm": "PyCharm · built-in, no remote fetch",
    "proof.cap.solarized": "Solarized Light · built-in, no remote fetch",
    "proof.cap.neon": "Neon · built-in, no remote fetch",
    "feat.eyebrow": "What it is",
    "feat.h2": "Guarded by design, multi-engine by fact",
    "feat.1t": "Guarded AI loop",
    "feat.1d": "AI drafts SQL; only you execute. Read-only default, single token.",
    "feat.2t": "7 engines",
    "feat.2d": "PostgreSQL · MySQL/MariaDB · SQL Server · Firebird · SQLite · MongoDB · Redis.",
    "feat.3t": "14 built-in themes",
    "feat.3d": "Local only, no remote fetch. Shown: PyCharm, Solarized Light, Neon.",
    "feat.4t": "Desktop stack",
    "feat.4d": "Electron + React + TypeScript, Windows x64 app, version 0.1.0 (pre-1.0).",
    "safe.eyebrow": "The guard",
    "safe.h2": "The boundary is explicit",
    "safe.1": "AI never executes. You approve every write.",
    "safe.4": "Honest limits: unsigned installer, no auto-update; Firebird without row-edit/CSV, SQL Server without CSV.",
    "inst.eyebrow": "Run it",
    "inst.h2": "Local install: installer or 4 steps",
    "inst.dl": "No Node? Grab the installer",
    "inst.dlbtn": "Download v0.1.0",
    "inst.dlsha": "SHA-256 EAD7FA952D3BF562B6E24D8904CCA8F44AD7BB550402CB18A8690749193AD323 · unsigned, so SmartScreen → More info → Run anyway.",
    "inst.s1": "1 · Clone the repo",
    "inst.c1": "git clone https://github.com/HyperTechDevelopment/DBLion.git",
    "inst.s2": "2 · Install dependencies",
    "inst.c2": "npm ci",
    "inst.s3": "3 · Start the app",
    "inst.c3": "npm run dev",
    "inst.s4": "4 · Build a release",
    "inst.c4": "npm run build && npm run dist",
    "inst.note": "No account, no telemetry, no auto-update. The installer stays unsigned for now.",
    "ui.copy": "Copy",
    "ui.copied": "Copied",
    "ui.copyLabel": "Copy command",
    "eng.label": "Seven engines · one guard",
    "eng.label.aria": "Supported database engines",
    "foot.license": "MIT © Marcos Gabriel Moraes",
    "foot.repo": "github.com/HyperTechDevelopment/DBLion",
    "how.eyebrow": "How the guard works",
    "how.h2": "Three moves, one human in charge",
    "how.1t": "AI proposes",
    "how.1d": "The copilot drafts SQL with live schema context. Text only, with no execution path.",
    "how.2t": "Guard checks",
    "how.2d": "Read-only fence, single-use token and native confirmation bind the exact statement.",
    "how.3t": "You execute",
    "how.3d": "Nothing runs without your action. Grants stay the final boundary.",
    "close.h2": "One guard, seven engines.",
    "close.sub": "Read-only by default. The AI never executes.",
    "close.repo": "Star the public repo"
  },
  "pt-BR": {
    "nav.docs": "Instalação",
    "nav.proof": "Aplicativo",
    "nav.safety": "Guarda",
    "nav.repo": "Repositório GitHub",
    "nav.lang": "EN",
    "err.eyebrow": "404 · fora do mapa",
    "err.h1": "Esta página não existe.",
    "err.lede": "O endereço pode estar errado ou a página pode ter se movido. O aplicativo em si vive no GitHub.",
    "err.home": "Voltar à página",
    "err.repo": "Repositório no GitHub",
    "hero.eyebrow": "v0.1.0 · IDE de banco de dados com IA vigiada · Windows x64",
    "hero.h1": "A IA propõe. Você executa.",
    "hero.sub": "DBLion é uma IDE desktop de banco de dados com IA: Electron + React + TypeScript. Somente leitura por padrão, token único, segredos em safeStorage. A IA nunca executa.",
    "hero.cta.primary": "Baixar v0.1.0",
    "hero.cta.secondary": "Rodar localmente",
    "hero.micro": "7 motores · 14 temas embutidos · MIT · Repositório público, código aberto",
    "hero.figcap": "Diagrama da guarda: um SELECT sai do lado da proposta, passa por um portão READ-ONLY e devolve duas linhas do lado vigiado.",
    "proof.eyebrow": "Captura em tela cheia",
    "proof.h2": "O aplicativo real, em tela cheia",
    "proof.cap.main": "Janela do DBLion · captura em tela cheia",
    "proof.cap.pycharm": "PyCharm · embutido, sem busca remota",
    "proof.cap.solarized": "Solarized Light · embutido, sem busca remota",
    "proof.cap.neon": "Neon · embutido, sem busca remota",
    "feat.eyebrow": "O que é",
    "feat.h2": "Vigiado por projeto, multi-motor por fato",
    "feat.1t": "Ciclo de IA vigiada",
    "feat.1d": "A IA redige SQL; só você executa. Somente leitura por padrão, token único.",
    "feat.2t": "7 motores",
    "feat.2d": "PostgreSQL · MySQL/MariaDB · SQL Server · Firebird · SQLite · MongoDB · Redis.",
    "feat.3t": "14 temas embutidos",
    "feat.3d": "Somente locais, sem busca remota. Exibidos: PyCharm, Solarized Light, Neon.",
    "feat.4t": "Pilha desktop",
    "feat.4d": "Electron + React + TypeScript, app Windows x64, versão 0.1.0 (pré-1.0).",
    "safe.eyebrow": "A guarda",
    "safe.h2": "O limite é explícito",
    "safe.1": "A IA nunca executa. Você aprova cada escrita.",
    "safe.4": "Limites honestos: instalador sem assinatura, sem auto-update; Firebird sem row-edit/CSV, SQL Server sem CSV.",
    "inst.eyebrow": "Execute",
    "inst.h2": "Instalação local: instalador ou 4 passos",
    "inst.dl": "Sem Node? Pegue o instalador",
    "inst.dlbtn": "Baixar v0.1.0",
    "inst.dlsha": "SHA-256 EAD7FA952D3BF562B6E24D8904CCA8F44AD7BB550402CB18A8690749193AD323 · sem assinatura, então SmartScreen → Mais informações → Executar assim mesmo.",
    "inst.s1": "1 · Clone o repositório",
    "inst.c1": "git clone https://github.com/HyperTechDevelopment/DBLion.git",
    "inst.s2": "2 · Instale as dependências",
    "inst.c2": "npm ci",
    "inst.s3": "3 · Inicie o aplicativo",
    "inst.c3": "npm run dev",
    "inst.s4": "4 · Gere uma release",
    "inst.c4": "npm run build && npm run dist",
    "inst.note": "Sem conta, sem telemetria, sem auto-update. O instalador continua sem assinatura por enquanto.",
    "ui.copy": "Copiar",
    "ui.copied": "Copiado",
    "ui.copyLabel": "Copiar comando",
    "eng.label": "Sete motores · uma guarda",
    "eng.label.aria": "Motores de banco de dados suportados",
    "foot.license": "MIT © Marcos Gabriel Moraes",
    "foot.repo": "github.com/HyperTechDevelopment/DBLion",
    "how.eyebrow": "Como a guarda funciona",
    "how.h2": "Três movimentos, um humano no comando",
    "how.1t": "A IA propõe",
    "how.1d": "O copilot redige SQL com o schema da conexão ativa. Só texto, sem caminho de execução.",
    "how.2t": "A guarda confere",
    "how.2d": "Cerca read-only, token de uso único e confirmação nativa vinculam o statement exato.",
    "how.3t": "Você executa",
    "how.3d": "Nada roda sem sua ação. As grants seguem como fronteira final.",
    "close.h2": "Uma guarda, sete motores.",
    "close.sub": "Somente leitura por padrão. A IA nunca executa.",
    "close.repo": "Favoritar o repositório público"
  }
};

function getLang() {
  try {
    var saved = localStorage.getItem("dblion-lang");
    if (saved === "pt-BR" || saved === "en") return saved;
  } catch (e) { /* storage unavailable */ }
  return "en";
}

function applyLang(lang) {
  var dict = I18N[lang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] == null) return;
    el.textContent = dict[key];
    var ariaKey = el.getAttribute("data-i18n-aria-label");
    if (ariaKey && dict[ariaKey] != null) el.setAttribute("aria-label", dict[ariaKey]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-alt");
    if (dict[key] == null) return;
    el.setAttribute("alt", dict[key]);
  });
  document.querySelectorAll("[data-i18n-aria-label]:not([data-i18n])").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] == null) return;
    el.setAttribute("aria-label", dict[key]);
  });
  document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : "en";
  try { localStorage.setItem("dblion-lang", lang); } catch (e) { /* ignore */ }
}

function initI18n() {
  applyLang(getLang());
  var toggle = document.getElementById("lang-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", function () {
    var next = getLang() === "en" ? "pt-BR" : "en";
    applyLang(next);
  });
}

function initNav() {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", function () {
    var open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

function initCopy() {
  var statusEl = document.getElementById("copy-status");
  document.querySelectorAll(".copy").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      function announce() {
        var original = btn.textContent;
        var dict = I18N[getLang()] || I18N.en;
        var msg = dict["ui.copied"] || "OK";
        btn.textContent = msg;
        btn.classList.add("is-copied");
        if (statusEl) statusEl.textContent = msg + ".";
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("is-copied");
          if (statusEl) statusEl.textContent = "";
        }, 1400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(announce, announce);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) { /* ignore */ }
        document.body.removeChild(ta);
        announce();
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initI18n();
  initNav();
  initCopy();
});

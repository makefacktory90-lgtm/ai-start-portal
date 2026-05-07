const formats = {
  story: { label: "Story", w: 1080, h: 1920, ratio: "9 / 16" },
  square: { label: "Square", w: 1080, h: 1080, ratio: "1 / 1" },
  youtube: { label: "YouTube", w: 1920, h: 1080, ratio: "16 / 9" },
  banner: { label: "Banner", w: 1920, h: 640, ratio: "3 / 1" }
};

const themes = [
  { id: "steel", bg: "#d8d8d8", ink: "#111111", muted: "#666666", panel: "#101010", paper: "#f7f7f7", metal: "#a8a8a8" },
  { id: "polar", bg: "#f4f7f8", ink: "#111111", muted: "#60717b", panel: "#0d171b", paper: "#ffffff", metal: "#b7c2c7" },
  { id: "night", bg: "#191b1d", ink: "#f4f4f4", muted: "#a7a7a7", panel: "#080808", paper: "#25282c", metal: "#777d83" },
  { id: "editorial", bg: "#ffffff", ink: "#101010", muted: "#777777", panel: "#121212", paper: "#f5f5f5", metal: "#c9c9c9" },
  { id: "greenroom", bg: "#e8efea", ink: "#111111", muted: "#597064", panel: "#0c1712", paper: "#f8fbf9", metal: "#9fb0a8" },
  { id: "blueprint", bg: "#dfe9f3", ink: "#0b1720", muted: "#53697a", panel: "#0a1720", paper: "#f7fbff", metal: "#95aabd" }
];

const accents = ["#e1261c", "#00a651", "#0057a8", "#f7b733", "#111111", "#ffffff", "#ff5a5f", "#7bdff2"];

const presets = {
  lesson: {
    kicker: "AI START · 19 МАЯ",
    title: "ВИЗУАЛ БЕЗ ВРАНЬЯ",
    subtitle: "материал → карточки → brief → gate",
    name: "TV-21 / Северный город",
    layout: "left",
    metaphor: "industrial"
  },
  quote: {
    kicker: "EDITORIAL RULE",
    title: "AI ДАЕТ ВАРИАНТЫ. ЧЕЛОВЕК ДЕРЖИТ СМЫСЛ.",
    subtitle: "quote card · проверяемый слой текста",
    name: "AI Start Nornikel",
    layout: "poster",
    metaphor: "archive"
  },
  pipeline: {
    kicker: "PIPELINE 03",
    title: "МАТЕРИАЛ → ВИЗУАЛЬНЫЙ БРИФ",
    subtitle: "смысл · структура · шаблон · quality gate",
    name: "Visual workflow",
    layout: "split",
    metaphor: "routes"
  },
  ira: {
    kicker: "IRA & AI",
    title: "НОРНИКЕЛЬ: КОНТЕНТ-СИСТЕМА",
    subtitle: "строго, понятно, в редакционном стиле",
    name: "IraAI adaptation",
    layout: "center",
    metaphor: "signals"
  }
};

const state = {
  format: "story",
  layout: "left",
  theme: "steel",
  accent: "#e1261c",
  font: "condensed",
  metaphor: "industrial",
  grid: true,
  corners: true,
  scanner: false,
  vignette: true,
  seed: 12
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function random(index) {
  const x = Math.sin(state.seed * 999 + index * 77) * 10000;
  return x - Math.floor(x);
}

function theme() {
  return themes.find((item) => item.id === state.theme) || themes[0];
}

function fontFamily() {
  if (state.font === "mono") return "JetBrains Mono, monospace";
  if (state.font === "sans") return "Inter, Arial, sans-serif";
  return "Inter Tight, Inter, Arial, sans-serif";
}

function titleWeight() {
  return state.font === "mono" ? 800 : 900;
}

function fieldValue(id) {
  return $(id).value.trim();
}

function wrapText(text, maxChars) {
  const sourceLines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const lines = [];

  sourceLines.forEach((source) => {
    const words = source.split(/\s+/);
    let line = "";

    words.forEach((word) => {
      const next = line ? `${line} ${word}` : word;
      if (next.length > maxChars && line) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    });

    if (line) lines.push(line);
  });

  return lines.slice(0, 5);
}

function approxTextWidth(text, size) {
  const narrow = text.replace(/[ilI1|.,:;]/g, "").length;
  const wide = text.length - narrow;
  return Math.round(narrow * size * 0.57 + wide * size * 0.32);
}

function renderTextBlock(lines, x, y, options) {
  const anchor = options.anchor || "start";
  const size = options.size;
  const lineGap = options.lineGap || Math.round(size * 1.18);
  const color = options.color;
  const accent = options.accent;
  const shadow = options.shadow ? `<filter id="titleShadow" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="10" dy="10" stdDeviation="0" flood-color="#000000" flood-opacity="0.32"/></filter>` : "";
  const textX = anchor === "middle" ? x : anchor === "end" ? x : x + 18;
  const rects = [];
  const tspans = [];

  lines.forEach((line, index) => {
    const width = Math.min(options.maxWidth, approxTextWidth(line, size) + 38);
    const height = size * 1.05;
    const rectX = anchor === "middle" ? x - width / 2 : anchor === "end" ? x - width : x;
    const rectY = y + index * lineGap - size * 0.78;
    rects.push(`<rect x="${rectX}" y="${rectY}" width="${width}" height="${height}" fill="${accent}" filter="${options.shadow ? "url(#titleShadow)" : ""}"/>`);
    tspans.push(`<tspan x="${textX}" y="${y + index * lineGap}">${escapeXml(line)}</tspan>`);
  });

  return `
    ${shadow}
    <g>
      ${rects.join("")}
      <text fill="${color}" font-family="${fontFamily()}" font-size="${size}" font-weight="${titleWeight()}" text-anchor="${anchor}" dominant-baseline="alphabetic">
        ${tspans.join("")}
      </text>
    </g>
  `;
}

function renderGrid(w, h, colors) {
  if (!state.grid) return "";
  return `
    <defs>
      <pattern id="smallGrid" width="34" height="34" patternUnits="userSpaceOnUse">
        <path d="M 34 0 L 0 0 0 34" fill="none" stroke="${colors.ink}" stroke-opacity="0.12" stroke-width="1"/>
      </pattern>
      <pattern id="denseGrid" width="12" height="12" patternUnits="userSpaceOnUse">
        <path d="M 12 0 L 0 0 0 12" fill="none" stroke="${colors.ink}" stroke-opacity="0.11" stroke-width="1"/>
      </pattern>
    </defs>
    <rect x="${w * 0.49}" y="${h * 0.22}" width="${w * 0.28}" height="${h * 0.48}" fill="url(#smallGrid)" opacity="0.95"/>
  `;
}

function renderCorners(w, h, colors) {
  if (!state.corners) return "";
  const p = Math.min(w, h) * 0.04;
  const l = Math.min(w, h) * 0.055;
  const s = `stroke="${colors.ink}" stroke-opacity="0.34" stroke-width="3" fill="none"`;
  return `
    <path d="M ${p + l} ${p} H ${p} V ${p + l}" ${s}/>
    <path d="M ${w - p - l} ${p} H ${w - p} V ${p + l}" ${s}/>
    <path d="M ${p + l} ${h - p} H ${p} V ${h - p - l}" ${s}/>
    <path d="M ${w - p - l} ${h - p} H ${w - p} V ${h - p - l}" ${s}/>
  `;
}

function renderNamePlate(w, h, colors) {
  const horizontal = w > h * 1.2;
  const plateW = horizontal ? w * 0.22 : w * 0.36;
  const plateH = horizontal ? h * 0.18 : h * 0.11;
  const x = w - plateW - w * 0.06;
  const y = h * 0.08;
  const circle = Math.min(plateH * 0.78, plateW * 0.34);
  return `
    <g>
      <rect x="${x}" y="${y}" width="${plateW}" height="${plateH}" rx="10" fill="${colors.panel}" opacity="0.98"/>
      <rect x="${x + plateW - 6}" y="${y}" width="6" height="${plateH}" fill="${state.accent}"/>
      <rect x="${x + 28}" y="${y + plateH * 0.31}" width="${plateW * 0.34}" height="${plateH * 0.24}" fill="${colors.paper}" transform="rotate(-2 ${x + 28} ${y + plateH * 0.31})"/>
      <text x="${x + 42}" y="${y + plateH * 0.49}" fill="${colors.ink === "#f4f4f4" ? "#111" : "#111"}" font-family="${fontFamily()}" font-size="${plateH * 0.18}" font-weight="900">${escapeXml(fieldValue("#input-name").slice(0, 18).toUpperCase())}</text>
      <text x="${x + 42}" y="${y + plateH * 0.73}" fill="#e5e5e5" font-family="JetBrains Mono, monospace" font-size="${plateH * 0.16}" letter-spacing="0">AI START</text>
      <circle cx="${x + plateW * 0.78}" cy="${y + plateH * 0.5}" r="${circle}" fill="${state.accent}" opacity="0.88" stroke="${colors.paper}" stroke-opacity="0.2" stroke-width="3"/>
    </g>
  `;
}

function renderIndustrial(w, h, colors) {
  const cx = w * 0.56;
  const cy = h * 0.48;
  const scale = Math.min(w, h) / 1080;
  return `
    <g opacity="0.98">
      <rect x="${cx - 170 * scale}" y="${cy - 260 * scale}" width="${290 * scale}" height="${420 * scale}" fill="${colors.paper}" opacity="0.92"/>
      <rect x="${cx - 245 * scale}" y="${cy - 210 * scale}" width="${260 * scale}" height="${330 * scale}" fill="url(#smallGrid)" opacity="0.8"/>
      <rect x="${cx + 80 * scale}" y="${cy - 220 * scale}" width="${230 * scale}" height="${360 * scale}" fill="url(#smallGrid)" opacity="0.8"/>
      <rect x="${cx - 65 * scale}" y="${cy - 110 * scale}" width="${290 * scale}" height="${150 * scale}" fill="${colors.metal}" opacity="0.9"/>
      <rect x="${cx + 110 * scale}" y="${cy - 40 * scale}" width="${155 * scale}" height="${360 * scale}" fill="${colors.metal}" opacity="0.72"/>
      <rect x="${cx - 40 * scale}" y="${cy - 350 * scale}" width="${90 * scale}" height="${280 * scale}" fill="${colors.paper}" opacity="0.75"/>
      <rect x="${cx - 150 * scale}" y="${cy - 315 * scale}" width="${18 * scale}" height="${420 * scale}" fill="${state.accent}" opacity="0.8"/>
      <rect x="${cx + 250 * scale}" y="${cy + 70 * scale}" width="${54 * scale}" height="${14 * scale}" fill="${state.accent}"/>
      <path d="M ${cx - 110 * scale} ${cy + 130 * scale} L ${cx + 185 * scale} ${cy + 130 * scale}" stroke="${state.accent}" stroke-width="${10 * scale}" stroke-opacity="0.55" stroke-dasharray="${12 * scale} ${8 * scale}"/>
      <path d="M ${cx + 278 * scale} ${cy - 85 * scale} C ${cx + 310 * scale} ${cy + 40 * scale}, ${cx + 300 * scale} ${cy + 155 * scale}, ${cx + 270 * scale} ${cy + 238 * scale}" stroke="#0057a8" stroke-width="${12 * scale}" fill="none" opacity="0.9"/>
    </g>
  `;
}

function renderSignals(w, h, colors) {
  const cx = w * 0.7;
  const cy = h * 0.5;
  const r = Math.min(w, h) * 0.2;
  const dots = Array.from({ length: 36 }).map((_, index) => {
    const angle = random(index) * Math.PI * 2;
    const distance = r * (0.2 + random(index + 100) * 1.25);
    const x = cx + Math.cos(angle) * distance;
    const y = cy + Math.sin(angle) * distance;
    const size = 5 + random(index + 200) * 16;
    return `<circle cx="${x}" cy="${y}" r="${size}" fill="${colors.ink}" opacity="${0.18 + random(index + 300) * 0.25}"/>`;
  }).join("");
  return `
    <g>
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${state.accent}" stroke-width="3" opacity="0.46"/>
      <circle cx="${cx}" cy="${cy}" r="${r * 0.62}" fill="none" stroke="${state.accent}" stroke-width="3" opacity="0.58"/>
      <circle cx="${cx}" cy="${cy}" r="${r * 0.25}" fill="${state.accent}" opacity="0.65"/>
      <circle cx="${cx}" cy="${cy}" r="${r * 0.08}" fill="${colors.paper}"/>
      <path d="M ${cx} ${cy} L ${cx + r * 0.88} ${cy - r * 0.36}" stroke="${state.accent}" stroke-width="2" opacity="0.55"/>
      ${dots}
    </g>
  `;
}

function renderRoutes(w, h, colors) {
  const startX = w * 0.42;
  const startY = h * 0.28;
  const stepX = w * 0.13;
  const stepY = h * 0.11;
  const nodes = ["facts", "draft", "cards", "gate", "publish"];
  return `
    <g font-family="JetBrains Mono, monospace" font-size="${Math.min(w, h) * 0.026}" font-weight="800">
      ${nodes.map((node, index) => {
        const x = startX + (index % 3) * stepX;
        const y = startY + Math.floor(index / 3) * stepY + index * 12;
        const nextX = startX + ((index + 1) % 3) * stepX;
        const nextY = startY + Math.floor((index + 1) / 3) * stepY + (index + 1) * 12;
        const line = index < nodes.length - 1 ? `<path d="M ${x + 80} ${y + 28} L ${nextX} ${nextY + 28}" stroke="${state.accent}" stroke-width="6" stroke-linecap="square" opacity="0.76"/>` : "";
        return `${line}<rect x="${x}" y="${y}" width="150" height="58" fill="${colors.panel}" rx="6"/><text x="${x + 18}" y="${y + 38}" fill="${colors.paper}">${node}</text>`;
      }).join("")}
      <rect x="${startX - 46}" y="${startY - 44}" width="${w * 0.45}" height="${h * 0.36}" fill="none" stroke="${colors.ink}" stroke-opacity="0.18" stroke-dasharray="12 12"/>
    </g>
  `;
}

function renderArchive(w, h, colors) {
  const x = w * 0.54;
  const y = h * 0.28;
  const cardW = Math.min(w * 0.34, 420);
  const cardH = Math.min(h * 0.16, 210);
  return `
    <g>
      ${[0, 1, 2, 3].map((index) => {
        const dx = index * -34;
        const dy = index * 52;
        const rotate = -5 + index * 3;
        return `
          <g transform="rotate(${rotate} ${x + dx} ${y + dy})">
            <rect x="${x + dx}" y="${y + dy}" width="${cardW}" height="${cardH}" fill="${index % 2 ? colors.panel : colors.paper}" stroke="${colors.ink}" stroke-opacity="0.18"/>
            <rect x="${x + dx + 22}" y="${y + dy + 28}" width="${cardW * 0.28}" height="22" fill="${state.accent}"/>
            <rect x="${x + dx + 22}" y="${y + dy + 72}" width="${cardW * 0.72}" height="10" fill="${index % 2 ? colors.paper : colors.ink}" opacity="0.34"/>
            <rect x="${x + dx + 22}" y="${y + dy + 98}" width="${cardW * 0.52}" height="10" fill="${index % 2 ? colors.paper : colors.ink}" opacity="0.22"/>
          </g>
        `;
      }).join("")}
    </g>
  `;
}

function renderMetaphor(w, h, colors) {
  if (state.metaphor === "signals") return renderSignals(w, h, colors);
  if (state.metaphor === "routes") return renderRoutes(w, h, colors);
  if (state.metaphor === "archive") return renderArchive(w, h, colors);
  return renderIndustrial(w, h, colors);
}

function layoutConfig(w, h) {
  const horizontal = w > h * 1.2;
  const base = Math.min(w, h);
  const titleSize = horizontal ? Math.round(base * 0.09) : Math.round(base * 0.085);
  const maxWidth = state.layout === "minimal" ? w * 0.52 : w * 0.64;
  const common = {
    titleSize: Math.max(42, Math.min(titleSize, 118)),
    kickerSize: Math.max(18, Math.round(base * 0.026)),
    subtitleSize: Math.max(18, Math.round(base * 0.025)),
    maxWidth
  };

  if (state.layout === "center") return { ...common, x: w * 0.5, y: h * 0.68, anchor: "middle", chars: horizontal ? 18 : 13 };
  if (state.layout === "right") return { ...common, x: w * 0.9, y: h * 0.68, anchor: "end", chars: horizontal ? 18 : 13 };
  if (state.layout === "split") return { ...common, x: w * 0.08, y: h * 0.66, anchor: "start", chars: horizontal ? 13 : 12, maxWidth: w * 0.48 };
  if (state.layout === "minimal") return { ...common, x: w * 0.09, y: h * 0.52, anchor: "start", chars: horizontal ? 20 : 16, titleSize: Math.max(38, common.titleSize * 0.72) };
  if (state.layout === "poster") return { ...common, x: w * 0.08, y: h * 0.58, anchor: "start", chars: horizontal ? 16 : 10, titleSize: Math.min(common.titleSize * 1.14, 132) };
  return { ...common, x: w * 0.08, y: h * 0.68, anchor: "start", chars: horizontal ? 16 : 11 };
}

function renderScanner(w, h) {
  if (!state.scanner) return "";
  return `
    <g opacity="0.18">
      ${Array.from({ length: Math.ceil(h / 18) }).map((_, index) => (
        `<line x1="0" y1="${index * 18}" x2="${w}" y2="${index * 18}" stroke="#000" stroke-width="1"/>`
      )).join("")}
    </g>
  `;
}

function renderNoise() {
  return `
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.76" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer>
        <feFuncA type="table" tableValues="0 0.13"/>
      </feComponentTransfer>
    </filter>
  `;
}

function renderVignette(w, h) {
  if (!state.vignette) return "";
  return `
    <defs>
      <radialGradient id="vignette" cx="50%" cy="52%" r="75%">
        <stop offset="48%" stop-color="#000000" stop-opacity="0"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.34"/>
      </radialGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#vignette)"/>
  `;
}

function renderSvg() {
  const format = formats[state.format];
  const colors = theme();
  const layout = layoutConfig(format.w, format.h);
  const title = fieldValue("#input-title") || "AI START";
  const titleLines = wrapText(title.toUpperCase(), layout.chars);
  const lineGap = Math.round(layout.titleSize * 1.18);
  const kickerY = layout.y - layout.titleSize * 1.15;
  const subtitleY = layout.y + titleLines.length * lineGap + layout.subtitleSize * 0.6;
  const subtitleX = layout.anchor === "start" ? layout.x + 4 : layout.x;
  const metaY = Math.max(format.h * 0.08, kickerY - layout.kickerSize * 2.2);
  const topRule = state.layout === "minimal" ? "" : `<rect x="${format.w * 0.08}" y="${metaY}" width="${format.w * 0.26}" height="8" fill="${state.accent}"/>`;

  $("#visual-canvas").setAttribute("viewBox", `0 0 ${format.w} ${format.h}`);
  $("#canvas-size").textContent = `${format.w} × ${format.h}`;
  $(".stage-scale").style.aspectRatio = format.ratio;

  $("#visual-canvas").innerHTML = `
    <defs>
      ${renderNoise()}
      <linearGradient id="metalGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="${colors.bg}"/>
        <stop offset="0.52" stop-color="${colors.paper}"/>
        <stop offset="1" stop-color="${colors.metal}"/>
      </linearGradient>
    </defs>
    <rect width="${format.w}" height="${format.h}" fill="url(#metalGradient)"/>
    ${renderGrid(format.w, format.h, colors)}
    ${renderMetaphor(format.w, format.h, colors)}
    ${topRule}
    <text x="${layout.x}" y="${kickerY}" fill="${state.accent}" font-family="JetBrains Mono, monospace" font-size="${layout.kickerSize}" font-weight="800" text-anchor="${layout.anchor}" letter-spacing="0">${escapeXml(fieldValue("#input-kicker").toUpperCase())}</text>
    ${renderTextBlock(titleLines, layout.x, layout.y, {
      anchor: layout.anchor,
      size: layout.titleSize,
      lineGap,
      color: "#ffffff",
      accent: state.accent,
      maxWidth: layout.maxWidth,
      shadow: true
    })}
    <text x="${subtitleX}" y="${subtitleY}" fill="${colors.ink}" font-family="JetBrains Mono, monospace" font-size="${layout.subtitleSize}" font-weight="700" text-anchor="${layout.anchor}" opacity="0.78">${escapeXml(fieldValue("#input-subtitle"))}</text>
    ${renderNamePlate(format.w, format.h, colors)}
    <g transform="translate(${format.w * 0.86} ${format.h * 0.87})">
      <circle cx="0" cy="0" r="${Math.min(format.w, format.h) * 0.035}" fill="${colors.paper}" opacity="0.92"/>
      <path d="M 0 ${-Math.min(format.w, format.h) * 0.05} V ${Math.min(format.w, format.h) * 0.055}" stroke="${colors.panel}" stroke-width="${Math.min(format.w, format.h) * 0.01}" stroke-linecap="square"/>
      <circle cx="${-Math.min(format.w, format.h) * 0.018}" cy="0" r="${Math.min(format.w, format.h) * 0.008}" fill="${colors.panel}"/>
      <path d="M ${Math.min(format.w, format.h) * 0.012} ${-Math.min(format.w, format.h) * 0.018} Q ${Math.min(format.w, format.h) * 0.034} 0 ${Math.min(format.w, format.h) * 0.012} ${Math.min(format.w, format.h) * 0.02}" stroke="${colors.panel}" stroke-width="${Math.min(format.w, format.h) * 0.006}" fill="none"/>
    </g>
    ${renderCorners(format.w, format.h, colors)}
    ${renderScanner(format.w, format.h)}
    ${renderVignette(format.w, format.h)}
    <rect width="${format.w}" height="${format.h}" filter="url(#noiseFilter)" opacity="0.55"/>
  `;

  renderPrompt();
}

function renderPrompt() {
  const colors = theme();
  const prompt = [
    "Create an editorial industrial background asset for AI Start Nornikel.",
    `Mood: ${state.theme}, ${state.metaphor}, strict newsroom training system, metallic surfaces, paper texture, modular grid.`,
    `Palette: ${colors.bg}, ${colors.ink}, accent ${state.accent}.`,
    "No readable text, no invented logos, no fake numbers, no people unless explicitly requested.",
    "Leave clean negative space for editable typography and brand-safe layout."
  ].join(" ");
  $("#prompt-output").value = prompt;
}

function setActiveButton(selector, value, attr) {
  $$(selector).forEach((button) => {
    button.classList.toggle("is-active", button.dataset[attr] === value);
  });
}

function setPreset(id) {
  const preset = presets[id];
  if (!preset) return;
  $("#input-kicker").value = preset.kicker;
  $("#input-title").value = preset.title;
  $("#input-subtitle").value = preset.subtitle;
  $("#input-name").value = preset.name;
  state.layout = preset.layout;
  state.metaphor = preset.metaphor;
  $("#metaphor-select").value = preset.metaphor;
  setActiveButton("[data-layout]", state.layout, "layout");
  renderSvg();
}

function renderSwatches() {
  $("#theme-row").innerHTML = themes.map((item) => (
    `<button type="button" class="swatch ${item.id === state.theme ? "is-active" : ""}" data-theme="${item.id}" title="${item.id}" style="background: linear-gradient(135deg, ${item.bg} 0 48%, ${item.panel} 48% 72%, ${item.paper} 72% 100%)"></button>`
  )).join("");
  $("#accent-row").innerHTML = accents.map((color) => (
    `<button type="button" class="swatch ${color === state.accent ? "is-active" : ""}" data-accent="${color}" title="${color}" style="background:${color}"></button>`
  )).join("");
}

function serializedSvg() {
  const svg = $("#visual-canvas").cloneNode(true);
  const format = formats[state.format];
  svg.setAttribute("width", format.w);
  svg.setAttribute("height", format.h);
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return new XMLSerializer().serializeToString(svg);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportSvg() {
  const blob = new Blob([serializedSvg()], { type: "image/svg+xml;charset=utf-8" });
  downloadBlob(blob, `nornikel-visual-${state.format}.svg`);
}

function exportPng() {
  const format = formats[state.format];
  const image = new Image();
  const svgText = serializedSvg();
  const url = URL.createObjectURL(new Blob([svgText], { type: "image/svg+xml;charset=utf-8" }));

  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = format.w;
    canvas.height = format.h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0, format.w, format.h);
    URL.revokeObjectURL(url);
    canvas.toBlob((blob) => {
      if (!blob) return;
      downloadBlob(blob, `nornikel-visual-${state.format}.png`);
    }, "image/png");
  };

  image.src = url;
}

function bindEvents() {
  $("[data-format].is-active");
  $$(".segmented [data-format]").forEach((button) => {
    button.addEventListener("click", () => {
      state.format = button.dataset.format;
      setActiveButton("[data-format]", state.format, "format");
      renderSvg();
    });
  });

  $$("[data-layout]").forEach((button) => {
    button.addEventListener("click", () => {
      state.layout = button.dataset.layout;
      setActiveButton("[data-layout]", state.layout, "layout");
      renderSvg();
    });
  });

  $$("[data-font]").forEach((button) => {
    button.addEventListener("click", () => {
      state.font = button.dataset.font;
      setActiveButton("[data-font]", state.font, "font");
      renderSvg();
    });
  });

  $("#theme-row").addEventListener("click", (event) => {
    const button = event.target.closest("[data-theme]");
    if (!button) return;
    state.theme = button.dataset.theme;
    renderSwatches();
    renderSvg();
  });

  $("#accent-row").addEventListener("click", (event) => {
    const button = event.target.closest("[data-accent]");
    if (!button) return;
    state.accent = button.dataset.accent;
    renderSwatches();
    renderSvg();
  });

  $("#toggle-grid").addEventListener("change", (event) => {
    state.grid = event.target.checked;
    renderSvg();
  });
  $("#toggle-corners").addEventListener("change", (event) => {
    state.corners = event.target.checked;
    renderSvg();
  });
  $("#toggle-scanner").addEventListener("change", (event) => {
    state.scanner = event.target.checked;
    renderSvg();
  });
  $("#toggle-vignette").addEventListener("change", (event) => {
    state.vignette = event.target.checked;
    renderSvg();
  });

  ["#input-kicker", "#input-title", "#input-subtitle", "#input-name"].forEach((selector) => {
    $(selector).addEventListener("input", renderSvg);
  });

  $("#metaphor-select").addEventListener("change", (event) => {
    state.metaphor = event.target.value;
    renderSvg();
  });

  $("#shuffle-button").addEventListener("click", () => {
    state.seed += 1;
    renderSvg();
  });

  $("#reset-button").addEventListener("click", () => {
    Object.assign(state, {
      format: "story",
      layout: "left",
      theme: "steel",
      accent: "#e1261c",
      font: "condensed",
      metaphor: "industrial",
      grid: true,
      corners: true,
      scanner: false,
      vignette: true,
      seed: 12
    });
    $("#toggle-grid").checked = true;
    $("#toggle-corners").checked = true;
    $("#toggle-scanner").checked = false;
    $("#toggle-vignette").checked = true;
    $("#metaphor-select").value = "industrial";
    setPreset("lesson");
    setActiveButton("[data-format]", state.format, "format");
    setActiveButton("[data-font]", state.font, "font");
    renderSwatches();
    renderSvg();
  });

  $$(".preset-button").forEach((button) => {
    button.addEventListener("click", () => setPreset(button.dataset.preset));
  });

  $("#copy-prompt").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("#prompt-output").value);
    $("#copy-prompt").textContent = "copied";
    setTimeout(() => {
      $("#copy-prompt").textContent = "copy prompt";
    }, 900);
  });

  $("#export-svg").addEventListener("click", exportSvg);
  $("#export-png").addEventListener("click", exportPng);
}

renderSwatches();
bindEvents();
renderSvg();

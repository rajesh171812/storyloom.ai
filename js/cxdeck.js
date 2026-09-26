/* Storyloom AI Presentation — template deck generator (v0.2).
   Builds lorem-ipsum template decks for each presentation type with pptxgenjs.
   Runs in Node (require) and in the browser (window.CXDeck). Storyloom Design System tokens only. */
(function (root) {
  "use strict";

  const C = {
    bg: "F4F4F2", surface: "FFFFFF", sunken: "ECECEA", text: "222731", text2: "63666A",
    petrol: "2E4AED", tileBg: "EEF0FE", petrolDark: "1628A3", onPetrol: "D6DBFC", citron: "D6DBFC", border: "D9D9D6", inverse: "000075", onInverse: "D6DBFC",
    okFg: "007A2C", okBg: "E5F7EC", warnFg: "A84600", warnBg: "FFF0E5", errFg: "B00021", errBg: "FDE6EA", infoFg: "1628A3", infoBg: "EEF0FE",
    dv: ["2E4AED", "000075", "E56A54", "AA0061", "00B140", "97A3F5"],
    dvText: ["2E4AED", "000075", "B0412D", "AA0061", "007A2C", "1628A3"], /* text-safe (4.5:1+) versions of dv for labels and numbers */
  };
  /* Key names kept for continuity: petrol = Royal blue (action, emphasis), citron = Pale lavender (the one highlight), inverse = Deep navy (title and section grounds). */
  const F = { disp: "Bricolage Grotesque", body: "Hanken Grotesk", mono: "IBM Plex Mono" };
  const T = { h1: 30, display: 42, h4: 15, body: 13.5, label: 10.5, code: 10 };
  const W = 13.333, M = 0.5;

  /* ---------- lorem ---------- */
  const LW = ("lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum curabitur pretium tincidunt lacus nulla gravida orci a odio nullam varius turpis et commodo pharetra est eros bibendum elit nec luctus magna felis sollicitudin mauris integer in mauris eu nibh euismod gravida").split(" ");
  function lorem(n, seed = 0, end = ".") {
    const w = []; for (let i = 0; i < n; i++) w.push(LW[(seed * 7 + i) % LW.length]);
    const s = w.join(" "); return s.charAt(0).toUpperCase() + s.slice(1) + end;
  }
  const words = (n, seed) => lorem(n, seed, "");

  /* ---------- deck definitions ---------- */
  const EXP_BASE = (mode, resultsR, resultsIds) => [
    ["execSummary", "SLD-EXEC-SUMMARY-01", "Experiment overview"],
    ["insight", "SLD-INSIGHT-01", "Problem / opportunity"],
    ["statement", "SLD-STATEMENT-01", "Hypothesis", { hypothesis: true }],
    ["process", "SLD-PROCESS-01", "Experiment design"],
    ["variants", "SLD-VARIANTS-01", "Variants / experience"],
    [resultsR, "SLD-KPI-TREND-01", "Results · " + mode, { ids: resultsIds }],
    ["threeCol", "SLD-3COL-01", "What we learned", { label: "LEARNING", icons: ["lightbulb", "flask", "target"] }],
    ["twoCol", "SLD-2COL-01", "Implications"],
    ["nextSteps", "SLD-NEXT-STEPS-01", "Next steps"],
  ];
  const DECKS = [
    { key: "performance", type: "TPL-PERFORMANCE-01", story: "STORY-PERF-01", name: "Performance Readout", file: "Template_Performance_Readout_v1.pptx",
      slides: [
        ["execSummary", "SLD-EXEC-SUMMARY-01", "Executive summary"],
        ["kpiGrid", "SLD-KPI-GRID-01", "Performance at a glance"],
        ["kpiTrend", "SLD-KPI-TREND-01", "KPI / metric overview"],
        ["chartFocus", "SLD-CHART-FOCUS-01", "Trend over time"],
        ["threeCol", "SLD-3COL-01", "Key drivers", { label: "DRIVER", icons: ["trendUp", "users", "clock"] }],
        ["matrix", "SLD-MATRIX-01", "Areas of opportunity"],
        ["recommend", "SLD-RECOMMEND-01", "Recommendations / next steps"],
      ] },
    { key: "experiment-ab", type: "TPL-EXPERIMENT-01", story: "STORY-EXP-01", name: "Experiment Readout", mode: "Quantitative / A-B", modeIds: "VIZ-VARIANTS-01, VIZ-KPI-01, VIZ-BAR-01", file: "Template_Experiment_Readout_AB_v1.pptx",
      slides: EXP_BASE("Quantitative A/B", "resultsAB", "VIZ-VARIANTS-01 · VIZ-KPI-01 · VIZ-BAR-01") },
    { key: "experiment-behavioral", type: "TPL-EXPERIMENT-01", story: "STORY-EXP-01", name: "Experiment Readout", mode: "Behavioral", modeIds: "VIZ-FUNNEL-01, VIZ-TREND-01", file: "Template_Experiment_Readout_Behavioral_v1.pptx",
      slides: EXP_BASE("Behavioral", "resultsBehavioral", "VIZ-FUNNEL-01 · VIZ-TREND-01") },
    { key: "experiment-qualitative", type: "TPL-EXPERIMENT-01", story: "STORY-EXP-01", name: "Experiment Readout", mode: "Qualitative / feedback", modeIds: "CMP-QUOTE-01, VIZ-CLUSTER-01", file: "Template_Experiment_Readout_Qualitative_v1.pptx",
      slides: EXP_BASE("Qualitative", "resultsQual", "CMP-QUOTE-01 · VIZ-CLUSTER-01") },
    { key: "experiment-mixed", type: "TPL-EXPERIMENT-01", story: "STORY-EXP-01", name: "Experiment Readout", mode: "Mixed", modeIds: "SLD-2COL-01: metric left, quote right", file: "Template_Experiment_Readout_Mixed_v1.pptx",
      slides: EXP_BASE("Mixed", "resultsMixed", "SLD-2COL-01 · metric left, quote right") },
    { key: "campaign", type: "TPL-CAMPAIGN-01", story: "STORY-CONCEPT-01", name: "Campaign / Concept", file: "Template_Campaign_Concept_v1.pptx",
      slides: [
        ["statement", "SLD-STATEMENT-01", "Context"],
        ["insight", "SLD-INSIGHT-01", "Opportunity"],
        ["persona", "SLD-PERSONA-01", "Audience / customer"],
        ["quote", "SLD-QUOTE-01", "Insight"],
        ["deviceHero", "SLD-DEVICE-HERO-01", "Concept"],
        ["journeyFuture", "SLD-JOURNEY-01", "Experience / journey"],
        ["messaging", "SLD-MESSAGING-01", "Key touchpoints"],
        ["deviceTrio", "SLD-DEVICE-TRIO-01", "Creative direction"],
        ["twoCol", "SLD-2COL-01", "Supporting evidence"],
        ["kpiGrid", "SLD-KPI-GRID-01", "Expected impact", { projected: true }],
        ["nextSteps", "SLD-NEXT-STEPS-01", "Next steps"],
      ] },
    { key: "journey", type: "TPL-JOURNEY-01", story: "STORY-JOURNEY-01", name: "Journey Presentation", file: "Template_Journey_Presentation_v1.pptx",
      slides: [
        ["execSummary", "SLD-EXEC-SUMMARY-01", "Journey overview"],
        ["persona", "SLD-PERSONA-01", "Customer / audience"],
        ["journeyStages", "SLD-JOURNEY-01", "Journey stages"],
        ["journeyCurrent", "SLD-JOURNEY-01", "Current-state experience"],
        ["threeCol", "SLD-3COL-01", "Pain points / friction", { label: "PAIN POINT", icons: ["alert", "clock", "users"] }],
        ["quote", "SLD-QUOTE-01", "Needs / insights"],
        ["threeCol", "SLD-3COL-01", "Opportunities", { label: "OPPORTUNITY", icons: ["lightbulb", "target", "compass"] }],
        ["journeyFuture", "SLD-JOURNEY-01", "Future-state journey"],
        ["threeCol", "SLD-3COL-01", "Experience principles", { label: "PRINCIPLE", icons: ["heart", "shield", "check"] }],
        ["matrix", "SLD-MATRIX-01", "Priority opportunities"],
        ["nextSteps", "SLD-NEXT-STEPS-01", "Next steps"],
      ] },
  ];

  const FRAMES = {
    "IPHONE-01": { file: "A-DEV-IPHONE-01_iphone-15-pro_portrait_transparent.png", px: [664, 1328], area: [4.97, 2.18, 90.21, 95.63] },
    "IPAD-01": { file: "A-DEV-IPAD-01_ipad-pro_portrait_transparent.png", px: [1803, 2353], area: [4.22, 3.27, 91.51, 93.54] },
    "LAPTOP-01": { file: "A-DEV-LAPTOP-01_macbook-air_front_transparent.png", px: [2016, 1136], area: [12.3, 5.81, 75.5, 84.15] },
  };
  const ICON_NAMES = ["alert", "users", "chart", "target", "clock", "message", "check", "trendUp", "trendDown", "flask", "lightbulb", "map", "flag", "layers", "shield", "lock", "phone", "user", "compass", "heart"];
  const ICON_COLORS = ["FFFFFF", "2E4AED", "007A2C"];

  /* ---------- builder ---------- */
  function build(PptxGen, key, A) {
    const deck = DECKS.find(d => d.key === key);
    if (!deck) throw new Error("Unknown deck " + key);
    const pres = new PptxGen();
    pres.layout = "LAYOUT_WIDE";
    pres.title = `${deck.name}${deck.mode ? " · " + deck.mode : ""} — template`;
    pres.author = "Storyloom AI";
    const S = pres.shapes;
    const total = deck.slides.length + 2;
    const typeLabel = deck.name + (deck.mode ? " · " + deck.mode : "");

    const tx = (s, text, o) => s.addText(text, Object.assign({ isTextBox: true, margin: 0, fontFace: F.body, color: C.text, fontSize: T.body, valign: "top" }, o));
    const rr = (s, x, y, w, h, fill, line, r = 0.12, lw = 0.75) => s.addShape(S.ROUNDED_RECTANGLE, { x, y, w, h, fill: { color: fill }, line: { color: line || fill, width: lw }, rectRadius: r });
    const card = (s, x, y, w, h, fill = C.surface) => rr(s, x, y, w, h, fill, fill === C.surface ? C.border : fill);
    const oval = (s, x, y, d, fill) => s.addShape(S.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill } });
    const icon = (s, name, color, x, y, d) => { const data = A.icon(name, color); if (data) s.addImage({ data, x, y, w: d, h: d }); };
    const iconCircle = (s, name, x, y, d, fill = C.petrol) => { oval(s, x, y, d, fill); icon(s, name, "FFFFFF", x + d * 0.24, y + d * 0.24, d * 0.52); };
    /* Rounded icon variant (ICN-*-RD): 40px tile, radius-lg, selected-bg fill, petrol icon. Default on slides. */
    const tile = (s, name, x, y, d) => { rr(s, x, y, d, d, C.tileBg, C.tileBg, d * 0.3); icon(s, name, C.petrol, x + d * 0.2, y + d * 0.2, d * 0.6); };
    const num = (s, n, x, y, d, fill = C.petrol) => { oval(s, x, y, d, fill); tx(s, String(n), { x, y, w: d, h: d, fontSize: T.label, bold: true, color: "FFFFFF", align: "center", valign: "middle" }); };
    const pill = (s, text, x, y, w, fill, color, h = 0.34) => { rr(s, x, y, w, h, fill, fill, 0.08); tx(s, text, { x, y, w, h, fontSize: T.label, bold: true, color, align: "center", valign: "middle" }); };

    function header(s, kicker, title) {
      tx(s, kicker.toUpperCase(), { x: M, y: 0.42, w: 9.8, h: 0.3, fontSize: T.label, bold: true, color: C.petrol, charSpacing: 1 });
      tx(s, title, { x: M, y: 0.74, w: 12.33, h: 0.95, fontFace: F.disp, fontSize: T.h1, bold: true, lineSpacingMultiple: 0.95 });
    }
    function footer(s, n, id) {
      tx(s, `[Project name] · ${typeLabel}`, { x: M, y: 7.0, w: 4.8, h: 0.28, fontSize: T.label, color: C.text2 });
      tx(s, id, { x: 5.4, y: 7.0, w: 6.5, h: 0.28, fontFace: F.mono, fontSize: T.code, color: C.text2, align: "right" });
      tx(s, String(n).padStart(2, "0") + " / " + total, { x: 12.13, y: 7.0, w: 0.7, h: 0.28, fontSize: T.label, color: C.text2, align: "right" });
    }
    function base(n, kicker, id, title) { const s = pres.addSlide(); s.background = { color: C.bg }; header(s, kicker, title); footer(s, n, id); return s; }
    function phone(s, frameKey, x, y, h, label) {
      const f = FRAMES[frameKey]; const w = h * f.px[0] / f.px[1];
      const sx = x + w * f.area[0] / 100, sy = y + h * f.area[1] / 100, sw = w * f.area[2] / 100, sh = h * f.area[3] / 100;
      rr(s, sx, sy, sw, sh, C.sunken, C.sunken, frameKey === "LAPTOP-01" ? 0.04 : Math.min(0.3, sw * 0.14));
      tx(s, [{ text: label, options: { bold: true, breakLine: true } }, { text: "Screenshot goes here", options: { fontSize: T.label, color: C.text2 } }],
        { x: sx + 0.1, y: sy + sh / 2 - 0.3, w: sw - 0.2, h: 0.6, fontSize: T.body, align: "center", valign: "middle" });
      const data = A.frame(frameKey); if (data) s.addImage({ data, x, y, w, h });
      return w;
    }
    function callout(s, n, title, body, x, y, w, color = C.petrol) {
      num(s, n, x, y, 0.36, color);
      tx(s, title, { x: x + 0.52, y: y - 0.02, w: w - 0.52, h: 0.32, fontFace: F.disp, fontSize: T.h4, bold: true });
      tx(s, body, { x: x + 0.52, y: y + 0.34, w: w - 0.52, h: 0.75, fontSize: T.body, color: C.text2 });
    }
    const chartBase = () => ({ fontFace: F.body, catAxisLabelFontFace: F.body, valAxisLabelFontFace: F.body, catAxisLabelColor: C.text2, valAxisLabelColor: C.text2, catAxisLabelFontSize: 10, valAxisLabelFontSize: 10, valGridLine: { color: C.border, size: 0.5 }, catGridLine: { style: "none" }, catAxisLineShow: false, valAxisLineShow: false, dataLabelFontFace: F.body, dataLabelFontSize: 10, dataLabelColor: C.text });

    /* journey grid */
    const STG = ["Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5"];
    const GX = 2.15, GW = W - M - GX, GAP = 0.12, CW = (GW - GAP * 4) / 5, cx = i => GX + i * (CW + GAP);
    const rowLabel = (s, t, y, h) => tx(s, t, { x: M, y, w: 1.5, h, fontSize: T.label, bold: true, color: C.text2, valign: "middle" });
    const stageRow = (s, subs) => STG.forEach((st, i) => { rr(s, cx(i), 1.8, CW, 0.6, C.petrol, C.petrol, 0.08); tx(s, [{ text: st + " · " + words(2, i + 3), options: { bold: true, breakLine: !!subs } }].concat(subs ? [{ text: subs[i], options: { fontSize: T.label, color: C.onPetrol } }] : []), { x: cx(i) + 0.14, y: 1.8, w: CW - 0.2, h: 0.6, color: "FFFFFF", fontSize: T.label + 1, valign: "middle" }); });
    const cells = (s, y, h, fill, line, seed, n = 7, color = C.text) => STG.forEach((_, i) => { rr(s, cx(i), y, CW, h, fill, line, 0.08); tx(s, lorem(n, seed + i), { x: cx(i) + 0.14, y: y + 0.12, w: CW - 0.28, h: h - 0.2, fontSize: T.label + 1, color }); });
    function emotion(s, y, h, scores, labels, color) {
      rr(s, GX, y, GW, h, C.surface, C.border, 0.1);
      const pts = scores.map((v, i) => ({ x: cx(i) + CW / 2, y: y + 0.22 + (1 - v) * (h - 0.72) }));
      for (let i = 0; i < pts.length - 1; i++) { const a = pts[i], b = pts[i + 1]; s.addShape(S.LINE, { x: a.x, y: Math.min(a.y, b.y), w: b.x - a.x, h: Math.max(Math.abs(b.y - a.y), 0.001), flipV: b.y < a.y, line: { color, width: 2 } }); }
      pts.forEach((p, i) => { s.addShape(S.OVAL, { x: p.x - 0.09, y: p.y - 0.09, w: 0.18, h: 0.18, fill: { color }, line: { color: "FFFFFF", width: 1.5 } }); tx(s, labels[i], { x: cx(i), y: p.y + 0.13, w: CW, h: 0.26, fontSize: T.label, color: C.text2, align: "center" }); });
    }

    /* ---------- slide renderers ---------- */
    const R = {
      execSummary(s) {
        const pts = [["CONTEXT", "42%", "alert"], ["FINDING", "3 of 5", "users"], ["IMPACT", "+18 pts", "chart"]];
        const cw = (W - 2 * M - 0.6) / 3;
        pts.forEach((p, i) => { const x = M + i * (cw + 0.3), y = 1.95; card(s, x, y, cw, 3.05);
          tile(s, p[2], x + 0.3, y + 0.24, 0.5);
          tx(s, p[0], { x: x + 0.95, y: y + 0.33, w: cw - 1.25, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
          tx(s, p[1], { x: x + 0.3, y: y + 0.85, w: cw - 0.6, h: 0.85, fontFace: F.disp, fontSize: T.display, bold: true, color: C.petrol });
          tx(s, lorem(16, i + 2), { x: x + 0.3, y: y + 1.8, w: cw - 0.6, h: 1.1 }); });
        rr(s, M, 5.3, W - 2 * M, 1.35, C.inverse, C.inverse, 0.1);
        pill(s, "THE ASK", M + 0.3, 5.72, 1.3, C.citron, C.inverse, 0.5);
        tx(s, lorem(22, 9), { x: M + 1.9, y: 5.3, w: 9.9, h: 1.35, fontSize: 16, color: "FFFFFF", valign: "middle" });
      },
      statement(s, o) {
        rr(s, M, 1.95, W - 2 * M, 3.6, C.petrol, C.petrol, 0.14);
        if (o.hypothesis) pill(s, "HYPOTHESIS", M + 0.45, 2.35, 1.7, C.citron, C.inverse);
        tx(s, o.hypothesis ? "We believe that " + words(10, 4).toLowerCase() + " will " + words(8, 12).toLowerCase() + "." : lorem(20, 5), { x: M + 0.45, y: o.hypothesis ? 2.9 : 2.4, w: W - 2 * M - 0.9, h: 2.3, fontFace: F.disp, fontSize: 30, bold: true, color: "FFFFFF", valign: "middle" });
        const cols = o.hypothesis ? [["WE'LL KNOW IT WORKED WHEN", lorem(14, 20)], ["PRIMARY METRIC", "Lorem ipsum rate, +2 pts or more"], ["GUARDRAIL", lorem(8, 30)]] : [["WHY NOW", lorem(14, 20)], ["WHAT'S CHANGED", lorem(14, 26)], ["WHAT'S AT STAKE", lorem(14, 33)]];
        const cw = (W - 2 * M - 0.6) / 3;
        cols.forEach((c, i) => { const x = M + i * (cw + 0.3); tx(s, c[0], { x, y: 5.8, w: cw, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 }); tx(s, c[1], { x, y: 6.1, w: cw, h: 0.8 }); });
      },
      kpiGrid(s, o) {
        const k = [["Lorem ipsum rate", "46%", "Up", "trendUp", "34% → 46% vs baseline"], ["Dolor sit time", "–18 days", "Down (better)", "trendDown", "41 → 23 days, median"], ["Amet steps", "5 → 2", "Down (better)", "trendDown", "Consectetur adipiscing"], ["Elit satisfaction", "4.5", "Up", "trendUp", "3.9 → 4.5 out of 5"]];
        const cw = (W - 2 * M - 0.9) / 4;
        k.forEach((m, i) => { const x = M + i * (cw + 0.3), y = 1.95; card(s, x, y, cw, 3.4);
          tx(s, m[0], { x: x + 0.3, y: y + 0.3, w: cw - 0.6, h: 0.6, bold: true, color: C.text2 });
          tx(s, m[1], { x: x + 0.3, y: y + 1.0, w: cw - 0.6, h: 0.85, fontFace: F.disp, fontSize: 32, bold: true, color: C.petrol, valign: "middle" });
          rr(s, x + 0.3, y + 1.98, 1.9, 0.38, C.okBg, C.okBg, 0.08); icon(s, m[3], C.okFg, x + 0.4, y + 2.05, 0.24);
          tx(s, m[2], { x: x + 0.72, y: y + 1.98, w: 1.45, h: 0.38, fontSize: T.label, bold: true, color: C.okFg, valign: "middle" });
          tx(s, m[4], { x: x + 0.3, y: y + 2.5, w: cw - 0.6, h: 0.75, fontSize: T.label + 1, color: C.text2 }); });
        card(s, M, 5.6, W - 2 * M, 1.1, C.sunken);
        tx(s, [{ text: (o.projected ? "How we'll measure  " : "Definitions  "), options: { bold: true } }, { text: lorem(26, 14), options: { color: C.text2 } }], { x: M + 0.3, y: 5.6, w: W - 2 * M - 0.6, h: 1.1, valign: "middle" });
      },
      kpiTrend(s) {
        card(s, M, 1.95, 3.2, 4.75);
        tx(s, "LOREM IPSUM RATE", { x: M + 0.3, y: 2.25, w: 2.6, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
        tx(s, "46%", { x: M + 0.3, y: 2.65, w: 2.6, h: 1.0, fontFace: F.disp, fontSize: T.display, bold: true, color: C.petrol });
        rr(s, M + 0.3, 3.75, 1.75, 0.38, C.okBg, C.okBg, 0.08); icon(s, "trendUp", C.okFg, M + 0.4, 3.82, 0.24);
        tx(s, "Up 6 pts", { x: M + 0.72, y: 3.75, w: 1.3, h: 0.38, fontSize: T.label, bold: true, color: C.okFg, valign: "middle" });
        tx(s, "Q3 2026 vs Q3 2025\n" + lorem(12, 8), { x: M + 0.3, y: 4.35, w: 2.6, h: 2.1, color: C.text2 });
        card(s, 4.0, 1.95, 5.65, 4.75);
        tx(s, "Monthly lorem ipsum rate, %", { x: 4.3, y: 2.2, w: 5, h: 0.3, fontSize: T.label, bold: true, color: C.text2 });
        s.addChart(pres.charts.LINE, [{ name: "Rate", labels: ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"], values: [38, 39, 38, 40, 41, 40, 42, 43, 43, 44, 45, 46] }],
          Object.assign(chartBase(), { x: 4.2, y: 2.55, w: 5.3, h: 4.0, chartColors: [C.petrol], lineSize: 2.5, lineDataSymbol: "circle", lineDataSymbolSize: 6, showLegend: false, valAxisMinVal: 30, valAxisMaxVal: 50 }));
        rr(s, 9.95, 1.95, W - M - 9.95, 4.75, C.petrol, C.petrol, 0.12);
        tx(s, "INSIGHT", { x: 10.25, y: 2.25, w: 2.3, h: 0.3, fontSize: T.label, bold: true, color: C.onPetrol, charSpacing: 1 });
        tx(s, lorem(12, 16), { x: 10.25, y: 2.6, w: 2.3, h: 1.8, fontFace: F.disp, fontSize: 17, bold: true, color: "FFFFFF" });
        tx(s, "IMPLICATION", { x: 10.25, y: 4.6, w: 2.3, h: 0.3, fontSize: T.label, bold: true, color: C.onPetrol, charSpacing: 1 });
        tx(s, lorem(14, 22), { x: 10.25, y: 4.95, w: 2.3, h: 1.6, color: "FFFFFF" });
      },
      chartFocus(s) {
        card(s, M, 1.95, 8.6, 4.75);
        tx(s, "Lorem ipsum volume by quarter, thousands", { x: M + 0.3, y: 2.2, w: 8, h: 0.3, fontSize: T.label, bold: true, color: C.text2 });
        s.addChart(pres.charts.BAR, [{ name: "Volume", labels: ["Q4 '24", "Q1 '25", "Q2 '25", "Q3 '25", "Q4 '25", "Q1 '26", "Q2 '26", "Q3 '26"], values: [112, 118, 121, 119, 131, 138, 142, 155] }],
          Object.assign(chartBase(), { x: M + 0.2, y: 2.55, w: 8.2, h: 4.0, barDir: "col", chartColors: [C.petrol], showValue: true, dataLabelPosition: "outEnd", showLegend: false, barGapWidthPct: 60 }));
        rr(s, 9.4, 1.95, W - M - 9.4, 4.75, C.surface, C.border, 0.12);
        tx(s, "+38%", { x: 9.7, y: 2.3, w: 3, h: 0.9, fontFace: F.disp, fontSize: T.display, bold: true, color: C.petrol });
        tx(s, "since Q4 2024", { x: 9.7, y: 3.2, w: 3, h: 0.3, fontSize: T.label, color: C.text2 });
        pill(s, "TAKEAWAY", 9.7, 3.75, 1.4, C.citron, C.inverse);
        tx(s, lorem(24, 11), { x: 9.7, y: 4.25, w: 3.1, h: 2.3 });
      },
      threeCol(s, o) {
        const cw = (W - 2 * M - 0.6) / 3;
        [0, 1, 2].forEach(i => { const x = M + i * (cw + 0.3), y = 1.95; card(s, x, y, cw, 4.75);
          tile(s, o.icons[i], x + 0.35, y + 0.35, 0.72);
          tx(s, `${o.label} ${i + 1}`, { x: x + 0.35, y: y + 1.28, w: cw - 0.7, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
          tx(s, words(4, i * 5 + 3 + (o.seed || 0) * 11).replace(/^./, c => c.toUpperCase()), { x: x + 0.35, y: y + 1.6, w: cw - 0.7, h: 0.8, fontFace: F.disp, fontSize: 20, bold: true });
          tx(s, lorem(30, i * 4 + 6 + (o.seed || 0) * 13), { x: x + 0.35, y: y + 2.5, w: cw - 0.7, h: 2.0, color: C.text2 }); });
      },
      matrix(s) {
        const x0 = M + 0.6, y0 = 1.95, w = 7.2, h = 4.55;
        card(s, x0, y0, w, h);
        rr(s, x0 + 0.02, y0 + 0.02, w / 2 - 0.02, h / 2 - 0.02, C.okBg, C.okBg, 0.1);
        s.addShape(S.LINE, { x: x0 + w / 2, y: y0, w: 0, h, line: { color: C.border, width: 1 } });
        s.addShape(S.LINE, { x: x0, y: y0 + h / 2, w, h: 0, line: { color: C.border, width: 1 } });
        [["Quick wins", 0, 0], ["Big bets", 1, 0], ["Fill-ins", 0, 1], ["Deprioritize", 1, 1]].forEach(([t, qx, qy]) => tx(s, t, { x: x0 + qx * w / 2 + 0.2, y: y0 + qy * h / 2 + 0.15, w: 2.5, h: 0.3, fontSize: T.label, bold: true, color: qx === 0 && qy === 0 ? C.okFg : C.text2 }));
        tx(s, "IMPACT ↑", { x: M - 0.05, y: y0 + h / 2 - 0.15, w: 0.7, h: 0.3, fontSize: T.label, bold: true, color: C.text2, rotate: 270 });
        tx(s, "EFFORT →", { x: x0 + w / 2 - 0.6, y: y0 + h + 0.1, w: 1.2, h: 0.3, fontSize: T.label, bold: true, color: C.text2, align: "center" });
        const dots = [[0.18, 0.2], [0.35, 0.33], [0.7, 0.18], [0.28, 0.7], [0.66, 0.64], [0.82, 0.82]];
        dots.forEach(([dx, dy], i) => num(s, i + 1, x0 + dx * w - 0.2, y0 + dy * h - 0.2, 0.4, i < 2 ? C.petrol : C.text2));
        const lx = 8.8; tx(s, "OPPORTUNITIES", { x: lx, y: 1.95, w: 4, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
        dots.forEach((_, i) => { num(s, i + 1, lx, 2.4 + i * 0.7, 0.36, i < 2 ? C.petrol : C.text2); tx(s, [{ text: words(4, i * 3 + 2).replace(/^./, c => c.toUpperCase()), options: { bold: true, breakLine: true } }, { text: words(6, i * 5 + 9), options: { color: C.text2, fontSize: T.label + 1 } }], { x: lx + 0.5, y: 2.36 + i * 0.7, w: 3.5, h: 0.62 }); });
      },
      recommend(s) {
        [0, 1, 2].forEach(i => { const y = 1.95 + i * 1.6; card(s, M, y, W - 2 * M, 1.42);
          num(s, i + 1, M + 0.3, y + 0.3, 0.46);
          tx(s, words(6, i * 4 + 2).replace(/^./, c => c.toUpperCase()), { x: M + 1.0, y: y + 0.24, w: 8.2, h: 0.4, fontFace: F.disp, fontSize: 17, bold: true });
          tx(s, lorem(22, i * 6 + 7), { x: M + 1.0, y: y + 0.68, w: 8.4, h: 0.65, color: C.text2 });
          pill(s, "Evidence: slide " + String(i + 3).padStart(2, "0"), W - M - 2.6, y + 0.52, 2.3, C.sunken, C.text2, 0.38); });
      },
      insight(s) {
        rr(s, M, 1.95, 5.6, 4.75, C.petrol, C.petrol, 0.12);
        tile(s, "target", M + 0.4, 2.35, 0.6);
        tx(s, "INSIGHT", { x: M + 0.4, y: 3.2, w: 4.8, h: 0.3, fontSize: T.label, bold: true, color: C.onPetrol, charSpacing: 1 });
        tx(s, lorem(14, 3), { x: M + 0.4, y: 3.55, w: 4.8, h: 1.5, fontFace: F.disp, fontSize: 22, bold: true, color: "FFFFFF" });
        tx(s, "IMPLICATION", { x: M + 0.4, y: 5.25, w: 4.8, h: 0.3, fontSize: T.label, bold: true, color: C.onPetrol, charSpacing: 1 });
        tx(s, lorem(18, 12), { x: M + 0.4, y: 5.58, w: 4.8, h: 0.95, color: "FFFFFF" });
        [["1 in 3", "Lorem · order data · n = 4,200"], ["62%", "Survey · online · n = 1,200"], ["5 steps", "Journey audit · 3 channels"]].forEach((e, i) => { const y = 1.95 + i * 1.62, x = 6.45; card(s, x, y, W - M - x, 1.46);
          tx(s, e[0], { x: x + 0.3, y: y + 0.2, w: 2.2, h: 0.75, fontFace: F.disp, fontSize: 32, bold: true, color: C.petrol, valign: "middle" });
          tx(s, lorem(7, i * 5 + 4), { x: x + 2.6, y: y + 0.22, w: 3.6, h: 0.7, bold: true, valign: "middle" });
          tx(s, "EVIDENCE  " + e[1], { x: x + 0.3, y: y + 1.03, w: 5.9, h: 0.3, fontSize: T.label, color: C.text2 }); });
      },
      process(s) {
        const n = 5, x0 = M + 0.8, x1 = W - M - 0.8, step = (x1 - x0) / (n - 1), cy = 2.75;
        s.addShape(S.LINE, { x: x0, y: cy, w: x1 - x0, h: 0, line: { color: C.border, width: 2 } });
        ["Recruit", "Randomize", "Expose", "Measure", "Decide"].forEach((t, i) => { const x = x0 + i * step; num(s, i + 1, x - 0.3, cy - 0.3, 0.6);
          tx(s, t, { x: x - 1.1, y: cy + 0.5, w: 2.2, h: 0.35, fontFace: F.disp, fontSize: T.h4, bold: true, align: "center" });
          tx(s, lorem(9, i * 3 + 5), { x: x - 1.1, y: cy + 0.88, w: 2.2, h: 1.0, fontSize: T.label + 1, color: C.text2, align: "center" }); });
        card(s, M, 5.05, W - 2 * M, 1.65, C.sunken);
        const f = [["AUDIENCE", "n = 12,000"], ["SPLIT", "50 / 50"], ["DURATION", "4 weeks"], ["PRIMARY METRIC", "Lorem ipsum rate"], ["GUARDRAIL", "Dolor opt-out"]];
        const cw = (W - 2 * M - 0.6) / 5; f.forEach((d, i) => { const x = M + 0.3 + i * cw; tx(s, d[0], { x, y: 5.35, w: cw - 0.2, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 }); tx(s, d[1], { x, y: 5.7, w: cw - 0.2, h: 0.7, fontFace: F.disp, fontSize: 17, bold: true }); });
      },
      variants(s) {
        const names = [["Control", C.text2, "10.2%"], ["Variant A", C.dvText[0], "11.6%"], ["Variant B", C.dvText[1], "12.9%"]];
        const colW = (W - 2 * M) / 3;
        names.forEach((v, i) => { const x = M + i * colW; const ph = 3.55;
          pill(s, v[0], x + 0.2, 1.9, 1.6, C.surface, v[1]);
          const pw = phone(s, "IPHONE-01", x + 0.25, 2.35, ph, v[0]);
          const tx0 = x + 0.25 + pw + 0.25;
          tx(s, lorem(8, i * 4 + 3), { x: tx0, y: 2.45, w: colW - pw - 0.8, h: 1.6, color: C.text2 });
          tx(s, v[2], { x: tx0, y: 4.25, w: colW - pw - 0.8, h: 0.6, fontFace: F.disp, fontSize: 26, bold: true, color: v[1] });
          tx(s, i === 0 ? "Baseline" : (i === 1 ? "+1.4 pts vs control" : "+2.7 pts vs control"), { x: tx0, y: 4.85, w: colW - pw - 0.8, h: 0.3, fontSize: T.label, color: C.text2 }); });
        card(s, M, 6.1, W - 2 * M, 0.7, C.sunken);
        tx(s, [{ text: "What changed  ", options: { bold: true } }, { text: lorem(20, 18), options: { color: C.text2 } }], { x: M + 0.3, y: 6.1, w: W - 2 * M - 0.6, h: 0.7, valign: "middle" });
      },
      resultsAB(s, o) {
        const k = [["Control", "10.2%", "Baseline", C.text2], ["Variant A", "11.6%", "+1.4 pts", C.dvText[0]], ["Variant B", "12.9%", "+2.7 pts · winner", C.dvText[1]]];
        k.forEach((m, i) => { const y = 1.95 + i * 1.6; card(s, M, y, 3.6, 1.42);
          tx(s, m[0].toUpperCase(), { x: M + 0.3, y: y + 0.2, w: 3, h: 0.3, fontSize: T.label, bold: true, color: m[3], charSpacing: 1 });
          tx(s, m[1], { x: M + 0.3, y: y + 0.5, w: 1.8, h: 0.7, fontFace: F.disp, fontSize: 28, bold: true });
          tx(s, m[2], { x: M + 2.0, y: y + 0.62, w: 1.5, h: 0.4, fontSize: T.label, bold: true, color: i === 2 ? C.okFg : C.text2 }); });
        card(s, 4.4, 1.95, W - M - 4.4, 3.7);
        tx(s, "Conversion by variant, %", { x: 4.7, y: 2.15, w: 6, h: 0.3, fontSize: T.label, bold: true, color: C.text2 });
        s.addChart(pres.charts.BAR, [{ name: "Conversion", labels: ["Control", "Variant A", "Variant B"], values: [10.2, 11.6, 12.9] }],
          Object.assign(chartBase(), { dataLabelFormatCode: "0.0", x: 4.6, y: 2.45, w: W - M - 4.8, h: 3.1, barDir: "bar", chartColors: [C.petrol], showValue: true, dataLabelPosition: "outEnd", showLegend: false, valAxisMinVal: 0, valAxisMaxVal: 15, barGapWidthPct: 70 }));
        card(s, 4.4, 5.85, W - M - 4.4, 0.85, C.sunken);
        tx(s, [{ text: "Significance  ", options: { bold: true } }, { text: "p = 0.01 · 95% CI +1.1 to +4.3 pts · n = 12,000 · " + words(6, 3), options: { color: C.text2 } }], { x: 4.7, y: 5.85, w: W - M - 5.0, h: 0.85, valign: "middle" });
      },
      resultsBehavioral(s) {
        card(s, M, 1.95, 6.6, 4.75);
        tx(s, "Funnel: share of users reaching each step, %", { x: M + 0.3, y: 2.15, w: 6, h: 0.3, fontSize: T.label, bold: true, color: C.text2 });
        s.addChart(pres.charts.BAR, [{ name: "Control", labels: ["Opened", "Started", "Completed form", "Ordered", "Returned"], values: [100, 64, 41, 30, 22] }, { name: "Variant", labels: ["Opened", "Started", "Completed form", "Ordered", "Returned"], values: [100, 71, 52, 39, 29] }],
          Object.assign(chartBase(), { x: M + 0.2, y: 2.45, w: 6.2, h: 4.1, barDir: "bar", barGrouping: "clustered", chartColors: ["A6A8A9", C.petrol], showValue: true, dataLabelPosition: "outEnd", showLegend: true, legendPos: "b", legendFontFace: F.body, legendFontSize: 10, catAxisOrientation: "maxMin", valAxisHidden: true, valGridLine: { style: "none" } }));
        card(s, 7.4, 1.95, W - M - 7.4, 3.2);
        tx(s, "Weekly completion rate, %", { x: 7.7, y: 2.15, w: 5, h: 0.3, fontSize: T.label, bold: true, color: C.text2 });
        s.addChart(pres.charts.LINE, [{ name: "Control", labels: ["W1", "W2", "W3", "W4"], values: [40, 41, 41, 42] }, { name: "Variant", labels: ["W1", "W2", "W3", "W4"], values: [43, 48, 51, 52] }],
          Object.assign(chartBase(), { x: 7.6, y: 2.45, w: W - M - 7.8, h: 2.6, chartColors: ["A6A8A9", C.petrol], lineSize: 2.5, lineDataSymbol: "circle", lineDataSymbolSize: 6, showLegend: false, valAxisMinVal: 35, valAxisMaxVal: 55 }));
        rr(s, 7.4, 5.35, W - M - 7.4, 1.35, C.petrol, C.petrol, 0.12);
        tx(s, [{ text: "+11 pts at the form step. ", options: { bold: true } }, { text: lorem(14, 6) }], { x: 7.7, y: 5.35, w: W - M - 8.0, h: 1.35, color: "FFFFFF", valign: "middle" });
      },
      resultsQual(s) {
        const th = [["Theme 1", "14 mentions"], ["Theme 2", "9 mentions"], ["Theme 3", "6 mentions"]];
        const cw = (W - 2 * M - 0.6) / 3;
        th.forEach((t, i) => { const x = M + i * (cw + 0.3), y = 1.95; card(s, x, y, cw, 4.75);
          tx(s, t[0].toUpperCase() + " · " + t[1], { x: x + 0.3, y: y + 0.3, w: cw - 0.6, h: 0.3, fontSize: T.label, bold: true, color: C.dv[i], charSpacing: 1 });
          tx(s, words(5, i * 6 + 2).replace(/^./, c => c.toUpperCase()), { x: x + 0.3, y: y + 0.65, w: cw - 0.6, h: 0.75, fontFace: F.disp, fontSize: 18, bold: true });
          [0, 1].forEach(j => { const qy = y + 1.6 + j * 1.5; rr(s, x + 0.3, qy, cw - 0.6, 1.3, C.sunken, C.sunken, 0.08);
            tile(s, "message", x + 0.42, qy + 0.12, 0.34);
            tx(s, "“" + lorem(14, i * 5 + j * 3 + 1, "") + ".”", { x: x + 0.85, y: qy + 0.12, w: cw - 1.3, h: 0.85, fontSize: T.label + 1 });
            tx(s, "Participant " + (i * 2 + j + 1) + " · Segment " + "ABC"[j + i > 2 ? 2 : j + i], { x: x + 0.85, y: qy + 0.98, w: cw - 1.3, h: 0.25, fontSize: T.label - 1, color: C.text2 }); }); });
      },
      resultsMixed(s) {
        card(s, M, 1.95, 6.0, 4.75);
        tx(s, "LOREM IPSUM RATE", { x: M + 0.3, y: 2.25, w: 5, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
        tx(s, "+2.7 pts", { x: M + 0.3, y: 2.6, w: 5, h: 0.9, fontFace: F.disp, fontSize: T.display, bold: true, color: C.petrol });
        tx(s, "Variant 12.9% vs control 10.2% · p = 0.01", { x: M + 0.3, y: 3.5, w: 5.4, h: 0.3, fontSize: T.label, color: C.text2 });
        s.addChart(pres.charts.BAR, [{ name: "Rate", labels: ["Control", "Variant"], values: [10.2, 12.9] }],
          Object.assign(chartBase(), { dataLabelFormatCode: "0.0", x: M + 0.2, y: 3.9, w: 5.6, h: 2.65, barDir: "bar", chartColors: [C.petrol], showValue: true, dataLabelPosition: "outEnd", showLegend: false, valAxisMinVal: 0, valAxisMaxVal: 15 }));
        rr(s, 6.85, 1.95, W - M - 6.85, 4.75, C.surface, C.border, 0.12);
        tile(s, "message", 7.2, 2.3, 0.56);
        tx(s, "“" + lorem(26, 4, "") + ".”", { x: 7.2, y: 3.0, w: W - M - 7.6, h: 2.3, fontFace: F.disp, fontSize: 19 });
        tx(s, [{ text: "Participant 7", options: { bold: true, breakLine: true } }, { text: "Segment B · variant group · interview", options: { color: C.text2, fontSize: T.label } }], { x: 7.2, y: 5.6, w: 5, h: 0.8 });
      },
      twoCol(s) {
        card(s, M, 1.95, 6.0, 4.75);
        tx(s, "MESSAGE", { x: M + 0.35, y: 2.3, w: 5, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
        tx(s, lorem(12, 7), { x: M + 0.35, y: 2.65, w: 5.3, h: 1.3, fontFace: F.disp, fontSize: 20, bold: true });
        tx(s, lorem(40, 15), { x: M + 0.35, y: 4.1, w: 5.3, h: 2.3, color: C.text2 });
        card(s, 6.85, 1.95, W - M - 6.85, 4.75);
        tx(s, "EVIDENCE", { x: 7.2, y: 2.3, w: 5, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
        s.addChart(pres.charts.BAR, [{ name: "Lorem", labels: ["Before", "After"], values: [34, 46] }],
          Object.assign(chartBase(), { x: 7.1, y: 2.7, w: W - M - 7.4, h: 2.8, barDir: "col", chartColors: [C.petrol], showValue: true, dataLabelPosition: "outEnd", showLegend: false, valAxisMinVal: 0, valAxisMaxVal: 60, barGapWidthPct: 90 }));
        tx(s, "Source: [placeholder] · method · n = 1,200", { x: 7.2, y: 5.75, w: 5, h: 0.3, fontSize: T.label, color: C.text2 });
      },
      nextSteps(s) {
        rr(s, M, 1.95, 3.7, 4.75, C.inverse, C.inverse, 0.12);
        pill(s, "Decision needed", M + 0.35, 2.3, 2.0, C.citron, C.inverse, 0.4);
        tx(s, lorem(8, 5), { x: M + 0.35, y: 2.9, w: 3.0, h: 1.6, fontFace: F.disp, fontSize: 20, bold: true, color: "FFFFFF" });
        tx(s, [{ text: "Scope: [lorem ipsum]", options: { breakLine: true } }, { text: "Owner: [role]", options: { breakLine: true } }, { text: "Resources: [dolor sit]" }], { x: M + 0.35, y: 4.7, w: 3.0, h: 1.8, color: C.onInverse, paraSpaceAfter: 8 });
        const hd = { bold: true, color: C.text2, fontSize: T.label, fill: { color: C.sunken }, fontFace: F.body };
        const cell = (t, o = {}) => ({ text: t, options: Object.assign({ fontSize: T.body, color: C.text, fontFace: F.body, fill: { color: C.surface } }, o) });
        const rows = [[{ text: "STEP", options: hd }, { text: "ACTION", options: hd }, { text: "OWNER", options: hd }, { text: "DATE", options: hd }]];
        ["Oct 2026", "Nov 2026", "Dec 2026", "Jan 2027", "Mar 2027"].forEach((d, i) => rows.push([cell(String(i + 1), { bold: true, color: C.petrol }), cell(words(5, i * 4 + 3).replace(/^./, c => c.toUpperCase())), cell(["Leadership", "CX · Design", "Product · Eng", "CX · Ops", "Analytics"][i]), cell(d)]));
        const x0 = M + 4.0, tw = W - M - x0;
        s.addTable(rows, { x: x0, y: 1.95, w: tw, colW: [0.8, tw - 0.8 - 2.2 - 1.3, 2.2, 1.3], rowH: [0.5, 0.85, 0.85, 0.85, 0.85, 0.85], border: { type: "solid", pt: 0.75, color: C.border }, valign: "middle", margin: [0, 0.15, 0, 0.15] });
      },
      persona(s) {
        const cw = (W - 2 * M - 0.6) / 3;
        ["Segment A", "Segment B", "Segment C"].forEach((sg, i) => { const x = M + i * (cw + 0.3), y = 1.95; card(s, x, y, cw, 4.75);
          tile(s, "user", x + 0.3, y + 0.3, 0.7);
          tx(s, sg, { x: x + 1.15, y: y + 0.32, w: cw - 1.4, h: 0.36, fontFace: F.disp, fontSize: T.h4, bold: true });
          tx(s, ["Age 45–54 · lorem ipsum", "Age 55–64 · dolor sit", "Age 65–75 · amet elit"][i], { x: x + 1.15, y: y + 0.7, w: cw - 1.4, h: 0.3, fontSize: T.label, color: C.text2 });
          [["NEEDS", 1.3], ["BEHAVIORS", 2.55]].forEach(([lab, dy], j) => { tx(s, lab, { x: x + 0.3, y: y + dy, w: cw - 0.6, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
            tx(s, [{ text: lorem(8, i * 5 + j * 3 + 2), options: { bullet: true, breakLine: true } }, { text: lorem(7, i * 5 + j * 3 + 9), options: { bullet: true } }], { x: x + 0.3, y: y + dy + 0.3, w: cw - 0.6, h: 1.0, fontSize: T.label + 1, paraSpaceAfter: 4 }); });
          rr(s, x + 0.3, y + 4.05, cw - 0.6, 0.45, C.sunken, C.sunken, 0.08);
          tx(s, "Top need: " + words(4, i * 7 + 3), { x: x + 0.45, y: y + 4.05, w: cw - 0.9, h: 0.45, fontSize: T.label + 0.5, bold: true, color: C.petrol, valign: "middle" }); });
      },
      quote(s) {
        const cw = (W - 2 * M - 0.6) / 3;
        [0, 1, 2].forEach(i => { const x = M + i * (cw + 0.3), y = 1.95; card(s, x, y, cw, 4.75);
          tile(s, "message", x + 0.3, y + 0.25, 0.5);
          tx(s, "“" + lorem(20, i * 6 + 2, "") + ".”", { x: x + 0.3, y: y + 0.9, w: cw - 0.6, h: 2.0, fontFace: F.disp, fontSize: 16 });
          s.addShape(S.LINE, { x: x + 0.3, y: y + 3.05, w: cw - 0.6, h: 0, line: { color: C.border, width: 0.75 } });
          tx(s, "Segment " + "ABC"[i], { x: x + 0.3, y: y + 3.2, w: cw - 0.6, h: 0.32, fontFace: F.disp, fontSize: T.h4, bold: true });
          tx(s, "Age 45–64 · interview · " + ["2025", "2026", "2026"][i], { x: x + 0.3, y: y + 3.55, w: cw - 0.6, h: 0.3, fontSize: T.label, color: C.text2 });
          rr(s, x + 0.3, y + 4.0, cw - 0.6, 0.45, C.sunken, C.sunken, 0.08);
          tx(s, "Theme: " + words(3, i * 5 + 8), { x: x + 0.45, y: y + 4.0, w: cw - 0.9, h: 0.45, fontSize: T.label + 0.5, bold: true, color: C.petrol, valign: "middle" }); });
      },
      deviceHero(s) {
        pill(s, "[Concept name]", W - M - 2.4, 0.42, 2.4, C.citron, C.inverse, 0.36);
        const pw = phone(s, "IPHONE-01", 1.3, 1.85, 4.95, "Product screen");
        const x = 1.3 + pw + 1.2;
        [0, 1, 2].forEach(i => callout(s, i + 1, words(4, i * 5 + 3).replace(/^./, c => c.toUpperCase()), lorem(16, i * 6 + 5), x, 2.2 + i * 1.5, W - M - x));
      },
      journeyStages(s) {
        STG.forEach((st, i) => { rr(s, cx(i), 1.95, CW, 0.7, C.petrol, C.petrol, 0.08);
          tx(s, [{ text: st, options: { bold: true, breakLine: true } }, { text: words(3, i * 4 + 2), options: { fontSize: T.label, color: C.onPetrol } }], { x: cx(i) + 0.14, y: 1.95, w: CW - 0.2, h: 0.7, color: "FFFFFF", fontSize: T.label + 1, valign: "middle" }); });
        rowLabel(s, "Customer goal", 2.8, 1.3); cells(s, 2.8, 1.3, C.surface, C.border, 2, 9);
        rowLabel(s, "Touchpoints", 4.2, 1.0);
        STG.forEach((_, i) => { rr(s, cx(i), 4.2, CW, 1.0, C.surface, C.border, 0.08); ["Email", "App", "Call"].slice(0, 1 + (i % 3)).forEach((t, j) => pill(s, t, cx(i) + 0.14 + j * 0.72, 4.5, 0.66, C.sunken, C.text2, 0.3)); });
        rowLabel(s, "Typical duration", 5.35, 0.6);
        ["1–2 days", "1 week", "2–3 days", "5–10 days", "1–2 weeks"].forEach((d, i) => { rr(s, cx(i), 5.35, CW, 0.6, C.sunken, C.sunken, 0.08); tx(s, d, { x: cx(i) + 0.14, y: 5.35, w: CW - 0.28, h: 0.6, bold: true, valign: "middle" }); });
        rowLabel(s, "Owner", 6.1, 0.6);
        ["Marketing", "CX", "Clinical ops", "Logistics", "Lab · CX"].forEach((d, i) => { rr(s, cx(i), 6.1, CW, 0.6, C.sunken, C.sunken, 0.08); tx(s, d, { x: cx(i) + 0.14, y: 6.1, w: CW - 0.28, h: 0.6, color: C.text2, valign: "middle" }); });
      },
      journeyCurrent(s) {
        stageRow(s);
        rowLabel(s, "What the customer does", 2.55, 1.15); cells(s, 2.55, 1.15, C.surface, C.border, 4);
        rowLabel(s, "How they feel", 3.85, 1.35); emotion(s, 3.85, 1.35, [0.55, 0.4, 0.1, 0.35, 0.5], ["Neutral", "Unsure", "Frustrated", "Hesitant", "Relieved"], C.errFg);
        rowLabel(s, "Pain points", 5.35, 1.4); cells(s, 5.35, 1.4, C.errBg, C.errBg, 11);
      },
      journeyFuture(s) {
        const ch = [["Email", C.dvText[0]], ["SMS", C.dvText[1]], ["RCS", C.dvText[2]], ["SMS", C.dvText[1]], ["Email", C.dvText[0]]];
        stageRow(s, ["T–45 days", "T–30 days", "T–0", "+3 to +10 days", "+14 days"]);
        rowLabel(s, "Channel moment", 2.55, 0.5);
        ch.forEach((c, i) => { rr(s, cx(i), 2.55, CW, 0.5, C.surface, c[1], 0.08, 1.25); oval(s, cx(i) + 0.14, 2.72, 0.16, c[1]);
          tx(s, [{ text: c[0] + "  ", options: { bold: true, color: c[1] } }, { text: words(2, i * 3 + 4) }], { x: cx(i) + 0.38, y: 2.55, w: CW - 0.45, h: 0.5, fontSize: T.label, valign: "middle" }); });
        rowLabel(s, "What the customer does", 3.15, 1.0); cells(s, 3.15, 1.0, C.surface, C.border, 6);
        rowLabel(s, "How they feel", 4.25, 1.2); emotion(s, 4.25, 1.2, [0.6, 0.72, 0.85, 0.7, 0.9], ["Informed", "Ready", "In control", "Supported", "Reassured"], C.okFg);
        rowLabel(s, "What changes", 5.55, 1.2); cells(s, 5.55, 1.2, C.okBg, C.okBg, 14, 6);
      },
      messaging(s) {
        pill(s, "Restricted pattern · approval needed", W - M - 3.6, 0.42, 3.6, C.warnBg, C.warnFg, 0.34);
        const pw = phone(s, "IPHONE-01", 1.3, 1.85, 4.95, "Message mockup");
        const x = 1.3 + pw + 1.2;
        tx(s, "SMS · T–30 DAYS", { x, y: 1.9, w: 5, h: 0.3, fontSize: T.label, bold: true, color: C.dv[1], charSpacing: 1 });
        [0, 1, 2].forEach(i => callout(s, i + 1, words(3, i * 5 + 2).replace(/^./, c => c.toUpperCase()), lorem(15, i * 6 + 9), x, 2.4 + i * 1.45, W - M - x, C.dv[1]));
        tx(s, "Message copy comes from the owner. Uses MSG-SMS-01 (proposed), which needs approval for each deck.", { x, y: 6.55, w: W - M - x, h: 0.3, fontSize: T.label, color: C.text2 });
      },
      deviceTrio(s) {
        const base = 5.9;
        const ph = 3.4, pw = ph * 664 / 1328; phone(s, "IPHONE-01", 1.0, base - ph, ph, "Phone");
        const th = 3.9, tw = th * 1803 / 2353; phone(s, "IPAD-01", 3.2, base - th, th, "Tablet");
        const lw = 6.4, lh = lw * 1136 / 2016; phone(s, "LAPTOP-01", 6.4, base - lh, lh, "Laptop");
        [["Phone", 1.0, pw], ["Tablet", 3.2, tw], ["Laptop", 6.4, lw]].forEach(([t, x, w]) => tx(s, t, { x, y: base + 0.15, w, h: 0.3, fontSize: T.label, bold: true, color: C.text2, align: "center" }));
        tx(s, lorem(20, 12), { x: M, y: 6.5, w: W - 2 * M, h: 0.4, color: C.text2 });
      },
    };

    /* ---------- title + how to use ---------- */
    const t = pres.addSlide(); t.background = { color: C.inverse };
    pill(t, "Template · lorem ipsum", M, 1.35, 2.5, C.citron, C.inverse, 0.4);
    tx(t, typeLabel, { x: M, y: 1.95, w: 12, h: 1.6, fontFace: F.disp, fontSize: 44, bold: true, color: "FFFFFF" });
    tx(t, lorem(18, 2), { x: M, y: 3.7, w: 8.6, h: 1.0, fontSize: 18, color: C.onPetrol });
    tx(t, `${deck.type} · ${deck.story}`, { x: M, y: 5.0, w: 8, h: 0.35, fontFace: F.mono, fontSize: 12, color: C.onPetrol });
    tx(t, "[Audience] · [Month Year] · Owner: [Name]", { x: M, y: 6.55, w: 8, h: 0.35, fontSize: T.body, color: C.onPetrol });

    const h = pres.addSlide(); h.background = { color: C.bg };
    header(h, "HOW TO USE THIS TEMPLATE", "Two ways to turn this template into your deck");
    footer(h, 2, "HOW-TO · delete before sharing");
    const hw = 5.2;
    card(h, M, 1.95, hw, 2.2);
    tx(h, "OPTION A · EDIT BY HAND", { x: M + 0.3, y: 2.2, w: hw - 0.6, h: 0.3, fontSize: T.label, bold: true, color: C.petrol, charSpacing: 1 });
    tx(h, [{ text: "Replace every lorem ipsum line and dummy number with your content.", options: { bullet: true, breakLine: true } }, { text: "Keep the layouts. Delete slides you have no evidence for.", options: { bullet: true, breakLine: true } }, { text: "Put real screenshots behind the grey phone screens.", options: { bullet: true } }], { x: M + 0.3, y: 2.55, w: hw - 0.6, h: 1.5, paraSpaceAfter: 5 });
    card(h, M, 4.35, hw, 2.35);
    tx(h, "OPTION B · USE YOUR AI TOOL", { x: M + 0.3, y: 4.6, w: hw - 0.6, h: 0.3, fontSize: T.label, bold: true, color: C.petrol, charSpacing: 1 });
    tx(h, "Attach cx-presentation-system.md, then write:", { x: M + 0.3, y: 4.95, w: hw - 0.6, h: 0.3 });
    rr(h, M + 0.3, 5.3, hw - 0.6, 1.2, C.sunken, C.border, 0.08);
    tx(h, `Use ${deck.type} with ${deck.story}${deck.mode ? `, evidence mode ${deck.mode}` : ""}. Here is my objective, audience and data: …`, { x: M + 0.45, y: 5.35, w: hw - 0.9, h: 1.1, fontFace: F.mono, fontSize: T.code, valign: "middle" });
    const lx = M + hw + 0.4, lw = W - M - lx;
    tx(h, "SLIDE SEQUENCE IN THIS TEMPLATE", { x: lx, y: 1.95, w: lw, h: 0.3, fontSize: T.label, bold: true, color: C.text2, charSpacing: 1 });
    const rowH = Math.min(0.36, 4.0 / deck.slides.length);
    deck.slides.forEach((sl, i) => { const y = 2.35 + i * rowH;
      tx(h, String(i + 3).padStart(2, "0"), { x: lx, y, w: 0.45, h: rowH, fontFace: F.mono, fontSize: T.code, color: C.text2, valign: "middle" });
      tx(h, sl[2], { x: lx + 0.5, y, w: lw - 3.1, h: rowH, fontSize: T.body - 1, valign: "middle" });
      tx(h, sl[1], { x: W - M - 2.55, y, w: 2.55, h: rowH, fontFace: F.mono, fontSize: T.code, color: C.petrol, align: "right", valign: "middle" });
      if (i < deck.slides.length - 1) h.addShape(S.LINE, { x: lx, y: y + rowH, w: lw, h: 0, line: { color: C.border, width: 0.5 } }); });
    tx(h, "All copy is lorem ipsum and every number is dummy data.", { x: lx, y: 6.8 - 0.05, w: lw, h: 0.25, fontSize: T.label, color: C.warnFg, bold: true });

    deck.slides.forEach((sl, i) => {
      const [r, id, purpose, o = {}] = sl;
      const title = o.hypothesis ? "Lorem ipsum hypothesis stated as one testable sentence" : lorem(9 + (i % 3), i * 3 + 1, "");
      const s = base(i + 3, purpose, id + (o.ids ? " · " + o.ids : ""), title);
      R[r](s, Object.assign({ seed: i }, o));
    });
    return { pres, deck };
  }

  const API = { DECKS, FRAMES, ICON_NAMES, ICON_COLORS, build };
  if (typeof module !== "undefined" && module.exports) module.exports = API; else root.CXDeck = API;
})(typeof window !== "undefined" ? window : this);

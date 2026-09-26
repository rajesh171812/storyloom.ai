# Storyloom AI Presentation — starter package v0.2

**Storyloom AI** · *Your story. Structured. Designed. Presented.*

Everything you need to assemble a governed presentation with Claude or any other AI tool. **Using Claude? Open `START_HERE.md` first.**

Owner: Rajesh · Updated 26 September 2026 · Foundation: Storyloom Design System

## What's inside

```text
Storyloom_AI_Starter_v0.2/
├── START_HERE.md                      ← open first: how to use this with Claude, copy-paste prompts
├── README.md                          ← you are here
├── ai-upload-pack/                    ← the 3 files to upload to a Claude chat or Project first
├── spec/
│   ├── storyloom-ai-presentation.md   ← the governing spec
│   └── storyloom-ai-registry.json     ← the same system as machine-readable IDs and statuses
├── templates/                         ← 7 lorem-ipsum template decks, one per presentation type / evidence mode
├── tools/                             ← cxdeck.js, the generator behind the templates, plus a rebuild script
├── icons/                             ← 111 icons × 3 variants (rounded default, rounded-solid, outline), SVG + 256 px PNG
│   └── icons.json                     ← ID → Lucide name, category and file paths
├── tokens/
│   ├── tokens.css                     ← Storyloom Design System color, type, spacing, radius tokens (light + dark)
│   └── bundle.css                     ← bl-* component styles plus cx-* presentation classes
├── device-frames/                     ← approved transparent PNGs (screens sit BEHIND the frame)
│   ├── A-DEV-IPHONE-01_iphone-15-pro_portrait_transparent.png   Approved · default mobile
│   ├── A-DEV-IPHONE-02_iphone-notch_portrait_transparent.png    Conditional · notch-era captures, RCS
│   ├── A-DEV-IPAD-01_ipad-pro_portrait_transparent.png          Approved
│   ├── A-DEV-IPAD-02_ipad-pro_landscape_transparent.png         Approved
│   ├── A-DEV-LAPTOP-01_macbook-air_front_transparent.png        Approved · desktop web and app
│   ├── A-DEV-BROWSER-01_browser-window_transparent.png          Approved · web screens
│   └── proposed-drafts/                                         Restricted · needs approval per use
│       └── A-DEV-DESKTOP-01_monitor_front_transparent_DRAFT.png
└── examples/
    ├── Cologuard_Rescreen_Concept_v3.pptx   ← reference deck built with this system (dummy data)
    └── slides/                              ← the same deck as 1280×720 images
```

## Start in five steps

1. **Give the AI the spec.** Upload the files in `ai-upload-pack/` (or add them to a Claude Project) before you describe the deck. `START_HERE.md` has ready-made prompts.
2. **Share your intent (STEP-01).** Objective, audience, context, and whatever data, research, quotes and screenshots you have.
3. **Approve the story (GATE-01).** The AI must return a Story Proposal first. Only an explicit "approved" unlocks the build. Silence or partial feedback is not approval.
4. **Let it assemble from IDs (STEP-04 to STEP-06).** Every slide maps to `SLD-*`, `CMP-*`, `VIZ-*`, `DEVICE-*`, `MSG-*` and `ICN-*` IDs. Anything Restricted or Missing is raised as a GATE-02 exception.
5. **Review and sign off (GATE-03).** You get a `.pptx` plus a report of the story used, exceptions and gaps.

## Using the device frames

- Place the real screenshot first, then the frame on top. The screen area is transparent.
- Fill the measured screen area exactly (percent of the frame image: left, top, width, height):

| Frame | Size (px) | Screen area |
|---|---|---|
| A-DEV-IPHONE-01 | 664 × 1328 | 4.97, 2.18, 90.21, 95.63 |
| A-DEV-IPHONE-02 | 600 × 1210 | 6.0, 2.56, 88.17, 94.88 |
| A-DEV-IPAD-01 | 1803 × 2353 | 4.22, 3.27, 91.51, 93.54 |
| A-DEV-IPAD-02 | 2352 × 1803 | 3.15, 4.1, 93.62, 91.63 |
| A-DEV-LAPTOP-01 | 2016 × 1136 | 12.3, 5.81, 75.5, 84.15 |
| DESKTOP-01 draft | 1600 × 1156 | 2.25, 3.11, 95.5, 73.7 |
| A-DEV-BROWSER-01 | 3084 × 1962 | 3.31, 10.7, 93.39, 81.55 |

- One frame family per slide, front-facing only, never stretched.
- The desktop draft is **Restricted**: use it only with the owner's approval for that deck, and log it as an exception.

## Fonts

Install Bricolage Grotesque, Hanken Grotesk and IBM Plex Mono (all free on Google Fonts) on any machine that opens the decks, or PowerPoint will substitute other fonts.

## Keep it in sync

The spec, the registry JSON and the documentation site describe the same system. When you add or change an element, give it an ID and a status (new entries start Restricted), and update all three together.

The editable example deck is `examples/Cologuard_Rescreen_Concept_v3.pptx`; `examples/slides/` has the same deck as images.

# Storyloom AI

**Your story. Structured. Designed. Presented.**

Storyloom AI Presentation is the governed system for building presentations with Claude. It includes story structures, slide templates, components, device frames, story rules and the **Storyloom Design System**.

**Documentation site:** https://YOUR-USERNAME.github.io/cx-presentation-system/ *(replace with your GitHub Pages link)*

## Download

| File | What it is |
|---|---|
| [Storyloom_AI_Starter_v0.2.zip](downloads/Storyloom_AI_Starter_v0.2.zip) | Everything needed to build a deck with Claude: `START_HERE.md`, the `.md` spec, the registry `.json`, 7 template decks, 111 icons, device frames, tokens and the sample deck |
| [Storyloom_Design_System.zip](downloads/Storyloom_Design_System.zip) | Design system source: tokens, components, guidelines |
| [Cologuard_Rescreen_Concept_v3.pptx](downloads/Cologuard_Rescreen_Concept_v3.pptx) | Sample deck built with the system (dummy data) |
| [downloads/templates/](downloads/templates/) | The 7 template decks as separate .pptx files |

You can also read the spec files directly:

- [files/START_HERE.md](files/START_HERE.md): how to use the system with Claude, with copy-paste prompts
- [files/storyloom-ai-presentation.md](files/storyloom-ai-presentation.md): the governing spec
- [files/storyloom-ai-registry.json](files/storyloom-ai-registry.json): every ID and status, machine-readable

## Build a deck with Claude in 3 steps

1. Download the starter zip and unzip it.
2. In Claude, create a Project and add the three files in `ai-upload-pack/` to its knowledge. For a one-off deck, upload them to a chat instead.
3. Paste the deck prompt from `START_HERE.md`. Claude proposes the story first and builds the `.pptx` only after you reply "approved".

## Brand palette (v0.2)

Deep navy `#000075` · Royal blue `#2E4AED` · Periwinkle `#97A3F5` · Pale lavender `#D6DBFC` · White `#FFFFFF` · Focus blue `#0D19FB`

## Credits

- Icons: [Lucide](https://lucide.dev) (ISC License)
- Fonts: Bricolage Grotesque, Hanken Grotesk and IBM Plex Mono via Google Fonts (SIL Open Font License)
- Libraries: [PptxGenJS](https://github.com/gitbrent/PptxGenJS) (MIT), [JSZip](https://stuk.github.io/jszip/) (MIT)

Owner: Rajesh · v0.2

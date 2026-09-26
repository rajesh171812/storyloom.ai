# tools/

`cxdeck.js` generated every deck in `templates/`, with pptxgenjs 4. Use it as the reference for layout when building a new deck:

- `C`: the color constants. `petrol` is Royal blue 2E4AED, `citron` is Pale lavender D6DBFC and `inverse` is Deep navy 000075. The key names were kept from an earlier version.
- `F` and `T`: fonts and type sizes in points.
- `W = 13.333` and `M = 0.5`: slide width and margin in inches.
- `header()`, `footer()`, `base()`, and the per-slide builders (`execSummary`, `kpiGrid`, `trend`, `journey…`): the coordinates each template slide uses.
- `DECKS`: every template deck, with its slide order and IDs.

`build-templates.js` rebuilds all 7 templates into `tools/out/`, which is a quick check that the generator runs:

```bash
cd tools && npm install pptxgenjs@4 && node build-templates.js
```

`deck-icons/` holds the icon PNGs the generator draws from: 20 icons in white, royal blue and success green. For new decks, use the full set in `../icons/`.

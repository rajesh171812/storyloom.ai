// Rebuilds the 7 template decks. Run from this folder:
//   npm install pptxgenjs@4 && node build-templates.js
const PptxGen = require('pptxgenjs'); const fs = require('fs'); const path = require('path');
const X = require('./cxdeck.js');
const b64 = f => 'image/png;base64,' + fs.readFileSync(f).toString('base64');
const A = {
  icon: (n, c) => { const f = path.join(__dirname, 'deck-icons', `${n}-${c}.png`); return fs.existsSync(f) ? b64(f) : null; },
  frame: k => { const f = X.FRAMES[k].file; const p = [path.join(__dirname, '../device-frames', f), path.join(__dirname, '../device-frames/proposed-drafts', f)].find(fs.existsSync); return b64(p); },
};
fs.mkdirSync(path.join(__dirname, 'out'), { recursive: true });
(async () => { for (const d of X.DECKS) { const { pres } = X.build(PptxGen, d.key, A); await pres.writeFile({ fileName: path.join(__dirname, 'out', d.file) }); console.log('wrote', d.file); } })();

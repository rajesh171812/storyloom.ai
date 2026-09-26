# Storyloom AI Presentation — v0.2

**Storyloom AI** · *Your story. Structured. Designed. Presented.*

Updated 2026-09-26 · Owner Rajesh · Foundation: Storyloom Design System (Storyloom palette tokens, type, icons, photography rules)
Canvas: 16:9 widescreen, 13.333 x 7.5 in (1280 x 720 px design canvas) · File naming: `[ProjectName]_[PresentationType]_v[N].pptx  e.g. CancerCare_Experiment_Readout_v1.pptx`

This is the governing spec an AI (Claude or any other tool) reads before assembling a presentation. The visual overview is the Storyloom AI Presentation documentation site; `START_HERE.md` in the starter package explains how to use this spec with Claude. Every element has an ID and a governance status. Use only IDs listed here.

## Operating principle

- The AI decides WHAT the audience needs to understand and HOW the story progresses.
- The owner must explicitly approve the story before anything is blueprinted or assembled.
- This system decides HOW the approved story looks.
- The human reviews and approves the final deck.
- Never jump from input to slides. Understand → propose story → get explicit approval → blueprint → assemble from approved IDs → governance check → final review → .pptx.


**Dummy data.** Never invent data and present it as real. Placeholder numbers are allowed only when the owner says so. Label them "DUMMY DATA" on the slide and give them a placeholder source line. In the Story Proposal, write unknown figures as [brackets].

**Regulated wording.** Never invent clinical, legal or regulatory wording anywhere in the deck, including slide copy, not only message mockups. Use placeholders and list them as content gaps.
## Workflow and gates

- **STEP-01 User intent**: Owner shares objective, audience, context, data, research, quotes, screenshots.
- **STEP-02 AI understanding**: Why, for whom, what decision, what evidence exists, level of detail.
- **STEP-03 Story strategy**: Pick a presentation type and story structure; draft the narrative.
- **GATE-01 Story approval** 🔒: Story Proposal goes to the owner. Only an explicit approval unlocks the next step. Silence, partial feedback or implied approval is not approval.
- **STEP-04 Presentation blueprint**: Map every approved slide to template, component, visualization, asset and representation IDs.
- **STEP-05 Governed assembly**: Build the .pptx from approved elements only.
- **STEP-06 Governance check**: Story, design, assets, visualization, content and PowerPoint QC.
- **GATE-03 Final human review** 🔒: Owner reviews, edits and signs off the deck.
- **STEP-07 Final presentation**: Downloadable .pptx with name, slide count, story used, exceptions and gaps.
- **GATE-02 Governance exception** (any time): Raised at any step when a needed element is missing or Restricted. Assembly of that element pauses until a human approves or substitutes.

Approval rules: silence, incomplete feedback or implied approval are NOT approval. Owner may change objective, audience, type, narrative, sections or sequence, or request an alternative; re-present the Story Proposal after changes. After approval the story is locked; any material narrative change returns to GATE-01.

### Story Proposal (output of STEP-03, presented at GATE-01)

```text
STORY PROPOSAL
Presentation Objective:
Audience:
Recommended Presentation Type: TPL-*
Story Strategy: STORY-*
Core Message:
Proposed Narrative: beginning → middle → conclusion
Proposed Slide Sequence:
01 — [slide purpose]
...
Why This Story:
Key Evidence:
Potential Content Gaps:
Potential Governance Gaps: GAP-* / missing IDs
```

### Presentation Blueprint (only after explicit approval)

```text
PRESENTATION BLUEPRINT
Objective:
Audience:
Presentation Type: TPL-*
Approved Story Strategy:
Key Message:
Slides: 01 — purpose → SLD-* (components CMP-*, viz VIZ-*, assets A-*/ICN-*, representation DEVICE-*/MSG-*)
Templates:
Components:
Visualizations:
Assets:
Device / UI Representations:
Content Gaps:
Governance Exceptions: (→ GATE-02)
```

## Governance levels

- **Approved** (`approved`): AI may use it automatically.
- **Conditional** (`conditional`): AI may use it only when the stated condition is met.
- **Restricted** (`restricted`): Needs human approval for each use. Proposed drafts start here.
- **Deprecated** (`deprecated`): Never used in new presentations.
- **Missing** (`gap`): Needed but not in the library. AI flags it (GATE-02) and never improvises it.

## Representation decision hierarchy

1. **Approved existing asset** — Reuse it as is.
2. **Approved component** — Assemble the experience from it.
3. **Approved representation pattern** — Follow the established pattern.
4. **Similar approved pattern** — Adapt the closest one without changing its visual language.
5. **Nothing approved exists** — Flag the gap and request approval (GATE-02).

## Presentation types

### TPL-PERFORMANCE-01 · Performance Readout (Approved)

Purpose: Communicate performance, progress, outcomes and key business or CX metrics.  
Select when: Performance data + business metrics · Story: `STORY-PERF-01`

01. Executive summary → `SLD-EXEC-SUMMARY-01`
02. Performance at a glance → `SLD-KPI-GRID-01`
03. KPI / metric overview → `SLD-KPI-TREND-01`
04. Trend over time → `SLD-CHART-FOCUS-01`
05. Key drivers → `SLD-3COL-01`
06. Areas of opportunity → `SLD-MATRIX-01`
07. Recommendations / next steps → `SLD-RECOMMEND-01`

### TPL-EXPERIMENT-01 · Experiment Readout (Approved)

Purpose: Take an experiment from hypothesis through outcome and learning.  
Select when: Hypothesis + test + results · Story: `STORY-EXP-01`

01. Experiment overview → `SLD-EXEC-SUMMARY-01`
02. Problem / opportunity → `SLD-INSIGHT-01`
03. Hypothesis → `SLD-STATEMENT-01`
04. Experiment design → `SLD-PROCESS-01`
05. Variants / experience → `SLD-VARIANTS-01`
06. Results → `SLD-KPI-TREND-01`
07. What we learned → `SLD-3COL-01`
08. Implications → `SLD-2COL-01`
09. Next steps → `SLD-NEXT-STEPS-01`
- Evidence mode — Quantitative / A-B: VIZ-VARIANTS-01, VIZ-KPI-01, VIZ-BAR-01
- Evidence mode — Behavioral: VIZ-FUNNEL-01, VIZ-TREND-01
- Evidence mode — Qualitative / feedback: CMP-QUOTE-01, VIZ-CLUSTER-01
- Evidence mode — Mixed: SLD-2COL-01: metric left, quote right

### TPL-CAMPAIGN-01 · Campaign / Concept (Approved)

Purpose: Present a CX concept, campaign, creative direction or new experience.  
Select when: New idea + creative direction · Story: `STORY-CONCEPT-01`

01. Context → `SLD-STATEMENT-01`
02. Opportunity → `SLD-INSIGHT-01`
03. Audience / customer → `SLD-PERSONA-01`
04. Insight → `SLD-QUOTE-01`
05. Concept → `SLD-DEVICE-HERO-01`
06. Experience / journey → `SLD-JOURNEY-01`
07. Key touchpoints → `SLD-MESSAGING-01`
08. Creative direction → `SLD-DEVICE-TRIO-01`
09. Supporting evidence → `SLD-2COL-01`
10. Expected impact → `SLD-KPI-GRID-01`
11. Next steps → `SLD-NEXT-STEPS-01`

### TPL-JOURNEY-01 · Journey Presentation (Approved)

Purpose: Show a customer journey, its pain points, opportunities and future state.  
Select when: Customer experience across stages · Story: `STORY-JOURNEY-01`

01. Journey overview → `SLD-EXEC-SUMMARY-01`
02. Customer / audience → `SLD-PERSONA-01`
03. Journey stages → `SLD-JOURNEY-01`
04. Current-state experience → `SLD-JOURNEY-01`
05. Pain points / friction → `SLD-3COL-01`
06. Needs / insights → `SLD-QUOTE-01`
07. Opportunities → `SLD-3COL-01`
08. Future-state journey → `SLD-JOURNEY-01`
09. Experience principles → `SLD-3COL-01`
10. Priority opportunities → `SLD-MATRIX-01`
11. Next steps → `SLD-NEXT-STEPS-01`

If several types apply, pick the primary structure and borrow approved patterns from the secondary. Adapt slide count and order to the evidence; every slide must have a purpose.

Future types (add as new TPL-* entries reusing existing templates): Research Readout, VOC Readout, Usability Testing Readout, Design Review, CX Strategy, Product Strategy, Executive Briefing, Workshop Readout, Competitive Analysis, Service Blueprint, Persona Presentation, Business Case, Product Launch, Design Proposal, Stakeholder Alignment, Executive Decision

## Story structures

- `STORY-CPIE-01` Default CX narrative (Approved): Context → Problem → Insight → Evidence → Opportunity → Solution → Impact → Action. Default when no type-specific structure fits better.
- `STORY-PERF-01` Performance (Approved): Headline → Status → Trend → Drivers → Opportunity → Action. Metric-led readouts.
- `STORY-EXP-01` Experiment (Approved): Problem → Hypothesis → Design → Evidence → Learning → Action. Any test with a hypothesis.
- `STORY-CONCEPT-01` Concept (Approved): Context → Insight → Idea → Experience → Impact → Action. New ideas and creative direction.
- `STORY-JOURNEY-01` Journey (Approved): Today → Friction → Needs → Future state → Priorities → Action. Stage-based experiences.
- `STORY-SCQA-01` Executive answer-first (Conditional): Situation → Complication → Question → Answer. Only for executive audiences with 5 slides or fewer.

## Slide templates

| ID | Name | Status | Purpose / condition | Built from |
|---|---|---|---|---|
| `SLD-TITLE-01` | Title | Approved | Open the deck: title, subtitle, date, owner. | CMP-TITLE-01 |
| `SLD-SECTION-01` | Section divider | Approved | Mark a story chapter in decks of 10+ slides. | CMP-SECTION-01 |
| `SLD-EXEC-SUMMARY-01` | Executive summary | Approved | Headline plus three supporting points and the ask. | CMP-TITLE-01, CMP-KPI-01, CMP-CALLOUT-01 |
| `SLD-STATEMENT-01` | Big statement | Approved | One hypothesis, insight or principle, stated large. | CMP-CALLOUT-01 |
| `SLD-KPI-GRID-01` | KPI grid | Approved | Three or four headline metrics at a glance. | CMP-KPI-01, CMP-METRIC-01 |
| `SLD-KPI-TREND-01` | KPI + trend | Approved | One metric, its movement over time and what it means. | CMP-KPI-01, VIZ-TREND-01, CMP-INSIGHT-01 |
| `SLD-CHART-FOCUS-01` | Chart focus | Approved | A single chart with takeaway headline and annotation. | VIZ-BAR-01, CMP-CALLOUT-01 |
| `SLD-INSIGHT-01` | Insight + evidence | Approved | Lead with the insight; evidence cards support it. | CMP-INSIGHT-01, CMP-EVIDENCE-01 |
| `SLD-QUOTE-01` | Customer voice | Approved | One to three verbatim quotes around a theme. | CMP-QUOTE-01, CMP-CUSTOMER-01 |
| `SLD-PERSONA-01` | Customer / persona | Approved | Who the audience is: needs, behaviors, context. | CMP-PERSONA-01, CMP-CUSTOMER-01 |
| `SLD-2COL-01` | Two column | Approved | Pair a message with its evidence, or two related ideas. | CMP-2COL-01, CMP-TEXT-01 |
| `SLD-3COL-01` | Three column | Conditional | Drivers, learnings, principles or opportunities. Condition: Exactly three parallel items, each 40 words or fewer. | CMP-3COL-01, CMP-INSIGHT-01 |
| `SLD-BEFORE-AFTER-01` | Before / after | Approved | Current vs. redesigned experience or metric. | CMP-BEFORE-AFTER-01, CMP-SCREENSHOT-01 |
| `SLD-VARIANTS-01` | Experiment variants | Approved | Control vs. variant(s) with screens and results. | VIZ-VARIANTS-01, DEVICE-IPHONE-01 |
| `SLD-JOURNEY-01` | Journey map | Approved | Stages with actions, emotions, pain points, opportunities. | CMP-JOURNEY-01, VIZ-JOURNEY-01 |
| `SLD-PROCESS-01` | Process / design | Approved | Sequential steps such as experiment setup or a service flow. | CMP-PROCESS-01 |
| `SLD-TIMELINE-01` | Timeline / roadmap | Approved | Dated milestones or phased rollout. | CMP-TIMELINE-01 |
| `SLD-MATRIX-01` | Priority matrix | Approved | Opportunities placed by impact and effort. | VIZ-PRIORITY-01 |
| `SLD-DEVICE-HERO-01` | Device hero | Approved | One product screen in an approved frame, with 2 to 3 callouts. | DEVICE-IPHONE-01, CMP-CALLOUT-01 |
| `SLD-DEVICE-TRIO-01` | Cross-device | Approved | The same experience on phone, tablet and laptop. | DEVICE-IPHONE-01, DEVICE-IPAD-01, DEVICE-LAPTOP-01 |
| `SLD-MESSAGING-01` | Messaging touchpoint | Restricted | SMS, RCS or notification moments in a journey. Condition: Depends on MSG-* patterns that are still proposed. | MSG-IOS-01, CMP-CALLOUT-01 |
| `SLD-RECOMMEND-01` | Recommendations | Approved | Two to four actions, each tied to evidence. | CMP-RECOMMENDATION-01 |
| `SLD-NEXT-STEPS-01` | Next steps | Approved | Owner, action and date for each step. | CMP-NEXTSTEP-01, CMP-TABLE-01 |
| `SLD-BULLETS-01` | Bullet list | Approved | Up to 6 short bullets when cards or columns do not fit the content. | CMP-BULLETS-01 |

## Components

| ID | Name | Group | Status | Use |
|---|---|---|---|---|
| `CMP-TITLE-01` | Title block | Structure | Approved | Slide headline stated as the takeaway, plus optional kicker. |
| `CMP-SECTION-01` | Section header | Structure | Approved | Chapter number and name on a Deep navy ground. |
| `CMP-TEXT-01` | Text block | Structure | Approved | Short paragraph, 60 words max. |
| `CMP-2COL-01` | 2-column layout | Structure | Approved | Message + evidence, or two parallel ideas. |
| `CMP-3COL-01` | 3-column layout | Structure | Conditional | Exactly three parallel items. |
| `CMP-CALLOUT-01` | Callout | Structure | Approved | Annotate a chart or screen with one takeaway. |
| `CMP-KPI-01` | KPI card | Data | Approved | One headline number, label and period. |
| `CMP-METRIC-01` | Metric card + delta | Data | Approved | Number with change vs. baseline, icon and word for direction. |
| `CMP-TABLE-01` | Comparison table | Data | Approved | 5+ records across the same attributes. |
| `CMP-INSIGHT-01` | Insight card | Evidence | Approved | One finding with its implication. |
| `CMP-QUOTE-01` | Quote card | Evidence | Approved | Verbatim quote with attributed segment, never invented. |
| `CMP-EVIDENCE-01` | Evidence card | Evidence | Approved | Source, method and sample size behind a claim. |
| `CMP-CUSTOMER-01` | Customer card | Evidence | Approved | Segment, context and top need. |
| `CMP-PERSONA-01` | Persona block | Evidence | Conditional | Only when a research-backed persona exists. |
| `CMP-IMAGE-01` | Image block | Media | Approved | Photography: black and white, 16:9, 4:3, 3:4 or 1:1. |
| `CMP-SCREENSHOT-01` | Screenshot frame | Media | Approved | Real product capture placed inside an approved DEVICE-* frame. |
| `CMP-JOURNEY-01` | Journey map | Flow | Approved | Stages across; actions, feelings, pains, opportunities down. |
| `CMP-PROCESS-01` | Process diagram | Flow | Approved | 3 to 6 sequential steps. |
| `CMP-FLOW-01` | Flow diagram | Flow | Conditional | Branching logic, 8 nodes max. |
| `CMP-TIMELINE-01` | Timeline | Flow | Approved | Dated milestones, left to right. |
| `CMP-BEFORE-AFTER-01` | Before / after | Flow | Approved | Same frame, same scale, left = before. |
| `CMP-RECOMMENDATION-01` | Recommendation block | Action | Approved | Action, rationale, evidence link. |
| `CMP-NEXTSTEP-01` | Next-step block | Action | Approved | Action, owner, date. |
| `CMP-CONCEPT-01` | Concept card | Action | Approved | Concept name, one-line idea, key visual. |
| `CMP-BULLETS-01` | Bullet list | Structure | Approved | Up to 6 short bullets. Prefer insight cards when each point needs its own evidence. |

## Visualization patterns

| ID | Name | Status | Use when the data means |
|---|---|---|---|
| `VIZ-KPI-01` | KPI | Approved | A single number that matters. |
| `VIZ-TREND-01` | Trend line | Approved | A metric changing over time. |
| `VIZ-BAR-01` | Bar chart | Approved | Comparing categories. |
| `VIZ-COMPARISON-01` | Comparison | Approved | Two or three things side by side. |
| `VIZ-DISTRIBUTION-01` | Distribution | Conditional | Spread of values. Needs 30+ data points. |
| `VIZ-FUNNEL-01` | Funnel | Approved | Drop-off across ordered steps. |
| `VIZ-JOURNEY-01` | Journey | Approved | Experience across customer stages. |
| `VIZ-PROCESS-01` | Process | Approved | Sequential steps. |
| `VIZ-TIMELINE-01` | Timeline | Approved | Events on dates. |
| `VIZ-MATRIX-01` | 2x2 matrix | Approved | Items on two dimensions. |
| `VIZ-BEFORE-AFTER-01` | Before / after | Approved | Change from one state to another. |
| `VIZ-PRIORITY-01` | Priority matrix | Approved | Opportunities by impact and effort. |
| `VIZ-RELATIONSHIP-01` | Relationship | Conditional | How parts connect. 8 nodes max. |
| `VIZ-CLUSTER-01` | Insight cluster | Approved | Research themes grouped by affinity. |
| `VIZ-VARIANTS-01` | Variant comparison | Approved | Control vs. variants with lift. |
| `VIZ-PIE-01` | Pie / donut | Approved | Part-to-whole with 2 to 5 slices that add up to 100%. |

## Visualization decision matrix

Choose by the meaning of the information, never by what is available.

| Content | Pattern | IDs |
|---|---|---|
| Single important metric | KPI card | CMP-KPI-01 · VIZ-KPI-01 |
| Metric over time | Line chart | VIZ-TREND-01 |
| Category comparison | Bar chart | VIZ-BAR-01 |
| Qualitative insight | Insight / quote card | CMP-INSIGHT-01 · CMP-QUOTE-01 |
| Customer stages | Journey | VIZ-JOURNEY-01 · CMP-JOURNEY-01 |
| Sequential process | Process flow | VIZ-PROCESS-01 · CMP-PROCESS-01 |
| Before vs. after | Comparison | VIZ-BEFORE-AFTER-01 |
| Multiple dimensions | Matrix | VIZ-MATRIX-01 |
| Prioritized opportunities | Priority matrix | VIZ-PRIORITY-01 |
| Multiple concepts | Concept cards | CMP-CONCEPT-01 |
| User experience | Journey / experience map | SLD-JOURNEY-01 |
| Research themes | Insight cluster | VIZ-CLUSTER-01 |
| Experiment variants | Variant comparison | VIZ-VARIANTS-01 |
| Recommendations | Recommendation cards | CMP-RECOMMENDATION-01 |
| Customer communication | Messaging mockup | MSG-IOS-01 · MSG-SMS-01 · MSG-RCS-01 |
| Product experience | Device frame | DEVICE-IPHONE-01 · DEVICE-IPAD-01 |
| Web experience | Browser frame | DEVICE-BROWSER-01 |
| Mobile experience | Mobile device frame | DEVICE-IPHONE-01 |

## Device representations

| ID | Name | Asset file | Status | Note |
|---|---|---|---|---|
| `DEVICE-IPHONE-01` | iPhone 15 Pro | `A-DEV-IPHONE-01_iphone-15-pro_portrait_transparent.png` | Approved | Default mobile frame. Portrait. |
| `DEVICE-IPHONE-02` | iPhone (notch) | `A-DEV-IPHONE-02_iphone-notch_portrait_transparent.png` | Conditional | Only when the capture came from a notch-era device. Never mix with IPHONE-01 on one slide. |
| `DEVICE-IPAD-01` | iPad Pro portrait | `A-DEV-IPAD-01_ipad-pro_portrait_transparent.png` | Approved | Tablet, portrait layouts. |
| `DEVICE-IPAD-02` | iPad Pro landscape | `A-DEV-IPAD-02_ipad-pro_landscape_transparent.png` | Approved | Tablet, landscape and dashboards. |
| `DEVICE-LAPTOP-01` | MacBook Air | `A-DEV-LAPTOP-01_macbook-air_front_transparent.png` | Approved | Desktop web and app screens. |
| `DEVICE-BROWSER-01` | Browser window | `A-DEV-BROWSER-01_browser-window_transparent.png` | Approved | Web screens and web apps. Transparent content area; the screenshot sits behind the frame. |
| `DEVICE-DESKTOP-01` | Desktop monitor | — | Restricted (proposed draft) | Drafted from Storyloom Design System tokens. Needs approval before use. |

Frame rules:
- Screens sit behind the frame, filling the measured screen area exactly. Never scale a frame non-proportionally.
- One frame family per slide. Same product on several slides: same frame every time.
- Front-facing only. No added perspective, tilt or extra shadow unless the frame file carries it.
- Real screenshots only. Do not redraw product UI inside a frame.

Screen areas (percent of frame image: left, top, width, height), measured from the transparent PNGs:
- `A-DEV-IPAD-01` 1803×2353px → screen [4.22, 3.27, 91.51, 93.54]
- `A-DEV-IPAD-02` 2352×1803px → screen [3.15, 4.1, 93.62, 91.63]
- `A-DEV-IPHONE-01` 664×1328px → screen [4.97, 2.18, 90.21, 95.63]
- `A-DEV-IPHONE-02` 600×1210px → screen [6.0, 2.56, 88.17, 94.88]
- `A-DEV-LAPTOP-01` 2016×1136px → screen [12.3, 5.81, 75.5, 84.15]
- `A-DEV-BROWSER-01` 3084×1962px → screen [3.31, 10.7, 93.39, 81.55]

Folder housekeeping:
- `Device - Macbook Air.png` — Deprecated: Unnamed duplicate of A-DEV-LAPTOP-01. Rename or remove.
- `A-DEV-IPHONE-01_iphone-15-pro_portrait.png` — Conditional: Non-transparent variant. Use only on white slides.
- `originals/*_with-shadow_original.png` — Conditional: Source files with baked shadow. Not for direct placement.

## Messaging representations

| ID | Name | Frame | Status | Note |
|---|---|---|---|---|
| `MSG-IOS-01` | iOS Messages (iMessage) | DEVICE-IPHONE-01 | Restricted (proposed draft) | Blue outgoing bubbles, contact header, timestamp, delivered state. |
| `MSG-SMS-01` | SMS on iOS | DEVICE-IPHONE-01 | Restricted (proposed draft) | Green bubbles and 'Text Message' label, the native SMS cue. |
| `MSG-RCS-01` | RCS business message | DEVICE-IPHONE-02 | Restricted (proposed draft) | Verified sender, rich card, suggested replies. Shown on DEVICE-IPHONE-02. |
| `MSG-NOTIFICATION-01` | Lock-screen notification | DEVICE-IPHONE-01 | Restricted (proposed draft) | Stacked notifications over a neutral lock screen. |

Messaging rules:
- Native platform colors (bubble blue, SMS green, system grey) are allowed inside MSG-* only. Everything around them uses Storyloom Design System tokens.
- Brand name, sender and message copy come from the owner. Never invent regulated or clinical wording.
- Time reads 9:41. No real phone numbers or personal data.

## Icons

Lucide (outline, filled, rounded). 24px grid, stroke 1.75, currentColor, sizes 16 / 20 / 24 / 32. Never the only carrier of meaning. No other icon sets. IDs are ICN- plus the Lucide name; the 18 core CX icons keep their short IDs.

Variants (same icon, same ID stem). Rounded is the default on slides and templates:
- Outline `ICN-*`: Lucide outline, stroke 1.75, currentColor. Use inline: inside pills, badges, table cells and small labels.
- Rounded `ICN-*-RD` (default): Default on slides and templates. Icon centered on a 40px tile with radius-lg (12), color-state-selected-bg fill, icon in color-action-primary-bg.
- Rounded solid `ICN-*-RS`: Same tile filled with color-action-primary-bg, icon in color-action-primary-text. Use for one emphasis point per slide.

Library by category (ID → Lucide name). An icon listed in several categories keeps one ID.

**Core CX set** (18): `ICN-TREND-UP` (trending-up), `ICN-CHART` (bar-chart), `ICN-TARGET` (target), `ICN-FLASK` (flask), `ICN-IDEA` (lightbulb), `ICN-MAP` (map), `ICN-USERS` (users), `ICN-QUOTE` (message), `ICN-PHONE` (smartphone), `ICN-MONITOR` (monitor), `ICN-CHECK` (check), `ICN-ARROW` (arrow-right), `ICN-ALERT` (alert), `ICN-LOCK` (lock), `ICN-SHIELD` (shield), `ICN-CLOCK` (clock), `ICN-FLAG` (flag), `ICN-LAYERS` (layers)

**Navigation & UI** (13): `ICN-MENU` (menu), `ICN-X` (x), `ICN-CHEVRON-DOWN` (chevron-down), `ICN-CHEVRON-UP` (chevron-up), `ICN-CHEVRON-LEFT` (chevron-left), `ICN-CHEVRON-RIGHT` (chevron-right), `ICN-ARROW-LEFT` (arrow-left), `ICN-ARROW` (arrow-right), `ICN-EXTERNAL-LINK` (external-link), `ICN-MORE-HORIZONTAL` (more-horizontal), `ICN-MORE-VERTICAL` (more-vertical), `ICN-PLUS` (plus), `ICN-MINUS` (minus)

**Actions** (15): `ICN-CHECK` (check), `ICN-CHECK-CIRCLE` (check-circle), `ICN-CIRCLE` (circle), `ICN-X-CIRCLE` (x-circle), `ICN-EDIT` (edit), `ICN-COPY` (copy), `ICN-TRASH-2` (trash-2), `ICN-DOWNLOAD` (download), `ICN-UPLOAD` (upload), `ICN-SHARE-2` (share-2), `ICN-SEND` (send), `ICN-REFRESH-CW` (refresh-cw), `ICN-SEARCH` (search), `ICN-FILTER` (filter), `ICN-SETTINGS` (settings)

**Content & communication** (10): `ICN-MESSAGE-CIRCLE` (message-circle), `ICN-MESSAGES-SQUARE` (messages-square), `ICN-MAIL` (mail), `ICN-BELL` (bell), `ICN-MEGAPHONE` (megaphone), `ICN-BOOKMARK` (bookmark), `ICN-STAR` (star), `ICN-HEART` (heart), `ICN-LINK` (link), `ICN-PAPERCLIP` (paperclip)

**Business, CX & UX** (17): `ICN-USERS` (users), `ICN-USER` (user), `ICN-USER-PLUS` (user-plus), `ICN-BUILDING-2` (building-2), `ICN-BRIEFCASE` (briefcase), `ICN-TARGET` (target), `ICN-IDEA` (lightbulb), `ICN-GOAL` (goal), `ICN-LAYERS` (layers), `ICN-WORKFLOW` (workflow), `ICN-ROUTE` (route), `ICN-GIT-BRANCH` (git-branch), `ICN-PUZZLE` (puzzle), `ICN-ROCKET` (rocket), `ICN-HANDSHAKE` (handshake), `ICN-CLIPBOARD` (clipboard), `ICN-LIST-CHECKS` (list-checks)

**Analytics & data** (12): `ICN-BAR-CHART-3` (bar-chart-3), `ICN-LINE-CHART` (line-chart), `ICN-PIE-CHART` (pie-chart), `ICN-CHART-NO-AXES-COMBINED` (chart-no-axes-combined), `ICN-TREND-UP` (trending-up), `ICN-TRENDING-DOWN` (trending-down), `ICN-ACTIVITY` (activity), `ICN-GAUGE` (gauge), `ICN-PERCENT` (percent), `ICN-HASH` (hash), `ICN-SIGMA` (sigma), `ICN-DATABASE` (database)

**Research & discovery** (11): `ICN-SEARCH` (search), `ICN-SCAN-SEARCH` (scan-search), `ICN-EYE` (eye), `ICN-MOUSE-POINTER-2` (mouse-pointer-2), `ICN-MESSAGE-SQUARE-QUOTE` (message-square-quote), `ICN-MIC` (mic), `ICN-FILE-SEARCH` (file-search), `ICN-CLIPBOARD-LIST` (clipboard-list), `ICN-NOTEBOOK-TABS` (notebook-tabs), `ICN-MAP` (map), `ICN-COMPASS` (compass)

**Journey & process** (12): `ICN-MAP-PIN` (map-pin), `ICN-NAVIGATION` (navigation), `ICN-ROUTE` (route), `ICN-MILESTONE` (milestone), `ICN-CIRCLE-DOT` (circle-dot), `ICN-ARROW` (arrow-right), `ICN-ARROW-DOWN` (arrow-down), `ICN-WORKFLOW` (workflow), `ICN-GIT-BRANCH` (git-branch), `ICN-REPEAT` (repeat), `ICN-CLOCK` (clock), `ICN-CALENDAR` (calendar)

**Product & technology** (13): `ICN-PHONE` (smartphone), `ICN-TABLET` (tablet), `ICN-MONITOR` (monitor), `ICN-LAPTOP` (laptop), `ICN-GLOBE` (globe), `ICN-CLOUD` (cloud), `ICN-SERVER` (server), `ICN-DATABASE` (database), `ICN-CODE-2` (code-2), `ICN-CPU` (cpu), `ICN-BOT` (bot), `ICN-SPARKLES` (sparkles), `ICN-WAND-SPARKLES` (wand-sparkles)

**Status & insights** (10): `ICN-INFO` (info), `ICN-CIRCLE-HELP` (circle-help), `ICN-ALERT-CIRCLE` (alert-circle; Same glyph as ICN-CIRCLE-ALERT (older Lucide name)), `ICN-TRIANGLE-ALERT` (triangle-alert; Same glyph as ICN-ALERT), `ICN-CHECK-CIRCLE-2` (check-circle-2; Lucide circle-check), `ICN-X-CIRCLE` (x-circle), `ICN-CIRCLE-ALERT` (circle-alert), `ICN-IDEA` (lightbulb), `ICN-SPARKLES` (sparkles), `ICN-ZAP` (zap)

## Asset library

| ID | Group | Status | Note |
|---|---|---|---|
| `A-BRAND` | Brand and logos | Missing | The design system ships no logo. Product name is set in plain type until a mark is supplied. |
| `A-DEV` | Device frames | Approved | 6 approved PNGs with transparent screens (5 devices + browser window). |
| `A-ICN` | Icons | Approved | Lucide, rounded variant by default. |
| `A-PHOTO` | Photography | Conditional | Rule: black and white only. No photo library yet, owner supplies images. |
| `A-SCREEN` | Product screenshots | Conditional | Supplied per project. Must be real captures, never mocked up. |
| `A-ILLUS` | Illustrations | Missing | No approved illustration style. |
| `A-BG` | Backgrounds | Approved | Design system surfaces only: background, subtle, sunken, inverse, primary. |
| `A-DECOR` | Decorative elements | Missing | None approved. Do not add ornament. |
| `A-DATAVIZ` | Data-viz palette | Approved | dataviz-1 to 6, in order. |

## Design tokens (Storyloom Design System)

Storyloom palette. Royal blue #2E4AED is the action and emphasis color; Deep navy #000075 grounds title and section slides; Pale lavender #D6DBFC is the one highlight per slide (navy text on it); Periwinkle #97A3F5 is a background only, always with navy text. The focus ring is #0D19FB on light grounds and pale lavender on navy. Neutrals, status and the non-blue chart colors are unchanged from v0.1.

| Token | Light | Dark | Use |
|---|---|---|---|
| `color-background-default` | #f4f4f2 | #15181e | Slide ground |
| `color-surface-default` | #ffffff | #222731 | Cards, tables |
| `color-surface-sunken` | #ececea | #15181e | Recessed panels |
| `color-text-primary` | #222731 | #ececea | Titles, body (Charcoal) |
| `color-text-secondary` | #63666a | #a6a8a9 | Captions, sources (Dark Gray) |
| `color-action-primary-bg` | #2e4aed | #97a3f5 | Royal blue: actions, emphasis |
| `color-surface-inverse` | #000075 | #ececea | Deep navy: title and section grounds |
| `color-accent-bg` | #d6dbfc | #d6dbfc | Pale lavender: one highlight per slide |
| `color-border-default` | #d9d9d6 | #3e4147 | Dividers |

Data-viz order: #2e4aed, #000075, #e56a54, #aa0061, #00b140, #97a3f5 (the brand blues are one hue family, so series 3 on switch hue; label series 5 and 6 directly)
Status (fg / bg): success #007a2c/#e5f7ec; warning #a84600/#fff0e5; error #b00021/#fde6ea; info #1628a3/#eef0fe

Slide type scale (1280×720 canvas):

- Slide title: `h1` · Bricolage Grotesque 700 · 40 / 48
- Section title: `display` · Bricolage Grotesque 700 · 56 / 60
- Card title: `h4` · Bricolage Grotesque 600 · 20 / 28
- KPI number: `display` · Bricolage Grotesque 700 · 56 / 60
- Body: `body-lg` · Hanken Grotesk 400 · 18 / 28
- Label: `label` · Hanken Grotesk 500 · 14 / 20
- Source / footnote: `body-sm` · Hanken Grotesk 400 · 14 / 20 (minimum on slides)
- IDs, data: `code` · IBM Plex Mono 400 · 13 / 20 (metadata only)

Spacing: 4px scale: space-1 4 ... space-11 96. Slide margin space-8 (48). Card padding space-5 (24). Gaps space-4 (16).
Radius: radius-md 8 (callouts), radius-lg 12 (cards). Device frames keep their own radius.
Fonts: Bricolage Grotesque (display), Hanken Grotesk (body), IBM Plex Mono (IDs/data). Use semantic tokens, never raw primitives.

## Storytelling rules

- RULE-01: One primary message per slide.
- RULE-02: Lead with the insight, not the artifact.
- RULE-03: Every claim is backed by evidence on the slide.
- RULE-04: Cut slides that exist only to fill a template.
- RULE-05: Never repeat the same information on two slides.
- RULE-06: Progress context, understanding, evidence, implication, action.
- RULE-07: Use a visual when it communicates faster than text.
- RULE-08: Use a chart only when it reveals a meaningful pattern.
- RULE-09: No decorative visualizations.
- RULE-10: Keep hierarchy, spacing, type and visual language consistent.
- RULE-11: Use the same approved representation for the same thing throughout.
- RULE-12: Show native experiences with their approved pattern, never a generic placeholder.
- RULE-13: Visual design never changes the approved story.

Content hierarchy on every slide: Primary message → Supporting evidence → Context → Implication. Never equal visual weight.

## Open gaps

| ID | Missing | Effect until resolved | Owner |
|---|---|---|---|
| GAP-01 | Brand logo / mark | Title and closing slides use plain type. | Brand |
| GAP-03 | Desktop monitor frame (DEVICE-DESKTOP-01) | Use DEVICE-LAPTOP-01 until approved. | Design |
| GAP-05 | Messaging mockups (MSG-*) | SLD-MESSAGING-01 stays Restricted until approved. | Design |
| GAP-06 | Illustration style | No illustrations may be used. | Brand |
| GAP-07 | Photography library | Owner supplies B&W photos per deck. | Brand |
| GAP-09 | PowerPoint master (.potx) | No master yet. Decks are built programmatically from tokens, following the layouts in the lorem-ipsum template decks (`templates/`). | Design |

## Governance check (before GATE-03)

- Story: every slide serves the approved story; clear beginning, middle, end; unchanged from approval (else back to GATE-01).
- Design: only approved SLD/CMP IDs; consistent hierarchy, spacing, type.
- Assets: approved device frames, MSG patterns, ICN icons reused; no substitutes.
- Visualization: pattern matches meaning; no decorative charts.
- Governance: list every Restricted, Conditional-without-condition, or Missing item as an exception.
- Content: one message per slide; evidence supports each claim; gaps named.
- PowerPoint: valid 16:9 .pptx; editable text, shapes, charts, tables; no overflow, cropping or broken frames; reads as one deck.

## Final delivery

Report: presentation name, slide count, approved story used, governance exceptions, missing assets/content, and the downloadable .pptx.

## Extending the system

Add a registry entry with a new ID and status (new types start Restricted until reviewed). Do not change assembly rules to add content. Update this doc and the HTML overview together.

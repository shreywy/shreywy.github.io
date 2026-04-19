# Portfolio Project — Shrey Mistry

## Project Overview
Interactive CRT terminal portfolio deployed on GitHub Pages.
- **Repo**: `https://github.com/shreywy/shreywy.github.io.git`
- **Branch**: `terminal-portfolio` (GitHub Pages is configured to serve from this branch)
- **Live URL**: `https://shreywy.github.io`

## Architecture
- **Single file**: `index.html` — all HTML, CSS, JS in one file, no build tools
- **Content**: `data.json` — user edits this file to update all portfolio content. The JS fetches it on load with an inline fallback, so it works from both `file://` and `https://`.
- **Fonts**: VT323 (terminal text), JetBrains Mono (neofetch logo only), DM Sans / Tahoma (Win98 UI), Instrument Serif (browser Noir view), Playfair Display (browser Editorial view)
- **No external JS/CSS dependencies** — pure HTML/CSS/JS

## Current State

### Visual: Fullscreen CRT Terminal
- The entire viewport IS the CRT screen — no bezel, no frame
- `border-radius: 14px`, scanlines overlay (`::before`), vignette (`::after`), phosphor glow inset box-shadow, subtle flicker animation
- Chromatic aberration: text-shadow with slight RGB offset on all terminal text
- Power-on: **flicker boot** animation (screen flickers black/green 6x then settles)
- All text: `VT323`, `1.15rem`, inherits from body. Everything is the same font/size.
- Green phosphor theme (`--text: #33ff33`). Amber and blue themes exist in CSS but no UI toggle (accessible via `color` terminal command... actually this may have been removed)

### Terminal Behavior
- Windows-style prompt: `C:\Users\shrey> ` (configurable in `data.json` under `terminal.prompt`)
- Input row follows output naturally (not pinned to bottom) — flows like a real terminal
- `#terminal` div is the scroll container (`overflow-y: auto`), `#output` and `#inputRow` are plain block children
- Click anywhere on screen to focus input
- Arrow Up/Down for command history
- **`/` key**: opens/closes command palette. Press again to close.
- No bottom quickbar (removed). Hint text is gone. Boot message tells user to press `/` or type `help`.

### Command Palette (`/` key)
Four tabs, navigate with Left/Right arrows:
- **Portfolio**: about, experience, skills, education, projects, contact, browse
- **Apps**: paint, notepad, explorer
- **Games**: snake, tetris, minesweeper
- **System**: dir, neofetch, restart, cls, history, cowsay, matrix

### Terminal Commands
- `about` / `neofetch` — neofetch layout: ASCII `SM` logo (made of `#` chars, left col) + info table (right col). Row by row with 50ms delay.
- `experience` — timeline layout (vertical line on left with dots, dates on far left, cards on right). Cards appear one-by-one with slide+fade + blip sound. 3D tilt on hover.
- `skills` — compact horizontal grouped display (Languages, Frameworks, Cloud/Data, Tools, Other)
- `education` — typewriter output
- `projects` — cards with `[open]` link buttons if `link` is set in data.json. 3D tilt on hover.
- `contact` — email, LinkedIn, GitHub
- `browse` — opens portfolio browser window (no terminal scroll, no split)
- `paint` — spawns MS Paint (multiple instances OK)
- `notepad` — spawns Notepad (multiple instances OK)
- `explorer` — spawns File Explorer (multiple instances OK)
- `snake` — spawns Snake game
- `tetris` — spawns Tetris game
- `minesweeper` — spawns Minesweeper
- `dir` — fake directory listing
- `restart` — screen blacks out, terminal reboots with full boot sequence
- `cls` / `clear` — clear terminal
- `history` — command history
- `date` — current date
- `echo [msg]` — echo
- `cowsay [msg]`, `matrix`, `sudo`, `rm`, `del`, `exit` — easter eggs

### Sounds (Web Audio API)
All sounds synthesized, no external files:
- `sndType()` — tiny click per keypress, `sndBeep()` — BIOS POST beep
- `sndZap()` — noise burst (power-on), `sndHum()` — 60Hz hum
- `sndEnter()` — command submit, `sndBlip()` — card appear
- All wrapped in try/catch so no sound crash can freeze the terminal

### Win98 Popup Windows
Generic window system via `spawnWin(title, contentHTML, w, h)`:
- Each call appends a new `.w98` div to `document.body`
- Windows are draggable (title bar), resizable (bottom-right handle), close with shrink animation
- Z-index management — each new window gets `++zIndex`
- Paint, Notepad, Explorer, Snake, Tetris, Minesweeper all spawn as independent windows
- Diagonal offset: each new window is 28px down-right from the previous

**Browser window** (`#browserWindow`):
- Fixed HTML element (not dynamically spawned), positioned top-right (~55% width)
- Has Win98 browser chrome: back/fwd/refresh buttons, address bar
- Tab management: add tabs (`+`), close tabs (x per tab), close last tab = close browser
- New tab shows "This page can't be reached" page
- Refresh fakes a reload (600ms loading screen then re-render)
- Portfolio page content rendered from `data.json`

**Paint**: Vertical tool panel (left), color palette (bottom), canvas fills remaining space. Uses `position: absolute` canvas with `offsetX/offsetY` for drawing. Tools: pencil (✏), eraser (◻), clear (✕). 12 colors.

**Notepad**: Win98 menu bar (File/Edit/Format/Help), File clears textarea. `Courier New` textarea.

**File Explorer**: Left panel folder tree (click to navigate), right panel files. Double-click file opens Notepad with funny content (readme.txt, todo.txt, resume.pdf, cover_letter.docx all have jokes/easter eggs).

**Snake**: 20x20 grid. Wraps around all edges (no wall death). Speeds up from 140ms to 70ms over first 5 dots. WASD/arrows. Ctrl+C to quit.

**Tetris**: 10x20 grid, 25px cells. Arrow keys move/rotate, Space hard drop, C to hold/swap block. Side panel shows HOLD preview, score. Grid lines drawn. Ctrl+C to quit.

**Minesweeper**: 9x9 grid, 10 mines, 30px cells. Uses `e.offsetX/e.offsetY` for click coordinates. First click is always safe (3x3 safe zone). Win98 LCD mine counter + timer. Left-click reveal, right-click flag. Reset button with emoji faces.

### Data-Driven Content (`data.json`)
Top-level keys:
- `_instructions` — human-readable docs (ignored by site)
- `terminal` — `bootMessages`, `banner`, `welcomeMessage`, `prompt` (all customizable)
- `theme` — `active: "green" | "amber" | "blue"`
- `name`, `tagline`, `location`, `email`, `linkedin`, `github`, `about`
- `skills` — object of category: string[] arrays
- `experience` — array of `{title, company, period, location, description, skills[]}`
- `education` — array of `{school, degree, period}`
- `projects` — array of `{name, description, skills[], link}` (link null = no button)

### Boot Sequence
Custom specs (Shrey's real PC): RTX 3080, 5800X3D, 48GB DDR4-3200, 7 Tbps Wi-Fi (joke).
All boot lines come from `data.json` `terminal.bootMessages`. Skippable with any key/click.

### Meta / SEO
- Title: "Shrey's Terminal"
- Favicon: `>_` SVG (green on dark)
- OpenGraph tags for Discord embed (title, description, `theme-color: #33ff33`)

## Files
- `index.html` — entire portfolio (all code)
- `data.json` — all content (edit this to update portfolio)
- `style-explorer.html` — old style exploration tool (no longer needed, can delete)
- `poweron-preview.html`, `crt-preview.html` — old preview tools (no longer needed)
- `CLAUDE.md` — this file

## Git
```
remote: origin = https://github.com/shreywy/shreywy.github.io.git
branch: terminal-portfolio  (GitHub Pages serves from here)
```
Always commit both `index.html` and `data.json` and push to `terminal-portfolio`.

## Known Issues / TODO
- Minesweeper was recently fully rewritten (fixed grid init, offsetX/Y coords, Win98 LCD, safe first click)
- Browser `close` button calls `closeBrowser()` (not `closeWindow()`) — already handled in closeWindow
- `renderQuickbar()` function was removed but `#quickbar` div still exists in HTML (hidden via CSS) — fine to leave
- `style-explorer.html`, `poweron-preview.html`, `crt-preview.html` can be cleaned up from the repo

## User Preferences
- Likes: authentic terminal feel, Win98 aesthetic, easter eggs, personality
- Dislikes: cursor effects, unnecessary clutter, bottom bars
- Wants content super easy to edit (just edit `data.json`)
- No em-dashes anywhere — use regular hyphens only
- Every push goes to `terminal-portfolio` branch

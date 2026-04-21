# Portfolio Project — Shrey Mistry

## Project Overview
Interactive CRT terminal portfolio deployed on GitHub Pages.
- **Repo**: `https://github.com/shreywy/shreywy.github.io.git`
- **Branch**: `terminal-portfolio` (GitHub Pages is configured to serve from this branch)
- **Live URL**: `https://shreywy.github.io`

## Architecture
- **Single file**: `index.html` — all HTML, CSS, JS in one file, no build tools
- **Content**: `data.json` — all portfolio data. Fetched on load with an inline fallback so it works from both `file://` and `https://`.
- **Fonts**: VT323 (terminal text), JetBrains Mono (neofetch logo pre), DM Sans / Tahoma (Win98 UI), Instrument Serif / Playfair Display (browser views)
- **No external JS/CSS dependencies** — pure HTML/CSS/JS

## Current State

### Visual: Fullscreen CRT Terminal
- Entire viewport IS the CRT screen — no bezel, no frame
- `border-radius: 14px`, scanlines overlay (`::before`), vignette (`::after`), phosphor glow inset box-shadow, subtle flicker animation
- Chromatic aberration: text-shadow with slight RGB offset on all terminal text
- Power-on: flicker boot animation (screen flickers black/green 6x then settles, with BIOS beep)
- Background: `--bg: #000800` (near-black). Text: `--text: #33ff33`. All text VT323 1.15rem.
- Text selection: `::selection` styled with `rgba(51,255,51,0.25)` background and `--bright` green text

### Terminal Behavior
- Windows-style prompt: `C:\Users\shrey> ` (configurable via `data.json → terminal.prompt`)
- Input row follows output naturally — not pinned to bottom
- Click anywhere on the CRT to focus input
- Arrow Up/Down for command history
- **`/` key**: opens/closes command palette
- App focus isolation: clicking a Win98 window blurs the terminal input; closing a window refocuses it
- `selectCommand()`: types the selected palette command char-by-char (40ms/char) into the input for visual effect, then runs it

### Command Palette (`/` key)
Four tabs, navigate with Left/Right arrows:
- **Portfolio**: about, experience, skills, education, projects, contact, resume, browse
- **Apps**: paint, notepad, explorer
- **Games**: snake, tetris, minesweeper
- **System**: dir, neofetch, restart, cls, history, cowsay, matrix

### Terminal Commands
- `about` / `neofetch` — 3D ASCII SM logo (from `data.json → neofetch.logo`, 21 lines x 50 chars) in left column + info table in right column. Both columns typed in parallel left-to-right.
- `experience` — vertical timeline, cards appear one-by-one with slide+fade + blip sound. 3D tilt on hover (disabled while mouse button held, so text selection works).
- `skills` — compact horizontal grouped display. Lines typed in parallel.
- `education` — parallel left-to-right typing per entry.
- `projects` — cards with `[open]` link buttons. 3D tilt on hover (same tilt guard as experience).
- `contact` — email, LinkedIn, GitHub via typeLinesSlow.
- `resume` — HEAD-fetches `resume.pdf`; opens in new tab if found (200), else prints "not found" message in terminal.
- `browse` — opens the Win98 portfolio browser window.
- `paint` — spawns MS Paint window (multiple instances OK).
- `notepad` — spawns Notepad window (multiple instances OK).
- `explorer` — spawns File Explorer window (multiple instances OK).
- `snake` — spawns Snake game window.
- `tetris` — spawns Tetris game window.
- `minesweeper` — spawns Minesweeper window.
- `dir` — fake directory listing (from `data.json → dir`).
- `restart` / `reboot` — blacks out, reboots with full boot sequence.
- `cls` / `clear` — clear terminal output.
- `history` — show command history.
- `date` — current date.
- `echo [msg]` — echo.
- `cowsay [msg]`, `matrix`, `sudo`, `rm`, `del`, `exit` — easter eggs. Matrix uses first name from `D.name`.

### Sounds (Web Audio API)
All synthesized, no external files:
- `sndType()` — click per keypress, `sndBeep()` — BIOS POST beep
- `sndZap()` — noise burst (power-on), `sndHum()` — 60Hz hum
- `sndEnter()` — command submit, `sndBlip()` — card appear
- `sndPaletteOpen()` — palette open tone
- All wrapped in try/catch so audio errors never freeze the terminal

### Win98 Popup Windows
Generic window system via `spawnWin(title, contentHTML, w, h)`:
- Each call appends a new `.w98` div to `document.body`
- Draggable (title bar), resizable (bottom-right handle), close with shrink animation
- Z-index management — each new window gets `++zIndex`
- Diagonal offset: each new window is 28px down-right from previous
- Clicking a window blurs the terminal input; closing a window refocuses it

**Browser window** (`#browserWindow`):
- Fixed HTML element (not dynamically spawned), positioned top-right (~55% width)
- Win98 browser chrome: back/fwd/refresh buttons, address bar (shows `data.json → meta.siteUrl`)
- Tab management: `+` adds tab, x closes tab, closing last tab closes browser
- New tab shows "This page can't be reached" error page
- Refresh fakes a 600ms reload then re-renders
- Portfolio page content rendered from `data.json`

**Paint**: Vertical tool panel (left), color palette (bottom), canvas fills remaining space. `offsetX/offsetY` for drawing. Tools: pencil, eraser, clear. 12 colors.

**Notepad**: Win98 menu bar (File/Edit/Format/Help). File menu clears textarea. `Courier New` textarea.

**File Explorer**: Left panel folder tree, right panel files. Double-click opens Notepad with easter egg content.

**Snake**: 20x20 grid. Wraps all edges. Speeds up from 140ms to 70ms over first 5 dots. WASD/arrows. Ctrl+C to quit.

**Tetris**: 10x20 grid, 25px cells. Arrow keys move/rotate, Space hard drop, C to hold. HOLD preview + score panel. Ctrl+C to quit.

**Minesweeper**: 9x9 grid, 10 mines, 30px cells. `offsetX/offsetY` for clicks. Safe first click (3x3 zone). Win98 LCD counter + timer. Left-click reveal, right-click flag. Reset button.

### Data-Driven Content (`data.json`)
Every piece of visible content is here — edit this file to update the portfolio.

Top-level keys:
- `_instructions` — human-readable docs (ignored by site)
- `terminal` — `banner`, `welcomeMessage`, `prompt`, `bootMessages`
- `theme` — `active: "green" | "amber" | "blue"`
- `meta` — `title`, `description`, `ogTitle`, `ogDescription`, `siteUrl`
  - Applied to `document.title`, `<meta>` tags, browser address bar, and initial browser tab after data loads
- `neofetch` — `userhost`, `role`, `school`, `uptime`, `shell`, `terminal`, `logo`
  - `logo`: array of exactly 21 strings, each exactly 50 chars wide (pad with spaces)
- `dir` — `volume`, `serial`, `path`, `listing` (array of dir entry strings)
- `name`, `tagline`, `location`, `email`, `linkedin`, `github`, `about`
- `skills` — object of `{ category: string[] }` pairs
- `experience` — array of `{ title, company, period, location, description, skills[] }`
- `education` — array of `{ school, degree, period }`
- `projects` — array of `{ name, description, skills[], link }` (`link: null` hides button)

### Boot Sequence
All lines from `data.json → terminal.bootMessages`. Skippable with any key/click.
Custom fake specs: RTX 3080, 5800X3D, 48GB DDR4-3200, 7 Tbps Wi-Fi.

### Meta / SEO
- All driven by `data.json → meta`. Static HTML head has defaults; JS overwrites after fetch.
- Favicon: `>_` SVG inline (green on dark)
- `theme-color: #33ff33` for Discord/mobile browser chrome

## Files
- `index.html` — entire portfolio (all code)
- `data.json` — all content (the only file to edit for content changes)
- `.gitignore` — ignores `.playwright-mcp/`, `*.png`, `*.log`
- `CLAUDE.md` — this file

## Git
```
remote: origin = https://github.com/shreywy/shreywy.github.io.git
branch: terminal-portfolio  (GitHub Pages serves from here)
```
Always commit `index.html` and/or `data.json` together and push to `terminal-portfolio`.

## Known Issues / Quirks
- `renderQuickbar()` was removed but `#quickbar` div still exists in HTML (hidden via CSS) — harmless
- Browser window `close` button calls `closeBrowser()` directly (not `closeWindow()`) — intentional, already handled

## User Preferences
- Likes: authentic terminal feel, Win98 aesthetic, easter eggs, personality
- Dislikes: cursor effects, unnecessary clutter, bottom bars
- Content should be editable only via `data.json` — nothing hardcoded in index.html
- No em-dashes anywhere — use regular hyphens only
- Every push goes to `terminal-portfolio` branch

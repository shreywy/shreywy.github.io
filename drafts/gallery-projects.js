// Projects hung in the gallery, in wall order.
//
// To add one:
//   1. Put its screenshots in assets/ and a cropped GitHub capture as assets/gh-<name>.jpg
//   2. Copy a block below and fill it in. Everything on the wall and in the detail view comes from here.
//   3. Set hidden:true to take a piece down without deleting it.
//
// Fields
//   id       url-safe name, also the link: /#<id>
//   frame    gilt | walnut | ebony | silver
//   art      what hangs on the wall: [file, shape, size]
//              shape  ls = landscape 16:10, pt = phone 9:19
//              size   L = full height, S = half height (two S in a row stack into one column)
//   placard  one line for the wall label; tag is the line under the title in the detail view
//   what / how / nums   the detail view sections (any can be left out)
//   map      optional two-column table
//   extra    more screenshots for the detail view only
//   links    [label, url] buttons
window.PROJECTS = [
  { id:'forkable', title:'Forkable', year:'Aug 2026', frame:'gilt',
    art:[['forkable-home.png','ls','L'], ['forkable-recipe.png','ls','S'], ['forkable-profile.png','ls','S']],
    tag:'Version control for recipes.', placard:'Fork a recipe, commit tweaks, diff versions by ingredient, and merge Taste Tests.',
    medium:'TypeScript, Next.js 16, PostgreSQL, Prisma, Redis',
    gh:'gh-forkable.jpg', repo:'github.com/shreywy/forkable', links:[['GitHub', 'https://github.com/shreywy/forkable'], ['Live demo', 'https://fforkable.vercel.app']],
    what:'A full-stack recipe platform built on git&rsquo;s model. You fork a recipe, commit tweaks, and see a structural diff between versions down to each ingredient and step. Suggestions arrive as Taste Tests, which are pull requests you merge with one click.',
    how:'An LCS-based diff engine, per-step and per-ingredient blame, one-click restore, and ranked full-text search in raw SQL over tsvector with a GIN index. Claude API ingredient substitutions sit behind auth and rate limiting, cached in Redis for 24 hours, with a flag so the app still works if the API is down.',
    nums:'21 Prisma models. CI runs lint, typecheck, build, and 83 Vitest tests.',
    map:[['Repository','Recipe'], ['Commit','Tweak'], ['Fork','Remix'], ['Pull request','Taste Test'], ['git log','Tweaks tab']] },
  { id:'traintriptime', title:'TrainTripTime', year:'Sep 2026', frame:'walnut',
    art:[['ttt-plan.png','pt','L'], ['ttt-proof.png','pt','L'], ['ttt-setup.png','pt','L']],
    tag:'Tell it when you need to be downtown. It tells you when to wake up.', placard:'A GO Transit commute planner that works backwards from your arrival time.',
    medium:'Python stdlib, HTML, CSS, JS. Runs on a Raspberry Pi.',
    gh:'gh-ttt.jpg', repo:'github.com/shreywy/TrainTripTime', links:[['GitHub', 'https://github.com/shreywy/TrainTripTime'], ['Project page', 'https://shreywy.github.io/TrainTripTime/']],
    what:'A self-hosted GO Transit planner that works backwards from when you need to arrive. It picks the latest train that gets you there, the bus that lands at the station inside your preferred window, when to leave, and when to wake up.',
    how:'It merges live GTFS-realtime feeds and fails soft when they&rsquo;re down, spots weekend construction short-turns from the timetable, and adds the leave-home time to Google Calendar in one tap. Installs as a PWA.',
    nums:'A 118MB GTFS feed streamed into a 1MB index, with peak memory down from about 160MB to 100MB. systemd socket activation and idle shutdown on the Pi.' },
  { id:'speckle', title:'Speckle', year:'Sep 2026', frame:'ebony',
    art:[['speckle-search.jpg','ls','L']],
    tag:'A local-first photo and video library.', placard:'Type boats, get boats. Search, faces, and video, all on your own machine.',
    medium:'Rust, axum, SQLite, ONNX Runtime, CLIP, InsightFace',
    gh:'gh-speckle.jpg', repo:'github.com/shreywy/Speckle', links:[['GitHub', 'https://github.com/shreywy/Speckle']], extra:['speckle-grid.jpg'],
    what:'Point it at a folder and it indexes every subfolder, builds a thumbnail cache, understands what&rsquo;s in each photo, and groups people. No account, no cloud, no telemetry.',
    how:'CLIP runs locally for semantic search. InsightFace handles face detection and clustering. Video gets buffered-range scrubbing with live transcoding, and editing has 14 WebGL adjustments and 12 filter presets.',
    nums:'About 13 photos a second through CLIP on CPU. The grid stays smooth at hundreds of thousands of items.' },
  { id:'firefox-tabs', title:'firefox-tabs', year:'Sep 2026', frame:'silver',
    art:[['fft-newtab.png','ls','L'], ['fft-phone.png','pt','L']],
    tag:'My desktop&rsquo;s open Firefox tabs, on any device.', placard:'Served from a Raspberry Pi over Tailscale. No extension, no pip installs.',
    medium:'Python stdlib, SQLite, systemd, Tailscale',
    gh:'gh-fft.jpg', repo:'github.com/shreywy/firefox-tabs', links:[['GitHub', 'https://github.com/shreywy/firefox-tabs']], extra:['fft-search.png'],
    what:'Snapshots my open Firefox tabs, including Sidebery panels and folders with real favicons, and serves them as a tab list on my phone and a new-tab page on laptops.',
    how:'I wrote LZ4 block decompression, Snappy decompression, and a SpiderMonkey structured-clone parser in pure Python to read Firefox&rsquo;s mozlz4 session files, favicons.sqlite, and Sidebery&rsquo;s IndexedDB.',
    nums:'Zero memory when idle: socket activation, shutdown after 5 idle minutes, and a 50MB cap.' },
  { id:'gridmacro', hidden:true, title:'GridMacro', year:'Sep 2026', frame:'gilt',
    art:[['gm-phone.png','pt','L'], ['gm-desktop.png','ls','L']],
    tag:'A calorie and weight log that lives in your own Google Sheet.', placard:'The spreadsheet stays the database. Logging takes two taps.',
    medium:'JavaScript, Apps Script, Sheets API, Gemini',
    gh:'gh-gm.jpg', repo:'github.com/shreywy/GridMacro', links:[['GitHub', 'https://github.com/shreywy/GridMacro'], ['Project page', 'https://shreywy.github.io/GridMacro/']], extra:['gm-add.png', 'gm-weight.png'],
    what:'An Apps Script web app where your Google Sheet stays the database: it&rsquo;s yours, you can inspect it, and it outlives the app. I built it for my own cut.',
    how:'Three ways to add food: ranked history in two taps, an Open Food Facts search, or a Gemini estimate from a description or photo. Optimistic UI, weight trends with cuts and bulks shaded, and targets that follow the calendar.' },
  { id:'drizzy-drake', hidden:true, title:'drizzy-drake', year:'Sep 2026', frame:'walnut',
    art:[['drizzy-page.jpg','ls','L']],
    tag:'A Discord bot for friends that kept growing.', placard:'Music, embed fixing, and text to speech in 93 voices.',
    medium:'Python on a Raspberry Pi 3B',
    gh:'gh-drizzy.jpg', repo:'github.com/shreywy/drizzy-drake', links:[['GitHub', 'https://github.com/shreywy/drizzy-drake'], ['Project page', 'https://shreywy.github.io/drizzy-drake/']],
    what:'It started as an embed fixer for friends&rsquo; servers. Now it fixes X, TikTok, Instagram, and Reddit links, plays music from YouTube, SoundCloud, and Spotify with a queue editor, and reads chat aloud.',
    nums:'93 text to speech voices across about 60 accents and languages.' },
];

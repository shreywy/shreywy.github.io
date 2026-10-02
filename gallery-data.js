// Everything hung in the gallery. The wall, the placards, and the closer-look pages are all built from this file.
//
// Projects
//   1. Put screenshots in assets/. If the project has a live site, add page:{ url, poster, full } where full is a
//      full-page capture; the closer look scrolls through it and can switch to the live site. Otherwise add a cropped GitHub capture as gh:'gh-<name>.jpg'.
//   2. Copy a block and fill it in. hidden:true takes a piece down without deleting it.
//   Fields: id (also the link, /#id), frame (gilt | walnut | ebony | silver),
//           art [file, shape ls|pt, size L|S] (two S in a row stack into one column),
//           placard, tag, what / how / nums, map (optional table), extra (detail-only screenshots), links.
//
// Experience (oldest first here; the wall shows newest on the left)
//   Fields: id, company, role, team, city, mode, start, end, months, summary (the wall text),
//           award (optional plaque on the wall), recognition (detail page only), about (the company in a sentence or two), did (bullets), skills, quote (optional).
//
// look picks the object the wall text is printed on: certificate | notebook | report | diploma.
// Education uses the same shape, plus gpa, honors, coop, coursework, inProgress, and before.

window.PROJECTS = [
  { id:'forkable', page:{ url:'https://fforkable.vercel.app', poster:'page-forkable.jpg', full:'full-forkable.jpg' }, title:'Forkable', year:'Aug 2026', frame:'gilt',
    art:[['forkable-home.png','ls','L'], ['forkable-recipe.png','ls','S'], ['forkable-profile.png','ls','S']],
    tag:'Version control for recipes.', placard:'Fork a recipe, commit tweaks, diff versions by ingredient, and merge Taste Tests.',
    medium:'TypeScript, Next.js 16, PostgreSQL, Prisma, Redis',
    gh:'gh-forkable.jpg', repo:'github.com/shreywy/forkable', links:[['GitHub', 'https://github.com/shreywy/forkable'], ['Live demo', 'https://fforkable.vercel.app']],
    what:'A full-stack recipe platform built on git&rsquo;s model. You fork a recipe, commit tweaks, and see a structural diff between versions down to each ingredient and step. Suggestions arrive as Taste Tests, which are pull requests you merge with one click.',
    how:'An LCS-based diff engine, per-step and per-ingredient blame, one-click restore, and ranked full-text search in raw SQL over tsvector with a GIN index. Claude API ingredient substitutions sit behind auth and rate limiting, cached in Redis for 24 hours, with a flag so the app still works if the API is down.',
    nums:'21 Prisma models. CI runs lint, typecheck, build, and 83 Vitest tests.',
    map:[['Repository','Recipe'], ['Commit','Tweak'], ['Fork','Remix'], ['Pull request','Taste Test'], ['git log','Tweaks tab']] },
  { id:'traintriptime', page:{ url:'https://shreywy.github.io/TrainTripTime/', poster:'page-ttt.jpg', full:'full-ttt.jpg' }, title:'TrainTripTime', year:'Sep 2026', frame:'walnut',
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
  { id:'gridmacro', page:{ url:'https://shreywy.github.io/GridMacro/', poster:'page-gm.jpg', full:'full-gm.jpg' }, hidden:true, title:'GridMacro', year:'Sep 2026', frame:'gilt',
    art:[['gm-phone.png','pt','L'], ['gm-desktop.png','ls','L']],
    tag:'A calorie and weight log that lives in your own Google Sheet.', placard:'The spreadsheet stays the database. Logging takes two taps.',
    medium:'JavaScript, Apps Script, Sheets API, Gemini',
    gh:'gh-gm.jpg', repo:'github.com/shreywy/GridMacro', links:[['GitHub', 'https://github.com/shreywy/GridMacro'], ['Project page', 'https://shreywy.github.io/GridMacro/']], extra:['gm-add.png', 'gm-weight.png'],
    what:'An Apps Script web app where your Google Sheet stays the database: it&rsquo;s yours, you can inspect it, and it outlives the app. I built it for my own cut.',
    how:'Three ways to add food: ranked history in two taps, an Open Food Facts search, or a Gemini estimate from a description or photo. Optimistic UI, weight trends with cuts and bulks shaded, and targets that follow the calendar.' },
  { id:'drizzy-drake', page:{ url:'https://shreywy.github.io/drizzy-drake/', poster:'drizzy-page.jpg', full:'full-drizzy.jpg' }, hidden:true, title:'drizzy-drake', year:'Sep 2026', frame:'walnut',
    art:[['drizzy-page.jpg','ls','L']],
    tag:'A Discord bot for friends that kept growing.', placard:'Music, embed fixing, and text to speech in 93 voices.',
    medium:'Python on a Raspberry Pi 3B',
    gh:'gh-drizzy.jpg', repo:'github.com/shreywy/drizzy-drake', links:[['GitHub', 'https://github.com/shreywy/drizzy-drake'], ['Project page', 'https://shreywy.github.io/drizzy-drake/']],
    what:'It started as an embed fixer for friends&rsquo; servers. Now it fixes X, TikTok, Instagram, and Reddit links, plays music from YouTube, SoundCloud, and Spotify with a queue editor, and reads chat aloud.',
    nums:'93 text to speech voices across about 60 accents and languages.' },
];

window.EXPERIENCE = [
  { id:'bombardier', look:'report', tab:'Supplier Quality', logo:'bombardier.svg', company:'Bombardier', role:'Automation Engineering Intern', team:'Supplier Quality, Bombardier Aerospace',
    city:'Toronto', mode:'On-site', start:'May 2023', end:'Aug 2023', months:4,
    summary:'TypeScript and Node.js pipelines into Power BI, with validation that flags anomalies in audit records. Compliance reports took over 70% less time.',
    about:'Bombardier designs and builds business jets. I was on the Supplier Quality team in Toronto, working with Engineering, Procurement, and Quality.',
    did:[
      'Built TypeScript and Node.js data pipelines feeding Power BI, which cut compliance report generation time by over 70%.',
      'Wrote validation logic that flags anomalies and discrepancies in supplier audit records.',
      'Refactored monolithic VBA scripts into modular TypeScript templates. Other interns across the department picked up the templates and the coding standards.',
      'Investigated supplier issues in daily quality meetings, and replaced a many-tab review workbook with a one-sheet summary that sped those meetings up.',
      'Managed the Excel databases for a 92-person team.',
    ],
    skills:['TypeScript', 'Node.js', 'Power BI', 'VBA', 'Excel'] },
  { id:'amd', look:'notebook', logo:'amd.svg', company:'AMD', role:'Performance Engineering Intern', team:'Technical Marketing Labs',
    city:'Markham', mode:'On-site', start:'Jan 2024', end:'Aug 2024', months:8,
    summary:'A Python benchmark framework that launches games through Steam and Epic and navigates menus by image matching, cutting runtimes by 60%. An Arduino tool that measures sub-millisecond input latency.',
    about:'AMD designs CPUs and GPUs. I was in Technical Marketing Labs in Markham, working with the driver engineering and technical marketing teams on graphics performance.',
    did:[
      'Built a modular Python benchmark framework, tested with pytest, that launches games through Steam, Epic, EA App, and Ubisoft and navigates their menus by image matching. It cut runtimes by 60%.',
      'Programmed a C/C++ Arduino tool that measures sub-millisecond input latency by syncing simulated inputs with photoelectric sensors, to validate driver optimizations like Anti-Lag.',
      'Built CLI tools and dashboards in Python, Java, and SQL that parse power draw, frame-time, and telemetry data for the engineering teams.',
      'Assembled test benches from scratch, with hardware swaps and BIOS flashing, and wrote OS-level scripts that switch off background services and telemetry so GPU benchmarks are repeatable.',
      'Led competitive analysis of AMD GPUs against NVIDIA RTX cards with 3DMark and AAA games, and compared DLSS, FSR, and frame generation.',
      'Maintained a legacy Java tool for account-key management against a SQL database, and documented the benchmark tools for whoever comes next.',
    ],
    skills:['Python', 'pytest', 'C', 'C++', 'Arduino', 'Java', 'SQL'] },
  { id:'geotab', look:'certificate', logo:'geotab.svg', company:'Geotab', role:'Software Engineering Intern', team:'Solutions Delivery Management',
    city:'Oakville', mode:'Hybrid', start:'May 2025', end:'Aug 2026', months:16,
    summary:'Sixteen months on telematics. I took one device from PRD to launch in six months, built BigQuery dashboards for 1,000+ IoT units, and cut manual firmware verification by 80%.',
    recognition:'Intern of the Month, Jan 2026',
    about:'Geotab makes telematics devices and the software around them for connected vehicles and fleets. I worked on three flagship devices: GO Anywhere (internally 90k), GO10 (trinity), and GO Anywhere Lite.',
    did:[
      'Built full-stack telemetry dashboards and live web maps on BigQuery for 1,000+ IoT units, used by 40 to 50 staff including executives, then moved them from Apps Script to GCP containers with a GitLab CI pipeline.',
      'Wrote BigQuery SQL across thousands of tables processing terabytes daily to find production GPS and FOTA data.',
      'Built Node.js Chrome extensions that crawl and validate firmware test pages, shipped through GitLab merge requests and code review. They cut manual verification time by 80%.',
      'Built an AI search tool for the Intern Innovation Challenge that reads BigQuery metadata, expands a question into several queries with Gemini and MCP, and tiers tables by relevance.',
      'Shipped changes to an internal engineering dashboard through CI and code review, automating secure firmware deployments over SSH.',
      'Built Apps Script and Claude Code automations for project reports and Jira workflows, plus Chrome extensions and web apps that file and track Jira tickets.',
      'Wrote harness PRDs and took one device from PRD to launch in six months through EVT, DVT, and PVT.',
      'Ran an AI workshop for 40 colleagues on building their own tools with Gemini and Claude Code.',
    ],
    skills:['BigQuery', 'SQL', 'JavaScript', 'Node.js', 'GCP', 'GitLab CI', 'Apps Script', 'Jira'],
    quote:['Shrey was instrumental in taking a new hardware product from early concept to market.', 'Rob Wyatt'] },
];

window.EDUCATION = [
  { id:'tmu', look:'diploma', logo:'tmu.svg', company:'Toronto Metropolitan University', role:'Bachelor of Science, Computer Science (Co-op)',
    city:'Toronto', start:'Sep 2022', end:'May 2027', months:56,
    summary:'Graduating in May 2027 with a 3.96 out of 4.33.', award:'Dean&rsquo;s List, three terms',
    about:'A Computer Science degree in the co-op program, which I joined in August 2023.',
    gpa:'3.96 out of 4.33 cumulative',
    honors:['Dean&rsquo;s List, Winter 2023', 'Dean&rsquo;s List, Fall 2024', 'Dean&rsquo;s List, Winter 2025'],
    coop:'Work terms at AMD (Winter and Summer 2024) and Geotab (from Summer 2025).',
    // [code, course]
    coursework:[
      ['CPS 109', 'Computer Science I'], ['CPS 209', 'Computer Science II'], ['CPS 213', 'Computer Organization I'],
      ['CPS 310', 'Computer Organization II'], ['CPS 305', 'Data Structures'], ['CPS 393', 'Introduction to C and UNIX'],
      ['CPS 406', 'Introduction to Software Engineering'], ['CPS 420', 'Discrete Structures'], ['CPS 506', 'Comparative Programming Languages'],
      ['CPS 510', 'Database Systems I'], ['CPS 530', 'Web Systems Development'], ['CPS 590', 'Operating Systems I'],
      ['CPS 633', 'Computer Security'], ['CPS 847', 'Software Tools for Startups'], ['CMTH 108', 'Linear Algebra'],
      ['CMTH 380', 'Probability and Statistics I'],
    ],
    inProgress:['Artificial Intelligence (CPS 721)', 'Information Retrieval and Web Search (CPS 842)'],
    before:['Fletcher&rsquo;s Meadow Secondary School', 'High School Diploma, 2018 to 2022'] },
];

// The resume shown on the site. Swap the file and the date when it changes.
window.RESUME = { file:'ShreyMistry-Resume-SWE.pdf', label:'Software Engineering', updated:'September 27, 2026' };

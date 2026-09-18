/**
 * ═══════════════════════════════════════════════════════════════════
 * TALKING HER SH*T - SITE CONFIGURATION
 * By Miss Yanelis
 * ═══════════════════════════════════════════════════════════════════
 *
 * This is the ONLY file you need to edit to update website content.
 *
 * HOW IT WORKS:
 *   This file is loaded before the page script. All values are read at
 *   page load time and applied to the site automatically.
 *
 * IMPORTANT:
 *   - Keep this file as valid JavaScript.
 *   - Never delete the outer `window.SITE_CONFIG = { ... };` wrapper.
 *   - If you remove a property, the site falls back to safe defaults.
 *   - Anything marked TODO needs a real value before going live.
 *
 * See CONTENT-EDITING.md for plain-language instructions.
 * ═══════════════════════════════════════════════════════════════════
 */

window.SITE_CONFIG = {

  // ─────────────────────────────────────────────────────────────────
  // BRAND
  // ─────────────────────────────────────────────────────────────────
  brand: {
    siteName:         "Talking Her Sh*t",
    displayName:      "Talking Her Sh*t",
    byline:           "By Miss Yanelis",
    tagline:          "Unfiltered. Unbothered. Unapologetic.",
    shortDescription: "Bold conversations, real stories, and the kind of energy you cannot ignore."
  },

  // ─────────────────────────────────────────────────────────────────
  // ASSETS
  // Only reference approved, final, transparent HQ files.
  // Do NOT swap these for screenshots, drafts, or low-res versions.
  // ─────────────────────────────────────────────────────────────────
  assets: {
    logo: {
      path:     "./assets/logos/final/talking-her-sht-logo-hq.png",
      approved: true,
      notes:    "Final transparent HQ logo. 1115×1411px. Do not replace with screenshot or flattened version."
    },
    microphone: {
      path:     "./assets/images/final/mic-hq.png",
      approved: true,
      notes:    "Final pink chrome dripping microphone. 1024×1536px transparent PNG. Used in hero and final CTA."
    },
    cd: {
      path:     "./assets/images/final/cd-hq.png",
      approved: true,
      notes:    "Final holographic pink dripping CD. 1024×1536px transparent PNG. Used in hero (spinning)."
    },
    portrait: {
      path:     "./assets/images/final/yanelis-portrait.jpg",
      approved: true,
      notes:    "Miss Yanelis portrait. Replace with updated photo if needed. Keep same filename or update this path."
    },
    iconSheetA: {
      path:     "./assets/icons/source/icons-sheet-a.png",
      approved: true,
      notes:    "Sprite sheet A (transparent PNG): mic, CD, headphones, energy rings, play button, waveform. 1024×1536px."
    },
    iconSheetB: {
      path:     "./assets/icons/source/icons-sheet-b.png",
      approved: true,
      notes:    "Sprite sheet B (transparent PNG): diamond cluster, headphones v2, sparkle burst, podcast icon, play button, energy rings. 1024×1536px."
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // SEO
  // ─────────────────────────────────────────────────────────────────
  seo: {
    pageTitle:       "Talking Her Sh*t | By Miss Yanelis",
    metaDescription: "Unfiltered. Unbothered. Unapologetic. Bold podcast conversations by Miss Yanelis. Available on Spotify, Apple Podcasts, and YouTube.",
    ogImage:         "./assets/logos/final/og-image.jpg", // TODO: Create 1200×630px OG image and save here
    keywords:        "talking her shit, miss yanelis, podcast, unfiltered, bold conversations, women podcast"
  },

  // ─────────────────────────────────────────────────────────────────
  // HERO SECTION
  // ─────────────────────────────────────────────────────────────────
  hero: {
    headline:            "Unfiltered.\nUnbothered.\nUnapologetic.",   // Use \n for line breaks
    subheadline:         "Bold conversations, real stories, and the kind of energy you cannot ignore.",
    primaryButtonText:   "Listen Now",
    primaryButtonUrl:    "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",
    secondaryButtonText: "Watch Latest Ep",
    secondaryButtonUrl:  "#",   // TODO: no podcast video destination found yet — replace once episodes are on YouTube, or relabel/remove this button
    audioTeaserLabel:    "Press Play For The Vibe",
    audioTeaserDuration: "15s",
    audioTeaserFile:     "./assets/audio/teaser.mp3"  // TODO: Add a 15-second MP3 teaser file here
  },

  // ─────────────────────────────────────────────────────────────────
  // UPCOMING EPISODE STRIP (banner below the hero)
  // Set show: false to hide it entirely.
  // ─────────────────────────────────────────────────────────────────
  upcomingEpisode: {
    show:      true,
    label:     "This Week On Talking Her Sh*t",
    title:     "\"The Conversation We Needed To Have\"",
    dropDay:   "Drops Friday",
    notifyUrl: "#"  // TODO: Replace with newsletter or notification sign-up URL
  },

  // ─────────────────────────────────────────────────────────────────
  // PODCAST PLATFORM LINKS
  // Set enabled: false to hide any button.
  // ─────────────────────────────────────────────────────────────────
  podcastPlatforms: [
    { label: "Spotify",  url: "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",              enabled: true  },
    { label: "Apple",    url: "https://podcasts.apple.com/us/podcast/talking-her-shit/id1600983984", enabled: true  },
    { label: "YouTube",  url: "#", enabled: false },  // TODO: no episodes found on YouTube yet — enable once they're posted there
    { label: "Amazon",   url: "#", enabled: false }   // TODO: not found on Amazon Music yet — enable once it's live there
  ],

  // ─────────────────────────────────────────────────────────────────
  // SOCIAL LINKS
  // Set enabled: false to hide from footer.
  // ─────────────────────────────────────────────────────────────────
  socialLinks: {
    instagram: { label: "Instagram", url: "https://www.instagram.com/talkinghershit/",             enabled: true  }, // show account (@missyanelis is the host's personal account)
    tiktok:    { label: "TikTok",    url: "#",                                                      enabled: false }, // TODO: Add TikTok URL when ready
    youtube:   { label: "YouTube",   url: "https://www.youtube.com/channel/UCHK-IBwznlMgz5iDPYOspdQ", enabled: true  }, // Miss Yanelis's channel — not podcast-episode-specific yet
    spotify:   { label: "Spotify",   url: "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",  enabled: true  }
  },

  // ─────────────────────────────────────────────────────────────────
  // START HERE EPISODE
  // The recommended entry-point episode shown above the main grid.
  // ─────────────────────────────────────────────────────────────────
  startHereEpisode: {
    episodeLabel: "EP 001 · The One That Started It All",
    title:        "La Reina",
    description:  "The one that started it all. Miss Yanelis answers audience questions, talks her new single “Mala Pa Ti,” and drops the first “Get On Game Girl” segment.",
    duration:     "10 min",
    listenUrl:    "https://anchor.fm/missyanelis/episodes/TALKING-HER-SHIT---EP-1-LA-REINA-e1bs7nq",
    watchUrl:     "#"   // TODO: no video version of this episode exists yet
  },

  // ─────────────────────────────────────────────────────────────────
  // FEATURED EPISODES
  // Add, remove, or reorder episodes here.
  // Set featured: false to hide an episode from the main grid.
  //
  // These are the 3 most recent real episodes (verified against the
  // show's Spotify for Creators profile). Episodes 2 and 3 also exist
  // — add them here the same way if you want a bigger grid.
  // ─────────────────────────────────────────────────────────────────
  featuredEpisodes: [
    {
      id:            "ep006",
      episodeNumber: "EP 006",
      title:         "M Dot The Icon",
      description:   "Miss Yanelis sits down with M Dot — Jamie Foxx's tour DJ and the Miami Heat's DJ — to talk working with the biggest names in entertainment, mental health, and being a father in the industry.",
      duration:      "40 min",
      moodTag:       "Real Talk",
      listenUrl:     "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-6-M-DOT-THE-ICON-e1r5pe3",
      watchUrl:      "#",  // TODO: no video version of this episode exists yet
      shareUrl:      "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-6-M-DOT-THE-ICON-e1r5pe3",
      thumbnailPath: "",   // TODO: Path to episode artwork, e.g. ./assets/images/episodes/ep006.jpg
      featured:      true
    },
    {
      id:            "ep005",
      episodeNumber: "EP 005",
      title:         "It's Rey King",
      description:   "Grammy-nominated producer and platinum engineer Rey King spills on working with some of Hollywood's biggest names.",
      duration:      "19 min",
      moodTag:       "Hot Takes",
      listenUrl:     "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-5-ITS-REY-KING-e1ko821",
      watchUrl:      "#",
      shareUrl:      "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-5-ITS-REY-KING-e1ko821",
      thumbnailPath: "",
      featured:      true
    },
    {
      id:            "ep004",
      episodeNumber: "EP 004",
      title:         "Who Is OG Vinchenzo?",
      description:   "Grammy-winning engineer/producer OG Vinchenzo on working with Scott Storch, Nardo Wick, Nipsey Hussle, Ne-Yo, and more.",
      duration:      "13 min",
      moodTag:       "Fan Fave",
      listenUrl:     "https://anchor.fm/missyanelis/episodes/TALKING-HER-SHIT---EP-4-WHO-IS-OG-VINCHENZO-e1kb200",
      watchUrl:      "#",
      shareUrl:      "https://anchor.fm/missyanelis/episodes/TALKING-HER-SHIT---EP-4-WHO-IS-OG-VINCHENZO-e1kb200",
      thumbnailPath: "",
      featured:      true
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // SOCIAL CLIPS WALL
  // Short clip cards linking to full episodes.
  // ─────────────────────────────────────────────────────────────────
  clips: [
    { caption: "\"She said what needed to be said\"",          views: "1.2M", episodeUrl: "#" },
    { caption: "\"I sent this to my group chat immediately\"", views: "890K", episodeUrl: "#" },
    { caption: "\"No cap, this is the truth\"",                views: "644K", episodeUrl: "#" },
    { caption: "\"The glow-up was non-negotiable\"",           views: "502K", episodeUrl: "#" }
  ],

  // ─────────────────────────────────────────────────────────────────
  // ABOUT
  // ─────────────────────────────────────────────────────────────────
  about: {
    heading:    "Meet Miss Yanelis",
    body:       "A bold voice for real conversations, unapologetic opinions, and stories that go deeper than surface-level talk. Talking Her Sh*t is where glamour, truth, humor, and unfiltered perspective meet.",
    quote:      "\"If we're talking, we're telling the truth.\"",
    buttonText: "Listen to Her Story",
    buttonUrl:  "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O"
  },

  // ─────────────────────────────────────────────────────────────────
  // STATS
  // ─────────────────────────────────────────────────────────────────
  stats: [
    { number: "50K+", label: "Downloads"   },  // TODO: placeholder — replace with real download count
    { number: "6",    label: "Episodes"    },  // real count, verified against the show's Spotify profile
    { number: "1M+",  label: "Views"       },  // TODO: placeholder — replace with real view count
    { number: "24/7", label: "New Moments" }
  ],

  // ─────────────────────────────────────────────────────────────────
  // QUIZ
  // Personality quiz that recommends an episode.
  // ─────────────────────────────────────────────────────────────────
  quiz: {
    question: "What Kind Of Talker Are You?",
    options: [
      { symbol: "✦", title: "The Hot Take Friend",      desc: "You send voice notes first and ask questions never.",  episode: "EP 001 · No Filter, No Fakes",   url: "#" },
      { symbol: "◆", title: "The Truth Teller",         desc: "Sugarcoating is not in your vocabulary.",              episode: "EP 002 · She Said What She Said", url: "#" },
      { symbol: "★", title: "The Soft Life Strategist", desc: "Protecting your peace is a full-time job.",            episode: "EP 003 · The Glow Up Era",        url: "#" },
      { symbol: "●", title: "The Quiet Observer",       desc: "You say nothing and know everything.",                 episode: "EP 004 · Read The Room",          url: "#" },
      { symbol: "♛", title: "The Main Character",       desc: "The plot literally revolves around you.",              episode: "EP 005 · Center Stage",           url: "#" }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // POLL
  // Weekly audience vote. Options rendered automatically.
  // ─────────────────────────────────────────────────────────────────
  poll: {
    question: "What Should We Talk About Next?",
    subtext:  "Your vote shapes the next episode. Cast yours.",
    options:  ["Relationships", "Friendship", "Soft Life", "Money", "Drama", "Self-Worth", "Hot Takes"]
  },

  // ─────────────────────────────────────────────────────────────────
  // REACTION WALL (community testimonials)
  // ─────────────────────────────────────────────────────────────────
  reactions: [
    { quote: "\"She said what needed to be said. I replayed it three times.\"",                     handle: "@thatgirl_deja"            },
    { quote: "\"I sent this to my entire group chat. They all started listening the same day.\"",   handle: "@morningcoffeewithkay"     },
    { quote: "\"This episode was too real. I needed to hear this exactly when it dropped.\"",       handle: "@reallifewithrosa"         },
    { quote: "\"New favorite podcast. Period. I do not take questions.\"",                          handle: "@thesoftlifechronicles"    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // FORMS
  // Connect to a real provider before going live.
  // See HANDOFF.md → "Connecting Real Forms" for instructions.
  // ─────────────────────────────────────────────────────────────────
  forms: {
    newsletter: {
      actionUrl: "",  // TODO: https://formspree.io/f/YOUR_ID  or  Mailchimp embed URL
      provider:  "formspree",  // Options: formspree | mailchimp | convertkit | klaviyo | beehiiv | custom
      notes:     "Replace actionUrl with your email provider form endpoint. Until connected, submissions show a success message but are not stored."
    },
    topicSubmission: {
      actionUrl: "",  // TODO: https://formspree.io/f/YOUR_ID  or  Google Forms action URL
      provider:  "formspree",
      notes:     "Replace actionUrl with your form endpoint. Alternatives: Airtable, Typeform, Google Forms."
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────────────────────────
  footer: {
    copyrightName: "Talking Her Sh*t by Miss Yanelis",
    footerTagline: "Unfiltered · Unbothered · Unapologetic",
    contactEmail:  "missyanelis@gmail.com"  // shown in the footer's Connect column
  }

};

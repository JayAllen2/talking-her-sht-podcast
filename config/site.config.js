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
    primaryButtonUrl:    "#",   // TODO: Replace with Spotify or main podcast URL
    secondaryButtonText: "Watch Latest Ep",
    secondaryButtonUrl:  "#",   // TODO: Replace with YouTube episode URL
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
    { label: "Spotify",  url: "#", enabled: true },  // TODO: https://open.spotify.com/show/...
    { label: "Apple",    url: "#", enabled: true },  // TODO: https://podcasts.apple.com/...
    { label: "YouTube",  url: "#", enabled: true },  // TODO: https://youtube.com/@...
    { label: "Amazon",   url: "#", enabled: true }   // TODO: https://music.amazon.com/...
  ],

  // ─────────────────────────────────────────────────────────────────
  // SOCIAL LINKS
  // Set enabled: false to hide from footer.
  // ─────────────────────────────────────────────────────────────────
  socialLinks: {
    instagram: { label: "Instagram", url: "https://www.instagram.com/missyanelis/", enabled: true  },
    tiktok:    { label: "TikTok",    url: "#",                                      enabled: false }, // TODO: Add TikTok URL when ready
    youtube:   { label: "YouTube",   url: "#",                                      enabled: true  }, // TODO: Add YouTube channel URL
    spotify:   { label: "Spotify",   url: "#",                                      enabled: true  }  // TODO: Add Spotify show URL
  },

  // ─────────────────────────────────────────────────────────────────
  // START HERE EPISODE
  // The recommended entry-point episode shown above the main grid.
  // ─────────────────────────────────────────────────────────────────
  startHereEpisode: {
    episodeLabel: "EP 001 · The One That Started It All",
    title:        "No Filter, No Fakes",
    description:  "Start with the episode that gives you the full Talking Her Sh*t energy in one listen. You'll know in 30 seconds.",
    duration:     "52 min",
    listenUrl:    "#",  // TODO: Replace with real episode URL
    watchUrl:     "#"   // TODO: Replace with real YouTube episode URL
  },

  // ─────────────────────────────────────────────────────────────────
  // FEATURED EPISODES
  // Add, remove, or reorder episodes here.
  // Set featured: false to hide an episode from the main grid.
  // ─────────────────────────────────────────────────────────────────
  featuredEpisodes: [
    {
      id:            "ep001",
      episodeNumber: "EP 001",
      title:         "No Filter, No Fakes",
      description:   "The raw, uncut take on fake friendships and why keeping it 100% is the only currency that matters.",
      duration:      "45 min",
      moodTag:       "Real Talk",
      listenUrl:     "#",  // TODO: Replace with episode URL
      watchUrl:      "#",  // TODO: Replace with YouTube episode URL
      shareUrl:      "#",  // TODO: Replace with shareable link
      thumbnailPath: "",   // TODO: Path to episode artwork, e.g. ./assets/images/episodes/ep001.jpg
      featured:      true
    },
    {
      id:            "ep002",
      episodeNumber: "EP 002",
      title:         "She Said What She Said",
      description:   "When women speak with conviction the world listens, or it should. For the ones who refuse to apologize.",
      duration:      "38 min",
      moodTag:       "Hot Takes",
      listenUrl:     "#",
      watchUrl:      "#",
      shareUrl:      "#",
      thumbnailPath: "",
      featured:      true
    },
    {
      id:            "ep003",
      episodeNumber: "EP 003",
      title:         "The Glow Up Era",
      description:   "Standards, self-respect, and the kind of growth that doesn't ask for permission. Your redemption arc starts now.",
      duration:      "52 min",
      moodTag:       "Fan Fave",
      listenUrl:     "#",
      watchUrl:      "#",
      shareUrl:      "#",
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
    buttonUrl:  "#"  // TODO: Replace with main listen URL
  },

  // ─────────────────────────────────────────────────────────────────
  // STATS
  // ─────────────────────────────────────────────────────────────────
  stats: [
    { number: "50K+", label: "Downloads"   },
    { number: "100+", label: "Episodes"    },
    { number: "1M+",  label: "Views"       },
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
    contactEmail:  ""  // TODO: Add contact email (shown nowhere by default. Add to footer template if needed)
  }

};

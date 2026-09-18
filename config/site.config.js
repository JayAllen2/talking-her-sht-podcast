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
    shortDescription: "Miss Yanelis sits down with the people shaping music and entertainment for honest, unscripted conversations."
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
      notes:    "Final transparent HQ logo. Do not replace with screenshot or flattened version."
    },
    microphone: {
      path:     "./assets/images/final/mic-hq.png",
      approved: true,
      notes:    "Final pink chrome dripping microphone. Transparent PNG. Used as the hero's decorative accent (desktop only)."
    },
    portrait: {
      path:     "./assets/images/final/yanelis-portrait.jpg",
      approved: true,
      notes:    "Miss Yanelis portrait. Used in the hero host badge and the Host section. Replace with an updated photo if needed; keep the same filename or update this path."
    },
    iconSheetA: {
      path:     "./assets/icons/source/icons-sheet-a.png",
      approved: true,
      notes:    "Sprite sheet (transparent PNG): mic, CD, headphones, energy rings, play button, waveform. Reference only — not currently used on the page."
    },
    iconSheetB: {
      path:     "./assets/icons/source/icons-sheet-b.png",
      approved: true,
      notes:    "Sprite sheet (transparent PNG): diamond cluster, headphones v2, sparkle burst, podcast icon, play button, energy rings. Reference only — not currently used on the page."
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // SEO
  // ─────────────────────────────────────────────────────────────────
  seo: {
    pageTitle:       "Talking Her Sh*t | By Miss Yanelis",
    metaDescription: "Miss Yanelis sits down with the people shaping music and entertainment for honest, unscripted conversations. Talking Her Sh*t: unfiltered, unbothered, unapologetic.",
    ogImage:         "./assets/logos/final/og-image.jpg",
    keywords:        "talking her shit, miss yanelis, podcast, kruziano, music industry interviews, unfiltered conversations"
  },

  // ─────────────────────────────────────────────────────────────────
  // HERO SECTION
  // One dominant action: watch the latest real episode.
  // ─────────────────────────────────────────────────────────────────
  hero: {
    headline:          "Unfiltered.\nUnbothered.\nUnapologetic.",   // Use \n for line breaks
    subheadline:       "Miss Yanelis sits down with the people shaping music and entertainment — unscripted, unfiltered conversations about the real work, not the highlight reel.",
    primaryButtonText: "Watch Latest Episode",
    primaryButtonUrl:  "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // LATEST EPISODE
  // The current, real, most-recent episode. Verified against the
  // show's YouTube channel (@missyanelismusic).
  // ─────────────────────────────────────────────────────────────────
  latestEpisode: {
    label:       "Latest Episode",
    title:       "Kruziano: Music, Success & What's Next",
    description: "What does it really take to build a career that lasts in music? Miss Yanelis sits down with Kruziano for an honest, unscripted conversation about the industry and what comes next.",
    date:        "June 25, 2026",
    duration:    "26 min",
    source:      "YouTube",
    watchLabel:  "Watch on YouTube",
    watchUrl:    "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // EPISODES (the archive)
  // The 6 earlier episodes, from when the show ran on Spotify.
  // Verified against the show's Spotify for Creators profile
  // (creators.spotify.com/pod/profile/missyanelis). Newest first.
  // Add more the same way as new back-catalog episodes surface.
  // ─────────────────────────────────────────────────────────────────
  episodes: [
    {
      title:       "M Dot The Icon",
      description: "Miami's own DJ for Jamie Foxx and the Miami Heat on working with the biggest names in entertainment, mental health, and being a father in the industry.",
      date:        "Nov 22, 2022",
      duration:    "40 min",
      url:         "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-6-M-DOT-THE-ICON-e1r5pe3"
    },
    {
      title:       "It's Rey King",
      description: "Grammy-nominated producer and platinum engineer Rey King spills on working with some of Hollywood's biggest names.",
      date:        "Jul 5, 2022",
      duration:    "19 min",
      url:         "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-5-ITS-REY-KING-e1ko821"
    },
    {
      title:       "Who Is OG Vinchenzo?",
      description: "Grammy-winning engineer/producer OG Vinchenzo on working with Scott Storch, Nardo Wick, Nipsey Hussle, Ne-Yo, Wale, and more.",
      date:        "Jun 23, 2022",
      duration:    "13 min",
      url:         "https://anchor.fm/missyanelis/episodes/TALKING-HER-SHIT---EP-4-WHO-IS-OG-VINCHENZO-e1kb200"
    },
    {
      title:       "La Difícil",
      description: "Model and influencer La Yuli on being cast in Bad Bunny's “La Difícil” music video and being a woman in the industry.",
      date:        "Jun 2, 2022",
      duration:    "18 min",
      url:         "https://open.spotify.com/episode/7m0Ienzr3hW6aiqjDgtrBS"
    },
    {
      title:       "Healing 101 & THS Brands",
      description: "Miss Yanelis talks her own brands, a segment on healing, and Bad Bunny's “Un Verano Sin Ti.”",
      date:        "May 28, 2022",
      duration:    "15 min",
      url:         "https://open.spotify.com/episode/1LmpLiJuZRX07rCRC95RrE"
    },
    {
      title:       "La Reina",
      description: "The one that started it all: audience Q&A, her single “Mala Pa Ti,” and the first “Get On Game Girl” segment.",
      date:        "Dec 17, 2021",
      duration:    "10 min",
      url:         "https://anchor.fm/missyanelis/episodes/TALKING-HER-SHIT---EP-1-LA-REINA-e1bs7nq"
    }
  ],

  // ─────────────────────────────────────────────────────────────────
  // FEATURED QUOTE
  // One real, oversized quote — not a card grid. Swap this out when a
  // stronger moment comes along; keep it tied to a real episode link.
  // ─────────────────────────────────────────────────────────────────
  featuredQuote: {
    quote:     "What does it really take to build a career that lasts in music?",
    credit:    "Kruziano, latest episode",
    linkLabel: "Watch",
    url:       "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // PODCAST PLATFORM LINKS
  // Set enabled: false to hide any button.
  // ─────────────────────────────────────────────────────────────────
  podcastPlatforms: [
    { label: "YouTube",  url: "https://www.youtube.com/@missyanelismusic",                            enabled: true  },
    { label: "Spotify",  url: "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",                  enabled: true  },
    { label: "Apple",    url: "https://podcasts.apple.com/us/podcast/talking-her-shit/id1600983984",   enabled: true  },
    { label: "Amazon",   url: "#",                                                                     enabled: false } // TODO: not found on Amazon Music yet — enable once it's live there
  ],

  // ─────────────────────────────────────────────────────────────────
  // SOCIAL LINKS
  // Set enabled: false to hide from footer.
  // ─────────────────────────────────────────────────────────────────
  socialLinks: {
    instagram: { label: "Instagram", url: "https://www.instagram.com/talkinghershit/",             enabled: true  }, // show account (@missyanelis is the host's personal account)
    tiktok:    { label: "TikTok",    url: "#",                                                      enabled: false }, // TODO: Add TikTok URL when ready
    youtube:   { label: "YouTube",   url: "https://www.youtube.com/@missyanelismusic",              enabled: true  },
    spotify:   { label: "Spotify",   url: "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",   enabled: true  }
  },

  // ─────────────────────────────────────────────────────────────────
  // HOST
  // ─────────────────────────────────────────────────────────────────
  about: {
    heading:    "Meet Miss Yanelis",
    body:       "Miss Yanelis — who also records music as La Reina — started Talking Her Sh*t as a space to answer her audience's questions and talk straight through personal segments like “Get On Game Girl” and “Healing 101.” It's grown into sit-down interviews with the people behind music and entertainment: engineers, producers, DJs, and artists, talking honestly about the real work, not the highlight reel.",
    quote:      "\"If we're talking, we're telling the truth.\"",
    buttonText: "Watch Her Latest",
    buttonUrl:  "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // NEWSLETTER
  // Connect actionUrl to a real provider before going live.
  // See HANDOFF.md → "Connecting Real Forms" for instructions.
  // ─────────────────────────────────────────────────────────────────
  newsletter: {
    heading:   "Never Miss An Episode",
    subtext:   "New episodes post on YouTube as they're ready — no fixed schedule yet. Get an email the day a new one's up.",
    actionUrl: "",  // TODO: https://formspree.io/f/YOUR_ID  or  Mailchimp embed URL
    provider:  "formspree",  // Options: formspree | mailchimp | convertkit | klaviyo | beehiiv | custom
    notes:     "Replace actionUrl with your email provider's form endpoint. Until connected, submissions show a success message but are not stored."
  },

  // ─────────────────────────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────────────────────────
  footer: {
    copyrightName: "Talking Her Sh*t by Miss Yanelis",
    footerTagline: "Unfiltered · Unbothered · Unapologetic",
    contactEmail:  "missyanelis@gmail.com"  // shown in the footer's Connect column and linked from the newsletter section
  }

};

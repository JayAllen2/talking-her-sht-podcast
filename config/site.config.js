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
 *   - Every claim here must be true and traceable to a real source.
 *     No invented stats, quotes, or testimonials.
 *
 * See CONTENT-EDITING.md for plain-language instructions.
 * ═══════════════════════════════════════════════════════════════════
 */

window.SITE_CONFIG = {

  // ─────────────────────────────────────────────────────────────────
  // BRAND
  // ─────────────────────────────────────────────────────────────────
  brand: {
    siteName: "Talking Her Sh*t",
    byline:   "By Miss Yanelis"
  },

  // ─────────────────────────────────────────────────────────────────
  // ASSETS
  // Only reference approved, final files.
  // ─────────────────────────────────────────────────────────────────
  assets: {
    logo: {
      path:  "./assets/logos/final/talking-her-sht-logo-hq.png",
      notes: "Final HQ logo on black; the page screen-blends it so the black drops out. Do not replace with a flattened screenshot."
    },
    microphone: {
      path:  "./assets/images/final/mic-hq.png",
      notes: "Pink chrome dripping microphone, transparent PNG. Hero accent, desktop only."
    },
    portrait: {
      path:  "./assets/images/final/yanelis-portrait.jpg",
      notes: "Miss Yanelis portrait. Used in the hero host badge and the Host section. Keep the filename or update this path."
    },
    iconSheetA: {
      path:  "./assets/icons/source/icons-sheet-a.png",
      notes: "Sprite sheet: mic, CD, headphones, energy rings, play button, waveform. Reference only, not used on the page."
    },
    iconSheetB: {
      path:  "./assets/icons/source/icons-sheet-b.png",
      notes: "Sprite sheet: diamond cluster, headphones v2, sparkle burst, podcast icon, play button, energy rings. Reference only, not used on the page."
    }
  },

  // ─────────────────────────────────────────────────────────────────
  // SEO (the page title and meta description; Open Graph tags are
  // static in index.html because most link scrapers do not run JS)
  // ─────────────────────────────────────────────────────────────────
  seo: {
    pageTitle:       "Talking Her Sh*t | By Miss Yanelis",
    metaDescription: "Recording artist Miss Yanelis sits down with the producers, engineers, DJs, and artists behind the music to talk about how the business actually works. Talking Her Sh*t: unfiltered, unbothered, unapologetic."
  },

  // ─────────────────────────────────────────────────────────────────
  // HERO
  // One dominant action: watch the latest real episode.
  // ─────────────────────────────────────────────────────────────────
  hero: {
    headline:          "Unfiltered.\nUnbothered.\nUnapologetic.",   // Use \n for line breaks
    subheadline:       "Recording artist Miss Yanelis sits down with the producers, engineers, DJs, and artists behind the hits to talk about how the music business actually works. No scripts, no PR answers.",
    primaryButtonText: "Watch Latest Episode",
    primaryButtonUrl:  "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // GUEST CREDITS (the credibility strip under the hero)
  // Real guests only, described the way their own episodes describe
  // them. Keep to 4 or 5 so it reads as a strip, not a list.
  // ─────────────────────────────────────────────────────────────────
  guestCredits: {
    label: "Guests have included",
    items: [
      { name: "OG Vinchenzo", role: "Grammy-winning engineer and producer" },
      { name: "Rey King",     role: "Grammy-nominated producer" },
      { name: "M Dot",        role: "Tour DJ for Jamie Foxx and the Miami Heat" },
      { name: "Kruziano",     role: "Recording artist" },
      { name: "La Yuli",      role: "Cast in Bad Bunny's La Difícil" }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // LATEST EPISODE
  // The current, real, most recent episode. Verified against the
  // show's YouTube channel (@missyanelismusic). youtubeId drives the
  // on-page player and its thumbnail.
  // ─────────────────────────────────────────────────────────────────
  latestEpisode: {
    label:       "Latest Episode",
    title:       "Kruziano: Music, Success & What's Next",
    description: "Miss Yanelis sits down with Kruziano for an honest, unscripted conversation about longevity in the music industry, what it costs, and what comes next.",
    date:        "Jun 25, 2026",
    duration:    "26 min",
    source:      "YouTube",
    youtubeId:   "UCpr_kE2s9E",
    watchLabel:  "Watch on YouTube",
    watchUrl:    "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // EPISODES (the archive)
  // The 6 earlier episodes, from when the show ran on Spotify.
  // Verified against the show's Spotify for Creators profile
  // (creators.spotify.com/pod/profile/missyanelis). Newest first.
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
      description: "Grammy-winning engineer and producer OG Vinchenzo on working with Scott Storch, Nardo Wick, Nipsey Hussle, Ne-Yo, Wale, and more.",
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
  // One real, oversized quote. Swap it when a stronger moment comes
  // along; keep it tied to a real episode link.
  // ─────────────────────────────────────────────────────────────────
  featuredQuote: {
    quote:      "What does it really take to build a career that lasts in music?",
    credit:     "The latest episode, with Kruziano",
    linkLabel:  "Watch",
    url:        "https://www.youtube.com/watch?v=UCpr_kE2s9E",
    shareImage: "./assets/logos/final/share-quote-kruziano.jpg" // 1080x1080 downloadable share image; regenerate if the quote changes
  },

  // ─────────────────────────────────────────────────────────────────
  // PODCAST PLATFORM LINKS
  // Set enabled: false to hide any button.
  // ─────────────────────────────────────────────────────────────────
  podcastPlatforms: [
    { label: "YouTube",  url: "https://www.youtube.com/@missyanelismusic",                            enabled: true  },
    { label: "Spotify",  url: "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",                  enabled: true  },
    { label: "Apple",    url: "https://podcasts.apple.com/us/podcast/talking-her-shit/id1600983984",   enabled: true  },
    { label: "Amazon",   url: "#",                                                                     enabled: false } // TODO: not on Amazon Music yet; enable once it is
  ],

  // ─────────────────────────────────────────────────────────────────
  // SOCIAL LINKS
  // Set enabled: false to hide from footer.
  // ─────────────────────────────────────────────────────────────────
  socialLinks: {
    instagram: { label: "Instagram", url: "https://www.instagram.com/talkinghershit/",             enabled: true  }, // show account (@missyanelis is the host's personal account)
    tiktok:    { label: "TikTok",    url: "#",                                                      enabled: false }, // TODO: add TikTok URL when ready
    youtube:   { label: "YouTube",   url: "https://www.youtube.com/@missyanelismusic",              enabled: true  },
    spotify:   { label: "Spotify",   url: "https://open.spotify.com/show/3GHaGbPcpZmkXpfnpPo76O",   enabled: true  }
  },

  // ─────────────────────────────────────────────────────────────────
  // HOST
  // Credentials first. Everything here is verifiable from her own
  // releases and episode notes.
  // ─────────────────────────────────────────────────────────────────
  about: {
    heading:    "Meet Miss Yanelis",
    body:       "Miss Yanelis is a recording artist (she releases as La Reina, including collaborations with Ball Greezy) and the creator of Talking Her Sh*t. She started the show answering her audience's questions through segments like Get On Game Girl and Healing 101. It has grown into sit-down interviews with the people behind the music: Grammy-winning engineers, Grammy-nominated producers, and the DJs and artists who built careers on their own terms. The through line is access. Real conversations about how the business actually works, from people who work in it.",
    quote:      "\"If we're talking, we're telling the truth.\"",
    buttonText: "Watch Her Latest",
    buttonUrl:  "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // BUSINESS (partnerships, press, bookings)
  // ─────────────────────────────────────────────────────────────────
  business: {
    label:      "Partnerships & Press",
    heading:    "Work With Miss Yanelis",
    text:       "Sponsorships, brand partnerships, press requests, and guest bookings.",
    buttonText: "Start a Conversation",
    subject:    "Talking Her Sh*t: partnership inquiry"
  },

  // ─────────────────────────────────────────────────────────────────
  // NEWSLETTER
  // Until actionUrl is connected to a real provider, the page shows an
  // honest email fallback instead of a form that pretends to work.
  // ─────────────────────────────────────────────────────────────────
  newsletter: {
    heading:   "Never Miss An Episode",
    subtext:   "New episodes post on YouTube as they're ready, no fixed schedule yet. Get an email the day a new one is up.",
    actionUrl: "",  // TODO: https://formspree.io/f/YOUR_ID or your email provider's form endpoint
    provider:  "formspree"  // Options: formspree | mailchimp | convertkit | klaviyo | beehiiv | custom
  },

  // ─────────────────────────────────────────────────────────────────
  // FOOTER
  // ─────────────────────────────────────────────────────────────────
  footer: {
    copyrightName: "Talking Her Sh*t by Miss Yanelis",
    footerTagline: "Unfiltered · Unbothered · Unapologetic",
    contactEmail:  "missyanelis@gmail.com"  // footer Connect column, newsletter fallback, and the partnerships button
  }

};

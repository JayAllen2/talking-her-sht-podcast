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

  // The pre-show soundtrack. Volume runs from 0 to 1.
  // Visitors choose sound once; their choice is remembered on this device.
  soundtrack: {
    enabled: true,
    title: "TALKINTHAT",
    path: "./assets/audio/talkinthat.mp3",
    volume: 0.5
  },

  // ─────────────────────────────────────────────────────────────────
  // ASSETS
  // Only reference approved, final files.
  // ─────────────────────────────────────────────────────────────────
  assets: {
    logo: {
      path:  "./assets/logos/final/talking-her-sht-logo-refined.png",
      notes: "Refined transparent landscape lockup with built-in clear space. Preserve its aspect ratio and full edges; do not crop, mask, or flatten it. Original artwork is retained as talking-her-sht-logo-hq.png."
    },
    microphone: {
      path:  "./assets/images/final/mic-hq.png",
      notes: "Pink chrome dripping microphone, transparent PNG. Hero accent, desktop only."
    },
    portrait: {
      path:  "./assets/images/final/yanelis-portrait.jpg",
      notes: "Miss Yanelis portrait. Used in the Host section. Keep the filename or update this path."
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
    metaDescription: "Behind the music. Beyond the image. Miss Yanelis talks creativity, ambition, and life in the industry with artists, producers, and the people shaping the sound."
  },

  // ─────────────────────────────────────────────────────────────────
  // HERO
  // One dominant action: watch the featured conversation on this page.
  // ─────────────────────────────────────────────────────────────────
  hero: {
    headline:          "Behind the music.\nBeyond the image.",
    subheadline:       "Miss Yanelis gets into creativity, ambition, and life in the industry with the artists and insiders living it.",
    primaryButtonText: "Watch Now",
    primaryButtonUrl:  "#latest"
  },

  // ─────────────────────────────────────────────────────────────────
  // GUEST CREDITS (the credibility strip under the hero)
  // Real guests only, described the way their own episodes describe
  // them. Keep to 4 or 5 so it reads as a strip, not a list.
  // ─────────────────────────────────────────────────────────────────
  guestCredits: {
    label: "At the mic",
    items: [
      { name: "OG Vinchenzo", role: "Grammy-winning engineer and producer" },
      { name: "Rey King",     role: "Grammy-nominated producer" },
      { name: "M Dot",        role: "Tour DJ for Jamie Foxx and the Miami Heat" },
      { name: "Kruziano",     role: "Recording artist" },
      { name: "La Yuli",      role: "Cast in Bad Bunny's La Difícil" }
    ]
  },

  // ─────────────────────────────────────────────────────────────────
  // FEATURED CONVERSATION
  // youtubeId drives the on-page player and its thumbnail.
  // Present the show through its guests and subjects, not a timeline.
  // ─────────────────────────────────────────────────────────────────
  latestEpisode: {
    label:       "Featured Episode",
    title:       "Kruziano: Music, Success & What's Next",
    description: "Kruziano joins Miss Yanelis to talk ambition, the cost of success, and building a career in music on his own terms.",
    duration:    "26 min",
    source:      "YouTube",
    youtubeId:   "UCpr_kE2s9E",
    watchLabel:  "Watch on YouTube",
    watchUrl:    "https://www.youtube.com/watch?v=UCpr_kE2s9E"
  },

  // ─────────────────────────────────────────────────────────────────
  // SELECTED CONVERSATIONS
  // Keep release dates, episode numbering, and origin-story copy off the site.
  // Describe the guest and the conversation without framing the show's age.
  // ─────────────────────────────────────────────────────────────────
  episodes: [
    {
      title:       "M Dot The Icon",
      description: "Jamie Foxx and Miami Heat DJ M Dot on the music business, mental health, and fatherhood beyond the booth.",
      duration:    "40 min",
      url:         "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-6-M-DOT-THE-ICON-e1r5pe3"
    },
    {
      title:       "It's Rey King",
      description: "The work behind the records, with Grammy-nominated producer and platinum engineer Rey King.",
      duration:    "19 min",
      url:         "https://creators.spotify.com/pod/profile/missyanelis/episodes/TALKING-HER-SHIT---EP-5-ITS-REY-KING-e1ko821"
    },
    {
      title:       "Who Is OG Vinchenzo?",
      description: "Inside the studio with the Grammy-winning engineer and producer who has worked with Scott Storch, Ne-Yo, and Nipsey Hussle.",
      duration:    "13 min",
      url:         "https://anchor.fm/missyanelis/episodes/TALKING-HER-SHIT---EP-4-WHO-IS-OG-VINCHENZO-e1kb200"
    },
    {
      title:       "La Difícil",
      description: "La Yuli on being cast in Bad Bunny's “La Difícil” and her experience as a woman in the industry.",
      duration:    "18 min",
      url:         "https://open.spotify.com/episode/7m0Ienzr3hW6aiqjDgtrBS"
    },
    {
      title:       "Healing 101 & THS Brands",
      description: "Miss Yanelis gets into healing, her brands, and Bad Bunny's “Un Verano Sin Ti.”",
      duration:    "15 min",
      url:         "https://open.spotify.com/episode/1LmpLiJuZRX07rCRC95RrE"
    },
    {
      title:       "La Reina",
      description: "Audience questions, “Mala Pa Ti,” and Get On Game Girl with Miss Yanelis.",
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
    credit:     "In conversation with Kruziano",
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
    { label: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/talking-her-shit/id1600983984", enabled: false }, // Re-enable only with a verified live show page.
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
    heading:    "Miss Yanelis",
    body:       "Miss Yanelis is a recording artist and the voice behind Talking Her Sh*t. Her work as La Reina includes collaborations with Ball Greezy. She brings that artist's perspective to conversations about creativity, ambition, and the life behind the music.",
    buttonText: "Watch the Show",
    buttonUrl:  "#latest"
  },

  // ─────────────────────────────────────────────────────────────────
  // BUSINESS (partnerships, press, bookings)
  // ─────────────────────────────────────────────────────────────────
  business: {
    label:      "Partnerships & Press",
    heading:    "Partner with the show",
    text:       "For brand partnerships, guest bookings, and press inquiries.",
    buttonText: "Get in Touch",
    subject:    "Talking Her Sh*t: partnership inquiry"
  },

  // ─────────────────────────────────────────────────────────────────
  // NEWSLETTER
  // Use the real YouTube subscription destination while no email provider
  // is connected. Never show setup notices or imply a working email signup.
  // ─────────────────────────────────────────────────────────────────
  newsletter: {
    heading:   "Stay in the conversation",
    subtext:   "Interviews, guest moments, and more from Miss Yanelis.",
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

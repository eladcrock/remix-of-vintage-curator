/**
 * Scoma's story data — history, awards, press, philosophy, media.
 * Sourced from scomas.com (about, history, home), San Francisco Chronicle,
 * Newsweek, Golden Gate Restaurant Association, and SF Board of Supervisors.
 *
 * Image URLs are direct links to Scoma's own WordPress media library —
 * hand-edit to swap in different photos.
 */

export type TimelineEvent = {
  year: string;
  title: string;
  body: string;
};

export type Award = {
  year?: string;
  org: string;
  title: string;
  note?: string;
};

export type PressQuote = {
  outlet: string;
  quote: string;
  context?: string;
};

export type MediaPhoto = {
  src: string;
  caption: string;
};

export const PHILOSOPHY = {
  tagline: "Pier to Plate since 1965.",
  motto: "FLOSS — Fresh, Local, Organic, Sustainable, Seasonal.",
  body: [
    "Scoma's was built around the boats. Pier 47 was a working dock long before it was a destination, and the restaurant's relationship with the local fleet is literal — fish is unloaded at the Scoma's Fish Receiving Station, walked across the pier, and into the kitchen.",
    "Three generations of family ownership have kept one principle constant: the restaurant exists to serve the fishermen's catch. Everything else — the wine list, the cocktails, the dining rooms — is built around that.",
    "Sustainability isn't a marketing layer. Scoma's is a partner of Monterey Bay Aquarium's Seafood Watch, certified by the Aquarium of the Bay Sustainable Seafood Alliance, and has won consecutive environmental awards for diverting over 90% of its waste from the landfill stream.",
  ],
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: "1965",
    title: "Six stools on Pier 47",
    body: "Brothers Al and Joe Scoma buy a tiny coffee shop on Pier 47, cooking their mother's recipes for the local fishermen who tie up out back.",
  },
  {
    year: "1966",
    title: "First expansion",
    body: "On Scoma's first anniversary the brothers open a new dining room to keep up with demand.",
  },
  {
    year: "1970",
    title: "Scoma's Sausalito",
    body: "With partners Roland and Victor Gotti, the Scomas open a second location on the Sausalito waterfront.",
  },
  {
    year: "Late 1970s",
    title: "F/V Scoma's launches",
    body: "Scoma's commissions its own commercial fishing vessel — the F/V Scoma's — to guarantee the freshest catch directly off its own boat.",
  },
  {
    year: "1993",
    title: "Pier 47 Fish Receiving Station",
    body: "A new state-of-the-art fish receiving facility opens on the pier, dedicated to co-founder Joe Scoma. Public windows let guests watch fish come straight off the boats.",
  },
  {
    year: "2002",
    title: "Al Scoma Way",
    body: "The San Francisco Board of Supervisors renames Jones Alley to Al Scoma Way, honoring Al's contribution to the city and the Wharf.",
  },
  {
    year: "2015",
    title: "Golden Anniversary remodel",
    body: "A retro-styled refresh of the bars and dining rooms. The 1965 Manhattan launches — barrel-aged for 1965 hours in honor of the founding year. The wine-on-tap program eliminates 30,000+ bottles a year from the waste stream.",
  },
  {
    year: "2017",
    title: "Saucy Award · Most Sustainable Restaurant",
    body: "Awarded by the Golden Gate Restaurant Association.",
  },
  {
    year: "2018",
    title: "Saucy People's Choice Award",
    body: "A guest-voted recognition of Scoma's 50+ years of hospitality.",
  },
  {
    year: "2019",
    title: "Mindful Supper series",
    body: "A dinner series pairing food and drink exclusively from partners committed to sustainable practices.",
  },
  {
    year: "2025",
    title: "60 years on the Wharf",
    body: "Scoma's marks six decades as a working-pier seafood house — still family-owned, still receiving boats at its own dock.",
  },
];

export const AWARDS: Award[] = [
  {
    org: "San Francisco Chronicle",
    title: "Top 100 Bay Area Restaurants",
    note: "Long-running editorial recognition.",
  },
  {
    org: "OpenTable",
    title: "Top 10 Most-Booked Restaurants in San Francisco",
    note: "Diner ratings: 4.7 Food · 4.7 Service · 4.6 Ambiance.",
  },
  {
    org: "Newsweek",
    title: "One of the Best Clam Chowder Recipes in the Country",
    note: "Scoma's Famous Clam Chowder.",
  },
  {
    year: "2017",
    org: "Golden Gate Restaurant Association",
    title: "Saucy Award — Most Sustainable Restaurant",
  },
  {
    year: "2018",
    org: "Golden Gate Restaurant Association",
    title: "Saucy People's Choice Award",
  },
  {
    org: "Aquarium of the Bay",
    title: "Sustainable Seafood Alliance — Certified Partner",
    note: "100% sustainable seafood commitment.",
  },
  {
    org: "Monterey Bay Aquarium",
    title: "Seafood Watch Partner",
  },
  {
    org: "City & County of San Francisco",
    title: "Al Scoma Way · street renaming (2002)",
    note: "Jones Alley was renamed in recognition of Al Scoma's contribution to the Wharf.",
  },
  {
    org: "San Francisco Legacy Business Registry",
    title: "Registered Legacy Business",
    note: "Recognized by the city for longstanding cultural contribution.",
  },
  {
    org: "Where Magazine",
    title: "Reader's Choice Favorite Restaurant",
    note: "Consecutive years in visitor polls.",
  },
];

export const PRESS: PressQuote[] = [
  {
    outlet: "San Francisco Chronicle",
    quote:
      "An old-school waterfront classic that still does the things that put Fisherman's Wharf on the map.",
    context: "Top 100 Bay Area Restaurants",
  },
  {
    outlet: "Newsweek",
    quote: "Among the best clam chowder recipes in the country.",
  },
  {
    outlet: "OpenTable diner reviews",
    quote:
      "Locals and tourists alike laud these 'old-school' 'family favorites.' Known for 'keeping the quality up' and serving only 'top-notch' Italian-style seafood — from 'wonderful crab' to their 'must-try cioppino.'",
  },
  {
    outlet: "Gordon Drysdale, Culinary Director",
    quote:
      "You can see the timeless relationship between local fishermen and Scoma's at work on the pier.",
  },
  {
    outlet: "The Scoma Family",
    quote:
      "We started with six stools and our Mother's recipes as a restaurant for fishermen and soon became the place that served their daily catch.",
  },
];

/**
 * Direct CDN URLs from scomas.com/wp-content/media — these are the same
 * brand photos used on the restaurant's own About page.
 */
export const MEDIA: MediaPhoto[] = [
  {
    src: "https://scomas.com/wp-content/media/Scomas_Crab2Hero_TopDown_G9-1.jpg",
    caption: "Roasted Dungeness crab — the signature plate.",
  },
  {
    src: "https://scomas.com/wp-content/media/Scomas_1965Manhattan.jpg",
    caption: "The 1965 Manhattan — barrel-aged for 1,965 hours.",
  },
  {
    src: "https://scomas.com/wp-content/media/tom-cheryl-e1566500824920.jpg",
    caption: "Tom and Cheryl Scoma outside San Francisco City Hall.",
  },
  {
    src: "https://scomas.com/wp-content/media/IMG_0443.jpeg",
    caption: "Wild salmon over russet potatoes and asparagus, with rosé and a Bay view.",
  },
  {
    src: "https://scomas.com/wp-content/media/Scomas_October2023_CarlyHackbarthc-074-scaled.jpg",
    caption: "The Pier 47 dining room.",
  },
  {
    src: "https://scomas.com/wp-content/media/Window-tables-scaled-e1695751734432.jpg",
    caption: "Window tables with a working-pier view.",
  },
  {
    src: "https://scomas.com/wp-content/media/Brunch-2-pier-scaled-e1600465159269.jpg",
    caption: "Brunch on the pier.",
  },
  {
    src: "https://scomas.com/wp-content/media/BarGlenRm-e1687820143227.jpeg",
    caption: "The Bar — a fishing boat tied up just outside the window.",
  },
  {
    src: "https://scomas.com/wp-content/media/House-mule-Apothecary-espresso-martini-Bay-rilla-rose-scaled.jpg",
    caption: "House cocktails — Mule, Apothecary, espresso martini, Bay-rilla, rosé.",
  },
  {
    src: "https://scomas.com/wp-content/media/crab-e1709448946288.jpeg",
    caption: "Garlic roasted crab.",
  },
  {
    src: "https://scomas.com/wp-content/media/outdoor-dining23-scaled.jpg",
    caption: "Outdoor dining on the pier.",
  },
  {
    src: "https://scomas.com/wp-content/media/Scomas_August2023_CarlyHackbarthc-37-scaled.jpg",
    caption: "Service in the main dining room.",
  },
];

export const VIDEOS = [
  {
    title: "Pier to Plate — Scoma's in action",
    youtubeId: "c0vU2ZkmKQg",
  },
  {
    title: "Scoma's — featured on the home page",
    youtubeId: "MyyT2bR2qu0",
  },
];

export const FACTS = {
  founded: "May 1965",
  address: "1965 Al Scoma Way · Pier 47, Fisherman's Wharf · San Francisco, CA 94133",
  phone: "(415) 771-4383",
  email: "seafood@scomas.com",
  generations: "Family-owned for three generations",
  wasteDiversion: "90%+ of waste diverted from landfill",
  bottlesSaved: "30,000+ wine bottles a year eliminated via wine-on-tap",
};

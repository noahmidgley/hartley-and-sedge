export function img(path: string, w: number, q = 80) {
  return `${path}?q=${q}&fm=jpg&fit=crop&crop=entropy&w=${w}`;
}

export const IMAGES = {
  heroMist: "https://images.unsplash.com/photo-1696279976107-4d80eb0a7d82",
  wyckManor: "https://images.unsplash.com/photo-1783248767412-8bd4951f265f",
  oldRectory: "https://images.unsplash.com/photo-1779538113139-d36ae431a448",
  aldermoor: "https://images.unsplash.com/photo-1780337919968-1c57f11a666f",
  quarryHouse: "https://images.unsplash.com/photo-1788359085815-30bc372270a8",
  thistlebrook: "https://images.unsplash.com/photo-1775678180194-7ef54e248e5b",
  sedgecombe: "https://images.unsplash.com/photo-1776757760051-f20d1c359bcf",
  founder: "https://images.unsplash.com/photo-1789217783729-885520eccac3",
  notebook: "https://images.unsplash.com/photo-1784540065208-2d0670f64210",
  seedlings: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
  trowel: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
  cotswoldRow: "https://images.unsplash.com/photo-1786588116882-edef1a1da840",
} as const;

export const BRAND = {
  name: "Hartley & Sedge",
  short: "H&S",
  tagline: "Garden & Landscape Design",
  location: "Cirencester, Gloucestershire",
  founded: 2011,
  phone: "01285 700 418",
  email: "studio@hartleyandsedge.co.uk",
  address: ["The Long Room", "14 Dyer Street", "Cirencester, Gloucestershire", "GL7 2PP"],
  instagram: "@hartleyandsedge",
};

export type Stop = {
  no: string;
  id: string;
  label: string;
  short: string;
};

export const STOPS: Stop[] = [
  { no: "01", id: "gardens", label: "The Gardens", short: "Gardens" },
  { no: "02", id: "trail", label: "The Trail", short: "Trail" },
  { no: "03", id: "founder", label: "The Founder", short: "Founder" },
  { no: "04", id: "in-print", label: "In Print", short: "In Print" },
  { no: "05", id: "visit", label: "Visit", short: "Visit" },
];

export const PROCESS_STEPS = [
  {
    no: "01",
    title: "Consultation",
    detail:
      "We walk the ground together — the whole plot, not just the flower beds — and listen for how you actually live outside before a single line is drawn.",
  },
  {
    no: "02",
    title: "Concept & Masterplan",
    detail:
      "A hand-drawn masterplan ties structure to the house: sightlines, levels, the bones that will still make sense in twenty years.",
  },
  {
    no: "03",
    title: "Planting Palette",
    detail:
      "A season-by-season palette chosen for your soil, aspect and light — never a signature look applied twice.",
  },
  {
    no: "04",
    title: "Build Oversight",
    detail:
      "We stay on site through every course of stone and every root ball, working alongside your contractor or ours.",
  },
  {
    no: "05",
    title: "Aftercare",
    detail:
      "Three seasons of tending, adjusting and note-taking, until the garden finds its own rhythm and needs us less.",
  },
] as const;

export type Project = {
  no: string;
  name: string;
  place: string;
  year: string;
  summary: string;
  detail: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    no: "02",
    name: "Wyck Manor",
    place: "near Bibury, Gloucestershire",
    year: "2024",
    summary: "Wisteria walk & walled garden restoration",
    detail:
      "A Queen Anne manor's century-old wisteria was smothering its own supports. We rebuilt the walk, restored the walled garden behind it to a working parterre, and gave the topiary room to breathe again.",
    image: IMAGES.wyckManor,
  },
  {
    no: "03",
    name: "The Old Rectory",
    place: "Burford, Oxfordshire",
    year: "2022",
    summary: "New perennial borders & cutting garden",
    detail:
      "Eighteen months from bare lawn to a self-seeding border that peaks three times a year, threaded by a stone path salvaged from the original coach house.",
    image: IMAGES.oldRectory,
  },
  {
    no: "04",
    name: "Aldermoor Grange",
    place: "Cirencester, Gloucestershire",
    year: "2020",
    summary: "Parterre renewal & lime avenue",
    detail:
      "A pleached lime avenue planted in 2003 had never been formatively pruned. We recovered its geometry and rebuilt the box parterre it leads to, cell by cell.",
    image: IMAGES.aldermoor,
  },
  {
    no: "05",
    name: "Quarry House",
    place: "Painswick, Gloucestershire",
    year: "2023",
    summary: "Terraced hillside garden on Cotswold stone",
    detail:
      "A near-vertical plot above an old quarry face, terraced in reclaimed stone and planted to hold the bank — nothing that needed staking, nothing that minded the wind.",
    image: IMAGES.quarryHouse,
  },
  {
    no: "06",
    name: "Thistlebrook",
    place: "Chipping Campden, Gloucestershire",
    year: "2023",
    summary: "Courtyard & cutting garden, barn conversion",
    detail:
      "A sheltered courtyard for a newly converted threshing barn, built for pots that move with the seasons and a cutting bed within reach of the kitchen door.",
    image: IMAGES.thistlebrook,
  },
  {
    no: "07",
    name: "Sedgecombe Farm",
    place: "Wiltshire",
    year: "2021",
    summary: "Walled kitchen garden & orchard masterplan",
    detail:
      "A working farmhouse's forgotten walled garden, brought back into productive use with a box-edged kitchen garden and a young orchard laid out for the next generation.",
    image: IMAGES.sedgecombe,
  },
];

export const PRESS = [
  { name: "The English Garden", note: "Featured portfolio, Spring 2024" },
  { name: "Gardens Illustrated", note: "Design profile, 2023" },
  { name: "House & Garden", note: "One to Watch, 2022" },
  { name: "Country Life", note: "Houses & Gardens, 2021" },
  { name: "RHS Malvern Spring", note: "Gold Medal, Show Gardens, 2019" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Eleanor understood our garden before we did. She spent an hour just walking it before she said a word.",
    name: "Selina & Tom Fairweather",
    place: "Wyck Manor",
  },
  {
    quote:
      "Twelve years on, the borders still surprise us every June. That was never the brief — it just happened.",
    name: "Harriet Vane",
    place: "The Old Rectory",
  },
  {
    quote:
      "She designs for the way we actually live outside, not for a photograph. Our dogs, our terrible weather, all of it.",
    name: "James Coulter",
    place: "Quarry House",
  },
] as const;

export const FOUNDER = {
  name: "Eleanor Hartley",
  role: "Founder & Principal Designer",
  bio: [
    "Eleanor trained at the RHS before spending six years designing for two established Cotswold practices. She founded Hartley & Sedge in 2011 with a single conviction: a garden should feel like it grew out of an argument between the house and the land, not a catalogue.",
    "She still visits every site herself before a masterplan is drawn, and still carries a trowel in the car.",
    "Fourteen years on, and still the studio's only principal designer, she has now drawn somewhere past a hundred and forty gardens — never once repeating the same border twice.",
  ],
};

export const CONTACT_BUDGETS = [
  "Under £15,000",
  "£15,000 – £40,000",
  "£40,000 – £100,000",
  "£100,000+",
  "Not sure yet",
];

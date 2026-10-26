export const SITE = {
  name: 'Palude',
  domain: 'palude.ir',
  url: 'https://palude.ir',
  tagline: 'Iranian Export & Wholesale Sourcing for International B2B Buyers',
  description:
    'Palude connects international B2B importers with verified Iranian suppliers of saffron, Persian carpets, pistachios, dates, dried fruits, minerals, petrochemicals and food products. Direct sourcing, export documentation, and cold-chain logistics from Iran.',
  email: 'info@palude.ir',
  phoneDisplay: '09143403431',
  phoneE164: '+989143403431',
  whatsapp: '989143403431',
  telegram: '+989143403431',
  instagram: 'vahid.gholipour2026',
  instagramUrl: 'https://instagram.com/vahid.gholipour2026',
  address: 'Urmia, West Azerbaijan, Iran',
  founded: 2016,
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV: NavItem[] = [
  { label: 'Saffron', href: '/export/iranian-saffron-super-negin/' },
  { label: 'Persian Carpet', href: '/export/persian-rug-9x12-hand-knotted/' },
  { label: 'Pistachios', href: '/export/bulk-fandoghi-pistachios-wholesale/' },
  { label: 'Dates & Dried Fruits', href: '/export/mazafati-dates-bulk-import/' },
  { label: 'Minerals & Industrial', href: '/export/persian-travertine-marble-supplier/' },
  { label: 'Petrochemicals', href: '/export/iranian-polyethylene-film-grade/' },
  { label: 'Food Products', href: '/export/golden-almonds-iran-sourcing/' },
  { label: 'Urmia Apples', href: '/export/urmia-apple-export-wholesale/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

export type Category = {
  slug: string;
  label: string;
  href: string;
  blurb: string;
  image: string;
  alt: string;
  keywords: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: 'saffron',
    label: 'Saffron',
    href: '/export/iranian-saffron-super-negin/',
    blurb:
      'Super Negin, Sargol and Negin grade A++ Iranian saffron in bulk for European and Gulf importers.',
    image:
      'https://images.pexels.com/photos/33654800/pexels-photo-33654800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Close-up of vibrant red Iranian Super Negin saffron threads',
    keywords: [
      'Super Negin Iranian Saffron',
      'Iranian Sargol Saffron Bulk',
      'Bulk Iranian Saffron Supply Grade A++',
      'Direct Import Saffron from Iran',
      'Pure Saffron Threads Iranian Negin',
    ],
  },
  {
    slug: 'persian-carpet',
    label: 'Persian Carpet',
    href: '/export/persian-rug-9x12-hand-knotted/',
    blurb:
      'Hand-knotted Persian rugs from Tabriz and Heriz, including 9x12, 400 KPSI, silk prayer and antique pieces.',
    image:
      'https://images.pexels.com/photos/39304487/pexels-photo-39304487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Artisan weaving an intricate hand-knotted Persian carpet in Tabriz',
    keywords: [
      '9x12 Persian Rug Hand-Knotted',
      '400 KPSI Hand-Knotted Persian Rug',
      'Antique Pre-1900 Heriz Rug',
      'Tabriz Silk Prayer Rug',
      'Authentic Handwoven Vintage Persian Rug',
      'Silk Foundation Wool Pile Persian Rug',
    ],
  },
  {
    slug: 'pistachios',
    label: 'Pistachios',
    href: '/export/bulk-fandoghi-pistachios-wholesale/',
    blurb:
      'Fandoghi and closed-mouth Iranian pistachios in bulk, plus pistachio butter for industrial buyers and Russia.',
    image:
      'https://images.pexels.com/photos/20346554/pexels-photo-20346554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Heap of Iranian Fandoghi pistachios in a stainless steel bowl',
    keywords: [
      'Buying Fandoghi Pistachios in Bulk',
      'Bulk Closed Mouth Pistachio Wholesale',
      'Most Economical Iranian Pistachio for Industrial Buyers',
      'Iranian Pistachio Supplier for Russia',
      'Pistachio Butter Bulk Supply Wholesale',
    ],
  },
  {
    slug: 'dates-dried-fruits',
    label: 'Dates & Dried Fruits',
    href: '/export/mazafati-dates-bulk-import/',
    blurb:
      'Mazafati dates from Bam and Jiroft, pistachio-stuffed dates, and premium Iranian dried fruit combos for importers.',
    image:
      'https://images.pexels.com/photos/15913423/pexels-photo-15913423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Organic Iranian Mazafati dates showing rich texture and color',
    keywords: [
      'Best Time to Buy Dates from Iran in Bulk',
      'Mazafati Dates Bam vs Jiroft Wholesale',
      'Selective Layering Mazafati Dates Bulk Import',
      'Premium Iranian Dry Fruits Supplier',
      'Pistachio Stuffed Dates Buy Iran',
      'Bulk Dried Fruit Combo Iran',
    ],
  },
  {
    slug: 'minerals-industrial',
    label: 'Minerals & Industrial',
    href: '/export/persian-travertine-marble-supplier/',
    blurb:
      'Persian travertine and marble slabs, plus Iranian bitumen 60/70 in bulk for road construction export.',
    image:
      'https://images.pexels.com/photos/37845014/pexels-photo-37845014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of a Persian travertine and marble quarry face',
    keywords: [
      'Direct Iranian Sourcing Export Travertine Marble',
      'Persian Marble Slabs Supplier',
      'Iranian Bitumen 60/70 Bulk Export',
    ],
  },
  {
    slug: 'petrochemicals',
    label: 'Petrochemicals',
    href: '/export/iranian-polyethylene-film-grade/',
    blurb:
      'Iranian polyethylene film grade, methanol in bulk, and urea fertilizer for wholesale export to global buyers.',
    image:
      'https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Aerial view of an Iranian petrochemical refinery with storage tanks',
    keywords: [
      'Iranian Polyethylene Film Grade Supplier',
      'Methanol Bulk Supply Iran Origin',
      'Urea Fertilizer Export Iran Wholesale',
    ],
  },
  {
    slug: 'food-products',
    label: 'Food Products',
    href: '/export/golden-almonds-iran-sourcing/',
    blurb:
      'Golden almonds direct from Iran, plus saffron and nuts gift boxes for wholesale and retail distribution.',
    image:
      'https://images.pexels.com/photos/11996700/pexels-photo-11996700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Iranian golden almonds showing texture and earthy tones',
    keywords: [
      'Golden Almonds Direct Sourcing Iran',
      'Saffron Nuts Gift Box Wholesale',
    ],
  },
  {
    slug: 'urmia-apples',
    label: 'Urmia Apples',
    href: '/export/urmia-apple-export-wholesale/',
    blurb:
      'Urmia Red Delicious and Golden Delicious apples in bulk, cold-stored supply until May, for Russia, Gulf and South Asian importers.',
    image:
      'https://images.pexels.com/photos/39721208/pexels-photo-39721208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    alt: 'Basket of freshly harvested export-grade red apples from Urmia orchards',
    keywords: [
      'Urmia apple export wholesale',
      'Iranian apple supplier Urmia',
      'bulk Iranian apples for import',
      'Urmia apple exporter B2B',
    ],
  },
];

export const IMAGES = {
  hero: 'https://images.pexels.com/photos/13025947/pexels-photo-13025947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  saffron: 'https://images.pexels.com/photos/33654800/pexels-photo-33654800.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  saffron2: 'https://images.pexels.com/photos/10487658/pexels-photo-10487658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  carpet: 'https://images.pexels.com/photos/39304487/pexels-photo-39304487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  carpet2: 'https://images.pexels.com/photos/33299495/pexels-photo-33299495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  carpet3: 'https://images.pexels.com/photos/15467468/pexels-photo-15467468.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pistachios: 'https://images.pexels.com/photos/20346554/pexels-photo-20346554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  pistachios2: 'https://images.pexels.com/photos/11842170/pexels-photo-11842170.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dates: 'https://images.pexels.com/photos/15913423/pexels-photo-15913423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  dates2: 'https://images.pexels.com/photos/12944736/pexels-photo-12944736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  marble: 'https://images.pexels.com/photos/37845014/pexels-photo-37845014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  marble2: 'https://images.pexels.com/photos/8676726/pexels-photo-8676726.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  petrochem: 'https://images.pexels.com/photos/6767962/pexels-photo-6767962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  petrochem2: 'https://images.pexels.com/photos/2786527/pexels-photo-2786527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  almonds: 'https://images.pexels.com/photos/11996700/pexels-photo-11996700.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  almonds2: 'https://images.pexels.com/photos/8524248/pexels-photo-8524248.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  bitumen: 'https://images.pexels.com/photos/34053335/pexels-photo-34053335.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  urea: 'https://images.pexels.com/photos/4956961/pexels-photo-4956961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  logistics: 'https://images.pexels.com/photos/13025947/pexels-photo-13025947.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  logistics2: 'https://images.pexels.com/photos/21234960/pexels-photo-21234960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  market: 'https://images.pexels.com/photos/37028502/pexels-photo-37028502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  market2: 'https://images.pexels.com/photos/19227962/pexels-photo-19227962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  giftbox: 'https://images.pexels.com/photos/13975271/pexels-photo-13975271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  handshake: 'https://images.pexels.com/photos/33175650/pexels-photo-33175650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  nutsmix: 'https://images.pexels.com/photos/32281733/pexels-photo-32281733.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  team: 'https://images.pexels.com/photos/1181738/pexels-photo-1181738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  lab: 'https://images.pexels.com/photos/9629682/pexels-photo-9629682.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  support: 'https://images.pexels.com/photos/8192185/pexels-photo-8192185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  refinery: 'https://images.pexels.com/photos/36825977/pexels-photo-36825977.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
} as const;

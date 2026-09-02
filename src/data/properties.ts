export type PropertyStatus = 'For Sale' | 'For Rent' | 'Sold Out' | 'New Launch';
export type PropertyType = 'Residential' | 'Commercial' | 'Villa' | 'Apartment' | 'Plot';

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  status: PropertyStatus;
  price: number;
  priceLabel: string;
  rent?: number;
  rentLabel?: string;
  location: string;
  area: string;
  areaSqft: number;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  featured: boolean;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  specifications: string[];
  nearby: { schools: string[]; hospitals: string[]; markets: string[] };
  mapQuery: string;
  brochureName: string;
}

const baseAmenities = [
  'Swimming Pool',
  'Clubhouse',
  'Gymnasium',
  '24x7 Security',
  'Landscaped Gardens',
  'Power Backup',
  'Covered Parking',
  'Children\'s Play Area',
];

const baseSpecs = [
  'Vitrified tile flooring in living & bedrooms',
  'Anti-skid ceramic tiles in balconies & bathrooms',
  'Premium CP fittings & sanitaryware',
  'Modular kitchen with granite platform',
  'Concealed copper wiring with MCBs',
  'Anodized aluminium sliding windows',
  'Earthquake-resistant RCC framed structure',
  'Premium emulsion paint on internal walls',
];

export const properties: Property[] = [
  {
    id: 'hariom-green-valley-v1',
    name: 'Hariom Green Valley Villa',
    type: 'Villa',
    status: 'For Sale',
    price: 18500000,
    priceLabel: '₹1.85 Cr',
    location: 'Besa, Nagpur',
    area: '2,400 sq.ft',
    areaSqft: 2400,
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    featured: true,
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'A signature 4 BHK independent villa at Hariom Green Valley, crafted with premium finishes, private garden, and expansive living spaces designed for luxury living.',
    amenities: [...baseAmenities, 'Private Garden', 'Home Theatre Room', 'Solar Water Heating'],
    specifications: baseSpecs,
    nearby: {
      schools: ['Delhi Public School, Besa (2 km)', 'Modern School, Manish Nagar (3 km)'],
      hospitals: ['Alexis Multispeciality Hospital (4 km)', 'Wockhardt Hospital (5 km)'],
      markets: ['Besa Market (1 km)', 'Manish Nagar Market (2.5 km)'],
    },
    mapQuery: 'Besa, Nagpur',
    brochureName: 'Hariom-Green-Valley-Brochure.pdf',
  },
  {
    id: 'hariom-residency-3bhk',
    name: 'Hariom Residency 3 BHK',
    type: 'Apartment',
    status: 'For Sale',
    price: 7200000,
    priceLabel: '₹72 Lakhs',
    rent: 28000,
    rentLabel: '₹28,000/mo',
    location: 'Manish Nagar, Nagpur',
    area: '1,450 sq.ft',
    areaSqft: 1450,
    bedrooms: 3,
    bathrooms: 3,
    parking: 1,
    featured: true,
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Spacious 3 BHK apartment at Hariom Residency with smart layout, premium fittings and a vibrant community of like-minded families.',
    amenities: [...baseAmenities, 'Rooftop Sky Lounge', 'EV Charging Stations'],
    specifications: baseSpecs,
    nearby: {
      schools: ['Delhi Public School (2.5 km)', 'Centre Point School (3 km)'],
      hospitals: ['Alexis Hospital (3.5 km)', 'Signature Hospital (2 km)'],
      markets: ['Manish Nagar Market (0.5 km)', 'Sujata Patil Market (1.5 km)'],
    },
    mapQuery: 'Manish Nagar, Nagpur',
    brochureName: 'Hariom-Residency-Brochure.pdf',
  },
  {
    id: 'hariom-elite-villas-5bhk',
    name: 'Hariom Elite Villas 5 BHK',
    type: 'Villa',
    status: 'New Launch',
    price: 32000000,
    priceLabel: '₹3.20 Cr',
    location: 'Wathoda, Nagpur',
    area: '3,600 sq.ft',
    areaSqft: 3600,
    bedrooms: 5,
    bathrooms: 5,
    parking: 3,
    featured: true,
    image:
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'A limited edition 5 BHK ultra-luxury villa with private pool, home automation and double-height living spaces at the exclusive Hariom Elite enclave.',
    amenities: [...baseAmenities, 'Private Pool', 'Home Automation', 'Barbecue Deck', 'Wine Cellar'],
    specifications: baseSpecs,
    nearby: {
      schools: ['Jain International School (2 km)', 'Bombay Scottish School (4 km)'],
      hospitals: ['Max Multi-speciality Hospital (3 km)', 'Orange City Hospital (5 km)'],
      markets: ['Wathoda Market (1 km)', 'Bardi Market (2 km)'],
    },
    mapQuery: 'Wathoda, Nagpur',
    brochureName: 'Hariom-Elite-Villas-Brochure.pdf',
  },
  {
    id: 'hariom-commercial-hub-office',
    name: 'Hariom Commercial Hub Office',
    type: 'Commercial',
    status: 'For Sale',
    price: 9500000,
    priceLabel: '₹95 Lakhs',
    rent: 55000,
    rentLabel: '₹55,000/mo',
    location: 'Ramdaspeth, Nagpur',
    area: '1,200 sq.ft',
    areaSqft: 1200,
    bedrooms: 0,
    bathrooms: 2,
    parking: 2,
    featured: true,
    image:
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Grade-A office space at the heart of Ramdaspeth with premium glass facade, central AC and high-speed elevators — ideal for corporates & startups.',
    amenities: ['Central Air Conditioning', 'High-Speed Elevators', 'Power Backup', '24x7 Security', 'Ample Parking', 'Conference Rooms', 'Cafeteria'],
    specifications: ['Glass partition ready', 'Raised flooring for cabling', 'Central HVAC', 'VRV air conditioning', 'Smart access control', 'Fire safety systems'],
    nearby: {
      schools: ['Centre Point School (1.5 km)', 'St. Xavier\'s School (2 km)'],
      hospitals: ['Wockhardt Hospital (1 km)', 'Super Speciality Hospital (2 km)'],
      markets: ['Sitabuldi Market (1.5 km)', 'Ramdaspeth Market (0.5 km)'],
    },
    mapQuery: 'Ramdaspeth, Nagpur',
    brochureName: 'Hariom-Commercial-Hub-Brochure.pdf',
  },
  {
    id: 'hariom-greens-plot-2000',
    name: 'Hariom Greens Plot 2000 sq.ft',
    type: 'Plot',
    status: 'For Sale',
    price: 4800000,
    priceLabel: '₹48 Lakhs',
    location: 'Beltarodi, Nagpur',
    area: '2,000 sq.ft',
    areaSqft: 2000,
    bedrooms: 0,
    bathrooms: 0,
    parking: 0,
    featured: false,
    image:
      'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Premium NA sanctioned plot at Hariom Greens with clear titles, internal roads and street lighting — perfect for building your dream home or as a high-ROI investment.',
    amenities: ['Internal Concrete Roads', 'Street Lighting', 'Boundary Wall', 'Water Supply', 'Underground Drainage', 'Gated Entry'],
    specifications: ['NA sanctioned plot', 'Clear title & RERA registered', 'Wide internal roads', 'Demarcated plot boundaries', 'Ready for construction'],
    nearby: {
      schools: ['Delhi Public School, Beltarodi (3 km)', 'Modern School (4 km)'],
      hospitals: ['Orange City Hospital (5 km)', 'Mayo Hospital (6 km)'],
      markets: ['Beltarodi Market (1.5 km)', 'Sonegaon Market (3 km)'],
    },
    mapQuery: 'Beltarodi, Nagpur',
    brochureName: 'Hariom-Greens-Brochure.pdf',
  },
  {
    id: 'hariom-residency-2bhk',
    name: 'Hariom Residency 2 BHK',
    type: 'Apartment',
    status: 'For Rent',
    price: 5200000,
    priceLabel: '₹52 Lakhs',
    rent: 22000,
    rentLabel: '₹22,000/mo',
    location: 'Manish Nagar, Nagpur',
    area: '1,050 sq.ft',
    areaSqft: 1050,
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    featured: false,
    image:
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    description:
      'Well-ventilated 2 BHK apartment at Hariom Residency, perfect for young families with a smart, efficient layout and access to all premium amenities.',
    amenities: [...baseAmenities, 'Rooftop Sky Lounge', 'EV Charging Stations'],
    specifications: baseSpecs,
    nearby: {
      schools: ['Centre Point School (3 km)', 'Delhi Public School (2.5 km)'],
      hospitals: ['Signature Hospital (2 km)', 'Alexis Hospital (3.5 km)'],
      markets: ['Manish Nagar Market (0.5 km)', 'Sujata Patil Market (1.5 km)'],
    },
    mapQuery: 'Manish Nagar, Nagpur',
    brochureName: 'Hariom-Residency-Brochure.pdf',
  },
];

export const propertyCategories = [
  {
    id: 'residential',
    name: 'Residential',
    icon: 'Home',
    count: 28,
    image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: 'Building2',
    count: 12,
    image: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'villas',
    name: 'Villas',
    icon: 'Castle',
    count: 9,
    image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'apartments',
    name: 'Apartments',
    icon: 'Building',
    count: 34,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    id: 'plots',
    name: 'Plots',
    icon: 'MapPin',
    count: 16,
    image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export const testimonials = [
  {
    id: 't1',
    name: 'Rohan & Sneha Deshmukh',
    role: 'Villa Owner, Green Valley',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'From site visit to handover, the team at Hariom Developers was transparent and professional. Our villa is everything we dreamed of and more.',
  },
  {
    id: 't2',
    name: 'Saurabh Kunte',
    role: 'Commercial Hub Owner',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Investing in a Hariom commercial office was the best decision. Great location, premium build and the appreciation has been excellent.',
  },
  {
    id: 't3',
    name: 'Priya Sharma',
    role: 'Apartment Owner, Residency',
    rating: 5,
    image: 'https://images.pexels.com/photos/2642096/pexels-photo-2642096.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'The quality of construction and the amenities at Hariom Residency are world-class. Truly a premium living experience in Nagpur.',
  },
  {
    id: 't4',
    name: 'Imran Sheikh',
    role: 'Plot Investor, Greens',
    rating: 5,
    image: 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Clear titles, prompt documentation and honest advice. My plot investment has grown 40% in three years. Highly recommended.',
  },
];

export const stats = [
  { id: 's1', label: 'Projects Completed', value: 24, suffix: '+' },
  { id: 's2', label: 'Happy Customers', value: 1850, suffix: '+' },
  { id: 's3', label: 'Years of Experience', value: 18, suffix: '' },
  { id: 's4', label: 'Properties Delivered', value: 640, suffix: '+' },
];

export const faqs = [
  {
    id: 'f1',
    q: 'How can I book a property?',
    a: 'You can book a property by clicking "Enquire Now", calling us at +91 8766428738, or scheduling a site visit through the contact form. Our team will guide you through documentation and payment.',
  },
  {
    id: 'f2',
    q: 'What documents are required?',
    a: 'Typically you need PAN, Aadhaar, address proof, passport-size photographs and bank details. For loans, additional income proofs like salary slips or ITR are required. We assist with all documentation.',
  },
  {
    id: 'f3',
    q: 'Is financing available?',
    a: 'Yes. We have tie-ups with leading banks and NBFCs including HDFC, ICICI, SBI and Axis Bank. Our team helps you secure the best home loan interest rates.',
  },
  {
    id: 'f4',
    q: 'What are the payment plans?',
    a: 'We offer flexible payment plans including Construction-Linked Plans (CLP), Down Payment Plans (DPP) and Flexi Plans. Customised plans can be discussed with our sales team.',
  },
  {
    id: 'f5',
    q: 'How can I schedule a site visit?',
    a: 'You can schedule a site visit by clicking "Book Site Visit" on any property/project page, or by calling us directly. We arrange free pick-up and drop from our office.',
  },
  {
    id: 'f6',
    q: 'How do I contact Hariom Developers?',
    a: 'Call us at +91 8766428738, WhatsApp the same number, email info@hariomdevelopers.in, or visit our office at 103 Ghatate Chambers, Panchsheel Square, Ramdaspeth, Nagpur.',
  },
];

export type PropertyStatus = 'For Sale' | 'For Rent' | 'Sold Out' | 'New Launch' | 'Ongoing';
export type PropertyType = 'Residential' | 'Commercial' | 'Villa' | 'Apartment' | 'Plot';

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  status: PropertyStatus;
  progress?: number;
  deliveryDate?: string;
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
    id: 'silver-star-v1',
    name: 'Silver Star',
    type: 'Residential',
    status: 'Ongoing',
    progress: 65,
    deliveryDate: 'December 2026',
    price: 3000000,
    priceLabel: '₹30 Lakhs onwards',
    location: 'Nagalwadi, Nagpur',
    area: '1,200 - 4,000 sq.ft',
    areaSqft: 1200,
    bedrooms: 4,
    bathrooms: 4,
    parking: 2,
    featured: true,
    image: '/silver-star.jpg',
    gallery: [
      '/silver-star.jpg',
      '/silverstar2.jpeg',
      '/silverstart1.jpeg',
    ],
    description: 'Silver Star offers a thoughtful mix of modern amenities, green landscapes and peaceful surroundings. With close connectivity to educational hubs, technology parks, industrial zones and key transport routes, it is ideal for both residential comfort and long-term investment.',
    amenities: [...baseAmenities, 'Private Garden', 'Home Theatre Room', 'Solar Water Heating'],
    specifications: baseSpecs,
    nearby: {
      schools: ['Delhi Public School, Besa (2 km)', 'Modern School, Manish Nagar (3 km)'],
      hospitals: ['Alexis Multispeciality Hospital (4 km)', 'Wockhardt Hospital (5 km)'],
      markets: ['Nagalwadi Market (1 km)', 'Manish Nagar Market (2.5 km)'],
    },
    mapQuery: 'Nagalwadi, Nagpur',
    brochureName: 'Silver-Star-Brochure.pdf',
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
    role: 'Homeowner, Silver Star',
    rating: 5,
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'From site visit to handover, the team at Hariom Developers was transparent and professional. Our home is everything we dreamed of and more.',
  },
  {
    id: 't2',
    name: 'Saurabh Kunte',
    role: 'Commercial Property Investor',
    rating: 5,
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
    text: 'Investing in a Hariom commercial property was the best decision. Great location, premium build and the appreciation has been excellent.',
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
  { id: 's3', label: 'Found in year', value: 2026, suffix: '' },
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

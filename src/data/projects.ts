export type ProjectStatus = 'Ongoing' | 'Completed' | 'Upcoming';

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  location: string;
  progress: number;
  deliveryDate: string;
  launchDate?: string;
  image: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  amenities: string[];
  floorPlans: { name: string; area: string; image: string }[];
  locationAdvantages: string[];
  updates: { date: string; title: string; desc: string }[];
  brochureName: string;
}

export const projects: Project[] = [
  {
    id: 'silver-star',
    name: 'Silver Star',
    status: 'Ongoing',
    location: 'Nagalwadi, Nagpur',
    progress: 65,
    deliveryDate: 'Dec 2026',
    image: '/silver-star.jpg',
    gallery: [
      '/silver-star.jpg',
      '/silverstar2.jpeg',
      '/silverstart1.jpeg',
    ],
    overview:
      'Silver Star offers a thoughtful mix of modern amenities, green landscapes and peaceful surroundings. With close connectivity to educational hubs, technology parks, industrial zones and key transport routes, it is ideal for both residential comfort and long-term investment.',
    highlights: [
      '84 premium homes across 12 acres',
      'Clubhouse with spa & gym',
      'Resort-style swimming pool',
      'Landscaped central park',
      'Solar-powered street lighting',
      'Gated with 24x7 security',
    ],
    amenities: ['Swimming Pool', 'Clubhouse', 'Gym', 'Spa', 'Jogging Track', 'Tennis Court', 'Kids Play Area', 'Amphitheatre', 'EV Charging'],
    floorPlans: [
      // { name: 'Type A — 3 BHK', area: '1,900 sq.ft', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900' },
      //{ name: 'Type B — 4 BHK', area: '2,400 sq.ft', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=900' },
      //  { name: 'Type C — 5 BHK', area: '3,600 sq.ft', image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=900' },
    ],

    // want to do some changes here 
    locationAdvantages: [
      '3 KM from Hingna MIDC & Logistics Zone',
      'A Resort - Like Plotting Project in Hingna',
      '2 km from nagpur  Public School',
      '4 km from Alexis Hospital',
      '1 km from Nagalwadi market',
    ],
    updates: [
      // { date: 'Jan 2026', title: 'Structure complete', desc: 'All RCC structures 100% complete. Plastering in progress.' },
      //{ date: 'Apr 2026', title: 'Internal finishing', desc: 'Plumbing & electrical rough-in done. Flooring 40% complete.' },
      // { date: 'Jul 2026', title: 'Clubhouse nearing completion', desc: 'Clubhouse interior work underway, pool tiling complete.' },
    ],
    brochureName: 'Silver-Star-Brochure.pdf',
  },
  {
    id: 'Vrindavan Park ',
    name: 'Vrindavan Park',
    status: 'Ongoing',
    location: 'Near Samruddhi Circle, Nagpur',
    progress: 82,
    deliveryDate: '..',
    image:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview:
      'A premium 14-storey residential tower with 2 & 3 BHK smart homes, a rooftop sky lounge, and a vibrant community of 120 families.',
    highlights: [
      '14-storey residential tower',
      '2 & 3 BHK smart homes',
      'Rooftop sky lounge & cafe',
      'EV charging in every bay',
      'Smart home automation ready',
      'Walking distance to markets',
    ],
    amenities: ['Rooftop Sky Lounge', 'Gym', 'Swimming Pool', 'Indoor Games', 'Yoga Deck', 'EV Charging', 'Power Backup', '24x7 Security'],
    floorPlans: [
      { name: '2 BHK Smart', area: '1,050 sq.ft', image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=900' },
      { name: '3 BHK Premium', area: '1,450 sq.ft', image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=900' },
    ],
    locationAdvantages: [
      '0.5 km from Manish Nagar market',
      '2 km from Delhi Public School',
      '3.5 km from Alexis Hospital',
      '6 km from airport',
      '4 km from railway station',
    ],
    updates: [
      { date: 'Feb 2026', title: 'Tower topped out', desc: '14 floors cast. Facade glazing started.' },
      { date: 'Jun 2026', title: 'Interior finishing', desc: 'Flooring 70% complete. Painting in progress.' },
      { date: 'Aug 2026', title: 'Final handover prep', desc: 'Amenities complete. Approvals in final stage.' },
    ],
    brochureName: 'Hariom-Residency-Brochure.pdf',
  },
  {
    id: 'hariom-elite-villas',
    name: 'Hariom Elite Villas',
    status: 'Upcoming',
    location: 'Wathoda, Nagpur',
    progress: 0,
    deliveryDate: 'TBA',
    launchDate: 'Jan 2027',
    image:
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview:
      'An exclusive enclave of just 24 ultra-luxury villas with private pools, home automation, and double-height living spaces — the new benchmark in Nagpur luxury.',
    highlights: [
      'Only 24 exclusive villas',
      'Private pool in every villa',
      'Full home automation',
      'Double-height living rooms',
      'Personal wine cellar option',
      'Concierge services',
    ],
    amenities: ['Private Pool', 'Home Automation', 'Concierge', 'Spa', 'Gym', 'Wine Cellar', 'Barbecue Deck', 'Solar Power'],
    floorPlans: [
      { name: 'Elite Villa — 5 BHK', area: '3,600 sq.ft', image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=900' },
    ],
    locationAdvantages: [
      '4 km from NH-44',
      '2 km from Jain International School',
      '3 km from Max Hospital',
      'Serene, low-density area',
      '10 min from airport',
    ],
    updates: [
      { date: 'Aug 2026', title: 'Pre-launch registration open', desc: 'Bookings for priority allotment now open. Limited to first 24 buyers.' },
    ],
    brochureName: 'Hariom-Elite-Villas-Brochure.pdf',
  },
];

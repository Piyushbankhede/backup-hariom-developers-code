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
    id: 'hariom-green-valley',
    name: 'Hariom Green Valley',
    status: 'Ongoing',
    location: 'Besa, Nagpur',
    progress: 65,
    deliveryDate: 'Dec 2026',
    image:
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview:
      'A gated villa community of 84 luxury homes spread across 12 acres, with private gardens, a central clubhouse, and a resort-style swimming pool.',
    highlights: [
      '84 premium villas across 12 acres',
      'Clubhouse with spa & gym',
      'Resort-style swimming pool',
      'Landscaped central park',
      'Solar-powered street lighting',
      'Gated with 24x7 security',
    ],
    amenities: ['Swimming Pool', 'Clubhouse', 'Gym', 'Spa', 'Jogging Track', 'Tennis Court', 'Kids Play Area', 'Amphitheatre', 'EV Charging'],
    floorPlans: [
      { name: 'Villa Type A — 3 BHK', area: '1,900 sq.ft', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=900' },
      { name: 'Villa Type B — 4 BHK', area: '2,400 sq.ft', image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=900' },
      { name: 'Villa Type C — 5 BHK', area: '3,600 sq.ft', image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=900' },
    ],
    locationAdvantages: [
      '5 min from NH-44 highway',
      '10 min from airport',
      '2 km from Delhi Public School',
      '4 km from Alexis Hospital',
      '1 km from Besa market',
    ],
    updates: [
      { date: 'Jan 2026', title: 'Structure complete', desc: 'All villa RCC structures 100% complete. Plastering in progress.' },
      { date: 'Apr 2026', title: 'Internal finishing', desc: 'Plumbing & electrical rough-in done. Flooring 40% complete.' },
      { date: 'Jul 2026', title: 'Clubhouse nearing completion', desc: 'Clubhouse interior work underway, pool tiling complete.' },
    ],
    brochureName: 'Hariom-Green-Valley-Brochure.pdf',
  },
  {
    id: 'hariom-residency',
    name: 'Hariom Residency',
    status: 'Ongoing',
    location: 'Manish Nagar, Nagpur',
    progress: 82,
    deliveryDate: 'Sep 2026',
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
    id: 'hariom-commercial-hub',
    name: 'Hariom Commercial Hub',
    status: 'Completed',
    location: 'Ramdaspeth, Nagpur',
    progress: 100,
    deliveryDate: 'Completed Mar 2025',
    image:
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=900',
    gallery: [
      'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    overview:
      'A landmark Grade-A office tower in the heart of Ramdaspeth with 60,000 sq.ft of premium commercial space, central AC, and double-height lobby.',
    highlights: [
      '60,000 sq.ft commercial space',
      'Double-height entrance lobby',
      'Central air-conditioning',
      'High-speed elevators',
      'Ample covered parking',
      '100% leased on completion',
    ],
    amenities: ['Central AC', 'High-Speed Elevators', 'Power Backup', '24x7 Security', 'Conference Rooms', 'Cafeteria', 'Smart Access'],
    floorPlans: [
      { name: 'Office Suite — 600 sq.ft', area: '600 sq.ft', image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=900' },
      { name: 'Office Suite — 1,200 sq.ft', area: '1,200 sq.ft', image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=900' },
    ],
    locationAdvantages: [
      'Heart of Ramdaspeth CBD',
      '1 km from railway station',
      '1.5 km from Sitabuldi market',
      'Walk to major banks & offices',
      '1 km from Wockhardt Hospital',
    ],
    updates: [
      { date: 'Oct 2024', title: 'Completion certificate received', desc: 'Project fully complete and ready for possession.' },
      { date: 'Mar 2025', title: 'Handover & leasing', desc: '100% of offices leased to corporate clients within 90 days.' },
    ],
    brochureName: 'Hariom-Commercial-Hub-Brochure.pdf',
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

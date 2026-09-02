export const company = {
  name: 'Hariom Developers',
  tagline: 'Building Trust, Creating Dreams',
  phone: '+91 8766428738',
  phoneRaw: '918766428738',
  whatsapp: '918766428738',
  email: 'info@hariomdevelopers.in',
  address: {
    line1: '103 Ghatate Chambers',
    line2: 'Panchsheel Square, Ramdaspeth',
    city: 'Nagpur',
    state: 'Maharashtra',
    pin: '440012',
    country: 'India',
  },
  addressText:
    '103 Ghatate Chambers, Panchsheel Square, Ramdaspeth, Nagpur, Maharashtra 440012, India',
  mapsEmbed:
    'https://www.google.com/maps?q=Panchsheel+Square+Ramdaspeth+Nagpur+440012&output=embed',
  mapsLink:
    'https://www.google.com/maps/dir/?api=1&destination=Panchsheel+Square+Ramdaspeth+Nagpur+440012',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },
  hours: 'Mon – Sat: 9:30 AM – 7:00 PM',
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${company.phoneRaw}`;

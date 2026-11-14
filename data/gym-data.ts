export type ServiceCategory = 'Strength' | 'Conditioning' | 'Mobility & Coaching';

export interface GymService {
  id: string;
  title: string;
  category: ServiceCategory;
  image: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  zone: string;
  image: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  zone: string;
  image: string;
  span?: 'wide' | 'tall' | 'standard';
}

export interface TrainerProfile {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experience: string;
  certifications: string[];
  image: string;
  bio: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  billingCycle: string;
  durationLabel: string;
  priceInr: string;
  billingNote: string;
  featured?: boolean;
  summary: string;
  perks: string[];
}

export interface MemberReview {
  id: string;
  name: string;
  role: string;
  tenure: string;
  rating: number;
  initials: string;
  quote: string;
}

export interface SocialLinkItem {
  id: string;
  platform: string;
  handle: string;
  note: string;
  href: string;
}

export const GYM_INFO = {
  brandName: 'Vajra Athletic',
  tagline: 'Indiranagar, Bengaluru · Est. 2016',
  foundedYear: '2016',
  city: 'Bengaluru',
  neighborhood: 'Indiranagar',
  addressLine1: '724, 100 Feet Road, HAL 2nd Stage',
  addressLine2: 'Indiranagar, Bengaluru, Karnataka 560038',
  fullAddress: '724, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
  coordinates: { lat: 12.9784, lng: 77.6408 },
  sampleUserLocation: {
    label: 'Indiranagar Metro Station (CMH Road)',
    lat: 12.9783,
    lng: 77.6386,
    distanceText: '650 m · 4 min drive / 8 min walk',
  },
  phone: '+91 98450 12345',
  whatsappNumber: '919845012345',
  hours: [
    { days: 'Mon – Sat', time: '05:30 AM – 10:30 PM' },
    { days: 'Sunday', time: '07:00 AM – 08:00 PM' },
  ],
  story:
    'Started in Indiranagar, Bengaluru in 2016, Vajra Athletic was built to bring calm architectural light, Olympic-grade iron, and certified Indian strength coaches together under one roof.',
  mission:
    'Deliver structured strength, fat loss, and mobility coaching in a clean, uncrowded club.',
  vision:
    'Set the gold standard for modern athletic training and recovery in India.',
};

export const ABOUT_STATS = [
  { value: '2016', label: 'Year Started', detail: 'Indiranagar, Bengaluru' },
  { value: '2,100+', label: 'Active Members', detail: 'Capped floor capacity' },
  { value: '22', label: 'Certified Coaches', detail: 'CSCS, NIS & K11' },
  { value: '22,000', label: 'Sq Ft Space', detail: 'Sunlit multi-zone club' },
];

export const SERVICES: GymService[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    category: 'Strength',
    image: '/images/program_strength_rack_1794560553126.jpg',
  },
  {
    id: 'weight-loss',
    title: 'Weight Loss & Fat Burn',
    category: 'Conditioning',
    image: '/images/program_conditioning_turf_1794560554518.jpg',
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    category: 'Strength',
    image: '/images/indian_gym_floor_1794575633498.jpg',
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    category: 'Mobility & Coaching',
    image: '/images/about_gym_studio_1794560552785.jpg',
  },
  {
    id: 'functional-training',
    title: 'Functional Turf Training',
    category: 'Conditioning',
    image: '/images/transformation_athlete_1794560556812.jpg',
  },
  {
    id: 'hiit',
    title: 'HIIT Conditioning',
    category: 'Conditioning',
    image: '/images/program_conditioning_turf_1794560554518.jpg',
  },
  {
    id: 'cardio-training',
    title: 'Cardio & Endurance',
    category: 'Conditioning',
    image: '/images/hero_gym_architecture_1794560551936.jpg',
  },
  {
    id: 'cross-training',
    title: 'Cross Training',
    category: 'Strength',
    image: '/images/indian_gym_floor_1794575633498.jpg',
  },
  {
    id: 'yoga-mobility',
    title: 'Yoga & Mobility',
    category: 'Mobility & Coaching',
    image: '/images/program_mobility_studio_1794560554605.jpg',
  },
];

export const EQUIPMENT_GALLERY: EquipmentItem[] = [
  {
    id: 'eq-racks',
    name: 'Olympic Squat Racks & Platforms',
    zone: 'Strength Floor',
    image: '/images/program_strength_rack_1794560553126.jpg',
  },
  {
    id: 'eq-cardio',
    name: 'Curved Treadmills & Rowers',
    zone: 'Cardio Deck',
    image: '/images/hero_gym_architecture_1794560551936.jpg',
  },
  {
    id: 'eq-freeweights',
    name: 'Calibrated Dumbbells & Plates',
    zone: 'Free Weights',
    image: '/images/about_gym_studio_1794560552785.jpg',
  },
  {
    id: 'eq-turf',
    name: '40m Turf & Conditioning Sleds',
    zone: 'Functional Zone',
    image: '/images/program_conditioning_turf_1794560554518.jpg',
  },
  {
    id: 'eq-recovery',
    name: 'Rain Showers & Dry Sauna',
    zone: 'Recovery Suite',
    image: '/images/facility_spa_locker_1794560554046.jpg',
  },
  {
    id: 'eq-mobility',
    name: 'Yoga & Mobility Timber Deck',
    zone: 'Mind-Body Studio',
    image: '/images/program_mobility_studio_1794560554605.jpg',
  },
];

export const PHOTO_GALLERY: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Sunlit Main Strength Floor',
    zone: 'Indiranagar Flagship',
    image: '/images/indian_gym_floor_1794575633498.jpg',
    span: 'wide',
  },
  {
    id: 'gal-2',
    title: 'Calibrated Lifting Racks',
    zone: 'Barbell Bay',
    image: '/images/program_strength_rack_1794560553126.jpg',
    span: 'standard',
  },
  {
    id: 'gal-3',
    title: '40-Meter Conditioning Turf',
    zone: 'Turf Lane',
    image: '/images/program_conditioning_turf_1794560554518.jpg',
    span: 'standard',
  },
  {
    id: 'gal-4',
    title: 'Garden-View Mobility Studio',
    zone: 'Yoga Deck',
    image: '/images/program_mobility_studio_1794560554605.jpg',
    span: 'standard',
  },
  {
    id: 'gal-5',
    title: 'Walnut Lockers & Rain Showers',
    zone: 'Recovery Suite',
    image: '/images/facility_spa_locker_1794560554046.jpg',
    span: 'standard',
  },
  {
    id: 'gal-6',
    title: '1-on-1 Coaching Sessions',
    zone: 'Private Bay',
    image: '/images/about_gym_studio_1794560552785.jpg',
    span: 'wide',
  },
];

export const TRAINERS: TrainerProfile[] = [
  {
    id: 'arjun-deshmukh',
    name: 'Arjun Deshmukh',
    role: 'Head Strength Coach',
    specialization: 'Powerlifting & Hypertrophy',
    experience: '11 Years Experience',
    certifications: ['NSCA-CSCS', 'NIS Certified', 'K11 Master'],
    image: '/images/indian_coach_arjun_1794575631744.jpg',
    bio: 'Leads barbell foundations and muscle-building blocks for beginners and competitive lifters across Bengaluru.',
  },
  {
    id: 'ananya-nair',
    name: 'Ananya Nair',
    role: 'Conditioning & Fat Loss Lead',
    specialization: 'HIIT, Turf & Recomposition',
    experience: '8 Years Experience',
    certifications: ['ACE-CPT', 'EXOS Specialist', 'Sports Nutrition'],
    image: '/images/indian_coach_ananya_1794575632684.jpg',
    bio: 'Designs sustainable fat-loss, endurance, and high-energy conditioning tracks tailored to busy professionals.',
  },
  {
    id: 'vikramaditya-rao',
    name: 'Vikramaditya Rao',
    role: 'Mobility & Yoga Specialist',
    specialization: 'Joint Health, Yoga & Rehab',
    experience: '12 Years Experience',
    certifications: ['RYT-500', 'FRCms', 'FMS Level 2'],
    image: '/images/indian_coach_vikram_1794575647254.jpg',
    bio: 'Focuses on posture correction, hip and spine mobility, and active recovery for pain-free heavy lifting.',
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    billingCycle: 'Month-to-Month',
    durationLabel: '1 Month',
    priceInr: '₹3,499',
    billingNote: 'Placeholder rate · Per month',
    summary: 'Flexible full-club access with zero lock-in.',
    perks: [
      'Full strength, cardio & free-weight floor',
      'Locker rooms, rain showers & sauna',
      '4 group conditioning or yoga classes',
      '1 initial coach orientation session',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quarterly Plan',
    billingCycle: 'Every 3 Months',
    durationLabel: '3 Months',
    priceInr: '₹2,999',
    billingNote: 'Placeholder rate · ₹8,997 / quarter',
    summary: 'Ideal 90-day plan for your first structured training block.',
    perks: [
      'Unlimited floor & group classes',
      'Sauna & cold plunge recovery access',
      'InBody composition scan & goal plan',
      '2 complimentary guest passes',
    ],
  },
  {
    id: 'half-yearly',
    name: 'Half-Yearly Plan',
    billingCycle: 'Every 6 Months',
    durationLabel: '6 Months',
    priceInr: '₹2,499',
    billingNote: 'Placeholder rate · ₹14,994 / 6 months',
    featured: true,
    summary: 'Our most popular tier with unlimited classes and regular coach check-ins.',
    perks: [
      'Priority booking across all classes',
      'Bi-monthly 1-on-1 coach progress audit',
      'Simple Indian meal & protein guide',
      '6 guest passes + 21-day freeze option',
    ],
  },
  {
    id: 'annual',
    name: 'Annual Plan',
    billingCycle: 'Yearly',
    durationLabel: '12 Months',
    priceInr: '₹1,999',
    billingNote: 'Placeholder rate · ₹23,988 / year',
    summary: 'Best monthly value with year-round coaching support.',
    perks: [
      'All-access club & recovery privileges',
      '1 personal training session every month',
      'Dedicated locker priority',
      '12 guest passes + 45-day travel freeze',
    ],
  },
];

export const INITIAL_REVIEWS: MemberReview[] = [
  {
    id: 'rev-1',
    name: 'Karthik Subramanian',
    role: 'Indiranagar',
    tenure: 'Member since 2022',
    rating: 5,
    initials: 'KS',
    quote:
      'Cleanest gym in Bengaluru. Zero waiting for squat racks even at 7 AM, and Arjun’s barbell feedback fixed my lower back.',
  },
  {
    id: 'rev-2',
    name: 'Divya Deshpande',
    role: 'Domlur',
    tenure: 'Member since 2023',
    rating: 5,
    initials: 'DD',
    quote:
      'Love the natural light and calm vibe. Ananya’s morning conditioning batches and private rain showers fit right before office hours.',
  },
  {
    id: 'rev-3',
    name: 'Nikhil Sharma',
    role: 'Koramangala',
    tenure: 'Member since 2021',
    rating: 5,
    initials: 'NS',
    quote:
      'No loud clutter, just proper Olympic plates, welcoming Indian coaches, and consistent results for three straight years.',
  },
  {
    id: 'rev-4',
    name: 'Sneha Hegde',
    role: 'Ulsoor',
    tenure: 'Member since 2020',
    rating: 5,
    initials: 'SH',
    quote:
      'Vikram’s mobility sessions completely resolved my shoulder stiffness. Easily the calmest and best-maintained club in East Bengaluru.',
  },
  {
    id: 'rev-5',
    name: 'Raghavendra Rao',
    role: 'HAL 2nd Stage',
    tenure: 'Member since 2019',
    rating: 5,
    initials: 'RR',
    quote:
      'Trained here for over five years. Equipment is maintained like clockwork and the coaches always focus on long-term safety.',
  },
  {
    id: 'rev-6',
    name: 'Aditi Kulkarni',
    role: 'Indiranagar',
    tenure: 'Member since 2021',
    rating: 5,
    initials: 'AK',
    quote:
      'Started as a complete beginner to strength training. The welcoming atmosphere kept me showing up three times a week.',
  },
];

export const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@vajraathletic.blr',
    note: 'Daily lifts, turf sessions & member wins',
    href: 'https://instagram.com',
  },
  {
    id: 'youtube',
    platform: 'YouTube',
    handle: 'Vajra Training Lab',
    note: 'Form tutorials & coach breakdowns',
    href: 'https://youtube.com',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    handle: '+91 98450 12345',
    note: 'Instant enquiries & trial pass booking',
    href: 'https://wa.me/919845012345',
  },
];

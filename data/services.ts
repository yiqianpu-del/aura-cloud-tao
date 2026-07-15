export type ServiceCategory = 'ritual' | 'divination' | 'fengshui';

export interface Service {
  id: string;
  slug: string;
  title: string;
  titleCn: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  whoNeedsIt: string[];
  process: { step: number; title: string; description: string }[];
  pricing: {
    startingFrom: number;
    options?: { name: string; price: number }[];
  };
  delivery: string;
  includes: string[];
  image: string;
  faq: { q: string; a: string }[];
  relatedProducts?: string[];
}

export const services: Service[] = [
  {
    id: "1",
    slug: "karmic-release",
    title: "Karmic Release & Annual Blessing Ritual",
    titleCn: "业力释放与流年护持仪式",
    category: "ritual",
    tagline: "Release karmic burdens and align with your yearly destiny",
    description: "A powerful annual ritual performed at the Longhu Mountain altar. The priest inscribes your name and birth information, performs a karmic clearing ceremony, and blesses your path for the year ahead. This is our signature high-value service — combining deep spiritual clearing with personalized yearly protection.",
    whoNeedsIt: [
      "Feeling stuck in recurring patterns or cycles",
      "Going through a major life transition",
      "Seeking spiritual protection for the coming year",
      "Experiencing persistent bad luck or obstacles",
      "Wanting to honor ancestors and clear ancestral karma",
    ],
    process: [
      { step: 1, title: "Intake & Preparation", description: "Share your name, birth details, and intention. The priest prepares the altar with your information." },
      { step: 2, title: "Karmic Release Ceremony", description: "The priest performs the ritual — chanting, incense offering, and karmic clearing at the Longhu Mountain altar." },
      { step: 3, title: "Annual Blessing Consecration", description: "A talisman personalized with your name is consecrated for your protection and success in the year ahead." },
      { step: 4, title: "Video Proof & Delivery", description: "You receive the full ritual video. The blessed talisman is shipped to your address worldwide." },
    ],
    pricing: { startingFrom: 399, options: [{ name: "Standard", price: 399 }, { name: "Premium (with extended ritual & jade talisman)", price: 699 }] },
    delivery: "Full ritual video sent before shipping. Blessed talisman shipped worldwide.",
    includes: ["Karmic clearing ceremony at Longhu Mountain altar", "Personalized annual blessing talisman", "Full ritual video (filmed proof)", "Care instructions", "Premium protective packaging", "Worldwide shipping"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "How is this different from a regular talisman?", a: "This is a comprehensive ceremony — karmic clearing + annual blessing combined. It addresses your past patterns while protecting your future. A regular talisman is a single-purpose blessing." },
      { q: "Can I request a specific intention?", a: "Absolutely. During intake, you share your specific situation and intentions. The priest incorporates them into the ceremony." },
      { q: "How long does the ritual take?", a: "The ceremony itself takes about 1-2 hours. Total turnaround from booking to delivery is 5-7 business days." },
    ],
    relatedProducts: ["talisman-decor"],
  },
  {
    id: "2",
    slug: "qi-aligner",
    title: "Spatial Qi Aligner",
    titleCn: "空间理气阵法底盘",
    category: "ritual",
    tagline: "Harmonize your living space with an ancient Qi energy alignment tool",
    description: "The Spatial Qi Aligner is a hand-crafted Taoist energy device that harmonizes the Qi flow in your home or workspace. Based on ancient Feng Shui principles combined with Qi Men Dun Jia strategic positioning, this tool is consecrated at the altar specifically for your space.",
    whoNeedsIt: [
      "Your home or office feels energetically 'off'",
      "Experiencing conflict or stagnation in a specific room",
      "Want to enhance the positive energy of your space",
      "Recently moved into a new home or office",
      "Practice meditation or energy work at home",
    ],
    process: [
      { step: 1, title: "Order & Space Info", description: "Share your address, floor plan, and what you want to improve. The priest determines the optimal Qi Men placement." },
      { step: 2, title: "Consecration Ceremony", description: "The Qi Aligner is blessed and programmed at the altar for your specific space and intention." },
      { step: 3, title: "Placement Guide", description: "You receive detailed instructions on where and how to place the Qi Aligner in your space." },
      { step: 4, title: "Video & Shipping", description: "Full consecration video sent before shipping." },
    ],
    pricing: { startingFrom: 299, options: [{ name: "Standard (single space)", price: 299 }, { name: "Premium (whole home + remote energy audit)", price: 599 }] },
    delivery: "Full ritual video. Placement guide. Worldwide shipping.",
    includes: ["Hand-crafted Qi Aligner device", "Full consecration ceremony at Longhu Mountain", "Personalized Qi Men placement guide", "Ritual video proof", "Care instructions", "Worldwide shipping"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "How does the Qi Aligner work?", a: "The Qi Aligner is consecrated with your specific intention and placed according to Qi Men Dun Jia calculations. It acts as an energy anchor — harmonizing the Qi flow in your space." },
      { q: "Can I use it outdoors?", a: "It is designed for indoor use. Place it in a clean, elevated position as instructed." },
      { q: "Do I need a consultation first?", a: "Not required, but the Premium option includes a remote energy audit for optimal results." },
    ],
    relatedProducts: [],
  },
  {
    id: "3",
    slug: "pet-memorial",
    title: "SoulCompanion Memorial Chest",
    titleCn: "万物灵宠雅化归藏匣",
    category: "ritual",
    tagline: "A sacred farewell — Taoist pet memorial ritual and keepsake chest",
    description: "A beautifully hand-crafted memorial chest combined with a Taoist soul-transition ceremony for your beloved companion. The priest performs a ritual to guide their spirit with peace, while the chest becomes a sacred keepsake to hold their memory.",
    whoNeedsIt: [
      "Lost a beloved pet and want a meaningful farewell",
      "Seeking a Taoist blessing for your companion's transition",
      "Want a beautiful physical keepsake to honor their memory",
      "Looking for closure through spiritual ceremony",
    ],
    process: [
      { step: 1, title: "Share Your Companion's Story", description: "Share their name, photos, and a special memory. The priest prepares the altar with their name." },
      { step: 2, title: "Transition Ceremony", description: "A Taoist soul-guiding ritual is performed — incense, prayers, and blessing for a peaceful transition." },
      { step: 3, title: "Chest Consecration", description: "The memorial chest is blessed as a sacred vessel for their memory." },
      { step: 4, title: "Video & Shipping", description: "Full ceremony video sent. The consecrated chest ships to you with a memorial card inscribed with their name." },
    ],
    pricing: { startingFrom: 349, options: [] },
    delivery: "Full ritual video. Memorial chest with name card. Worldwide shipping.",
    includes: ["Hand-crafted memorial chest", "Taoist soul-transition ceremony", "Personalized memorial card with their name", "Full ritual video", "Care instructions", "Worldwide shipping"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "What size is the chest?", a: "The chest is approximately 6x6x4 inches — large enough to hold a small urn, collar, photos, or other mementos." },
      { q: "Can I include my pet's ashes?", a: "Yes, the chest is designed to hold ashes, collar, photos, or any mementos you wish to keep inside." },
      { q: "What if my pet passed away long ago?", a: "The ceremony is timeless. We honor their name and memory regardless of when they crossed. Many clients find closure even years later." },
    ],
    relatedProducts: [],
  },
  {
    id: "4",
    slug: "qi-men-reading",
    title: "The Qi Men Oracle — Card Spread Reading",
    titleCn: "东方塔罗：奇门卡牌牌阵咨询",
    category: "divination",
    tagline: "Ancient Chinese strategy meets modern card reading",
    description: "A revolutionary divination experience that translates the ancient Qi Men Dun Jia system into an intuitive card spread format — familiar to Tarot users yet grounded in authentic Taoist strategic wisdom. Each reading provides clear guidance on life decisions, timing, and hidden influences.",
    whoNeedsIt: [
      "At a crossroads and need clarity on your next move",
      "Want strategic guidance beyond 'yes/no' answers",
      "Curious about Qi Men Dun Jia but find it complex",
      "Looking for a fresh alternative to Tarot",
      "Need timing guidance for important decisions",
    ],
    process: [
      { step: 1, title: "Book & Set Your Intention", description: "Book via WhatsApp with your question or area of focus. No birth details needed." },
      { step: 2, title: "Card Spread Recording", description: "The master performs a Qi Men card spread specifically for your question, recorded on video." },
      { step: 3, title: "Interpretation Session", description: "A detailed 30-45 minute video explaining each card, the Qi Men energies revealed, and practical guidance." },
      { step: 4, title: "Delivery", description: "You receive the full reading video and a written summary. Review anytime." },
    ],
    pricing: { startingFrom: 149, options: [{ name: "Single Question Spread", price: 149 }, { name: "Comprehensive Life Reading (3 areas)", price: 349 }, { name: "Monthly Guidance (4 sessions/month)", price: 499 }] },
    delivery: "Video recording + written summary delivered via WhatsApp",
    includes: ["Personalized Qi Men card spread for your question", "30-45 min video interpretation", "Written summary of key insights", "Follow-up questions within 48 hours"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "What is Qi Men Dun Jia?", a: "Qi Men Dun Jia (奇门遁甲) is an ancient Chinese strategic divination system — the same method used by legendary strategists. Weve translated it into an accessible card format for modern seekers." },
      { q: "How is this different from Tarot?", a: "While Tarot draws from Western esoteric traditions, Qi Men is based on Chinese cosmology — the interaction of time, space, and energy. It excels at timing questions and strategic decisions." },
      { q: "Do I need to know anything about Qi Men?", a: "Not at all. The reading is designed to be accessible to anyone, with clear explanations of what each card means for your situation." },
    ],
    relatedProducts: ["qi-men-deck"],
  },
  {
    id: "5",
    slug: "energy-audit",
    title: "Personal Energy Map Audit",
    titleCn: "个人能量地图线上审计",
    category: "divination",
    tagline: "Map your personal energy field with a remote Qi Men Dun Jia audit",
    description: "A comprehensive remote energy diagnosis using your birth information and current life circumstances. The master constructs a Qi Men Dun Jia energy map of your life — revealing hidden patterns, timing windows, and energy imbalances across all major life areas.",
    whoNeedsIt: [
      "Want a full picture of your life energy right now",
      "Feeling drained and don't know why",
      "Need to know the best timing for major decisions",
      "Curious about your inherent energetic strengths and weaknesses",
      "Ready for deep self-understanding",
    ],
    process: [
      { step: 1, title: "Submit Your Information", description: "Provide your birth date, time, and location. Share current life areas you're most concerned about." },
      { step: 2, title: "Qi Men Energy Map Construction", description: "The master constructs your complete Qi Men Dun Jia energy chart based on your information and current time cycles." },
      { step: 3, title: "Audit Recording", description: "A detailed 45-60 minute video walking through your energy map — strengths, challenges, timing opportunities." },
      { step: 4, title: "Strategic Recommendations", description: "Personalized recommendations for energy balancing, optimal timing, and ritual support if needed." },
    ],
    pricing: { startingFrom: 249, options: [{ name: "Standard Energy Audit", price: 249 }, { name: "Premium (with follow-up consultation call)", price: 399 }] },
    delivery: "Video audit (45-60 min) + written energy map report",
    includes: ["Full Qi Men Dun Jia energy chart construction", "45-60 min video audit", "Written report with key findings", "Personalized recommendations", "One follow-up question"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "What if I don't know my exact birth time?", a: "Noon is used as a default. While a precise birth time gives more detail, the audit still provides very useful insights without it." },
      { q: "How often should I get an audit?", a: "We recommend once per year, or when going through a major life transition. The energy map changes with time cycles." },
      { q: "What areas of life does it cover?", a: "Career, relationships, wealth, health, and spiritual growth — the audit covers all major life dimensions." },
    ],
    relatedProducts: [],
  },
  {
    id: "6",
    slug: "physiognomy",
    title: "Classical Physiognomy — Face, Palm & Bone Reading",
    titleCn: "古典美学面相学 / 手相学 / 骨相学",
    category: "divination",
    tagline: "Discover yourself through the ancient art of Chinese physiognomy",
    description: "Chinese physiognomy (面相学) is a sophisticated system of character analysis and fortune reading based on facial features, palm lines, and bone structure. Unlike Western palmistry, Chinese physiognomy is deeply integrated with Taoist cosmology and Five Element theory.",
    whoNeedsIt: [
      "Want to understand your inherent personality traits",
      "Curious about what your face and hands reveal",
      "Complement a Qi Men reading with physical analysis",
      "Interested in traditional Chinese character analysis",
      "Want to understand your life path from a new perspective",
    ],
    process: [
      { step: 1, title: "Submit Photos", description: "Send clear photos of your face (front + profile) and palms (both hands)." },
      { step: 2, title: "Physiognomy Analysis", description: "The master analyzes your features according to classical Chinese physiognomy texts." },
      { step: 3, title: "Reading Delivery", description: "A detailed video walking through your facial and palm features and what they reveal." },
    ],
    pricing: { startingFrom: 179, options: [{ name: "Face Reading Only", price: 179 }, { name: "Face + Palm Reading", price: 249 }, { name: "Complete (face + palm + bone)", price: 329 }] },
    delivery: "Video recording (30-45 min) + reference guide",
    includes: ["Detailed facial feature analysis", "Palm reading (both hands)", "Five Element personality profile", "Video explanation", "Written summary"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "How is this different from Western palmistry?", a: "Chinese physiognomy is based on Five Element theory and Taoist cosmology. It looks at the whole picture — face, palm, and bone structure — as an integrated system." },
      { q: "Can you tell my future from my face?", a: "Physiognomy reveals inherent tendencies and life patterns, not fixed predictions. It's a tool for self-understanding, not fortune-telling." },
      { q: "Do I need all three readings?", a: "Face reading is the most accessible starting point. Palm adds detail, and bone reading is for those seeking the deepest insight." },
    ],
    relatedProducts: ["physiognomy-mirror"],
  },
  {
    id: "7",
    slug: "fengshui-consultation",
    title: "Quantum Feng Shui Consultation",
    titleCn: "远程住宅与商业风水咨询",
    category: "fengshui",
    tagline: "Remote space energy optimization for home & business",
    description: "A comprehensive remote Feng Shui consultation combining traditional Feng Shui principles with Qi Men Dun Jia strategic positioning. The master analyzes your space using floor plans, photos, and your birth information to optimize the energy flow for health, wealth, and harmony.",
    whoNeedsIt: [
      "Just moved into a new home or office",
      "Experiencing persistent issues in a specific area of life",
      "Want to optimize your space for prosperity and harmony",
      "Running a business and want better energy for success",
      "Planning to buy or renovate a property",
    ],
    process: [
      { step: 1, title: "Submit Space Information", description: "Share your floor plan, photos, address, and the birth years of occupants. Specify your primary intentions." },
      { step: 2, title: "Energy Analysis", description: "The master creates a complete Feng Shui + Qi Men analysis of your space — identifying energy patterns and issues." },
      { step: 3, title: "Consultation Delivery", description: "A detailed video consultation with specific recommendations — furniture placement, color adjustments, cure placements." },
      { step: 4, title: "Follow-up", description: "One follow-up session to address questions and adjustments after implementation." },
    ],
    pricing: { startingFrom: 349, options: [{ name: "Residential (single home/apartment)", price: 349 }, { name: "Commercial (office/retail space)", price: 499 }, { name: "Premium (residential + land analysis + yearly check-in)", price: 899 }] },
    delivery: "Video consultation + written report with placement guide",
    includes: ["Complete space energy analysis", "Qi Men Dun Jia strategic positioning", "Room-by-room recommendations", "Custom cure and enhancer placements", "Video consultation recording", "Written report with diagrams", "One follow-up session"],
    image: "/images/talisman-placeholder.svg",
    faq: [
      { q: "Can you do a consultation remotely?", a: "Yes — most of our consultations are remote. Floor plans, photos, and video calls give us everything needed for an accurate analysis." },
      { q: "What do I need to prepare?", a: "A floor plan or rough sketch, photos of each room from multiple angles, and the address/orientation of the property." },
      { q: "How long does it take?", a: "The analysis takes 2-3 business days. The consultation video is 45-60 minutes. Implementation is up to you." },
    ],
    relatedProducts: ["qi-aligner"],
  },
];

export const serviceCategories = [
  {
    id: "ritual" as ServiceCategory,
    name: "Ritual Services",
    nameCn: "法事服务",
    description: "Sacred Taoist ceremonies performed at the Longhu Mountain altar — from karmic clearing to space harmonization",
    icon: "🪔",
    count: 3,
  },
  {
    id: "divination" as ServiceCategory,
    name: "Qi Men Divination",
    nameCn: "奇门问卦",
    description: "Ancient Chinese strategic divination through Qi Men Dun Jia cards, energy audits, and classical physiognomy",
    icon: "🗡",
    count: 3,
  },
  {
    id: "fengshui" as ServiceCategory,
    name: "Feng Shui",
    nameCn: "风水堪舆",
    description: "Remote space energy consultation combining traditional Feng Shui with Qi Men strategic positioning",
    icon: "☯",
    count: 1,
  },
];

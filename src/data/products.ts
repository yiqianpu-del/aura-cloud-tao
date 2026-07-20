export interface Product {
  id: string;
  slug: string;
  name: string;
  nameCn: string;
  categories: string[];
  price: number;
  tagline: string;
  description: string;
  features: string[];
  includes: string[];
  image: string;
  isLimitedEdition?: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    slug: "qi-men-deck",
    name: "The Cosmic Matrix: Qi Men Card Deck",
    nameCn: "东方策略奇门卡牌限定版",
    categories: ["divination", "shop"],
    price: 89,
    tagline: "Limited edition Qi Men Dun Jia card deck — ancient Chinese strategy in your hands",
    description: "The Cosmic Matrix is a revolutionary card deck that translates the complex Qi Men Dun Jia system into an intuitive 81-card oracle. Each card represents a specific Qi Men energy configuration, allowing you to perform your own divinations at home. Similar to Tarot in use, but grounded in authentic Chinese strategic cosmology.",
    features: [
      "81 uniquely designed cards — one for each Qi Men configuration",
      "Guidebook with 5 spread types and full interpretations",
      "Durable premium card stock with matte finish",
      "Drawstring silk pouch for storage",
      "QR code access to video tutorials",
    ],
    includes: ["81 Qi Men oracle cards", "Full-color guidebook (120 pages)", "Silk drawstring pouch", "Quick reference card", "Access to online video tutorials"],
    image: "/images/talisman-placeholder.svg",
    isLimitedEdition: true,
  },
  {
    id: "p2",
    slug: "talisman-decor",
    name: "Sacred Talisman Art — Home Decor & Phone Energy Stickers",
    nameCn: "符箓文创家居摆件及手机能量贴纸",
    categories: ["shop"],
    price: 79,
    tagline: "Sacred talisman art for your home and daily life — with blessing video",
    description: "Beautifully designed talisman art pieces for modern living — hand-written authentic talismans presented as home decor and phone energy stickers. Each piece is consecrated at the altar with a filmed ritual before shipping. Carry the blessing with you everywhere, or display it proudly in your home.",
    features: [
      "Authentic hand-written talisman on ritual paper",
      "Framed art piece for home display (8x10 matted frame)",
      "Phone energy sticker (water-resistant, fits any phone)",
      "Full consecration ceremony filmed before shipping",
      "Care and placement instructions",
    ],
    includes: ["Framed talisman art piece", "Phone energy sticker", "Full consecration video", "Placement guide", "Premium packaging"],
    image: "/images/talisman-placeholder.svg",
  },
  {
    id: "p3",
    slug: "physiognomy-mirror",
    name: "The Mirror of Self-Discovery",
    nameCn: "中式美学相学/手相镜",
    categories: ["shop"],
    price: 99,
    tagline: "Learn classical Chinese face reading with this hand-crafted study mirror",
    description: "A beautifully crafted hand mirror inscribed with classical Chinese physiognomy markers. Use it to study your own facial features according to ancient Taoist face-reading tradition. Includes a comprehensive study guide that explains each feature and what it reveals about character and destiny.",
    features: [
      "Hand-crafted brass-framed mirror (6-inch diameter)",
      "Classical physiognomy markers inscribed on the frame",
      "Comprehensive study guide book (60 pages)",
      "Five Element face mapping chart",
      "Luxury gift box packaging",
    ],
    includes: ["Brass-framed physiognomy mirror", "Study guide book", "Five Element face map", "Storage pouch", "Gift box"],
    image: "/images/talisman-placeholder.svg",
  },
  {
    id: "p4",
    slug: "qi-aligner",
    name: "Spatial Qi Aligner",
    nameCn: "空间理气阵法底盘",
    categories: ["fengshui", "shop", "services"],
    price: 299,
    tagline: "Hand-crafted Taoist energy harmonization device for your space",
    description: "A hand-crafted Taoist energy device that harmonizes Qi flow in your home or workspace. Based on ancient Feng Shui principles combined with Qi Men Dun Jia strategic positioning, consecrated at the altar specifically for your space.",
    features: [
      "Hand-crafted from natural materials",
      "Consecrated specifically for your space",
      "Comes with placement guide",
      "Full consecration ritual video included",
      "Works for any room or office",
    ],
    includes: ["Qi Aligner device", "Placement guide", "Consecration video", "Care instructions", "Premium packaging"],
    image: "/images/talisman-placeholder.svg",
  },
  {
    id: "p5",
    slug: "pet-memorial-chest",
    name: "SoulCompanion Memorial Chest",
    nameCn: "万物灵宠雅化归藏匣",
    categories: ["shop", "services"],
    price: 349,
    tagline: "A sacred Taoist farewell for your beloved companion",
    description: "A beautifully hand-crafted memorial chest combined with a Taoist soul-transition ceremony for your beloved companion. The chest serves as a sacred vessel for their memory, while the ceremony guides their spirit with peace.",
    features: [
      "Hand-crafted wooden chest with traditional joinery",
      "Personalized with your companion's name",
      "Taoist soul-transition ceremony included",
      "Full ritual video proof",
      "Room for ashes, collar, photos, or mementos",
    ],
    includes: ["Memorial chest (6x6x4 inches)", "Personalized name card", "Soul-transition ceremony", "Ritual video", "Memory card for your story"],
    image: "/images/talisman-placeholder.svg",
  },
];
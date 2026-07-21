export interface Talisman {
  id: string;
  slug: string;
  name: string;
  chineseName: string;
  category: "wealth" | "protection" | "health" | "luck";
  description: string;
  price: number;
  features: string[];
}

export const talismans: Talisman[] = [
  // Wealth (7)
  { id: "1", slug: "wealth-god", name: "Wealth God Talisman", chineseName: "财神符", category: "wealth", price: 299, description: "Attract prosperity and financial abundance through the blessing of the God of Wealth.", features: ["For career growth & business success", "Enhances financial opportunities", "Traditional Caishen blessing"] },
  { id: "2", slug: "five-way-wealth", name: "Five-Way Wealth Talisman", chineseName: "五路财神符", category: "wealth", price: 349, description: "Open five directions of wealth flow — a comprehensive prosperity talisman.", features: ["Multiple income streams", "Business expansion", "Investment clarity"] },
  { id: "3", slug: "windfall-wealth", name: "Windfall Wealth Talisman", chineseName: "偏财符", category: "wealth", price: 329, description: "For unexpected financial gains, lottery luck, and fortunate windfalls.", features: ["Unexpected income", "Good fortune in games of chance", "Surprise financial opportunities"] },
  { id: "4", slug: "promotion", name: "Promotion Talisman", chineseName: "升职符", category: "wealth", price: 279, description: "Advance your career with recognition and promotion from superiors.", features: ["Career advancement", "Recognition at work", "Leadership opportunities"] },
  { id: "5", slug: "career", name: "Career Talisman", chineseName: "事业符", category: "wealth", price: 279, description: "Steady career growth, job stability, and professional fulfillment.", features: ["Job security", "Professional growth", "Workplace harmony"] },
  { id: "6", slug: "career-harmony", name: "Career Harmony Talisman", chineseName: "人和符", category: "wealth", price: 259, description: "Harmonious relationships with colleagues, bosses, and business partners.", features: ["Team cooperation", "Boss favor", "Business partnerships"] },
  { id: "7", slug: "academic-success", name: "Academic Success Talisman", chineseName: "学业符", category: "wealth", price: 249, description: "Excel in examinations, studies, and intellectual pursuits.", features: ["Exam success", "Focus & concentration", "Knowledge retention"] },
  // Protection (8)
  { id: "8", slug: "body-protection", name: "Personal Protection Talisman", chineseName: "护身符", category: "protection", price: 249, description: "Shield yourself from negative energies, harm, and misfortune.", features: ["Personal safety", "Negative energy shield", "Daily protection"] },
  { id: "9", slug: "anti-gossip", name: "Anti-Gossip Talisman", chineseName: "防小人符", category: "protection", price: 269, description: "Protect against slander, gossip, and malicious rumors.", features: ["Stop gossip", "Reputation protection", "Clear misunderstandings"] },
  { id: "10", slug: "peace-safety", name: "Peace & Safety Talisman", chineseName: "平安符", category: "protection", price: 249, description: "Ensure safe travels, peaceful days, and freedom from accidents.", features: ["Travel safety", "Home protection", "Accident prevention"] },
  { id: "11", slug: "disaster-relief", name: "Disaster-Relief Talisman", chineseName: "消灾符", category: "protection", price: 299, description: "Avert impending disasters and transform misfortune into blessings.", features: ["Crisis aversion", "Bad luck transformation", "Emergency protection"] },
  { id: "12", slug: "home-protection", name: "Home Protection Talisman", chineseName: "镇宅符", category: "protection", price: 279, description: "Safeguard your home and family from negative influences.", features: ["Home security", "Family harmony", "Space purification"] },
  { id: "13", slug: "five-thunder", name: "Five Thunder Talisman", chineseName: "五雷符", category: "protection", price: 349, description: "Powerful exorcism and strong protection talisman from the Five Thunder tradition.", features: ["Strong exorcism", "Powerful protection", "Evil spirit banishment"] },
  { id: "14", slug: "spirit-clearing", name: "Spirit-Clearing Talisman", chineseName: "清心符", category: "protection", price: 259, description: "Clear mental fog, confusion, and spiritual stagnation.", features: ["Mental clarity", "Spiritual purification", "Inner peace"] },
  { id: "15", slug: "evil-warding", name: "Evil-Warding Talisman", chineseName: "避邪符", category: "protection", price: 269, description: "Ward off evil spirits, negative entities, and dark influences.", features: ["Evil spirit protection", "Negative entity removal", "Spiritual boundary"] },
  // Health (3)
  { id: "16", slug: "health", name: "Health Talisman", chineseName: "健康符", category: "health", price: 279, description: "Promote physical wellbeing, vitality, and balanced Qi energy.", features: ["Physical health", "Energy balance", "Recovery support"] },
  { id: "17", slug: "longevity", name: "Longevity Talisman", chineseName: "长寿符", category: "health", price: 329, description: "Blessing for long life, sustained vitality, and graceful aging.", features: ["Long life blessing", "Sustained vitality", "Healthy aging"] },
  { id: "18", slug: "love-harmony", name: "Love Harmony Talisman", chineseName: "和合符", category: "health", price: 329, description: "Attract lasting love, harmonize relationships, and deepen emotional bonds.", features: ["Love attraction", "Relationship harmony", "Emotional bonding"] },
  // Luck (4)
  { id: "19", slug: "luck-turning", name: "Luck-Turning Talisman", chineseName: "转运符", category: "luck", price: 299, description: "Reverse misfortune and turn your luck around for a brighter path.", features: ["Bad luck reversal", "Fortune improvement", "New opportunities"] },
  { id: "20", slug: "tai-sui", name: "Tai Sui (Year Lord) Talisman", chineseName: "太岁符", category: "luck", price: 349, description: "Appease the Year Lord Tai Sui and resolve conflicts with your zodiac year.", features: ["Tai Sui appeasement", "Zodiac conflict resolution", "Annual protection"] },
  { id: "21", slug: "noble-helper", name: "Noble Helper Talisman", chineseName: "贵人符", category: "luck", price: 269, description: "Attract helpful people, mentors, and benefactors into your life.", features: ["Mentor attraction", "Helpful connections", "Support network"] },
  { id: "22", slug: "six-ding-six-jia", name: "Six Ding Six Jia Talisman", chineseName: "六丁六甲符", category: "luck", price: 399, description: "Powerful talisman invoking divine guardians for comprehensive protection and success.", features: ["Divine guardians", "Comprehensive protection", "Ultimate blessing"] },
];

export const packages = [
  { name: "Protection Package", price: 249, description: "Personal Protection talisman with full consecration ceremony.", category: "protection" },
  { name: "Health Package", price: 279, description: "Health or Longevity talisman with filmed blessing ritual.", category: "health" },
  { name: "Love Package", price: 329, description: "Love Harmony talisman with personalized consecration.", category: "health" },
  { name: "Wealth Package", price: 399, description: "Your choice of Wealth talisman with premium ceremony.", category: "wealth" },
];

export const categories = [
  { id: "wealth", name: "Wealth & Prosperity", icon: "✨", description: "Attract abundance, career success, and financial flow" },
  { id: "protection", name: "Protection & Safety", icon: "🛡", description: "Shield yourself, your home, and your loved ones" },
  { id: "health", name: "Health & Love", icon: "🪷", description: "Restore balance, vitality, and harmonious relationships" },
  { id: "luck", name: "Luck & Tai Sui", icon: "〰", description: "Transform fortune and align with cosmic cycles" },
];
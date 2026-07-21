// ── Energy types ──────────────────────────────────────────────────

export type EnergyType = 'protection' | 'health' | 'love' | 'wealth';

// ── Question ──────────────────────────────────────────────────────

export interface QuizOption {
  label: string;
  sublabel: string;
  icon: string;
  energy: EnergyType;
}

export interface QuizQuestion {
  question: string;
  subtitle: string;
  options: QuizOption[];
}

// ── Result ────────────────────────────────────────────────────────

export interface QuizResult {
  type: EnergyType;
  title: string;
  quote: string;
  quoteAuthor: string;
  interpretation: string;
  talisman: string;
  ctaRoute: string;
}

// ── Questions data ────────────────────────────────────────────────

export const questions: QuizQuestion[] = [
  {
    question: 'What pulls at your heart today?',
    subtitle: 'Listen to the quietest voice — it knows',
    options: [
      { label: 'A quiet longing for peace', sublabel: 'Your spirit seeks shelter', icon: '🕊', energy: 'protection' },
      { label: 'A fire to grow and create', sublabel: 'Something new wants to be born', icon: '🔥', energy: 'wealth' },
      { label: 'A need to heal and restore', sublabel: 'Your body is asking to be heard', icon: '🌿', energy: 'health' },
      { label: 'A wish to connect and belong', sublabel: 'The heart remembers what it loves', icon: '💛', energy: 'love' },
    ],
  },
  {
    question: 'Where do you feel the knot?',
    subtitle: 'The body never lies — it speaks in whispers',
    options: [
      { label: 'In my mind — thoughts that won\'t settle', sublabel: 'Overthinking clouds the inner light', icon: '🌫', energy: 'protection' },
      { label: 'In my chest — a restless ambition', sublabel: 'A fire that has not yet found its hearth', icon: '💫', energy: 'wealth' },
      { label: 'In my body — tired and drained', sublabel: 'The vessel needs replenishing', icon: '🍃', energy: 'health' },
      { label: 'In my heart — a quiet loneliness', sublabel: 'A door waiting to be opened', icon: '🤍', energy: 'love' },
    ],
  },
  {
    question: 'What word calls to you right now?',
    subtitle: 'Let your intuition pick — no thinking',
    options: [
      { label: 'Sanctuary', sublabel: 'A place beyond reach of noise', icon: '🏛', energy: 'protection' },
      { label: 'Abundance', sublabel: 'The flow that never runs dry', icon: '✨', energy: 'wealth' },
      { label: 'Vitality', sublabel: 'The pulse of life itself', icon: '🌱', energy: 'health' },
      { label: 'Harmony', sublabel: 'The music of aligned souls', icon: '🪷', energy: 'love' },
    ],
  },
  {
    question: 'If your spirit had one wish today\u2026',
    subtitle: 'Beyond all shoulds and musts — what does it long for?',
    options: [
      { label: 'To be held safe', sublabel: 'Protected from what drains', icon: '🛡', energy: 'protection' },
      { label: 'To flow freely', sublabel: 'Unblocked and abundant', icon: '🌊', energy: 'wealth' },
      { label: 'To feel whole', sublabel: 'Restored to full aliveness', icon: '☀', energy: 'health' },
      { label: 'To be seen', sublabel: 'Recognized and cherished', icon: '🌟', energy: 'love' },
    ],
  },
  {
    question: 'Ancient wisdom says: when the student is ready\u2026',
    subtitle: 'What are you ready to receive?',
    options: [
      { label: 'A shield', sublabel: 'Strength to face the world', icon: '⎔', energy: 'protection' },
      { label: 'A key', sublabel: 'A door that opens to abundance', icon: '🗝', energy: 'wealth' },
      { label: 'A spring', sublabel: 'Water that restores and renews', icon: '💧', energy: 'health' },
      { label: 'A mirror', sublabel: 'Seeing and being seen clearly', icon: '🪞', energy: 'love' },
    ],
  },
];

// ── Results data ──────────────────────────────────────────────────

export const results: Record<EnergyType, QuizResult> = {
  protection: {
    type: 'protection',
    title: 'Your Spirit Calls for Protection',
    quote: 'The sage shelters herself in the Tao and is invulnerable.',
    quoteAuthor: '— Tao Te Ching',
    interpretation:
      'Your energy field is open — sensitive, intuitive, perhaps even porous. You feel things deeply, sometimes too deeply. What you need right now is not another shield to carry, but a sanctuary to rest in. A space where the noise of the world cannot reach you, where your spirit can settle and remember its own strength.',
    talisman:
      'A Personal Protection talisman, hand-written in cinnabar ink on ritual yellow paper at Longhu Mountain. Your name is spoken during the consecration ceremony, and the full ritual is filmed for you before shipping.',
    ctaRoute: 'quiz-result-protection',
  },
  health: {
    type: 'health',
    title: 'Your Spirit Calls for Renewal',
    quote: 'The ten thousand things carry yin and embrace yang. Through their blending, they achieve harmony.',
    quoteAuthor: '— Tao Te Ching, Verse 42',
    interpretation:
      'Your body has been speaking to you, but life has been loud. The ache, the fatigue, the sense that your vitality is not what it once was — these are not signs of weakness. They are your spirit asking for balance. Like a river that has run too fast and too long, you need still water. Time to restore, to let the yang settle and the yin rise.',
    talisman:
      'A Health & Vitality talisman, inscribed with ancient healing characters during a dawn consecration ceremony. The ritual invokes the five elements to restore your body\'s natural harmony.',
    ctaRoute: 'quiz-result-health',
  },
  love: {
    type: 'love',
    title: 'Your Spirit Calls for Connection',
    quote: 'The highest goodness is like water. Water benefits all things without competing.',
    quoteAuthor: '— Tao Te Ching, Verse 8',
    interpretation:
      'There is a softness in you that the world has not yet touched. A capacity for love that is waiting — not to be found, but to be recognized. Whether your longing is for a partner, a deeper friendship, or a more loving relationship with yourself, the Tao reminds you that love is not something you chase. It is something you align with. When you soften, love finds its way in.',
    talisman:
      'A Love & Harmony talisman, hand-written during a rose-quartz ceremony. Your intention is inscribed into the talisman, and it is consecrated with prayers for connection, understanding, and heart-opening.',
    ctaRoute: 'quiz-result-love',
  },
  wealth: {
    type: 'wealth',
    title: 'Your Spirit Calls for Abundance',
    quote: 'The Tao gives birth to all things. Virtue nourishes them.',
    quoteAuthor: '— Tao Te Ching, Verse 51',
    interpretation:
      'There is a creative fire in you that wants to burn brighter. Not for greed — but for expression, for flow, for the joy of bringing something new into the world. The Tao does not hoard. It gives endlessly, effortlessly. Your path to abundance is not through grasping but through opening — letting your unique gift flow through you and into the world. When you align with this flow, prosperity follows naturally.',
    talisman:
      'A Prosperity & Flow talisman, inscribed at the hour of the Tiger — the most auspicious time for abundance rituals. Hand-written with gold ink on sacred paper and consecrated with a full ceremony at Longhu Mountain.',
    ctaRoute: 'quiz-result-wealth',
  },
};

// ── Result computation ────────────────────────────────────────────

export function computeResult(answers: number[]): QuizResult {
  const counts: Record<EnergyType, number> = {
    protection: 0,
    health: 0,
    love: 0,
    wealth: 0,
  };

  answers.forEach((optionIndex, qIndex) => {
    const energy = questions[qIndex].options[optionIndex].energy;
    counts[energy]++;
  });

  const dominant = (Object.entries(counts) as [EnergyType, number][]).sort(
    (a, b) => b[1] - a[1],
  )[0][0];

  return results[dominant];
}

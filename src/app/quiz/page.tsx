/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useCallback } from 'react';
import { questions, computeResult, type QuizResult, type EnergyType } from '@/data/quiz';

// ── Result icons ──────────────────────────────────────────────────

const resultIcons: Record<EnergyType, string> = {
  protection: '🛡',
  health: '🌿',
  love: '🪷',
  wealth: '✨',
};

// ── Page component ────────────────────────────────────────────────

export default function QuizPage() {
  const [step, setStep] = useState(-1);          // -1=intro, 0-4=questions, 5=done
  const [answers, setAnswers] = useState<number[]>([]);
  const [fade, setFade] = useState<'in' | 'out'>('in');
  const [result, setResult] = useState<QuizResult | null>(null);
  const [retakeKey, setRetakeKey] = useState(0);

  // ── Transition helper ──────────────────────────────────────────

  const advance = useCallback(
    (nextStep: number) => {
      setFade('out');
      setTimeout(() => {
        setStep(nextStep);
        setFade('in');
      }, 300);
    },
    [],
  );

  // ── Select an option ───────────────────────────────────────────

  const selectOption = (optionIndex: number) => {
    if (step < 0 || step >= questions.length) return;

    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    // Brief delay for visual feedback, then advance
    setTimeout(() => {
      if (step < questions.length - 1) {
        advance(step + 1);
      } else {
        // Last question — compute result
        const r = computeResult(newAnswers);
        setResult(r);
        advance(5);
      }
    }, 400);
  };

  // ── Reset ──────────────────────────────────────────────────────

  const reset = () => {
    setAnswers([]);
    setResult(null);
    setFade('in');
    setRetakeKey((k) => k + 1);
    setStep(-1); // back to intro
  };

  // ── Shared transition class ────────────────────────────────────

  const fadeClass =
    fade === 'in'
      ? 'opacity-100 translate-y-0 transition-all duration-500 ease-out'
      : 'opacity-0 translate-y-4 transition-all duration-300 ease-in';

  // ── Intro screen ───────────────────────────────────────────────

  if (step === -1) {
    return (
      <main className="min-h-screen bg-ink flex items-center justify-center px-4">
        <div key={retakeKey} className={`max-w-lg text-center ${fadeClass}`}>
          {/* Decorative */}
          <div className="text-5xl mb-6 opacity-60">☯</div>

          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3 font-semibold">
            Free · 2 Minutes
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Energy Guidance<br />
            <span className="text-gold">Assessment</span>
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
            Five quiet questions to help you sense what your spirit most needs right now.
            No account, no commitment — just insight.
          </p>

          <button
            onClick={() => advance(0)}
            className="btn btn-gold btn-lg"
          >
            Begin the Assessment
          </button>

          <p className="text-gray-600 text-xs mt-4">
            Your answers guide your talisman recommendation
          </p>
        </div>
      </main>
    );
  }

  // ── Questions ──────────────────────────────────────────────────

  if (step >= 0 && step < questions.length) {
    const q = questions[step];
    const progress = ((step) / questions.length) * 100;

    return (
      <main className="min-h-screen bg-ink flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span className="text-gold uppercase tracking-wider font-semibold">
                ✦ Energy Guidance
              </span>
              <span>
                {step + 1} of {questions.length}
              </span>
            </div>
            <div className="h-0.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gold transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div key={`q-${step}-${retakeKey}`} className={fadeClass}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
              {q.question}
            </h2>
            <p className="text-gray-500 text-sm italic mb-8">{q.subtitle}</p>

            {/* Options */}
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button
                  key={`${step}-${i}`}
                  onClick={() => selectOption(i)}
                  className="w-full text-left flex items-start gap-4 p-4 md:p-5 rounded-sm
                             border border-gray-700 bg-gray-900/50
                             hover:border-gold/50 hover:bg-gray-800/50
                             transition-all duration-200 group"
                >
                  <span className="text-xl mt-0.5 shrink-0">{opt.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium text-sm md:text-base group-hover:text-gold transition-colors">
                      {opt.label}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">{opt.sublabel}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ── Results ────────────────────────────────────────────────────

  if (step === 5 && result) {
    return (
      <main className="min-h-screen bg-ink">
        <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
          <div key="result" className={fadeClass}>
            {/* Badge */}
            <div className="text-center mb-10">
              <span className="text-5xl block mb-4">{resultIcons[result.type]}</span>
              <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2 font-semibold">
                Your Energy Reading
              </p>
              <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                {result.title}
              </h1>
            </div>

            {/* Quote card */}
            <div className="bg-gray-900/60 border border-gray-800 rounded-sm p-6 md:p-8 mb-8 text-center">
              <p className="text-gold text-lg md:text-xl italic leading-relaxed font-serif">
                &ldquo;{result.quote}&rdquo;
              </p>
              <p className="text-gray-500 text-xs mt-3">{result.quoteAuthor}</p>
            </div>

            {/* Interpretation */}
            <div className="mb-8">
              <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-3 text-gold">
                What this means for you
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {result.interpretation}
              </p>
            </div>

            {/* Talisman recommendation */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-sm p-6 mb-10">
              <h2 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
                Recommended Talisman
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {result.talisman}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center border-t border-gray-800 pt-10">
              <p className="text-gray-400 text-sm mb-4">
                Speak with Master Chen Wei about the right talisman for your situation
              </p>
              <a
                href={`/api/redirect?from=${result.ctaRoute}&campaign=quiz&type=${result.type}`}
                className="btn btn-gold btn-lg"
              >
                Speak with Master Chen Wei
              </a>

              {/* Retake */}
              <div className="mt-8">
                <button
                  onClick={reset}
                  className="text-gray-500 text-xs hover:text-gray-300 transition-colors underline underline-offset-2"
                >
                  Take the assessment again
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ── Fallback (should never render) ─────────────────────────────

  return null;
}

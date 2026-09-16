import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

export default function FranchiseQuiz({ onCompleteQuiz }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    profile: '',
    market: '',
    timeline: ''
  });
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      id: 'profile',
      question: 'What best describes your background?',
      options: [
        { label: 'First-time Entrepreneur', desc: 'Passionate about starting a local retail business with brand support.' },
        { label: 'Existing Business Owner', desc: 'Looking to diversify portfolio into high-demand food retail.' },
        { label: 'Food & Beverage Professional', desc: 'Experienced in restaurant, café, or bakery management.' },
        { label: 'Investor / Business Partner', desc: 'Seeking scalable franchisee store partnerships.' }
      ]
    },
    {
      id: 'market',
      question: 'What type of market location are you exploring?',
      options: [
        { label: 'Tier-1 Metro City', desc: 'High-density commercial hubs or premium shopping centers.' },
        { label: 'Tier-2 Growth City', desc: 'Rapidly developing regional hubs with expanding consumer demand.' },
        { label: 'High-Street Retail Market', desc: 'Vibrant neighborhood footfall streets and dining corridors.' },
        { label: 'College / IT Tech Park Hub', desc: 'Young professional catchment with high café demand.' }
      ]
    },
    {
      id: 'timeline',
      question: 'What is your proposed implementation timeline?',
      options: [
        { label: 'Immediate (1–3 Months)', desc: 'Actively evaluating sites and ready to initiate conversations.' },
        { label: 'Medium Term (3–6 Months)', desc: 'Researching options for upcoming quarter opening.' },
        { label: 'Exploratory Phase (6+ Months)', desc: 'Gathering initial business information for future planning.' }
      ]
    }
  ];

  const handleSelectOption = (key, value) => {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({ profile: '', market: '', timeline: '' });
    setIsCompleted(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF8EE] via-[#FFF5E6] to-[#FFF8EE] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card Frame */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#FFB07C]/40 shadow-xl space-y-8 relative overflow-hidden">
          {/* Decorative Sparkle Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD66B]/30 rounded-full blur-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 text-xs font-bold text-[#B83262]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Interactive Alignment Assessment</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#3A2118]">
              Could Veloura Be Your Next Business?
            </h2>
            <p className="text-xs sm:text-sm text-[#3A2118]/70">
              Answer 3 quick questions to receive a tailored overview of how our franchise model aligns with your goals.
            </p>
          </div>

          {!isCompleted ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-[#3A2118]/70 font-semibold border-b border-[#FFB07C]/20 pb-3">
                <span>Question 0{currentStep + 1} of 03</span>
                <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Completed</span>
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#3A2118] text-center">
                {questions[currentStep].question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {questions[currentStep].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(questions[currentStep].id, opt.label)}
                    className="p-4 rounded-2xl border border-[#FFB07C]/30 bg-[#FFF8EE]/60 hover:bg-[#B83262] hover:text-white hover:border-[#B83262] text-left transition-all duration-200 group flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <span className="font-bold text-sm block group-hover:text-white">
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-[#3A2118]/70 group-hover:text-white/80 block mt-1 leading-normal">
                        {opt.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result State */
            <div className="bg-[#FFF5E6] rounded-2xl p-6 border border-[#FFB07C]/40 text-center space-y-5 animate-in zoom-in-95 duration-300">
              <div className="w-12 h-12 rounded-full bg-[#B83262] text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-[#B83262] uppercase tracking-wider">
                  Assessment Summary
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3A2118]">
                  Veloura may be worth exploring for your business goals!
                </h3>
                <p className="text-xs text-[#3A2118]/80 max-w-md mx-auto leading-relaxed">
                  Based on your profile (<strong>{answers.profile}</strong>) exploring a <strong>{answers.market}</strong> location on a <strong>{answers.timeline}</strong> timeline, our turn-key store formats match your objectives.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={onCompleteQuiz}
                  className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold text-white bg-[#B83262] hover:bg-[#9E2450] shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Start a Franchise Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold text-[#3A2118] bg-white border border-[#FFB07C]/50 hover:bg-[#FFB07C]/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Assessment</span>
                </button>
              </div>

              <p className="text-[10px] text-[#3A2118]/50 italic">
                * Note: This self-assessment is an illustrative evaluation tool designed for site visitors.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

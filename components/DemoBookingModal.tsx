'use client';

import { useState } from 'react';

type DemoBookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type Question = {
  id: string;
  question: string;
  options: string[];
};

export default function DemoBookingModal({ isOpen, onClose }: DemoBookingModalProps) {
  const [currentStep, setCurrentStep] = useState(0); // 0 = contact form, 1-5 = questions
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const questions: Question[] = [
    {
      id: 'company_size',
      question: 'Wie groß ist Ihr Betrieb?',
      options: [
        'Solo-Selbstständig (1 Person)',
        'Kleines Team (2-5 Mitarbeiter)',
        'Mittleres Team (6-20 Mitarbeiter)',
        'Großes Unternehmen (20+ Mitarbeiter)',
      ],
    },
    {
      id: 'industry',
      question: 'In welcher Branche sind Sie tätig?',
      options: [
        'Handwerk (Elektro, Sanitär, etc.)',
        'Facility Management',
        'IT-Services',
        'Reinigungsdienste',
        'Andere Dienstleistungen',
      ],
    },
    {
      id: 'current_solution',
      question: 'Wie verwalten Sie aktuell Ihre Aufträge?',
      options: [
        'Papier & Stift',
        'Excel/Word',
        'Andere Software',
        'Gar keine systematische Verwaltung',
      ],
    },
    {
      id: 'biggest_challenge',
      question: 'Was ist Ihre größte Herausforderung?',
      options: [
        'Zeiterfassung & Abrechnung',
        'Auftragsplanung & Koordination',
        'Kundenverwaltung',
        'Mitarbeiterverwaltung',
        'Buchhaltung & Rechnungen',
      ],
    },
    {
      id: 'timeline',
      question: 'Wann möchten Sie starten?',
      options: [
        'So schnell wie möglich',
        'In den nächsten 2-4 Wochen',
        'In 1-3 Monaten',
        'Nur informieren, kein konkreter Plan',
      ],
    },
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Move to first question
    setCurrentStep(1);
  };

  const handleAnswerSelect = (answer: string) => {
    const currentQuestion = questions[currentStep - 1];
    setAnswers({
      ...answers,
      [currentQuestion.id]: answer,
    });
  };

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Send email via API with all data
      const response = await fetch('/api/send-demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          answers,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Success - show confirmation and close modal
        alert('✅ Vielen Dank! Ihre Demo-Anfrage wurde erfolgreich versendet. Wir melden uns in Kürze bei Ihnen.');
        // Reset form
        setFormData({ name: '', email: '', phone: '' });
        setAnswers({});
        setCurrentStep(0);
        onClose();
      } else {
        // Error from server
        alert('❌ ' + (data.error || 'Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.'));
      }
    } catch (error) {
      // Network or other error
      console.error('Error:', error);
      alert('❌ Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const currentQuestion = currentStep > 0 ? questions[currentStep - 1] : null;
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null;
  const isLastQuestion = currentStep === questions.length;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-3 sm:p-4">
        {/* Backdrop with elegant blur */}
        <div 
          className="fixed inset-0 bg-blue-900/30 backdrop-blur-md transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal with marine blue and white theme */}
        <div className="relative bg-gradient-to-br from-white via-blue-50/50 to-white rounded-2xl shadow-2xl max-w-md w-full p-5 sm:p-6 md:p-8 border-4 border-blue-900/20 animate-[fadeIn_0.3s_ease-out]">
          
          <div className="relative z-10">
            {/* Header with close button and percentage */}
            <div className="flex justify-end items-center gap-2 mb-6">
              {/* Percentage badge */}
              {currentStep > 0 && (
                <span className="text-xs sm:text-sm font-bold text-blue-800 animate-[bounceIn_0.5s_ease-out] bg-blue-100 px-3 py-1.5 rounded-full">
                  {Math.round((currentStep / questions.length) * 100)}%
                </span>
              )}
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="text-blue-900 hover:text-blue-700 transition-all duration-300 hover:rotate-90 transform group p-2 rounded-full hover:bg-blue-100"
                aria-label="Schließen"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Progress indicator with elegant marine design */}
            {currentStep > 0 && (
              <div className="mb-6 animate-[slideDown_0.3s_ease-out]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs sm:text-sm text-blue-900 font-medium animate-[fadeIn_0.5s_ease-out]">
                    Frage {currentStep} von {questions.length}
                  </span>
                </div>
                <div className="w-full bg-blue-100/50 rounded-full h-3 overflow-hidden border-2 border-blue-200 relative shadow-inner">
                  {/* Animated shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
                  <div 
                    className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 h-full transition-all duration-700 ease-out relative overflow-hidden shadow-lg"
                    style={{ width: `${(currentStep / questions.length) * 100}%` }}
                  >
                    {/* Sliding highlight */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[slide_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>
            )}

          {/* Step 0: Contact Form */}
          {currentStep === 0 && (
            <>
              <div className="mb-5 sm:mb-6 animate-[fadeIn_0.5s_ease-out]">
                <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-2 pr-8">
                  Demo buchen
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Füllen Sie das Formular aus und wir kontaktieren Sie für eine persönliche Demo.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-3 sm:space-y-4">
                {/* Name */}
                <div className="animate-[slideUp_0.4s_ease-out]">
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-blue-200 text-gray-900 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 hover:border-blue-300 shadow-sm"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                {/* Email */}
                <div className="animate-[slideUp_0.5s_ease-out]">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-blue-200 text-gray-900 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 hover:border-blue-300 shadow-sm"
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                {/* Phone */}
                <div className="animate-[slideUp_0.6s_ease-out]">
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-blue-900 mb-1 sm:mb-2">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white border-2 border-blue-200 text-gray-900 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all placeholder-gray-400 hover:border-blue-300 shadow-sm"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Info text */}
                <p className="text-xs text-gray-600 animate-[fadeIn_0.7s_ease-out]">
                  Ihre Anfrage wird direkt an unser Team gesendet. Wir melden uns in Kürze bei Ihnen.
                </p>

                {/* Submit button with elegant marine blue */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 transform hover:shadow-xl animate-[slideUp_0.7s_ease-out] group relative overflow-hidden shadow-lg"
                >
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative">Weiter</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>

              {/* Trust badges with elegant icons */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-200 animate-[fadeIn_0.8s_ease-out]">
                <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1 animate-[float_3s_ease-in-out_infinite] bg-blue-50 px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-blue-900">Kostenlos</span>
                  </div>
                  <div className="flex items-center gap-1 animate-[float_3s_ease-in-out_infinite_0.3s] bg-blue-50 px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-blue-900">Unverbindlich</span>
                  </div>
                  <div className="flex items-center gap-1 animate-[float_3s_ease-in-out_infinite_0.6s] bg-blue-50 px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium text-blue-900">15 Min</span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Steps 1-5: Questions */}
          {currentStep > 0 && currentQuestion && (
            <>
              <div className="mb-6 animate-[fadeIn_0.5s_ease-out]">
                <h2 className="text-lg sm:text-xl font-bold text-blue-900 mb-6">
                  {currentQuestion.question}
                </h2>

                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleAnswerSelect(option)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all duration-300 transform hover:scale-[1.02] animate-[slideUp_0.5s_ease-out] relative group overflow-hidden shadow-sm ${
                        currentAnswer === option
                          ? 'border-blue-700 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white font-bold shadow-lg'
                          : 'border-blue-200 bg-white text-gray-900 hover:border-blue-400 hover:bg-blue-50'
                      }`}
                    >
                      {/* Elegant shine effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                        currentAnswer === option ? 'opacity-50' : ''
                      }`}></div>
                      
                      <div className="flex items-center gap-3 relative z-10">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          currentAnswer === option
                            ? 'border-white bg-white animate-[bounceIn_0.5s_ease-out]'
                            : 'border-blue-300 bg-white'
                        }`}>
                          {currentAnswer === option && (
                            <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm sm:text-base">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-3 animate-[fadeIn_0.6s_ease-out]">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2.5 text-sm sm:text-base rounded-lg font-semibold border-2 border-blue-200 text-gray-700 hover:bg-blue-50 hover:border-blue-400 hover:text-blue-800 transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm"
                >
                  <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Zurück</span>
                </button>
                
                {isLastQuestion ? (
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    disabled={!currentAnswer || isSubmitting}
                    className="flex-1 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transform disabled:hover:scale-100 relative overflow-hidden group shadow-lg hover:shadow-xl"
                  >
                    {/* Elegant shine effect */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                    
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2 relative">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Wird gesendet...
                      </span>
                    ) : (
                      <span className="relative flex items-center justify-center gap-2">
                        Demo buchen
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                    )}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!currentAnswer}
                    className="flex-1 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base rounded-lg font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 transform disabled:hover:scale-100 relative overflow-hidden group shadow-lg hover:shadow-xl"
                  >
                    {/* Elegant shine effect */}
                    {currentAnswer && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    )}
                    
                    <span className="relative">Weiter</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </>
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

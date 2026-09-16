import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, CheckCircle2, ShieldAlert, ArrowRight, User, Mail, Phone, MapPin, Building, Briefcase, Calendar, FileText, Check } from 'lucide-react';

export default function ApplyPage({ preselectedCity }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: preselectedCity || '',
    preferredLocation: '',
    occupation: '',
    businessExperience: '',
    fnbExperience: 'No',
    fnbDetails: '',
    previousFranchise: 'No',
    storeFormat: 'Boutique Café & Lounge',
    timeline: 'Immediate (1-3 Months)',
    notes: '',
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedCity) {
      setFormData((prev) => ({ ...prev, city: preselectedCity }));
    }
  }, [preselectedCity]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\-\s]{8,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid contact number.';
    }
    if (!formData.city.trim()) newErrors.city = 'Target city is required.';
    if (!formData.occupation.trim()) newErrors.occupation = 'Occupation background is required.';
    if (!formData.consent) newErrors.consent = 'You must acknowledge the assignment terms to proceed.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log('Confetti playback completed.');
      }
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 bg-[#FFF8EE] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B83262]/10 border border-[#B83262]/20 text-xs font-bold text-[#B83262]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Franchise Application</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#3A2118]">
            Start Your Franchise Conversation
          </h1>

          <p className="text-sm text-[#3A2118]/75 leading-relaxed">
            Fill out the structured enquiry form below to share your background, city preference, and business goals.
          </p>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFD66B]/30 text-xs font-semibold text-[#3A2118] border border-[#FFD66B]/60">
            <ShieldAlert className="w-4 h-4 text-[#B83262]" />
            <span>Concept demo form — no data is saved or transmitted to external servers.</span>
          </div>
        </div>

        {!isSubmitted ? (
          /* Enquiry Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#FFB07C]/40 shadow-xl space-y-8"
          >
            {/* Section 1: Personal Info */}
            <div className="space-y-4">
              <div className="border-b border-[#FFB07C]/20 pb-2">
                <h2 className="font-serif text-xl font-bold text-[#3A2118] flex items-center gap-2">
                  <User className="w-5 h-5 text-[#B83262]" />
                  <span>1. Applicant Information</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Full Name <span className="text-[#B83262]">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="e.g. Ananya Sharma"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262] ${
                      errors.fullName ? 'border-red-500' : 'border-[#FFB07C]/40'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Email Address <span className="text-[#B83262]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="e.g. ananya@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262] ${
                      errors.email ? 'border-red-500' : 'border-[#FFB07C]/40'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Phone Number <span className="text-[#B83262]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262] ${
                      errors.phone ? 'border-red-500' : 'border-[#FFB07C]/40'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Current Occupation <span className="text-[#B83262]">*</span>
                  </label>
                  <input
                    type="text"
                    name="occupation"
                    placeholder="e.g. Retail Manager / Entrepreneur"
                    value={formData.occupation}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262] ${
                      errors.occupation ? 'border-red-500' : 'border-[#FFB07C]/40'
                    }`}
                  />
                  {errors.occupation && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.occupation}</p>}
                </div>
              </div>
            </div>

            {/* Section 2: Target Location & Format */}
            <div className="space-y-4">
              <div className="border-b border-[#FFB07C]/20 pb-2">
                <h2 className="font-serif text-xl font-bold text-[#3A2118] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#B83262]" />
                  <span>2. Target Territory & Store Format</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Target City / Town <span className="text-[#B83262]">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Chennai, Bengaluru, Pune"
                    value={formData.city}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262] ${
                      errors.city ? 'border-red-500' : 'border-[#FFB07C]/40'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-red-500 mt-1 font-semibold">{errors.city}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Preferred Catchment / Area
                  </label>
                  <input
                    type="text"
                    name="preferredLocation"
                    placeholder="e.g. Anna Nagar High Street / Mall"
                    value={formData.preferredLocation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Preferred Store Format
                  </label>
                  <select
                    name="storeFormat"
                    value={formData.storeFormat}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262]"
                  >
                    <option value="Express Counter (300-500 sq.ft)">Express Counter (300 - 500 sq.ft)</option>
                    <option value="Classic Bakery Counter (600-900 sq.ft)">Classic Bakery Counter (600 - 900 sq.ft)</option>
                    <option value="Boutique Café & Lounge (1000-1500 sq.ft)">Boutique Café & Lounge (1000 - 1500 sq.ft)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Expected Start Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262]"
                  >
                    <option value="Immediate (1-3 Months)">Immediate (1 - 3 Months)</option>
                    <option value="Medium Term (3-6 Months)">Medium Term (3 - 6 Months)</option>
                    <option value="Exploratory (6+ Months)">Exploratory (6+ Months)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Business Experience */}
            <div className="space-y-4">
              <div className="border-b border-[#FFB07C]/20 pb-2">
                <h2 className="font-serif text-1xl font-bold text-[#3A2118] flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-[#B83262]" />
                  <span>3. Business & F&B Background</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Prior Business Experience?
                  </label>
                  <select
                    name="previousFranchise"
                    value={formData.previousFranchise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118]"
                  >
                    <option value="No">No - First Time Business</option>
                    <option value="Yes - Independent Store">Yes - Independent Store</option>
                    <option value="Yes - Franchise Unit">Yes - Franchise Unit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Food & Beverage Experience?
                  </label>
                  <select
                    name="fnbExperience"
                    value={formData.fnbExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118]"
                  >
                    <option value="No">No (Training Required)</option>
                    <option value="Yes - Bakery / Café">Yes - Bakery / Café</option>
                    <option value="Yes - Restaurant / QSR">Yes - Restaurant / QSR</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#3A2118] mb-1">
                    Years in Business / Service
                  </label>
                  <input
                    type="text"
                    name="businessExperience"
                    placeholder="e.g. 5 Years"
                    value={formData.businessExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#3A2118] mb-1">
                  Additional Notes / Business Goals
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  placeholder="Share any specific questions or details about your target location..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#FFF8EE]/60 border border-[#FFB07C]/40 text-xs text-[#3A2118] focus:outline-none focus:ring-2 focus:ring-[#B83262]"
                />
              </div>
            </div>

            {/* Consent & Submit */}
            <div className="space-y-4 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="w-4 h-4 mt-0.5 rounded text-[#B83262] focus:ring-[#B83262]"
                />
                <span className="text-xs text-[#3A2118]/80 leading-snug">
                  I acknowledge that <strong>Veloura Cakes</strong> is a concept website created for a Product Management assignment and that submitting this form will simulate a franchise application flow. <span className="text-[#B83262]">*</span>
                </span>
              </label>
              {errors.consent && <p className="text-[11px] text-red-500 font-semibold">{errors.consent}</p>}

              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-[#B83262] via-[#C72C61] to-[#D94B7B] shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Franchise Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Submission Success State */
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#FFB07C]/40 shadow-2xl text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-[#B83262] text-white flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B83262]">
                Enquiry Successfully Captured
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-[#3A2118]">
                Thank You — Your Interest Has Been Received!
              </h2>
              <p className="text-xs sm:text-sm text-[#3A2118]/80 max-w-lg mx-auto leading-relaxed">
                Your enquiry profile for <strong>{formData.city}</strong> has been successfully registered for this concept experience.
              </p>
            </div>

            <div className="bg-[#FFF8EE] p-6 rounded-2xl border border-[#FFB07C]/30 text-left max-w-md mx-auto space-y-3 text-xs">
              <div className="font-bold text-[#B83262] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>What Happens Next in a Real Franchise Journey?</span>
              </div>
              <p className="text-[#3A2118]/80 leading-relaxed">
                A franchise conversation typically begins by understanding your business goals, target city catchment, and preferred store format. Our expansion team reviews profile submissions within 48 hours to schedule an initial discovery call.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-[#3A2118] bg-[#FFF5E6] border border-[#FFB07C] hover:bg-[#FFB07C]/30 transition-all"
              >
                Submit Another Concept Enquiry
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

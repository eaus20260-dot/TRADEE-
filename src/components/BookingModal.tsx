import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Sparkles, AlertCircle } from 'lucide-react';
import { BookingFormData, ContactApiResponse } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTier = 'Growth',
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: 'General Contractor / Construction',
    selectedTier: initialTier,
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (initialTier) {
      setFormData((prev) => ({ ...prev, selectedTier: initialTier }));
    }
  }, [initialTier]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data: ContactApiResponse = await response.json().catch(() => ({
        success: false,
        error: 'Invalid response from server.',
      }));

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit callback request. Please try again.');
      }

      setIsSubmitted(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setErrorMessage(null);
    onClose();
  };

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="booking-modal-card"
        className="relative w-full max-w-lg rounded-2xl bg-[#0d0b16] border border-purple-800/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(147,51,234,0.3)] text-white overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-purple-950/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div id="booking-success-view" className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-purple-900/40 border border-purple-500/60 flex items-center justify-center mx-auto text-purple-300">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold">Strategy Call Requested!</h3>
            <p className="text-zinc-300 text-sm max-w-md mx-auto">
              Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our construction web & marketing specialists will reach out to <span className="text-purple-300">{formData.email}</span> within 24 hours.
            </p>
            <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-900/40 text-xs text-zinc-300">
              <span className="font-semibold text-white">Selected Package:</span> {formData.selectedTier} (Eligible for 30% testimonial discount)
            </div>
            <button
              onClick={handleReset}
              className="btn-glow px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white mt-4 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
            <div className="mb-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-950/60 border border-purple-500/40 text-purple-300 mb-2">
                <Calendar className="w-3 h-3" />
                <span>30-Min Strategy Blueprint</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Book Strategy Call
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                Discover how tailored digital systems will win high-ticket contracts.
              </p>
            </div>

            {errorMessage && (
              <div
                id="booking-error-banner"
                className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-start gap-2"
              >
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Marcus Vance"
                className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-purple-900/40 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="marcus@vancebuilds.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-purple-900/40 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-purple-900/40 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Company / Trade
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Vance Construction"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-purple-900/40 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Interested Package
                </label>
                <select
                  value={formData.selectedTier}
                  onChange={(e) => setFormData({ ...formData, selectedTier: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-900/90 border border-purple-900/40 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                >
                  <option value="Growth">Growth ($3,000)</option>
                  <option value="Brochure">Brochure ($1,000)</option>
                  <option value="Enterprise">Enterprise (Custom Quote)</option>
                  <option value="Free Strategy Call">Free Strategy Call</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-1.5">
                Current Goals or Project Needs
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your trade, current web presence, or target clients..."
                className="w-full px-4 py-2 rounded-lg bg-zinc-900/90 border border-purple-900/40 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="btn-glow w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-purple-300" />
                    <span>Confirm Strategy Call</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

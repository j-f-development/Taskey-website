"use client";

import React, { useState } from 'react';

interface ManagerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ManagerRequestModal({ isOpen, onClose }: ManagerRequestModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    firma: '',
    telefon: '',
    mitarbeiteranzahl: '',
    nachricht: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-manager-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Erfolgs-Alert mit Details
        alert('✅ Vielen Dank! Ihre Manager-Anfrage wurde erfolgreich versendet. Ein Taskey Manager wird sich innerhalb von 24 Stunden bei Ihnen melden.');
        // Formular zurücksetzen
        setFormData({
          name: '',
          email: '',
          firma: '',
          telefon: '',
          mitarbeiteranzahl: '',
          nachricht: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 1000);
      } else {
        setSubmitStatus('error');
        // Fehler-Alert mit Serverantwort
        alert('❌ ' + (data.error || 'Es gab ein Problem beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.'));
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      // Netzwerk-Fehler-Alert
      alert('❌ Verbindungsfehler. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="sticky top-0 bg-gradient-to-r from-cyan-500 to-blue-600 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-black text-white">
            Persönlichen Manager anfragen
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4 mb-6">
            <p className="text-cyan-400 text-sm">
              Ein Taskey Manager wird sich innerhalb von 24 Stunden bei Ihnen melden
            </p>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Ihr Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Max Mustermann"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              E-Mail-Adresse *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="max@firma.de"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Firma *
            </label>
            <input
              type="text"
              name="firma"
              value={formData.firma}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="Ihre Firma GmbH"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Telefonnummer *
            </label>
            <input
              type="tel"
              name="telefon"
              value={formData.telefon}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              placeholder="+49 151 12345678"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Anzahl der Mitarbeiter *
            </label>
            <select
              name="mitarbeiteranzahl"
              value={formData.mitarbeiteranzahl}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="">Bitte wählen</option>
              <option value="1-10">1-10 Mitarbeiter</option>
              <option value="11-50">11-50 Mitarbeiter</option>
              <option value="51-150">51-150 Mitarbeiter</option>
              <option value="150+">150+ Mitarbeiter</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">
              Ihre Nachricht (optional)
            </label>
            <textarea
              name="nachricht"
              value={formData.nachricht}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              placeholder="Beschreiben Sie Ihre Anforderungen..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-500/20 border border-green-500 rounded-lg p-4 text-green-400">
              ✓ Ihre Anfrage wurde erfolgreich versendet!
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 text-red-400">
              Es gab einen Fehler. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black py-4 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-cyan-500/50"
          >
            {isSubmitting ? 'Wird gesendet...' : 'Manager anfragen'}
          </button>
        </form>
      </div>
    </div>
  );
}

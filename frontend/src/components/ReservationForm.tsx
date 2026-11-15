import React, { useState } from 'react';
import './ReservationForm.css';
import { apiFetch } from '../utils/api';
import { ReservationRequest } from '../types';
import { Language, translations } from '../utils/translations';

interface ReservationFormProps {
  lang: Language;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ lang }) => {
  const [formData, setFormData] = useState<ReservationRequest>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = translations[lang].reservation;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await apiFetch<void>('reservations', {
        method: 'POST',
        body: JSON.stringify(formData)
      });
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2
      });
    } catch (err) {
      console.error(err);
      setError((err as Error).message || t.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="reservation-section">
      <h2>{t.title}</h2>
      <div className="reservation-container glass-card">
        {success ? (
          <div className="success-message">
            <span className="success-icon">🎉</span>
            <h3>{t.successTitle}</h3>
            <p>{t.successDesc}</p>
            <button className="btn" onClick={() => setSuccess(false)}>{t.anotherReservation}</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reservation-form">
            {error && <div className="error-alert">{error}</div>}
            
            <div className="form-group">
              <label htmlFor="name">{t.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.namePlaceholder}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">{t.email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t.phone}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t.phonePlaceholder}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="date">{t.date}</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">{t.time}</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">{t.guests}</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? t.guestsSingular : t.guestsPlural}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-submit" disabled={loading}>
              {loading ? t.submitting : t.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ReservationForm;

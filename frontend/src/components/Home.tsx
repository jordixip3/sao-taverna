import React, { useEffect, useState } from 'react';
import './Home.css';
import { apiFetch } from '../utils/api';
import { Language, translations } from '../utils/translations';

type CafeInfo = {
  address: string;
  phone: string;
  openingHours: string;
  description?: string;
};

interface HomeProps {
  lang: Language;
}

const Home: React.FC<HomeProps> = ({ lang }) => {
  const [info, setInfo] = useState<CafeInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const t = translations[lang];

  useEffect(() => {
    apiFetch<CafeInfo>('info')
      .then((data) => {
        setInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError((err as Error).message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    const loadingText = lang === 'ca' ? 'Carregant dades...' : lang === 'en' ? 'Loading data...' : 'Cargando datos...';
    return <section className="hero glass-card"><p>{loadingText}</p></section>;
  }

  if (error) {
    return <section className="hero glass-card"><p>Error: {error}</p></section>;
  }

  // Use dynamic description, address, and hours from translations if available
  const displayDescription = t.home.welcome;
  const displayAddress = t.home.address;
  const displayHours = t.home.hours;
  const displayPhone = info?.phone || '+34 600 123 456';

  return (
    <div className="home-section">
      <section className="hero glass-card">
        <h2>{displayDescription}</h2>
        <div className="info">
          <p className="contact-details">
            <strong>{displayAddress}</strong>
            <br />
            <span>{displayPhone}</span>
          </p>
          <h3>{t.home.hoursTitle}</h3>
          <p className="hours-details">{displayHours}</p>
          <h3>{t.home.locationTitle}</h3>
        </div>
        <div className="map-wrapper">
          <iframe
            title="Mapa de SAÓ Taverna"
            src="https://maps.google.com/maps?q=Carrer%20de%20Sant%20Joan,%2035,%20Calella&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

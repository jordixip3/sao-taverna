import React from 'react';
import './Header.css';
import { Language } from '../utils/translations';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, onLanguageChange }) => {
  const languages: { code: Language; label: string }[] = [
    { code: 'ca', label: 'CA' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <header className="app-header">
      <h1>SAÓ Taverna</h1>
      <div className="lang-selector">
        {languages.map((l) => (
          <button
            key={l.code}
            className={`lang-btn ${lang === l.code ? 'active' : ''}`}
            onClick={() => onLanguageChange(l.code)}
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import './Footer.css';
import { Language, translations } from '../utils/translations';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="app-footer">
      <p>{translations[lang].footer.rights}</p>
    </footer>
  );
};

export default Footer;

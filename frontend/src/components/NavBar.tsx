import React from 'react';
import './NavBar.css';
import { Language, translations } from '../utils/translations';

interface NavBarProps {
  selected: string;
  onSelect: (page: string) => void;
  lang: Language;
}

const NavBar: React.FC<NavBarProps> = ({ selected, onSelect, lang }) => {
  const pages = ['home', 'menu', 'reservar'];
  const labels = translations[lang].nav;

  return (
    <nav className="navbar">
      <ul>
        {pages.map((p) => (
          <li key={p} className={selected === p ? 'active' : ''} onClick={() => onSelect(p)}>
            {labels[p as keyof typeof labels]}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

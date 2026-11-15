import React, { useEffect, useState } from 'react';
import './Menu.css';
import { MenuItem as MenuItemType } from '../types';
import { apiFetch } from '../utils/api';
import { Language, translations, translateMenuItem } from '../utils/translations';

const getEmojiForItem = (name: string): string => {
  const n = name.toLowerCase();
  if (n.includes('café') || n.includes('cafe')) return '☕️';
  if (n.includes('tortilla')) return '🍳';
  if (n.includes('croissant')) return '🥐';
  if (n.includes('bocadillo') || n.includes('jamón') || n.includes('jamon')) return '🥖';
  return '🍽️';
};

interface MenuProps {
  lang: Language;
}

const Menu: React.FC<MenuProps> = ({ lang }) => {
  const [menu, setMenu] = useState<MenuItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const t = translations[lang].menu;

  useEffect(() => {
    apiFetch<MenuItemType[]>('menu')
      .then((data) => {
        setMenu(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError((err as Error).message);
        setLoading(false);
      });
  }, []);

  if (loading) return <section className="hero glass-card"><p>{t.loading}</p></section>;
  if (error) return <section className="hero glass-card"><p>{t.error}{error}</p></section>;

  return (
    <section className="menu-section">
      <h2>{t.title}</h2>
      <div className="menu-grid">
        {menu.map((item, idx) => {
          const translated = translateMenuItem(item.name, item.description, lang);
          return (
            <div key={idx} className="menu-card glass-card">
              {item.imageUrl ? (
                <img src={item.imageUrl} alt={translated.name} className="menu-image" />
              ) : (
                <div className="menu-image-placeholder">
                  {getEmojiForItem(item.name)}
                </div>
              )}
              <h3>{translated.name}</h3>
              <p>{translated.desc}</p>
              <p className="price">{item.price.toFixed(2)} {t.priceUnit}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;

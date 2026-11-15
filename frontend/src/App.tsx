import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Menu from './components/Menu';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';
import { Language } from './utils/translations';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [lang, setLang] = useState<Language>('ca');

  const renderContent = () => {
    switch (currentPage) {
      case 'menu':
        return <Menu lang={lang} />;
      case 'reservar':
        return <ReservationForm lang={lang} />;
      case 'home':
      default:
        return <Home lang={lang} />;
    }
  };

  return (
    <>
      <Header lang={lang} onLanguageChange={setLang} />
      <NavBar selected={currentPage} onSelect={setCurrentPage} lang={lang} />
      <main>
        {renderContent()}
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default App;

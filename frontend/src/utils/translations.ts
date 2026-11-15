export type Language = 'ca' | 'es' | 'en';

export const translations = {
  ca: {
    nav: {
      home: 'Inici',
      menu: 'Carta',
      reservar: 'Reservar Taula'
    },
    home: {
      welcome: 'Benvinguts a SAÓ Taverna - Botiga Mediterrània!',
      address: 'Carrer de Sant Joan, 35, Calella',
      hoursTitle: 'Horari',
      hours: 'Diumenge‑Dijous: 09:00‑23:00, Divendres‑Dissabte: 09:00‑00:00',
      locationTitle: 'Ubicació'
    },
    menu: {
      title: 'La Nostra Carta',
      loading: 'Carregant la carta...',
      error: 'Error al carregar la carta: ',
      priceUnit: '€',
      items: {
        'patatas bravas': {
          name: 'Patates Braves',
          desc: 'Cruixents patates amb salsa brava casolana i allioli'
        },
        'calamares a la romana': {
          name: 'Calamars a la Romana',
          desc: 'Calamars tendres arrebossats amb un toc de llimona'
        },
        'butifarra a la parrilla': {
          name: 'Botifarra a la Parrilla',
          desc: 'Botifarra catalana a la brasa amb mongetes seques'
        },
        'coulant de chocolate': {
          name: 'Coulant de Xocolata',
          desc: 'Pa de pessic calent amb cor de xocolata desfeta'
        },
        'tiramisú casero': {
          name: 'Tiramisú Casolà',
          desc: 'Postres italianes amb mascarpone, cafè i cacau'
        }
      }
    },
    reservation: {
      title: 'Reservar Taula',
      name: 'Nom Complet',
      namePlaceholder: 'Ex. Joan Pérez',
      email: 'Correu Electrònic',
      emailPlaceholder: 'exemple@correu.com',
      phone: 'Telèfon',
      phonePlaceholder: 'Ex. +34 600 000 000',
      date: 'Data',
      time: 'Hora',
      guests: 'Persones',
      guestsPlural: 'persones',
      guestsSingular: 'persona',
      submit: 'Confirmar Reserva',
      submitting: 'Enviant...',
      successTitle: 'Reserva Confirmada!',
      successDesc: 'Hem rebut la teva reserva correctament. T’esperem a SAÓ Taverna - Botiga Mediterrània!',
      anotherReservation: 'Fer una altra reserva',
      error: 'Error a l’enviar la reserva. Si us plau, torna-ho a intentar.'
    },
    footer: {
      rights: '© 2026 SAÓ Taverna - Botiga Mediterrània. Tots els drets reservats.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      menu: 'Carta',
      reservar: 'Reservar Mesa'
    },
    home: {
      welcome: '¡Bienvenidos a SAÓ Taverna - Botiga Mediterrània!',
      address: 'Carrer de Sant Joan, 35, Calella',
      hoursTitle: 'Horario',
      hours: 'Domingo‑Jueves: 09:00‑23:00, Viernes‑Sábado: 09:00‑00:00',
      locationTitle: 'Ubicación'
    },
    menu: {
      title: 'Nuestra Carta',
      loading: 'Cargando carta...',
      error: 'Error al cargar la carta: ',
      priceUnit: '€',
      items: {
        'patatas bravas': {
          name: 'Patatas Bravas',
          desc: 'Crujientes patatas con salsa brava casera y alioli'
        },
        'calamares a la romana': {
          name: 'Calamares a la Romana',
          desc: 'Calamares tiernos rebozados con un toque de limón'
        },
        'butifarra a la parrilla': {
          name: 'Butifarra a la Parrilla',
          desc: 'Butifarra catalana a la brasa con judías secas'
        },
        'coulant de chocolate': {
          name: 'Coulant de Chocolate',
          desc: 'Bizcocho caliente con corazón de chocolate fundido'
        },
        'tiramisú casero': {
          name: 'Tiramisú Casero',
          desc: 'Postre italiano con mascarpone, café y cacao'
        }
      }
    },
    reservation: {
      title: 'Reservar Mesa',
      name: 'Nombre Completo',
      namePlaceholder: 'Ej. Juan Pérez',
      email: 'Email',
      emailPlaceholder: 'ejemplo@correo.com',
      phone: 'Teléfono',
      phonePlaceholder: 'Ej. +34 600 000 000',
      date: 'Fecha',
      time: 'Hora',
      guests: 'Personas',
      guestsPlural: 'personas',
      guestsSingular: 'persona',
      submit: 'Confirmar Reserva',
      submitting: 'Enviando...',
      successTitle: '¡Reserva Confirmada!',
      successDesc: 'Hemos recibido tu reserva correctamente. ¡Te esperamos en SAÓ Taverna - Botiga Mediterrània!',
      anotherReservation: 'Hacer otra reserva',
      error: 'Error al enviar la reserva. Por favor, inténtelo de nuevo.'
    },
    footer: {
      rights: '© 2026 SAÓ Taverna - Botiga Mediterrània. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      menu: 'Menu',
      reservar: 'Book Table'
    },
    home: {
      welcome: 'Welcome to SAÓ Taverna - Botiga Mediterrània!',
      address: 'Carrer de Sant Joan, 35, Calella',
      hoursTitle: 'Opening Hours',
      hours: 'Sunday‑Thursday: 09:00‑23:00, Friday‑Saturday: 09:00‑00:00',
      locationTitle: 'Location'
    },
    menu: {
      title: 'Our Menu',
      loading: 'Loading menu...',
      error: 'Error loading menu: ',
      priceUnit: '€',
      items: {
        'patatas bravas': {
          name: 'Spicy Potatoes (Bravas)',
          desc: 'Crispy potatoes with homemade brava sauce and garlic aioli'
        },
        'calamares a la romana': {
          name: 'Roman-Style Squid',
          desc: 'Tender battered squid rings served with a wedge of lemon'
        },
        'butifarra a la parrilla': {
          name: 'Grilled Sausage',
          desc: 'Traditional Catalan grilled sausage served with white beans'
        },
        'coulant de chocolate': {
          name: 'Chocolate Coulant',
          desc: 'Warm chocolate sponge cake with a molten chocolate center'
        },
        'tiramisú casero': {
          name: 'Homemade Tiramisu',
          desc: 'Classic Italian dessert with layers of mascarpone, coffee, and cocoa'
        }
      }
    },
    reservation: {
      title: 'Book a Table',
      name: 'Full Name',
      namePlaceholder: 'e.g. John Doe',
      email: 'Email Address',
      emailPlaceholder: 'john@example.com',
      phone: 'Phone Number',
      phonePlaceholder: 'e.g. +34 600 000 000',
      date: 'Date',
      time: 'Time',
      guests: 'Guests',
      guestsPlural: 'guests',
      guestsSingular: 'guest',
      submit: 'Confirm Booking',
      submitting: 'Sending...',
      successTitle: 'Reservation Confirmed!',
      successDesc: 'We have successfully received your booking. We look forward to seeing you at SAÓ Taverna - Botiga Mediterrània!',
      anotherReservation: 'Make another reservation',
      error: 'Error submitting reservation. Please try again.'
    },
    footer: {
      rights: '© 2026 SAÓ Taverna - Botiga Mediterrània. All rights reserved.'
    }
  }
};

export const translateMenuItem = (name: string, desc: string, lang: Language) => {
  const normalizedKey = name.toLowerCase().trim();
  const langItems = translations[lang].menu.items as Record<string, { name: string; desc: string }>;
  if (langItems[normalizedKey]) {
    return langItems[normalizedKey];
  }
  return { name, desc };
};

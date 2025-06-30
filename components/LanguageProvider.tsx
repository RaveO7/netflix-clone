"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Toutes les traductions du site (exemple pour home, hero, footer, FAQ, etc.)
const translations = {
  en: {
    hero: {
      title: 'Unlimited movies, series, and more',
      subtitle: 'Starts at EUR 7.99. Cancel anytime.',
      cta: 'Ready to watch? Enter your email to create or restart your membership.',
      getStarted: 'Get Started',
      signIn: 'Sign In',
      emailPlaceholder: 'Email address',
    },
    adBanner: {
      line1: 'The Netflix you love for just EUR 7.99.',
      line2: 'Get our most affordable, ad-supported plan.',
      learnMore: 'Learn More',
    },
    moreReasons: {
      title: 'More Reasons to Join',
      enjoy: 'Enjoy on your TV',
      enjoyDesc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      download: 'Download your shows to watch offline',
      downloadDesc: 'Save your favorites easily and always have something to watch.',
      everywhere: 'Watch everywhere',
      everywhereDesc: 'Stream unlimited movies and series on your phone, tablet, laptop, and TV.',
      kids: 'Create profiles for kids',
      kidsDesc: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.'
    },
    faq: {
      title: 'Frequently Asked Questions',
      questions: [
        { q: 'What is Netflix?', a: 'Netflix is a streaming service that offers a wide variety of award-winning series, movies, anime, documentaries, and more on thousands of internet-connected devices.' },
        { q: 'How much does Netflix cost?', a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 7.99 to USD 24.99 a month. No extra costs, no contracts.' },
        { q: 'Where can I watch?', a: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app.' },
        { q: 'How do I cancel?', a: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks.' },
        { q: 'What can I watch on Netflix?', a: 'Netflix has an extensive library of feature films, documentaries, series, anime, award-winning Netflix originals, and more.' },
        { q: 'Is Netflix good for kids?', a: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly series and movies in their own space.' },
      ]
    },
    signInModal: {
      title: 'Sign In',
      placeholder: 'Enter your username',
      button: 'Sign In',
      loading: 'Signing In...',
      signup: 'Sign up now',
      newTo: 'New to Netflix?',
      error: 'Please enter your username',
      welcome: 'Welcome',
    },
    footer: {
      contact: 'Questions? Contact us.',
      select: 'English',
      country: 'Netflix France',
      recaptcha: 'This page is protected by Google reCAPTCHA to ensure you\'re not a bot. ',
      learnMore: 'Learn more.',
      links: [
        ['FAQ', 'Investor Relations', 'Buy Gift Cards', 'Cookie Preferences', 'Legal Guarantee'],
        ['Help Center', 'Jobs', 'Ways to Watch', 'Corporate Information', 'Legal Notices'],
        ['Account', 'Netflix Shop', 'Terms of Use', 'Contact Us', 'Only on Netflix'],
        ['Media Center', 'Redeem Gift Cards', 'Privacy', 'Speed Test', 'Ad Choices']
      ]
    }
  },
  fr: {
    hero: {
      title: 'Films, séries et bien plus en illimité',
      subtitle: 'À partir de 7,99 € par mois. Résiliez à tout moment.',
      cta: 'Prêt à regarder ? Saisissez votre e-mail pour créer ou réactiver votre abonnement.',
      getStarted: 'Commencer',
      signIn: 'Se connecter',
      emailPlaceholder: 'Adresse e-mail',
    },
    adBanner: {
      line1: 'Le Netflix que vous aimez pour seulement 7,99 €.',
      line2: 'Découvrez notre offre la plus abordable avec pub.',
      learnMore: 'En savoir plus',
    },
    moreReasons: {
      title: "Encore plus de raisons de nous rejoindre",
      enjoy: "Profitez sur votre TV",
      enjoyDesc: "Regardez sur Smart TV, Playstation, Xbox, Chromecast, Apple TV, lecteurs Blu-ray, et plus.",
      download: "Téléchargez vos séries pour les regarder hors ligne",
      downloadDesc: "Enregistrez facilement vos favoris et ayez toujours quelque chose à regarder.",
      everywhere: "Regardez partout",
      everywhereDesc: "Regardez des films et séries en illimité sur votre téléphone, tablette, ordinateur et TV.",
      kids: "Créez des profils pour les enfants",
      kidsDesc: "Laissez les enfants partir à l'aventure avec leurs personnages préférés dans un espace qui leur est dédié — inclus dans votre abonnement."
    },
    faq: {
      title: "Foire aux questions",
      questions: [
        { q: "Qu'est-ce que Netflix ?", a: "Netflix est un service de streaming proposant une vaste sélection de séries, films, animes, documentaires et autres programmes sur des milliers d'appareils connectés à Internet." },
        { q: "Combien coûte Netflix ?", a: "Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un forfait mensuel fixe. Les forfaits vont de 7,99 € à 24,99 € par mois. Pas de frais supplémentaires, pas de contrat." },
        { q: "Où puis-je regarder ?", a: "Regardez où vous voulez, quand vous voulez. Connectez-vous à votre compte Netflix pour regarder instantanément sur le web à netflix.com depuis votre ordinateur personnel ou sur tout appareil connecté à Internet proposant l'application Netflix." },
        { q: "Comment annuler ?", a: "Netflix est flexible. Pas de contrat ni d'engagement. Vous pouvez facilement annuler votre compte en ligne en deux clics." },
        { q: "Que puis-je regarder sur Netflix ?", a: "Netflix propose un large catalogue comprenant des longs métrages, des documentaires, des séries, des animes, des programmes originaux primés Netflix, et plus encore." },
        { q: "Netflix est-il adapté aux enfants ?", a: "L'expérience Netflix Jeunesse est incluse dans votre abonnement pour permettre aux parents de contrôler ce que regardent les enfants dans un espace qui leur est réservé." },
      ]
    },
    signInModal: {
      title: 'Se connecter',
      placeholder: 'Entrez votre pseudo',
      button: 'Se connecter',
      loading: 'Connexion...',
      signup: "S'inscrire",
      newTo: 'Nouveau sur Netflix ?',
      error: 'Veuillez saisir votre pseudo',
      welcome: 'Bienvenue',
    },
    footer: {
      contact: 'Des questions ? Contactez-nous.',
      select: 'Français',
      country: 'Netflix France',
      recaptcha: "Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot. ",
      learnMore: 'En savoir plus.',
      links: [
        ['FAQ', 'Relations investisseurs', 'Acheter des cartes cadeaux', 'Préférences de cookies', 'Garantie légale'],
        ["Centre d'aide", 'Emplois', 'Modes de lecture', 'Informations légales', 'Mentions légales'],
        ["Compte", 'Boutique Netflix', "Conditions d'utilisation", 'Nous contacter', 'Uniquement sur Netflix'],
        ['Centre des médias', 'Utiliser des cartes cadeaux', 'Confidentialité', 'Test de vitesse', 'Choix publicitaires']
      ]
    },
  }
};

interface LanguageContextProps {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const lang = localStorage.getItem('netflix-lang');
      if (lang === 'en' || lang === 'fr') return lang;
    }
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('netflix-lang', language);
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
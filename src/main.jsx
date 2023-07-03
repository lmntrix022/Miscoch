import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_en from './translations/en/global_en.json';
import global_fr from './translations/fr/global_fr.json';
import App from './App';
import './index.css';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'fr',
  resources: {
    fr: {
      translation: global_fr, // Assurez-vous que le nom d'exportation correspond à l'importation et ajoutez "translation"
    },
    en: {
      translation: global_en, // Assurez-vous que le nom d'exportation correspond à l'importation et ajoutez "translation"
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

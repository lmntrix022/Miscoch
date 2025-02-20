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

 const iframe = document.createElement("iframe");
    
    const iframeStyles = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
    }
    
    iframeStyles('
        .chat-frame {
            position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
        }
    ')
    
    iframe.src = "http://localhost:3000/chatbot"
    iframe.classList.add('chat-frame')
    document.body.appendChild(iframe)
    
    window.addEventListener("message", (e) => {
        if(e.origin !== "http://localhost:3000") return null
        let dimensions = JSON.parse(e.data)
        iframe.width = dimensions.width
        iframe.height = dimensions.height
        iframe.contentWindow.postMessage("f422b011-ba11-4958-af20-01b7f29d08a0", "http://localhost:3000/")
    });
        

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

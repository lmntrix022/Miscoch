import { BrowserRouter } from "react-router-dom";
import { useEffect } from 'react'; // pour utiliser useEffect
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Ressources, Faq } from "./components";

const App = () => {
  
  const getUserLanguage = () => {
    return navigator.language || navigator.userLanguage;
  };

  const userLanguage = getUserLanguage();
  console.log('Langue préférée de l\'utilisateur :', userLanguage);

  useEffect(() => {
    // Création de l'iframe
    const iframe = document.createElement("iframe");

    // Fonction pour ajouter des styles à la page
    const iframeStyles = (styleString) => {
      const style = document.createElement('style');
      style.textContent = styleString;
      document.head.append(style);
    };

    // Ajouter les styles pour l'iframe
    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 50px;
        right: 50px;
        border: none;
        width: 400px; /* Par défaut, tu peux ajuster la largeur */
        height: 500px; /* Par défaut, tu peux ajuster la hauteur */
      }
    `);

    // Définir la source de l'iframe
    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add('chat-frame');
    document.body.appendChild(iframe);

    // Écouter les messages provenant de l'iframe
    const messageHandler = (e) => {
      if (e.origin !== "http://localhost:3000") return;
      let dimensions = JSON.parse(e.data);
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;
      iframe.contentWindow.postMessage("f422b011-ba11-4958-af20-01b7f29d08a0", "http://localhost:3000/");
    };

    window.addEventListener("message", messageHandler);

    // Nettoyage pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener("message", messageHandler);
      document.body.removeChild(iframe); // Retirer l'iframe lors du démontage
    };
  }, []); // Le tableau vide assure que le useEffect s'exécute une seule fois lors du montage initial.

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
        </div>

        <div className='bg-hero-pattern bg-cover bg-center'>
          <Experience />
        </div>
        
        <Tech />
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Works />
        </div>
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Ressources />
        </div>
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Faq />
        </div>
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Feedbacks />
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

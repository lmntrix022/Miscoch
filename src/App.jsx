import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react"; // Importez useState et useEffect
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Ressources, Faq } from "./components";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false); // État pour gérer l'ouverture du chatbot

  // Fonction pour détecter la langue de l'utilisateur
  const getUserLanguage = () => {
    return navigator.language || navigator.userLanguage;
  };

  const userLanguage = getUserLanguage();
  console.log('Langue préférée de l\'utilisateur :', userLanguage);

  // useEffect pour gérer la création et la suppression de l'iframe du chatbot
  useEffect(() => {
    if (!isChatOpen) return; // Ne rien faire si le chatbot est fermé

    // Créer l'iframe
    const iframe = document.createElement("iframe");
    iframe.src = "http://localhost:3000/chatbot";
    iframe.style.position = 'fixed';
    iframe.style.bottom = '50px';
    iframe.style.right = '50px';
    iframe.style.border = 'none';
    iframe.style.zIndex = '1000'; // Assurez-vous que l'iframe est au-dessus des autres éléments
    document.body.appendChild(iframe);

    // Gestion des messages postés à la fenêtre
    const CHATBOT_ORIGIN = "http://localhost:3000";
    const messageHandler = (e) => {
      if (e.origin !== CHATBOT_ORIGIN) return;

      try {
        const dimensions = JSON.parse(e.data);
        iframe.width = dimensions.width;
        iframe.height = dimensions.height;
        iframe.contentWindow.postMessage("f422b011-ba11-4958-af20-01b7f29d08a0", CHATBOT_ORIGIN);
      } catch (error) {
        console.error("Erreur lors de l'analyse des dimensions du chatbot :", error);
      }
    };

    window.addEventListener("message", messageHandler);

    // Nettoyer l'iframe et l'écouteur d'événements lors de la fermeture du chatbot
    return () => {
      window.removeEventListener("message", messageHandler);
      document.body.removeChild(iframe);
    };
  }, [isChatOpen]); // Déclencher useEffect lorsque isChatOpen change

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

        {/* Bouton pour ouvrir/fermer le chatbot */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-10 right-10 bg-yellow-400 text-white p-4 rounded-full shadow-lg z-1000"
        >
          💬
        </button>
      </div>
    </BrowserRouter>
  );
};

export default App;

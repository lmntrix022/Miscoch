import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Ressources, Faq } from "./components";

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const getUserLanguage = () => {
    return navigator.language || navigator.userLanguage;
  };

  const userLanguage = getUserLanguage();
  console.log("Langue préférée de l'utilisateur :", userLanguage);

  useEffect(() => {
    if (!isChatOpen) return; // Ne crée l'iframe que si le chat est ouvert

    const iframe = document.createElement("iframe");

    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add("chat-frame");

    document.body.appendChild(iframe);

    const messageHandler = (e) => {
      if (e.origin !== "http://localhost:3000") return;
      let dimensions = JSON.parse(e.data);
      iframe.width = dimensions.width;
      iframe.height = dimensions.height;
      iframe.contentWindow.postMessage("f422b011-ba11-4958-af20-01b7f29d08a0", "http://localhost:3000/");
    };

    window.addEventListener("message", messageHandler);

    return () => {
      window.removeEventListener("message", messageHandler);
      document.body.removeChild(iframe);
    };
  }, [isChatOpen]); // Dépendance pour réagir à l'ouverture du chat

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <div className="bg-hero-pattern bg-cover bg-center">
          <Experience />
        </div>
        <Tech />
        <div className="bg-hero-pattern bg-cover bg-center">
          <Works />
        </div>
        <div className="bg-hero-pattern bg-cover bg-center">
          <Ressources />
        </div>
        <div className="bg-hero-pattern bg-cover bg-center">
          <Faq />
        </div>
        <div className="bg-hero-pattern bg-cover bg-center">
          <Feedbacks />
        </div>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />

        {/* Bouton pour afficher ou cacher le chatbot */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-10 right-10 bg-yellow-400 text-white p-4 rounded-full shadow-lg"
        >
          💬
        </button>
      </div>
    </BrowserRouter>
  );
};

export default App;

import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Ressources, Faq } from "./components";

const App = () => {
  const getUserLanguage = () => navigator.language || navigator.userLanguage;
  const userLanguage = getUserLanguage();
  console.log("Langue préférée de l'utilisateur :", userLanguage);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const iframe = document.createElement("iframe");

    const iframeStyles = document.createElement("style");
    iframeStyles.textContent = `
      .chat-frame {
       position: fixed;
            bottom: 50px;
            right: 50px;
            border: none;
      }
    `;
    document.head.appendChild(iframeStyles);

    iframe.src = "http://localhost:3000/chatbot";
    iframe.classList.add("chat-frame");
    document.body.appendChild(iframe);

    window.addEventListener("message", (e) => {
      if (e.origin !== "http://localhost:3000") return;
      try {
        let dimensions = JSON.parse(e.data);
        iframe.width = dimensions.width;
        iframe.height = dimensions.height;
        iframe.contentWindow?.postMessage(
          "f422b011-ba11-4958-af20-01b7f29d08a0",
          "http://localhost:3000/"
        );
      } catch (error) {
        console.error("Erreur lors de la réception du message:", error);
      }
    });

    return () => {
      document.body.removeChild(iframe);
      document.head.removeChild(iframeStyles);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div>
          <About />
        </div>
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
      </div>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Footer ,Ressources, Faq } from "./components";

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  
  const getUserLanguage = () => {
    return navigator.language || navigator.userLanguage;
  };

  const userLanguage = getUserLanguage();
  console.log('Langue préférée de l\'utilisateur :', userLanguage);

  
   
 
  return (
    
    
    
    
    <BrowserRouter>
    
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <div >
          <About/>
        </div>

        <div className='bg-hero-pattern bg-cover bg-center'>
          <Experience />
        </div>
        
        <Tech />
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Works />
        </div>
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Ressources/>
        </div>
        <div className='bg-hero-pattern bg-cover bg-center'>
          <Faq/>
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
}

export default App;

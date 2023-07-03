import { motion } from "framer-motion";
import { styles } from "../style";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  <script>
            Splitting();
    </script>
  
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-[160px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#b2e1c6]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} title `}>
          <span data-splitting="chars" className='text-[#b2e1c6] anim'>{t('home.p_company')}</span>
          </h1>
          
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          {t('home.presentation_acc_1')} <br className='sm:block hidden' />
          {t('home.presentation_acc_2')} <br className='sm:block hidden' />{t('home.presentation_acc_3')}
          </p><br></br>
          <a href="#contact " className={`${styles.ctaSubText} text-white-100 label-CTA`}>{t('home.cta')} <span></span></a>
        </div>
      </div>

      

      <div className='absolute xs:bottom-10 bottom-12 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        
      </div>
      
    </section>
    
  );
};

export default Hero;
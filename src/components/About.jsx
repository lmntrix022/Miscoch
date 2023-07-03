import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ index, title, icon }) => {
  const uniqueKey = `${index}-${title}`;

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <div
        key={uniqueKey}
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className='w-full p-[1px] rounded-[20px]'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-hero-pattern bg-cover rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const { t } = useTranslation();
  const services = t('services', { returnObjects: true });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.title')}</p>
        <h2 className='title text-[#b2e1c6] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          {t('about.textHead')}
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 0.5)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {t('about.descprition')}
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        <AnimatePresence> {/* Ajoutez AnimatePresence ici */}
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </AnimatePresence> {/* Ajoutez AnimatePresence ici */}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');

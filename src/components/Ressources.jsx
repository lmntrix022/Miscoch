import { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { styles } from "../style";
import { click } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const RessourceCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {

 


  return (
    <div >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-hero-pattern bg-cover p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

            <div className='inset-0 flex m-3 card-img_hover'>
              <div
                
                className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img
                  src={click}
                  alt='mouse click'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-[#b2e1c6] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const BlogCards = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <div>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-hero-pattern bg-cover p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className=' inset-0 flex m-3 card-img_hover'>
            <a href="#contact"
              className='black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={click}
                alt='mouse click'
                className='w-1/2 h-1/2 object-contain'
              />
            </a>
          </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-[#b2e1c6] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};


const Ressources = () => {
  const [isBlogSelected, setIsBlogSelected] = useState(false);
  const { t } = useTranslation();
  const ressources = t('ressourceT', { returnObjects: true });
  const ressourcesB = t('ressourceB', { returnObjects: true });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('ressource.head')}</p>
        <h2 className={`${styles.sectionHeadText} `}>{t('ressource.headBig')}</h2>
      </motion.div>

      <div className='max-w-3xl flex'>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-3 text-white'>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isBlogSelected}
              onChange={() => setIsBlogSelected(!isBlogSelected)}
            />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {isBlogSelected ? t('ressource.headToogle2') : t('ressource.headToogle')}
            </span>
          </label>
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {isBlogSelected ? (
          ressources.map((blog, index) => (
            <RessourceCard key={`tutoriel-${index}`} index={index} {...blog} />
          ))
        ) : (
          ressourcesB.map((blog, index) => (
            <RessourceCard key={`blog-${index}`} index={index} {...blog} />
          ))
        )}
      </div>
    </>
  );
};


export default SectionWrapper(Ressources, "ressources");
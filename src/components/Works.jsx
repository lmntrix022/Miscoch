import { Tilt } from "react-tilt";
import { motion } from "framer-motion"; 
import { useTranslation } from 'react-i18next';
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  desc,
  tags,
  image,
}) => {
  return (
    <div >
      <Tilt
        options={{
          max: 45,
          rotate: 1,
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

          
        </div>

        <div className='mt-5'>
          <h3 className='text-[#b2e1c6] font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{desc}</p>
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

const Works = () => {
  const { t } = useTranslation();
  const projects = t('projectL', { returnObjects: true });
  return (
    <>
      <div >
        <p className={`${styles.sectionSubText} `}>{t('project.head')}</p>
        <h2 className={`${styles.sectionHeadText} `}>{t('project.headBig')}</h2>
      </div>

      <div className='max-w-3xl flex'>
        <p 
        >
          {t('project.headDesc')}
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "folio");
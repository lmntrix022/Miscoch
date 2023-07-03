import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useTranslation } from 'react-i18next';
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ date, iconBg, icon, company_name, title, points}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#050816",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #050816" }}
      date={
        <p
          className='text-white text-[18px] Faq-font'
        >
          {date}
        </p>
      }
      iconStyle={{ background: iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full '>
          <img
            src={icon}
            alt={company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div >
        <h3 className='text-white text-[24px] font-bold '>{title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const experiences = t('experM', { returnObjects: true });
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} text-center mt-8`}>
        {t('exper.head')}
        </p>
        <h2 className={` ${styles.sectionHeadText} text-center `}>
        {t('exper.headBig')}
        </h2>
      </div>

      <div className='mt-20 flex flex-col '>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
            key={`experience-${index}`}
            {...experience}
          />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
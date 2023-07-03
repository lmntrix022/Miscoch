import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();
  const faqs = t('faqs', { returnObjects: true });

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('faq.head')}</p>
        <h2 className="text-[#b2e1c6] font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] ">{t('faq.headBig')}</h2>

        <div className="accordion text-white mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""} border-b`}
            >
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.3)}>
                <div
                  className=" bg-transparent p-3 font-medium cursor-pointer "
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <div className='label-FQA'><span></span></div>
                </div>
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.div
                      className="bg-gray-950 p-3 font-thin"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        closed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Faq, "faq");

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../style";
import { logo, menu, close, translate, france, england } from "../assets";
import { useTranslation } from "react-i18next";
import i18n from "i18next"; // Ajout de l'importation d'i18n

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#050816]" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {t("navbar", { returnObjects: true }).map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#b2e1c6]" : "text-white"
              } hover:text-[#b2e1c6] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <div className="dropdown ">
            <button className="dropbtn hover:text-white text-[18px] font-medium">
              <img src={translate} alt="translate" className="w-8 h-8 object-contain" />
            </button>
            <div className="dropdown-content ">
              <button onClick={() => handleChangeLanguage("fr")}>
                <img src={france} alt="france" className="w-5 h-8 object-contain" />
              </button>
              <button onClick={() => handleChangeLanguage("en")}>
                <img src={england} alt="england" className="w-5 h-8 object-contain" />
              </button>
            </div>
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="dropdown pr-8">
            <button className="dropbtn hover:text-white text-[18px] font-medium">
              <img src={translate} alt="translate" className="w-8 h-8 object-contain" />
            </button>
            <div className="dropdown-content ">
              <button onClick={() => handleChangeLanguage("fr")}>
                <img src={france} alt="france" className="w-5 h-8 object-contain" />
              </button>
              <button onClick={() => handleChangeLanguage("en")}>
                <img src={england} alt="england" className="w-5 h-8 object-contain" />
              </button>
            </div>
          </div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-hero-pattern absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {t("navbar", { returnObjects: true }).map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-[#92C897]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

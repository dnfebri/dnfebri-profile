import { t } from "i18next";
import { MENUS } from "../../../constant/header";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link } from "react-scroll";
import TranslationSelect from "./TranslationSelect";
const MobileMenu = props => {
  const closeMenu = () => {
    props.setRotate(!props.rotate);
    props.setShowElement(!props.ShowElement);
  };
  return (
    <>
      <motion.div
        initial={{ x: "100%" }}
        animate={props.rotate ? { x: "0" } : { x: "100%" }}
        transition={{ x: { duration: 0.4 } }}
        className="w-full fixed h-screen flex md:hidden duration-300 z-20"
      >
        <div
          onClick={() => closeMenu()}
          className="w-1/4 h-full backdrop-blur-sm bg-MobileNavColor/30 hover:cursor-pointer"
        ></div>
        <div
          className="w-3/4 h-full bg-MobileNavBarColor flex flex-col 
        justify-center items-center space-y-8 font-sans"
        >
          {MENUS.map((menu, idx) => (
            <Link
              key={idx}
              to="aboutSection"
              spy={true}
              smooth={true}
              offset={-50}
              duration={200}
              onClick={() => closeMenu()}
              className="flex flex-col text-center space-y-2"
            >
              {/* <span className="text-AAsecondary text-xs font-mono">{"0"+(idx+1)+". "}</span> */}
              <span
                className="text-white font-Text2 text-sm sm:text-base
              hover:text-AAsecondary hover:cursor-pointer duration-300"
              >
                {t(menu.label)}
              </span>
            </Link>
          ))}
          <TranslationSelect
            rotate={props.rotate}
            setRotate={props.setRotate}
            setShowElement={props.setShowElement}
            ShowElement={props.ShowElement}
          />
          <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
            <button
              className="rounded border font-Text2  border-AAsecondary
           hover:bg-ResumeButtonHover py-2 sm:py-4 px-5 sm:px-10 text-xs text-AAsecondary"
            >
              Resume
            </button>
          </a>
        </div>
      </motion.div>
    </>
  );
};
export default MobileMenu;

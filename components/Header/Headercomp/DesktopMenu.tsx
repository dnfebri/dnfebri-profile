import React from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion";
import { Link as ReactScrollLink } from "react-scroll";
import { MENUS } from "../../../constant/header";
import { t } from "i18next";

export default function DesktopMenu(props: { finishedLoading: boolean }) {
  return (
    <div className="font-mono text-xs md:flex hidden flex-row items-center space-x-8 ">
      {MENUS.map((menu, idx) => (
        <motion.div
          key={idx}
          initial={{
            y: -40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            type: "spring",
            duration: props.finishedLoading ? 0 : 1.2,
            delay: props.finishedLoading ? 0 : menu.delay,
          }}
          className=" text-AAsecondary"
        >
          <ReactScrollLink to={menu.sectionTo} spy={true} smooth={true} offset={-100} duration={200}>
            &gt; {/* {"0"+(idx+1)+" "} */}
            <span className="text-white hover:cursor-pointer hover:text-AAsecondary duration-300">
              {/* {menu.label} */}
              {t(menu.label)}
            </span>
          </ReactScrollLink>
        </motion.div>
      ))}
      <a href={"/resume.pdf"} target={"_blank"} rel="noreferrer">
      <motion.button
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          duration: props.finishedLoading ? 0 : 1.2,
          delay: props.finishedLoading ? 0 : 10.2,
        }}
        // onClick={()=>{router.push("/resume.pdf")}}
        className="text-AAsecondary border border-spacing-2 py-2 px-3 rounded-sm border-AAsecondary hover:bg-ResumeButtonHover"
      >
        {t("common.menu.resume")}
      </motion.button>
      </a>
      
    </div>
  );
}

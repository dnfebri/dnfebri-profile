import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";
import { t } from "i18next";
import { WORK_PROJECT } from "../../../constant/main";
import { Trans } from "react-i18next";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col space-y-12 bg-AAprimary w-full  
      2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" " + t("section.work.title")}
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28">
        {/* // ?  Project 1 */}
        {WORK_PROJECT.map((row, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="relative md:grid md:grid-cols-12 w-full md:h-96  "
          >
            {/* Left image */}
            <div
              className="hidden bg-AAprimary z-10  py-4 
              absolute md:grid grid-cols-12 w-full h-full content-center "
            >
              <div
                className={`relative rounded w-full h-full col-span-7 ${
                  idx % 2 === 0 && "col-start-6"
                }`}
              >
                <a href={row.linkApp} target="_blank" rel="noreferrer">
                  <div
                    className="absolute w-full h-full rounded bg-AAprimary 
                    transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                  ></div>
                </a>
                <Img
                  src={row.image}
                  alt={"Project Screen shot"}
                  className={`w-full rounded h-full `}
                />
              </div>
            </div>

            {/* right Content */}
            <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
              {/* background for text in mobile responsive */}
              <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
                <div className="relative w-full h-full">
                  <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                  <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                  <Img
                    src={row.image}
                    alt={"Project Screen shot"}
                    className={`w-full h-full object-cover object-center`}
                  />
                </div>
              </div>

              <div
                className={`px-8 pt-8 sm:pt-12 md:py-0 space-y-3 flex flex-col
                items-start md:order-1 xl:col-span-6 col-span-8
                ${idx % 2 !== 0 && "xl:col-start-7 col-start-5 md:items-end"}
                `}
              >
                <div
                  className={`flex flex-col space-y-1 z-10 ${
                    idx % 2 !== 0 && "md:items-end"
                  }`}
                >
                  <span className="text-AAsecondary text-base">
                    Recent Project
                  </span>
                  <Link href={"/userdatapuller"}>
                    <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                      {t(`${row.name}`)}
                    </span>
                  </Link>
                </div>
                <div className="w-full rounded-md py-6 md:p-6 z-10 md:bg-AAtertiary">
                  <p className="text-gray-300 md:text-gray-400 text-left ">
                    <Trans
                      i18nKey={row.description}
                      components={{
                        span: <span className="text-AAsecondary" />,
                      }}
                    />
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap w-full text-gray-300 md:text-gray-400
                  text-sm font-Text2 ${idx % 2 !== 0 && "md:justify-end"}`}
                >
                  {row.technology.map((tec, i) => (
                    <span key={i} className="pr-4 z-10">
                      {tec}
                    </span>
                  ))}
                </ul>
                <div className="z-10 flex fle-row space-x-5 ">
                  <GithubIcon link={row.linkCode} />
                  <a href={row.linkApp} target={"_blank"} rel="noreferrer">
                    <ExternalLink url={""} router={router} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

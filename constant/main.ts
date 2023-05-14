import { IWorkProject } from "../Types/type";

export const TEKNOLOGIES = [
  "PHP",
  "JavaScript (ES6+)",
  "TypeScript",
  "ReactJs",
  "React Native",
  "Node.js",
  "Express",
  "Laravel",
  "Next.js",
  "MySQL",
  "Postgresql",
  "Sqlite",
  "Mongodb",
  "Tailwind CSS",
  "Bootstrap",
  "Chakra",
  "Solidity",
  "Ether.js",
  "Hardhat",
];

export const WORK_PROJECT: IWorkProject[] = [
  {
    linkApp: "https://web-fitnessworks.vercel.app/",
    image: "/img/project/web-fw.png",
    name: "section.work.example.name",
    description: "section.work.example.description",
    technology: ["Next Js", "React Js"],
    linkCode: "https://github.com/dnfebri/next-web-fw",
  },
  {
    linkApp: "https://ikan.dnfebri.com/",
    image: "/img/project/perikanan.png",
    name: "section.work.perikanan.name",
    description: "section.work.perikanan.description",
    technology: ["Laravel", "Tailwindcss"],
    linkCode: "https://github.com/dnfebri/perikanan",
  },
  {
    linkApp: "https://ikan.dnfebri.com/",
    image: "/img/project/Simple-sosmed.png",
    name: "section.work.ypredict.name",
    description: "section.work.ypredict.description",
    technology: ["React Js", "Tailwindcss"],
    linkCode: "https://github.com/dnfebri/mv_frontend",
  },
  {
    linkApp: "https://urbanathletes.co.id/",
    image: "/img/project/urbanathletes.png",
    name: "section.work.example.name",
    description: "section.work.example.description",
    technology: ["Laravel", "Tailwindcss"],
    linkCode: "https://github.com/dnfebri/kemitraan-urbanathletes",
  },
];

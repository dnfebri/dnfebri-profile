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
    name: "section.work.fitnessworks.name",
    description: "section.work.fitnessworks.description",
    technology: ["Next Js", "React Js", "Tailwindcss"],
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
    linkApp: "https://dnfebri-post.netlify.app/",
    image: "/img/project/Simple-sosmed.png",
    name: "section.work.simpleSosmed.name",
    description: "section.work.simpleSosmed.description",
    technology: ["React Js", "Tailwindcss"],
    linkCode: "https://github.com/dnfebri/mv_frontend",
  },
  {
    linkApp: "https://urbanathletes.co.id/",
    image: "/img/project/urbanathletes.png",
    name: "section.work.urban.name",
    description: "section.work.urban.description",
    technology: ["Laravel", "Tailwindcss"],
    linkCode: "https://github.com/dnfebri/kemitraan-urbanathletes",
  },
  {
    linkApp:
      "https://drive.google.com/file/d/1gZymXQQSAF0ltKw6zsnnkNFCwrBJxag-/view?usp=share_link",
    image: "/img/project/firstMobileApp.png",
    name: "section.work.firstMobileApp.name",
    description: "section.work.firstMobileApp.description",
    technology: ["React Native"],
    linkCode: "https://github.com/dnfebri/test-dss-react_native",
  },
];

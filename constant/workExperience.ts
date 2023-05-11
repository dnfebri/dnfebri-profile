const bgActiveBtn = [false, false, false, false, false];
const newArry = (idx: number) => {
  const arry = [...bgActiveBtn];
  arry[idx] = true;
  return arry;
};
export const COMPANYBUTTON = [
  {
    buttonOrder: 0,
    companyName: "UebanAthletes",
    barPosition: -8,
    barAvobePosition: 1,
    descriptionJob: "UrbanAthletes",
    backgroundActive: newArry(0),
  },
  {
    buttonOrder: 1,
    companyName: "Example",
    barPosition: 80,
    barAvobePosition: 257,
    descriptionJob: "Programmer2",
    backgroundActive: newArry(1),
  },
];

export const TROUVE_TAVOIE_EXAMPLE_TASKS = [
  {
    text: "Spearhead & implemented a new design user workflow system for the Frond-End Architecture of a NFT Marketplace.",
    keywords: ["NFT Marketplace"],
  },
  {
    text: "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Next.js/React, AWS and Vercel.",
    keywords: ["Next.js/React", "AWS", "Vercel"],
  },
  {
    text: "Interfaced with developers on a daily basis, providing technological expertise.",
    keywords: [],
  },
];

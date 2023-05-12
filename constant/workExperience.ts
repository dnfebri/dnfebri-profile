export const bgActiveBtn = [false, false, false, false];
const newArry = (idx: number) => {
  const arry = [...bgActiveBtn];
  arry[idx] = true;
  return arry;
};
export const COMPANY_BUTTON = [
  {
    buttonOrder: 0,
    companyName: "Freelan",
    barPosition: 0,
    barAvobePosition: 1,
    descriptionJob: "Freelan",
    backgroundActive: newArry(0),
  },
  {
    buttonOrder: 1,
    companyName: "AMD",
    barPosition: 48,
    barAvobePosition: 129,
    descriptionJob: "AMD",
    backgroundActive: newArry(1),
  },
  {
    buttonOrder: 2,
    companyName: "UrbanAthletes",
    barPosition: 97,
    barAvobePosition: 257,
    descriptionJob: "UrbanAthletes",
    backgroundActive: newArry(2),
  },
  // {
  //   buttonOrder: 3,
  //   companyName: "Example",
  //   barPosition: 143,
  //   barAvobePosition: 385,
  //   descriptionJob: "Programmer2",
  //   backgroundActive: newArry(3),
  // },
  // {
  //   buttonOrder: 4,
  //   companyName: "Example",
  //   barPosition: 166,
  //   barAvobePosition: 513,
  //   descriptionJob: "Programmer2",
  //   backgroundActive: newArry(4),
  // },
  // {
  //   buttonOrder: 5,
  //   companyName: "Example",
  //   barPosition: 210,
  //   barAvobePosition: 641,
  //   descriptionJob: "Programmer2",
  //   backgroundActive: newArry(5),
  // },
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

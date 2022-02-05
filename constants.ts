import { TargetAndTransition, VariantLabels } from "framer-motion";

export type LinkInformation = { name: string; url: string };

export const experiences: LinkInformation[] = [
  {
    name: "Canoo",
    url: "https://canoo.com",
  },
  {
    name: "Delightree",
    url: "https://delightree.com",
  },
  {
    name: "Jynx",
    url: "https://jynxit.us",
  },
  {
    name: "CollegeBasket",
    url: "https://collegebasket.now.sh",
  },
];

export const contacts: LinkInformation[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/itsanshuman",
  },
  {
    name: "Github",
    url: "https://github.com/Anshuman71",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sun_anshuman",
  },
  {
    name: "DEV",
    url: "https://dev.to/anshuman_bhardwaj",
  },
  {
    name: "Blog",
    url: "https://blog.theanshuman.dev",
  },
  {
    name: "Medium",
    url: "https://anshuman-bhardwaj.medium.com",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/c/AnshumanBhardwaj",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/sun_anshuman",
  },
  {
    name: "Resume",
    url: "https://www.notion.so/Resume-92cc4b433e454b4ab749f3e3f40c6239",
  },
];

export const technologies: LinkInformation[] = [
  {
    name: "react",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "TS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "NodeJS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    name: "firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
  },
  {
    name: "firebase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
  },
];

export const containerVariants = {
  initial: { background: "#111827" },
  animate: {
    background: "#111827",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
    },
  },
};

export const mainVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

export const techParentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

export const techVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

export const hover: { [key: string]: VariantLabels | TargetAndTransition } = {
  react: {
    rotate: 360,
    transition: {
      ease: "linear",
      duration: 4,
      repeat: Infinity,
    },
  },
  others: {
    scale: 1.05,
  },
};

export const DEV_API = {
  key: process.env.DEV_API_KEY as string,
  baseUrl: "https://dev.to/api",
  username: process.env.DEV_USERNAME as string,
};

export async function getDevArticles() {
  const res = await fetch(`${DEV_API.baseUrl}/articles/me/published`, {
    headers: {
      "api-key": DEV_API.key,
    },
  });
  return res.json();
}

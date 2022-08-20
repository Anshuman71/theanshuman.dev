import { TargetAndTransition, VariantLabels } from "framer-motion";
import { LinkInformationType } from "./types";

export const experiences: LinkInformationType[] = [
  {
    name: "commercetools",
    url: "https://commercetools.com",
  },
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

export const publishers: LinkInformationType[] = [
  {
    name: "Auth0",
    url: "https://auth0.com/ambassador-program/ambassadors",
  },
  {
    name: "LogRocket",
    url: "https://logrocket.com",
  },
  {
    name: "Draft.dev",
    url: "https://portal.draft.dev/writers/recHFWSYFJ2b2wPCs",
  },
  {
    name: "JavaScript in PlainEnglish",
    url: "https://javascript.plainenglish.io/",
  },
];

export const contacts: LinkInformationType[] = [
  {
    name: "Home",
    url: "/",
    sameTab: true,
  },
  {
    name: "Blog",
    url: "/blog",
    sameTab: true,
  },
  {
    name: "Email",
    url: "mailto:hi@theanshuman.dev",
    sameTab: true,
  },
  {
    name: "Newsletter",
    url: "https://www.getrevue.co/profile/anshuman_bhardwaj",
  },
  {
    name: "DEV",
    url: "https://dev.to/anshuman_bhardwaj",
  },
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
    name: "Hashnode",
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

export const technologies: LinkInformationType[] = [
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

export const NUM_TO_WORD: { [k: number]: string } = {
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

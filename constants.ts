import { TargetAndTransition, VariantLabels } from "framer-motion";
import { ArticleInList, LinkInformationType } from "./types";

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
];

export const projects: LinkInformationType[] = [
  {
    name: "docsly - feedback for docs",
    description: "A user feedback tool crafted for your documentation.",
    url: "https://docsly.dev",
    imageKey: "docsly",
  },

  {
    name: "Glossary - acronyms for Slack",
    description:
      "Add acronyms in Slack and relieve your brain from the burden of remembering everything.",
    url: "https://useglossary.com",
    imageKey: "useglossary",
  },
  {
    name: "huddle - realtime collaboration",
    description:
      "Realtime collaboration on preview deployments with any cloud platform.",
    url: "https://huddle.run",
    imageKey: "huddle",
  },
  {
    name: "Habit Journal - get better everyday",
    description:
      "Journal your habits. Track, visualize, and share with your progress online.",
    url: "https://habitjournal.fun",
    imageKey: "habitjournal",
  },
];

export const publishers: LinkInformationType[] = [
  {
    name: "Auth0 Ambassador",
    url: "https://auth0.com/ambassador-program/ambassadors",
  },
  {
    name: "LogRocket",
    url: "https://blog.logrocket.com/author/anshumanbhardwaj/",
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

export function randomNumberBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomReadingTime() {
  return randomNumberBetween(5, 7);
}

function randomPageViews() {
  return randomNumberBetween(10000, 20000);
}

function randomLikes() {
  return randomNumberBetween(300, 600);
}

export const externalArticles: ArticleInList[] = [
  {
    canonical_url: "https://upstash.com/blog/timezone-scheduling-emails",
    slug: "timezone-scheduling-emails",
    title: "Scheduling emails in the user's timezone using QStash",
    description:
      "Learn the process of scheduling emails in a user's timezone using QStash and Upstash Redis in a Next.js application.",
    cover_image: "",
    tag_list: ["Upstash", "docsly", "QStash", "Next.js"],
    reading_time_minutes: 8,
    published_at: "Thu Aug 10 2023",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url: "https://clerk.com/blog/adding-jwt-authentication-to-react",
    slug: "adding-jwt-authentication-to-react",
    title: "Adding JWT Authentication to React",
    description:
      "Learn how to implement JSON Web Token (JWT) authentication in a React app using a standard flow, and how Clerk can make the process even easier.",
    cover_image:
      "https://clerk.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe1ql88v4%2Fproduction%2Fda729e04fbc27fdd77a16e35b8109c4545b55801-2400x1260.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75",
    tag_list: ["Clerk", "JWT", "React"],
    reading_time_minutes: 11,
    published_at: "Fri Apr 14 2023",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url: "https://clerk.com/blog/implementing-recaptcha-in-react",
    slug: "implementing-recaptcha-in-react",
    title: "Implementing reCAPTCHA in React",
    description:
      "Learn how to protect your React app from spam and abuse using reCAPTCHA. Follow this tutorial to create a sign-up form with reCAPTCHA validation.",
    cover_image:
      "https://clerk.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe1ql88v4%2Fproduction%2F9233784b390539b0d29eb6d9e3d11173aa481d59-2400x1260.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75",
    tag_list: ["Clerk", "ReCaptcha", "React"],
    reading_time_minutes: 7,
    published_at: "Fri Apr 14 2023",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url:
      "https://retool.com/blog/building-an-sql-server-admin-panel-in-retool/",
    slug: "building-an-sql-server-admin-panel-in-retool",
    title: "Building an SQL Server Admin Panel in Retool",
    description:
      "Create a web notification system like Facebook's using JavaScript. This step-by-step tutorial covers all the necessary steps.",
    cover_image:
      "https://retool-blog.ghost.io/blog/content/images/2023/03/MSSQL.jpg",
    tag_list: ["Retool", "SQL Server", "Dashboard"],
    reading_time_minutes: 11,
    published_at: "Wed Mar 1 2023",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url:
      "https://www.courier.com/guides/facebook-like-notification-system",
    slug: "facebook-like-notification-system",
    title: "How To Implement a Facebook-Like Web Notification System",
    description:
      "Create a web notification system like Facebook's using JavaScript. This step-by-step tutorial covers all the necessary steps.",
    cover_image: "",
    tag_list: ["React", "Courier", "Notification"],
    reading_time_minutes: 7,
    published_at: "Thu Feb 16 2023",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url: "https://clerk.dev/blog/conditional-rendering-react",
    slug: "conditional-rendering-react",
    title: "Guide to Conditional Rendering in React",
    description:
      "Learn how conditional rendering is used to show a personalized UI, complete a user flow without changing routes, or show a loading or error state.",
    cover_image:
      "https://clerk.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe1ql88v4%2Fproduction%2F92684dd335bfba1c2d2b73a657e146eb7c4a93ed-1200x630.png%3Ffit%3Dmax%26auto%3Dformat&w=1200&q=75",
    tag_list: ["React", "Clerk"],
    reading_time_minutes: 7,
    published_at: "Thu Jan 26 2023",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url: "https://hygraph.com/blog/build-elearning-platform",
    slug: "build-elearning-platform",
    title: "How to Build an E-Learning Platform with Hygraph",
    description:
      "In this tutorial, we will build an e-learning platform using Next.js and Hygraph.",
    cover_image:
      "https://hygraph.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dfit%3Aclip%2Cwidth%3A760%2FK6b4pUlbTssHEjKqQFXI&w=1920&q=100",
    tag_list: [
      "Hygraph",
      "e learning",
      "Headless CMS",
      "GraphQL",
      "GraphCMS",
      "CMS",
      "API CMS",
    ],
    reading_time_minutes: 9,
    published_at: "Wed Nov 9 2022",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url:
      "https://clerk.dev/blog/build-a-user-switcher-just-like-gmail",
    slug: "build-a-user-switcher-just-like-gmail",
    title: "Quickly Build a User Switcher, Just Like Gmail",
    description:
      "Build an app with complete authentication and a user switcher just like gmail has.",
    cover_image:
      "https://clerk.dev/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe1ql88v4%2Fproduction%2F86a619eaf65169c6de36c881a52eed5dcd0c1410-2400x1260.png%3Ffit%3Dmax%26auto%3Dformat&w=3840&q=75",
    tag_list: ["Clerk.dev", "Gmail", "authentication", "Auth", "user switcher"],
    reading_time_minutes: 8,
    published_at: "Fri Jun 3 2022",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url: "https://hygraph.com/blog/graphql-backend-for-frontend",
    slug: "graphql-backend-for-frontend",
    title: "How to use GraphQL to build backend-for-frontends (BFFs)",
    description:
      "In this article, you'll learn about backend-for-frontend architecture by building a backend-for-frontend to serve blog posts from Hygraph.",
    cover_image:
      "https://hygraph.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2Fresize%3Dfit%3Aclip%2Cwidth%3A1500%2F0bOvwNCKRValsRXm1sq9&w=1920&q=75",
    tag_list: [
      "Hygraph",
      "BFF",
      "Headless CMS",
      "GraphQL",
      "GraphCMS",
      "CMS",
      "Backed for frontend",
    ],
    reading_time_minutes: 9,
    published_at: "Wed Dec 7 2022",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  {
    canonical_url:
      "https://handsontable.com/blog/articles/2022/12/decrease-your-handsontable-javascript-bundle-size-using-modules",
    slug: "decrease-your-handsontable-javascript-bundle-size-using-modules",
    title: "Decrease your Handsontable bundle size using modules",
    description:
      "Handsontable is a JavaScript Data Grid Component with Spreadsheet Look & Feel. Available for React, Vue and Angular.",
    cover_image:
      "https://handsontable.com/blog/wp-content/uploads/2022/12/image.png",
    tag_list: ["Handsontable", "Bundle size", "Code splitting", "Tree shaking"],
    reading_time_minutes: 7,
    published_at: "Thu Dec 8 2022",
    page_views_count: randomPageViews(),
    positive_reactions_count: randomLikes(),
  },
  {
    canonical_url:
      "https://blog.logrocket.com/using-convex-for-state-management/",
    slug: "using-convex-for-state-management",
    title: "A guide to using Convex for state management",
    description:
      "Managing an application's state has become easier, but the global state concept is still a pain for developers, which Convex aims to solve.",
    cover_image:
      "https://blog.logrocket.com/wp-content/uploads/2022/09/guide-using-convex-state-management-nocdn.png",
    tag_list: ["convex", "state management", "nextjs", "global state"],
    reading_time_minutes: 9,
    published_at: "Wed Sep 21 2022",
    page_views_count: randomPageViews() * 1.5,
    positive_reactions_count: randomLikes() * 1.5,
  },
  // {
  //   canonical_url:
  //     "https://blog.tigrisdata.com/http2-websockets-future-of-real-time",
  //   slug: "http2-websockets-future-of-real-time",
  //   title:
  //     "HTTP/2, WebSockets, and the Future of Real-Time Client-Server Interactions",
  //   description:
  //     "Real-time client-server interactions will only become more vital as  applications and use cases continue to evolve. Though both the WebSocket and  HTTP/2 protocols can work well for real-time communication, HTTP/2 is the  better option in certain situations.",
  //   cover_image: "https://imgur.com/qsOEaIn.png",
  //   tag_list: ["tigris", "tigris data", "real-time", "http/2", "websockets"],
  //   reading_time_minutes: 11,
  //   published_at: "Wed Sep 26 2022",
  //   page_views_count: randomPageViews(),
  //   positive_reactions_count: randomLikes(),
  // },
  {
    canonical_url: "https://www.tiny.cloud/blog/bootstrap-image-upload/",
    slug: "tiny-mce-bootstrap-image-upload",
    title: "How to get started with image uploads using Bootstrap",
    description:
      "Step-by-step guide on integrating Bootstrap web pages and TinyMCE and configuring image uploads.",
    cover_image:
      "https://images.ctfassets.net/s600jj41gsex/44ml22kIsu4O3h6OtVEAEh/7b2eb5968ee72b0226372e6bcd42c456/img-tinymce-bootstrap-image-upload-v2.jpg?w=1528&h=860&q=50&fm=webp&fit=scale",
    tag_list: ["bootstrap", "images", "wysiwyg", "tinymce"],
    reading_time_minutes: 5,
    published_at: "Wed Aug 17 2022",
    page_views_count: randomPageViews(),
    positive_reactions_count: randomLikes(),
  },
  {
    canonical_url:
      "https://merge.dev/blog/how-to-build-a-zenefits-api-integration-developer-guide",
    slug: "how-to-build-a-zenefits-api-integration-developer-guide",
    title: "How to Build a Zenefits API Integration: Developer Guide",
    description:
      "Zenefits is a popular HRIS with features that range from onboarding and exiting, payroll, benefits, and time tracking. As you’re building out your own app’s integration support, providing users an easy way to sync their Zenefits data with your own app can drive more sales. This guide will teach you how!",
    cover_image:
      "https://uploads-ssl.webflow.com/62796ab9647626cbab663f42/62f5dcd8b443335c48504fa8_Zenefits_API_Integration_Logo.jpeg",
    tag_list: ["merge_api", "developer", "hris", "payroll"],
    reading_time_minutes: 5,
    published_at: "Wed Aug 10 2022",
    page_views_count: randomPageViews(),
    positive_reactions_count: randomLikes(),
  },
];

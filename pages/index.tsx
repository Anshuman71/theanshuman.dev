import type { NextPage } from "next";
import {
  experiences,
  externalArticles,
  mainVariants,
  NUM_TO_WORD,
  projects,
  publishers,
} from "../constants";
import ExternalLink from "../components/ExternalLink";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import MetaData from "../components/MetaData";
import Footer from "../components/Footer";
import { getArticles } from "../utils";
import { ArticleInList } from "../types";
import Article from "../components/Article";
import Link from "next/link";
import Image from "next/image";
import Me from "../public/me.jpeg";
import habitjournal from "../public/assets/habitjournal.png";
import docsly from "../public/assets/docsly.png";
import huddle from "../public/assets/huddle.png";
import useglossary from "../public/assets/useglossary.png";

const projectImages: { [k: string]: any } = {
  habitjournal: habitjournal,
  docsly: docsly,
  huddle: huddle,
  useglossary: useglossary,
};

interface PageProps {
  counter: number;
  articles: ArticleInList[];
}

export async function getStaticProps() {
  try {
    const data = await getArticles();
    const topArticlesFromDev = data
      .sort(
        (a: ArticleInList, b: ArticleInList) =>
          b.positive_reactions_count - a.positive_reactions_count
      )
      .slice(0, 2);
    return {
      props: {
        articles: [...externalArticles, ...topArticlesFromDev],
      },
    };
  } catch (e) {
    return {
      props: {
        counter: 3670,
      },
    };
  }
}

const Home: NextPage<PageProps> = (props) => {
  const experienceInYears =
    `${NUM_TO_WORD[new Date().getFullYear() - 2020]} years` || "a decade";
  return (
    <>
      <MetaData />
      <motion.main variants={mainVariants} className={"content-container"}>
        <Section>
          <div className="flex flex-row justify-between items-center">
            <h1 className={"text-gray-100 font-medium text-3xl md:text-6xl"}>
              👋 Hi, I&apos;m <br />
              <span className="block my-4">Anshuman Bhardwaj</span>
            </h1>
            <Image
              alt="Anshuman Bhardwaj"
              width={192}
              placeholder="blur"
              className="rounded-full"
              height={192}
              src={Me}
            />
          </div>
          <p className={"text-gray-200 text-lg mt-10 leading-loose"}>
            {" "}
            I&apos;m a creative Software Engineer with more than{" "}
            <b>{experienceInYears}</b> of experience in software development
            ranging from being an <i>Engineering Manager</i> to developing a
            Full Stack application on my own. I help companies create valuable
            software and reach business goals. Some examples of my contribution:
          </p>
          <ul className="pl-10 text-lg mt-2">
            <li className="list-disc mb-4">
              Spearheaded effort on <i>Over-the-Air updates</i> and{" "}
              <i>connected fleet manager</i> at Canoo, developing React and
              Next.js web application.
            </li>
            <li className="list-disc mb-4">
              Delivering the <i>&ldquo;Pre-order&rdquo;</i> landing page section
              and payment integration for Canoo Pickup truck under a tight
              deadline.
            </li>
            <li className="list-disc mb-4">
              Led the mobile app development as a Product Engineer at Delightree
              using React Native.
            </li>
            <li className="list-disc mb-4">
              Designing and developing features for the mobile application using
              ReactNative, React-navigation, and Firebase, along with writing
              performant cloud functions for backend tasks as a Product owner at
              Jynx.
            </li>
          </ul>
        </Section>
        <Section>
          <SectionHeading>What so far?</SectionHeading>
          <p className="text-lg my-4">
            I&apos;ve worked with some great people around the world on projects
            such as <i>next-generation electric vehicles</i> and{" "}
            <i>large scale eCommerce solutions</i>.
          </p>
          <div>
            {experiences.map((exp) => (
              <ExternalLink key={exp.url} {...exp} />
            ))}
          </div>
        </Section>
        {/* <Section>
          <SectionHeading>Solo adventures</SectionHeading>
          <p className="text-lg mt-2">
            Early morning I focus on my indie projects and try new technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 gap-y-12 mt-10">
            {projects.map((exp) => (
              <a href={exp.url} target="_blank" rel="noreferrer" key={exp.name}>
                <Image
                  src={projectImages[exp?.imageKey || "habitjournal"]}
                  width={360}
                  height={190}
                  objectFit="cover"
                  objectPosition={"top"}
                  className="rounded-md"
                  alt={exp.name}
                />
                <p className="text-lg mt-2 mb-1">{exp.name}</p>
                <p className="opacity-80 text-md w-[90%]">{exp.description}</p>
              </a>
            ))}
          </div>
        </Section> */}
        <Section>
          <SectionHeading>Publishers</SectionHeading>
          <p className="text-lg my-4">
            I&apos;m big on developer advocacy and part of the following
            programmes:
          </p>
          <div>
            {publishers.map((exp) => (
              <ExternalLink key={exp.url} {...exp} />
            ))}
          </div>
        </Section>
        <Section className="flex flex-col">
          <SectionHeading>Featured articles</SectionHeading>
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12"
            }
          >
            {props.articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <Link href={"/articles"} passHref>
            <a
              className={
                "mt-8 py-2 underline underline-offset-4 text-yellow-500 tracking-wider inline-block"
              }
            >
              View all articles
            </a>
          </Link>
        </Section>
      </motion.main>
      <Footer />
    </>
  );
};

export default Home;

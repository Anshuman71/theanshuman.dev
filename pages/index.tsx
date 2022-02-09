import type { NextPage } from "next";
import { experiences, mainVariants } from "../constants";
import ExternalLink from "../components/ExternalLink";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import MetaData from "../components/MetaData";
import HighLightedText from "../components/HighlightedText";
import connectToDatabase from "../mongodb";
import Footer from "../components/Footer";
import { getDevArticles } from "../utils";
import { ArticleInList } from "../types";
import Article from "../components/Article";
import Link from "next/link";

interface PageProps {
  counter: number;
  articles: ArticleInList[];
}

export async function getServerSideProps() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("hit-counter");
    const data = await getDevArticles();

    const document = await collection.findOneAndUpdate(
      { id: "hit-counter" },
      { $inc: { value: 1 } },
      { returnDocument: "after" }
    );
    return {
      props: {
        counter: document?.value?.value || 3670,
        articles: data
          .sort(
            (a: ArticleInList, b: ArticleInList) =>
              b.page_views_count - a.page_views_count
          )
          .slice(0, 3),
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
  return (
    <>
      <MetaData />
      <motion.main variants={mainVariants} className={"content-container"}>
        <Section>
          <h1 className={"text-gray-100 text-3xl md:text-5xl overflow-hidden"}>
            Hi, I&apos;m{" "}
            {"Anshuman".split("").map((char, index) => (
              <motion.p
                key={char + index}
                className={"inline-block text-yellow-400"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.35 }}
              >
                {char}
              </motion.p>
            ))}
          </h1>
          <p className={"text-gray-200 text-lg mt-4 leading-loose"}>
            {" "}
            a self-taught developer passionate about empowering people with the
            skills I have learned. I love building beautiful frontend for
            seamless user experience and flawless back end for a scalable &amp;
            reliable business.
          </p>
        </Section>
        <Section>
          <SectionHeading>What I do?</SectionHeading>
          <p className="text-gray-200 text-lg leading-loose">
            I am a <HighLightedText>Full Stack Developer</HighLightedText>. I
            have been working with ReactJS and NodeJS since 2018. On my way I
            have built many apps utilizing their core and many on-the-top
            libraries. I love working with React and ReactNative. I have
            recently found my new love, in
            <b className="font-medium">serverless.</b> I love cloud functions
            and automating workflow using them.
          </p>
        </Section>{" "}
        <Section>
          <SectionHeading>What so far?</SectionHeading>
          <div>
            {experiences.map((exp) => (
              <ExternalLink key={exp.url} {...exp} />
            ))}
          </div>
        </Section>
        <Section className="flex flex-col">
          <SectionHeading>Popular articles</SectionHeading>
          <div>
            {props.articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
          <Link passHref href={"/articles"}>
            <a className="self-center p-2 px-4 text-md bg-slate-800 rounded text-yellow-400 hover:underline">
              View More
            </a>
          </Link>
        </Section>
      </motion.main>
      <Footer counter={props.counter} />
    </>
  );
};

export default Home;

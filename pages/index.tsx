import type { NextPage } from "next";
import Script from "next/script";
import {
  contacts,
  mainVariants,
  techVariants,
  techParentVariants,
  hover,
  experiences,
  technologies,
} from "../constants";
import ExternalLink from "../components/ExternalLink";
import HitCounter from "../components/HitCounter";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import MetaData from "../components/MetaData";
import HighLightedText from "../components/HighlightedText";
import connectToDatabase from "../mongodb";

interface PageProps {
  counter: number;
}

export async function getServerSideProps() {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("hit-counter");

    const document = await collection.findOneAndUpdate(
      { id: "hit-counter" },
      { $inc: { value: 1 } },
      { returnDocument: "after" }
    );
    return {
      props: {
        counter: document?.value?.value || 3670,
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
      <Script
        defer
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BQD4JC0G5Y"
      />
      <Script defer id="google-analytics" strategy="afterInteractive">
        {`window['dataLayer'] = window?.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'G-BQD4JC0G5Y');
        `}
      </Script>
      <motion.main variants={mainVariants} className={"content-container"}>
        <Section>
          <h1 className={"text-gray-100 text-3xl md:text-6xl overflow-hidden"}>
            Hi, I&apos;m{" "}
            {"Anshuman".split("").map((char, index) => (
              <motion.p
                key={char}
                className={"inline-block text-yellow-400"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.35 }}
              >
                {char}
              </motion.p>
            ))}
          </h1>
          <p className={"text-gray-200 text-lg mt-4 leading-loose"}>
            {" "}
            a self-taught developer passionate about empowering people with the
            skills I have learned. I love building an awesomely beautiful
            frontend for seamless user experience and flawless back end for a
            scalable &amp; reliable business.
          </p>
        </Section>
        <Section>
          <SectionHeading>What I do?</SectionHeading>
          <p className="text-gray-200 text-lg leading-loose">
            I am a <HighLightedText>Full Stack Developer</HighLightedText>. I
            have been working with ReactJS and NodeJS since 2017. On my way I
            have built many apps utilizing their core and many on-the-top
            libraries. I love working with React and ReactNative. I have
            recently found my new love, in
            <b className="font-medium">serverless.</b> I love cloud functions
            and automating workflow using them.
          </p>
        </Section>{" "}
        <Section>
          <SectionHeading>Favorite technologies</SectionHeading>
          <motion.div
            animate={"animate"}
            initial={"initial"}
            variants={techParentVariants}
            className={
              "grid gap-y-6 place-items-start grid-cols-2 md:grid-cols-4 lg:flex"
            }
          >
            {technologies.map((tech) => (
              <motion.div
                variants={techVariants}
                whileHover={{
                  scale: 1.025,
                }}
                key={tech.url}
                className={
                  "flex justify-center p-4 bg-slate-700 rounded-xl lg:mr-6"
                }
              >
                <motion.img
                  whileHover={hover[tech.name] || hover.others}
                  alt="react"
                  width={"96px"}
                  height={"96px"}
                  src={tech.url}
                />
              </motion.div>
            ))}
          </motion.div>
        </Section>
        <Section>
          <SectionHeading>What so far?</SectionHeading>
          <div>
            {experiences.map((exp) => (
              <ExternalLink key={exp.url} {...exp} />
            ))}
          </div>
        </Section>
        <Section>
          <SectionHeading>Where to find me?</SectionHeading>
          {contacts.map((contact) => (
            <ExternalLink key={contact.url} {...contact} />
          ))}
        </Section>
        <motion.footer className={"text-gray-300 lg:py-10"}>
          <HitCounter counter={props?.counter} />
          <p className="p-2 text-lg text-center tracking-wide">
            Made with <span className={"text-2xl text-red-600"}>♥</span> and
            tailwindcss by <i>Anshuman Bhardwaj</i>
          </p>
        </motion.footer>
      </motion.main>
    </>
  );
};

export default Home;

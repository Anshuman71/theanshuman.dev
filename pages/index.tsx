import type { NextPage } from "next";
import { contacts, experiences, technologies } from "../constants";
import ExternalLink from "../components/ExternalLink";
import HitCounter from "../components/HitCounter";
import { motion, TargetAndTransition, VariantLabels } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Section from "../components/Section";
import MetaData from "../components/MetaData";

const containerVariants = {
  hidden: { background: "rgba(0,0,0,0.8)" },
  enter: { background: "rgb(0,0,0)" },
};

const mainVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.7,
      duration: 1,
    },
  },
};

const techParentVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 1 },
  },
};

const techVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

const hover: { [key: string]: VariantLabels | TargetAndTransition } = {
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

const Home: NextPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial={"hidden"}
      animate="enter"
      transition={{
        duration: 0.5,
      }}
      className={"bg-black p-10 pt-20 min-h-screen"}
    >
      <MetaData />
      <motion.main
        variants={mainVariants}
        initial={"initial"}
        animate={"animate"}
        className={"w-3/4 mx-auto"}
      >
        <Section>
          <h1 className={"text-gray-100 text-6xl"}>Hi, I&apos;m Anshuman</h1>
          <p className={"text-gray-300 text-lg mt-4 leading-loose"}>
            {" "}
            I love sammy🐶, music (Bollywood & Enrique) and gaming (MOHW and
            DMC). <br /> Like Batman 🦇, I work late at night. I like teaching
            and sharing what I learned mostly the hard way. Other than that I
            build tools for humans 😎.
          </p>
        </Section>
        <Section>
          <SectionHeading>What I do?</SectionHeading>
          <p className="text-gray-300 text-lg leading-loose">
            I am a Full Stack Developer. I have been working with ReactJS and
            NodeJS since 2017. On my way I have built many apps utilizing their
            core and many on-the-top libraries. I love working with React and
            ReactNative. I have recently found my new love, in
            <b className="font-medium">serverless.</b> <br />I love cloud
            functions and automating workflow using them.
          </p>
        </Section>{" "}
        <Section>
          <SectionHeading>Favourite technologies</SectionHeading>
          <motion.div
            animate={"animate"}
            initial={"initial"}
            variants={techParentVariants}
            className={"flex flex-row flex-wrap"}
          >
            {technologies.map((tech) => (
              <motion.div
                variants={techVariants}
                whileHover={{
                  scale: 1.025,
                }}
                key={tech.url}
                className={"p-4 bg-[#303030] rounded-xl mr-12 my-4"}
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
        <motion.footer className={"text-gray-300 py-10"}>
          <HitCounter />
          <p className="p-2 text-lg text-center tracking-wide">
            Made with <span className={"text-2xl text-red-600"}>♥</span> and
            tailwindcss by <i>Anshuman Bhardwaj</i>
          </p>
        </motion.footer>
      </motion.main>
    </motion.div>
  );
};

export default Home;

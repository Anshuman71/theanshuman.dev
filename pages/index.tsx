import type { NextPage } from "next";
import { contacts, experiences } from "../constants";
import ExternalLink from "../components/ExternalLink";
import HitCounter from "../components/HitCounter";
import { motion } from "framer-motion";
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
        <motion.section className="intro w-2/3">
          <h1 className={"text-gray-100 text-5xl"}>Hi, I&apos;m Anshuman</h1>
          <p className={"text-gray-300 text-lg mt-10"}>
            {" "}
            I love sammy🐶, music (Bollywood & Enrique) and gaming (MOHW and
            DMC). <br /> Like Batman 🦇, I work late at night. I like teaching
            and sharing what I learned mostly the hard way. Other than that I
            build tools for humans 😎.
          </p>
        </motion.section>
        <motion.section className="what-i-do w-2/3 text-gray-200 my-10">
          <h2 className="text-3xl mb-1 tracking-wider">What I do?</h2>
          <p className="text-gray-300 text-lg mt-4">
            I am a Full Stack Developer. I have been working with ReactJS and
            NodeJS since 2017. On my way I have built many apps utilizing their
            core and many on-the-top libraries. I love working with React and
            ReactNative. I have recently found my new love, in
            <b className="font-medium">serverless.</b> <br />I love cloud
            functions and automating workflow using them.
          </p>
        </motion.section>
        <motion.section className={"what-so-far text-gray-200 my-10 w-2/3"}>
          <h2 className="text-3xl mb-1 tracking-wider">What so far?</h2>
          <div className={"my-4"}>
            {experiences.map((exp) => (
              <ExternalLink key={exp.url} {...exp} />
            ))}
            <i className="font-light">...many more on github</i>
          </div>
          <br />
          <h2 className="text-3xl mt-10 mb-1">Where to find me?</h2>
          {contacts.map((contact) => (
            <ExternalLink key={contact.url} {...contact} />
          ))}
        </motion.section>
        <motion.footer className={"text-gray-300"}>
          <HitCounter />
          <p className="p-2 text-center tracking-wide">
            Made with ♥ and tailwind.css by Anshuman Bhardwaj
          </p>
        </motion.footer>
      </motion.main>
    </motion.div>
  );
};

export default Home;

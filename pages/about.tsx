import { motion } from "framer-motion";
import { NextPage } from "next/types";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import {
  hover,
  technologies,
  techParentVariants,
  techVariants,
} from "../constants";

const About: NextPage = () => {
  return (
    <>
      <main className="content-container">
        <MetaData title={`Blog | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>About me</h1>
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
                  "flex justify-center p-4 bg-slate-800 rounded-xl lg:mr-6"
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
      </main>
      <Footer />
    </>
  );
};

export default About;

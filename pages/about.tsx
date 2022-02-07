import { motion } from "framer-motion";
import { NextPage } from "next/types";
import Image, { ImageProps } from "next/image";
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
import bikePic from "../public/assets/bike.jpg";
import selfiePic from "../public/assets/selfie.jpg";
import hillPic from "../public/assets/hill.jpg";

function ImageHolder(props: ImageProps) {
  return (
    <div className="h-96 shadow-lg relative rounded overflow-hidden ">
      <Image
        objectFit="cover"
        placeholder="blur"
        objectPosition={"center 40%"}
        layout="fill"
        alt="Me on Bike"
        {...props}
      />
    </div>
  );
}

const About: NextPage = () => {
  return (
    <>
      <main className="content-container">
        <MetaData title={`Blog | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>About me</h1>
        <hr />
        <Section className="mt-10">
          <SectionHeading>Personal life</SectionHeading>
          <p>
            I like to travel and walk alone. Recently I been to the &quot;Queen
            of Hills: Mussoorie&quot;
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <ImageHolder src={bikePic} />
            <ImageHolder src={selfiePic} />
            <ImageHolder src={hillPic} />
          </div>
        </Section>
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
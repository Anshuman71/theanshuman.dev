import { NextPage } from "next/types";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";

const Services: NextPage = () => {
  return (
    <>
      <main className="content-container">
        <MetaData title={`Services | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>Services</h1>
        <hr />
        <Section className="mt-10">
          <SectionHeading>Writing</SectionHeading>
          <p className="text-lg">
            I love to write about software development, new technologies,
            personal finance and growth. I am open to writing about any of these
            topics or if you think you have a similar one send me an email.
          </p>
        </Section>
        <Section className="mt-10">
          <SectionHeading>1:1 Mentorship</SectionHeading>
          <p className="text-lg">
            Mentoring young software engineers has always been a driving force
            for me. You can set up a 1 hour call with me to discuss your
            education, career plans and even do a brainstorming session.
          </p>
        </Section>

        <Section className="mt-10">
          <SectionHeading>Startup consultancy</SectionHeading>
          <p className="text-lg">
            I&apos;ve been a part of startups at early stage and had the
            opportunity to work on projects never done before. Throughout my
            career I&apos;ve done numerous proof-of-concepts for my projects and
            I look forward to saving your precious time with my experience.
          </p>
        </Section>
        <Section className="mt-10">
          <SectionHeading>Software development</SectionHeading>
          <p className="text-lg">
            I&apos;m open to a part-time web developer role depending on the
            idea behind your project. I prefer working with React and TypeScript
            (Node.js).
          </p>
        </Section>
        <a
          className="inline-block text-gray-900 text-lg bg-yellow-500 rounded p-2 px-4 font-medium shadow-lg transition-all hover:-translate-y-1"
          href="mailto:hi@theanshuman.dev"
        >
          Contact me 🚀
        </a>
      </main>
      <Footer />
    </>
  );
};

export default Services;

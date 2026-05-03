"use client";

import { LinkInformationType } from "@/types";
import { ArticleInList } from "@/types";
import ExternalLink from "@/components/ExternalLink";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Article from "@/components/Article";
import Link from "next/link";
import Image from "next/image";
import Me from "@/public/me.jpeg";

export default function HomeContent({
  articles,
  experienceInYears,
  experiences,
  publishers,
}: {
  articles: ArticleInList[];
  experienceInYears: string;
  experiences: LinkInformationType[];
  publishers: LinkInformationType[];
}) {
  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={"content-container"}
      >
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
              Leading the engineering engagement for Vercel Community platforms
              by developing internal tools and integrations with Discourse.
              Also, engaging with the developer community via live streams and
              discussions to gather product feedback and support our customers.
            </li>
            <li className="list-disc mb-4">
              Providing feedback to improve developer experience for the
              commercetools Frontend customers. Also, writing and maintaining
              the documentation for commercetools Frontend.
            </li>
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
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <Link
            href={"/articles"}
            className={
              "mt-8 py-2 underline underline-offset-4 text-yellow-500 tracking-wider inline-block"
            }
          >
            View all articles
          </Link>
        </Section>
      </motion.main>
      <Footer />
    </>
  );
}
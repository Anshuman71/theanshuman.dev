import Link from "next/link";
import TopAppBar from "@/components/new/TopAppBar";
import Footer from "@/components/new/Footer";
import BottomNavBar from "@/components/new/BottomNavBar";
import JourneySection from "@/components/new/JourneySection";
import ArticleCard from "@/components/new/ArticleCard";
import { externalArticles, projects, NUM_TO_WORD } from "@/constants";
import { getArticles } from "@/utils";
import { ArticleInList } from "@/types";

export default async function HomePage() {
  let articles: ArticleInList[] = [];
  try {
    const data = await getArticles();
    const topArticlesFromDev = data
      .sort(
        (a: ArticleInList, b: ArticleInList) =>
          b.positive_reactions_count - a.positive_reactions_count
      )
      .slice(0, 3);
    articles = [...externalArticles, ...topArticlesFromDev];
  } catch {
    articles = [...externalArticles];
  }

  const experienceInYears =
    `${NUM_TO_WORD[new Date().getFullYear() - 2020]} years` || "a decade";

  return (
    <>
      <TopAppBar currentRoute="home" />

      <main className="max-w-screen-2xl mx-auto px-8 py-16 space-y-32">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 border-2 border-black font-label-bold neubrutal-shadow-sm">
              SOFTWARE ENGINEER &amp; ADVOCATE
            </div>
            <h1 className="font-display-lg text-display-lg uppercase leading-none">
              I&apos;M{" "}
              <span className="bg-primary-container px-2">ANSHUMAN</span>{" "}
              BUILDING THE WEB OF TOMORROW.
            </h1>
            <p className="font-body-lg text-body-lg max-w-2xl border-l-8 border-primary-container pl-6 py-2">
              Creative Software Engineer with {experienceInYears} of experience
              in software development. I help companies create valuable software
              and reach business goals, from engineering management to full-stack
              development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/feed"
                className="bg-primary-container text-stone-900 font-headline-md px-10 py-4 border-4 border-black neubrutal-shadow-lg btn-interact uppercase text-xl"
              >
                Read Articles
              </Link>
              <Link
                href="mailto:hi@theanshuman.dev"
                className="bg-white text-stone-900 font-headline-md px-10 py-4 border-4 border-black neubrutal-shadow-lg btn-interact uppercase text-xl inline-block"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-primary border-4 border-black" />
            <img
              alt="Anshuman Portrait"
              className="relative z-10 w-full h-auto border-4 border-black object-cover grayscale hover:grayscale-0 transition-all duration-500"
              src="/me.jpeg"
            />
          </div>
        </section>

        <JourneySection />

        {/* Projects Bento Grid */}
        <section className="space-y-12">
          <div className="flex justify-between items-end">
            <h2 className="font-headline-lg text-headline-lg uppercase">
              Personal Projects
            </h2>
            <Link
              href="/feed"
              className="font-label-bold uppercase underline decoration-4 underline-offset-4 decoration-primary-container"
            >
              View all articles
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {projects.map((project, index) => {
              if (index === 0) {
                return (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-8 bg-white border-4 border-black neubrutal-shadow group overflow-hidden hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="aspect-video overflow-hidden border-b-4 border-black">
                      <div className="w-full h-full bg-surface-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-8xl text-on-surface-variant">
                          rocket_launch
                        </span>
                      </div>
                    </div>
                    <div className="p-8 space-y-4">
                      <h3 className="font-headline-md text-headline-md uppercase">
                        {project.name}
                      </h3>
                      <p className="font-body-md text-body-md">
                        {project.description}
                      </p>
                    </div>
                  </a>
                );
              }

              if (index === 1) {
                return (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-4 bg-primary-container border-4 border-black neubrutal-shadow p-8 flex flex-col justify-between hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="space-y-6">
                      <span
                        className="material-symbols-outlined text-6xl"
                        style={{
                          fontVariationSettings:
                            '"FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24',
                        }}
                      >
                        terminal
                      </span>
                      <h3 className="font-headline-md text-headline-md uppercase leading-none">
                        {project.name}
                      </h3>
                      <p className="font-body-md text-body-md font-bold">
                        {project.description}
                      </p>
                    </div>
                    <span className="inline-block mt-8 bg-black text-white px-6 py-3 font-bold uppercase border-2 border-white group-hover:bg-white group-hover:text-black transition-colors">
                      Visit Site
                    </span>
                  </a>
                );
              }

              if (index === 2) {
                return (
                  <a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-4 bg-secondary-container border-4 border-black neubrutal-shadow p-8 space-y-4 hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
                  >
                    <h3 className="font-headline-md text-2xl uppercase">
                      {project.name}
                    </h3>
                    <p className="font-body-md text-body-md">
                      {project.description}
                    </p>
                  </a>
                );
              }

              return (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:col-span-8 bg-white border-4 border-black neubrutal-shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:translate-x-1 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="space-y-4">
                    <h3 className="font-headline-md text-headline-md uppercase">
                      {project.name}
                    </h3>
                    <p className="font-body-md text-body-md">
                      {project.description}
                    </p>
                    <span className="border-b-4 border-black font-bold uppercase hover:bg-primary-container transition-all">
                      Visit Site
                    </span>
                  </div>
                  <div className="bg-stone-100 border-2 border-black aspect-square flex items-center justify-center">
                    <span className="material-symbols-outlined text-8xl">
                      code
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Latest Articles Preview */}
        <section className="space-y-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="font-headline-lg text-headline-lg uppercase">
              Latest Articles
            </h2>
            <Link
              href="/feed"
              className="group inline-flex w-fit items-center gap-3 border-4 border-black bg-white px-6 py-3 font-label-bold uppercase neubrutal-shadow transition-all hover:-translate-y-1 hover:bg-primary-container"
            >
              View all articles
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                fallbackIndex={index}
              />
            ))}
          </div>
        </section>

        </main>

      <Footer />
      <BottomNavBar />
    </>
  );
}
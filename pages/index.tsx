import type { NextPage } from "next";
import Head from "next/head";
import { contacts, experiences } from "../constants";
import ExternalLink from "../components/ExternalLink";
import HitCounter from "../components/HitCounter";

const Home: NextPage = () => {
  return (
    <div className={"bg-black p-10 pt-20 min-h-screen"}>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Hey there, I'm Anshuman a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
        />
        <meta
          name="keywords"
          content="anshuman, anshuman5221, anshuman71, anshuman bhardwaj, Anshuman, Anshuman Bhardwaj Canoo, Anshuman Bhardwaj Delightree, Anshuman Bhardwaj Collegebasket, Anshuman Bhardwaj Keshav Mahavidyalaya, Anshuman Bhardwaj Delhi University, DU, KMV, Delhi, Gurgaon, India, Canoo"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000" />
        <meta property="og:title" content="Anshuman Bhardwaj" />
        <meta property="og:type" content="website" />
        <meta name="author" content="Anshuman Bhardwaj" />
        <meta property="og:image" content="https://anshuman.vercel.app" />
        <meta property="og:image:height" content="800" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="480" />
        <meta property="og:url" content="https://anshuman.vercel.app" />
        <meta
          property="og:description"
          content="Hey there, I'm Anshuman a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
        />
        <meta property="og:site_name" content="Anshuman Bhardwaj" />
        <meta name="robots" content="index, follow" />
        <title>Anshuman Bhardwaj</title>
        <link rel="icon" sizes="96x96" type="image/png" href="/icon.png" />
      </Head>
      <main className={"w-2/3 mx-auto"}>
        <section className="intro w-2/3">
          <h1 className={"text-gray-100 text-5xl"}>Hi, I&apos;m Anshuman</h1>
          <p className={"text-gray-300 text-lg mt-10"}>
            {" "}
            I love sammy🐶, music (Bollywood & Enrique) and gaming (MOHW and
            DMC). <br /> Like Batman 🦇, I work late at night. I like teaching
            and sharing what I learned mostly the hard way. Other than that I
            build tools for humans 😎.
          </p>
        </section>
        <section className="what-i-do w-2/3 text-gray-200 my-10">
          <h2 className="text-3xl mb-1 tracking-wider">What I do?</h2>
          <p className="text-gray-300 text-lg mt-4">
            I am a Full Stack Developer. I have been working with ReactJS and
            NodeJS since 2017. On my way I have built many apps utilizing their
            core and many on-the-top libraries. I love working with React and
            ReactNative. I have recently found my new love, in
            <b className="font-medium">serverless.</b> <br />I love cloud
            functions and automating workflow using them.
          </p>
          <div className="flex py-5 flex-row flex-wrap justify-around items-center"></div>
        </section>
        <section className={"what-so-far text-gray-200 my-10 w-2/3"}>
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
        </section>
        <footer className={"text-gray-300"}>
          <HitCounter />
          <p className="p-2 text-center tracking-wide">
            Made with ♥ and tailwind.css by Anshuman Bhardwaj
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;

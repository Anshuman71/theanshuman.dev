import { NextPage } from "next/types";
import Image, { ImageProps } from "next/image";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
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
  const age = new Date().getFullYear() - 2000;
  return (
    <>
      <main className="content-container">
        <MetaData title={`About | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>About me</h1>
        <hr />
        <Section className="mt-10">
          <SectionHeading>Personal life</SectionHeading>
          <p className="text-lg">
            I&apos;m a {age} year <i>not so old</i> guy, passionate about
            writing and teaching. I like to listen to slow and calming music
            most days, unless I&apos;ve just gotten out of the shower because
            then it&apos;s more likely to be Kanye west on my playlist. I love
            playing video games like Euro Truck Simulator and Sniper Elite.
            While I love cycling, I&apos;ve been advised against doing so by
            from my own family. I&apos;ve found a new love in mountains and I
            like to travel and walk alone, talking to myself{" "}
            <i>in a non-creepy way</i>. Recently I been to the &quot;Queen of
            Hills: Mussoorie&quot;
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <ImageHolder src={bikePic} />
            <ImageHolder src={selfiePic} />
            <ImageHolder src={hillPic} />
          </div>
        </Section>
        <Section className="mt-10">
          <SectionHeading>Tools of choice</SectionHeading>
          <p className="text-lg">
            I love working on a Mac because of their simplicity and build
            quality. My second machine is a custom build PC docking AMD Ryzen
            3400G with 16 Gigs of RAM running Ubuntu.
          </p>
        </Section>
        <Section className="mt-10">
          <SectionHeading>Favorite books</SectionHeading>
          <p className="text-lg">
            I started reading books in 2020 and I&apos;ve read more than
            twenty-five books. I mostly like reading self-help and development
            books. My top picks are:
            <ul className="pl-10">
              <li className="list-disc">The Greatest salesman in the world</li>
              <li className="list-disc">Tuesdays with Morrie</li>
              <li className="list-disc">Shoe dog</li>
              <li className="list-disc">Atomic habits</li>
              <li className="list-disc">Barking up the wrong tree</li>
              <li className="list-disc">The Almanac of Naval Ravikant</li>
            </ul>
          </p>
        </Section>
        <Section className="mt-10">
          <SectionHeading>Favorite movies</SectionHeading>
          <p className="text-lg">
            Well movie watching has been my thing since childhood. I love
            watching superhero movies and rom-coms mostly. My top picks are:
            <ul className="pl-10">
              <li className="list-disc">The Batman vs Superman</li>
              <li className="list-disc">Inception</li>
              <li className="list-disc">Superbad</li>
              <li className="list-disc">Hangover series</li>
              <li className="list-disc">Tenet</li>
              <li className="list-disc">Spider-man: No way home</li>
              <li className="list-disc">Avengers Endgame</li>
            </ul>
          </p>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default About;

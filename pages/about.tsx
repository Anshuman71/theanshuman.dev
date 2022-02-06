import { NextPage } from "next/types";
import Footer from "../components/Footer";
import MetaData from "../components/MetaData";

const About: NextPage = () => {
  return (
    <>
      <main className="content-container">
        <MetaData title={`Blog | Anshuman Bhardwaj`} />
        <h1 className={"text-gray-100 text-3xl md:text-5xl mb-4"}>About me</h1>
      </main>
      <Footer />
    </>
  );
};

export default About;

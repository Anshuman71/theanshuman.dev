import Head from "next/head";

export default function MetaData({ title = "Anshuman Bhardwaj" }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta
        name="description"
        content="Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
      />
      <meta name="theme-color" content="#F1C40F" />
      <meta
        name="keywords"
        content="sun_anshuman, Anshuman71, anshuman_bhardwaj, anshuman-bhardwaj, Anshuman, Anshuman Bhardwaj Canoo, Anshuman Bhardwaj Delightree, Anshuman Bhardwaj Collegebasket, Anshuman Bhardwaj Keshav Mahavidyalaya, Anshuman Bhardwaj Delhi University, DU, KMV, Delhi, Gurgaon, India, Canoo"
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://theanshuman.dev/" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
      />
      <meta property="og:image" content="https://theanshuman.dev/me.jpeg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://theanshuman.dev/" />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content="Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
      />
      <meta
        property="twitter:image"
        content="https://theanshuman.dev/me.jpeg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        href="https://theanshuman.dev/icon.jpeg"
      />
    </Head>
  );
}

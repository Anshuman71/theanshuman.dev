import Head from "next/head";

export default function MetaData() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!-- Primary Meta Tags --> */}
      <title>Anshuman Bhardwaj</title>
      <meta name="title" content="Anshuman Bhardwaj" />
      <meta
        name="description"
        content="Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://theanshuman.dev/" />
      <meta property="og:title" content="Anshuman Bhardwaj" />
      <meta
        property="og:description"
        content="Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. "
      />
      <meta property="og:image" content="https://theanshuman.dev/me.jpeg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://theanshuman.dev/" />
      <meta property="twitter:title" content="Anshuman Bhardwaj" />
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

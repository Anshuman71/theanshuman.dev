import Head from "next/head";

const DEFAULT_DESCRIPTION =
  "Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. ";

const DEFAULT_KEYWORDS =
  "sun_anshuman, Anshuman71, anshuman_bhardwaj, anshuman-bhardwaj, Anshuman, Anshuman Bhardwaj Canoo,  Delightree,  Collegebasket, Keshav Mahavidyalaya, Delhi University, India, Canoo";

export default function MetaData({
  title = "Anshuman Bhardwaj",
  description = DEFAULT_DESCRIPTION,
  keywords = "",
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#F1C40F" />
      <meta name="keywords" content={`${DEFAULT_KEYWORDS} , ${keywords}`} />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://theanshuman.dev/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://theanshuman.dev/me.jpeg" />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://theanshuman.dev/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content="https://theanshuman.dev/me.jpeg"
      />
      <link
        rel="icon"
        type="image/jpeg"
        href="https://theanshuman.dev/icon.jpeg"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/@highlightjs/cdn-assets@11.4.0/styles/atom-one-dark.min.css"
      />
    </Head>
  );
}

import Head from "next/head";

const DEFAULT_DESCRIPTION =
  "Hey there, I'm Anshuman Bhardwaj, a self-taught developer passionate about empowering people with the skills I have learned. I love building an awesomely beautiful frontend for seamless user experience and flawless back end for a scalable & reliable business. ";

const DEFAULT_KEYWORDS =
  "sun_anshuman, anshuman_bhardwaj, anshuman-bhardwaj, Anshuman Bhardwaj Canoo,  Collegebasket, Keshav Mahavidyalaya, Delhi University, India";

export default function MetaData({
  title = "Anshuman Bhardwaj",
  description = DEFAULT_DESCRIPTION,
  keywords = "",
  canonicalLink = "",
  readingTime = 2,
  imageUrl = "https://theanshuman.dev/me.jpeg",
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
      <meta property="og:image" content={imageUrl} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content="@sun_anshuman" />
      <meta property="twitter:url" content="https://theanshuman.dev/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image:src" content={imageUrl} />
      <meta name="twitter:label1" content="Est. reading time" />
      <meta name="twitter:data1" content={`${readingTime} minutes`} />
      <link
        rel="author"
        href="https://twitter.com/sun_anshuman"
        data-rh="true"
      ></link>
      <meta
        property="article:author"
        content="https://twitter.com/sun_anshuman"
        data-rh="true"
      ></meta>
      <meta name="author" content="Anshuman Bhardwaj" data-rh="true"></meta>
      <link
        rel="icon"
        type="image/jpeg"
        href="https://theanshuman.dev/icon.jpeg"
      />
      {canonicalLink && <link rel="canonical" href={canonicalLink} />}
    </Head>
  );
}

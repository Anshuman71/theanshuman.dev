import type { Metadata } from "next";

const DEFAULT_DESCRIPTION =
  "Hey there, I'm Anshuman Bhardwaj, a seasoned developer passionate about empowering people. Currently building https://useglossary.com";

const DEFAULT_KEYWORDS =
  "sun_anshuman, anshuman_bhardwaj, anshuman-bhardwaj, Anshuman Bhardwaj Canoo,  Collegebasket, Keshav Mahavidyalaya, Delhi University, India";

type MetaDataProps = {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalLink?: string;
  readingTime?: number;
  imageUrl?: string;
};

export function generateMetadata({
  title = "Anshuman Bhardwaj | Software Engineer",
  description = DEFAULT_DESCRIPTION,
  keywords = "",
  canonicalLink,
  readingTime = 2,
  imageUrl = "https://theanshuman.dev/me.jpeg",
}: MetaDataProps): Metadata {
  return {
    title,
    description,
    keywords: `${DEFAULT_KEYWORDS} , ${keywords}`,
    authors: [{ name: "Anshuman Bhardwaj", url: "https://x.com/sun_anshuman" }],
    openGraph: {
      type: "website",
      url: "https://theanshuman.dev/",
      title,
      description,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@sun_anshuman",
      title,
      description,
      images: [{ url: imageUrl }],
    },
    alternates: {
      canonical: canonicalLink,
    },
    other: {
      "twitter:label1": "Est. reading time",
      "twitter:data1": `${readingTime} minutes`,
    },
  };
}
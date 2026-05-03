import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Anshuman Bhardwaj | Software Engineer",
  description:
    "Hey there, I'm Anshuman Bhardwaj, a seasoned developer passionate about empowering people. Currently building https://useglossary.com",
  metadataBase: new URL("https://theanshuman.dev"),
  icons: {
    icon: "/icon.jpeg",
  },
  openGraph: {
    type: "website",
    url: "https://theanshuman.dev/",
    title: "Anshuman Bhardwaj | Software Engineer",
    description:
      "Hey there, I'm Anshuman Bhardwaj, a seasoned developer passionate about empowering people.",
    images: [{ url: "https://theanshuman.dev/me.jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@sun_anshuman",
    title: "Anshuman Bhardwaj | Software Engineer",
    description:
      "Hey there, I'm Anshuman Bhardwaj, a seasoned developer passionate about empowering people.",
    images: [{ url: "https://theanshuman.dev/me.jpeg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#F1C40F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 flex flex-col min-h-screen text-gray-200">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
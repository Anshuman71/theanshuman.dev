import type { Metadata } from "next";
import { externalArticles } from "@/constants";
import { getArticles } from "@/utils";
import { ArticleInList } from "@/types";
import TopAppBar from "@/components/new/TopAppBar";
import FeedContent from "@/components/new/FeedContent";
import Footer from "@/components/new/Footer";
import BottomNavBar from "@/components/new/BottomNavBar";

export const metadata: Metadata = {
  title: "Feed | SUNFLOWER",
  description:
    "Explore articles, tutorials, and insights on Neo-Brutalism, digital product design, and organic growth strategies.",
};

export default async function FeedPage() {
  let articles: ArticleInList[] = [];
  try {
    const data = await getArticles();
    articles = [...externalArticles, ...data];
  } catch {
    articles = [...externalArticles];
  }

  return (
    <>
      <TopAppBar currentRoute="feed" />
      <FeedContent articles={articles} />
      <Footer />
      <BottomNavBar currentRoute="feed" />
    </>
  );
}
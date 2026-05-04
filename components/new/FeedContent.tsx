"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { ArticleInList } from "@/types";
import ArticleCard from "@/components/new/ArticleCard";

enum SortType {
  PublishedAt = "published_at",
  PageViews = "page_views_count",
  Reactions = "positive_reactions_count",
  ReadingTime = "reading_time_minutes",
}

const sortOptions = [
  { value: SortType.PublishedAt, label: "Newest" },
  { value: SortType.PageViews, label: "Popular" },
  { value: SortType.Reactions, label: "Most Loved" },
  { value: SortType.ReadingTime, label: "Reading Time" },
];

export default function FeedContent({
  articles,
}: {
  articles: ArticleInList[];
}) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(SortType.PublishedAt);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [showSort, setShowSort] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setShowSort(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const allTags = useMemo(() => {
    const tagCount = new Map<string, number>();
    articles.forEach((a) =>
      a.tag_list?.forEach((t) => {
        tagCount.set(t, (tagCount.get(t) || 0) + 1);
      })
    );
    return Array.from(tagCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const result = articles.filter((article) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        (article.description || "").toLowerCase().includes(q) ||
        article.tag_list?.some((t) => t.toLowerCase().includes(q));

      const matchesTag = !activeTag || article.tag_list?.includes(activeTag);

      return matchesSearch && matchesTag;
    });

    result.sort((a, b) => {
      if (sort === SortType.PublishedAt) {
        return (
          new Date(b.published_at).getTime() -
          new Date(a.published_at).getTime()
        );
      }
      if (sort === SortType.ReadingTime) {
        return a.reading_time_minutes - b.reading_time_minutes;
      }
      return (
        Number(b[sort as keyof ArticleInList]) -
        Number(a[sort as keyof ArticleInList])
      );
    });

    return result;
  }, [articles, search, sort, activeTag]);

  const displayCount = useMemo(() => {
    if (filteredArticles.length <= 4) return filteredArticles.length;
    const stepped = 4 + Math.floor((visibleCount - 4) / 6) * 6;
    return Math.min(Math.max(stepped, 4), filteredArticles.length);
  }, [visibleCount, filteredArticles.length]);

  const visibleArticles = filteredArticles.slice(0, displayCount);
  const hasMore = filteredArticles.length > displayCount;

  return (
    <main className="max-w-screen-2xl mx-auto px-8 py-12">
      <section className="mb-16">
        <div className="inline-block bg-tertiary-container border-2 border-black px-4 py-1 mb-6 neubrutal-shadow">
          <span className="font-label-bold text-label-bold text-on-tertiary-fixed-variant uppercase">
            The Content Hub
          </span>
        </div>
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">
          LATEST INSIGHTS.
        </h1>
        <p className="font-body-lg text-body-lg max-w-2xl text-on-surface-variant">
          Exploring the intersection of Neo-Brutalism, digital product design,
          and organic growth strategies.
        </p>
      </section>

      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="flex-grow relative">
            <input
              className="w-full bg-white border-4 border-black p-4 font-body-lg text-body-lg focus:outline-none focus:ring-0 focus:bg-primary-fixed transition-colors"
              placeholder="Search articles, videos, or tutorials..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-2 flex items-center justify-center">
              <span className="material-symbols-outlined">search</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="relative" ref={sortRef}>
              <button
                className="bg-white border-4 border-black px-6 py-4 font-label-bold flex items-center gap-4 neubrutal-shadow hover:bg-primary-container transition-all active:translate-x-1 active:translate-y-1 active:shadow-none"
                onClick={() => setShowSort(!showSort)}
              >
                SORT BY{" "}
                <span className="material-symbols-outlined">sort</span>
              </button>
              {showSort && (
                <div className="absolute right-0 top-full z-10 mt-2 w-56 max-w-[calc(100vw-4rem)] bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      className={`block w-full text-left px-4 py-3 font-label-bold uppercase hover:bg-primary-container transition-colors ${
                        sort === option.value
                          ? "bg-primary-container"
                          : ""
                      }`}
                      onClick={() => {
                        setSort(option.value);
                        setShowSort(false);
                      }}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`border-2 border-black px-4 py-1 font-label-bold uppercase neubrutal-shadow transition-all ${
                activeTag === tag
                  ? "bg-primary-container scale-105"
                  : "bg-white hover:bg-primary-container hover:scale-105"
              }`}
              onClick={() =>
                setActiveTag(activeTag === tag ? null : tag)
              }
            >
              #{tag}
            </button>
          ))}
          {activeTag && (
            <button
              className="border-2 border-error px-4 py-1 font-label-bold uppercase text-error neubrutal-shadow hover:bg-error hover:text-white transition-all"
              onClick={() => setActiveTag(null)}
            >
              CLEAR FILTER
            </button>
          )}
        </div>
      </section>

      {visibleArticles.length === 0 ? (
        <div className="flex flex-col items-center my-20">
          <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">
            search_off
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
            No articles found matching your criteria.
          </p>
          <button
            className="bg-primary-container border-4 border-black px-6 py-3 font-label-bold uppercase neubrutal-shadow hover:bg-yellow-400 transition-all"
            onClick={() => {
              setSearch("");
              setActiveTag(null);
            }}
          >
            CLEAR SEARCH
          </button>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          <div className={visibleArticles.length >= 1 ? "lg:col-span-2" : ""}>
            {visibleArticles.length >= 1 && (
              <ArticleCard article={visibleArticles[0]} variant="hero" fallbackIndex={0} />
            )}
          </div>
          {visibleArticles.slice(1, 4).map((article, i) => (
            <ArticleCard key={article.slug} article={article} fallbackIndex={i + 1} />
          ))}
          <SubscribeCTA />
          {visibleArticles.slice(4).map((article, i) => (
            <ArticleCard key={article.slug} article={article} fallbackIndex={i + 4} />
          ))}
        </section>
      )}

      {hasMore && (
        <section className="mt-20 flex flex-col items-center">
          <button
            className="group relative inline-flex items-center gap-4 bg-white border-4 border-black px-12 py-6 font-display-lg text-4xl uppercase neubrutal-shadow-lg hover:neubrutal-shadow transition-all active:translate-x-2 active:translate-y-2 active:shadow-none"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            LOAD MORE CONTENT
            <span className="material-symbols-outlined text-4xl group-hover:rotate-180 transition-transform duration-500">
              expand_more
            </span>
          </button>
        </section>
      )}

      <div className="mt-8 text-center font-body-md text-on-surface-variant">
        Showing {visibleArticles.length} of {filteredArticles.length} articles
        {search && ` for "${search}"`}
        {activeTag && ` tagged "${activeTag}"`}
      </div>
    </main>
  );
}

function SubscribeCTA() {
  return (
    <div className="bg-tertiary border-4 border-black p-8 neubrutal-shadow text-white flex flex-col items-center text-center justify-center relative overflow-hidden h-full">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rotate-12 border-4 border-black" />
      <h3 className="font-headline-md text-headline-md text-white mb-6 uppercase relative z-10">
        SUBSCRIBE TO THE FEED.
      </h3>
      <input
        className="w-full bg-white border-4 border-black p-3 text-black mb-4 focus:outline-none placeholder:text-stone-400 font-label-bold uppercase"
        placeholder="YOUR@EMAIL.COM"
        type="email"
      />
      <button className="w-full bg-primary-container text-black font-label-bold py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none uppercase">
        JOIN THE CLUB
      </button>
    </div>
  );
}

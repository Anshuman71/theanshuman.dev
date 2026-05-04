"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArticleInList } from "@/types";
import BlueBg from "@/public/assets/blue_bg.png";
import PurpleBg from "@/public/assets/purple_bg.png";
import GreenBg from "@/public/assets/green_bg.png";
import OrangeBg from "@/public/assets/orange_bg.png";

const fallbackImages = [BlueBg, PurpleBg, GreenBg, OrangeBg];

export function getArticleFallbackImage(index: number) {
  return fallbackImages[index % fallbackImages.length];
}

export default function ArticleCard({
  article,
  fallbackIndex,
  variant,
}: {
  article: ArticleInList;
  fallbackIndex: number;
  variant?: "hero";
}) {
  const href = article.canonical_url || `/articles/${article.slug}`;
  const fallback = getArticleFallbackImage(fallbackIndex);
  const isHero = variant === "hero";

  return (
    <div className="flex h-full flex-col overflow-hidden border-4 border-black bg-white neubrutal-shadow group">
      <div
        className={`relative overflow-hidden bg-surface-container ${
          isHero ? "aspect-video" : "aspect-[4/3]"
        }`}
      >
        <ArticleImage
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={article.cover_image || fallback}
          alt={article.title}
          fallbackSrc={fallback}
        />
        <div className="absolute left-3 top-3 bg-black px-2 py-1 font-label-bold text-xs uppercase text-white">
          {article.reading_time_minutes} MIN
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          {article.tag_list?.slice(0, isHero ? 3 : 2).map((tag) => (
            <span
              key={tag}
              className={`border border-black px-2 py-0.5 font-label-bold text-xs uppercase ${
                isHero ? "bg-primary-container" : "bg-tertiary-fixed"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-2 line-clamp-2 font-headline-md text-xl uppercase leading-tight">
          {article.title}
        </h3>
        <p className="mb-4 flex-1 line-clamp-2 font-body-md text-on-surface-variant">
          {article.description}
        </p>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-label-bold uppercase text-primary transition-transform hover:translate-x-1"
        >
          Read More
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

function ArticleImage({
  src,
  alt,
  className,
  fallbackSrc,
}: {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  fallbackSrc: string | StaticImageData;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <Image
        className={className}
        src={fallbackSrc}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    );
  }

  if (typeof src !== "string") {
    return (
      <Image
        className={className}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => setErrored(true)}
    />
  );
}

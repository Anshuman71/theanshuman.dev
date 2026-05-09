"use client";

import Link from "next/link";

const column1 = [
  { name: "Home", href: "/" },
  { name: "Feed", href: "/feed" },
  { name: "X", href: "https://x.com/sun_anshuman" },
  { name: "YouTube", href: "https://www.youtube.com/c/AnshumanBhardwaj" },
];

const column2 = [
  { name: "LinkedIn", href: "https://linkedin.com/in/itsanshuman" },
  { name: "Email", href: "mailto:hi@theanshuman.dev" },
  { name: "dev.to", href: "https://dev.to/anshuman_bhardwaj" },
  { name: "Medium", href: "https://anshuman-bhardwaj.medium.com" },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-dark-surface text-on-dark-surface md:mb-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative px-4 py-8 md:max-w-md md:px-8 md:py-12 md:text-left">
        <div className="grid grid-cols-1 gap-10 px-2 md:grid-cols-2 md:gap-12 md:px-0 md:justify-items-start">
          <div className="flex flex-col gap-4">
            {column1.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-[1.45rem] font-black uppercase tracking-[-0.03em] text-on-dark-surface transition-colors hover:text-accent-hover"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {column2.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-[1.45rem] font-black uppercase tracking-[-0.03em] text-on-dark-surface transition-colors hover:text-accent-hover"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-14 flex items-center gap-2 text-lg font-bold text-on-dark-surface md:justify-start">
          <span>Made with</span>
          <span className="text-accent-red">&#10084;</span>
          <span>and Next.js</span>
        </div>
      </div>
    </footer>
  );
}

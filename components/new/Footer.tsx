"use client";

import Link from "next/link";

const footerLinks = {
  column1: [
    { name: "Home", href: "/" },
    {
      name: "Newsletter",
      href: "https://www.getrevue.co/profile/anshuman_bhardwaj",
    },
    { name: "Github", href: "https://github.com/Anshuman71" },
    {
      name: "Medium",
      href: "https://anshuman-bhardwaj.medium.com",
    },
    {
      name: "Resume",
      href: "https://www.notion.so/Resume-92cc4b433e454b4ab749f3e3f40c6239",
    },
  ],
  column2: [
    { name: "Articles", href: "/articles" },
    { name: "DEV", href: "https://dev.to/anshuman_bhardwaj" },
    { name: "Twitter", href: "https://x.com/sun_anshuman" },
    {
      name: "Youtube",
      href: "https://www.youtube.com/c/AnshumanBhardwaj",
    },
  ],
  column3: [
    { name: "Email", href: "mailto:hi@theanshuman.dev" },
    { name: "LinkedIn", href: "https://linkedin.com/in/itsanshuman" },
    { name: "Hashnode", href: "https://blog.theanshuman.dev" },
    { name: "Instagram", href: "https://instagram.com/sun_anshuman" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-[#1a1816] text-[#f4efe8] md:mb-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 0)",
          backgroundSize: "18px 18px",
        }}
      />
      <div className="relative mx-auto max-w-screen-2xl px-4 py-8 md:px-8 md:py-12">
        <div className="grid grid-cols-1 gap-10 px-2 md:grid-cols-3 md:gap-12 md:px-0">
          <div className="flex flex-col gap-4">
            {footerLinks.column1.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-[1.45rem] font-black uppercase tracking-[-0.03em] text-[#f4efe8] transition-colors hover:text-[#f6d36b]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {footerLinks.column2.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-[1.45rem] font-black uppercase tracking-[-0.03em] text-[#f4efe8] transition-colors hover:text-[#f6d36b]"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {footerLinks.column3.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="w-fit text-[1.45rem] font-black uppercase tracking-[-0.03em] text-[#f4efe8] transition-colors hover:text-[#f6d36b]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-14 flex items-center justify-center gap-2 text-center text-lg font-bold text-[#f4efe8]">
          <span>Made with</span>
          <span className="text-[#ff5a4f]">&#10084;</span>
          <span>and Next.js</span>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useReadingProgress } from "../hooks";
import clsx from "clsx";
import Twitter from "../public/twitter.svg";
import LinkedIn from "../public/linkedin.svg";

const NavLinks = [
  {
    url: "/",
    name: "Home",
  },
  {
    url: "/articles",
    name: "Articles",
  },
  {
    url: "/services",
    name: "Services",
  },
  {
    url: "/about",
    name: "About",
  },
];

export default function NavBar() {
  const completion = useReadingProgress();
  const pathname = usePathname();
  return (
    <nav className="flex flex-row justify-between items-center print:hidden sticky z-50 top-0 bg-inherit py-3">
      <span
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full h-0.5 bg-yellow-500`}
      />
      <div className="w-full flex flex-row justify-between items-end px-6 lg:px-0 max-w-5xl mx-auto ">
        <div className="w-full sm:w-auto flex flex-row justify-between sm:justify-start">
          {NavLinks.map((item) => (
            <Link
              key={item.url}
              href={item.url}
              className={clsx(
                "sm:mr-12 last:mr-0 font-medium outline-none text-lg rounded p-1 px-4 first:pl-0 hover:text-yellow-500 focus:text-yellow-500 ",
                {
                  "text-yellow-500": pathname === item.url,
                  "text-gray-400": pathname !== item.url,
                }
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex">
          <Link href={"https://x.com/sun_anshuman"}>
            <Twitter className="hidden sm:block transition-all duration-300 text-gray-400 hover:text-[#1d9bf0] w-6 h-6 mr-4" />
          </Link>
          <Link href={"https://linkedin.com/in/itsanshuman"}>
            <LinkedIn className="hidden sm:block transition-all duration-300 text-gray-400 hover:text-blue-400 w-6 h-6 mr-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

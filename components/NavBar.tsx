import Link from "next/link";
import { useRouter } from "next/router";
import { useReadingProgress } from "../hooks";
import clsx from "clsx";

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
  const router = useRouter();
  console.log(router.pathname);
  return (
    <nav className="print:hidden sticky z-50 top-0 bg-inherit py-3">
      <span
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full h-0.5 bg-blue-400`}
      />
      <div className="w-full flex flex-row items-end px-6 lg:px-0 lg:w-3/4 xl:max-w-[990px] mx-auto ">
        <div className="w-full sm:w-auto flex flex-row justify-between sm:justify-start">
          {NavLinks.map((item) => (
            <Link passHref key={item.url} href={item.url}>
              <a
                className={clsx(
                  "sm:mr-12 text-gray-400 last:mr-0 outline-none text-lg rounded p-1 px-4 first:pl-0 last:pr-0 sm:first:pl-4 sm:last:pr-4 hover:text-blue-400 focus:text-blue-400 focus:ring-2 ring-blue-400",
                  {
                    "text-blue-400 font-medium": router.pathname === item.url,
                  }
                )}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

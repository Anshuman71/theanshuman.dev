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
    url: "/about",
    name: "About",
  },
  {
    url: "/articles",
    name: "Articles",
  },
];

export default function NavBar() {
  const completion = useReadingProgress();
  const router = useRouter();
  return (
    <nav className="sticky z-50 top-0 backdrop-blur-3xl py-3">
      <span
        style={{
          transform: `translateX(${completion - 100}%)`,
        }}
        className={`absolute bottom-0 w-full h-1 bg-yellow-400`}
      />
      <div className="w-full flex flex-row items-end px-6 lg:px-0 lg:w-3/4 xl:max-w-[990px] mx-auto ">
        <h2
          className={
            "hidden self-start text-yellow-400 lg:inline-block text-3xl"
          }
        >
          Anshuman Bhardwaj
        </h2>
        <div className="flex flex-row mx-auto lg:mx-0 lg:ml-16">
          {NavLinks.map((item) => (
            <Link passHref key={item.url} href={item.url}>
              <a
                className={clsx(
                  "mr-16 md:mr-24 last:mr-0 outline-none text-lg rounded p-1 px-4 hover:text-yellow-400 focus:text-yellow-400 focus:ring-2 ring-yellow-400",
                  {
                    "text-yellow-400": router.pathname === item.url,
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

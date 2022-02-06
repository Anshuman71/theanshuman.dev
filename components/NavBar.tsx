import Link from "next/link";

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
    url: "/blog",
    name: "Blog",
  },
];

export default function NavBar() {
  return (
    <nav className="sticky z-50 top-0 backdrop-blur-3xl py-2 md:py-4">
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
              <a className="mr-24 last:mr-0 outline-none text-lg rounded p-2 hover:bg-slate-800 focus:ring-4 ring-yellow-400">
                {item.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

import clsx from "clsx";
import Link from "next/link";
import { contacts } from "../constants";
import HitCounter from "./HitCounter";

export default function Footer({ counter }: { counter?: number }) {
  return (
    <footer className="w-full lg:w-3/4 max-w-5xl mx-auto border-t px-6 lg:px-0">
      <div className="place-items-start py-4 grid grid-cols-3 items-start justify-between">
        {contacts.map((contact, index) => (
          <Link passHref key={contact.url} href={contact.url}>
            <a
              target={contact.sameTab ? "_self" : "_blank"}
              className={clsx(
                "py-1 hover:text-yellow-400 underline-offset-2 hover:underline",
                {
                  "ml-auto w-24": index % 3 === 2,
                  "mx-auto w-24": index % 3 === 1,
                }
              )}
            >
              {contact.name}
            </a>
          </Link>
        ))}
      </div>
      {counter ? <HitCounter counter={counter} /> : null}
      <p className="p-2 text-lg text-center tracking-wide">
        Made with <span className={"text-2xl text-red-600"}>♥</span> using
        Next.js by <i>Anshuman Bhardwaj</i>
      </p>
    </footer>
  );
}

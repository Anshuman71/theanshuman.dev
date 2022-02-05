import clsx from "clsx";
import Link from "next/link";
import { contacts } from "../constants";

export default function Footer() {
  return (
    <div className="content-container place-items-start py-4 grid grid-cols-3 items-start justify-between">
      {contacts.map((contact, index) => (
        <Link passHref scroll={false} key={contact.url} href={contact.url}>
          <a
            target={contact.sameTab ? "_self" : "_blank"}
            className={clsx("py-1 hover:underline", {
              "ml-auto w-24": index % 3 === 2,
              "mx-auto w-24": index % 3 === 1,
            })}
          >
            {contact.name}
          </a>
        </Link>
      ))}
    </div>
  );
}

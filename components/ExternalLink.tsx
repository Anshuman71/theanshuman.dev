import { LinkInformationType } from "../types";

export default function ExternalLink({ url, name }: LinkInformationType) {
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      className="text-gray-300 tracking-widest text-lg inline-block my-2 mr-10 pb-1 underline underline-offset-8 hover:text-yellow-500 transition-all duration-75"
      href={url}
    >
      {name}
    </a>
  );
}

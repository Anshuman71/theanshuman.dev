import { LinkInformationType } from "../types";

export default function ExternalLink({ url, name }: LinkInformationType) {
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      className="tracking-widest text-lg inline-block my-2 mr-10 pb-1 border-gray-300 border-solid border-b-2 hover:border-transparent transition-all duration-75"
      href={url}
    >
      {name}
    </a>
  );
}

import { LinkInformationType } from "../types";

export default function ExternalLink({ url, name }: LinkInformationType) {
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      className="font-light tracking-widest text-lg inline-block my-2 mr-10 pb-1 border-gray-100 border-solid border-b-2"
      href={url}
    >
      {name}
    </a>
  );
}

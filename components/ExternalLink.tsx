import { LinkInformation } from "../constants";

export default function ExternalLink({ url, name }: LinkInformation) {
  return (
    <a
      target={"_blank"}
      rel="noreferrer"
      className="font-light text-lg inline-block my-1 mr-10 pb-1 border-gray-100 border-solid border-b-2"
      href={url}
    >
      {name}
    </a>
  );
}

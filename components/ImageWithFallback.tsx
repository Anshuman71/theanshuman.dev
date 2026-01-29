import { useState } from "react";
import Image, { ImageProps, StaticImageData } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "onError"> {
  src: string | StaticImageData;
  fallbackSrc: string | StaticImageData;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  console.log({})

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
}

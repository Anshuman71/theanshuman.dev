import { PropsWithChildren } from "react";

export default function SectionHeading({
  children,
  className,
}: PropsWithChildren<any>) {
  return (
    <h2 className={`text-3xl lg:text-5xl mb-8 tracking-wider ${className}`}>
      {children}
    </h2>
  );
}

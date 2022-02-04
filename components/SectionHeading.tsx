import { PropsWithChildren } from "react";

export default function SectionHeading({
  children,
  className,
}: PropsWithChildren<any>) {
  return (
    <h2 className={`text-2xl lg:text-4xl mb-4 tracking-wider ${className}`}>
      {children}
    </h2>
  );
}

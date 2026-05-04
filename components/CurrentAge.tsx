"use client";

export default function CurrentAge({ birthYear }: { birthYear: number }) {
  return <>{new Date().getFullYear() - birthYear}</>;
}
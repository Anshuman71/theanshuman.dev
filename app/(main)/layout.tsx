import { Epilogue } from "next/font/google";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <div
        className={`${epilogue.variable} bg-background text-on-background min-h-screen`}
        style={{ fontFamily: "var(--font-epilogue), sans-serif" }}
      >
        {children}
      </div>
    </>
  );
}
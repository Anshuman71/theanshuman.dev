import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={
        "bg-slate-800 p-10 lg:p-10 lg:pt-20 min-h-screen text-gray-200"
      }
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={"bg-slate-900 flex flex-col min-h-screen text-gray-200"}>
      <NavBar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

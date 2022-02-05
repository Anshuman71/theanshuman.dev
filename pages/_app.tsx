import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window?.gtag(
        "config",
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS as string,
        {
          page_path: url,
        }
      );
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

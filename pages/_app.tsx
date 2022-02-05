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
        "bg-slate-900 p-10 lg:p-0 lg:pt-10  flex flex-col  min-h-screen text-gray-200"
      }
    >
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

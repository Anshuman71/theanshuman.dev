import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NavBar from "../components/NavBar";
import { MDXProvider } from "@mdx-js/react";

const components = {
  code: (props: any) => {
    return (
      <code {...props} className="large-text">
        {props.children}
      </code>
    );
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <div className={"bg-zinc-900 flex flex-col min-h-screen text-gray-200"}>
      <NavBar />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </div>
  );
}

export default MyApp;

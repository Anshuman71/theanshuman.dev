import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: `
import hljs from 'https://unpkg.com/@highlightjs/cdn-assets@11.4.0/es/highlight.min.js';
//  and it's easy to individually load & register additional languages
import typescript from 'https://unpkg.com/@highlightjs/cdn-assets@11.4.0/es/languages/typescript.min.js';
hljs.registerLanguage('typescript', typescript);
`,
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

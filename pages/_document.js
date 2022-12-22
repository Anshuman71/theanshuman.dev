import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head />
        <script
          async
          defer
          data-website-id="8dbd6653-b1a4-4081-9f9a-ea3642d2d7ed"
          src="https://umami.theanshuman.dev/umami.js"
        ></script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

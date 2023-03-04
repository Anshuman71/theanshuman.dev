import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head />
        <script
          async
          defer
          data-website-id="adce9dab-0e15-44be-919e-5fb06b21e6b4"
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

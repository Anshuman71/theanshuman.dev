import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={"en"}>
        <Head />
        <script
          async
          defer
          data-website-id="eca4e934-00c5-484c-8b75-6c6958e547d8"
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

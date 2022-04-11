/**
 * Based on the nextjs cxs example
 * @source
 * https://github.com/zeit/next.js/blob/c4220d2cd701f25c0ddf68db11b4ea5118d1c7a9/examples/with-cxs/pages/_document.js
 */
import Document, { Head, Main, NextScript } from "next/document";
import getFabricStyles from "../fabric";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = getFabricStyles();
    return { ...page, style };
  }

  render() {
    return (
      <html>
        <Head>
          <style
            id="fabric-style"
            dangerouslySetInnerHTML={{ __html: this.props.style }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

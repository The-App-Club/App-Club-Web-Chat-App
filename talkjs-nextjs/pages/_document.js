import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// https://nextjs.org/docs/advanced-features/custom-document
class AppDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;

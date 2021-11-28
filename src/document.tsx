import Document, { Html, Head, Main, NextScript } from 'next/document';

export class WebsiteDocument extends Document {
  render() {
    return (
      <Html lang="en" className="box-border antialiased">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body className="text-lg sm:text-2xl font-sans font-normal tracking-normal bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import * as dotenv from 'dotenv';
import { ServerStyleSheets } from '@material-ui/styles';

dotenv.config();

class MyDocument extends Document {
  public static getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    console.log(sheets);
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    console.log(initialProps);
    console.log(initialProps.styles);
    console.log(React.Children.toArray(initialProps.styles));

    console.log(sheets);
    console.log(sheets.getStyleElement());

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  };

  public render() {
    console.log("MyDocument",process.env.NODE_ENV);
    console.log("MyDocument",process.env.NEXT_PUBLIC_URL_APP);
    console.log("MyDocument",'rendered on the server');

    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#303030" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

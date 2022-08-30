import App from 'next/app';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import {themeDark, themeLight} from '../lib/theme'
import Head from 'next/head';
import { isMobile } from '../lib/isMobile';

class MyApp extends App<{ isMobile: boolean }> {

  /*
    This allows us to add our own properties to every page props. Here we are adding 
    isMobile and firstGridItem

    This says that if our page component Component has the getInitialProps method, then we will create a new object with Object.assign (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) that contains parameters from the pageProps object and props returned by await Component.getInitialProps(ctx). In other words, if you use the getInitialProps method on, say, the Index page, whatever page's props you got from that method on the page will be combined with pageProps props (isMobile and firstGridItem).
  */
  public static async getInitialProps({ Component, ctx }) {
    const pageProps = { isMobile: isMobile({ req: ctx.req }), firstGridItem: true };

    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(ctx));
    }

    console.log('[app] pageProps', pageProps);

    return { pageProps };
  }

  public componentDidMount() {
    // Remove the server-side injected styles.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
  
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={false ? themeDark : themeLight}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp;

import * as React from "react";
import Head from "next/head";
import NextApp from "next/app";
import "../styles/main.scss";

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          {/* Viewport header for Bootstrap */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

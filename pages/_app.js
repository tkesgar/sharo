import React from 'react'
import Head from 'next/head'
import NextApp, {Container as NextContainer} from 'next/app'

import '../styles/main' // eslint-disable-line import/no-unassigned-import

export default class App extends NextApp {
  render() {
    const {Component, pageProps} = this.props

    return (
      <>
        <Head>
          {/* Viewport header for Bootstrap */}
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        </Head>
        <NextContainer>
          <Component {...pageProps}/>
        </NextContainer>
      </>
    )
  }
}

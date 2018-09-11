import Document, {Head, Main, NextScript} from 'next/document'
import React from 'react'

// eslint-disable-next-line import/no-unassigned-import
import '../styles/main.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="/_next/static/style.css"/>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    )
  }
}

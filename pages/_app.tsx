import * as React from "react";
import { AppProps } from "next/app";
import "../styles/main.scss";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

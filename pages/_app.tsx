import { AppProps } from "next/app";
import * as React from "react";
import "../styles/main.scss";

export default function App({
  Component,
  pageProps,
}: AppProps): React.ReactElement {
  return <Component {...pageProps} />;
}

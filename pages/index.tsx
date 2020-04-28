import * as React from "react";

export default function IndexPage(): JSX.Element {
  return (
    <div
      style={{
        maxWidth: "40rem",
        margin: "2rem auto 0",
        padding: "2rem",
        background: "#fff",
      }}
    >
      <h1>It works!</h1>
      <p>
        Application environment: <code>{process.env.APP_ENV}</code>
      </p>
      <p>
        Node environment: <code>{process.env.NODE_ENV}</code>
      </p>
    </div>
  );
}

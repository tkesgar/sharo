import * as React from "react";
import RepoCard from "../components/RepoCard";

export default function IndexPage(): JSX.Element {
  return (
    <div
      style={{
        maxWidth: "40rem",
        margin: "2rem auto 0",
      }}
    >
      <h1 style={{ textAlign: "center" }}>It works!</h1>
      <p>
        The component <code>RepoCard</code> below is a simple dynamic component
        to provide something that can be tested. You can run{" "}
        <code>npm test</code> to run the component test (using Jest) and{" "}
        <code>npm run cypress -- run</code> to run the functional test (using
        Cypress).
      </p>
      <RepoCard
        owner="tkesgar"
        repo="sharo"
        style={{ width: "20rem", margin: "0 auto" }}
      />
      <p>
        You can safely remove this page and <code>components/RepoCard</code>,
        then start building your website. You can also visit{" "}
        <a href="https://github.com/tkesgar/sharo#README">sharo readme</a> for
        more details about what is included in sharo.
      </p>
    </div>
  );
}

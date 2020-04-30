import * as React from "react";
import styles from "./styles.module.scss";

interface ApiRepoData {
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  open_issues: number;
  stargazers_count: number;
}

interface RepoCardProps extends React.ComponentProps<"div"> {
  owner: string;
  repo: string;
}

export default function RepoCard({
  owner,
  repo,
  ...restProps
}: RepoCardProps): JSX.Element {
  const [apiRepoData, setApiRepoData] = React.useState<ApiRepoData>(null);
  const [error, setError] = React.useState<string>(null);
  React.useEffect(() => {
    const abortController = new AbortController();

    (async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}`,
          {
            signal: abortController.signal,
          }
        );

        const data = await response.json();
        setApiRepoData(data);
      } catch (error) {
        if (abortController.signal.aborted) {
          return;
        }

        throw error;
      }
    })().catch((error) => setError(error.message));

    return (): void => {
      abortController.abort();
    };
  }, []);

  if (error) {
    return (
      <div className={styles.RepoCard} {...restProps}>
        <div style={{ textAlign: "center" }} data-testid="error">
          {error}
        </div>
      </div>
    );
  }

  if (!apiRepoData) {
    return (
      <div className={styles.RepoCard} {...restProps}>
        <div style={{ textAlign: "center" }} data-testid="loading">
          Loading...
        </div>
      </div>
    );
  }

  const {
    name,
    full_name: fullName,
    description,
    html_url: url,
    open_issues: issues,
    stargazers_count: stars,
  } = apiRepoData;

  return (
    <div className={styles.RepoCard} {...restProps}>
      <h2 data-cy="repo-title" data-testid="title">
        {name}
      </h2>
      <p data-testid="description">{description}</p>
      <dl>
        <dt>Issues</dt>
        <dd data-testid="issues">{issues}</dd>
        <dt>Stars</dt>
        <dd data-testid="stars">{stars}</dd>
        <dt>View on GitHub</dt>
        <dd>
          <a href={url} data-cy="repo-url" data-testid="url">
            {fullName}
          </a>
        </dd>
      </dl>
    </div>
  );
}

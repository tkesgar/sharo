/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-explicit-any */
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import RepoCard from ".";

it("should show info from API data", async () => {
  window.fetch = jest.fn(async () => {
    return {
      async json(): Promise<unknown> {
        return {
          name: "sharo",
          full_name: "tkesgar/sharo",
          description: "Next.js boilerplate",
          html_url: "https://github.com/tkesgar/sharo",
          open_issues: 10,
          stargazers_count: 123,
        };
      },
    };
  }) as any;

  await act(async () => {
    render(<RepoCard owner="tkesgar" repo="sharo" />);
    expect(screen.getByTestId("loading").innerHTML).toBe("Loading...");
  });

  expect(screen.getByTestId("title").innerHTML).toBe("sharo");
  expect(screen.getByTestId("description").innerHTML).toBe(
    "Next.js boilerplate"
  );
  expect(screen.getByTestId("issues").innerHTML).toBe("10");
  expect(screen.getByTestId("stars").innerHTML).toBe("123");
  expect(screen.getByTestId("url").getAttribute("href")).toBe(
    "https://github.com/tkesgar/sharo"
  );
  expect(screen.getByTestId("url").innerHTML).toBe("tkesgar/sharo");
});

it("should show error message if the fetch fails", async () => {
  window.fetch = jest.fn(async () => {
    throw new Error("API request failed");
  }) as any;

  await act(async () => {
    render(<RepoCard owner="tkesgar" repo="sharo" />);
  });

  expect(screen.getByTestId("error").innerHTML).toBe("API request failed");
});

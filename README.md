# sharo

sharo is a Next.js boilerplate that provides a number of tools to get things by.

**What sharo is:** a minimal template with preconfigured tools, from linter to
test framework.

**What sharo is not:** a full-fledged, battery-included framework a la Rails.

You are free to use this boilerplate directly, use the smaller utility packages,
or use this boilerplate as reference.

## Rationale

### Reasons to use

- You are Ted Kesgar.
- You want a minimal and clean starting point without all the goodies from other
  Next.js-based framework.
- You want to use the tools interface as-is, without any magic tricks.
- You do not want to roll out your custom tools configuration.

### Reasons not to use

- You are not Ted Kesgar.
- You prefer less coding in favor of a more complete framework.
- You want the tools to be wrapped in a cleaner interface.
- You want to setup and manage every tools on your own.

## Guide

### Visual Studio Code settings.json

A `settings.json` file for VS Code is included to enable automatic fixing files
on save and on paste.

You may need to install the following plugins:

- `dbaeumer.vscode-eslint`
- `stylelint.vscode-stylelint`
- `esbenp.prettier-vscode`

### TypeScript

TypeScript is included with the default `tsconfig.json` from Next.js.

### ESLint

ESLint is included with the custom extends `eslint-config-sharo-scripts`.

### stylelint

stylelint is included with the custom preset `stylelint-config-sharo`, which
includes the recommended presets for CSS and SCSS/SASS files.

### Prettier

Prettier is included with default configurations, except for enabling
`proseWrap` to format Markdown files.

For JS and TS files, Prettier is integrated with ESLint via
`eslint-plugin-prettier`.

> `lint-staged` is configured to process _all_ staged files into Prettier. If
> you stage files unsupported by Prettier, the commit will fail. To fix it,
> ignore the unsupported files by adding it into `.prettierignore`. See
> [Questions](#questions) below for more information.

```json
{
  "*.{json,md,yaml,yml}": ["prettier --write"]
}
```

### Babel

sharo uses a custom Babel preset `@tkesgar/sharo-babel`.

All it does is to add a plugin `styled-jsx-plugin-postcss` into the Babel
pipeline.

### PostCSS

All stylesheet files will be processed with `PostCSS` using a single plugin
`postcss-preset-env`.

`styled-jsx` will also get processed as well using the Babel plugin included in
`@tkesgar/sharo-babel`.

### Jest

You can use Jest to create and run component tests using a simulated browser
environment.

TypeScript files are processed using `ts-jest`, and you can use
`@testing-library/react` to help with testing React components.

### Cypress

You can use Cypress to create and run functional tests using an actual browser
(instead of Jest tests).

`eslint-config-sharo-scripts` has `eslint-plugin-cypress` and `chai-friendly`
included to lint the test files.

> Note that Cypress tests should be written in JavaScript. Add the reference
> type tag to make the test file understand Cypress globals and functions:

```ts
/// <reference types="cypress" />
```

## Questions

### Where can I put environment-specific variables?

You can put environment variables in `.env*` and `.env*.local` (available since
Next.js 9.4).

### Why is everything is JSON? Why don't you put it in a `config` folder to make it clean?

- I want to keep `package.json` clean.
- Having each tools configured in its own file makes it easy to track the
  configuration changes in git.
- Most tools automatically detects their configuration file. I do not like to
  put `-c config/tool.config.js` on every command.
- Having everything in JSON means Prettier will be able to format it.

> For Babel, last time I checked Next.js only detects `.babelrc`. It won't work
> if you put the configuration in `package.json`.

### Why do you put `@types/*` in `dependencies`, not `devDependencies`?

Because they are required for `next build`, and I want to keep `devDependencies`
only for development tools. This way I can do `npm ci --production` in build
environments or servers.

### Why are there `tsconfig.json` and `tsconfig.jest.json`?

For `ts-jest`, we need TypeScript to compile JSX to React render calls
(`jsx: react`). However, Next.js will complain if I change it to `preserve` in
`tsconfig.json`; it will replace the file with Next.js defaults. So I copied
`tsconfig.json` and make `ts-jest` use that copy.

You should keep them in sync to ensure that your components are tested in
similar environment with actual browser environment. The only difference should
only `jsx`; everything else should be same.

### My commit is blocked by `lint-staged`; it appears to be some error with Prettier.

`lint-staged` is configured such that _all_ committed files will be passed to
Prettier:

```json
{
  "*": ["prettier --write"]
}
```

While Prettier supports various files from Markdown to YAML, it does not support
some files like `.gitignore` and even `.prettierignore`. It is possible that
your commit touches these unsupported files.

To fix it, simply exclude the unsupported files by adding it into
`.prettierignore`.

## Contributing

Feel free to submit issues and pull requests.

## License

Licensed under [MIT License][license].

[license]: https://github.com/tkesgar/sharo/blob/master/LICENSE

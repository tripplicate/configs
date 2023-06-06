# Configs

Monorepository with configurations for eslint, stylelint and others

## Configurations

### Eslint

Include [configurations](./packages/eslint) for:

- Json, yaml, toml, markdown
- Javascript
- Typescript
- React
- Vue

#### Usage

Install the dependencies you need

````sh
npm install -D @trpl/eslint-config-{javascript,typescript,react,vue,documents}
````

> ⚠️ For @trpl/eslint-config-typescript you don't need to install @trpl/eslint-config-javascript, because this package already includes it

> ⚠️ For @trpl/eslint-config-{react,vue} you don't need to install @trpl/eslint-config-typescript, because these packages enable typescript if `typescript` dependency exists in package.json 

Configure your eslintrc configuration file (.eslintrc.cjs) to extend these packages:

````json
{
  "extends": ["@trpl/javascript", "@trpl/documents"]
}
````

Configure your VSCode settings:

````json
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": false,
    "source.fixAll.eslint": true,
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact",

    // ⚠️ Enable this only if you use @trpl/eslint-config-documents otherwise the editor will throw errors in these files

    // "markdown",
    // "json",
    // "jsonc",
    // "json5"
  ],
````
### Stylelint

Basic rules for style linting

- Order with [stylelint-config-clean-order]()
- Formatting rules without prettier

#### Usage

Install dependencies

````sh
npm install -D stylelint @trpl/stylelint-config-default
````

Configure your stylelint configuration file (.stylelintrc.json) to extend this package:

> ⚠️ You don't need to install stylelint-order or add stylelint-order to "plugins" since this package already does that for you.

````json
{
  "extends": ["@trpl/stylelint-config-default"]
}
````

Configure your VSCode settings:

````json
// VSCode settings, use only what you neeed

"stylelint.validate": [
    "css",
    "postcss",
    "scss",
    "less",
    "vue"
]
````

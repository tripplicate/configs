# :rocket: Configs

## Why use these configs ?

- Include eslint configuration for:
  - :ocean: Typescript
  - :herb: Vue/Nuxt with version auto detection
  - :page_with_curl: Json, Yaml, Markdown
  - Formatting without prettier via [stylistic][]

- Include stylelint configurations for [sass][site-link-sass] and [CSS Modules][site-link-css-modules]

## Packages

- [Eslint standard config](./packages/eslint/standard)
- [Eslint flat config (coming soon)](./packages/eslint/flat)
- [Stylelint standard](./packages/stylelint/standard)
- [Stylelint sass](./packages/stylelint/scss)

## Usage

### Eslint

#### Install package

```sh
# via pnpm
pnpm add -D @trpl/eslint-config

# via npm
npm install -D @trpl/eslint-config

# via yarn
yarn add -D @trpl/eslint-config
```

#### VSCode settings

Install [VSCode Eslint extension][site-link-eslint] and then add the following settings to your `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

### Stylelint

#### Install packages

If you are not using sass or css-modules

```sh
# via pnpm
pnpm add -D @trpl/stylelint-config-standard

# via npm
npm add -D @trpl/stylelint-config-standard

# via yarn
yarn add -D @trpl/stylelint-config-standard
```

If you are using only scss

```sh
# via pnpm
pnpm add -D @trpl/stylelint-config-scss

# via npm
npm add -D @trpl/stylelint-config-scss

# via yarn
yarn add -D @trpl/stylelint-config-scss
```

## License

[MIT]("./LICENSE") License &copy; 2022-PRESENT [Danil Sergeev](https://github.com/tripplicate)


[site-link-css-modules]: https://github.com/css-modules/css-modules
[site-link-sass]: https://sass-lang.com/
[site-link-stylistic]: https://eslint.style/
[site-link-eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

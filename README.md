# :sunny: Collection of configurations
![Eslint config standard](https://img.shields.io/npm/v/@trpl/eslint-config?color=444&label=eslint-config)
![Stylelint config standard](https://img.shields.io/npm/v/@trpl/stylelint-config-standard?color=444&label=stylelint-config-standard)

This project includes configurations for [Eslint][site-link-eslint] and [Stylelint][site-link-stylelint] and will be update in the future, you may be interested in these configurations if you want:


- :ocean: Modern best practices for Typescript, Vue and Styles include Sass, CSS Modules
- :herb: Different style guides for Vue / Nuxt based on version with auto detection out-of-box
- :nail_care: Flexible formatting rules with auto fix for Json, Yaml, Markdown

## Packages

### Eslint

> **NOTE** Since v2.0.0 version eslint configuration will be rewritten to the new [Eslint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), but you can still use standard one while staying on v1.0.0

#### Install

```sh
# pnpm
pnpm add -D @trpl/eslint-config

# yarn
yarn add -D @trpl/eslint-config

# npm
npm add -D @trpl/eslint-config
```

#### VSCode settings

Install [Eslint][site-link-eslint-extension] extension and add following rules in your `settings.json`

> **NOTE:** Set `eslint.experimental.useFlatConfig` to true if you want to use Flat config

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "never"
  },
  "editor.formatOnSave": false,
  "eslint.experimental.useFlatConfig": false,
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

> **NOTE:** Configurations for CSS Modules is coming soon

#### Install

If you only want to use [standard rules](./packages/stylelint/standard) without Sass or CSS Modules

```sh
# pnpm
pnpm add -D @trpl/stylelint-config-standard

# yarn
yarn add -D @trpl/stylelint-config-standard

# npm
npm add -D @trpl/stylelint-config-standard
```

If you want to use [Sass](./packages/stylelint/scss)

```sh
# pnpm
pnpm add -D @trpl/stylelint-config-scss

# yarn
yarn add -D @trpl/stylelint-config-scss

# npm
npm add -D @trpl/stylelint-config-scss
```

#### VSCode settings

Install [Stylelint][site-link-stylelint-extension] extension and add following rules in your `settings.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  },
  "stylelint.validate": [
    "css",
    "sass",
    "scss",
    "postcss",
    "vue"
  ]
}
```

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [Danil Sergeev](https://github.com/tripplicate)


[site-link-css-modules]: https://github.com/css-modules/css-modules
[site-link-sass]: https://sass-lang.com/
[site-link-stylistic]: https://eslint.style/
[site-link-eslint]: https://eslint.org/
[site-link-eslint-extension]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[site-link-stylelint]: https://stylelint.io/
[site-link-stylelint-extension]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

# @trpl/eslint-config

## Getting Started

### VSCode settings

````json
{
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
    "markdown",
    "json",
    "jsonc",
    "json5"
  ],
}
````

### Use packages in `.eslintrc`

#### Javascript 

````json
{
  "extends": ["@trpl/javascript"]
}
````

#### Typescript 

> You don't need a `@trpl/javascript` package, because `@trpl/typescript` include it

````json
{
  "extends": ["@trpl/typescript"]
}
````

#### Documents 

##### Only documents

````json
{
  "extends": ["@trpl/documents"]
}
````

##### With other eslint rulesets

````json
{
  "extends": ["@trpl/javascript", "@trpl/documents"]
}
````
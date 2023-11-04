import { Linter } from "eslint"

import { default as jsoncPlugin } from "eslint-plugin-jsonc"
import { default as jsoncParser } from "jsonc-eslint-parser"

import { GLOB_ALL_JSON } from "../../common/globs"

export const json = (): Linter.FlatConfig[] => {
  return [
    {
      plugins: {
        jsonc: jsoncPlugin as any
      },
    },
    {
      files: [GLOB_ALL_JSON],
      languageOptions: {
        parser: jsoncParser as any,
      },
      rules: {
        'jsonc/no-bigint-literals': ['error'],
        'jsonc/no-binary-expression': ['error'],
        'jsonc/no-binary-numeric-literals': ['error'],
        'jsonc/no-dupe-keys': ['error'],
        'jsonc/no-escape-sequence-in-identifier': ['error'],
        'jsonc/no-floating-decimal': ['error'],
        'jsonc/no-hexadecimal-numeric-literals': ['error'],
        'jsonc/no-infinity': ['error'],
        'jsonc/no-multi-str': ['error'],
        'jsonc/no-nan': ['error'],
        'jsonc/no-number-props': ['error'],
        'jsonc/no-numeric-separators': ['error'],
        'jsonc/no-octal': ['error'],
        'jsonc/no-octal-escape': ['error'],
        'jsonc/no-octal-numeric-literals': ['error'],
        'jsonc/no-parenthesized': ['error'],
        'jsonc/no-plus-sign': ['error'],
        'jsonc/no-regexp-literals': ['error'],
        'jsonc/no-sparse-arrays': ['error'],
        'jsonc/no-template-literals': ['error'],
        'jsonc/no-undefined-value': ['error'],
        'jsonc/no-unicode-codepoint-escapes': ['error'],
        'jsonc/no-useless-escape': ['error'],
        'jsonc/space-unary-ops': ['error'],
        'jsonc/valid-json-number': ['error'],
        'jsonc/vue-custom-block/no-parsing-error': ['error'],

        // Format
        'jsonc/array-bracket-spacing': ['error', 'never'],
        'jsonc/comma-dangle': ['error', 'never'],
        'jsonc/comma-style': ['error', 'last'],
        'jsonc/indent': ['error', 2],
        'jsonc/key-spacing': ['error', { afterColon: true, beforeColon: false }],
        'jsonc/object-curly-newline': ['error', { consistent: true, multiline: true }],
        'jsonc/object-curly-spacing': ['error', 'always'],
        'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
        'jsonc/quote-props': 'error',
        'jsonc/quotes': 'error',
      }
    },
    {
      files: ["**/package.json"],
      languageOptions: {
        parser: jsoncParser as any,
      },
      rules: {
        'jsonc/sort-keys': [
          'error',
          {
            pathPattern: '^$',
            order: [
              'name',
              'version',
              'description',
              'license',
              'author',
              'repository',
              'homepage',
              'contributors',
              'funding',
              'bugs',
              'keywords',
              'type',
              'private',
              'packageManager',
              'publishConfig',
              'workspaces',
              'sideEffects',
              'browser',
              'engines',
              'bin',
              'main',
              'types',
              'typesVersions',
              'files',
              'import',
              'directories',
              'man',
              'scripts',
              "bundledDependencies",
              "extensionDependencies",
              "optionalDependencies",
              "peerDependencies",
              "dependencies",
              "devDependencies",
            ],
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { "type": "asc" }
          }
        ]
      }
    }
  ]
}
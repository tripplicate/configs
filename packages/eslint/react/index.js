// eslint-disable-next-line import/no-unresolved
let { isPackageExists, } = require('local-pkg');

let isTypescriptExist = isPackageExists('typescript');

module.exports = {
  extends: [
    'plugin:react/recommended', 'plugin:react-hooks/recommended', isTypescriptExist ? '@trpl/typescript' : '@trpl/javascript'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {

    'react/jsx-indent': [
      2, 2, { indentLogicalExpressions: true, }
    ],
    'react/jsx-pascal-case': ['error', { allowNamespace: true, allowLeadingUnderscore: true, }],
    'react/jsx-no-useless-fragment': ['error'],
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always', }],
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'], }],
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-one-expression-per-line': ['error', { allow: 'single-child', }],

    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-indent-props': ['error', { indentMode: 2, ignoreTernaryOperator: true, }],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-max-props-per-line': ['error'],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never', }],
    'react/jsx-closing-bracket-location': [
      'error', {
        nonEmpty: 'after-props',
        selfClosing: 'after-props',
      }
    ],
    'react/jsx-space-before-closing': ['error', 'always'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-tag-spacing': [
      'error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }
    ],

    'react/function-component-definition': [
      'error', {
        namedComponents: ['function-declaration', 'function-expression'],
        unnamedComponents: 'function-expression',
      }
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-namespace': 'error',
    'react/prefer-exact-props': 'error',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-unused-class-component-methods': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-children-prop': 'error',
    'react/no-render-return-value': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-array-index-key': 'error',
    'react/require-default-props': [
      'error', {
        forbidDefaultForRequired: true,
      }
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-access-state-in-setstate': 'error',
    'react/button-has-type': [
      'error', {
        button: true,
        submit: true,
        reset: false,
      }
    ],
    'react/sort-comp': [
      'error', {
        order: [
          'static-variables',
          'static-methods',
          'instance-variables',
          'lifecycle',
          '/^handle.+$/',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'instance-methods',
          'everything-else',
          'rendering'
        ],
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'defaultProps',
            'constructor',
            'getDefaultProps',
            'getInitialState',
            'state',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          rendering: [
            '/^render.+$/',
            'render'
          ],
        },
      }
    ],

    'react/jsx-wrap-multilines': [
      'error', {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      }
    ],
  },
};

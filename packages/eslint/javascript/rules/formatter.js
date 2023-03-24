module.exports = {
  rules: {
    indent: [
      'error', 2, {
        SwitchCase          : 1,
        VariableDeclarator  : 1,
        outerIIFEBody       : 1,
        FunctionDeclaration : {
          parameters : 1,
          body       : 1,
        },
        FunctionExpression: {
          parameters : 1,
          body       : 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression        : 1,
        ObjectExpression       : 1,
        ImportDeclaration      : 1,
        flatTernaryExpressions : false,
        ignoredNodes           : [
          'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'
        ],
        ignoreComments: false,
      }
    ],
    'max-len': [
      'error', 120, 2, {
        ignoreUrls             : true,
        ignoreComments         : false,
        ignoreRegExpLiterals   : true,
        ignoreStrings          : true,
        ignoreTemplateLiterals : true,
      }
    ],
    quotes: [
      'error', 'single', { avoidEscape: true, }
    ],
    'quote-props': [
      'error', 'as-needed', { keywords: false, unnecessary: true, numbers: false, }
    ],
    'jsx-quotes': [
      'error', 'prefer-single'
    ],
    semi: [
      'error', 'always'
    ],
    'semi-spacing': [
      'error', { before: false, after: true, }
    ],
    'semi-style': [
      'error', 'last'
    ],
    'array-bracket-newline': [
      'error', 'always'
    ],
    'array-element-newline': [
      'error', 'never'
    ],
    'array-bracket-spacing': [
      'error', 'never', { singleValue: true, }
    ],
    'arrow-parens': [
      'error', 'as-needed'
    ],
    'arrow-spacing': [
      'error', { before: true, after: true, }
    ],
    'block-spacing': [
      'error', 'always'
    ],
    'brace-style': [
      'error', '1tbs'
    ],
    'comma-dangle': [
      'error', {
        arrays    : 'never',
        objects   : 'always',
        imports   : 'always',
        exports   : 'always',
        functions : 'never',
      }
    ],
    'comma-spacing': [
      'error', { before: false, after: true, }
    ],
    'comma-style': [
      'error', 'last'
    ],
    'computed-property-spacing': [
      'error', 'never'
    ],
    'dot-location': [
      'error', 'object'
    ],
    'eol-last': [
      'error', 'always'
    ],
    'func-call-spacing': [
      'error', 'never'
    ],
    'function-call-argument-newline': [
      'error', 'consistent'
    ],
    'function-paren-newline': [
      'error', 'never'
    ],
    'implicit-arrow-linebreak': [
      'error', 'beside'
    ],
    'generator-star-spacing': [
      'error', { before: true, after: false, }
    ],
    'key-spacing': [
      'error', {
        multiLine: {
          beforeColon : false,
          afterColon  : true,
        },
        align: {
          beforeColon : true,
          afterColon  : true,
          on          : 'colon',
        },
      }
    ],
    'keyword-spacing': [
      'error', {
        overrides: {
          if     : { after: false, },
          for    : { after: false, },
          while  : { after: false, },
          static : { after: false, },
          as     : { after: false, },
        },
      }
    ],
    'line-comment-position': [
      'error', { position: 'above', }
    ],
    'linebreak-style': [
      'error', 'unix'
    ],
    'lines-around-comment': [
      'error', { afterBlockComment: true, }
    ],
    'lines-between-class-members': [
      'error', 'always'
    ],
    'max-statements-per-line': [
      'error', { max: 1, }
    ],
    'new-parens': [
      'error'
    ],
    'newline-per-chained-call': [
      'error', { ignoreChainWithDepth: 4, }
    ],
    'no-extra-parens': [
      'error'
    ],
    'no-multiple-empty-lines': [
      'error', { max: 1, maxBOF: 0, maxEOF: 0, }
    ],
    'no-multi-spaces': [
      'error', { ignoreEOLComments: false, }
    ],
    'no-tabs': [
      'error'
    ],
    'no-trailing-spaces': [
      'error', {
        skipBlankLines : false,
        ignoreComments : false,
      }
    ],
    'no-whitespace-before-property': [
      'error'
    ],
    'nonblock-statement-body-position': [
      'error', 'beside'
    ],
    'object-curly-newline': [
      'error', {
        ObjectExpression  : { minProperties: 4, multiline: true, consistent: true, },
        ObjectPattern     : { minProperties: 4, multiline: true, consistent: true, },
        ImportDeclaration : { minProperties: 4, multiline: true, consistent: true, },
        ExportDeclaration : { minProperties: 4, multiline: true, consistent: true, },
      }
    ],
    'object-curly-spacing': [
      'error', 'always'
    ],
    'object-property-newline': [
      'error', {
        allowAllPropertiesOnSameLine: true,
      }
    ],
    'space-before-blocks'         : 'error',
    'space-before-function-paren' : [
      'error', {
        anonymous  : 'always',
        named      : 'never',
        asyncArrow : 'always',
      }
    ],
    'space-in-parens': [
      'error', 'never'
    ],
    'space-infix-ops' : 'error',
    'space-unary-ops' : [
      'error', {
        words     : true,
        nonwords  : false,
        overrides : {
        },
      }
    ],
    'spaced-comment': [
      'error', 'always', {
        line: {
          exceptions: [
            '-', '+'
          ],
          markers: [
            '=', '!', '/'
          ],
        },
        block: {
          exceptions: [
            '-', '+'
          ],
          markers: [
            '=', '!', ':', '::'
          ],
          balanced: true,
        },
      }
    ],
    'switch-colon-spacing': [
      'error', { after: true, before: false, }
    ],
    'template-curly-spacing': [
      'error', 'always'
    ],
    'template-tag-spacing': [
      'error', 'never'
    ],
    'unicode-bom': [
      'error', 'never'
    ],
    'wrap-regex': [
      'off'
    ],
    'multiline-comment-style': [
      'error', 'separate-lines', { checkJSDoc: true, }
    ],
    'one-var-declaration-per-line': [
      'error', 'always'
    ],
    'arrow-body-style': [
      'error', 'as-needed'
    ],
    curly: [
      'error', 'multi', 'consistent'
    ],
  },
};

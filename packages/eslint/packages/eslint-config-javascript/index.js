module.exports = {
  extends : ['@trpl/common'],
  rules   : {
    // variables
    'no-unused-vars'               : ['off'],
    'no-var'                       : ['warn'],
    'no-use-before-define'         : ['error'],
    'one-var-declaration-per-line' : ['error', 'always'],
    'no-floating-decimal'          : ['error'],
    'no-implicit-globals'          : 'off',
    'no-implicit-coercion'         : [
      'off',
      {
        boolean : false,
        number  : true,
        string  : true,
      },
    ],
    'no-global-assign'      : ['error', { exceptions: [] }],
    // arrays
    'array-bracket-spacing' : ['error', 'never'],
    'array-bracket-newline' : [
      'error',
      {
        multiline : true,
        minItems  : 8,
      },
    ],
    'array-element-newline' : [
      'error',
      {
        multiline : true,
        minItems  : 8,
      },
    ],
    'array-callback-return'           : ['error'],
    // objects
    'no-extend-native'                : 'error',
    'no-extra-bind'                   : 'error',
    'consistent-this'                 : ['error', 'self'],
    'object-shorthand'                : ['error', 'always'],
    // classes
    'no-unused-private-class-members' : ['error'],
    'class-methods-use-this'          : ['warn'],
    'accessor-pairs'                  : ['error'],
    // functions
    'arrow-body-style'                : ['error', 'as-needed'],
    'func-call-spacing'               : ['error', 'never'],
    'max-params'                      : ['warn', 3],
  },
}

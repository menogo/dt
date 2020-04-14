module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    globals: {
        // app: 'app',
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'], // '@vue/prettier'
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'indent': ['error', 4], // 强制使用一致的缩进
        'max-len': ['error', 140, 2, { ignoreUrls: true }], // 强制行的最大长度

        'no-param-reassign': 'off', // 禁止对函数参数再赋值
        'no-restricted-syntax': 'off', // 禁止使用特定的语法（比如你可以禁止使用 try...catch)
        'no-prototype-builtins': 'off', // 禁止直接使用 Object.prototypes 的内置属性
        'no-plusplus': 'off', // 禁止使用一元操作符 ++ 和 --

        'arrow-parens': 'off', // 要求箭头函数的参数使用圆括号 Incompatible with prettier
        'object-curly-newline': 'off', // // 该规则强制花括号内使用换行符的一致性 Incompatible with prettier
        'no-mixed-operators': 'off', // 禁止混合使用不同的操作符 Incompatible with prettier
        'function-paren-newline': 'off', // 强制在函数括号内使用一致的换行 Incompatible with prettier
        'space-before-function-paren': 'off', // 要求或禁止函数圆括号之前有一个空格 Incompatible with prettier

        'arrow-body-style': 'off', // 要求箭头函数体使用大括号，当大括号是可以省略的，强制不使用它们 (默认)
        'quote-props': ['error', 'consistent'], // 要求对象字面量属性名称使用引号
    },
};

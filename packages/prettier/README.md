# Install

```shell
npm install -D @anijs/prettier
yarn add -D @niajs/prettier
pnpm add -D @anijs/prettier
```

```javascript
// .prettierrc.js

const prettierConfig = require('@anijs/prettier')
module.exports = {
  ...prettierConfig
}
```

```javascript
module.exports = {
  printWidth: 70,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  bracketSameLine: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  endOfLine: 'lf'
}
```

# Hello

```js
let answer = 6 * 7;

console.log(answer);
```

Here is some regular Markdown text that will be ignored.

```js
// This also gets linted
/* eslint quotes: [2, "double"] */

const a = "aasd";

const fn = () => {
};

function hello() {
  console.log("Hello, world!");
}

hello();
```

```jsx
// This can be linted too if you add `.jsx` files to `overrides` in ESLint v7
// or pass `--ext jsx` in ESLint v6.
let div = <div className={'jsx'} />;
```




## Jest and ES6 Modules

ECMAScript modules, also known as ESM, is the official standard format to package JavaScript, and fortunately Node.js supports.

```JS
// CommonJS:

const foo = require('foo')

// ES6 Modules

import foo from 'foo'
```

> To add support ESM for Node.js, you have two alternatives:

- build your library into ESM Compatible modules with the extension ".mjs"
- set "type": "module" in your package.json file

> To allow Jest to support ES6 Modules

Even though Node supports ES6 Modules, Jest needs to be configured to use ES6 Modules.
You have two options to allow support with Jest:

- Add `NODE_OPTIONS` to the test script in `package.json`

```
"scripts": {
  "test": "cross-env NODE_OPTIONS=--experimental-vm-modules jest"
}
```

- Install Babel pacakges

```npm i @babel/core @babel/node @babel/preset-env```

Add a .babelrc file:

```
{
    "presets": [
        "@babel/preset-env"
    ]
}
```


[Jest Documentation - ES6 Modules](https://jestjs.io/docs/ecmascript-modules)

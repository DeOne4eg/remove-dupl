# Removing duplicates from arrays and files

[![npm version](https://img.shields.io/npm/v/remove-dupl)](https://www.npmjs.com/package/remove-dupl)
[![license](https://img.shields.io/npm/l/remove-dupl)](https://www.npmjs.com/package/remove-dupl)

## Instalation

NPM:

```bash
npm i remove-dupl --save
```

Yarn:

```bash
yarn add remove-dupl
```

## Usage

```javascript
const { removeFromArray, removeFromFile } = require("remove-dupl");

const newArr = removeFromArray([1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 0]);
const count = removeFromFile("PATH_TO_FILE", "PATH_TO_NEW_FILE");
```

If the path to the new file is empty, it will overwrite the original file.

## License

MIT © Joyent, Inc. and other Node contributors
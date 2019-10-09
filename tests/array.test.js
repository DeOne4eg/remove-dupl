const assert = require("assert");
const { removeFromArray } = require("../index");

const actual = removeFromArray([1, 2, 3, 4, 3, 2, 1, 0]);
assert.deepEqual(actual, [1, 2, 3, 4, 0], "Test failed");

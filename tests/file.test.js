const assert = require("assert");
const fs = require("fs");
const { removeFromFile } = require("../index");

const filename = "duplicates.txt";
fs.writeFileSync(filename, "1\n");
fs.appendFileSync(filename, "2\n");
fs.appendFileSync(filename, "3\n");
fs.appendFileSync(filename, "4\n");
fs.appendFileSync(filename, "5\n");
fs.appendFileSync(filename, "4\n");
fs.appendFileSync(filename, "3\n");
fs.appendFileSync(filename, "2\n");
fs.appendFileSync(filename, "0\n");

const actual = removeFromFile(filename);
fs.unlinkSync(filename);
assert.deepEqual(actual, 3, "Test failed");

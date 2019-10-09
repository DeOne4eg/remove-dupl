const fs = require("fs");

const removeFromArray = array => {
  if (typeof array !== "array" && typeof array !== "object")
    throw new Error("An array must be passed");

  var res = [];
  array.forEach(element => {
    if (!res.includes(element)) {
      res = [...res, element];
    }
  });

  return res;
};

const removeFromFile = (pathIn, pathOut) => {
  if (typeof pathIn !== "string")
    throw new Error("Specify the path to the file with a string");
  else if (typeof pathOut !== "string") pathOut = pathIn;

  if (!fs.existsSync(pathIn)) throw new Error("File not found");

  const content = fs.readFileSync(pathIn, "utf-8");
  const a = content.split("\n");

  arr = removeFromArray(a);

  fs.writeFileSync(pathOut, "");
  arr.forEach(element => {
    fs.appendFileSync(pathOut, element + "\n");
  });

  const data = fs.readFileSync(pathOut, "utf-8");
  fs.writeFileSync(pathOut, data.trim());

  return a.length - arr.length;
};

module.exports = {
  removeFromArray,
  removeFromFile
};

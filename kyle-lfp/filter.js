Array.prototype.myFilter = function (cb) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      output.push(this[i]);
    }
  }
  return output;
};

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const res = words.myFilter((word) => word.length > 6);
console.log(res, "polyfill");

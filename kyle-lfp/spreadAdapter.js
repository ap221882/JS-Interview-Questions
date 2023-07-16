//> called as apply by functional programmers

function spreadArgs(fn) {
  return (args) => {
    return fn(...args);
  };
}

function unspreadArgs(fn) {
  return (...args) => {
    return fn(args);
  };
}

function f(a, b, c, d) {
  return a + b + c + d;
}

var g = spreadArgs(f);

var result = g([2, 3, 4, 5]);

console.log(result);

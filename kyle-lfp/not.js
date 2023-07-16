//> called as complement is FN Programming
function not(fn) {
  return (...args) => {
    return !fn(...args);
  };
}

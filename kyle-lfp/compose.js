function pipe(...fns) {
  return function piped(v) {
    for (let fn of fns) {
      v = fn(v);
    }
    return v;
  };
}

function compose(...fns) {
  return pipe(...fns.reverse());
}

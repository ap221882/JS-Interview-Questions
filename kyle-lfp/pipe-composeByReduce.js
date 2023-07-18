const compose = (...args) => {
  return (v) => {
    return args.reduceRight((acc, curr) => curr(acc), v);
  };
};

const pipe = (...args) => {
  return (v) => {
    return args.reduce((acc, curr) => curr(acc), v);
  };
};

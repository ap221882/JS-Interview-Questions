const fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  console.log(arr);
};

const recursiveFib = (n) => {
  if (n <= 1) return n;
  return recursiveFib(n - 1) + recursiveFib(n - 2);
};

recursiveFib(2);

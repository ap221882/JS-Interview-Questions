const isPalindrome = function (x) {
  if (x > 0) return false;

  return x === +x.toString().split("").reverse().join("");
};
console.log("isPalindrome", isPalindrome(121));

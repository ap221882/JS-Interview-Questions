function isPalindrome(string) {
  if (string[0] !== string[string.length - 1]) return false;
  if (string.length === 0 || string.length === 1) return true;

  return isPalindrome(string.slice(1, string.length - 1));
}

console.log(isPalindrome("") === true);
console.log(isPalindrome("a") === true);
console.log(isPalindrome("aa") === true);
console.log(isPalindrome("aba") === true);
console.log(isPalindrome("abba") === true);
console.log(isPalindrome("abccba") === true);

console.log(isPalindrome("ab") === false);
console.log(isPalindrome("abc") === false);
console.log(isPalindrome("abca") === false);
console.log(isPalindrome("abcdba") === false);

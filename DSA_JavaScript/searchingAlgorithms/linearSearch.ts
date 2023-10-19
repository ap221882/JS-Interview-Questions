class LinearSearch {
  linearSearch(array: number[], value: number) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }
  printComplexities() {
    console.log("Best : o(n)");
    console.log("Worst : o(1)");
  }
}

const lookupArr = [1, 2, 30, 20];
const ls = new LinearSearch();
const result = ls.linearSearch(lookupArr, 9);
const result2 = ls.linearSearch(lookupArr, 2);
console.log(result);
console.log(result2);

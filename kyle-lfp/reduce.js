// Array.prototype.myReduce = function (reducer, initialValue) {
//   let accumulator = initialValue !== "undefined" ? initialValue : this[0];

//   for (let elem of this) {
//     console.log("this", this);
//     console.log("acc", accumulator);

//     accumulator = reducer(accumulator, elem);
//   }

//   return accumulator;
// };

Array.prototype.myReduce = function (reducer, initialValue) {
  const array = this;

  let accumulator = initialValue !== undefined ? initialValue : array[0];

  for (let elem of array) {
    accumulator = reducer(accumulator, elem);
  }
  return accumulator;
};

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial, "polyfill");

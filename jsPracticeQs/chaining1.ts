//~! compute amount
/**
computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .get();  
 */

//~! 143545000

class Computer {
  value: number;
  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  thousand(value: number) {
    this.value += value * 10 ** 3;
    return this;
  }

  lacs(value: number) {
    this.value += value * 10 ** 5;
    return this;
  }

  crore(value: number) {
    this.value += value * 10 ** 7;
    return this;
  }

  get() {
    return this.value;
  }
}

const computeAmount = () => new Computer();
const answer = computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousand(45)
  .crore(7)
  .get();

console.log(answer, "@@@answer");
console.log("correct??", answer === 143545000);

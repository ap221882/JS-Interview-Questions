function makeCounter() {
  var count = 0;
  return function () {
    console.log(++count);
  };
}

var counter = makeCounter();
counter();
counter();
counter();
counter();
counter();
counter();

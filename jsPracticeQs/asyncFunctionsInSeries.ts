//? Input: [asyncTask(3), asyncTask(1), asyncTask(2)];
//? Output: 3;
//? 1;
//? 2;
//@ts-ignore
async function apiFetch(index: number) {
  await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
    .then((response) => response.json())
    .then((json) => console.log(index));
}

const asyncTask = function (i: number) {
  console.log("running asyncTask", i);

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const promises = [
  () => asyncTask(3),
  () => asyncTask(1),
  () => asyncTask(7),
  () => asyncTask(2),
  () => asyncTask(5),
];

//# need to have a stack to call functions
const executeAsyncInSeries = async (
  callbackArray: Array<any>
): Promise<any> => {
  if (callbackArray.length <= 0) {
    return;
  }
  const value = await callbackArray[0]();
  console.log(value);

  return executeAsyncInSeries(callbackArray.slice(1));
};

// executeAsyncInSeries([() => apiFetch(1), () => apiFetch(2), () => apiFetch(3)]);
// executeAsyncInSeries(promises);

//# Second way
const executeAsyncInSeries2 = async (promises: any[]) => {
  for (let item of promises) {
    await item();
  }
};

executeAsyncInSeries2(promises);

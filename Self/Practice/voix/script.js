// let testOne = new Promise(
//     (resolveOuter) => {
//       resolveOuter(
//         new Promise((resolveInner) => {
//           setTimeout(resolveInner, 1000);
//         }),
//       );
//     }
//   );

let res = new Promise((res) => {
    res(() => {
        for (let i = 1; i <= 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
        }
    });
});

res.then((val) => val()).catch((err) => console.error(err));

// Solution 1: Using async/await with a delay function and sequential await in a for loop

function delayReturn(value, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

async function runLoop() {
  for (let i = 1; i <= 10; i++) {
    const result = await delayReturn(i, 1000 * i);
    console.log(result);
  }
}

runLoop();

// Solution 2: Using Promise chaining with reduce to run promises sequentially

function delayReturn(value, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

function runLoop() {
  const values = Array.from({ length: 10 }, (_, i) => i + 1);
  values.reduce((promise, value) => {
    return promise.then(() => delayReturn(value, 1000)).then(result => {
      console.log(result);
    });
  }, Promise.resolve());
}

runLoop();

// Solution 3: Using setInterval and a promise wrapper to emit values every second

function runLoop() {
  let i = 1;
  return new Promise(resolve => {
    const interval = setInterval(() => {
      console.log(i);
      if (i === 10) {
        clearInterval(interval);
        resolve();
      }
      i++;
    }, 1000);
  });
}

runLoop();

// Solution 4: Using async generator function with delay

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function* generateValues() {
  for (let i = 1; i <= 10; i++) {
    await delay(1000);
    yield i;
  }
}

async function runLoop() {
  for await (const value of generateValues()) {
    console.log(value);
  }
}

runLoop();
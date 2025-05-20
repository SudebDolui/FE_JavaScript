// Parse the input array safely
function getInputArray() {
  const input = document.getElementById("inputArray").value;
  try {
    // Use Function constructor to parse the JS notation safely (avoid eval)
    // Wrap in parentheses to parse expression
    const arr = Function('"use strict"; return (' + input + ")")();
    if (!Array.isArray(arr)) throw new Error("Input is not an array");
    return arr;
  } catch (e) {
    alert("Invalid input array syntax. Please enter a valid nested array.");
    throw e;
  }
}

// 1. Recursive approach
function flattenRecursive(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // Recursively concatenate flattened sub-arrays
      result = result.concat(flattenRecursive(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

// 2. Iterative approach using stack
function flattenIterative(arr) {
  let stack = [...arr]; // clone input
  let result = [];
  while (stack.length > 0) {
    let next = stack.pop();
    if (Array.isArray(next)) {
      // Spread elements back on stack to process them
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  // Because we pop from end, reverse result to maintain order
  return result.reverse();
}

// 3. Using Array.flat(Infinity)
function flattenWithFlat(arr) {
  // flat(depth) with Infinity to fully flatten nested arrays
  return arr.flat(Infinity);
}

// 4. Using reduce + recursion
function flattenReduce(arr) {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenReduce(val) : val),
    []
  );
}

// UI helpers for each button
function runRecursive() {
  const arr = getInputArray();
  const flatArr = flattenRecursive(arr);
  displayOutput(flatArr, "Recursive Method");
}

function runIterative() {
  const arr = getInputArray();
  const flatArr = flattenIterative(arr);
  displayOutput(flatArr, "Iterative Stack Method");
}

function runFlatMethod() {
  const arr = getInputArray();
  const flatArr = flattenWithFlat(arr);
  displayOutput(flatArr, "Array.flat() Method");
}

function runReduceRecursive() {
  const arr = getInputArray();
  const flatArr = flattenReduce(arr);
  displayOutput(flatArr, "Reduce with Recursion Method");
}

// Display the output neatly
function displayOutput(flatArray, methodName) {
  const outputEl = document.getElementById("output");
  outputEl.textContent =
    `${methodName} Output:\n` + JSON.stringify(flatArray, null, 2);
}

// Utility function to validate and parse input array (from string)
function parseInputArray(input) {
  try {
    const arr = Function('"use strict";return (' + input + ")")();
    if (!Array.isArray(arr)) throw new Error("Input is not an array.");
    return arr;
  } catch (e) {
    alert("Invalid input array syntax. Please enter a valid nested array.");
    throw e;
  }
}

// Abstract base class for flatten strategies
class FlattenStrategy {
  flatten(arr) {
    throw new Error("Method 'flatten()' must be implemented");
  }

  complexity() {
    return "Complexity information not provided for this method.";
  }
}

/**
 * RecursiveFlatten - classical recursive solution
 */
class RecursiveFlatten extends FlattenStrategy {
  flatten(arr) {
    let result = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        result = result.concat(this.flatten(item));
      } else {
        result.push(item);
      }
    }
    return result;
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Best, Average, Worst (Ω, Θ, O): Θ(n), where n = total number of elements (including nested)</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(d + n), d: max depth of recursion, n: output size</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        flatten(arr) {
          let result = [];
          for (const item of arr) {
            if (Array.isArray(item)) {
              result = result.concat(this.flatten(item));
            } else {
              result.push(item);
            }
          }
          return result;
        }
      </pre>
      `;
  }
}

/**
 * StackFlatten - iterative using stack (DFS style)
 */
class StackFlatten extends FlattenStrategy {
  flatten(arr) {
    const stack = [...arr];
    const result = [];
    while (stack.length > 0) {
      const next = stack.pop();
      if (Array.isArray(next)) {
        stack.push(...next);
      } else {
        result.push(next);
      }
    }
    return result.reverse();
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Best, Average, Worst (Ω, Θ, O): Θ(n)</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(n) for stack and output</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        flatten(arr) {
          const stack = [...arr];
          const result = [];
          while (stack.length > 0) {
            const next = stack.pop();
            if (Array.isArray(next)) {
              stack.push(...next);
            } else {
              result.push(next);
            }
          }
          return result.reverse();
        }
      </pre>
      `;
  }
}

/**
 * QueueFlatten - iterative using queue (BFS style)
 */
class QueueFlatten extends FlattenStrategy {
  flatten(arr) {
    const queue = [...arr];
    const result = [];
    while (queue.length > 0) {
      const next = queue.shift();
      if (Array.isArray(next)) {
        queue.push(...next);
      } else {
        result.push(next);
      }
    }
    return result;
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Θ(n), n = total elements</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(n), slow shift() operation on arrays</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        flatten(arr) {
          const queue = [...arr];
          const result = [];
          while (queue.length > 0) {
            const next = queue.shift();
            if (Array.isArray(next)) {
              queue.push(...next);
            } else {
              result.push(next);
            }
          }
          return result;
        }
      </pre>
      `;
  }
}

/**
 * MemoizedFlatten - DP-inspired with memoization
 */
class MemoizedFlatten extends FlattenStrategy {
  constructor() {
    super();
    this.memo = new Map();
  }
  flatten(arr) {
    if (!Array.isArray(arr)) return [arr];
    if (this.memo.has(arr)) return this.memo.get(arr);
    const result = [];
    for (const item of arr) {
      if (Array.isArray(item)) {
        result.push(...this.flatten(item));
      } else {
        result.push(item);
      }
    }
    this.memo.set(arr, result);
    return result;
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Generally Θ(n); improves for repeated sub-arrays</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(n + m), m: distinct sub-arrays memoized</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        constructor() {
          super();
          this.memo = new Map();
        }
        flatten(arr) {
          if (!Array.isArray(arr)) return [arr];
          if (this.memo.has(arr)) return this.memo.get(arr);
          const result = [];
          for (const item of arr) {
            if (Array.isArray(item)) {
              result.push(...this.flatten(item));
            } else {
              result.push(item);
            }
          }
          this.memo.set(arr, result);
          return result;
        }
      </pre>
      `;
  }
}

/**
 * GeneratorFlatten - uses generators for lazy flattening
 */
class GeneratorFlatten extends FlattenStrategy {
  *flattenGenerator(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        yield* this.flattenGenerator(item);
      } else {
        yield item;
      }
    }
  }
  flatten(arr) {
    return [...this.flattenGenerator(arr)];
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Θ(n), n = total elements</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(d) due to recursion stack + output</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        *flattenGenerator(arr) {
          for (const item of arr) {
            if (Array.isArray(item)) {
              yield* this.flattenGenerator(item);
            } else {
              yield item;
            }
          }
        }

        flatten(arr) {
          return [...this.flattenGenerator(arr)];
        }
      </pre>
      `;
  }
}

/**
 * ReduceFlatten - using Array.reduce recursively
 */
class ReduceFlatten extends FlattenStrategy {
  flatten(arr) {
    return arr.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? this.flatten(val) : val),
      []
    );
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Θ(n), n = total elements</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(d + n), d: recursion depth, n: output size</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        flatten(arr) {
          return arr.reduce((acc, val) => 
            acc.concat(Array.isArray(val) ? this.flatten(val) : val), []);
        }
      </pre>
      `;
  }
}

/**
 * DequeFlatten - efficient iterative BFS using a custom deque
 */
class DequeNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  pushBack(value) {
    const node = new DequeNode(value);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }
  popFront() {
    if (!this.head) return undefined;
    const val = this.head.value;
    this.head = this.head.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.length--;
    return val;
  }
  isEmpty() {
    return this.length === 0;
  }
}

class DequeFlatten extends FlattenStrategy {
  flatten(arr) {
    const deque = new Deque();
    for (const item of arr) deque.pushBack(item);
    const result = [];
    while (!deque.isEmpty()) {
      const next = deque.popFront();
      if (Array.isArray(next)) {
        for (const el of next) deque.pushBack(el);
      } else {
        result.push(next);
      }
    }
    return result;
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Θ(n), where n is total elements</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(n), deque + output</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        class DequeNode {
          constructor(value) {
            this.value = value;
            this.next = null;
            this.prev = null;
          }
        }

        class Deque {
          constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
          }
          pushBack(value) {
            const node = new DequeNode(value);
            if (!this.tail) {
              this.head = this.tail = node;
            } else {
              this.tail.next = node;
              node.prev = this.tail;
              this.tail = node;
            }
            this.length++;
          }
          popFront() {
            if (!this.head) return undefined;
            const val = this.head.value;
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
            this.length--;
            return val;
          }
          isEmpty() {
            return this.length === 0;
          }
        }

        flatten(arr) {
          const deque = new Deque();
          for (const item of arr) deque.pushBack(item);
          const result = [];
          while (!deque.isEmpty()) {
            const next = deque.popFront();
            if (Array.isArray(next)) {
              for (const el of next) deque.pushBack(el);
            } else {
              result.push(next);
            }
          }
          return result;
        }
      </pre>
      `;
  }
}

/**
 * LinearFlatten - provided linear solution from StackOverflow,
 * Solution link - https://stackoverflow.com/a/27282907
 * iterative, no recursion, linear time O(n)
 */
class LinearFlatten extends FlattenStrategy {
  flatten(array, mutable = false) {
    var toString = Object.prototype.toString;
    var arrayTypeStr = "[object Array]";

    var result = [];
    var nodes = (mutable && array) || array.slice();
    var node;

    if (!array.length) {
      return result;
    }

    node = nodes.pop();

    do {
      if (toString.call(node) === arrayTypeStr) {
        nodes.push.apply(nodes, node);
      } else {
        result.push(node);
      }
    } while (nodes.length && (node = nodes.pop()) !== undefined);

    result.reverse(); // reverse to restore original order
    return result;
  }

  complexity() {
    return `
      <div>
        <p><strong>Time Complexity:</strong></p>
        <p>- Θ(n), where n is total elements</p>
        <p><strong>Space Complexity:</strong></p>
        <p>- O(1) if mutable=true (in place), else O(n) for cloned array</p>
      </div>
      `;
  }

  code() {
    return `
      <p><strong>Code: </strong></p>
      <pre>
        flatten(array, mutable = false) {
          var toString = Object.prototype.toString;
          var arrayTypeStr = '[object Array]';
      
          var result = [];
          var nodes = (mutable && array) || array.slice();
          var node;
      
          if (!array.length) {
            return result;
          }
      
          node = nodes.pop();
      
          do {
            if (toString.call(node) === arrayTypeStr) {
              nodes.push.apply(nodes, node);
            } else {
              result.push(node);
            }
          } while (nodes.length && (node = nodes.pop()) !== undefined);
      
          result.reverse(); // reverse to restore original order
          return result;
        }
      </pre>
      `;
  }
}

// Mapping strategy keys to instances
const flattenStrategies = {
  recursive: new RecursiveFlatten(),
  stack: new StackFlatten(),
  queue: new QueueFlatten(),
  memoized: new MemoizedFlatten(),
  generator: new GeneratorFlatten(),
  reduce: new ReduceFlatten(),
  deque: new DequeFlatten(),
  linear: new LinearFlatten(),
};

function getInputArray() {
  const input = document.getElementById("inputArray").value;
  return parseInputArray(input);
}

function displayOutput(flatArray, methodName, complexityInfo, codeInfo) {
  const outputEl = document.getElementById("output");
  outputEl.textContent =
    methodName + " Output:\n" + JSON.stringify(flatArray, null, 2);
  const complexityEl = document.getElementById("complexityInfo");
  complexityEl.innerHTML = complexityInfo;
  const codeEl = document.getElementById("codeInfo");
  codeEl.innerHTML = codeInfo;
}

function runFlattening(methodKey) {
  try {
    const arr = getInputArray();
    const flattener = flattenStrategies[methodKey];
    if (!flattener)
      throw new Error("Flattening method not recognized: " + methodKey);
    // LinearFlatten accepts second param mutable, default false (immutable)
    let result;
    if (methodKey === "linear") {
      result = flattener.flatten(arr, false);
    } else {
      result = flattener.flatten(arr);
    }
    displayOutput(
      result,
      flattener.constructor.name,
      flattener.complexity(),
      flattener.code()
    );
  } catch (e) {
    console.error(e);
  }
}

// UI exposed functions for buttons
window.runRecursive = () => runFlattening("recursive");
window.runStack = () => runFlattening("stack");
window.runQueue = () => runFlattening("queue");
window.runMemoized = () => runFlattening("memoized");
window.runGenerator = () => runFlattening("generator");
window.runReduce = () => runFlattening("reduce");
window.runDeque = () => runFlattening("deque");
window.runLinear = () => runFlattening("linear");

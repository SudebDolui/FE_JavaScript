console.log("<---------------- WeakMap Concept Starts Here ---------------->");

/**
 * WeakMap
    The first difference between Map and WeakMap is that keys must be objects, not primitive values:
*/
let weakMapOne = new WeakMap();

let objOne = {};

weakMapOne.set(objOne, "ok"); // works fine (object key)

// can't use a string as the key
// weakMapOne.set("test", "Whoops"); // Error, because "test" is not an object

/**
 * Now, if we use an object as the key in it, and there are no other references to that object – it will be removed from memory (and from the map) automatically.
*/

let johnOne = { name: "John" };

let weakMapTwo = new WeakMap();
weakMapTwo.set(johnOne, "...");

// johnOne = null; // overwrite the reference

// johnOne is removed from memory!
/**
 * 
Compare it with the regular Map example above. Now if johnOne only exists as the key of WeakMap – it will be automatically deleted from the map (and memory).

WeakMap does not support iteration and methods keys(), values(), entries(), so there’s no way to get all keys or values from it.

WeakMap has only the following methods:

weakMap.set(key, value)
weakMap.get(key)
weakMap.delete(key)
weakMap.has(key)
Why such a limitation? That’s for technical reasons. If an object has lost all other references (like john in the code above), then it is to be garbage-collected automatically. But technically it’s not exactly specified when the cleanup happens.

The JavaScript engine decides that. It may choose to perform the memory cleanup immediately or to wait and do the cleaning later when more deletions happen. So, technically, the current element count of a WeakMap is not known. The engine may have cleaned it up or not, or did it partially. For that reason, methods that access all keys/values are not supported.
*/

// Now, where do we need such a data structure?

/**
 * 
 * Use case: additional data
 * The main area of application for WeakMap is an additional data storage.
 * If we’re working with an object that “belongs” to another code, maybe even a third-party library, and would like to store some data associated with it, that should only exist while the object is alive – then WeakMap is exactly what’s needed.
 * We put the data to a WeakMap, using the object as the key, and when the object is garbage collected, that data will automatically disappear as well.
*/
    weakMapTwo.set(johnOne, "secret documents");
// if johnOne dies, secret documents will be destroyed automatically
/**
 * 
Let’s look at an example.

For instance, we have code that keeps a visit count for users. The information is stored in a map: a user object is the key and the visit count is the value. When a user leaves (its object gets garbage collected), we don’t want to store their visit count anymore.

Here’s an example of a counting function with Map:
*/

// 📁 visitsCount.js
let visitsCountMapOne = new Map(); // map: user => visits count

// increase the visits count
function countUserOne(user) {
  let count = visitsCountMapOne.get(user) || 0;
  visitsCountMapOne.set(user, count + 1);
}
// And here’s another part of the code, maybe another file using it:

// 📁 main.js
let johnTwo = { name: "John" };

countUserOne(johnTwo); // count his visits

// later johnTwo leaves us
johnTwo = null;

/**
 * 
Now, johnTwo object should be garbage collected, but remains in memory, as it’s a key in visitsCountMapOne.

We need to clean visitsCountMapOne when we remove users, otherwise it will grow in memory indefinitely. Such cleaning can become a tedious task in complex architectures.

We can avoid it by switching to WeakMap instead:
*/

// 📁 visitsCount.js
let visitsCountMapTwo = new WeakMap(); // weakmap: user => visits count

// increase the visits count
function countUserTwo(user) {
  let count = visitsCountMapTwo.get(user) || 0;
  visitsCountMapTwo.set(user, count + 1);
}

/**
 * 
Now we don’t have to clean visitsCountMapTwo. After john object becomes unreachable, by all means except as a key of WeakMap, it gets removed from memory, along with the information by that key from WeakMap.

Use case: caching
Another common example is caching. We can store (“cache”) results from a function, so that future calls on the same object can reuse it.

To achieve that, we can use Map (not optimal scenario):
*/

// 📁 cache.js
let cacheOne = new Map();

// calculate and remember the result
function processOne(obj) {
  if (!cacheOne.has(obj)) {
    let result = /* calculations of the result for */ obj;

    cacheOne.set(obj, result);
    return result;
  }

  return cacheOne.get(obj);
}

// Now we use process() in another file:

// 📁 main.js
let objTwo = {/* let's say we have an object */};

let resultOne = processOne(objTwo); // calculated

// ...later, from another place of the code...
let resultTwo = processOne(objTwo); // remembered result taken from cache

// ...later, when the object is not needed any more:
objTwo = null;

console.log(cacheOne.size); // 1 (Ouch! The object is still in cache, taking memory!)
/*
 * 
For multiple calls of process(obj) with the same object, it only calculates the result the first time, and then just takes it from cache. The downside is that we need to clean cache when the object is not needed any more.

If we replace Map with WeakMap, then this problem disappears. The cached result will be removed from memory automatically after the object gets garbage collected.
*/

// 📁 cache.js
let cacheTwo = new WeakMap();

// calculate and remember the result
function processTwo(obj) {
  if (!cacheTwo.has(obj)) {
    let result = /* calculate the result for */ obj;

    cacheTwo.set(obj, result);
    return result;
  }

  return cacheTwo.get(obj);
}

// 📁 main.js
let objThree = {/* some object */};

let result1 = processTwo(objThree);
let result2 = processTwo(objThree);

// ...later, when the object is not needed any more:
objThree = null;

// Can't get cache.size, as it's a WeakMap,
// but it's 0 or soon be 0
// When obj gets garbage collected, cached data will be removed as well


console.log("<---------------- WeakMap Concept Ends Here ---------------->");
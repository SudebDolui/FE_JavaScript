console.log("<---------------- Map Concept Starts Here ---------------->");

/**
 * ---> Map
 * Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

 * --> Methods and properties are:

 * -> new Map() – creates the map. 
 * -> map.set(key, value) – stores the value by the key.
 * -> map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
 * -> map.has(key) – returns true if the key exists, false otherwise.
 * -> map.delete(key) – removes the element (the key/value pair) by the key.
 * -> map.clear() – removes everything from the map.
 * -> map.size – returns the current element count.
 */

let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(2, 2);     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log( map.get(1)   ); // 'num1'
console.log( map.get(2) ); // 2
console.log( map.get('1') ); // 'str1'

console.log( map.size ); // 4
console.log( map );
/** 
new Map([
    [
        "1",
        "str1"
    ],
    [
        1,
        "num1"
    ],
    [
        2,
        2
    ],
    [
        true,
        "bool1"
    ]
])
*/


// Every map.set call returns the map itself, so we can “chain” the calls:
map.set('1', 'str1')
  .set(1, 'num1')
  .set(true, 'bool1');

  
  /**
   * ---> Iteration over Map
   * --> For looping over a map, there are 3 methods:
   * -> map.keys() – returns an iterable for keys,
   * -> map.values() – returns an iterable for values,
   * -> map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */

  let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }

  // Info: The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object.
  // Info:  Besides that, Map has a built-in forEach method, similar to Array:

  // runs the function for each (key, value) pair
  recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });

  /**
   * ---> Object.entries: Map from Object
   * When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
   * If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
  */

  let testMapObj = {
    name: "John",
    age: 30
  };

  let convertToMap = new Map(Object.entries(testMapObj));
  // Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
  console.log( convertToMap.get('name') ); // John

  /**
   * ---> Object.fromEntries: Object from Map
   * We’ve just seen how to create Map from a plain object with Object.entries(obj).
   * There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
  */

  let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);

  // now prices = { banana: 1, orange: 2, meat: 4 }
  console.log(prices.orange); // 2

  // We can use Object.fromEntries to get a plain object from Map.
  // E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object.

  let convertToObj = new Map();
  map.set('banana', 1);
  map.set('orange', 2);
  map.set('meat', 4);

  let convertedObj = Object.fromEntries(map.entries()); // make a plain object (*)
  // obj = { banana: 1, orange: 2, meat: 4 }
  console.log(convertedObj.orange); // 2
  
  // A call to map.entries() returns an iterable of key/value pairs, exactly in the right format for Object.fromEntries.

  convertedObj = Object.fromEntries(map); // omit .entries()
  // That’s the same, because Object.fromEntries expects an iterable object as the argument. Not necessarily an array. And the standard iteration for map returns same key/value pairs as map.entries(). So we get a plain object with same key/values as the map.

  console.log("<---------------- Map Concept Ends Here ---------------->");
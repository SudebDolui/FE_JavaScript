/**
 * -----> Order of Growth
 * ---> O(1)          | Constant
 * ---> O(log n)      | Logarithmic
 * ---> O(n)          | Linear
 * ---> O(n log n)    | Linearithmic
 * ---> O(n^2)        | Quadratic
 * ---> O(n^3)        | Cubic
 * ---> O(2^n)        | Exponential
 * ---> O(n!)         | Factorial
 */

/**
 * -----> Eaxmple for O(n)
 */

for(let i=1; i <= 6; i++) {
    const tableFor = 2;
    const res = tableFor*i // --> Here tableFor*1 is an O(1) => Constant order
    console.log(`${tableFor}x${i} = ${res}`);
}

/**
 * -----> Eaxmple for O(n ^ 2)
 */

for(let i=1; i <= 6; i++) {
    for(let j = 1; j<i; j++) {
        console.log(i, j);
    }
}

/**
 * -----> Eaxmple for O(n ^ 3)
 */

for(let i=1; i <= 6; i++) {
    for(let j = 1; j<i; j++) {
        for(let k = 1; k<j; k++) {
            console.log(i, j, k);
        }
    }
}

/**
 * -----> Eaxmple for O(log n)
 * -> In Computer science log base is always 2
 */

function logN(n) {
    if(n === 0) return false;
    // console.log(n);
    n = Math.floor(n/2);
    logN(n);
}

// logN(8); // -> This Function will run 3 times (2 ^ 3) => (log 8 = 3)

function whileLogN(n) {
    while(n > 1) {
        n = Math.floor(n/2);
        console.log(n);
    }
}

whileLogN(8);

function forLogN(n) {
    for (let i = n; i > 1; i= Math.floor(i/2)) {
        console.log(i);
    }
}

// forLogN(8);

/**
 * -> Binary Search
 */
let arr = [];

for(let i=1; i <= 1024; i++) {
    arr.push(i);
}

let start = 0;
let end = arr.length - 1;
let target = 1023;


/**
 * -----> Binary Search Algorithm
 */

function binarySearch(arr, start, end, target) {
    console.log(arr.slice(start, end));
    if(start > end) return false;
    let midIndex = Math.floor((start+end)/2);
    if(arr[midIndex] === target) return true;
    
    if(arr[midIndex] > target) return binarySearch(arr, start, midIndex-1, target);
    else return binarySearch(arr, midIndex+1, end, target);
}

// console.log(binarySearch(arr, start, end, target));

/**
 * -----> Eaxmple for O(n log n)
 */

function nLogN(n) {
    let y = n;
    while(n > 1) {
        n = Math.floor(n/2);
        for(let i = 1; i <= y; i++) {
            console.log(i);
        }
    }
}

// nLogN(8);

/**
 * -> Merge Sort
 */

function merge(leftArr, rightArr) {
    console.log('left arr', leftArr);
    console.log('right arr', rightArr);
    let resultArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex += 1;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex += 1;
        }
    }

    return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}

function mergeSort(arr) { // -> O(log n)
    console.log('array', arr);
    if(arr.length < 2) {
        return arr; // -> Until this returns merge function does not gets executed.
    } 

    const middleIndex = Math.floor(arr.length/2);
    const leftArr = arr.slice(0, middleIndex);
    console.log('Left Array', leftArr);
    const rightArr = arr.slice(middleIndex, arr.length);
    console.log('Right Array', rightArr);
    return merge(mergeSort(leftArr), mergeSort(rightArr)); // -> O(n)
}

let mergeArr = [12, 3, 16, 6, 5, 1, 9];
// console.log(mergeSort(mergeArr));

/**
 * -----> Examples for Fibonacci(2^n) & Exponential(n!) 
 */

function fib(n) {
    if(n === 0) {
        return 0;
    }

    if(n === 1) {
        return 1;
    }

    return fib(n-1) + fib(n-2);
}

console.log(fib(4));

function f(n) {
    if(n === 0) {
        console.log("*****");
        return;
    }

    for(let i = 0; i < n; i++) {
        f(n-1);
    }
}

console.log(f(3));

/**
 * -----> Space Complexity
 */

function countDown(n) {
    if(n === 0) {
        return n;
    }

    return countDown(n-1);
}

console.log(countDown(5));

/**
 * -----> Common Mistakes
 */

function correctOne(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            console.log(i, j); 
        }
    }

    /**
     * * Here the notation is O(n^2) which is correct now observe the below 2 Common mistakes
     */
}

function twoLoops(n) {
    for (let i = 0; i < n; i++) {
        console.log(i)
    }

    for (let i = 0; i < n; i++) {
        console.log(i); 
    }

    /**
     * * Here the notation is O(n) * O(n) => O(2n).
     * * As we can ignore the constants it becomes O(n)
     */
}

function twoInputsAdd(a, b) {
    for (let i = 0; i < a; i++) {
        console.log(i);
    }

    for (let i = 0; i < b; i++) {
        console.log(i); 
    }

    /**
     * * Here the notation is O(a + b).
     */
}

function twoInputsMulti(a, b) {
    for (let i = 0; i < a; i++) {
        console.log(i);
        for (let i = 0; i < b; i++) {
            console.log(i); 
        }
    }

    /**
     * * Here the notation is O(a * b).
     */
}

/**
 * -----> Insertion Sort
 */

function insertionSort(arr) {

    if(arr.length < 2) return arr;

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];
        let j = i - 1;

        //---> For Ascending Order

        while (j >= 0 && arr[j] > key) {
            console.log(arr, arr[j], key, i, j);
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        //---> For Descending Order

        // while (j >= 0 && arr[j] < key) {
        //     console.log(arr, arr[j], key, i, j);
        //     arr[j + 1] = arr[j];
        //     j = j - 1;
        // }
        arr[j + 1] = key;
    }

    return arr;
}

const insertionSortarr = [31, 41, 59, 26, 41, 58];
console.log(insertionSort(insertionSortarr));

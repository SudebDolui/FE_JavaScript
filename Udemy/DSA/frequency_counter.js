/**
 * Finding the square root of a number using Babylonian method or Heron's method.
 * @param {number} number
 * @returns the sqyare root of the number
 */
function sqrRoot(number) {
  number = parseInt(number);
  let posNum = number;
  if (number < 0) {
    posNum = -number;
  }

  if (posNum === 0 || posNum === 1) {
    return posNum;
  }

  let guess = posNum / 2;
  let previousGuess;

  do {
    previousGuess = guess;
    guess = (previousGuess + posNum / previousGuess) / 2;
  } while (previousGuess - guess > 0.01);

  return parseInt(guess);
}

function checkIfMatch(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let fCounter1 = {};
  let fCounter2 = {};

  for (let val of arr1) {
    fCounter1[val] = (fCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    fCounter2[val] = (fCounter2[val] || 0) + 1;
  }

  console.log(fCounter1, fCounter2);

  // -----> Solution 1

  // for (let key in fCounter1) {
  //   if (!(key ** 2 in fCounter2)) {
  //     return false;
  //   }
  //   if (fCounter1[key] !== fCounter2[key ** 2]) {
  //     return false;
  //   }
  // }

  // -----> Solution 2

  for (let key in fCounter2) {
    if (!(sqrRoot(key) in fCounter1)) {
      return false;
    }
    if (fCounter1[sqrRoot(key)] !== fCounter2[key]) {
      return false;
    }
  }

  return true;
}

console.log(checkIfMatch([0, 2, 3, 0], [0, 4, 9, 0]));

function validAnagram(strng, chekStrng) {
  // add whatever parameters you deem necessary - good luck!
  if (strng.length !== chekStrng.length) {
    return false;
  }

  let fCuntr = {};
  let fChekCountr = {};

  for (let leter of strng) {
    fCuntr[leter] = (fCuntr[leter] || 0) + 1;
  }

  for (let leter of chekStrng) {
    fChekCountr[leter] = (fChekCountr[leter] || 0) + 1;
  }

  for (let key in fCuntr) {
    if (!(key in fChekCountr)) {
      return false;
    }

    if (fCuntr[key] !== fChekCountr[key]) {
      return false;
    }
  }

  return true;
}

console.log(validAnagram("", ""));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"));
console.log(validAnagram("qwerty", "qeywrt"));
console.log(validAnagram("texttwisttime", "timetwisttext"));

function coltSteleeValidAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(coltSteleeValidAnagram("", ""));
console.log(coltSteleeValidAnagram("aaz", "zza"));
console.log(coltSteleeValidAnagram("anagram", "nagaram"));
console.log(coltSteleeValidAnagram("awesome", "awesom"));
console.log(
  coltSteleeValidAnagram("amanaplanacanalpanama", "acanalmanplanpamana")
);
console.log(coltSteleeValidAnagram("qwerty", "qeywrt"));
console.log(coltSteleeValidAnagram("texttwisttime", "timetwisttext"));

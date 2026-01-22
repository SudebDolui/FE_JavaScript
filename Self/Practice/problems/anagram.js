"use strict";

console.log("Running Java script");

const testPattern = ["ate", "tea", "eat", "ant", "tna", "bat"];
patternGather(testPattern);

function patternGather(pattern) {
  let sortedArray = [];
  let gatheredArray = [];
  console.log("Input is", pattern);
  for (
    let currentWordCount = 0;
    currentWordCount < pattern.length;
    currentWordCount++
  ) {
    let currentWord = pattern[currentWordCount];
    for (
      let comparingWordCounts = 0;
      comparingWordCounts < pattern.length;
      comparingWordCounts++
    ) {
      let comparingWord = pattern[comparingWordCounts];
      for (
        let currentWordLetterPosition = 0;
        currentWordLetterPosition < currentWord.length;
        currentWordLetterPosition++
      ) {
        let currentWordLetter = currentWord.charAt(currentWordLetterPosition);
        let breakLoop = 0;
        for (
          let comparingWordLetterPosition = 0;
          comparingWordLetterPosition < comparingWord.length;
          comparingWordLetterPosition++
        ) {
          let comparingWordLetter = comparingWord.charAt(
            comparingWordLetterPosition,
          );
          if (currentWordLetter === comparingWordLetter) {
            let exactMatches = 0;
            for (let i = 0; i < currentWord.length; i++) {
              for (let j = 0; j < comparingWord.length; j++) {
                if (currentWord.charAt(i) === comparingWord.charAt(j)) {
                  exactMatches++;
                  if (exactMatches === currentWord.length) {
                    gatheredArray.push(comparingWord);
                    breakLoop = 1;
                  }
                }
              }
            }
          }
        }
        if (breakLoop) {
          break;
        }
      }
    }
    sortedArray.push([...gatheredArray]);
    gatheredArray = [];
  }
  sortedArray = duplicateArrayRemover(sortedArray);
  sortedArray = duplicateArrayRemover(sortedArray);
  console.log("output is", sortedArray);
}

function duplicateArrayRemover(array) {
  let duplicates;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1]) {
      if (array[i].length === array[i + 1].length) {
        duplicates = array.splice(i + 1, 1);
      }
    }
  }
  return array;
}

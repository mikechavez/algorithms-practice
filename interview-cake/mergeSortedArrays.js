function mergeSortedArrays(arrayA, arrayB) {
  let merged = [];
  let currentIndexMerged = 0;
  let currentIndexA = 0;
  let currentIndexB = 0;
  let isArrayAExhausted;
  let isArrayBExhausted;

  while (currentIndexMerged < arrayA.length + arrayB.length) {
    isArrayAExhausted = arrayA[currentIndexA] >= arrayA.length;
    isArrayBExhausted = arrayB[currentIndexB] >= arrayB.length;

    // Array A has been exhausted or Array B's item is next
    if (
      !isArrayAExhausted &&
      (!isArrayBExhausted || arrayA[currentIndexA] < arrayB[currentIndexB])
    ) {
      merged[currentIndexMerged] = arrayA[currentIndexA];
      currentIndexA++;
    } else {
      merged[currentIndexMerged] = arrayB[currentIndexB];
      currentIndexB++;
    }
    currentIndexMerged++;
  }
  return merged;
}

let arrA = [3, 4];
let arrB = [1, 5, 8];

mergeSortedArrays(arrA, arrB);

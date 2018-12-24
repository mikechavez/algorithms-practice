function mergeSortedArrays(arrayA, arrayB) {
  let merged = [];
  let currentMergedIndex = 0;
  let arrayAIndex = 0;
  let arrayBIndex = 0;

  while (currentMergedIndex < arrayA.length + arrayB.length) {
    // Neither array has been exhausted
    if (arrayAIndex < arrayA.length && arrayBIndex < arrayB.length) {
      // Array A's item is next
      if (arrayA[arrayAIndex] < arrayB[arrayBIndex]) {
        merged[currentMergedIndex] = arrayA[arrayAIndex];
        currentMergedIndex++;
        arrayAIndex++;
        // Array B's item is next
      } else {
        merged[currentMergedIndex] = arrayB[arrayBIndex];
        currentMergedIndex++;
        arrayBIndex++;
      }
      // Array A has been exhausted
    } else if (arrayAIndex === arrayA.length) {
      merged[currentMergedIndex] = arrayB[arrayBIndex];
      currentMergedIndex++;
      arrayBIndex++;
      // Array B has been exhausted
    } else {
      merged[currentMergedIndex] = arrayA[arrayAIndex];
      currentMergedIndex++;
      arrayAIndex++;
    }
  }
  return merged;
}

let arrA = [3, 4];
let arrB = [1, 5, 8];

mergeSortedArrays(arrA, arrB);

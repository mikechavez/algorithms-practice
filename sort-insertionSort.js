function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
}

function sortTwo(arr, i, j) {
  if (arr[i] < arr[j]) {
    swap(arr, i, j);
  }
  return arr;
}

function sortNaive(arr, idx) {
  for (let i in arr) {
    if (arr[idx] < arr[i]) {
      arr = swap(arr, i, idx);
      return arr;
    }
  }
}

function insertionSort(arr) {
  let j = 0;

  // sort first two items in arr
  arr = sortTwo(arr, 0, 1);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      arr = sortNaive(arr, i);
      return arr;
    }
  }
}

insertionSort([45, 30, 26, 50, 25]);

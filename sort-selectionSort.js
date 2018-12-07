function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = 0;
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr, arr[j], arr[min]);
      if (arr[j] < arr[min]) {
        swap(arr, j, min);
        min = j;
      }
    }
  }
  return arr;
}

// let testArr = [50, 39, 46, 28];

selectionSort([50, 39, 46, 28]);

[1, 5, 8, 39, 50, 51, 62, 65, 70];

function binarySearch(arr, target) {
  // target = 8

  let left = 0; // 0  4  8 ||
  let right = arr.length - 1;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return mid;
    if (target > arr[mid]) left = mid + 1;
    if (target < arr[mid]) right = mid - 1;
  }
  return -1;
}

function merge(a1, a2) {
  res = [];
  let i = 0,
    j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      res.push(a1[i]);
      i++;
    } else {
      res.push(a2[j]);
      j++;
    }
  }

  while (i < a1.length) {
    res.push(a1[i]);
    i++;
  }

  while (j < a2.length) {
    res.push(a2[j]);
    j++;
  }

  return res;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

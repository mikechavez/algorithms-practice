function swap(arr, idx1, idx2) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function reverseString(strArr) {
  let head = 0;
  let tail = strArr.length - 1;

  while (head < tail) {
    swap(strArr, head, tail);
    head++;
    tail--;
  }
  return strArr;
}

let word = ["h", "e", "l", "l", "o"];

reverseString(word);

// function reverseString(strArr) {
//   let head = 0;
//   let tail = strArr.length - 1;

//   while (head < tail) {
//     const temp = strArr[head];
//     strArr[head] = strArr[tail];
//     strArr[tail] = temp;

//     head++;
//     tail--;
//   }
//   return strArr;
// }

function sockMerchant(n, ar) {
  let colors = {};
  let count = 0;
  for (let i = 0; i < ar.length; i++) {
    if (!colors[ar[i]]) {
      colors[ar[i]] = 0;
    }
  }
  for (let i = 0; i < ar.length; i++) {
    colors[ar[i]] += 1;
    if (colors[ar[i]] == 2) {
      colors[ar[i]] = 0;
      count++;
    }
  }
  return count;
}

let arr = [1, 2, 1, 2, 1, 3, 2];

sockMerchant(7, arr);

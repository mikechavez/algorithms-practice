var reverse = function(x) {
  let max = Math.pow(2, 31);
  let rev = 0;
  let pop;
  let negative;
  x < 0 ? (negative = true) : (negative = false);

  while (x !== 0) {
    pop = x % 10;
    if (rev > max / 10 || (rev === max / 10 && pop > 7)) return 0;
    if (rev < -max / 10 || (rev === -max / 10 && pop < -8)) return 0;

    rev = rev * 10 + pop;
    x = Math.floor(x / 10);
  }
  return negative ? -x : x;
};

reverse(123234234353583483);

reverse(123456789);

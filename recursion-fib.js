function fib(n) {
  let curr = 1,
    prev = 1;
  function fibHelper(cycle, curr, prev) {
    if (cycle === 2) {
      return curr;
    }
    console.log(curr);
    return fibHelper(cycle - 1, curr + prev, curr);
  }

  return fibHelper(n, curr, prev);
}

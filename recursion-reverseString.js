function reverse(str) {
  let result;
  function reverseHelper(helpStr, res = "") {
    // Base case is when helpStr is an empty string
    if (!helpStr) {
      console.log(res);
      return res;
    }
    //     console.log(helpStr);
    //     console.log(reverse);
    // add last letter of string to reverse
    res = res + helpStr.charAt(helpStr.length - 1);
    //     res = res.concat(helpStr.charAt(helpStr.length - 1));
    reverseHelper(helpStr.substring(0, helpStr.length - 1), res);
  }
  return reverseHelper(str);
}

// other student answer
function reverse(str, res = "") {
  if (str.length === res.length) return res;
  return reverse(str, str[res.length] + res);
}

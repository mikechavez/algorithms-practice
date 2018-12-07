// function sameFrequency(n1, n2){
//   if(n1.length !== n2.length) return false;
//   let str1 = '' + n1;
//   let str2 = '' + n2;

//   // store digits in objects
// let freq1 = {};
// let freq2 = {};

// // iterate through one object and keep going until either end of object keys or you find a key/value pair that isn't equal
// for(let i = 0; i < str1.length; i++) {
//     freq1[str1.charAt(i)] = 0;
//     freq2[str2.charAt(i)] = 0;
// }

// for(let i = 0; i < str1.length; i++) {
//     freq1[str1.charAt(i)] += 1;

// }

// for(let i = 0; i < str2.length; i++) {
//     freq2[str2.charAt(i)] += 1;
// }

// for(let key in freq1) {
// //       console.log(freq1[key]);
//     if(freq1[key] !== freq2[key]) {
//         return false;
//     }
// }
// return true;

// }

function sameFrequency(n1, n2) {
  if (n1.toString().length !== n2.toString().length) {
    return false;
  }
  let sum1 = sumDigit(n1);
  let sum2 = sumDigit(n2);

  return sum1 === sum2 ? true : false;
}

function sumDigit(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumDigit(n / 10);
}

sameFrequency(22, 222);

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!

  // check strings are equal
  if (str1.length != str2.length) return false;

  // create objects that store each char and # of times char appears in string
  let obj1 = {};
  let obj2 = {};

  // loop through each string and store # of times each char appears
  for (let c in str1) {
    obj1[c] = (obj1[c] || 0) + 1;
  }
  for (let c in str2) {
    obj2[c] = (obj2[c] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);

  // loop through string 1 and check if count of each char matches count of each char in string 2
  for (let c in str1) {
    if (obj1[c] !== obj2[c]) return false;
  }
  return true;
}

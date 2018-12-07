// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let product = 1;

  function getProduct(inputArr) {
    if (inputArr.length === 0) {
      return product;
    }
    product *= inputArr[0];
    getProduct(inputArr.slice(1));
  }

  return getProduct(arr);
}

console.log(productOfArray([1, 2, 3]));

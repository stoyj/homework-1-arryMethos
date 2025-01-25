const arr = ['mango', 'apple', 'banana', 'kiwi', 'orange', 'kiwi'];
const productArr = [{name: 't-shirt', price: 1}, {price:2}, {price:3}, {price:4}, {price:5}];
 const numberArr = [1, 2, 9 , 5, 3, 4];


//*pop(), push(), shift(), unshift()

// arr.push('grapes', 'peach');
// arr.unshift('watermelon', 'pineapple');

// const lastElement = arr.pop()
// const firsstElement = arr.shift()
//console.log(lastElement, firsstElement);
//console.log(arr);

// at method 
//console.log(arr.at(0));
//console.log(arr[0]);
//* concat method
const arr2 = ['cherry', 'pear', 'blueberry'];
const newArr = arr.concat(arr2);
//console.log(newArr);
//copyWithin method
//console.log(arr.copyWithin(3, 0, 2));

//*every method
const isAllFruits = arr.every((fruit, index, arr) => typeof fruit === 'string');
//console.log(isAllFruits);
//*some method
const isSomeFruits = arr.some((fruit, index, arr) => fruit === 'apple');
//console.log(isSomeFruits);
//*array fill method
// const filledArr = arr.fill('apple',0);
// console.log(filledArr, arr);

//*filter method 
// const filteredArr = arr.filter((fruit, index, arr) => fruit.length > 5);
// console.log(filteredArr);
//*find method
// const foundFruit = arr.find((fruit, index, arr) => fruit === 'kiwi');
// console.log(foundFruit);
//*findIndex method
//  const foundFruitIndex = arr.findIndex((fruit, index, arr) => fruit === 'kiwi');
// console.log(foundFruitIndex);
//*findLast method
// const foundLastFruit = arr.findLast((fruit, index, arr) => fruit === 'kiwi');
// console.log(foundLastFruit);
//*findLastIndex method
//  const foundLastFruitIndex = arr.findLastIndex((fruit, index, arr) => fruit === 'kiwi');
// console.log(foundLastFruitIndex);

//*flat method
// const nestedArr = [1, 2, [3, 4, [5, [6]]]];
// const newArr2 = nestedArr.flat(3);
// console.log(newArr2, nestedArr);
//*includes method
// const isIncluded = arr.includes('kiwi');
// console.log(isIncluded);
//*indexOf method
//  const index = arr.indexOf('kiwi');
//  console.log(index);
//*join method
// const joinedArr = arr.join('===');
// console.log(joinedArr);
//*keys method
// const keys = arr.keys();
// console.table(keys);
// {0: "mango", 1: "apple", 2: "banana", 3: "kiwi", 4: "orange", 5: "kiwi", 6: "grapes", 7: "peach", 8: "cherry", 9: "pear", 10: "blueberry"}
// for (const key of keys) {
//     console.log(key);
// }

//*lastIndexOf method
//  const lastIndex = arr.lastIndexOf('kiwi');
// console.log(lastIndex);

//*map method 
 //const mappedArr = arr.map((fruit, index, arr) => fruit.toUpperCase());
// console.log(mappedArr);

//*reduce method
 
//  const reducedArr = productArr.reduce(
//   (accumulator, currentProduct, currentIndex, array) => {
//   return accumulator + currentProduct.price;
//   }, 20);

// console.log(reducedArr + 'lv');

// function reduce(arr, callback, initialValue) {
//   debugger;
//     let acc = initialValue;
//     for (let i = 0; i < arr.length; i++) {
//         acc = callback(acc, arr[i], i, arr);
//     }
//     return acc;
// }

// reduce(numberArr,

//   (acc, fruit, index, arr) => {
//   return acc + fruit;
// },

//  0);

//* reverse method
// const str = 'hello';
// console.log(str.split('').reverse());

// console.log(str.split('').reverse().join(''));

// arr.reverse();
// console.log(arr);


//*slice method
// const slicedArr = arr.slice(2, 5);
// console.log(slicedArr, arr);

//*sort method
//  const sortedArr = arr.sort((a,b) =>  b.localeCompare(a));
//  const stortedNumber = numberArr.sort((a,b) => a - b);
//  const sortedProductArr = productArr.sort((a,b) => b.price - a.price);
//  console.table(productArr, sortedProductArr);
 
//*splice method
// const splicedArr = arr.splice(2, 2, 'grapes', 'peach');
// console.log(splicedArr, arr);
// toStrig method && toSpliced method && toReversed method && toSorted method
// same as original but not change the original array but return new array
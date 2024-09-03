// array methods

const arr = [11, 22, 33, 44, 55];

console.log(arr)

// console.log(arr)

// console.log(arr)
// for (let index = 0; index <= arr.length - 1; index++) {
//   console.log("hello", arr[index]);
// }

// Here function(){} is called callback function
// arr.forEach(function(){
//   console.log("hello")
// })

//forEach
let sum = 0;
const forEach = arr.forEach(function (val) {
  sum = sum + val;

  return val + 100;
});

// console.log(forEach)

//map

const map = arr.map(function (val) {
  // console.log("first", val)

  return val + 10;
});

//filter

const filter = arr.filter(function (value, index) {
  // console.log("Hello", value, index, index === 0 && index === 2);

  return index === 0 && index === 2;
});

// console.log(filter);

const find = arr.find(function (val) {
  console.log("hello", val);

  return val === 22;
});

console.log(find);

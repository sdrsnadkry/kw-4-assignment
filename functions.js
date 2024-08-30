// const a = 2;
// const -> keyword
// a -> variable
// 2 -> valueadd

///function

const a = 2;
const b = 3;
// console.log(a + b, "outside function");

function guitarIsAGoodBoy() {
  const num1 = 100;
  const num2 = 3;

  console.log(num1 + num2, "inside function");
}

// guitarIsAGoodBoy();

//num = 0 => default parameter
function guitarIsSubtractingNumber(num1 = 0, num2 = 0) {
  console.log(num1, num2, "inside guitar function");
}

// guitarIsSubtractingNumber(200, 100);
// guitarIsSubtractingNumber(500, 200);

// guitarIsSubtractingNumber(undefined, "5");

function guitarReturnSomething(p1, p2) {
  const result = p1 + p2;

  return result;
  //this part of code does not run
  // console.log(result);
}

const res = guitarReturnSomething("hello", "world");

const r2 = guitarReturnSomething(2, 3);

// console.log(r2);

//calculator

function calculator(n1, n2, operations = "mul") {
  if (operations === "add") {
    return n1 + n2;
  } else if (operations === "subtract") {
    return n1 - n2;
  } else if (operations === "mul") {
    return n1 * n2;
  }
}

const resultAdd = calculator(2, 2);

// const resSub = calculator(2, 2, "subtract");
// const mul = calculator(2, 2, "mul");

// console.log(resultAdd);

//conditions
//if else

// if (2 + 2 === 4) {
//   console.log("True");
// } else {
//   console.log("false");
// }

//hoisting
// something(2, 3);

function something(a, b) {
  console.log(a, b);
}

//anonymous function
// function (a, b) {
//  console.log(a, b)
// }
const doesSomething = function (a, b) {
  console.log(a, b);
};
// doesSomething(1,2)

// doesSomething2(5,6)
//arrow function
const doesSomething2 = (a, b) => {
  console.log(a, b);
};

// doesSomething2(2,4)

//let const var in hoisting

console.log(num)

var num = 3;


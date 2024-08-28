//object destructuring
const student = {
  name: "Krishna",
  age: 32,
  address: { pa: "Kalanki" },
  phone: 123123123,
};

// const address = student.age;
// const name = student.name;
// const phone = student.phone;
let { name, age, phone } = student;
// age = 54;
console.log(age);

//array destructuring
const array = [11, 12, 23, 23, 53, 434123, 123123];

// const first = array[0];
// const second = array[1];
// const third = array[2];
const [a,b,c,d,e,f] = array;

// console.log(b)


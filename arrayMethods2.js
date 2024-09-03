const nameArr = ["Guitar", "Krishna", "Pratik", "Bijesh", "Sagar"];

console.log(nameArr);

//push -> adds at last
// nameArr.push("Rajesh");

// console.log(nameArr);

//pop -> removes last element
// nameArr.pop();

// unshift -> adds on 0 index
// nameArr.unshift("Rajesh");

//shift -> removes first element
// nameArr.shift();

const name2Arr = ["Ashmi", "Sarita", "Hemshu", "Anuja", "Ashmi"];

// const students = name2Arr.concat(name2Arr)

const forEach = nameArr.forEach(function (val) {
  // console.log("Hello", val)
});
// console.log(forEach)

const map = name2Arr.map(function (val) {
  // console.log("Hello", val);

  return "Hi - " + val;
});

// console.log(map);

const filter = name2Arr.filter(function (val) {
  // console.log("Hello", val);

  return (val === "Ashmi") //true;
});

// console.log(filter);

const find = name2Arr.find(function(name){
  console.log("Hello", name)

  return name === "Ashmi";
})

console.log(find)

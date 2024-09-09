// window.console.log("Hello")
// window.document

// h2{
// }
// .hello{}
// #hellp{}
const elements = document.getElementById("name");

elements.style.color = "blue";

const element = document.getElementsByClassName("name-class");

element.style.color = "red";

console.log(element)
pratik.innerText = "Pratik Gaire is a CR";

const greet = document.getElementById("greetings")

greet.innerText = "Hello, Pratik";

console.log(element)

const elementByClass = document.getElementsByClassName("name-class");

for (let index = 0; index <= elementByClass.length - 1; index++) {
  elementByClass[index].style.color = "red";
}

console.log(elementByClass)

const elementByTag = document.getElementsByTagName("h2");

for (let index = 0; index <= elementByTag.length - 1; index++) {
  console.log((elementByTag[index].style.color = "blue"));
}

console.log(elementByTag);

function changeColorToRed() {
  const element = document.getElementById("name");

  element.style.color = "red";
}

function changeColorToBlue() {
  const element = document.getElementById("name");

  element.style.color = "blue";
}



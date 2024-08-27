const a = 1;

// const obj = { name: "Krishna", age: 32, address: { pa: "Kalanki" } };

// console.log(obj.name, obj.address.pa);

//array index starts from 0;

const array = [11, 12, 23, 23, 53, 434123, 123123];
//array[index]

const obj1 = { name: "Krishna", age: 32 };
const obj2 = { name: "Dilli raj", age: 32 };
const obj3 = { name: "Pratik", age: 29 };
const obj4 = { name: "Bijesh", age: 29 };

const arrayOfObj = [obj1, obj2, obj3, obj4];

const student = arrayOfObj[3];

const product = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const productRating = product.rating;


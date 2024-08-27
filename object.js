//string
//number
//boolean

// const student1Name = "John";
// const student1Age = 20;
// const student1Address = "New York";
// const student1IsMale = true;

// const student2Name = "Jane";
// const student2Age = 21;
// const student2Address = "New York";
// const student2IsMale = false;

//object -> key value pairs

const student1 = {
  name: "Krishna",
  age: 20,
  isMale: true,
};

const student2 = {
  name: "Jane",
  age: 21,
  isMale: false,
};

const student3 = {
  firstName: "Jane",
  lastName: "Doe",
  age: 21,
};

const student4 = {
  "primary-address": "Jane",
};

// console.log(student4["primary-address"])

const college = {
  name: "Kingsway",
  address: "Gairidhara",
  phone: "01-442345",
};

const college2 = {
  name: "Patan College",
  address: "Patan",
  phone: "01-442345",
};

const c1Naame = college2.name;
const c1Address = college.address;

const student = {
  name: "Krishna",
  age: 20,
  // primaryAddress: "Jorpati",
  // secondaryAddressHouseNo: 123,
  // secondaryAddress: "Kapan",
  // primaryAddressHouseNo: 123,
  primaryAddress: {
    houseNo: 123,
    street: "Jorpati",
    pinCode: 12345,
    houseDesc: {
      talla: 9,
      bhada: 100000
    }
  },
  secondaryAddress: {
    houseNo: 123,
    street: "Kapan",
    pinCode: 12345,
  },
};


console.log(student.primaryAddress.houseDesc.bhada)
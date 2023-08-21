//function

const addition = function (a, b) {
  return a + b;
};

const subtraction = function (a, b) {
  return a - b;
};

// function addition (a, b) {
//     return a + b;
// }

// function subtraction (a, b) {
//     return a - b;
// }

// console.log(addition(1, 2));


// const getBrand = function(brand) {
//   console.log(brand);
//   return {
//     brand: brand,
//     website:`www.${brand}.com`
//   }
// }


//arrow functions

const getBrand = brand => (
{ 
    brand: brand,
    website:`www.${brand.toLowerCase()}.com`
}) //returning a object na duhen ()

const brand = getBrand("Nike");

console.log(JSON.stringify(brand,null,1));

const add = (a, b) => a + b;
const calculate = (a, b,sign) => {
  switch(sign){
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      //throw an error
  }
};
//function default parameter 
const getBrand2 = (brand = "Hello")=> (
  { 
      brand: brand,
      website:`www.${brand.toLowerCase()}.com`
  }) //returning a object na duhen ()
  

  //callback functions
  const greetUser = (username, callback) => {
    if(callback){
      console.log(callback(username));
    }else{
      console.log(`Hello ${username} without callback`);
    }
  }

  const callbackUser = username => {
    return `Hello ${username} from callback`;
  }
  // greetUser("Arjana",(username) => {
  //   return `Hello ${username}`;
  // } );

  greetUser("Arjana");
  greetUser("Arjana",callbackUser);

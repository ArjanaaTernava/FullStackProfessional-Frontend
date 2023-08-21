// var fistName = "Alex";
// var names = ["Alex","jamila","aisha"];
// console.log(
//     names
// );
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names.length);

const numbers = [1,2,3,4,5];

// numbers.forEach(number => console.log(number));
// const indexOfFive = numbers.indexOf(5);
// console.log(indexOfFive);
// numbers.slice(indexOfFive,1);
// console.log(numbers);

const numbesTimesTwo = numbers.map(number =>  number * 2); //callback function
console.log(numbesTimesTwo);   

const evenNumber = numbers.filter(number => number %2 == 0); //callback function
console.log(evenNumber);

//arrays desctructing

const names = [
    "james",
    "mariam",
    "alex",
    "jamila",
    "aisha"
];

const [james,mariam,alex,...rest] = names;
console.log(james);
console.log(rest);
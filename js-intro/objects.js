const person = {
    firstName:'John',
    lastName:'Doe',
    isFemale: false,
    age: 25,
    isMarried: false,
    isEmployed: false,
    job: 'programmer',
    addresses:{
        city:"London",
        postCode:"123"
    },
    toString: function(){ //functions within objects
        return `Name: ${this.firstName} Age: ${this.age}`
    },
    deleteMe : true

}; //object

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.isFemale);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.addresses.city);
// console.log(person.addresses.postCode);

// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log(JSON.stringify(person))
// ;


console.log(person.toString());
person["lastName"] = "Ahmed";
console.log(person);

delete person.deleteMe;
delete person["deleteMe"];
console.log(person);

for(const p in person){
    console.log(person[p]);
}

console.log(Object.keys(person));
console.log(Object.values(person));


// const firstName = person.firstName;
// const age = person.age;
// const job = person.job;

// console.log(
//     firstName,age,job);

//spread operator, object descructuring
const {firstName, age, job, addresses: { city }} = person;

console.log(firstName,age,job,city);


const address = { 
    city: "London",
    postCode: "123"
}

const john = {
    firstName:'John',
    lastName:'Doe',
    isFemale: false,
    age: 25,
    isMarried: false,
    isEmployed: false,
    job: 'programmer'
}

const person2 = {
    address: {...address},
    ...john
}

console.log(person2);
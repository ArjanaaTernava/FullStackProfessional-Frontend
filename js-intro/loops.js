//loops
var names = ["Alex","jamila","aisha"];

for (var i = 0; i < names.length; i++) { //for i
    console.log(names[i]);
}
names.forEach(element => { //for each element
    console.log(element);   
});

for (const name of names) { //for of each element
    console.log(name);
};


for (var i = 0; i <=10  ; i++) {
    console.log(i);
}


//hoisting - accesting variables outside of the scope, var, declares the variable outside of the scope

// var x = 10;

// function func() {
//     var x = 20;
//     console.log(x);
// }

//better choice is let 
// const per mos me mujt me reasign

//type coercion 
console.log(0 == false);
console.log(0 == true);
console.log("0" == false);
console.log("0" == true);
console.log("1" == 1);
// without type coercion
console.log(1 === "1");

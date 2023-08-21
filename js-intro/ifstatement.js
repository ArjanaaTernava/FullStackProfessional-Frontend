// if statements

var statement = !true;
if (statement) {
  console.log('true');
} else {
  console.log('false');
}


//ternary statements

var number= 6;

var result = number % 2 == 0 ? 'even' : 'odd';

console.log(result);

switch (statement) {
    case true:
        console.log('true');
        break;
    case false:
        console.log('false');
    default:
        break;
}
# JavaScript Basics - Class Notes

## Variables (`let` vs `const`)
- `let`: value can change
- `const`: value cannot be reassigned

```javascript
let number = 10;
number = number + 1; //alowed

const courseName = "Web Interface Programming 2";
// courseName = "New Name"; NOT ALLOWED
```

## Arrays with `let` and `const`
- arrays can be changed with methods like `push()`
- with `let`, the variable can change
- with `const`, the array itself stays the same, but its contents can change

```javascript
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);

const grades = [80, 90, 100];
grades.push(75);
console.log(grades);
```

## Objects
- objects store related data together
- values are accessed with dot notation
- object properties can be changes

```javascript
const student = {
    name: "Sam",
    grade: 85
};

console.log(student);
console.log(student.name);
console.log(student.grade);

student.name = "John";
console.log(student.name);

// student = {
//     name: "abc",
//     grade: 0
// }; NOT ALLOWED
```

## Block Scope
- variables declared inside a block only exist that block
- block scope happens inside `{}`

```javascript
let a = 5;

if (a == 5) {
    let message = "You guessed the number right!!!";
    console.log(message);
}

// console.log(message); NOT ALLOWED
```

## Function Scope
- variables declared inside a function only exist inside that function
- they cannot be used outside

```javascript
function showUser() {
    const username = "Mina";
    console.log(`${username} is logged in!`);
}

showUser();

// console.log(username); NOT ALLOWED
```

## Mini Check-In
- use `let` when the value can change
- use `const` when the value should stay the same

```javascript
let page = 1;
const maxItems = 20;
const categories = ["movies", "book"];
```

## Void Function
- a void function executes code
- it does not return a value

```javascript
function greetUser(name) {
    console.log("Hello, " + name + " I hope you're good");
}

const name = "Nora";
greetUser(name);
```

## Return Function
- a return function gives back a value
- the returned value can be stored in a variable

```javascript
function add(a, b) {
    return a + b;
}

const result = add(3, 5);
console.log("result is: " + result);

let number1 = add(10, 20);
```

## Full Name Function
- combines first name and last name
- returns one full name string

```javascript
function getFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}

const firstName = "Jane";
const lastName = "Doe";

const fullName = getFullName(firstName, lastName);
console.log(fullName);
```

## Greeting with Full Name
- uses the full name as an argument
- prints a greeting message

```javascript
function greet(fullName) {
    console.log("Hello, " + fullName + "!");
}

greet(fullName);
```

## DOM
- DOM stands for Document Object Model
- JavaScript can use the DOM to change HTML content
- `getElementById()` selects an HTML element by its id

```javascript
document.getElementById("title").innerText = "Hello, " + fullName + "!";
```

## Single Responsibility
- one function should do one job
- this makes code easier to read, test and reuse

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

function formatPrice(amount) {
    return "$" + amount.toFixed(2);
}

const totalPrice = calculateTotal(20.99, 3);

console.log(totalPrice);
console.log(formatPrice(totalPrice));
```

## Arrays
- arrays store multiple values
- values are accessed by index
- the first index is `0`

```javascript
const fruits = ["apple", "banana", "orange", "cherry"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
```

## `forEach()` Loop
- loops through each element in the array
- uses a callback function

```javascript
fruits.forEach((fruit) => console.log(fruit));

fruits.forEach(function (fruit) {
    console.log(fruit);
});
```
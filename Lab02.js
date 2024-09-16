// Question 1
const gretter = (myArray, counter) => {
    const greetText = 'Hello';
    for(let name of myArray) {
        console.log(greetText + name);
    }
}

gretter(['Randy Savage', 'Ric Flair', ' Hulk Hogan'], 3);

// Question 2

var firstCapital = (str) =>{
    const [first, ...rest] = [...str]; 
    return [first.toUpperCase(), ...rest].join('');
}

console.log(firstCapital("hello")); 
console.log(firstCapital('meet'))

// Question 3

const colors = ['red', 'green', 'blue'];

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join('');
const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);

// Question 4
const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log(filterLessThan20);

// Question 5
var array = [1, 2, 3, 4];
// Calculate sum
const calculateSum = array.reduce((sum, value) => sum + value, 0);
// Calculate product
const calculateProduct = array.reduce((product, value) => product * value, 1);

console.log(calculateSum);      
console.log(calculateProduct);  

// QUestion 6

// Car class
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

// Sedan subclass that extends Car
class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);  // Calls the constructor of the Car class
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

// Creating Car object
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); // Output: Model: Pontiac Firebird Engine 1976

// Creating Sedan object
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info()); // Output: Volvo SD has a balance of $30000.00




// Question 1
function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    let words = str.split(' ');

    // Iterate over each word and capitalize the first letter
    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Join the capitalized words back into a single string
    return capitalizedWords.join(' ');
}

// Example usage
let result = capitalizeFirstLetter("the quick brown fox");
console.log(result); // Output: "Capitalize The First Letter Of Each Word"

// Question 2
function findLargest(a, b, c) {
    let largest;

    // Compare the three numbers to find the largest
    if (a >= b && a >= c) {
        largest = a;
    } else if (b >= a && b >= c) {
        largest = b;
    } else {
        largest = c;
    }

    return largest;
}

let num1 = 10;
let num2 = 25;
let num3 = 15;

let largestNumber = findLargest(num1, num2, num3);
console.log(findLargest(1, 0, 1));        
console.log(findLargest(0, -10, -20));    
console.log(findLargest(1000, 510, 440)); 



// Question 3
function moveLastThreeToFront(str) {
    // Check if the string length is at least 3
    if (str.length < 3) {
        return "String must be at least 3 characters long";
    }

    // Extract the last three characters and the remaining part of the string
    let lastThree = str.slice(-3);
    let remainingStr = str.slice(0, -3);

    // Concatenate the last three characters at the start
    return lastThree + remainingStr;
}


console.log(moveLastThreeToFront("JavaScript")); 
console.log(moveLastThreeToFront("Python")); 
console.log(moveLastThreeToFront("Hi")); 

// Question 4
function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

// Example usage
console.log(angle_Type(47));  // Output: "Acute angle"
console.log(angle_Type(90));  // Output: "Right angle"
console.log(angle_Type(145)); // Output: "Obtuse angle"
console.log(angle_Type(180)); // Output: "Straight angle"

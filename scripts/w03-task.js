/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add (number1, number2) {
// Step 2: In the function, return the sum of the parameters number1 and number2
    return number1 + number2;
}
// Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers (event) {
    console.log(event.type)
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
// Step 4: Assign the return value to an HTML form element with an ID of sum
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract (number1, number2) {
    return number1 - number2;
}
function subtractNumbers (event) {
    console.log(event.type);
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply (number1, number2) {
    return number1 * number2;
}
function multiplyNumbers (event) {
    console.log(event.type);
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#multiplyNumbers').addEventListener('click', subtractNumbers);
    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide (number1, number2) {
    return (number1 / number2)
}
function divideNumbers (event) {
    console.log(event.type);
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);
    document.querySelector('#divideNumbers').addEventListener('click', subtractNumbers);
    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);
// Step 9: Test all of the mathematical functionality of the task3.html page.



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date;
console.log(date);
// Step 2: Declare a variable to hold the current year
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
const dateYear = date.getFullYear();
console.log(dateYear);
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector("#year").textContent = dateYear;



/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(numbersArray)
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbersArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').textContent = numbersArray.filter(number => {return number % 2 !== 0});
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = numbersArray.filter(number => {return number % 2 == 0});
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const initialValue = 0;
document.querySelector('#sumOfArray').textContent = numbersArray.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = numbersArray.map(x => x*2);
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const numbersX2 = numbersArray.map(x => x*2);
const initialValue2 = 0
document.querySelector('#sumOfMultiplied').textContent = numbersX2.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue2);
/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Alejandro Uribe';
let currentYear = '2023';
let profilePicture = "images/FotoAUDpng.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementByID('name');
const foodElement = document.getElementByID('food');
const yearElement = document.querySelector('#year');
const imgElement = document.createElement('img');




/* Step 4 - Adding Content */
nameElement.innerHTML ='<strong>' + fullName + '</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt","Profile image of Alejandro Uribe);




/* Step 5 - Array */
let favoriteFood = ["Tacos", "Steak", "Hamburger", "Salmon", "Pasta"];

const oneFood = "Birrria";
favoriteFood.push(oneFood);
foodElement.innerHTML = `<br> ${favoriteFood}`;

favoriteFood.shift();
foodElement,innerHTML += `<br> ${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br> ${favoriteFood}`;





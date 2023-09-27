/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Alejandro Uibe";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const profilePicture = "images/FotoAUDpng.png";


/* Step 3 - Element Variables */
const nameElement = document.getElementById ("name");
const foodElement = document.getElementById ("food");
const yearElement = document.querySelector ("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.src = profilePicture;
imageElement.alt = `Profile image of ${fullName}`;

/* Step 5 - Array */
let favoriteFood = ["Tacos", "Steak", "Hamburger", "Spicy Food", "Pizza", "Pasta"];

foodElement.innerHTML = `<p>${favoriteFood}</p>`;

let oneFood = "Birria";

favoriteFood.push (oneFood);

foodElement.innerHTML = `<br>${favoriteFood}`;

favoriteFood.shift ();

foodElement.innerHTML = `<br>${favoriteFood}`;

favoriteFood.pop ();

foodElement.innerHTML = `<br>${favoriteFood}`;
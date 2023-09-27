/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Alejandro Uribe";
const currentYear = new Date().getFullYear();
const profilePicture = "images/FotoAUDpng.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imgElement = document.getElementsByTagName('img')[0];




/* Step 4 - Adding Content */
nameElement.innerHTML =  '<strong>' + fullName + '</strong>';
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", "Profile image of Alejandro Uribe");


/* Step 5 - Array */

const favoriteFoods = ["Tacos", "Steak", "Hamburgers"];

foodElement.textContent = favoriteFoods.join(", ");

const newFavoriteFood = "Birria";

favoriteFoods.push(newFavoriteFood);

foodElement.textContent=  favoriteFoods.join(", ");

favoriteFoods.shift();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");

favoriteFoods.pop();

foodElement.innerHTML += "<br>" + favoriteFoods.join("<br>");




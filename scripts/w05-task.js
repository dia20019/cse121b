/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
function displayTemples (templeList) {
    templeList.forEach( (element) => {
        let templeName = document.createElement("h3");
        let newImage = document.createElement("img");
        newImage.setAttribute("src", element.imageUrl);
        newImage.setAttribute("alt", element.location );
        let article = document.createElement("article");
        article.append(templeName, newImage);
        templesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error("Network response not ok");
        }
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
        console.log(templeList);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

/* reset Function */
function reset() {
    document.getElementById("temples").innerHTML = "";
  }

/* sortBy Function */
function sortBy (temples) {
    reset ();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter(temp => temp.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        
        case "notutah":
            const notUtahTemples = temples.filter (temp => !temp.location.includes("Utah"));
            displayTemples(notUtahTemples);
            break;
        
        case "older":
            const olderTemples = temples.filter(temp => new Date(temp.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;

        case "all":
            displayTemples(temples);
            break;
    }
}
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList);
});

getTemples();
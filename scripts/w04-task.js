/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Alejandro Uibe",

    photo: "images/FotoAUDpng",

    favoriteFoods: [
        'Birria',
        'Tacos',
        'Beef',
        'Hambuguer',
        'Bacon'
    ],

    hobbies: [
        'Singing',
        'Painting',
        'Reading',
        'Gardening'
    ],

    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Cuautitlan, Mexico State',
      length: '2 years'
    },
    {
        place: 'Tlalnepantla, Mexico State',
        length: '17 years'
    },
    {
        place: 'Atizapan, Mexico Sate',
        length: '11 years'
    },
    {
        place: 'Gustavo A Madero, Mexico City',
        length: '1 years'
    },
    {
        place: 'Huejotzingo, Puebla',
        length: '3 months'
    },
    {
        place: 'Tlalnepantla, Mexico State',
        length: '5 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

/* Favorite Foods List*/
const favoriteFoods = [
    'Birria',
    'Tacos',
    'Beef',
    'Hambuguer',
    'Bacon'
];
const fFood = document.getElementById("favorite-foods");

for (let i = 0; i < favoriteFoods.length; i++) {
  const li = document.createElement("li");
  li.textContent = favoriteFoods[i];
  fFood.appendChild(li);
}

/* Hobbies List */
const hobbies = [
    'Singing',
    'Painting',
    'Reading',
    'Gardening'
];
const ul = document.getElementById("hobbies");

for (let i = 0; i < hobbies.length; i++) {
  const li = document.createElement("li");
  li.textContent = hobbies[i];
  ul.appendChild(li);
}

/* Places Lived DataList */
const placesLived = [
    {
        place: 'Cuautitlan, Mexico State',
        length: '2 years'
      },
      {
          place: 'Tlalnepantla, Mexico State',
          length: '17 years'
      },
      {
          place: 'Atizapan, Mexico Sate',
          length: '11 years'
      },
      {
          place: 'Gustavo A Madero, Mexico City',
          length: '1 years'
      },
      {
          place: 'Huejotzingo, Puebla',
          length: '3 months'
      },
      {
          place: 'Tlalnepantla, Mexico State',
          length: '5 years'
      }
  ];
  const dl = document.getElementById("places-lived");
  
  for (let i = 0; i < placesLived.length; i++) {
    const dt = document.createElement("dt");
    dt.textContent = placesLived[i].place;
    const dd = document.createElement("dd");
    dd.textContent = placesLived[i].length;
    dl.appendChild(dt);
    dl.appendChild(dd);
  }
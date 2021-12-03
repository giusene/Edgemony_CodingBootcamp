const solarSystem = [
  { name: "Sun", radius: 696340, surface: "star" },
  { name: "Mercury", radius: 2440, surface: "terrestrial" },
  { name: "Venus", radius: 6052, surface: "terrestrial" },
  { name: "Earth", radius: 6371, surface: "terrestrial" },
  { name: "Mars", radius: 3389, surface: "terrestrial" },
  { name: "Jupiter", radius: 69911, surface: "gas giant" },
  { name: "Saturn", radius: 58232, surface: "gas giant" },
  { name: "Uranus", radius: 25362, surface: "ice giant" },
  { name: "Neptune", radius: 24622, surface: "ice giant" },
];

const terrestrial = (planets) => planets.surface === "terrestrial";
const smallPlanets = (planets) => planets.radius <= 3000;
const stars = (planets) => planets.surface === "star";

const terrPlanets = solarSystem.filter(terrestrial);
const smallTerrPlanets = terrPlanets.filter(smallPlanets);
// const smallTerrPlanets = terrPlanets.filter((planets) => planets.radius <= 3000); <-- identico

const xyz = solarSystem.filter(terrestrial).filter(smallPlanets);

// console.log(smallTerrPlanets);
// console.log(xyz);



function ourMap(arr, callback) {
  const finalArray = [];

  for (num of arr) {
    finalArray.push(callback(num));
  }

  return finalArray;
}

const arr = [2, 4, 6, 8, 10];
// Il map equivale in tutto al nostro metodo 'ourMap'
arr.map((num) => num / 2); // Metodo
const resultOurMap = ourMap(arr, (num) => num / 2); // Funzione
console.log(resultOurMap);

// Esagerato!
// const allThePlanet = ourMap(solarSystem, (planet) => planet.name + " Planet");
// console.log(allThePlanet);

// PROTOTYPO ALLA MAP -- Perdeteci solo 15 minuti!!!!!
// Array.prototype.ourMap = function(callback) {
//   const finalArray = [];

//   for (num of this) {
//     finalArray.push(callback(num));
//   }

//   return finalArray;
// }





const translate = (planet) => {
  switch (planet.name) {
    case 'Sun':
      planet.name = 'Sole';
      break;

    case 'Marcury':
      planet.name = 'Mercurio';
      break;

    case 'Venus':
      planet.name = 'Venere';
      break;

    case 'Earth':
      planet.name = 'Terra';
      break;

    case 'Mars':
      planet.name = 'Marte';
      break;

    case 'Jupiter':
      planet.name = 'Giove';
      break;

    case 'Saturn':
      planet.name = 'Saturno';
      break;

    case 'Uranus':
      planet.name = 'Uranio';
      break;

    case 'Neptune':
      planet.name = 'Nettuno';
      break;

  }
  return planet
}


const onlyDiameter = (planets) => planets.diameter = planets.radius * 2;

const planetDiameter = (planets) => {
  onlyDiameter(planets)
  return planets
}

const sistemaSolare = solarSystem.map(translate).map(planetDiameter)
console.log(sistemaSolare);



// ------------------------ Modale comincia da qui ------------------------
function hideModal() {
  modal.style.opacity = 0;

  setTimeout(() => {
    document.body.removeChild(modal);
  }, 350);
}

function nopeButton() {
  hideModal()
  setTimeout(() => {
    newModal();
  }, 350)
}

const modal = document.querySelector(".modal");

setTimeout(() => {
  modal.classList.remove('display-none')
}, 1000)

const newModal = () => {
  document.body.firstElementChild.classList.add('explosion');
  setTimeout(() => {
    newModalWindow.style.opacity = 0;
    document.body.appendChild(newModalWindow);
    setTimeout(() => {
      newModalWindow.style.opacity = 1;
      timerFunc();
    }, 350)
  }, 1000)
}

const acceptBtn = document.querySelector("#btn-accept");
const denyBtn = document.querySelector("#btn-deny");

acceptBtn.addEventListener("click", hideModal, { once: true });
denyBtn.addEventListener("click", nopeButton, { once: true });



const monkeysEquipe = [
  { name: "John", aka: "lo spaventa passeri", surname: "Ross" },
  { name: "Ector", aka: "il corsaro", surname: "Mauss" },
  { name: "Franco", aka: "ciccio bello", surname: "La croix" },
  { name: "Mika", aka: "la regina del male", surname: "Peretti" },
  { name: "Lucy", aka: "il male", surname: "sconosciuto" },
];


const newModalWindow = document.createElement('div');
newModalWindow.classList.add('modal')

const monkeyNames = document.createElement('h3');
monkeyNames.setAttribute('id', 'monkey-name');
const monkeyAka = document.createElement('p')
monkeyAka.setAttribute('id', 'monkey-aka')
newModalWindow.appendChild(monkeyNames)
newModalWindow.appendChild(monkeyAka)
monkeyNames.textContent = `LE SCIMMIE KILLER STANNO ARRIVANDO...`;
// const monkeyNames = document.getElementById('monkey-name');
// const monkeyAka = document.getElementById('monkey-aka');
let counter = 0;
const monkeys = () => {
  if (counter < monkeysEquipe.length) {
    monkeyNames.textContent = `${monkeysEquipe[counter].name + ' ' + monkeysEquipe[counter].surname}`;
    monkeyAka.textContent = `${monkeysEquipe[counter].aka}`;
    counter++;
    console.log(counter)
  } else {
    monkeyNames.textContent = ``;
    monkeyAka.textContent = ``;
    newModalWindow.style.opacity = 0;
    clearInterval(monkeyTimer)
  }
}

let monkeyTimer;
const timerFunc = () => {
  monkeyTimer = setInterval(monkeys, 3000)
}

  // ------------------------ Modale fine ------------------------
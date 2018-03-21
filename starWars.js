const baseURL = 'https:swapi.co/api';
let url;

var starWarsPlanetsList = document.querySelector('ul');
const climate = document.querySelector('.climate')
const view = document.querySelector('.view')
const population = document.querySelector('.population')
// const submitBtn = document.querySelector('.submit')
const hotBtn = document.querySelector('.hot')
const tempBtn = document.querySelector('.temperate')
const coldBtn = document.querySelector('.cold')
// const mountBtn = document.querySelector('.mountains')
// const beachBtn = document.querySelector('.beach')
// const cityBtn = document.querySelector('.city')
// const highBtn = document.querySelector('.high')
// const modBtn = document.querySelector('.moderate')
// const lowBtn = document.querySelector('.low')
var planetClimate;




fetch('https://swapi.co/api/planets')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        // console.log(json)
        var climate = json.results
        console.log(climate)
        return planetClimate = climate
    })
// searchForm.addEventListener('submit', pickPlanet);
hotBtn.addEventListener('click', hotButton);
tempBtn.addEventListener('click', tempButton);
coldBtn.addEventListener('click', coldButton);
// mountBtn.addEventListener('click', landscape)
// beachBtn.addEventListener('click', landscape)
// cityBtn.addEventListener('click', landscape)
// highBtn.addEventListener('click', people)
// modBtn.addEventListener('click', people)
// lowBtn.addEventListener('click', people)
for (c of climate) {
    if (c.climate == 'temperate') {
        console.log(c.climate)
        // let listItem = document.createElement('li')
        // listItem.innerHTML = c.climate;
        // starWarsPlanetsList.appendChild(listItem)
    }
}

function hotButton(e) {
    e.preventDefault()
    console.log(planetClimate)
    for (let i = 0; i < planetClimate.length; i++) {
        const element = planetClimate[i];
        if (element.climate == "temperate, tropical" || element.climate == "temperate, arid"){
            let listItem = document.createElement('li')
            listItem.innerHTML = element.name;
            starWarsPlanetsList.appendChild(listItem)
        }
    }
}

function tempButton(e) {
    e.preventDefault()
    console.log(planetClimate)
    for (let i = 0; i < planetClimate.length; i++) {
        const element = planetClimate[i];
        if (element.climate == "temperate" || element.climate == "murky"){
            let listItem = document.createElement('li')
            listItem.innerHTML = element.name;
            starWarsPlanetsList.appendChild(listItem)
        }
    }
}

function coldButton(e) {
    e.preventDefault()
    console.log(planetClimate)
    for (let i = 0; i < planetClimate.length; i++) {
        const element = planetClimate[i];
        if (element.climate == "frozen"){
            let listItem = document.createElement('li')
            listItem.innerHTML = element.name;
            starWarsPlanetsList.appendChild(listItem)
        }
    }
}
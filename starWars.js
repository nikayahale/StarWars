const baseURL = 'https:swapi.co/api';
let url;
var planetClimate;
var singleClimate = [];
var multiClimate = [];

fetch('https://swapi.co/api/planets')
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        // console.log(json)
        var climate = json.results
        // console.log(climate)
        initializeClimate(climate)
        console.log(singleClimate)
        return planetClimate = climate
    })
setTimeout(() => console.log(planetClimate), 3000)

function getClimate(e) {
    for (let i = 0; i < singleClimate.length; i++) {
        const element = singleClimate[i];
        if (e.target.id === element.climate) {
            console.log('blaggity')
        }
        // console.log(element)
    }
}



function initializeClimate(climateArr) {
    for (let i = 0; i < climateArr.length; i++) {
        const element = climateArr[i];
        if (element.climate.includes(',')) {
            multiClimate.push(element)
            stringArray = element.climate.split(',')
        } else {
            singleClimate.push(element)
        }

    }

}
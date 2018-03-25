const baseURL = 'https:swapi.co/api';
let url = 'https://swapi.co/api/planets/';
let viewArr = [];
let theViews = [];
let popArr = [];
let planetArray = [];
let climateArray = [];
let choices = [];
function reset() {
    let row1 = "row1"
    let theRow = document.getElementById(row1)
    while (theRow.firstChild) {
        theRow.removeChild(theRow.firstChild)
    }
}

fetch(url).then(function (response) {
    return response.json();
})
    .then(function (json) {
        var climate = json.results
        console.log(climate)
        buildArray(climate)
        return
    })
function buildArray(planetClimate) {
    for (let i = 0; i < planetClimate.length; i++) {
        const element = planetClimate[i];
        let stringArray = [];
        let terrainArray = [];
        if (element.climate.includes(',')) {
            tempStringArray = element.climate.split(',')
            stringArray = tempStringArray
        } else {
            stringArray.push(element.climate)
        }
        if (element.terrain.includes(',')) {
            tempTerrainArray = element.terrain.split(',')
            terrainArray = tempTerrainArray
        } else {
            terrainArray.push(element.terrainArray)
        }
        let planet = new Planet(element.name, stringArray, terrainArray, element.population)
        planetArray.push(planet)
    }
    console.log(planetArray)
}
function startHere() {
    let row1 = "row1"
    let theRow = document.getElementById(row1)
    let newH3 = document.createElement('h3')
    reset()
    for (let i = 0; i < planetArray.length; i++) {
        const element = planetArray[i];
        for (let j = 0; j < element.climate.length; j++) {
            const newElement = element.climate[j];
            if (!climateArray.includes(newElement)) {
                climateArray.push(newElement)
            }
        }
    }
    newH3.setAttribute('class', 'col-12')
    newH3.innerText = "Which is your favorite climate? :  ";
    theRow.prepend(newH3)
    for (let i = 0; i < climateArray.length; i++) {
        const element = climateArray[i];
        makeButtons(row1, element, 'getView(event)')
    }
}
function getView(e) {
    let viewArr = []
    let theID = e.target.id
    let theBool = false
    reset()
    for (let i = 0; i < planetArray.length; i++) {
        const element = planetArray[i];
        for (let j = 0; j < element.climate.length; j++) {
            const theElement = element.climate[j];
            if (theElement === theID) {
                viewArr.push(element)
            }
        }
    }
    for (let i = 0; i < viewArr.length; i++) {
        const element = viewArr[i];
        for (let j = 0; j < element.views.length; j++) {
            let theElement = element.views[j];
            if (theElement != undefined) {
                theElement = theElement.trim()
                if (!theViews.includes(theElement)) {
                    theViews.push(theElement)
                    if (!popArr.includes(element)) {
                        popArr.push(element)
                    }
                }
            }
        }
    }
    let row1 = "row1"
    let theRow = document.getElementById(row1)
    let newH3 = document.createElement('h3')
    newH3.setAttribute('class', 'col-12')
    newH3.innerText = "What view do you like best?   :  ";
    theRow.appendChild(newH3)
    for (let i = 0; i < theViews.length; i++) {
        const element = theViews[i];
        makeButtons(row1, element, 'getResults(event)')
    }
}
function getResults(e) {
    // choices = [];
    reset()
    for (let i = 0; i < popArr.length; i++) {
        const element = popArr[i];
        // console.log(element.views)
        for (let j = 0; j < element.views.length; j++) {
            const thisElement = element.views[j];
            // console.log(thisElement)
            // choices.push(element)
            console.log(e.target.id)
            console.log(e.target.id == thisElement)
            if(e.target.id == thisElement){
                if (!choices.includes(element)) {
                    choices.push(element)
                }
            }
        }
        console.log(choices)
    }
    let row1 = "row1"
    let theRow = document.getElementById(row1)
    let newH3 = document.createElement('h3')
    newH3.setAttribute('class', 'col-12')
    newH3.innerText = "Your choices are   :  ";
    theRow.appendChild(newH3)
    for (let i = 0; i < choices.length; i++) {
        const element = choices[i];
        makePanels(row1, element)
    }
}
function makeButtons(parent, btnName, clickFunc) {
    let btnParent = document.getElementById(parent)
    let booton = document.createElement('button')
    booton.innerText = btnName
    booton.setAttribute('id', btnName)
    booton.setAttribute('class', 'btn btn-primary')
    booton.setAttribute('onclick', clickFunc)
    btnParent.appendChild(booton)
}
function makePanels(parent, element = {}) {
    let panelParent = document.getElementById(parent)
    let panel = document.createElement('div')
    let panelHeading = document.createElement('div')
    let panelContent = document.createElement('div')
    panel.setAttribute('class', 'panel panel-default')
    panelHeading.setAttribute('class', 'panel-heading')
    panelHeading.innerText = element.name
    panelContent.setAttribute('class', 'panel-body')
    panelContent.innerText = `Population : ${element.population}`
    panel.appendChild(panelHeading)
    panel.appendChild(panelContent)
    panelParent.appendChild(panel)
}
class Planet {
    constructor(name, climate = [], views = [], population) {
        this.name = name,
        this.climate = climate,
        this.views = views,
        this.population = population
    }

}
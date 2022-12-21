//Sélection du main
let mainAll = document.getElementsByClassName('main')[0];
let stockData = [];

async function catchData()
{
    let save = JSON.parse(localStorage.getItem('response'));
    //const response = await fetch(
       // 'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=001e5fb3999f87d9911c72d5600aac55&units=metric',
       // {
        //    method: 'GET'
       // }
    //);
    //let stock = await response.json();
    stockData = save;
    localStorage.setItem('response', JSON.stringify(stockData));
    //console.log(" " + allTimes[0].dt_txt + " " +  allTimes[0].main.temp + " " + allTimes[0].weather[0].description + " " + stockData.city.name);
}
catchData()

let allTimes = stockData.list;
//Création d'un objet à partir du tableau de données
let oneDay = {
        city: stockData.city.name,
        date: allTimes[0].dt_txt,
        degree:  allTimes[0].main.temp,
        wheaterDes: allTimes[0].weather[0].description,
}

let fourDay = [
{
    city: stockData.city.name,
    date: allTimes[1].dt_txt,
    degree:  allTimes[1].main.temp,
    wheaterDes: allTimes[1].weather[0].description,
},
{
    city: stockData.city.name,
    date: allTimes[2].dt_txt,
    degree:  allTimes[2].main.temp,
    wheaterDes: allTimes[2].weather[0].description,
},
{
    city: stockData.city.name,
    date: allTimes[3].dt_txt,
    degree:  allTimes[3].main.temp,
    wheaterDes: allTimes[3].weather[0].description,
},
{
    city: stockData.city.name,
    date: allTimes[4].dt_txt,
    degree:  allTimes[4].main.temp,
    wheaterDes: allTimes[4].weather[0].description,
},
]

function addElement() {
    //Création d'une div reprenant une carte
    let divCart = document.createElement('div');
    divCart.setAttribute('class', 'main__cart');
    mainAll.appendChild(divCart);
    
    //Création de la GRANDE div pour le 1er jour
    let divCart1 = document.createElement('div');
    divCart1.setAttribute('class', 'main__cart1');
    divCart.appendChild(divCart1);

    //Création de la div contenant le nom de la ville
    let cartCity = document.createElement('h2');
    cartCity.setAttribute('class', 'main__cart1__city');
    divCart1.appendChild(cartCity);
    cartCity.textContent = oneDay.city;

    //Création de la div contenant la date
    let cartDate = document.createElement('div');
    cartDate.setAttribute('class', 'main__cart1__date');
    divCart1.appendChild(cartDate);
    cartDate.textContent = oneDay.date;

    //Création de la div contenant la température
    let cartDegree = document.createElement('div');
    cartDegree.setAttribute('class', 'main__cart1__degree');
    divCart1.appendChild(cartDegree);
    cartDegree.textContent = oneDay.degree;

    //Création de la div contenant la description du temps
    let cartWeather = document.createElement('div');
    cartWeather.setAttribute('class', 'main__cart1__wheater');
    divCart1.appendChild(cartWeather);
    cartWeather.textContent = oneDay.wheaterDes;

    //Création de la DEUXIEME div pour les 4 autres jours
    let divCart2 = document.createElement('div');
    divCart2.setAttribute('class', 'main__cart2');
    divCart.appendChild(divCart2);
    //Création de la boucle pour les 4 jours
    for ( i = 0; i<4; i++){

    //Création de la div unique par jour
    let divCart2All = document.createElement('div');
    divCart2All.setAttribute('class', 'main__cart2__all');
    divCart2.appendChild(divCart2All);

    //Création de la div contenant la date
    let cartDateRepeat = document.createElement('div');
    cartDateRepeat.setAttribute('class', 'main__cart2__all--date');
    divCart2All.appendChild(cartDateRepeat);
    cartDateRepeat.textContent = fourDay[i].date;

    //Création de la div contenant la température
    let cartDegreeRepeat = document.createElement('div');
    cartDegreeRepeat.setAttribute('class', 'main__cart2__all--degree');
    divCart2All.appendChild(cartDegreeRepeat);
    cartDegreeRepeat.textContent = fourDay[i].degree;

    //Création de la div contenant la description du temps
    let cartWeatherRepeat = document.createElement('div');
    cartWeatherRepeat.setAttribute('class', 'main__cart2__all--wheather');
    divCart2All.appendChild(cartWeatherRepeat);
    cartWeatherRepeat.textContent = fourDay[i].wheaterDes;
    }
    //Effacer les premières données
    mainAll.firstChild.remove();
}

document.getElementById('submit').addEventListener('click', function(){addElement()});
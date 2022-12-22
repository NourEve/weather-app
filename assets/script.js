

//Sélection du main
let mainAll = document.getElementsByClassName('main')[0];
let stockData = [];

async function catchData()
{
    let save = JSON.parse(localStorage.getItem('response'));
    //const response = await fetch(
      //  'https://api.openweathermap.org/data/2.5/forecast?q=London&appid=001e5fb3999f87d9911c72d5600aac55&units=metric',
      //  {
        //    method: 'GET'
       // }
    //);
    //let stock = await response.json();
    stockData = save;
    localStorage.setItem('response', JSON.stringify(stockData));

}
catchData()
//document.getElementById('submit').addEventListener('click', function(){catchData()});

let allTimes = stockData.list;
let allCity = stockData.city;
console.log(allTimes);

//Création d'un objet à partir du tableau de données
let oneDay = {
        city: allCity.name,
        date: allTimes[0].dt_txt.split(' ')[0],
        degree:  (allTimes[0].main.temp + ' °C'),
        wheaterDes: allTimes[0].weather[0].description,
        sunRise: allCity.sunrise,
        sunSet: allCity.sunset,
}
console.log(new Date ((oneDay.sunRise)*1000));
console.log(new Date ((oneDay.sunSet)*1000));

//Moyenne des températures
function CalAverage (newArray){
    let compt = 0;
        totalDegree = 0;
        newDate = "";
        newArray = [];

    for (let elem of allTimes) {
        if (!newDate || newDate == elem.dt_txt.split(' ')[0] && allTimes.indexOf(elem) < allTimes.length - 1) {
            newDate = elem.dt_txt.split(' ')[0];
            totalDegree += elem.main.temp;
            compt++;
        }
        else {
            newArray.push([newDate,((totalDegree/compt).toFixed(2))]);
            compt = 1;
            totalDegree = elem.main.temp;
            newDate = elem.dt_txt.split(' ')[0];
        }
    }
    return newArray;
}
let newAverage = [];
let responseAverage = CalAverage(newAverage);

//Création de l'objet des 5 jours suivants grâce à la fonction des moyennes
let fourDay = [
{
    city: stockData.city.name,
    date: responseAverage[1][0],
    degree: (responseAverage[1][1] + ' °C'),
},
{
    city: stockData.city.name,
    date: responseAverage[2][0],
    degree: (responseAverage[2][1] + ' °C'),
},
{
    city: stockData.city.name,
    date: responseAverage[3][0],
    degree: (responseAverage[3][1] + ' °C'),
},
{
    city: stockData.city.name,
    date: responseAverage[4][0],
    degree: (responseAverage[4][1] + ' °C'),
},
{
    city: stockData.city.name,
    date: responseAverage[5][0],
    degree: (responseAverage[5][1] + ' °C'),
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
    let arrayDay = (oneDay.date).split("-");
    cartDate.textContent = arrayDay[2]+"/"+arrayDay[1];

    //Création de la div contenant la température
    let cartDegree = document.createElement('div');
    cartDegree.setAttribute('class', 'main__cart1__degree');
    divCart1.appendChild(cartDegree);
    cartDegree.textContent = oneDay.degree;

    //Création de la div contenant la description du temps
    let cartWeather = document.createElement('div');
    cartWeather.setAttribute('class', 'main__cart1__wheater');
    divCart1.appendChild(cartWeather);
    cartWeather.textContent = (' ');
    //fonction permettant de placer une image en fonction du temps
        if (oneDay.wheaterDes == 'clear sky') {
            cartWeather.classList.add('main__cart1__wheater--clearsky');
        }
        else if (oneDay.wheaterDes == 'few clouds') {
            cartWeather.classList.add('main__cart1__wheater--fewclouds');
        }
        else if (oneDay.wheaterDes == 'scattered clouds') {
            cartWeather.classList.add('main__cart1__wheater--scatteredclouds');
        }
        else if (oneDay.wheaterDes == 'broken clouds') {
            cartWeather.classList.add('main__cart1__wheater--brokenclouds');
        }
        else if (oneDay.wheaterDes == 'shower rain') {
            cartWeather.classList.add('main__cart1__wheater--showerrain');
        }
        else if (oneDay.wheaterDes == 'rain') {
            cartWeather.classList.add('main__cart1__wheater--rain');
        }
        else if (oneDay.wheaterDes == '	thunderstorm') {
            cartWeather.classList.add('main__cart1__wheater--thunderstorm');
        }
        else if (oneDay.wheaterDes == 'snow') {
            cartWeather.classList.add('main__cart1__wheater--snow');
        }
        else if (oneDay.wheaterDes == 'mist') {
            cartWeather.classList.add('main__cart1__wheater--mist');
        }
        else {
            cartWeather.style.visibility = 'hidden';
        }

    //Création de la DEUXIEME div pour les 4 autres jours
    let divCart2 = document.createElement('div');
    divCart2.setAttribute('class', 'main__cart2');
    divCart.appendChild(divCart2);
    //Création de la boucle pour les 4 jours
    for ( i = 0; i<5; i++){

    //Création de la div unique par jour
    let divCart2All = document.createElement('div');
    divCart2All.setAttribute('class', 'main__cart2__all');
    divCart2.appendChild(divCart2All);

    //Création de la div contenant la date
    let cartDateRepeat = document.createElement('div');
    cartDateRepeat.setAttribute('class', 'main__cart2__all--date');
    divCart2All.appendChild(cartDateRepeat);
    let arrayDayRepeat = (fourDay[i].date).split("-");
    cartDateRepeat.textContent = arrayDayRepeat[2]+"/"+arrayDayRepeat[1];

    //Création de la div contenant la température
    let cartDegreeRepeat = document.createElement('div');
    cartDegreeRepeat.setAttribute('class', 'main__cart2__all--degree');
    divCart2All.appendChild(cartDegreeRepeat);
    cartDegreeRepeat.textContent = fourDay[i].degree;

    /*//Création de la div contenant la description du temps
    let cartWeatherRepeat = document.createElement('div');
    cartWeatherRepeat.setAttribute('class', 'main__cart2__all--wheather');
    divCart2All.appendChild(cartWeatherRepeat);
    cartWeatherRepeat.textContent = fourDay[i].wheaterDes;*/
    }
    //Effacer les premières données
    mainAll.firstChild.remove();
}

document.getElementById('submit').addEventListener('click', function(){addElement()});
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
let objectData = {
    city: stockData.city.name,
    date: allTimes[0].dt_txt,
    degree:  allTimes[0].main.temp,
    wheaterDes: allTimes[0].weather[0].description,
}

function addElement() {
    //Création d'une div reprenant une carte
    let divCart = document.createElement('div');
    divCart.setAttribute('class', 'main__cart');
    mainAll.appendChild(divCart);
    console.log('Bonjour');

    //Création de la div contenant le nom de la ville
    let cartCity = document.createElement('h2');
    cartCity.setAttribute('class', 'main__cart__city');
    divCart.appendChild(cartCity);
    cartCity.textContent = objectData.city;

    //Création de la div contenant la date
    let cartDate = document.createElement('div');
    cartDate.setAttribute('class', 'main__cart__date');
    divCart.appendChild(cartDate);
    cartDate.textContent = objectData.date;

    //Création de la div contenant la température
    let cartDegree = document.createElement('div');
    cartDegree.setAttribute('class', 'main__cart__degree');
    divCart.appendChild(cartDegree);
    cartDegree.textContent = objectData.degree;

    //Création de la div contenant la description du temps
    let cartWeather = document.createElement('div');
    cartWeather.setAttribute('class', 'main__cart__wheater');
    divCart.appendChild(cartWeather);
    cartWeather.textContent = objectData.wheaterDes;

    //Effacer les premières données
    mainAll.firstChild.remove();
}

document.getElementById('submit').addEventListener('click', function(){addElement()});
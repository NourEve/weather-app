//Sélection du main
let mainAll = document.getElementsByClassName('main')[0];

function catchData()
{
    let fetchAPI = (nameCity) => fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ nameCity +'&appid=001e5fb3999f87d9911c72d5600aac55&units=metric');

    //Sauvegarde du nom des villes
    saveInput();

    //Appel de l'API
    fetchAPI(inputCity)
        .then ((response) => response.json())
        .then ((json) => {
            let allTimes = json.list;
                allCity = json.city;

            //Moyenne des températures
            let newAverage = [];
                responseAverage = CalAverage(newAverage, allTimes);

            //Création du 1er objet reprenant les données actuelles
            let oneDay = {
                city: allCity.name,
                date: allTimes[0].dt_txt.split(' ')[0],
                degree:  (allTimes[0].main.temp + ' °C'),
                wheaterDes: allTimes[0].weather[0].id,
                sunRise: allCity.sunrise,
                sunSet: allCity.sunset,
            }

            //Création de l'objet des 5 jours suivants
            let fourDay = [
            {
                city: allCity.name,
                date: responseAverage[1][0],
                degree: (responseAverage[1][1] + ' °C'),
            },
            {
                city: allCity.name,
                date: responseAverage[2][0],
                degree: (responseAverage[2][1] + ' °C'),
            },
            {
                city: allCity.name,
                date: responseAverage[3][0],
                degree: (responseAverage[3][1] + ' °C'),
            },
            {
                city: allCity.name,
                date: responseAverage[4][0],
                degree: (responseAverage[4][1] + ' °C'),
            },
            /*{
                city: allCity.name,
                date: responseAverage[5][0],
                degree: (responseAverage[5][1] + ' °C'),
            },*/
            ]

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

            //Création de la div comprenant la température et la description du temps
            let divMid = document.createElement('div');
            divMid.setAttribute('class', 'main__cart1__divmid');
            divCart1.appendChild(divMid);

            //Création de la div contenant la température
            let cartDegree = document.createElement('div');
            cartDegree.setAttribute('class', 'main__cart1__degree');
            divMid.appendChild(cartDegree);
            cartDegree.textContent = oneDay.degree;

            //Création de la div contenant la description du temps
            let cartWeather = document.createElement('div');
            cartWeather.setAttribute('class', 'main__cart1__weather');
            divMid.appendChild(cartWeather);
            cartWeather.textContent = (' ');

            //fonction permettant de placer une image en fonction du temps
            if (oneDay.wheaterDes == 800) {
                cartWeather.classList.add('main__cart1__weather--clearsky');
            }
            else if (oneDay.wheaterDes == 801) {
                cartWeather.classList.add('main__cart1__weather--fewclouds');
            }
            else if (oneDay.wheaterDes == 802) {
                cartWeather.classList.add('main__cart1__wheater--scatteredclouds');
            }
            else if (oneDay.wheaterDes == 803 || oneDay.wheaterDes == 804) {
                cartWeather.classList.add('main__cart1__weather--brokenclouds');
            }
            else if ((oneDay.wheaterDes >= 300 && oneDay.wheaterDes <= 301) || (oneDay.wheaterDes >= 520 && oneDay.wheaterDes <= 531)) {
                cartWeather.classList.add('main__cart1__weather--showerrain');
            }
            else if (oneDay.wheaterDes >= 500 && oneDay.wheaterDes <= 504) {
                cartWeather.classList.add('main__cart1__weather--rain');
            }
            else if (oneDay.wheaterDes >= 200 && oneDay.wheaterDes <= 232) {
                cartWeather.classList.add('main__cart1__weather--thunderstorm');
            }
            else if ((oneDay.wheaterDes == 511) || (oneDay.wheaterDes >= 600 && oneDay.wheaterDes <= 622)) {
                cartWeather.classList.add('main__cart1__weather--snow');
            }
            else if (oneDay.wheaterDes >= 700 && oneDay.wheaterDes <= 781)  {
                cartWeather.classList.add('main__cart1__weather--mist');
            }
            else {
                cartWeather.style.visibility = 'hidden';
            }

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
        })

        //Effacer les premières données
        .then (mainAll.firstChild.remove())
}

//Sauvegarder le nom des villes dans le select
function saveInput() {
    let inputCity = document.getElementById('inputCity').value;
        arrayCity = [];

    arrayCity = JSON.parse(localStorage.getItem('save'));
    if (!arrayCity) {
        arrayCity = [];
    }

    if (arrayCity.indexOf(inputCity) == -1)
        arrayCity.push(inputCity);
    const objJson = JSON.stringify(arrayCity);
    localStorage.setItem('save', objJson);
    console.log(arrayCity);
    document.getElementById('saveCity').innerText = "";
    for (let elem of arrayCity) {
        let optionCity = document.createElement('option');
        optionCity.setAttribute('value', elem);
        optionCity.setAttribute('class', 'option');
        optionCity.textContent = elem;
        document.getElementById('saveCity').appendChild(optionCity);
    }
}

//Moyenne des températures
function CalAverage (newArray, listJson){
    let compt = 0;
        totalDegree = 0;
        newDate = "";
        newArray = [];

    for (let elem of listJson) {
        if (!newDate || newDate == elem.dt_txt.split(' ')[0] && listJson.indexOf(elem) < listJson.length - 1) {
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

document.getElementById('submit').addEventListener('click', function(){catchData()});

//localStorage.clear();
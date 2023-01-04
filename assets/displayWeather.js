import { saveInput } from "./saveInput.js";
import { calAverage } from "./calAverage.js";
import { createCartToday } from "./createCartToday.js";
import { createCartOthersDays } from "./createCartOthersDays.js";

export function displayWeather()
{
    let inputCity = document.getElementById('inputCity').value;
    let fetchAPI = (nameCity) => fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ nameCity +'&appid=001e5fb3999f87d9911c72d5600aac55&units=metric');
        
    let arrayCity = JSON.parse(localStorage.getItem('save'))
        if (!arrayCity) {
        arrayCity = []
        }

    //Sauvegarder le nom des villes dans le select
    saveInput(arrayCity);

    //Sélection du main
    let mainAll = document.getElementsByClassName('main')[0];

    //Appel de l'API
    fetchAPI(inputCity)
        .then ((response) => response.json())
        .then ((json) => {
            let allTimes = json.list,
                allCity = json.city;

            //Moyenne des températures
            let newAverage = [],
                responseAverage = calAverage(newAverage, allTimes);

            //Création du 1er objet avec les données actuelles
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
    
            //Création de la GRANDE div pour les données actuelles
            createCartToday(divCart, oneDay);

            //Création de la DEUXIEME div pour les 4 autres jours
            createCartOthersDays(divCart, fourDay);
        })

        //Effacer les premières données
        .then (mainAll.firstChild.remove())
}

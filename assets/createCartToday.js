import { iconWeather } from "./iconWeather.js";

//Création de la carte avec les données actuelles
export function createCartToday(divCart, oneDay) {
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
    cartDate.textContent = arrayDay[2] + "/" + arrayDay[1];

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
    iconWeather(oneDay, cartWeather);
}
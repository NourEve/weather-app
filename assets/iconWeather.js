//Changement de l'icone en fonction du temps qu'il fait
export function iconWeather(oneDay, cartWeather) {
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
    else if (oneDay.wheaterDes >= 700 && oneDay.wheaterDes <= 781) {
        cartWeather.classList.add('main__cart1__weather--mist');
    }
    else {
        cartWeather.style.visibility = 'hidden';
    }
}
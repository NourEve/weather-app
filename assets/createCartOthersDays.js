//Création de la carte reprenant les 4 jours suivants
export function createCartOthersDays(divCart, fourDay) {
    let divCart2 = document.createElement('div');
    divCart2.setAttribute('class', 'main__cart2');
    divCart.appendChild(divCart2);
    //Création de la boucle pour les 4 jours
    for (let i = 0; i < 4; i++) {

        //Création de la div unique par jour
        let divCart2All = document.createElement('div');
        divCart2All.setAttribute('class', 'main__cart2__all');
        divCart2.appendChild(divCart2All);

        //Création de la div contenant la date
        let cartDateRepeat = document.createElement('div');
        cartDateRepeat.setAttribute('class', 'main__cart2__all--date');
        divCart2All.appendChild(cartDateRepeat);
        let arrayDayRepeat = (fourDay[i].date).split("-");
        cartDateRepeat.textContent = arrayDayRepeat[2] + "/" + arrayDayRepeat[1];

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
}
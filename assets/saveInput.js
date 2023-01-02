//Sauvegarder le nom des villes dans le select
export function saveInput(arrayCity) {
    let inputCity = document.getElementById('inputCity').value;
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
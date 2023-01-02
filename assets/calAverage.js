//Moyenne des températures
export function calAverage (newArray, listJson){
    let compt = 0,
        totalDegree = 0,
        newDate = "";

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

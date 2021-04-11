//Duotas vardų ir pavardžių masyvas:
//let sarasas = ["Jonas Jonaitis", "Onutė Pakalnutė", "Juozas Juozaitis", "Marytė Rytė", "Antanas Antanaitis"];
////Jums reikia parašyti funkciją, kuriai padavus šitą masyvą kaip argumentą, ši jį išspausdintų į sąrašą taip kaip pateikta paveikslėlyje:-->

function printListOfPersons() {
    let listArray = [
        "Jonas Jonaitis",
        "Onutė Pakalnutė",
        "Juozas Juozaitis",
        "Marytė Rytė",
        "Antanas Antanaitis"
    ];

    let olElements = document.getElementsByTagName("ol")[0];

    for (i = 0; i < listArray.length; i++) {

        let element = document.createElement("li");

        element.innerHTML = listArray[i];

        olElements.appendChild(element);
    }
}



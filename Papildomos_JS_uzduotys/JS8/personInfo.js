//Duotas vardų ir pavardžių masyvas:
//let sarasas = ["Jonas Jonaitis", "Onutė Pakalnutė", "Juozas Juozaitis", "Marytė Rytė", "Antanas Antanaitis"];
////Jums reikia parašyti funkciją, kuriai padavus šitą masyvą kaip argumentą, ši jį išspausdintų į sąrašą taip kaip pateikta paveikslėlyje:-->


function printListOfPersons() {
    let list = [
        "Jonas Jonaitis",
        "Onutė Pakalnutė",
        "Juozas Juozaitis",
        "Marytė Rytė",
        "Antanas Antanaitis"
    ];

    let liElements = document.getElementsByTagName("li");

    for(let i = 0; i < list.length; i++) {
        liElements[i].innerHTML = list[i];
    }
}

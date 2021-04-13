//<!--Parašykite funkciją, kuriai būtų paduodami du argumentai: masyvas su vardais (pvz. ["Jonas", "Petras", "Martynas", "Ona", "Urtė", "Ema"]) ir vardas iš masyvo kurio negrąžinti. Funkcija turi grąžinti naują masyvą, be vieno elemento (to kuris buvo nurodytas kaip antras argumentas funkcijoje).-->

let namesArray = [
    "Jonas",
    "Petras",
    "Martynas",
    "Ona",
    "Urtė",
    "Ema"
];

let nameNoReturn = "Ona";

function getNewListOfPersonNames(namesArray , nameNoReturn) {

    for (i = 0; i < namesArray.length; i++) {
        if (namesArray[i] === nameNoReturn) {
            namesArray.splice(i, 1);
        }
    }

    return namesArray;
}




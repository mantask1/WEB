//<!--Parašykite funkciją, kuriai būtų paduodami du argumentai: masyvas su vardais (pvz. ["Jonas", "Petras", "Martynas", "Ona", "Urtė", "Ema"]) ir vardas iš masyvo kurio negrąžinti. Funkcija turi grąžinti naują masyvą, be vieno elemento (to kuris buvo nurodytas kaip antras argumentas funkcijoje).-->



function getNewListOfPersonNames() {

    let namesArray = [
        "Jonas",
        "Petras",
        "Martynas",
        "Ona",
        "Urtė",
        "Ema"
    ]

    let nameNoReturn = "Ona";

    for (i = 0; i < namesArray.length; i++) {
        if (namesArray[i] === nameNoReturn) {
            namesArray.splice(i, 1);
        }
    }

    return namesArray;
}























//
//    let body = document.getElementsByTagName("body")[0];
//
//    for (let i = 0; i < names.length; i++){
//        let element = document.createElement("div");
//
//        element.innerHTML = names[i];
//        body.appendChild(element);


//        let newArray = names.slice(0, 4);


//    console.log(newArray);
//    function printListOfPerson(names, "Jonas") {

//        return let newArray[]

//    }

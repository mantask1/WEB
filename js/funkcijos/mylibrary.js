function getNumbersArray(numberX){
    // reikes pradinio masivyo
    var numbersArray = [];

    //ciklas
    for(var i = 1; i <= numberX;i++){
        //prideti kiekviena iteracijos metu po skaiciu i masyva
        numbersArray.push(i);
    }

    //grazinti uzpildyta masyva
    return numbersArray;


}

function printNumberArrayFromTop(array){

    var body = document.getElementsByTagName("body")[0];

    for(var i = 0; i<array.length;i++){
        var element = document.createElement("div")
        element.innerHTML = array[i];
        body.appendChild(element);


    }
}

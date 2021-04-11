function printDayOfWeekByNumber(index) {
    let weekDays = [
        "Pirmadienis",
        "Antradienis",
        "Trečiadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "Šeštadienis",
        "Sekmadienis"
    ];

    if (isNaN(index)) {
        let text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
        $(".container").append("<div>" + text + "</div>")
    }
    else if (index < 1 || index > 7) {
        let text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
        $(".container").append("<div>" + text + "</div>")
    }
    else {
        let text = weekDays[index - 1];
        $(".container").append("<div>" + text + "</div>")

        //        let divElements = document.getElementsByTagName("div");
        //
        //        let divElement = divElements[0];
        //
        //        divElement.innerHTML = text;
        //
        //        console.log(divElement);
    }
}

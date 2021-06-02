
//let element = "";
function printDayOfWeekByNumber(index, Element) {
    let weekDays = [
        "Pirmadienis",
        "Antradienis",
        "Trečiadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "Šeštadienis",
        "Sekmadienis"
    ];



    if (isNaN(index, Element)) {
        let text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
        $Element.append("<div>" + text + "</div>")
    }
    else if (index < 1 || index > 7, Element) {
        let text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
        $Element.append("<div>" + text + "</div>")
    }
    else {
        let text = weekDays[index - 1];
        $Element.append("<div>" + text + "</div>")
    }
}

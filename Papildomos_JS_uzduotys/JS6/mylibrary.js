function getDayOfWeekByNumber(index) {
    let weekDays = [
        "Pirmadienis",
        "Antradienis",
        "Trečiadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "Šeštadienis",
        "Sekmadienis",
    ];

    var text;

    if (isNaN(index)) {
        return text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
    }
    else if(index < 1 || index > 7) {
        return text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
    }
    else {
        return weekDays[index - 1];
    }
}

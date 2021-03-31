function dayOfWeekByNumber(index) {
    let weekDays = [
        "Pirmadienis",
        "Antradienis",
        "Trečiadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "Šeštadienis",
        "Sekmadienis",
    ];

    if (isNaN(index)) {
        let text = "Klaida. Įveskite skaičių nuo 1 iki 7.";
        console.log(text);
    }
    else if (index < 1 || index > 7) {
        let text = null;
        console.log(text);
    }
    else {
        let text = weekDays[index - 1];
        console.log(text);
    }
}

function DayOfWeekByNumber(index){
    let weekDays = [
        "Pirmadienis",
        "Antradienis",
        "Trečiadienis",
        "Ketvirtadienis",
        "Penktadienis",
        "Šeštadienis",
        "Sekmadienis",
    ];

    if(index < 1 || index > 7){
        return null;
    }
    else{
        return weekDays[index-1];
    }

    //    let body = document.getElementsByTagName("body")[0];
    //    let element = document.createElement("div");
    //    element.innerHTML = weekDays;
    //    div.appendChild(element);
}

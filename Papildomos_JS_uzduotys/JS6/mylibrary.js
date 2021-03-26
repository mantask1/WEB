function getDayOfWeekByNumber(index){
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
}

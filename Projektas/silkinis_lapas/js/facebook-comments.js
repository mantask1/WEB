function getComments(){
    return [
        {
            //            createdTime: "2021-01-17",
            message: "Norim padėkoti už labai gražią palinkėjimų knygą ir tą extrą paveiksliuką. Su Jumis bendravimas buvo labai lengvas, viską išaiškinote ir likome sužavėti Jūsų draugiškumu. Ačiū labai ir manau musu keliai dar susitiks ❤️",
            //            "id": "{page-id}_2191966997525824"
        },

        {
            //            "createdTime": "2021-01-18",
            "message": "Dėkojame už nuostabius pakvietimus ir palinkėjimų knygą 😊❤️ laukiam nesulaukiam karantino pabaigos, kada galėsime juos įteikti svečiams 😍❣️",
            //            "id": "{page-id}_2191966997525824"
        },

        {
            //            "createdTime": "2021-02-17",
            "message": "Labai džiaugiuosi pasirinkusi Šilkinį lapá svečiú knygos gamybai! 😇 Planavimo procesas buvo greitas, bet tuo pačiu ir smulkmeniškas, aptarėm kiekviená detalé, todėl buvau įsitikinus, kad bus gerai. O gavau dar daugiau nei tikėjaus - gražus pateikimas, kruopštus ir kokybiškas darbas😍",
            //            "id": "{page-id}_2191966997525824"
        }

    ];
}

function placeItems(comments) {

    for(var i = 0; i < comments.length; i++) {
        var createdTime = comments[i].createdTime;
        var message = comments[i].message;

        $("#comment").append("<div class='col s12 m4 l4'>"+
                             "<div class='card'>"+
                             "<div class='message'>"+message+"</div>"+
                             "</div>"+
                             "</div>");
    }
}

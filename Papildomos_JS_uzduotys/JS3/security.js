//<!--Parašykite funkciją, kuri patikrina jūsų įvestą amžių. Jeigu jūsų amžius yra 18 ir daugiau, tada rodo pranešimą, kad jūs galite užeiti į svetainę, priešingu atveju, rodomas pranešimas, kad į svetainę užeiti negalite.-->

function checkAge(age) {
    var text;

    if (isNaN(age)) {
        text = getTextForAge(age);
    }

    function getTextForAge(age){
        return (age < 18)
            ?"Atsiprašome, negalite užeiti į svetainę"
        :"Sveiki, jūs galite užeiti į svetainę";
    }


    return text;

}


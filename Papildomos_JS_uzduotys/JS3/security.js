//<!--Parašykite funkciją, kuri patikrina jūsų įvestą amžių. Jeigu jūsų amžius yra 18 ir daugiau, tada rodo pranešimą, kad jūs galite užeiti į svetainę, priešingu atveju, rodomas pranešimas, kad į svetainę užeiti negalite.-->

function checkAge(number){
    var age;
    if(number >= 18){
        age = "Sveiki, jūs galite užeiti į svetainę"
    }
    else{
        age = "Atsiprašome, negalite užeiti į svetainę"
    }

    return age;
}

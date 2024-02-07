const billetter=[];


function kjop(){
    const film = document.getElementById("film");
    const antallS = document.getElementById("antall");
    const antall = Number(antallS.value);
    const fornavn = document.getElementById("fornavn");
    const etternavn = document.getElementById("etternavn");
    const telefonnrS = document.getElementById("telefonnr");
    const telefonnr = Number(telefonnrS.value);
    let epost = document.getElementById("epost");


    let feilFilm=document.getElementById("feilFilm");
    let feilAntall=document.getElementById("feilAntall");
    let feilFornavn=document.getElementById("feilFornavn");
    let feilEtternavn=document.getElementById("feilEtternavn");
    let feilTelefonnr=document.getElementById("feilTelefonnr");
    let feilEpost=document.getElementById("feilEpost");


    var epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //epostRegex sikrer at det er standard format på epost-adressen, altså x@x.x
    //https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

    var tlfRegex = /^(0047|\+47|47)?[2-9]\d{7}$/;
    //tlfRegex sikrer at telefonnummeret oppgitt er standard norsk format, samt kan skrives med og uten +47/0047
    //https://stackoverflow.com/questions/34001939/regular-expression-for-norwegian-numbers

    const filmer=document.getElementById("alleBilletter");


    if (isNaN(antall)){
        feilAntall.innerHTML = " Antallet er ikke et tall!";
    }

    else if(antall<1) {
        feilAntall.innerHTML = "Antallet må være større enn 0!";
    }

    else if(antall.value === ""){
        feilAntall.innerHTML = "Antall må fylles inn!";
    }


    if (isNaN(telefonnr)) {
        feilTelefonnr.innerHTML = "Ugyldig telefonnummer!";
    }

    else if (telefonnrS.value === ""){
        feilTelefonnr.innerHTML = "Telefonnummer må fylles ut!";
    }

    else if (tlfRegex.test(telefonnr.value) === false){
        feilTelefonnr.innerHTML = "Telefonnummeret må være norsk!";
    }


    if (film.value === "Velg Film") {
        feilFilm.innerHTML = "Du må velge en film!";
    }
    else if (film.value === ""){
        feilFilm.innerHTML = "Du må velge en film!"
    }


    if (fornavn.value === ""){
        feilFornavn.innerHTML = "Fornavn må fylles ut!";
    }

    else if (isNaN(fornavn.value) === false){
        feilFornavn.innerHTML = "Fornavn må være bokstaver"
    }


    if (etternavn.value === ""){
        feilEtternavn.innerHTML = "Etternavn må fylles ut!";
    }

    else if (isNaN(etternavn.value) === false){
        feilEtternavn.innerHTML = "Etternavn må være bokstaver"
    }


    if (epost.value === ""){
        feilEpost.innerHTML = "Epost må fylles ut!";
    }

    else if (epostRegex.test(epost.value) === false){
        feilEpost.innerHTML = "Ugyldig epostadresse!";
    }


    else {
        billetter.push({
            Film: film.value,
            Antall: antallS.value,
            Fornavn: fornavn.value,
            Etternavn: etternavn.value,
            Telefonnr: telefonnrS.value,
            Epost: epost.value
        });

        filmer.innerHTML = "<tr><th>Film</th>" + "<th>Antall</th>" + "<th>Fornavn</th>" + "<th>Etternavn</th>"
                         + "<th>Telefonnr</th>" + "<th>Epost</th></tr>";

        for (let i = 0; i < billetter.length; i++) {
            filmer.innerHTML += "<tr><td>" + billetter[i].Film + "</td><td>" + billetter[i].Antall + "</td><td>"
                + billetter[i].Fornavn + "</td><td>" + billetter[i].Etternavn + "</td><td>" + billetter[i].Telefonnr
                + "</td><td>" + billetter[i].Epost + "</td></tr>";
        }
    }


    if (antallS.value !== "") {
        feilAntall.innerHTML = "";
    }

    if (fornavn.value !== "") {
        feilFornavn.innerHTML = "";
    }

    if (etternavn.value !== "") {
        feilEtternavn.innerHTML = "";
    }

    if (telefonnrS.value !== "" && telefonnrS.value.length == 8) {
        feilTelefonnr.innerHTML = "";
    }

    if (epost.value !== "") {
        feilEpost.innerHTML = "";
    }


    film.value = "Velg film her";
    antallS.value = "";
    fornavn.value = "";
    etternavn.value = "";
    telefonnrS.value = "";
    epost.value = "";

}//Ende av kjøp()

function slett(){
    billetter.length = 0;
    document.getElementById("alleBilletter").innerHTML = "";
    document.getElementById("film").value = "Velg Film";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}


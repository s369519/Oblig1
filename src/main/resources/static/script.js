const billetter=[];


function kjop(){
    const film = document.getElementById("film");
    const antallS = document.getElementById("antall");
    const antall = Number(antallS.value);
    const fornavn = document.getElementById("fornavn");
    const etternavn = document.getElementById("etternavn");
    const telefonnrS = document.getElementById("telefonnr");
    //const telefonnr = Number(telefonnrS.value);                                               Trenger ikke??
    const epost = document.getElementById("epost");


    let feilFilm=document.getElementById("feilFilm");
    let feilAntall=document.getElementById("feilAntall");
    let feilFornavn=document.getElementById("feilFornavn");
    let feilEtternavn=document.getElementById("feilEtternavn");
    let feilTelefonnr=document.getElementById("feilTelefonnr");
    let feilEpost=document.getElementById("feilEpost");


    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //epostRegex sikrer at det er standard format på epost-adressen, altså x@x.x
    //https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

    let epostResultat = epostRegex.test(epost.value);
    //let epostResultat = epost.value.match(epostRegex);                                Mulig alternativ?? Funker ikke?

    let tlfRegex = /^((0047)?|(\+47)?)[4|9]\d{7}$/;
    //tlfRegex sikrer at telefonnummeret oppgitt er standard norsk format, samt kan skrives med og uten +47/0047/47
    //https://stackoverflow.com/questions/34001939/regular-expression-for-norwegian-numbers

    let tlfResultat = (tlfRegex.test(telefonnrS.value));
    //let tlfResultat = telefonnrS.value.match(tlfRegex);                                               Funker ikke...?

    const filmer=document.getElementById("alleBilletter");

    //Tilbakestiller verdier for feilmeldinger før kjop() valideringene
    feilAntall.innerHTML = "";
    feilFilm.innerHTML = "";
    feilFornavn.innerHTML = "";
    feilEtternavn.innerHTML = "";
    feilTelefonnr.innerHTML = "";
    feilEpost.innerHTML = "";


    //Validering antall
    if (isNaN(antall)){
        feilAntall.innerHTML = " Antallet er ikke et tall!";
    }

    else if(antallS.value<1) {
        feilAntall.innerHTML = "Antallet må være større enn 0!";
    }

    else if(antallS.value === ""){
        feilAntall.innerHTML = "Antall må fylles inn!";
    }


    //Validering film                                           Feilmelding går ikke bort av seg selv!
    if (film.value === "Velg film her") {
        feilFilm.innerHTML = "Du må velge en film!";
    }

    else if (film.value === ""){
        feilFilm.innerHTML = "Du må velge en film!"
    }


    //Validering fornavn
    if (fornavn.value === ""){
        feilFornavn.innerHTML = "Fornavn må fylles ut!";
    }

    else if (isNaN(fornavn.value) === false){
        feilFornavn.innerHTML = "Fornavn må være bokstaver!"
    }


    //Validering etternavn
    if (etternavn.value === ""){
        feilEtternavn.innerHTML = "Etternavn må fylles ut!";
    }

    else if (isNaN(etternavn.value) === false){
        feilEtternavn.innerHTML = "Etternavn må være bokstaver!"
    }


    //Validering epost
    if (!epostResultat){                                       //Filtrerer ikke ugyldige eposter etter regexen???
        feilEpost.innerHTML = "Ugyldig epostadresse!";
    }


    //Validering telefonnummer
    if (!tlfResultat){                                       //Filtrerer ugyldige nr men gir ikke feilmelding??
        feilTelefonnr.innerHTML = "Ugyldig telefonnummer!";
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


        filmer.innerHTML = "<tr><th>Film </th>" + "<th>Antall </th>" + "<th>Fornavn </th>" + "<th>Etternavn </th>"
                         + "<th>Telefonnr </th>" + "<th>Epost </th></tr>";


        for (let i = 0; i < billetter.length; i++) {
            filmer.innerHTML +=( "<tr><td>" + billetter[i].Film + "</td><td>" + billetter[i].Antall + "</td><td>"
                + billetter[i].Fornavn + "</td><td>" + billetter[i].Etternavn + "</td><td>" + billetter[i].Telefonnr
                + "</td><td>" + billetter[i].Epost + "</td></tr>");
        }
    }


    //Tilbakestiller feilmeldinger ved nye forsøk
    if (antallS.value !== "") {
        feilAntall.innerHTML = "";
    }

    if (fornavn.value !== "") {
        feilFornavn.innerHTML = "";
    }

    if (etternavn.value !== "") {
        feilEtternavn.innerHTML = "";
    }

    if (telefonnrS.value !== "") {
        feilTelefonnr.innerHTML = "";
    }

    if (epost.value !== "") {
        feilEpost.innerHTML = "";
    }


    //Tilbakestiller inputfeltene slik at man kan skrive inn på nytt
    film.value = "Velg film her";
    antallS.value = "";
    fornavn.value = "";
    etternavn.value = "";
    telefonnrS.value = "";
    epost.value = "";

}

function slett(){
    billetter.length = 0;
    document.getElementById("alleBilletter").innerHTML = "";
    document.getElementById("film").value = "Velg film her";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}


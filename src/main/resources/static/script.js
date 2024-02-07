const billetter=[];


function kjop(){
    const film = document.getElementById("film");
    const antallS = document.getElementById("antall");
    const antall = Number(antallS.value);
    const fornavn = document.getElementById("fornavn");
    const etternavn = document.getElementById("etternavn");
    const telefonnrS = document.getElementById("telefonnr");
    const telefonnr = Number(telefonnrS.value);
    const epost = document.getElementById("epost");


    let feilFilm=document.getElementById("feilFilm");
    let feilAntall=document.getElementById("feilAntall");
    let feilFornavn=document.getElementById("feilFornavn");
    let feilEtternavn=document.getElementById("feilEtternavn");
    let feilTelefonnr=document.getElementById("feilTelefonnr");
    let feilEpost=document.getElementById("feilEpost");

    var epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var tlfRegex = /^(0047|\+47|47)?[2-9]\d{7}$/;
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


    if (isNaN(telefonnr)){
        feilTelefonnr.innerHTML = "Ugyldig telefonnummer!";
    }
    else if (telefonnr.value === ""){
        feilTelefonnr.innerHTML = "Telefonnummer må fylles ut!";
    }
    //else if (telefonnr.length !== 8 && (telefonnr.startsWith('4') || telefonnr.startsWith('9'))){


    //Sikrer at tlfnr er 8 siffer og starter på enten 4 eller 9 (norsk standard)
    else if (tlfRegex.test(telefonnr) === false){
        feilTelefonnr.innerHTML = "Ugyldig telefonnummer";
    }


    if (film.value === "Velg Film") {
        feilFilm.innerHTML = "Du må velge en film!";
    }

    if (fornavn === ""){
        feilFornavn.innerHTML = "Fornavn må fylles ut!";
    }

    if (etternavn === ""){
        feilEtternavn.innerHTML = "Etternavn må fylles ut!";
    }

    if (epost === ""){
        feilEpost.innerHTML = "Epost må fylles ut!";
    }
    //Tester om epostadressen har grunnleggende formatering
    else if (epostRegex.test(epost) === false){
        feilEpost.innerHTML = "Ugyldig epostadresse!";
    }


    else {
        billetter.push({
            Film: film.value,
            Antall: antall.value,
            Fornavn: fornavn.value,
            Etternavn: etternavn.value,
            Telefonnr: telefonnr.value,
            Epost: epost.value
        });

        filmer.innerHTML = "<tr><th>Film</th>" + "<th>Antall</th>" + "<th>Fornavn</th>" + "<th>Etternavn</th>"
            + "<th>Telefonnr</th>" + "<th>Epost</th></tr>";

        for (let i = 0; i < billetter.length; i++) {
            filmer.innerHTML += "<tr><td>" + billetter[i].Film + "</td><td>" + billetter[i].Antall + "</td><td>"
                + billetter[i].Fornavn + "</td><td>" + billetter[i].Etternavn + "</td><td>" + billetter[i].Telefonnr
                + "</td><td>" + billetter[i].Epost + "</td></tr>";
            document.write(billetter);
        }
    }





}//Ende av kjøp()



function slett(){
    billetter.length = 0;
    document.getElementById("personRegister").innerHTML="";
}


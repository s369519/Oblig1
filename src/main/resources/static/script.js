const billetter=[];


function kjop(){
    const film = document.getElementById("film").value;
    const antallS = document.getElementById("antall").value;
    const antall = Number(antallS);
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnrS = document.getElementById("telefonnr").value;
    const telefonnr = Number(telefonnrS);
    const epost = document.getElementById("epost").value;


    let feilFilm=document.getElementById("feilFilm");
    let feilAntall=document.getElementById("feilAntall");
    let feilFornavn=document.getElementById("feilFornavn");
    let feilEtternavn=document.getElementById("feilEtternavn");
    let feilTlfnr=document.getElementById("feilTelefonnr");
    let feilEpost=document.getElementById("feilEpost");

    var epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const filmer=document.getElementById("alleBilletter");


    if (isNaN(antall)){
        alert(" Antallet er ikke et tall!");
    }
    else if(antall<1) {
        alert("Antallet må være større enn 0!");
    }
    else if(antall.value === ""){
        alert("Antall må fylles inn!");
    }


    if (isNaN(telefonnr)){
        alert(" Ugyldig telefonnummer!");
    }
    else if (telefonnr.value === ""){
        alert("Telefonnummer må fylles ut!");
    }
    else if (telefonnr.length !== 8 && (telefonnr.startsWith('4') || telefonnr.startsWith('9'))){
        alert("Ugyldig telefonnummer");
    }//Sikrer at tlfnr er 8 siffer og starter på enten 4 eller 9 (norsk standard)


    if (film.value === "Velg Film") {
        feilFilm.innerHTML = "Du må velge en film!";
    }

    if (fornavn === ""){
        alert("Fornavn må fylles ut!");
    }

    if (etternavn === ""){
        alert("Etternavn må fylles ut!");
    }

    if (epost === ""){
        alert("Epost må fylles ut!");
    }
    else if (epostRegex.test(epost) === false){
        alert("Ugyldig epostadresse!")
    } //Tester om epostadressen har grunnleggende formatering


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
        }
    }




}//Ende av kjøp()


function visAlleBilletter(){
    document.getElementById("alleBilletter").appendChild(table);
}


function slett(){
    billetter.length = 0;
    document.getElementById("personRegister").innerHTML="";
}


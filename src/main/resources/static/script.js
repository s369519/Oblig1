const billetter = [];


function kjop() {
    const film = document.getElementById("film");
    const antall = document.getElementById("antall");
    const fornavn = document.getElementById("fornavn");
    const etternavn = document.getElementById("etternavn");
    const telefonnr = document.getElementById("telefonnr");
    const epost = document.getElementById("epost");


    let feilFilm = document.getElementById("feilFilm");
    let feilAntall = document.getElementById("feilAntall");
    let feilFornavn = document.getElementById("feilFornavn");
    let feilEtternavn = document.getElementById("feilEtternavn");
    let feilTelefonnr = document.getElementById("feilTelefonnr");
    let feilEpost = document.getElementById("feilEpost");


    let epostRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //epostRegex sikrer at det er standard format på epost-adressen, altså x@x.x
    //https://stackoverflow.com/questions/50330109/simple-regex-pattern-for-email

    let epostResultat = ( epostRegex.test(epost.value) );


    let tlfRegex = /^((0047)?|(\+47)?)[4|9]\d{7}$/;
    //tlfRegex sikrer at telefonnummeret oppgitt er standard norsk format, samt kan skrives med og uten +47/0047
    //https://stackoverflow.com/questions/34001939/regular-expression-for-norwegian-numbers

    let tlfResultat = ( tlfRegex.test(telefonnr.value) );



    // Tilbakestiller verdier for feilmeldinger
    feilAntall.innerHTML = "";
    feilFilm.innerHTML = "";
    feilFornavn.innerHTML = "";
    feilEtternavn.innerHTML = "";
    feilTelefonnr.innerHTML = "";
    feilEpost.innerHTML = "";



    // Validering film
    if ( film.value === "Velg film her" || film.value === "" ) {
        feilFilm.innerHTML = "Du må velge en film!";
        return;
    }


    // Validering antall
    if ( isNaN(Number(antall.value)) || !(1 <= Number(antall.value) && Number(antall.value) <= 50) || antall.value === "" ) {
        feilAntall.innerHTML = "Antallet må være mellom 1 og 50!";
        return;
    }


    // Validering fornavn
    if ( fornavn.value === "" || !isNaN(fornavn.value) ) {
        feilFornavn.innerHTML = "Fornavn må fylles ut og være bokstaver!";
        return;
    }


    // Validering etternavn
    if ( etternavn.value === "" || !isNaN(etternavn.value) ) {
        feilEtternavn.innerHTML = "Etternavn må fylles ut og være bokstaver!";
        return;
    }


    // Validering telefonnummer
    if ( !tlfResultat ) {
        feilTelefonnr.innerHTML = "Ugyldig telefonnummer!";
        return;
    }


    // Validering epost
    if ( !epostResultat ) {
        feilEpost.innerHTML = "Ugyldig epostadresse!";
        return;
    }



    // Hvis ingen valideringsfeil, legg til billetten
    else {
        billetter.push({
            Film: film.value,
            Antall: antall.value,
            Fornavn: fornavn.value,
            Etternavn: etternavn.value,
            Telefonnr: telefonnr.value,
            Epost: epost.value
        });

        // Oppdater tabellen med billettinformasjon
        const filmer = document.getElementById("alleBilletter");
        filmer.innerHTML = `
                            <tr>
                                <th>Film</th>
                                <th>Antall</th>
                                <th>Fornavn</th>
                                <th>Etternavn</th>
                                <th>Telefonnr</th>
                                <th>Epost</th>
                            </tr>
                            `;

        for (let i = 0; i < billetter.length; i++) {
            filmer.innerHTML += `
                                <tr>
                                    <td>${billetter[i].Film}</td>
                                    <td>${billetter[i].Antall}</td>
                                    <td>${billetter[i].Fornavn}</td>
                                    <td>${billetter[i].Etternavn}</td>
                                    <td>${billetter[i].Telefonnr}</td>
                                    <td>${billetter[i].Epost}</td>
                                </tr>
                                `;
        }
    }


    // Tilbakestiller inputfeltene
    film.value = "Velg film her";
    antall.value = "";
    fornavn.value = "";
    etternavn.value = "";
    telefonnr.value = "";
    epost.value = "";
}


function slett() {
    billetter.length = 0;
    document.getElementById("alleBilletter").innerHTML = "";
    document.getElementById("film").value = "Velg film her";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("epost").value = "";
}
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

    if (isNaN(antall)){
        alert(" Antallet er ikke et tall!");
        error=true;
    }else if(antall<1){
        alert("Antallet må være større enn 0 !")
        error=true;
    }else{
        error = false;
    }


    if (isNaN(telefonnr)){
        alert(" Antallet er ikke et tall!");
        error=true;
    }else if(telefonnr<1){
        alert("Antallet må være mer enn 0 !")
        error=true;
    }else{
        error = false;
    }



}


function visAlleBilletter(){

}


function sjekk(){


}


function slett(){
    billetter.length = 0;
    document.getElementById("personRegister").innerHTML="";
}


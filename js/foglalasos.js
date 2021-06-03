window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
    $("gombom").addEventListener("click", foglalassikeres, false);
}

function foglalassikeres(){
    let hibaszöveg = "Kérjük minden adatot töltsön ki!";
    let nevertek = $("nev").value;
    let emailertek = $("emailcim").value;
    let datumertek = $("datum").value;
    let idoertek = $("ido").value;
    if(nevertek=="" || emailertek=="" || datumertek=="" || idoertek=="" ){
        window.alert(hibaszöveg);
    }
    else{
    let text = "Foglalását rögzítettük! Hamarosan felvesszük önnel a kapcsolatot. A logóra kattintva visszatérhet a főoldalra.";
    window.alert(text); 
    }
  }




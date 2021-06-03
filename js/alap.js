window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("elerhetosegszoveg").addEventListener("mouseover", link, false);
  $("elerhetosegszoveg").addEventListener("mouseout", link2, false);

  $("elerhetosegszoveg2").addEventListener("mouseover", link3, false);
  $("elerhetosegszoveg2").addEventListener("mouseout", link4, false);

  $("elerhetosegszoveg3").addEventListener("mouseover", link5, false);
  $("elerhetosegszoveg3").addEventListener("mouseout", link6, false);

  $("elerhetosegszoveg4").addEventListener("mouseover", link7, false);
  $("elerhetosegszoveg4").addEventListener("mouseout", link8, false);

  $("elerhetosegszoveg5").addEventListener("mouseover", link9, false);
  $("elerhetosegszoveg5").addEventListener("mouseout", link10, false);

  $("szamolasgomb").addEventListener("click", helyszamolas, false);

  $("megnyitasgomb").addEventListener("click", megnyitas, false);

  $("bezargomb").addEventListener("click", bezar, false);


  

  
}
function megnyitas() {
  $("egy").style.display = "block";
}
function bezar() {
  $("egy").style.display = "none";
}

function helyszamolas() {
  let elsoZona = ["Alsóörs", "Badacsony", "Balatonalmádi", "Balatonföldvár"];
  let elsoAr = 2400;
  let masodikZona = ["Balatonfüred", "Balatongyörök", "Balatonlelle", "Balatonmáriafürdő"];
  let masodikAr = 2700;
  let harmadikZona = ["Balatonszemes", "Fonyód", "Keszthely", "Révfülöp"];
  let harmadikAr = 3000;
  let negyedikZona = ["Siófok", "Szigliget", "Tihany", "Tihanyrév"];
  let negyedikAr = 3500;
  let indulasTemp = $("indulas");
  let indulas = indulasTemp.options[indulasTemp.selectedIndex].text;

  let erkezesTemp = $("erkezes");
  let erkezes = erkezesTemp.options[erkezesTemp.selectedIndex].text;

  let tempResult = negyedikAr;

  if (elsoZona.includes(indulas)) {
    tempResult = elsoAr;
  } else if (masodikZona.includes(indulas)) {
    tempResult = masodikAr;
  } else if (harmadikZona.includes(indulas)) {
    tempResult = harmadikAr;
  }
  let veszelyVanE = Math.floor(Math.random() * 4);
  console.log(veszelyVanE);
  let result = "Az utazás " + tempResult + " forintba fog kerülni egy személyre!";
  let veszely = "Az adott kikőtőből vihar miatt nem indul hajó " + erkezes + " felé";
  if (veszelyVanE == 0) result = veszely;

  window.alert(result);
}

function link() {
  $("elerhetosegszoveg").style.color = "#aadaff";
  $("elerhetosegszoveg").style.fontSize = "25px";
}
function link2() {
  $("elerhetosegszoveg").style.color = "white";
  $("elerhetosegszoveg").style.fontSize = "100%";
}

function link3() {
  $("elerhetosegszoveg2").style.color = "#aadaff";
  $("elerhetosegszoveg2").style.fontSize = "25px";
}
function link4() {
  $("elerhetosegszoveg2").style.color = "white";
  $("elerhetosegszoveg2").style.fontSize = "100%";
}

function link5() {
  $("elerhetosegszoveg3").style.color = "#aadaff";
  $("elerhetosegszoveg3").style.fontSize = "25px";
}
function link6() {
  $("elerhetosegszoveg3").style.color = "white";
  $("elerhetosegszoveg3").style.fontSize = "100%";
}

function link7() {
  $("elerhetosegszoveg4").style.color = "#aadaff";
  $("elerhetosegszoveg4").style.fontSize = "25px";
}
function link8() {
  $("elerhetosegszoveg4").style.color = "white";
  $("elerhetosegszoveg4").style.fontSize = "100%";
}

function link9() {
  $("elerhetosegszoveg5").style.color = "#aadaff";
  $("elerhetosegszoveg5").style.fontSize = "25px";
}
function link10() {
  $("elerhetosegszoveg5").style.color = "white";
  $("elerhetosegszoveg5").style.fontSize = "100%";
}
function foglalas() {
  $("atirando").innerHTML = "XDDDDDDDDDDDDD";
}

window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {
  $("elerhetosegszoveg").addEventListener("mouseover",link,false);
  $("elerhetosegszoveg").addEventListener("mouseout",link2,false);

  $("elerhetosegszoveg2").addEventListener("mouseover",link3,false);
  $("elerhetosegszoveg2").addEventListener("mouseout",link4,false);

  $("elerhetosegszoveg3").addEventListener("mouseover",link5,false);
  $("elerhetosegszoveg3").addEventListener("mouseout",link6,false);

  $("elerhetosegszoveg4").addEventListener("mouseover",link7,false);
  $("elerhetosegszoveg4").addEventListener("mouseout",link8,false);

  $("elerhetosegszoveg5").addEventListener("mouseover",link9,false);
  $("elerhetosegszoveg5").addEventListener("mouseout",link10,false);

  
  
}
function megnyitas() {
  $("egy").style.display = "block";
}
function bezar() {
  $("egy").style.display = "none";
}
function link() {
  $("elerhetosegszoveg").style.color= "purple";
  $("elerhetosegszoveg").style.fontSize= "25px";
}
function link2() {
  $("elerhetosegszoveg").style.color= "black";
  $("elerhetosegszoveg").style.fontSize= "100%";
}

function link3() {
  $("elerhetosegszoveg2").style.color= "purple";
  $("elerhetosegszoveg2").style.fontSize= "25px";
}
function link4() {
  $("elerhetosegszoveg2").style.color= "black";
  $("elerhetosegszoveg2").style.fontSize= "100%";
}

function link5() {
  $("elerhetosegszoveg3").style.color= "purple";
  $("elerhetosegszoveg3").style.fontSize= "25px";
}
function link6() {
  $("elerhetosegszoveg3").style.color= "black";
  $("elerhetosegszoveg3").style.fontSize= "100%";
}

function link7() {
  $("elerhetosegszoveg4").style.color= "purple";
  $("elerhetosegszoveg4").style.fontSize= "25px";
}
function link8() {
  $("elerhetosegszoveg4").style.color= "black";
  $("elerhetosegszoveg4").style.fontSize= "100%";
}

function link9() {
  $("elerhetosegszoveg5").style.color= "purple";
  $("elerhetosegszoveg5").style.fontSize= "25px";
}
function link10() {
  $("elerhetosegszoveg5").style.color= "black";
  $("elerhetosegszoveg5").style.fontSize= "100%";
}

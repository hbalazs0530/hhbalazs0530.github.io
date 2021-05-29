window.addEventListener("load", init, false);

function $(id) {
  return document.getElementById(id);
}

function init() {}
function megnyitas() {
  $("egy").style.display = "block";
}
function bezar() {
  $("egy").style.display = "none";
}



function textoabajito() {
  var texto=document.getElementById('cajita').value;
  document.getElementById("textoabajo").innerHTML = texto
}

/*function textogrande(){
var textograndecito = document.getElementById(textoabajo);
document.getElementById("textoabajo").style.size:"50px"*/
function textoGrande(){
  document.getElementById("textoabajo").style.fontSize = "200px"
}

function textoMediano(){
  document.getElementById("textoabajo").style.fontSize = "70px"
}

function textoChico(){
  document.getElementById("textoabajo").style.fontSize = "25px"
}

function textoColor(){
  document.getElementById("textoabajo").style.color = "#d43565"
}

/*Esta también funciona, si la pongo en una variable es para poder poner, más colorcitos en el futuro, pero aún no entiendo
muy bien como
function cambiarFondo(){
var color = document.getElementById("textoabajo").style.backgroundColor="pink";
document.getElementById("textoabajo") = color;
}*/

function cambiarFondo(){
  document.getElementById("textoabajo").style.backgroundColor="pink";
}

function centrar(){
  document.getElementById("textoabajo").style.textAlign="center";
}

function derecha(){
  document.getElementById("textoabajo").style.textAlign="right";
}

function izquierda(){
  document.getElementById("textoabajo").style.textAlign="left";
}

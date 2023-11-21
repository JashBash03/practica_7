function clickHtml(){
    document.querySelector("#information").innerHTML="Has hecho click en el botón con evento HTML"
    document.querySelector("#information").style.background="orange"
}

const botonListener = document.querySelector("#buttonListener");

botonListener.addEventListener("click", function() {
  document.querySelector("#information").innerHTML="Has hecho click en el botón con addEventListener";
  document.querySelector("#information").style.background="green"
});

const botonHandler = document.querySelector("#buttonListener");

botonHandler.onclick = function() {
    document.querySelector("#information").innerHTML="Has hecho click en el botón con event handler";
    document.querySelector("#information").style.background="purple"
};
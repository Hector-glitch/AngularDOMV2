import {style} from "@angular/animations";

export function yellowSubmarine(){
  let text = document.getElementById("groc")
  text = text.style.color="yellow"
}
export function changeSize(){
  let taulatamany = document.getElementById("taula")
  taulatamany = taulatamany.width="500px"
}

export function countWords() {
  let textContador= document.getElementById("textContador").innerText
  const paraules = textContador.split(/\s+/).filter(word => word.length > 0);
  let numeroFinal = document.getElementById('numeroPraules')
  numeroFinal.innerHTML="Numero de paraules: "+ paraules.length
}

export function showDesplegable() {
  let dropdown = document.getElementById("colors");
  let valors = [];

  for (let i = 0; i < dropdown.options.length; i++) {
    valors.push(dropdown.options[i].value);
  }

  let nodeInfoColor = document.getElementById("infColors");
  nodeInfoColor.innerHTML = "Elements del desplegable: " + valors.join(", ");
}

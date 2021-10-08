

let chilometri = prompt("Quanti chilometri vuoi percorrere ?");
let eta = prompt("Inserisci la tua eta");
let prezzoPerViaggio = chilometri * 0.21;

if (eta < 18) {
    prezzoPerViaggio = prezzoPerViaggio - (prezzoPerViaggio * 0.2);
  } else if (eta >= 65) {
    prezzoPerViaggio = prezzoPerViaggio - (prezzoPerViaggio * 0.4);
  }

alert(prezzoPerViaggio.toFixed(2));
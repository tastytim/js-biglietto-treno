let chilometri;
let eta;
let prezzoPerViaggio;


function controlloChilometri() {
  chilometri = prompt("Quanti chilometri vuoi percorrere ?");
  if (chilometri === null || isNaN(chilometri)) {
    alert("Hai inserito i dati sbagliati , riprova");
    controlloChilometri();
  }
}

function controlloEta() {
  eta = prompt("Inserisci la tua eta");
  if (eta === null || isNaN(eta) ||  eta < 1 || eta > 120 ) {
    alert("Hai inserito i dati sbagliati , riprova");
    controlloEta();
  }
}

function calcoloPrezzoFinale() {
  prezzoPerViaggio = chilometri * 0.21;

  if (eta < 18) {
    prezzoPerViaggio = prezzoPerViaggio - (prezzoPerViaggio * 0.2);
  } else if (eta >= 65) {
    prezzoPerViaggio = prezzoPerViaggio - (prezzoPerViaggio * 0.4);
  }
  alert(prezzoPerViaggio.toFixed(2));
}

controlloChilometri();
controlloEta();
calcoloPrezzoFinale();

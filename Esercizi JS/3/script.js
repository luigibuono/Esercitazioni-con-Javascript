function cambiaColore(){
  const coloreRandom = generaColoreRandom();
  document.body.style.backgroundColor = coloreRandom;
}

function generaColoreRandom(){
  const rosso = Math.floor(Math.random() *256);
  const verde = Math.floor(Math.random() *256);
  const blu = Math.floor(Math.random() *256);
return `rgb(${rosso},${verde},${blu})`;
}

setInterval(cambiaColore, 2000);

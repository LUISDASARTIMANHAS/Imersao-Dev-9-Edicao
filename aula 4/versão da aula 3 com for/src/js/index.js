
// se for 0 ganhou, se for 1 perdeu
let ganhou = 0;

for (let rodada = 1; rodada < 4; rodada++) {
  console.log("Rodada: " + rodada);
  const escolhaJogador = prompt(`Nivel ${rodada}, escolha um vidro (1 a 3):`);
  const pisoQuebrado = getRandomInt(3) + 1;

  if (escolhaJogador == pisoQuebrado) {
    // Vidro quebrou
    alert("O vidro quebrou! Você já era!");
    ganhou = 1;
  } else {
    alert("Passou! o piso quebrado estava na ponte: " + pisoQuebrado);
  }
}
if (ganhou == 0) {
  // Venceu!!
  alert("Voce Venceu!!!");
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomBin(max) {
  return Math.floor(Math.random() * max).toString(2);
}

function getRandomHex(max) {
  return Math.floor(Math.random() * max).toString(16);
}

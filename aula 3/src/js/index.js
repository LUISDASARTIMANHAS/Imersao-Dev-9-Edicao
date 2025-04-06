let rodada = 1;

while (rodada <= 3) {
  console.log("Rodada: " + rodada);
  const escolhaJogador = prompt(`Nivel ${rodada}, escolha um vidro (1 a 3):`);
  const pisoQuebrado = getRandomInt(3) + 1;

  if (escolhaJogador == pisoQuebrado) {
    // Vidro quebrou
    alert("O vidro quebrou! Você já era!");
    rodada = 1000;
  } else {
    alert("Passou! o piso quebrado estava na ponte: " + pisoQuebrado);
  }
  rodada++;
}
if (rodada >= 4) {
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

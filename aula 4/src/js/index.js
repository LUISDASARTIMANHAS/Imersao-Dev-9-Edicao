// criando a lista de jogadores
const jogadores = [];
const viloes = [];
let forcaJogadores = 0;
let forcaViloes = 0;

for (let i = 0; i < 3; i++) {
  const jogador = prompt("Digite o nome do seu jogador " + (i + 1));

  jogadores.push(jogador);
  // calcular a força de cada jogador e depois somar pra saber a forca do time
  forcaJogadores += getRandomInt(10) + 1;
}

for (let i = 0; i < 3; i++) {
  const indiceAleatorio = getRandomInt(5);
  const viloesPossiveis = [
    "Nazare",
    "Tedesco",
    "Odete Roitmann",
    "Flora",
    "Carminha",
    "Laura Prudente da Costa",
  ];
  const vilao = viloesPossiveis[indiceAleatorio];

  viloes.push(vilao);
  // calcular a força de cada jogador do time do computador
  forcaViloes += getRandomInt(10) + 1;
}
console.log(viloes);

// comparar os dois times para saber quem vence
if (forcaJogadores > forcaViloes) {
  alert(
    "Seu time e muito forte! Você ganhou a disputa de cabo de guerra! sua força foi: " +
      forcaJogadores
  );
} else if (forcaJogadores == forcaViloes) {
  // empatou
  alert(
    "Os dois times tem a mesma força! Vocês empataram! "
  );
} else {
  alert(
    "Seu time e fraquinho! o computador ganhou a disputa de cabo de guerra! com força de: " +
      forcaViloes
  );
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

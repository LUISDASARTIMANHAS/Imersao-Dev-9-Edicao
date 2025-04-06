const idade = prompt("Quantos anos você tem?");

if (idade < 18) {
  alert("Você não pode jogar jokenpo!");
} else {
  const escolhaComputador = getRandomInt(3) + 1;
  // const escolhaJogador = Number(prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura"));
  const escolhaJogador = 3;

  if (escolhaComputador == escolhaJogador) {
    // Deu Empate
    alert("Empate");
  } else {
    switch (escolhaJogador) {
      // 1-Pedra, 2-Papel ou 3-Tesoura
      case 1:
        // jogador escolheu pedra
        if (escolhaComputador == 2) {
          // Jogador pedra, Computador papel --> pc vence
          alert("Computador Venceu! Computador escolheu Papel");
        } else {
          // Jogador pedra, Computador tesoura --> jogador vence
          alert("Jogador Venceu! Computador escolheu Tesoura");
        }
        break;
      case 2:
        // jogador escolheu papel
        if (escolhaComputador == 1) {
          // Jogador papel, Computador Pedra --> jogador vence
          alert("jogador Venceu! Computador escolheu Pedra");
        } else {
          // Jogador papel, Computador Tesoura --> pc vence
          alert("Computador Venceu! Computador escolheu Tesoura");
        }
        break;
      case 3:
        // jogador escolheu tesoura
        if (escolhaComputador == 1) {
          // Jogador tesoura, Computador Pedra --> pc vence
          alert("Computador Venceu! Computador escolheu Pedra");
        } else {
          // Jogador tesoura, Computador Papel --> Jogador vence
          alert("Jogador Venceu! Computador escolheu Papel");
        }
        break;
      default:
        break;
    }
  }
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

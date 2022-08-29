function start() {
  let min = 1;
  let max = 5;
  let computador;
  sortear();
  function sortear() {
    computador = Math.floor(Math.random() * (max - min + 1) + min);
    console.log(computador);
  }
  let escolha;
  tentativa();
  function tentativa() {
    let reiniciar;
    for (i = 0; i < 3; i++) {
      escolha = prompt(
        "Tente advinhar o numero escolhido pelo computador de 1 a 5 "
      );
      if (computador == escolha) {
        alert(`vc acertou ${computador}`);
        break;
      } else {
        alert(`o numero nao é ${escolha}, tente outra vez`);
      }
    }
    if (escolha != computador) {
      reiniciar = confirm(`Vc nao acertou, deseja comecar outra vez?`);
    }
    if (reiniciar == true) {
      sortear();
      tentativa();
    }
  }
}

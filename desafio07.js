function start() {
  let val1;
  let val2;
  let operacao;
  function valores() {
    val1 = Number(prompt(`insira o primeiro valor`));
    val2 = Number(prompt(`insira o segundo valor`));
    alert(`valores escolhidos foram ${val1} e ${val2}`);
    return val1, val2;
  }
  valores();

  function opera() {
    operacao = prompt(`escolha uma operacao matematica: 
    adicao
    subtracao
    multiplicacao
    divisao
    sair`);
    if (operacao == "sair") {
      alert(`Até a próxima`);
    } else {
      alert(`operacao escolhida foi ${operacao}`);
      return operacao;
    }
  }
  opera();

  function calcular() {
    if (operacao == "adicao") {
      alert(`${val1} + ${val2} = ${val1 + val2}`);
    } else if (operacao == "subtracao") {
      alert(`${val1} - ${val2} = ${val1 - val2}`);
    } else if (operacao == "multiplicacao") {
      alert(`${val1} x ${val2} = ${val1 * val2}`);
    } else if (operacao == "divisao") {
      alert(`${val1} / ${val2} = ${val1 / val2}`);
    } else {
      alert(`Até a próxima`);
    }
  }
  calcular();
}

function start() {
  let nome;
  let idade;
  let linguagem;
  function perguntas1() {
    nome = prompt("qual seu nome");
    idade = prompt("qual sua idade");
    linguagem = prompt("qual linguagem");
    return nome, idade, linguagem;
  }
  perguntas1();
  alert(`nome ${nome}, idade ${idade}, linguagem ${linguagem}`);

  let gostar;
  function perguntas2() {
    gostar = prompt("gosta de estudar: sim ou nao");
    if (
      gostar == "sim" ||
      gostar == "s" ||
      gostar == "S" ||
      gostar == "Sim" ||
      gostar == "SIM"
    ) {
      alert(`Muito bom! Continue estudando e você terá muito sucesso.`);
    } else if (
      gostar == "não" ||
      gostar == "n" ||
      gostar == "N" ||
      gostar == "Não" ||
      gostar == "NÃO" ||
      gostar == "nao" ||
      gostar == "NAO"
    ) {
      alert(`Ahh que pena... Já tentou aprender outras linguagens?`);
    } else {
      perguntas2();
    }
    return gostar;
  }
  perguntas2();
}

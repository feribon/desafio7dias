function start() {
  let novaTec = [];
  function area() {
    areaEscolhida = prompt(
      "qual area deseja seguir: front-end 'front' ou back-end 'back'"
    );
    if (areaEscolhida == "front") {
      lang = prompt("quer aprender react ou vue");
      alert(`boa sorte na area com ${lang}`);
      part2(areaEscolhida, lang);
    } else if (areaEscolhida == "back") {
      lang = prompt("quer aprender c# ou java");
      alert(`boa sorte na area com ${lang}`);
      part2(areaEscolhida, lang);
    } else {
      alert("escolha uma opcao valida");
      area();
    }
  }
  area();
  function part2(areaEscolhida, lang) {
    let especialidade = prompt(
      "1 continuar se especializando na area, 2 fullstack"
    );
    if (especialidade == "1") {
      alert(
        `continue se especializando na linguagem ${lang} para dominar a ${areaEscolhida}`
      );
    } else if (especialidade == "2") {
      alert(`vamos alem da linguagem ${lang} para se tornar fullstack`);
    } else {
      alert("valor invalido");
      part2();
    }
  }

  let msg = prompt("mais alguma tecnologia, digite ok se positivo");
  while (msg == "ok") {
    novaTec.push(prompt("qual"));
    msg = prompt("mais alguma tecnologia, digite ok se positivo");
  }
  alert(`vc vai aprender as tecnologias ${novaTec}`);
}

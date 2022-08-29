function start() {
  let simNao;
  let food;
  let typeFood;
  let frutas = [];
  let laticinios = [];
  let congelados = [];
  let legumes = [];
  let resposta;
  let excluir;

  function ask1() {
    simNao = prompt(
      `Deseja adicionar uma comida a sua lista de compras: sim, nao ou remover`
    );

    if (simNao == "sim") {
      food = prompt(`Qual comida deseja inserir na lista?`);
      typeFood = prompt(`Qual categoria de alimento ele se encaixa:
      1- frutas
      2- laticinios
      3- congelados
      4- legumes`);
      if (typeFood == 1 || typeFood == "frutas") {
        frutas.push(food);
        ask1();
      } else if (typeFood == 2 || typeFood == "laticinios") {
        laticinios.push(food);
        ask1();
      } else if (typeFood == 3 || typeFood == "congelados") {
        congelados.push(food);
        ask1();
      } else if (typeFood == 4 || typeFood == "legumes") {
        legumes.push(food);
        ask1();
      } else {
        alert(`opcao invalida!`);
        ask1();
      }
    } else if (simNao == "nao") {
      resposta = document.querySelector(".resposta").innerHTML = `
      <h1>Lista de compras</h1>
      <p>frutas : ${frutas}</p>
      <p>laticinios : ${laticinios}</p>
      <p>congelados : ${congelados}</p>
      <p>legumes : ${legumes}</p>`;
    } else if (simNao == "remover") {
      if (
        frutas.length === 0 &&
        laticinios.length === 0 &&
        legumes.length === 0 &&
        congelados.length === 0
      ) {
        alert(`Nao temos item a remover ainda`);
        ask1();
      } else {
        excluir = prompt(`
        Digite o item a remover
        frutas : ${frutas}
        laticinios : ${laticinios}
        congelados : ${congelados}
        legumes : ${legumes}`);
        if (frutas.indexOf(excluir) != -1) {
          frutas.splice(frutas.indexOf(excluir), 1);
          alert(`O item ${excluir} foi removido com sucesso!`);
          ask1();
        } else if (laticinios.indexOf(excluir) != -1) {
          laticinios.splice(laticinios.indexOf(excluir), 1);
          alert(`O item ${excluir} foi removido com sucesso!`);
          ask1();
        } else if (legumes.indexOf(excluir) != -1) {
          legumes.splice(legumes.indexOf(excluir), 1);
          alert(`O item ${excluir} foi removido com sucesso!`);
          ask1();
        } else if (congelados.indexOf(excluir) != -1) {
          congelados.splice(congelados.indexOf(excluir), 1);
          alert(`O item ${excluir} foi removido com sucesso!`);
          ask1();
        } else {
          alert(`Não foi possível encontrar o item dentro da lista!`);
          ask1();
        }
      }
    } else {
      alert(`opcao invalida`);
      ask1();
    }
  }
  ask1();
}

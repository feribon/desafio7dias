function start() {
  let askBuy;
  let food;
  let typeFood;
  let frutas = [];
  let laticinios = [];
  let congelados = [];
  let legumes = [];
  let resposta;
  function addList() {
    askBuy = prompt(
      `Deseja adicionar uma comida a sua lista de compras: sim ou nao`
    );
    if (askBuy == "sim") {
      food = prompt(`Qual comida deseja inserir na lista?`);
      typeFood = prompt(`Qual categoria de alimento ele se encaixa:
     1- frutas
     2- laticinios
     3- congelados
     4- legumes`);
      if (typeFood == 1 || typeFood == "frutas") {
        frutas.push(food);
        console.log("frutas", frutas);
        addList();
      } else if (typeFood == 2 || typeFood == "laticinios") {
        laticinios.push(food);
        console.log("laticinios", laticinios);
        addList();
      } else if (typeFood == 3 || typeFood == "congelados") {
        congelados.push(food);
        console.log("congelados", congelados);
        addList();
      } else if (typeFood == 4 || typeFood == "legumes") {
        legumes.push(food);
        console.log("legumes", legumes);
        addList();
      } else {
        alert(`opcao invalida!`);
        addList();
      }
    } else {
      let confirma = confirm(`vamos finalizar sua lista`);
      if (confirma == true) {
      } else {
        addList();
      }
    }
    resposta = document.querySelector(
      ".resposta"
    ).innerHTML = `<h1>Lista de compras</h1>
<p>frutas : ${frutas}</p>
<p>laticinios : ${laticinios}</p>
<p>congelados : ${congelados}</p>
<p>legumes : ${legumes}</p>`;
  }
}

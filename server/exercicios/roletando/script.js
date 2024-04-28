let txtjogo = document.querySelector("input#txtjogo");
let select = document.querySelector("select#tbselect");
let result = document.querySelector("p#result");
let jogoID;
let jogos = [];

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    // 13 é o código da tecla Enter
    adicionarJogo();
  }
}0

function roletandoJogos() {
  let randomIndex = Math.floor(Math.random() * jogos.length);
  let randomElement = jogos[randomIndex];
  let randomGame = randomElement;
  result.innerHTML = `O jogo selecionado foi: ${randomGame}`;
  txtjogo.value = "";
  txtjogo.focus();
}

function inserirElemento() {
  jogoID = txtjogo.value;
  let insert = document.createElement("option");
  insert.text = `Valor ${jogoID} adicionado.`;
  select.appendChild(insert);
}
function adicionarJogo() {
  jogoID = txtjogo.value;
  jogos.push(jogoID);
  inserirElemento();
  txtjogo.value = "";
  txtjogo.focus();
}

function limparTudo() {
  txtjogo.value = "";
  select.innerHTML = "";
  result.innerHTML = "";
  jogos = [];
  txtjogo.focus();
}

function voltarPagina() {
  window.location.href = "../../index.html";
}

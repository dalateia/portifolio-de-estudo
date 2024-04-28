let txtnum = document.querySelector("input#txtnumber");
let select = document.querySelector("select#tbselect");
let paraTotal = document.querySelector("p#total");
let paraMax = document.querySelector("p#maior");
let paraMin = document.querySelector("p#menor");
let paraSoma = document.querySelector("p#soma");
let paraMedia = document.querySelector("p#media");
let tba = [];

function adicionarElemento() {
  let num = Number(txtnum.value);
  let indextba;
  let verifc;

  verificarNumero();
  validarElemento();
  txtnum.value = "";
  txtnum.focus();
  function verificarNumero() {
    if (num >= 1 && num <= 100) {
      verifc = true;
    } else {
      alert("O número digitado é inválido ou já está listado!");
    }
  }

  function validarElemento() {}
  indextba = tba.indexOf(num);
  if (verifc == true && indextba == -1) {
    tba.push(num);
    inserirElemento();
  } else {
    alert("Digite outro número!");
  }

  function inserirElemento() {
    let insert = document.createElement("option");
    insert.text = `Valor ${num} adicionado.`;
    select.appendChild(insert);
  }
}

function revisãoDeDados() {
  let max = Math.max(...tba);
  let min = Math.min(...tba);
  let soma = tba.reduce(function (total, current) {
    return total + current;
  }, 0);
  let media = soma / tba.length;

  if (tba.length != 0) {
    paraTotal.innerHTML = `Ao todo, temos ${tba.length} números cadastrados.`;
    paraMax.innerHTML = `O maior valor informado é: ${max}`;
    paraMin.innerHTML = `O menor valor informado é: ${min}`;
    paraSoma.innerHTML = `A soma de todos valores foi: ${soma}`;
    paraMedia.innerHTML = `A média de todos valores foi: ${media.toFixed(2)}`;
  } else {
    alert("Adicione algum valor antes de finalizar.");
  }
  txtnum.focus();
}

function limparTudo() {
  txtnum.value = "";
  select.innerHTML = "";
  paraTotal.innerHTML = "";
  paraMax.innerHTML = "";
  paraMin.innerHTML = "";
  paraSoma.innerHTML = "";
  paraMedia.innerHTML = "";
  tba = [];
  txtnum.focus();
}

function voltarPagina() {
  window.location.href = "../../index.html";
}

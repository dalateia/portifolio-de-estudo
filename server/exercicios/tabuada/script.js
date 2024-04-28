var tabNum = document.getElementById("txttab");
var tabSelect = document.getElementById("tabselect");
function carregar() {
  tabNum.focus();
}

function gerarTabuada() {
  var valor = Number(tabNum.value);
  var baseCont = 1;

  if (valor == 0) {
    window.alert("[ERRO] Não há como calcular a tabuada de 0.");
  } else {
    tabSelect.innerHTML = "";
    calcular();
  }
  function calcular() {
    for (var result = valor; baseCont <= 10; result = valor * baseCont) {
      baseCont++;
      var item = document.createElement("option");
      item.text = `${valor} x ${baseCont} = ${result}`;
      tabSelect.appendChild(item);
    }
  }
  tabNum.value = "";
  tabNum.focus();
}
function limpar() {
  var tabNum = document.getElementById("txttab");
  var tabSelect = document.getElementById("tabselect");
  tabNum.value = "";
  tabSelect.innerHTML = "";
  tabNum.focus();
}

function voltarPagina() {
  window.location.href = "../../index.html";
}

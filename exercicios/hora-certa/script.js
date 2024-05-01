function carregar() {
  var exibir = document.getElementById("exibir");
  var saudacao = document.getElementById("saudacao");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  exibir.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 0 && hora < 12) {
    document.write = saudacao.innerHTML = "Bom dia!";
    img.src = "images/morning-edit.png";
    document.body.style.background = "#ACDC50";
  } else if (hora >= 12 && hora <= 18) {
    document.write = saudacao.innerHTML = "Boa tarde!";
    img.src = "images/afternoon-edit.png";
    document.body.style.background = "#FFA54F";
  } else {
    document.write = saudacao.innerHTML = "Boa noite!";
    img.src = "images/night-edit.png";
    document.body.style.background = "#363636";
  }
}

function voltarPagina() {
  window.location.href = "../../index.html";
}

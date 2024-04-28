let saudacao = "Olá, mundo!";

console.log(saudacao);

let num1 = 4;

console.log("O valor múltiplicado do número é: " + num1 * 2);

let num2 = 5;
let num3 = 7;

console.log(num2 + num3);

function somar(n1, n2) {
  return console.log("O resultado é:" + (n1 + n2));
}

somar(5, 7.5);

function verificaPar(n1) {
  if (n1 % 2 === 0) {
    return console.log(`O número ${n1} é par!`);
  } else {
    return console.log(`O número ${n1} é impar!`);
  }
}

verificaPar(58);

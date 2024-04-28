let amigo = {
  nome: "jose",
  sexo: "m",
  peso: 85.4,
  engordar(p = 0) {
    console.log("engordou");
    this.peso += p;
  },
};

amigo.engordar(4);

console.log(amigo.peso);

let num = 8;
num **= 2;
console.log(num);

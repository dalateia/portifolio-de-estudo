let vtr = [9, 4, 5, 7, 6];
console.log(vtr);
vtr[4] = 8;
console.log(vtr);

vtr.push(6);
console.log(vtr);

console.log(vtr.length);
console.log(vtr.sort());

let pos;

for (let pos = 0; pos < vtr.length; pos++) {
  console.log(`A posição ${pos} do array é ${vtr[pos]}`);
}

for (pos in vtr) {
  console.log(`A posição ${pos} do array é ${vtr[pos]}`);
}

let nPos = vtr.indexOf(3);
console.log(`O valor está no vetor ${nPos}`);

if (nPos == -1) {
  console.log(`Não existe o valor desejado no array`);
} else {
  console.log(`O valor da posição ${nPos} do array é ${vtr[nPos]}`);
}

//Aqui o pos é um nome qualquer para qual "posição" o item está no array.

for (pos in vtr) {
  console.log(`O indice ${pos} contém o valor ${vtr[pos]} no array`);
}

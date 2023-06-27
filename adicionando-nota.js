const notas = [10, 6, 8];
let soma = 0

notas.push(7)

console.log(notas);

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    media = soma / notas.length
}

console.log(media);
const notas = [10, 6, 8, 5.5, 10];
let soma = 0;

notas.pop();

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    media = soma / notas.length
}

console.log(`A média é ${media}.`);
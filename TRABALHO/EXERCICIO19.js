/*Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. 
As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

Saída
Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias, conforme o exemplo fornecido. 
Não esqueça de imprimir o fim de linha após cada linha, caso contrário seu programa apresentará a mensagem: “Presentation Error”.*/

let N = parseInt(503)

let notas = parseInt(N / 100);
console.log(notas + " nota(s) de R$ 100,00");
N = N % 100

notas = parseInt(N / 50);
console.log(notas + " nota(s) de R$ 50,00");
N = N % 50

notas = parseInt(N / 20);
console.log(notas + " nota(s) de R$ 20,00");
N = N % 20

notas = parseInt(N / 10);
console.log(notas + " nota(s) de R$ 10,00");
N = N % 10

notas = parseInt(N / 5);
console.log(notas + " nota(s) de R$ 5,00");
N = N % 5

notas = parseInt(N / 2);
console.log(notas + " nota(s) de R$ 2,00");
N = N % 2

notas = parseInt(N / 1);
console.log(notas + " nota(s) de R$ 1,00");
N = N % 1
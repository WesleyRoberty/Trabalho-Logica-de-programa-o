/*Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.*/

let totalSegundos = parseInt(556);

let h = totalSegundos / 3600;
totalSegundos = totalSegundos % 3600;
		
let m = totalSegundos / 60;
totalSegundos = totalSegundos % 60;
		
let s = totalSegundos;

console.log(Math.floor(h)+ ":" + Math.floor(m) + ":" + Math.floor(s));
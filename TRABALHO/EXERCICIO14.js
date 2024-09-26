/*Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:



Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".*/
var A = parseInt(7)
var B = parseInt(14)  
var C = parseInt(106)

var AB= ((A + B) + Math.abs ((A - B)))/2
var maiorValor = ((AB + C) + Math.abs ((AB - C)))/2
console.log(maiorValor+ " eh o maior")



       /* var A = parseInt(7);
        var B = parseInt(14);
        var C = parseInt(10);

        if(A>B && A>C){
        console.log (A +" eh o maior")
        }
        else if(B>C){
        console.log (B +" eh o maior") }

        else{
        console.log (C +" eh o maior")
        }*/
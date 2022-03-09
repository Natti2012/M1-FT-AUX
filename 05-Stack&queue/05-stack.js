const { Stack, Queue } = require("../estructuras")

// Utilizando un STACK, y dado un string, invertir el orden de las palabras.
// OJO: Para este ejercicio NO se pueden usar metodos de Array.
// Deben utilizar solo los metodos provistos por la STACK

// Parametro:
//  (String): string con un texto cargado de palabras
 
// Salida: 
// > string con el mismo texto, el mismo orden, pero con las palabras invertidas. 

// Ejemplo:
//   Colombia Argentina: aibmoloC anitnegrA
//   Mar Azulado: raM odaluzA


function efectoEspejo(str){  
//tu codigo aqui
const reverse = new Stack()

let temp = '';

for (let i = 0; i < str.length; i++) {
    if(str[i] === ' ') {
        while(reverse.size() > 0){
           temp += reverse.pop(); 
        }
        temp += str[i]
    }  else {
        reverse.push(str[i])
    }
}
while(reverse.size() > 0) temp += reverse.pop(); 
return temp



/*
var newStack = new Stack;

var arr = []
for(let i = str.length-1 ; i >= 0 ; i--){ // itere el string pasado por parametro de atras a adelante,
newStack.push(str[i])                     //y en cada vuelta le iba pusheando str[i] al nuevo stack

arr =  arr  + newStack.pop()
};
arr= arr.split(' ')
for(let i =arr.length-1 ; i>=0; i--){
 newStack.push(arr[i])}
  
return  newStack.array.join(' ');
*/




};








module.exports = {
    efectoEspejo,
   
}
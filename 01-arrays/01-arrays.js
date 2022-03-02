
function invertirOrden(array) {
    // Invertir el orden de los elementos del array que recibe por parametro
    // Que los ultimos elementos, pasen a ser los primeros
    //
    // DETALLE: En caso de que el elemento contenga mas de 1 digito, el mismo NO debera ser devuelto
    // No vale usar el metodo "reverse"
    let reverse = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] < 10 ) reverse.unshift(array[i])
    }
 return reverse;
};
/*let reverse = []
array.forEach(element=>{
    if(elemento <10)reverse.unshift(elemento)
})return reverse;
*/ 
function numeroEnComun(array1, array2) {
    // Entre los dos array's que recibe la funcion por parametro
    // Buscar y retornar el valor en comun entre ellos
  for(let i = 0; i< array1.length; i++){
      for(let j = 0; j<array2.length; j++){
          if(array1[i] === array2[j])return array1 [i]
      }
  }
  return Math.min(...array1, ...array2)
};



function sumaDeArrays(array) {
    // El array recibido por parametro es un array multidimencional con array's que contienen elementos de tipo number
    // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
    // Sumando los elementos de cada array que contenga dos elementos, y devolviendo la suma del mismo
    // OJO: Si el elemento dentro del array que ingresa por prop, ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
   let newArray =[]
   array.forEach(element => {
       if(Array.isArray(element)){
           let suma = 0;
           element.forEach( e => suma +=e)
           newArray.push(suma)
       } else newArray.push(element)
       
   });
   return newArray;
};


function mismoValorMismosElementos(numero, divisor) {
    // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
    // Todos los elementos deben tener el mismo valor
    // OJO: Si el resultado de la division no es un entero, deben devolver false
 if(numero% divisor !==0)return false;
 let total = numero / divisor;
 let i = 0;
 let arr=[];
 while(divisor > i){
     arr.push(total);
     i++;
 }
 return arr;
};


function elementoMenorYMayor(array) {
    // El Array recibido por props es un array que contienen numeros
    // Tenes que retornar un array
    // Solamente con el elemento menor y mayor del array recibido
    
    let min = array[0];
    let max= array[0];
    
    for(let i = 1; i< array.length;i++){
        if(array[i]< min)min = array[i]
        if(array[i]> max)max = array[i]

    }
    return [min, max]
//let min = Math.min(...array)
//let max= Math.max(...array)
// return [min , max]
};



module.exports = {
    numeroEnComun,
    invertirOrden,
    elementoMenorYMayor,
    sumaDeArrays,
    mismoValorMismosElementos
};
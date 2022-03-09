'use strict'

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1];
        array[i + 1] = aux;
        swap = true;
      }
    }
  }
  return array;
};



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let aux = array[i]
    while (j >= 0 && array[j] > aux) {
      array[j + 1] = array[j];
      j--
    }
    array[j + 1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    let aux = array[i];
    array[i] = array[min];
    array[min] = aux;
  }
  return array;
}


function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;
  var pivot = array[0];
  var left = [];
  var right = [];
  var i = 1;
  while (i < array.length) {
    if (array[i] < pivot) left.push(array[i]);
    else right.push(array[i]);
    i++;
  }
  return quickSort(left).concat(pivot).concat(quickSort(right))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  var mid = Math.floor(array.length / 2),
    left = array.slice(0, mid),//se queda con los elementos desde 0 hasta min
    right = array.slice(mid)//se queda con los elementos desde min hasta el final de arreglo.
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  var leftIndex = 0
  var rightIndex = 0
  var merged = []

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex])
      leftIndex++
    }
    else {
      merged.push(right[rightIndex])
      rightIndex++
    }
  }
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};
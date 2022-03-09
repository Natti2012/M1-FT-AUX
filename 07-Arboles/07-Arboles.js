const { BinarySearchTree } = require("../estructuras")

// En el prototipo de BinarySearchTree crear la funcion search que debe recibir un parametro y buscarlo en el arbol
// si lo encuentra, debe retornar el nodo. En caso contrario retornar el mensaje correspondiente.
BinarySearchTree.prototype.search = function (value) {

    if (value === this.value) {
        return this.value;
    }
    if (value > this.value) {
        if (this.right === null) {
            return 'no se encontró el valor';
        }
        else {
            return this.right.search(value);
        }
    } else {

        if (this.left === null) {
            return 'no se encontró el valor';
        }
        else {
            return this.left.search(value);
        }


    }

}


// En el prototipo de BinarySearchTree crear la funcion height que debe retornar la altura del mismo (cantidad de niveles)
// Ejemplo      (10)           ----> nivel 0
//             /     \
//          (7)     (12)       ----> nivel 1
//         /  \      /  \
//      (2)  (9)  (11)  (15)   ----> nivel 2

BinarySearchTree.prototype.height = function () {
    var countRigth = 0
    var countLeft = 0

    if (!this.right && !this.left) { return 0 }
    if (this.right) {
        countRigth = 1 + this.right.height();
    }
    if (this.left) {
        countLeft = 1 + this.left.height();
    }
    return Math.max(countLeft, countRigth)

}

module.exports = {
    BinarySearchTree
}
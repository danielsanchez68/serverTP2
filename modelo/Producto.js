class Producto {
    nombre = null
    precio = null
    stock = null

    //constructor(nombre, precio, stock) {    // 1
    constructor({nombre, precio, stock}) {    // 2
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }

    validar() {
        return this.nombre != ''
    }
}

export default Producto
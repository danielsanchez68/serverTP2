// https://www.npmjs.com/package/joi
// https://github.com/hapijs/joi
// https://joi.dev/
// instalación: npm i joi

import Joi from 'joi'


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
        //if(this.nombre == '') throw new Error('El campo nombre es obligatorio')

        // ---------- Validación específica del negocio -----------
        const schemaProducto = Joi.object({
            nombre: Joi.string().alphanum().min(3).max(30).required(),
            precio: Joi.number().min(0).max(1000000).required(),
            stock: Joi.number().integer().min(0).max(999).required(),
        });

        const { error } = schemaProducto.validate({
            nombre: this.nombre,
            precio: this.precio,
            stock: this.stock
        });

        if(error) {
            throw new Error(error)
        }
    }

    get() {
        return {
            nombre: this.nombre,
            precio: +this.precio,
            stock: parseInt(this.stock)
        }
    }
}

export default Producto
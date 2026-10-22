import Joi from 'joi'


class Producto {
    nombre = null
    edad = null

    constructor({nombre, edad}) { 
        this.nombre = nombre
        this.edad = edad
    }

    validar() {
        // ---------- Validación específica del negocio -----------
        const schemaCliente = Joi.object({
            nombre: Joi.string().alphanum().min(3).max(20).required(),
            edad: Joi.number().integer().min(0).max(120).required(),
        });

        const { error } = schemaCliente.validate({
            nombre: this.nombre,
            edad: this.edad,
        });

        if(error) {
            throw new Error(error)
        }
    }

    get() {
        return {
            nombre: this.nombre,
            edad: parseInt(this.edad)
        }
    }
}

export default Producto
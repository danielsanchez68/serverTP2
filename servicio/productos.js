//import ModeloMem from '../modelo/DAO/productosMem.js'
//import ModeloFile from '../modelo/DAO/productosFile.js'
import ModelFactory from '../modelo/DAO/productosFactory.js'

import Producto from '../modelo/Producto.js'

import config from '../config.js'


class Servicio {
    #modelo = null

    constructor() {
        //this.#modelo = new ModeloMem()        // persistiendo el modelo en Memoria del servidor
        //this.#modelo = new ModeloFile()         // persistiendo el modelo en File System
        this.#modelo = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        if(id) {   
            const producto = await this.#modelo.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.#modelo.obtenerProductos()
            return productos
        }    
    }

    guardarProducto = async producto => {
        //const productoModelo = new Producto(producto.nombre, producto.precio, producto.stock)   // 1
        const productoModelo = new Producto(producto)   // 2
        console.log(productoModelo)
        
        if(!productoModelo.validar()) return {}

        const productoGuardado = await this.#modelo.guardarProducto(productoModelo)
        return productoGuardado
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.#modelo.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.#modelo.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio
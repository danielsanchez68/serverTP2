import CnxMongoDB from "../CnxMongoDB.js"
import { ProductoModel } from "../models/Producto.js"


class ModeloMongoDB {
    constructor() {}

    obtenerProductos = async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const productos = await ProductoModel.find()
        return productos
    }

    obtenerProducto = async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const producto = await ProductoModel.findOne({_id: id})
        return producto
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const productoModel = new ProductoModel(producto)
        const productoGuardado = await productoModel.save()
        return productoGuardado
    }

    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        await ProductoModel.updateOne({ _id: id}, {$set: producto})

        const productoActualizado = await this.obtenerProducto(id)
        return productoActualizado
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')
        
        const productoEliminado = await this.obtenerProducto(id) 
        await ProductoModel.deleteOne({ _id: id})

        return productoEliminado
    }
}

export default ModeloMongoDB
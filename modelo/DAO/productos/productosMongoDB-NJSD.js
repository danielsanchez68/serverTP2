import { ObjectId } from "mongodb"
import CnxMongoDB from "../CnxMongoDB.js"


class ModeloMongoDB {
    constructor() {}

    obtenerProductos = async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const productos = await CnxMongoDB.db.collection('productos').find({}).toArray()
        return productos
    }

    obtenerProducto = async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const producto = await CnxMongoDB.db.collection('productos').findOne({ _id: new ObjectId(id)})
        return producto
    }

    guardarProducto = async producto => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        await CnxMongoDB.db.collection('productos').insertOne(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        await CnxMongoDB.db.collection('productos').updateOne({ _id: new ObjectId(id)}, {$set: producto})

        const productoActualizado = await this.obtenerProducto(id)
        return productoActualizado
    }

    borrarProducto = async id => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')
        
        const productoEliminado = await this.obtenerProducto(id) 
        await CnxMongoDB.db.collection('productos').deleteOne({ _id: new ObjectId(id)})

        return productoEliminado
    }
}

export default ModeloMongoDB
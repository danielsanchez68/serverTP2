import CnxMongoDB from "../CnxMongoDB.js"
import { ClienteModel } from "../models/Cliente.js"


class ModeloMongoDB {
    constructor() {}

    obtenerClientes = async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const clientes = await ClienteModel.find()
        return clientes
    }

    guardarCliente = async cliente => {
        if(!CnxMongoDB.connectionOK) throw new Error('Error de conexión a base de datos')

        const clienteModel = new ClienteModel(cliente)
        const clienteGuardado = await clienteModel.save()
        return clienteGuardado
    }
}

export default ModeloMongoDB
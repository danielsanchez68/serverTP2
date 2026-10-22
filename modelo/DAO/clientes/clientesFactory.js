import ModeloMongoDB from "./clientesMongoDB.js"


class ModelFactory {
    static get(tipo) {

        switch(tipo) {
            case 'MEM':
                throw new Error('*** Persistiendo en Memoria *** (clientes) -> NO IMPLEMENTADO')

            case 'FILE':
                throw new Error('*** Persistiendo en File System *** (clientes) -> NO IMPLEMENTADO')

            case 'MONGODB':
                console.log('*** Persistiendo en base de datos MongoDB (clientes) ***')
                return new ModeloMongoDB()

            default:
                throw new Error('*** Persistiendo en Memoria (default) *** (clientes) -> NO IMPLEMENTADO')
        }
    }
}

export default ModelFactory
import ModeloFile from "./productosFile.js"
import ModeloMem from "./productosMem.js"
import ModeloMongoDB from "./productosMongoDB.js"


class ModelFactory {
    static get(tipo) {

        switch(tipo) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria (productos) ***')
                return new ModeloMem()

            case 'FILE':
                console.log('*** Persistiendo en File System (productos) ***')
                return new ModeloFile()

            case 'MONGODB':
                console.log('*** Persistiendo en base de datos MongoDB (productos) ***')
                return new ModeloMongoDB()

            default:
                console.log('*** Persistiendo en Memoria (default) (productos) ***')
                return new ModeloMem()
        }
    }
}

export default ModelFactory
import mongoose from "mongoose"
import config from "../../config.js"


class CnxMongoDB {
    static connectionOK = false

    static conectar = async () => {
        try {
            console.log('Conectando a la base de datos (mongoose)...')
            await mongoose.connect(config.STRCNX + config.BASE)
            console.log('Base de datos conectada!')

            CnxMongoDB.connectionOK = true

        }
        catch(error) {
            console.log(`Error en la conexión de base de datos: ${error.message}`)
        }
    }
}

export default CnxMongoDB
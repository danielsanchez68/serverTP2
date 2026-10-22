import Servicio from '../servicio/clientes.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    obtenerClientes = async (req,res) => {
        try {
            const clientes = await this.#servicio.obtenerClientes()
            res.json(clientes)
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }

    guardarCliente = async (req,res) => {
        try {
            const cliente = req.body
            //console.log(cliente)

            // ---------- Validación genérica -----------
            if(Object.keys(cliente).length == 0) throw new Error('El cliente está vacío')

            const clienteGuardado = await this.#servicio.guardarCliente(cliente)
            res.json(clienteGuardado)
        }
        catch(error) {
            res.status(500).json({ url: req.url, method: req.method, error: error.message })
        }
    }
}

export default Controlador


import ModelFactory from '../modelo/DAO/clientes/clientesFactory.js'

import Cliente from '../modelo/Cliente.js'

import config from '../config.js'


class Servicio {
    #modelo = null

    constructor() {
        this.#modelo = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerClientes = async _ => {
        const clientes = await this.#modelo.obtenerClientes()
        return clientes
    }

    guardarCliente = async cliente => {
        const clienteModelo = new Cliente(cliente)
        
        clienteModelo.validar()

        const clienteGuardado = await this.#modelo.guardarCliente(clienteModelo.get())
        return clienteGuardado
    }
}

export default Servicio
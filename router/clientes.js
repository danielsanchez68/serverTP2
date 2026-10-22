import express from 'express'
import Controlador from '../controlador/clientes.js'


class Router {
    #controlador = null

    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        router.get('/', this.#controlador.obtenerClientes)
        router.post('/', this.#controlador.guardarCliente )

        return router
    }
}

export default Router
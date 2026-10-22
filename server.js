import express from 'express'
import RouterProductos from './router/productos.js'
import RouterClientes from './router/clientes.js'



class Server {
    #port = null
    #routerProductos = null
    #routerClientes = null

    constructor(port) {
        this.#port = port
        this.#routerProductos = new RouterProductos()
        this.#routerClientes = new RouterClientes()
    }

    start() {
        const app = express()
        
        app.use(express.json())
        app.use(express.urlencoded({extended:true}))

        app.use(express.static('public'))

        /* --------------------------------- */
        /*       APIRestful: productos       */
        /* --------------------------------- */
        app.use('/api/productos', this.#routerProductos.config())

        /* --------------------------------- */
        /*          APIRest: clientes        */
        /* --------------------------------- */
        app.use('/api/clientes', this.#routerClientes.config())

        const server = app.listen(this.#port, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${this.#port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server
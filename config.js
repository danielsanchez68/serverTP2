import dotenv from 'dotenv'

dotenv.config({quiet: true})

//console.log('process.env', process.env)

const PORT = 8080
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || ''
const STRCNX = process.env.STRCNX || 'mongodb://localhost:27017'
const BASE = process.env.BASE || 'test'

export default {
    PORT, // es igual a -> PORT: PORT
    MODO_PERSISTENCIA,
    STRCNX,
    BASE
}
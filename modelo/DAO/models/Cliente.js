import mongoose from "mongoose";

const clienteSchema = mongoose.Schema({
    nombre: String,
    edad: Number
}, {versionKey: false})


export const ClienteModel = mongoose.model('clientes', clienteSchema)
const {Schema, model} = require('mongoose')

const encuestaSchema = Schema({
    nombreEncuesta: {type: String},
    fecha: {type: String},
    documentoEncuestado: {type: String},
    nombreEncuestado: {type: String},
    edad: {type: String},
    genero: {type: String},
    empleado: {type: String}
})

module.exports = model("Encuesta", encuestaSchema)
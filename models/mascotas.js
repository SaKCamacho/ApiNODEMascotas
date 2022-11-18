const {Schema, model} = require('mongoose')

const mascotaSchema = Schema({
    nombre: {type: String},
    raza: {type: String},
    peso: {type: String}
})

module.exports = model("Mascota", mascotaSchema)
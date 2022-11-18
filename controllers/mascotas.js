const {response} = require('express')
const Mascota = require('../models/mascotas')

const getMascota = async (req, res = response) =>{
    const mascota = await Mascota.find()
    res.json({
        msg: 'GET API Mascota',
        mascota
    })
}

const postMascota = async(req, res) =>{
    const {nombre, raza, peso} = req.body
    const mascota = new Mascota({nombre, raza, peso}) 
    await mascota.save()

    res.json({
        msg: 'POST API Mascota',
        nombre,
        raza,
        peso
    })
}

const patchMascota = async (req, res) =>{
    const {nombre, peso} = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre: nombre},{peso: peso})

    res.json({
        msg: 'PATCH API Mascota',
        mascota
    })
}

const putMascota = async (req, res) =>{
    const {nombre, raza, peso} = req.body
    const mascota = await Mascota.findOneAndUpdate({nombre: nombre},{raza: raza, peso: peso})

    res.json({
        msg: 'UPDATED API Mascota',
        mascota
    })
}

const deleteMascota = async (req, res) =>{
    const {nombre} = req.query
    const mascota = await Mascota.findOneAndDelete({nombre: nombre})

    res.json({
        msg: 'DELETE API Mascota',
        mascota
    })
}



module.exports = {getMascota, postMascota, deleteMascota, putMascota, patchMascota}
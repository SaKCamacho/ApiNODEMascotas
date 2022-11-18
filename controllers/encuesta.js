const {response} = require('express')
const Encuesta = require('../models/encuesta')

const getEncuesta = async (req, res = response) =>{
    const encuesta = await Encuesta.find()
    res.json({
        msg: 'GET API Encuesta',
        encuesta
    })
}

const postEncuesta = async(req, res) =>{
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado}) 
    await encuesta.save()

    res.json({
        msg: 'POST API Encuesta',
        nombreEncuesta, 
        fecha, 
        documentoEncuestado,
        nombreEncuestado,
        edad,
        genero,
        empleado
    })
}


const patchEncuesta = async (req, res) =>{
    const {nombreEncuesta, empleado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta: nombreEncuesta},{empleado: empleado})

    res.json({
        msg: 'PATCH API Encuesta',
        encuesta
    })
}


const putEncuesta = async (req, res) =>{
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta: nombreEncuesta},
        {fecha: fecha, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})

    res.json({
        msg: 'UPDATED API Encuesta',
        encuesta
    })
}

const deleteEncuesta = async (req, res) =>{
    const {nombreEncuesta} = req.query
    const encuesta = await Encuesta.findOneAndDelete({nombreEncuesta: nombreEncuesta})

    res.json({
        msg: 'DELETE API Encuesta',
        encuesta
    })
}



module.exports = {getEncuesta, postEncuesta, patchEncuesta, putEncuesta, deleteEncuesta}
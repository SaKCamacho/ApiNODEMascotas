const { Router } = require('express')
const router = Router() //Obtener la función Router

router.get('/', (req, res) =>{
    //Desestructuración de los parámetros enviados
    //en la petición
    const {referencia, nombre } = req.query
     res.json({
        msg: 'GET API',
        referencia,
        nombre
        })
    })

router.post('/', (req, res) =>{
    //desestructuración de los parámetros
    //enviados por body
    const {referencia, nombre, precio} = req.body

    res.json({
        msg: 'POST API',
        referencia,
        nombre,
        precio
        })
    })

router.put('/', (req, res) =>{
    res.json({
        msg: 'PUT API'
        })
    })

router.delete('/', (req, res) =>{
    res.json({
        msg: 'DELETE API'
        })
    })

router.patch('/', (req, res) =>{
        res.json({
            msg: 'PATCH API'
            })
    })
    
module.exports = router
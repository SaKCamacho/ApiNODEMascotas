const {Router} = require('express')
const router = Router()

const {getMascota, postMascota, patchMascota, putMascota, deleteMascota} = require('../controllers/mascotas')

router.post('/', postMascota)
router.get('/', getMascota)
router.patch('/', patchMascota)
router.put('/', putMascota)
router.delete('/', deleteMascota)

module.exports = router
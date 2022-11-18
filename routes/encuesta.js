const {Router} = require('express')
const router = Router()

const {getEncuesta, postEncuesta, patchEncuesta, putEncuesta, deleteEncuesta} = require('../controllers/encuesta')

router.post('/', postEncuesta)
router.get('/', getEncuesta)
router.patch('/', patchEncuesta)
router.put('/', putEncuesta)
router.delete('/', deleteEncuesta)

module.exports = router
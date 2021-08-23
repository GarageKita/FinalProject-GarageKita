const express = require('express')
const router = express.Router()
const RequestC = require('../controllers/requestController')
const {authentication, adminAuth, authorization} = require('../middlewares/auth')

router.get('/', RequestC.getRequest)
router.get('/:id', function(req, res, next) {
    if(req.headers.access_token) {authentication}
    else {next()}
}, RequestC.getRequest)
router.post('/', authentication, adminAuth, RequestC.postRequest)
router.put('/:id', authentication, adminAuth, RequestC.putRequest)
router.delete('/:id', authentication, adminAuth, RequestC.delRequest)


module.exports = router
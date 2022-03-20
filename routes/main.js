__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/instagram', (req, res) => {
    res.sendFile(__path + '/views/instagram.html')
})
router.get('/tes', (req, res) => {
    res.sendFile(__path + '/views/tes.html')
})

module.exports = router

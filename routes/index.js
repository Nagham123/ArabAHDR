const express = require('express')
const router = express.Router()


//we render index.ejs inside views folder
router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router
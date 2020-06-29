const express = require('express')
const app = express()
const router = express.Router()
var compresssion = require('compression')

app.use(express.static(__dirname + "/views/"))
app.use(compresssion())
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/', router)
app.listen(process.env.PORT||3000, () => {
    console.log('You are connected on http://localhost:3000/')
})
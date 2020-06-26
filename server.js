const express = require('express')
const app = express()
const router = express.Router()

app.use(express.static(__dirname + "/views/"))
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/', router)
app.listen(3000, () => {
    console.log('You are connected on http://localhost:3000/')
})
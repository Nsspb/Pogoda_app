const bodyParser = require('body-parser')
const express = require('express')
const weatherRequest = require('./requests/weather.requests')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index', { weather: null, error: null })
})

app.post('/', async (req, res) => {
    const { city } = req.body
    const { weather, error } = await weatherRequest(city)
    res.render('index', { weather, error })
})

app.listen(1488, () => {
    console.log('Сервер запущен на порту  - 1488')
})
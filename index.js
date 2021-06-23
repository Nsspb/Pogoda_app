const bodyParser = require('body-parser')
let express = require('express')
const weatherRequest = require('./requests/weather.requests')

let app = express()
// e644ee2b4c2b5a3d2e1226ccdd4a3cd0
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    const { city } = req.body


    weatherRequest(city)
    res.render('index')
})

app.listen(1488, () =>{ 
    console.log ('Сервер запущен на порту  - 1488')
})
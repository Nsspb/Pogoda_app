let express = require('express')

let app = express()
app.set('view engine', 'ejs')
app.use(express.static ('public'))


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log(req.params)
    res.render('index')
})

app.listen(1488, () =>{ 
    console.log ('Сервер запущен на порту  - 1488')
})
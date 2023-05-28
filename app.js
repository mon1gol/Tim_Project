const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const authRoutes = require('./routes/auth')
const homeRoutes = require('./routes/home')
const list_of_casesRoutes = require('./routes/list_of_cases')
const loginRoutes = require('./routes/login')
const registRoutes = require('./routes/regist')

const app = express()


app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())
app.use('/api/auth', authRoutes)

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('styles'))
app.use(express.static('img'))

app.use('/', homeRoutes)
app.use('/list_of_cases', list_of_casesRoutes)
app.use('/login', loginRoutes)
app.use('/regist', registRoutes)


module.exports = app
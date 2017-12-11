var express = require('express')
var bodyParser = require('body-parser')
var favicon = require('serve-favicon')
require('dotenv').config()
var port = process.env.PORT

var app = express()

app.use(express.static('public'))

app.use(favicon(path.join(__dirname, 'public', '/icon/favicon.ico')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: "main" }))
app.set('view engine', 'handlebars')

var routes = require('./controllers/axiom_controller.js')

app.use('/', routes)
app.use('/api/axiom', routes)
app.use('/api/claim', routes)

app.listen(port)

console.log('listening on port: ' + port)
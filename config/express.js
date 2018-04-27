const express = require('express'),
  app = express(),
  consign = require('consign'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  hbs = require('express-handlebars'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  path = require('path')

//hbs configurations
const layoutFolder = path.join(process.cwd(), '/app/views/layouts/')
const ext = '.hbs'
const defaultLayout = 'layout'

//view engine
app.engine(
  'hbs',
  hbs({
    extname: ext,
    defaultLayout: defaultLayout,
    layoutsDir: layoutFolder
  })
)

app.set('view engine', 'hbs')
//views dir
app.set('views', path.join(process.cwd(), '/app/views'))

//middlewares
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static(path.join(process.cwd(), 'public')))

consign( {cwd: 'app'} )
  .include('routes')
  .into(app)

module.exports = app

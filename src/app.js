'use strict';

const path = require('path');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');

const middleware = require('./middleware');
const models = require('./models');
const services = require('./services');

const app = feathers();

if ( process.env.NODE_ENV === 'production') {
  app.configure(configuration(path.join(__dirname, '..')));
} else {
  app.configure(configuration(path.join(__dirname, '..')));
}

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', serveStatic(app.get('public')))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .configure(hooks())
  .configure(rest())
  .configure(models)
  .configure(services)
  .configure(middleware);

module.exports = app;

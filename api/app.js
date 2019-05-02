const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');

const masterRoute = require('./routes/user.route');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', masterRoute);
const port = process.env.PORT || 4000;

/*app.route('/home/add')
  .post(function(req, res) {
    res.send('Get a random book');
  })
  ;
  */

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
});
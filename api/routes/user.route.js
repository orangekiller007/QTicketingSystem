const express = require('express');
const app = express();
const masterRoutes = express.Router();

// Require master model in our routes module
let User = require('../models/User');
console.log("Inside User route");
masterRoutes.route('/home').get(function (req, res) {

    User.find(function (err, masteres){
    if(err){
      console.log(err);
    }
    else {
      res.json(masteres);
    }
  });
});

// Defined store route
/*masterRoutes.route('/home/add').post(function (req, res) {
  let master = new Master(req.body);
  master.save()
    .then(master => {
      res.status(200).json({'master': 'master in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save ");
    });
});


// Defined get data(index or listing) route
masterRoutes.route('/view').get(function (req, res) {

    Master.find(function (err, masteres){
    if(err){
      console.log(err);
    }
    else {
      res.json(masteres);
    }
  });
});

// Defined edit route
masterRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Master.findById(id, function (err, master){
      res.json(master);
  });
});

//  Defined update route
masterRoutes.route('/update/:id').post(function (req, res) {
    Master.findById(req.params.id, function(err, master, next) {
    if (!master)
      return next(new Error('Could not load Document'));
    else {
        master.name = req.body.name;
        master.position = req.body.position;
        master.joining_year = req.body.joining_year;
        master.address = req.body.address;
        master.age = req.body.age;

        master.save().then(master => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
masterRoutes.route('/delete/:id').get(function (req, res) {
    Master.findByIdAndRemove({_id: req.params.id}, function(err, master){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});*/

module.exports = masterRoutes;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    photo: {
      type: String
    },
     user_type: {
      type: String
    }
  },{
      collection: 'user'
  });
  
  module.exports = mongoose.model('User', User);
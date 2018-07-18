

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let AdUnit = new Schema({
    first_name: {
    type: String
  },
    surname: {
    type: String
  },

	email: {
    type: String
  },
    password: {
    type: String
  }
},{
    collection: 'usercollection'
  
});

module.exports = mongoose.model('AdUnit', AdUnit);
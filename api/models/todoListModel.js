'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the Student'
  },
  average: {
    type: Number,
    default: 0
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'true', 'false']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Students', StudentSchema);
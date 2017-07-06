'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var StudentSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the Student'
  },
  nota1: {
    type: Number,
    default: 0.0
  },
  nota2: {
    type: Number,
    default: 0.0
  },
  nota3: {
    type: Number,
    default: 0.0
  }
});

module.exports = mongoose.model('Students', StudentSchema);
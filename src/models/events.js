const mongoose = require('mongoose')
const Teams = require('../models/teams')
const eventsSchema = new mongoose.Schema({

  name: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    minlength: 2,
    maxlength: 100,
    required: true,
    trim: true
  },
  hour: {
    type: String,
    required: false,
    default: '11:00 am'
  },
  category: {
    type: String,
    required: true,
    min: 1
  },
  type: {
    type: String,
    required: true,
    min: 1
  },
  image: {
    type: String,

  },
  teams:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teams',
    autopopulate: true
  } ]

})
eventsSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Events', eventsSchema)
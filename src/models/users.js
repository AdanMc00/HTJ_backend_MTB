const mongoose = require('mongoose')
const Teams = require('../models/teams')
const usersSchema = new mongoose.Schema({

  email:{
    type:String,
    minlength:5,
    maxlength:500,
    required:true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

  },
  password:{
    type:String,
    minlength:5,
    required:false
  },
  name:{
    type: String,
    minlength:3,
    maxlength:100
  },
  birthDate: {
    type: Date,
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teams',
    autopopulate: true
  }
})
usersSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Users', usersSchema)
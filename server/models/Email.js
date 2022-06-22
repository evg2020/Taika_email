const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const {Schema, model} = require('mongoose')

const schema = new Schema({
  subject :{
    type:String,
    required: true
  },
  text : {
    type:String,
    required:false
  },
  from: [{}],
  date : {
    type: String /// needs to check type for time
  }
})

const Email = mongoose.model('Email', schema)

module.exports = Email
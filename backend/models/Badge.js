const mongoose = require('mongoose')
const Schema = mongoose.Schema


let badgeSchema = new Schema({
  title: String,
  photoUrl: String,
  description: String

},{
  timestamps: true,
  versionKey: false
})


module.exports = mongoose.model('Badge', badgeSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema


let badgeSchema = new Schema({
  description: String,
  activeIcon: String,
  unActiveIcon: String,
},{
  timestamps: true,
  versionKey: false
})


module.exports = mongoose.model('Badge', badgeSchema)
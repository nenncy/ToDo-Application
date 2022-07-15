const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: { type: String , trim:true},
   email: { type: String , trim:true , unique:true},
   password: { type: String}, 
   cinform:{type:Boolean, default:false}
}, 
{
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let TODO= new Schema({
    todo_name:{
        type:String
    },
    date: { type: Date}
}
,{ timestamps: true }
) 

module.exports=mongoose.model("TODO",TODO)


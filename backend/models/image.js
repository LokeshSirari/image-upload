var mongoose = require('mongoose');

// Define our admin schema
var ImageSchema= new mongoose.Schema({                  
    name: {type: String,unique: true},
    
    path:{type:String,unique: true}
 });
module.exports = mongoose.model('image',ImageSchema);
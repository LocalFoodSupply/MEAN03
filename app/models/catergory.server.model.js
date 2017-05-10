var mongoose = require('mongoose');

//#1 create schema
var Schema = mongoose.Schema;

var Categoryschema = Schema({
    title:{
        type:String,
        unique:true,
        lowercase:true
    },
    desc:String,
    imageS:String,
    imageL:String,
    id:String,

});

//#2 create model
module.exports = mongoose.model('Category',Categoryschema);


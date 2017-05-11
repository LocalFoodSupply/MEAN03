var mongoose = require('mongoose');
//#1 create schema
var Schema = mongoose.Schema;

var schema = Schema({
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category'
    },
    title:String,
    price:Number,
    imageS:String,
    imageL:String,
    isSpecial:Boolean,
    desc:String,
    prod:String,

}).index({
    'title': 'text',
    'desc': 'text'
});

//#2 create model
module.exports=mongoose.model('Product',schema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create a schema for product//
var productSchema = new Schema({
  name: String, 
  description: { 
    type: String, 
    required: true
  },
  image:String, 
  price: { 
    type: Number, 
    required: true
  },
  quantity: { 
    type: Number, 
    required: true
  });

//Create a Model using the Schema//
var Product = mongoose.model('Product', productSchema);

// Make this available to our Node applications.
module.exports = Product;
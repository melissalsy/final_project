var mongoose = require('mongoose');
<<<<<<< HEAD
=======
var Schema = mongoose.Schema;
>>>>>>> baa8c79cd1e14df1e5aced3319e61178ac1d7326

//create a schema for product//
var productSchema = new Schema({
  name: String, 
  description: { 
    type: String, 
    required: true
  },
  image:String, 
  category: { 
    type: String, 
    required: true 
  },
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
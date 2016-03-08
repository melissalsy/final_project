var http = require('http');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:8080';

var productsSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
  },
  description: { 
    type: String, 
    required: true, 
  },
  image: { 
    type: String, 
    required: true, 
  },
  category: { 
    type: String, 
    required: true, 
  },
  price: { 
    type: Number, 
    required: true,  
  },
  quantity: { 
    type: Number, 
    required: true,  
  });

var Product = mongoose.model('Product', productsSchema);

module.exports = Product;
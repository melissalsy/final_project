var http = require('http');
var mongoose = require('mongoose');
var url = 'mongodb://localhost:8080';

mongoose.connect(url, function(err, res){
	if (err) {
		console.log('error');
	} else {
		console.log('mongoose connection success!');
	}
});

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
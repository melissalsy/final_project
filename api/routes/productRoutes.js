var Products = require('../models/product');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.put('/', function(req, res){
	// console.log(req.body); 
	var update = req.body;
	// var update = update.toString()
	var query = {"_id":req.body._id};

	Products.update(query, update, {}, function(err, product){
		if(err){
			console.log(err);
		}else{
			console.log(product);
			res.send(product);
		}

	})
})

router.delete('/:productId', function(req, res){
	Products.findOne({"_id": req.params.productId}, function(err, product){
		if (err){
			console.log(err);
		}else{
			product.remove(function(err){
				if(err){
					console.log(err);
				}else {
					console.log('success!');
				}
			})
		}
	})
})
module.exports = router;

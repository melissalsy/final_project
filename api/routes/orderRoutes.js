var models = require('../models/orders.js');
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	models.Orders.findAll().then(function(orders){
		res.json({
			orders:orders
		});
	});
});

router.get('/orders', function(req, res){
	models.Orders.getOrders(function(err, orders){
		if (err){
			throw err;
		}
		res.json(orders);
	});
});

module.exports = router;
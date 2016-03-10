var models = require('../models/orders.js');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


//app.use(bodyParser.json());

// router.get('/', function(req,res){
// 	models.Orders.findAll().then(function(orders){
// 		res.json({
// 			orders:orders
// 		});
// 	});
// });

// router.get('/orders', function(req, res){
// 	models.Orders.getOrders(function(err, orders){
// 		if (err){
// 			throw err;
// 		}
// 		res.json(orders);
// 	});
// });

// router.get('/orders/:_id', function(req, res){
// 	models.Orders.getOrderById(function(err, order){
// 		// if (err){
// 		// 	throw err;
// 		// }
// 		// res.json(order);
// 	});
// });

// router.post('/orders', function(req, res){

// 	models.Orders.addOrder(order, function(err, order){
// 		// if (err){
// 		// 	throw err;
// 		// }
// 		// res.json(order);
// 	});
// });


module.exports = router;


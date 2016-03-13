var Orders = require('../models/orders.js');
var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.post('/', function(req,res){
	// console.log(req.body);
	var newOrder = Orders(req.body);
	// console.log(newOrder);
	newOrder.save(function(err){
		if (err){
			console.log(err);
			res.json(err);
		}else{
			console.log(newOrder);
			res.json(newOrder);
		}
	})
})
router.post('/',function(req,res){
	Orders.remove({}, function(err, res) {
		if (!err) console.log('removing all orders');
	})
});
// router.get('/', function(req, res){
// 	Orders.find({}, function(err, orders){
// 		if (err){
// 			throw err;
// 		}else{
// 		res.json(orders);
// 		}
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


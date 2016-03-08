var models = require('../models');
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

router.get('/orders/:_id', function(req, res){
	Book.getOrderById(function(req.params._id, function(err, order){
		if (err){
			throw err;
		}
		res.json(order);
	});
});

app.post('/orders/', function(req, res){
	var book = req.body;
	// var genre uses body parser
	Book.addBook(book, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});
});

app.put('/orders/:_id', function(req, res){
	var id = req.params._id;
	var genre = req.body;
	Orders.updateBook(id, order, {}, function(err, order){
		if (err){
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', function(req, res){
	var id = req.params._id;
	Book.deleteBook(id, function(err, book){
		if (err){
			throw err;
		}
		res.json(book);
	});
});
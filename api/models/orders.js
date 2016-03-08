var http = require('http');
var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	order_status: {

	},
	shipping_info: {
		Address: {
			type: String,
			required: true
		},
		City: {
			type: String,
			required: true
		},
		Country: {
			type: String,
			required: true
		},
		Province: {
			type: String,
			required: true
		},
		Postal: {
			type: String, 
			minimum: 6, 
			required: true}
	},
	cart: {

	},
	tax: {
		type: Number
	},
	price: {

	},
	total: {

	}
});

var Orders = module.exports = mongoose.model('Orders', orderSchema);

module.exports.getOrders = function(callback, limit){
	Orders.find(callback).limit(limit);
}

module.exports.getOrderById = function(id, callback){
	Orders.findById(id, callback);
}

module.exports.addOrder = function(book, callback){
	Orders.create(order, callback);
}

module.exports.deleteOrder = function(id, callback){
	var query = {_id: id};
	Orders.remove(query, callback);
}

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//This is the Order Schema/
var orderSchema = new Schema({
	order_status: {
		type: Boolean,
		required: true
	},
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
		required: true
	},
	cart: Array,
	tax: Number,
	price: Number,
	total: Number,
	created_at: Date;
});

//Create a Model using the Schema//
var Order = mongoose.model('Order', orderSchema);

// Make this available to our Node applications.
module.exports = Order;

// module.exports.getOrders = function(callback, limit){
// 	Orders.find(callback).limit(limit);
// }

// module.exports.getOrderbyId = function(id, callback){
// 	Orders.findById(id, callback);
// }

// module.exports.addOrder = function(book, callback){
// 	Orders.create(order, callback);
// }

// module.exports.updateOrder = function(id, book, order, options, callback){
// 	var query = {_id:id};
// 	var update =  {
		
// 	}
// }

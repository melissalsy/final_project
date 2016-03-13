var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//This is the Order Schema/
var orderSchema = new Schema({
	order_status: {
		type: Boolean,
		required: true
	},
	customer_Info: {
		firstName: {
			type: String, 
			required: true
		}, 
        lastName: {
			type: String, 
			required: true
		}, 
        email: {
			type: String, 
			required: true
		},
        address: {
			type: String, 
			required: true
		},
        apt: {
			type: String, 
		},
        city: {
			type: String, 
			required: true
		},
        province: {
			type: String, 
			required: true
		},
        postal: {
			type: String, 
		minimum: 6, 
		required: true
		}
	},
	cart: Array,
	tax: Number,
	price: Number,
	total: Number,
	created_at: Date
});


//Create a Model using the Schema
var Order = mongoose.model('Order', orderSchema);

// Make this available to our Node applications.
module.exports = Order;

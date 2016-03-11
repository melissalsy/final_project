app.service('orderSrv', OrderService);

function OrderService($state, api){
	var srv = this;
	srv.api = api;
	srv.state = $state;
	srv.orders = [];
	srv.cart = [];
	srv.newCustomer;
}

OrderService.prototype.addProducts = function (product){
	var srv = this; 
	srv.cart.push(product);
}
OrderService.prototype.getOrders = function(){
	var srv = this;
	return srv.api.request('/orders', {}, 'GET')
		.then(function(res){
			console.log(res);
			srv.orders = res.data;
			return res.data;
		}, function(res){
			console.log(res);
			return;
		})
}

OrderService.prototype.addCustomer = function(customer){
	var srv = this; 
	srv.newCustomer = customer;
	console.log(srv.newCustomer);
}
OrderService.prototype.addOrder = function(order){
	var srv = this;
	console.log(order);
	srv.api.request('/orders',order,'POST')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			//order was added successfully
			srv.orders.push(res.data.order);
			//srv.state.go('admin');

		}
	})
}
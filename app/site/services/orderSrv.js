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
	return [product];
	srv.cart.splice(0,1,product);
	console.log(srv.cart);
}

OrderService.prototype.getOrders = function(){
	var srv = this;
	return srv.api.request('/orders/', {}, 'GET')
		.then(function(res){
			console.log(res);
			return res;
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
	srv.api.request('/orders/',order,'POST')
	.then(function(res){
		if(res.status === 200){
			console.log(res);
			//order was added successfully
			srv.orders.push(res);
			// console.log(srv.orders);
			//srv.state.go('admin');
		}
	})
}
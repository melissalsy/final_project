app.service('orderSrv', OrderService);

function OrderService($state, api){
	var srv = this;
	srv.api = api;
	srv.state = $state;
	srv.orders = [];
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

OrderService.prototype.addOrder = function(order){
	var srv = this;
	return srv.api.request('/orders', order, 'POST')
		.then(function(res){
		console.log(res.data);
	});
}
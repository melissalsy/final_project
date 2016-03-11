app.controller('orderCtrl', OrderCtrl);

function OrderCtrl($state, orderSrv){
	var ctrl = this;
	ctrl.state = $state;
	ctrl.orderSrv = orderSrv;
	ctrl.getOrders();
	ctrl.orders;
}

OrderCtrl.prototype.getOrders = function(){
	var ctrl = this;
	ctrl.orderSrv.getOrders()
	.then(function(res){
		console.log(res);
		ctrl.orders = res;
	})
}
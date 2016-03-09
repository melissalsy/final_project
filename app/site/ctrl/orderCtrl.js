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
	var order = {
		orderId: ctrl._id,
		quantity: ctrl.quantity,
		total: ctrl.total,
		status: 'active'
	};

	ctrl.orderSrv.getOrders(order);
}


app.controller('adminCtrl', AdminCtrl);

function AdminCtrl($state,productSrv, orderSrv, $scope,$stateParams, api) { 
	var ctrl = this; 
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.orderSrv = orderSrv;
	ctrl.$scope = $scope;
	ctrl.$stateParams = $stateParams;
	// ctrl.getProduct();
	ctrl.products;
	// ctrl.getOrders();
	ctrl.orders;
	ctrl.product;
	ctrl.order;
	ctrl.api = api;
	if(localStorage.authToken == undefined || localStorage.authToken == null){
		$state.go('login');
	}
	console.log($stateParams);
	if(ctrl.$stateParams.orderId){
		console.log('hi');
		ctrl.eachOrder(ctrl.$stateParams.orderId);
	}
	else{
		ctrl.getOrders();
		// ctrl.getProduct();
	}

	$scope.$watch(function() {
		return productSrv.products;
	}, function(newVal, oldVal) {
		ctrl.products = newVal;
	});
}

// AdminCtrl.prototype.addProduct = function(){
// 	var ctrl = this;
// 	ctrl.product = {
// 		name: ctrl.name,
// 		description: ctrl.description,
// 		price: ctrl.price,
// 		quantity: ctrl.quantity,
// 	};
// 	ctrl.productSrv.addProduct(ctrl.product);
// }

// AdminCtrl.prototype.getProduct = function(){
// 	var ctrl = this; 
// 	ctrl.productSrv.getProduct()
// 	.then(function(res){
// 		ctrl.products = res;
// 	});
// }

// AdminCtrl.prototype.updateProduct = function(product){
// 	var ctrl = this;
// 	var updatedProduct = {
// 		name: product.name,
// 		description: product.description,
// 		price: product.price,
// 		quantity: product.quantity,
// 		_id: product._id
// 	}
// 	ctrl.productSrv.updateProduct(updatedProduct,product._id);
// 	ctrl.state.go('admin');
// }

AdminCtrl.prototype.logout = function(){
	var ctrl =this;
	localStorage.removeItem('authToken');
	ctrl.state.go('login');

}

AdminCtrl.prototype.getOrders = function(){
	var ctrl = this;
	ctrl.orderSrv.getOrders()
	.then(function(res){
		console.log(res);
		ctrl.orders = res.data;
	});
}

AdminCtrl.prototype.viewOrder = function(orderId){
	var ctrl = this;
	ctrl.state.go('orders', {orderId:orderId});

}

AdminCtrl.prototype.eachOrder = function(orderId){
	var ctrl = this;
	ctrl.api.request('/orders/'+orderId, {}, 'GET')
	.then(function(res){
		ctrl.order = res.data[0];
	})
}

AdminCtrl.prototype.completeOrder = function(order){
	var ctrl = this; 
	ctrl.orderSrv.completeOrder(order)
	.then(function(res){
		console.log(res);
	})
}
AdminCtrl.prototype.deleteOrder= function(id){
	var ctrl = this;
	ctrl.orderSrv.removeOrders(id)
	.then(function(res) {
			if(res.status ===200){
				ctrl.state.go('admin');
			}
		})
}
app.controller('adminCtrl', AdminCtrl);

function AdminCtrl($state,productSrv, orderSrv, $scope) { 
	var ctrl = this; 
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.orderSrv = orderSrv;
	ctrl.$scope = $scope;
	ctrl.getProduct();
	ctrl.products;
	ctrl.getOrders();
	ctrl.orders;
	ctrl.product;
	if(localStorage.authToken == undefined || localStorage.authToken == null){
		$state.go('login');
	}
	
}

AdminCtrl.prototype.addProduct = function(){
	var ctrl = this;
	ctrl.product = {
		name: ctrl.name,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
	};
	ctrl.productSrv.addOrder(ctrl.product);
}

AdminCtrl.prototype.getProduct = function(){
	var ctrl = this; 
	ctrl.productSrv.getProduct()
	.then(function(res){
		ctrl.products = res;
	});
}

AdminCtrl.prototype.updateProduct = function(product){
	var ctrl = this;
	var updatedProduct = {
		name: product.name,
		description: product.description,
		price: product.price,
		quantity: product.quantity,
		_id: product._id
	}
	ctrl.productSrv.updateProduct(updatedProduct,product._id);
	ctrl.state.go('admin');
}

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
		// console.log(res[0].cart[0].name);
		// console.log(ctrl.orders);
	});
}

AdminCtrl.prototype.viewOrder = function(id){
	var ctrl = this; 
	// console.log(id);
	ctrl.orderSrv.viewOrder(id)
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
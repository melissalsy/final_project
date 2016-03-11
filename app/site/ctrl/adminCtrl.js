app.controller('adminCtrl', AdminCtrl);

function AdminCtrl($state,productSrv, orderSrv) { 
	var ctrl = this; 
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.orderSrv = orderSrv;
	ctrl.getProduct();
	ctrl.products;
	ctrl.getOrders();
	ctrl.orders;
	ctrl.product;
}

AdminCtrl.prototype.addProduct = function(){
	var ctrl = this;
	ctrl.product = {
		name: ctrl.name,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
	};
	ctrl.productSrv.addProduct(ctrl.product);
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
		ctrl.orders = res;
	});
}

	// var order = {
	// 	orderId: ctrl._id,
	// 	quantity: ctrl.quantity,
	// 	total: ctrl.total,
	// 	status: true
	// };

	//ctrl.orderSrv.getOrders();
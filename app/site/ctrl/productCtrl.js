app.controller('productCtrl', ProductCtrl);

function ProductCtrl($state,productSrv) { 
	var ctrl = this; 
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.getProduct();
	ctrl.products;

}

ProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	var product = {
		name: ctrl.name,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
	};
	ctrl.productSrv.addProduct(product);
}

ProductCtrl.prototype.getProduct = function(){
	var ctrl = this; 
	ctrl.productSrv.getProduct()
	.then(function(res){
		ctrl.products = res;
	})
}

ProductCtrl.prototype.updateForm = function(){
	var ctrl = this; 
	ctrl.state.go('updateForm');
}

ProductCtrl.prototype.logout = function(){
	var ctrl =this;

	localStorage.removeItem('authToken');
	ctrl.state.go('login');

}
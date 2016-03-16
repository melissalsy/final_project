app.controller('productCtrl', ProductCtrl);

function ProductCtrl($scope, productSrv, $state){
	var ctrl = this; 
	ctrl.$scope = $scope;
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.getProduct();
	ctrl.products;
	$scope.$watch(function() {
		return productSrv.products;
	}, function(newVal, oldVal) {
		ctrl.products = newVal;
	});
}

ProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	ctrl.product = {
		name: ctrl.name,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
	};
	ctrl.productSrv.addProduct(ctrl.product);
}

ProductCtrl.prototype.getProduct = function(){
	var ctrl = this; 
	ctrl.productSrv.getProduct()
	.then(function(res){
		ctrl.products = res;
	});
}

ProductCtrl.prototype.updateProduct = function(product){
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
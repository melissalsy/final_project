app.controller('productCtrl', ProductCtrl);

function ProductCtrl($scope, productSrv, $state, Upload){
	var ctrl = this; 
	ctrl.$scope = $scope;
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.Upload = Upload;
	ctrl.getProduct();
	ctrl.products;
	$scope.$watch(function() {
		return productSrv.products;
	}, function(newVal, oldVal) {
		ctrl.products = newVal;
	});
}

ProductCtrl.prototype.upload = function(file){
	var ctrl = this;
	file.upload = ctrl.Upload.upload({
		url:'api/photo',
		data: {file:file}
	})
	.then(function(res){
		console.log(res.data[0].filename);
		ctrl.photo = 'http://localhost:8080/uploads/' + res.data[0].filename;
	}, function(err){
		console.log(err);
	}) 
}

ProductCtrl.prototype.addProduct = function (){
	var ctrl = this; 
	ctrl.product = {
		name: ctrl.name,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
		image:ctrl.photo,
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

ProductCtrl.prototype.deleteProduct = function(id){
	var ctrl = this; 
	ctrl.productSrv.removeProduct(id)
	.then(function(res){
		if (res.status ===200){
			ctrl.state.reload();
			ctrl.state.go('admin');
		}
	})
}

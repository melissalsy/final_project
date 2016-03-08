app.controller('productCtrl', ProductCtrl);

function ProductCtrl($state,productSrv) { 
	var ctrl = this; 
	ctrl.state = $state;
	ctrl.productSrv = productSrv;

}

ProductCtrl.prototype.addProduct = function(){
	var ctrl = this;
	var product = {
		name: ctrl.name,
		description: ctrl.description,
		price: ctrl.price,
		quantity: ctrl.quantity,
	};
}



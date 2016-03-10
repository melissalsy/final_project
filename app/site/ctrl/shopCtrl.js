app.controller('shopCtrl', ShopCtrl);

function ShopCtrl($state, productSrv, orderSrv) {
	var ctrl = this;
	ctrl.state = $state;
	ctrl.productSrv = productSrv;
	ctrl.orderSrv = orderSrv;
}

ShopCtrl.prototype.addToCart = function(product){
	var ctrl = this;
	ctrl.$state.go('cart', {productId:productId});

}
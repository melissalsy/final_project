app.controller('shopCtrl', ShopCtrl);

// function ShopCtrl($state, productSrv, orderSrv, api) {
// 	var ctrl = this;
// 	ctrl.state = $state;
// 	ctrl.productSrv = productSrv;
// 	ctrl.orderSrv = orderSrv;
// 	ctrl.api = api;
// 	ctrl.product;
// }

// ShopCtrl.prototype.addToCart = function(product){
// 	var ctrl = this;
// 	var cartProduct = {
// 		quantity: 1
// 	};

// 	ctrl.orderSrv.cart,push(cartProduct);
// 	console.log(ctrl.orderSrv.cart);
// }

function ShopCtrl($scope, $state, orderSrv, api) {
	var ctrl = this;
	ctrl.state = $state;
	ctrl.scope = $scope;
	ctrl.orderSrv = orderSrv;
	ctrl.api = api;

    $scope.product = {
        items: [{
            qty: 1,
            name: 'Portable Outlet',
            cost: 100.00}]
    };
}

// ShopCtrl.prototype.addOrder = function(){
// 	srv.orderSrv.orders.push()
// }
// ShopCtrl.prototype.addToCart = function(product){
//     var ctrl = this;
//     var cartProduct = {
//             name: product.name,
//             image:product.image,
//             price: product.price,
//             quantity: 1
//         };
        
//     ctrl.orderSrv.cart.push(cartProduct);
//     console.log(ctrl.orderSrv.cart);
// };

ShopCtrl.prototype.removeItem = function(index) {
        this.scope.product.items.splice(index, 1);
       	this.state.go('product');
    }

ShopCtrl.prototype.total = function() {
        var total = 0;
        angular.forEach(this.scope.product.items, function(item) {
            total += item.qty * item.cost;
        })

        return total;
    }

ShopCtrl.prototype.addToCart = function(){
    this.state.go('cart');
}

ShopCtrl.prototype.goToCart = function(){
  	this.state.go('cart');
}

ShopCtrl.prototype.checkout = function(){

}
// ShopCtrl.prototype.checkout = function(){
//    	var ctrl = this;
// 	// var obj = {
// 	// 	order: {
// 	// 		name: order.name,
// 	// 		image: order.qty.val(),
// 	// 		price: order.cost,
// 	// 	}
// 	// };
// 	for (ctrl.scope.product.items, function(item){
// 		orderQty = item.qty;
// 	})
// 	console.log(orderQty);
// }
// 	ctrl.orderSrv.orders.push(obj);
// 	console.log(ctrl.orderSrv.orders);
//    	this.state.go('checkout');
// }

ShopCtrl.prototype.reviewOrder = function(){
    var ctrl = this; 

    var customer = {
        firstName: ctrl.firstName,
        lastName: ctrl.lastName,
        email: ctrl.email,
        address1: ctrl.address1,
        apt: ctrl.apt,
        city: ctrl.city,
        province: ctrl.province,
        postal: ctrl.postal
    }

    console.log(customer);
    ctrl.orderSrv.newCustomer = customer;
    ctrl.$state.go('review');
}

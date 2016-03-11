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
	
	this.state = $state;
	this.scope = $scope;
	this.orderSrv = orderSrv;
	this.api = api;

    $scope.product = {
        items: [{
            qty: 1,
            name: 'Portable Outlet',
            cost: 100.00}]
    };
}
    //THIS CAN BE SUBMITORDER AND PUSH TO ADMIN ORDERS
    // $scope.addItem = function() {
    //     $scope.product.items.push({
    //         qty: 1,
    //         description: '',
    //         cost: 0
    //     });
    // }

// ShopCtrl.prototype.addOrder = function(){
// 	srv.orderSrv.orders.push()
// }

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
   	this.state.go('checkout');
}

OrderCtrl.prototype.reviewOrder = function(){
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

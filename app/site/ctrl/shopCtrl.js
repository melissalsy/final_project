app.controller('shopCtrl', ShopCtrl);

function ShopCtrl($scope, $state, orderSrv, api) {
	var ctrl = this;
	ctrl.state = $state;
	ctrl.scope = $scope;
	ctrl.orderSrv = orderSrv;
	ctrl.api = api;

    $scope.product = {
        items: [{
            qty: this.qty,
            name: 'Portable Outlet',
            cost: 100,
            total: 0}]
    };
}

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

ShopCtrl.prototype.checkout = function(){
	var order = this.scope.product;
	order.items[0].total = order.items[0].qty  * order.items[0].cost;
	this.orderSrv.addOrder(order);
	console.log(this.orderSrv.orders);
	this.state.go('checkout');
}

ShopCtrl.prototype.addToCart = function(){
    var ctrl = this;
    ctrl.orderSrv.addProducts(ctrl.product);
}

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

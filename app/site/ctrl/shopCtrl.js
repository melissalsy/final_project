app.controller('shopCtrl', ShopCtrl);

function ShopCtrl($state, orderSrv, api) {
	var ctrl = this; 
	ctrl.state = $state;
	ctrl.orderSrv = orderSrv;
	ctrl.api = api;
    ctrl.product = {
        name: 'Portable Outlet',
        qty: 1,
        cost: 100.00
    };
}

ShopCtrl.prototype.removeItem = function(index) {
    var ctrl = this; 
    ctrl.product.splice(index, 1);
   	ctrl.state.go('product');
}

ShopCtrl.prototype.total = function() {
    var ctrl = this; 
    var total = ctrl.product.qty * ctrl.product.cost
    return total;
}

ShopCtrl.prototype.addToCart = function(){
    var ctrl = this;
    ctrl.orderSrv.addOrder(ctrl.product);
}

// ShopCtrl.prototype.submitOrdder = function (){

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

ShopCtrl.prototype.submitOrder = function(){
    var ctrl = this;
    ctrl.order = {
       customer: ctrl.customer,
       cart: ctrl.cart,
       total: '',
       tax:'',
       final_total:'',
   };
    ctrl.orderSrv.addOrder(ctrl.order);
    ctrl.$state.go('shop.lastpage');
}

// function ShopCtrl($state, productSrv, orderSrv, api) {
//  var ctrl = this;
//  ctrl.state = $state;
//  ctrl.productSrv = productSrv;
//  ctrl.orderSrv = orderSrv;
//  ctrl.api = api;
//  ctrl.product;
// }

// ShopCtrl.prototype.addToCart = function(product){
//  var ctrl = this;
//  var cartProduct = {
//      quantity: 1
//  };

//  ctrl.orderSrv.cart,push(cartProduct);
//  console.log(ctrl.orderSrv.cart);
// }

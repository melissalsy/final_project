app.controller('shopCtrl', ShopCtrl);

function ShopCtrl($state, $scope, orderSrv, api) {
    var ctrl = this; 
    ctrl.state = $state;
    ctrl.scope = $scope;
    ctrl.orderSrv = orderSrv;
    ctrl.api = api;
    ctrl.orders;

    ctrl.product = {
        name: 'MYSA',
        description:'A hassle-free  power adaptor that gives your working space the ultimate freedom',
        qty: 1,
        cost: 100.00
    };
    ctrl.cart = [];
    ctrl.customerInfo = {};

    $scope.$watch(function(){
        return ctrl.orderSrv.cart;
    }, function (newValue, oldValue) {
        ctrl.cart = newValue;
    });
    
    $scope.$watch(function(){
        return orderSrv.newCustomer;
    }, function (newValue, oldValue) {
        ctrl.customerInfo= newValue;
    });

    jQuery('.collapse').collapse();

    if(ctrl.products.length > 0 ){
        ctrl.is_products = true;
    }
    
}

//Cart functions//
ShopCtrl.prototype.eachTotal = function(){
    var ctrl = this; 
    ctrl.totalCart = ctrl;product.qty * ctrl.product.cost
}

ShopCtrl.prototype.removeItem = function(index) {
    var ctrl = this; 
    ctrl.cart.splice(index, 1);
    ctrl.state.go('product');
}

ShopCtrl.prototype.addToCart = function(){
    var ctrl = this;
    var product = {
        name:ctrl.product.name,
        description:ctrl.product.description,
        qty: ctrl.product.qty,
        cost: ctrl.product.cost
    }
    ctrl.cart.splice(0,1,product);
    console.log(ctrl.cart);
    ctrl.state.go('checkout');
}

//Order Submission Functions//
ShopCtrl.prototype.reviewOrder = function(){
    var ctrl = this; 
    ctrl.customer = {
        firstName: ctrl.firstName,
        lastName: ctrl.lastName,
        email: ctrl.email,
        address: ctrl.address,
        apt: ctrl.apt,
        city: ctrl.city,
        province: ctrl.province,
        postal: ctrl.postal
    }
    ctrl.orderSrv.addCustomer(ctrl.customer);
    ctrl.state.go('review');
}

ShopCtrl.prototype.submitOrder = function(){
    var ctrl = this;
    for (var i = 0; i < ctrl.cart.length; i++) {
        delete ctrl.cart[i].$$hashKey;
    }
    console.log(ctrl.cart);
    ctrl.order = {
        order_status: true,
        customer_Info: ctrl.customerInfo,
        cart: ctrl.cart,
        // total: ctrl.cart.total,
        tax:'',
        final_total:'',
   };
   console.log(ctrl.order);
    ctrl.orderSrv.addOrder(ctrl.order);
    //ctrl.$state.go('final');
}
var app = angular.module('webApp', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('landing');

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'site/partials/landing.html',
			controller: 'shopCtrl as ctrl'
		})
		.state ('login', {
		    url:'/login',
		    templateUrl: 'site/partials/login.html', 
		    controller:'authCtrl as ctrl'
		})
		 .state ('admin', {
	      url:'/admin',
	      templateUrl: 'site/partials/admin.html',
	      controller: 'adminCtrl as ctrl'
    	})
		.state ('inventory', {
			url:'/inventory',
			templateUrl:'site/partials/inventory.html',
			controller:'productCtrl as ctrl'
		})
		.state('orders',{
			url:'/orders/:orderId',
			templateUrl: 'site/partials/orderDetails.html', 
			controller:'adminCtrl as ctrl'
		})
    	.state('product', {
			url: "/product",
			templateUrl: 'site/partials/product.html',
			controller: 'shopCtrl as ctrl'
		})
   		.state('about', {
			url: "/about",
			templateUrl: 'site/partials/about.html' ,
			//controller: ,
		})
   		.state('cart', {
			url: "/cart",
			templateUrl: 'site/partials/cart.html',
			controller: 'shopCtrl as ctrl'
		})
		.state('checkout', {
			url: "/checkout",
			templateUrl: 'site/partials/checkout.html',
			controller: 'shopCtrl as ctrl'
		})
		.state('review', {
			url: "/review",
			templateUrl: 'site/partials/review.html',
			controller: 'shopCtrl as ctrl'
		})
		.state('final', {
			url: "/thankyou",
			templateUrl: 'site/partials/final.html'
		})
		// .state('landing.something' {
		// 	url: '/something',
		// 	templateUrl: 'site/partials/something.html'
		// })
		
		// to get to the view SOMETHING
		// the URL must be /landing/something
		// from your template ui-sref="landing.something"
		// from your controller ctrl.state.go('landing.something')

		

		// .state('contact', {
		// 	url: "/contact",
		// 	templateUrl: ,
		// 	controller: ,
		// })

		

	 //    .state ('admin', {
	 //      url:'/admin',
	 //      templateUrl: ,
	 //      controller: ,
	 //      resolve:{
	        
	 //      }
	 //    })

//how to set multiple ui-views

	// views:{
	// 			nav:{
	// 				templateUrl: 'site/partials/landing.html',
	// 				controller: 'shopCtrl as ctrl'

	// 			},
	// 			content:{
	// 				templateUrl: 'site/partials/landing.html',
	// 				controller: 'shopCtrl as ctrl'

	// 			}
	// 		}
			
	// 	})

	$httpProvider.interceptors.push(function(){
	return {
	    request: function(config) {
	        return config;
	    },
	    response: function(response) {
	    	// console.log('AUTH TOKEN: '+ response.headers('authentication'));
	    	var auth_token = response.headers('authentication');
	           if(localStorage.authToken == undefined && auth_token != null){
	           	localStorage.authToken = auth_token;
	           }
	           return response;
	       }
	   }
	});
});
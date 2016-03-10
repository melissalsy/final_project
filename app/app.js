var app = angular.module('webApp', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('landing');

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'site/partials/landing.html',
			controller: 'shopCtrl as ctrl',
		})
		.state ('login', {
		    url:'/login',
		    templateUrl: 'site/partials/login.html', 
		    controller:'authCtrl as ctrl',
		})
		 .state ('inventory', {
	      url:'/inventory',
	      templateUrl: 'site/partials/inventory.html',
	      controller: 'productCtrl as ctrl',
    	})
		.state ('orders', {
	      url:'/orders',
	      templateUrl: 'site/partials/orders.html',
	      controller: 'orderCtrl as ctrl'
    	})

    	.state('product', {
			url: "/product",
			templateUrl: 'site/partials/product.html'
			//controller: ,
		});

		// .state('landing.something' {
		// 	url: '/something',
		// 	templateUrl: 'site/partials/something.html'
		// })
		
		// to get to the view SOMETHING
		// the URL must be /landing/something
		// from your template ui-sref="landing.something"
		// from your controller ctrl.state.go('landing.something')

		// .state('about', {
		// 	url: "/about",
		// 	templateUrl: ,
		// 	controller: ,
		// })

		// .state('contact', {
		// 	url: "/contact",
		// 	templateUrl: ,
		// 	controller: ,
		// })

		// .state('cart', {
		// 	url: "/cart",
		// 	templateUrl: ,
		// 	controller: ,
		// })

		// .state('checkout', {
		// 	url: "/checkout",
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

	// $httpProvider.interceptors.push(function() {
 //    	return {
 //      		'request': function(config) {
 //        	config.headers = config.headers || {};
 //        		if (localStorage.authToken) {
 //          		config.headers.Authorization = localStorage.authToken;
 //        		}
 //        	return config;
 //      		}
 //    	};
 //  	});

});
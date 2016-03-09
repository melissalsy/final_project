var app = angular.module('webApp', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('landing');

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'site/partials/landing.html'
			//controller: ,
		})
		
		// .state('product', {
		// 	url: "/product",
		// 	templateUrl: ,
		// 	controller: ,
		// })

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

		.state ('login', {
		    url:'/login',
		    templateUrl: 'site/partials/login.html'
		    // resolve:{
		      
		    // }
		})

	 //    .state ('admin', {
	 //      url:'/admin',
	 //      templateUrl: ,
	 //      controller: ,
	 //      resolve:{
	        
	 //      }
	 //    })

	    .state ('inventory', {
	      url:'/inventory',
	      templateUrl: 'site/partials/inventory.html',
	      controller: 'productCtrl as ctrl'
	      // resolve:{
	
	      // }
    	})

    	 .state ('orders', {
	      url:'/orders',
	      templateUrl: 'site/partials/orders.html',
	      controller: 'orderCtrl as ctrl'
	 //      resolve:{}
    	})

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
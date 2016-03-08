var app = angular.module('webApp', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('landing', {
			url: '/test',
			templateUrl: 'site/partials/landing.html'
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
		    // controller: ,
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

	 //    .state ('admin.inventory', {
	 //      url:'/inventory',
	 //      templateUrl:,
	 //      controller: ,
	 //      resolve:{
	
	 //      }
  //   	})

  //   	 .state ('admin.orders', {
	 //      url:'/orders',
	 //      templateUrl:,
	 //      controller: ,
	 //      resolve:{
	
	 //      }
  //   	})

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
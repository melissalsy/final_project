var app = angular.module('webApp', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
<<<<<<< HEAD
	$urlRouterProvider.otherwise('landing');

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'site/partials/landing.html'
			//controller: ,
=======
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('landing', {
			url: '/test',
			templateUrl: 'site/partials/landing.html'
>>>>>>> 2771b1d9ebac02b79e2bf47a8f76eebe1e948c11
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
	      templateUrl: 'site/partials/inventory.html'
	      controller: productCtrl
	      // resolve:{
	
	      // }
    	})

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
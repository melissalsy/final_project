var app = angular.module('webApp', ['ui.router']);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('landing');

	$stateProvider
		.state('landing', {
			url: '/landing',
			templateUrl: 'site/partials/landing.html',
			controller: 'adminCtrl as ctrl',
		})

		.state ('login', {
		    url:'/login',
		    templateUrl: 'site/partials/login.html', 
		    controller:'adminCtrl as ctrl',
		})
		 .state ('inventory', {
	      url:'/inventory',
	      templateUrl: 'site/partials/inventory.html',
	      controller: 'productCtrl as ctrl',
    	})
		// .state('landing.something' {
		// 	url: '/something',
		// 	templateUrl: 'site/partials/something.html'
		// })
		
		// to get to the view SOMETHING
		// the URL must be /landing/something
		// from your template ui-sref="landing.something"
		// from your controller ctrl.state.go('landing.something')


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

	 //    .state ('admin', {
	 //      url:'/admin',
	 //      templateUrl: ,
	 //      controller: ,
	 //      resolve:{
	        
	 //      }
	 //    })
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
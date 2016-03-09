app.service('productSrv', ProductService);

function ProductService($state, api){
	var srv = this;
	srv.api = api;
	srv.state = $state;
	srv.products = [];
}

ProductService.prototype.addProduct = function (product){
	var srv = this;
	console.log(product);
	return srv.api.request('/inventory',product,'POST')
		.then(function(res){
		console.log(res.data);
	});
}

ProductService.prototype.getProduct = function (){
	var srv = this; 
	return srv.api.request('/inventory',{}, 'GET')
		.then(function(res){
			console.log(res);
			srv.products = res.data;
			return res.data
		}, function(res){
			//error promise
			console.log(res);
			return;
		})
}


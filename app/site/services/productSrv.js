app.service('productSrv', productService);

function ProductService($state, api){
	var srv = this;
	srv.api = api;
	srv.state = $state;
}

productService.prototype.addProduct = function (){
srv.api.request('/',shop,'POST').then(function(res){
		console.log(res.data);
	});
}
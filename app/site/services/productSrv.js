app.service('productSrv', productService);

function ProductService($state, api){
	this.api = api;
	this.state = $state;
}
app.service('productSrv', ProductService);

function ProductService($state, api){
	var srv = this;
	srv.api = api;
	srv.state = $state;
	srv.products = [];
	srv.getProduct();
}

ProductService.prototype.addProduct = function (product){
	var srv = this;
	console.log(product);
	return srv.api.request('/admin',product,'POST')
		.then(function(res){
			srv.products.push(res.data);
		console.log(res.data);
	});
}

ProductService.prototype.getProduct = function (){
	var srv = this; 
	return srv.api.request('/admin',{}, 'GET')
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

ProductService.prototype.removeProduct = function (id){
	var srv = this; 
	return srv.api.request('/product/'+id, {}, 'DEL');
}
ProductService.prototype.updateProduct = function (product, productId){
	var srv = this;
	return srv.api.request('/product/',product, 'PUT')
		.then(function(res){
			console.log(res);
			if(res.status === 200){
			//product was updated successfully
			console.log(res);
			srv.updateProductList(product, productId);
			}
		})
}
ProductService.prototype.updateProductList = function(product,productId){
	var srv = this;
	for(index in srv.products){
		if(srv.products[index]._id == productId){
			srv.products[index].quantity = product.quantity;
		}
	}
}
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Product = require('./models/product.js');
var Orders = require('./models/orders.js')

app.use(bodyParser.json());
app.use(express.static(__dirname + './../app/'));

// Create instance of Mongoose and connect to our local
// MongoDB database at the directory specified earlier.
mongoose.connect('mongodb://localhost/db');

// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


app.post('/inventory', function(req, res){
	console.log(req.body);
    var newProduct = Product(req.body);
    console.log(newProduct);
    newProduct.save(function(err) {
        if(err){
            res.json(err);
        }
        else{
            res.json(newProduct);
        }
    })

})

app.get('/inventory', function(req, res){
	Product.find({}, function(err, Product){
		if (err){
			console.log(err)
		}else{
			res.json(Product);
		}
	})
})

app.get('/orders', function(req, res){
	Orders.getOrders(function(err, orders){
		if (err){
			throw err;
		}
		res.json(orders);
	});
});

// app.get('/', function(req, res){
// 	res.send('Hello, World!');
// });

// var productRoutes = require('./routes/productRoutes');
// var orderRoutes = require('./routes/orderRoutes');

// app.use('/api/products',productRoutes);
// app.use('/api/orders',orderRoutes);






// start Express on port 8080 (leaves at the end of code)
app.listen(8080,function(){
	console.log('Listening on http://localhost:8080');
	console.log('Stop Server With CTRL + C');
});


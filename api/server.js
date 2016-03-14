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

//configure routes
var init = require('./routes/init');
var userRoutes = require('./routes/userRoutes');
var productRoutes = require('./routes/productRoutes');
var orderRoutes = require('./routes/orderRoutes');

//set routes
app.use('/init', init);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/orders', orderRoutes);

//ADMIN INVENTORY
app.post('/admin', function(req, res){
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

app.get('/admin', function(req, res){
	Product.find({}, function(err, Product){
		if (err){
			console.log(err)
		}else{
			res.json(Product);
		}
	})
})


app.put('/admin/:_id', function(req, res){
	console.log(req.body);
    var update = req.body;
    var query = {"_id":req.body._id}
	Product.update(query, update,{}, function (err,product){
            if (err){
                console.log(err);
            }else{
               res.send(product);
            }
    })
})

// start Express on port 8080 (leaves at the end of code)
app.listen(8080,function(){
	console.log('Listening on http://localhost:8080');
	console.log('Stop Server With CTRL + C');
});


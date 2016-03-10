var Users = require('../models/users');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){

	//remove all
	// Users.remove({}, function(err, res) {
	// 	if (!err) console.log('removing all users');
	// })

	// creating dummy
	// Users.create({email:'admin@shop.com', password: '1234'})
	
	//check if admin user exists
	Users.find({email:'admin@shop.com'}, function(err, user){
		if (err){
			console.log(err);
		}else {
			console.log(user);
			if (user[0]) {
				res.send('Admin account already exists')
			} else {
				var User = new Users({email:'admin@shop.com', password: '1234'});
				User.save(function(err, user) {
					if (err)  {
						console.log(err);
					} else {
						console.log('user has been created: ' + user);
					}
				});
			}
		} 
	})
});

module.exports = router;
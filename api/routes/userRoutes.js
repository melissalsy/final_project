var express 	 = require('express');
var jwt 		 = require('jsonwebtoken');
var router 		 = express.Router();
var Users		 = require('../models/users');

router.post('/login',function(req,res){
	Users.findOne({email:req.body.email, password:req.body.password}, function(err, user){
		if(err){
			console.log(err);
		}else{
			console.log('Loggin User In');
			console.log(user);
			if(user != null){
				var user_obj = {email:user.email, id:user.id};
				var token = jwt.sign(user_obj,'kjdhfjahdfASDKFJHAFSDKasdf');
				res.set('authentication',token);
				res.json({user:user});
			}
			else{
				res.json({user:null});
			}
		}
	});

});

module.exports = router;
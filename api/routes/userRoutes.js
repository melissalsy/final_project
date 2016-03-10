var express 	 = require('express');
var jwt 		 = require('jsonwebtoken');
var router 		 = express.Router();
var Users		 = require('../models/users');

router.post('/login',function(req,res){
	console.log('Loggin User In');
	Users.find({email:req.body.email, password:req.body.password}, function(err, user){
		if(err){
			console.log(err);
		}else{
			var user_obj = {email:user.email, id:user.id};
			var token = jwt.sign(user_obj,'kjdhfjahdfASDKFJHAFSDKasdf');
			res.set('authentication',token);
			res.json({user:user});
		}
	})
});
// 	var where = {where:{email:req.body.email,password:req.body.password}};
// 	models.Users.find(where).then(function(user){
// 		var user_obj = {email:user.email,id:user.id};
// 		var token = jwt.sign(user_obj,'Fv1f3Y37S3RorBbT4PumpWVHejaEYnGs');
// 			res.set('authentication',token);
// 	        res.json({
// 	        	user:user
// 	        });
// 	});
// });

module.exports = router;
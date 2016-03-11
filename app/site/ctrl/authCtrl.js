// login function
app.controller('authCtrl', AuthCtrl);

function AuthCtrl($state, api) {
	var ctrl = this;
	ctrl.state = $state;
	ctrl.api = api;
	ctrl.password;
  ctrl.email;
  ctrl.auth_button = 'Continue'
    if(localStorage.authToken){
      ctrl.state.go('inventory');
    } 
	// ctrl.isHeGoodLooking = false;
}

AuthCtrl.prototype.login = function(){
    var ctrl = this;

    var payload = {
        email:ctrl.email,
        password:ctrl.password
    }
    ctrl.auth_btn = "Authorizing";
    //make api call
    ctrl.api.request('/user/login',payload,'POST')
    .then(function(response){
        console.log(response);

        //successfull response
        if(response.status == 200){
          if (response.data.user != null){
            ctrl.state.go('inventory');
            ctrl.auth_btn = "Success";
           }
           else{
            ctrl.auth_btn = 'Invalid Email/Password';
           }
       }
    })
    .catch(function(err) {
        console.log(err);
    })
}
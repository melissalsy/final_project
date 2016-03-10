angular.module('webApp').service('api', ApiService);

function ApiService($http){ 
	this.http = $http
	this.BASE_URL = 'http://localhost:8080';
//for Login//
  var LOGIN_URL = this.BASE_URL + 'login';
  var LOGOUT_URL = this.BASE_URL + 'logout';
  var PROFILE_URL = this.BASE_URL + 'user';
  // var CREATE_ACCOUNT_URL = this.BASE_URL + 'createAccount';
}

ApiService.prototype.request = function(endpoint, data, method){
	//build request
	if(method == 'POST'){
		data = JSON.stringify(data);
		return this.http.post(this.BASE_URL + endpoint, data)
	}
	else if(method == 'GET'){
    	data = this.formatGetData(data);
    	return this.http.get(this.BASE_URL + endpoint+data);
 	}
 	else if(method == 'PUT'){
    	data = JSON.stringify(data);
    	return this.http.put(this.BASE_URL + endpoint,data);
  }
  else if(method == 'DEL'){
      return this.http.delete(this.BASE_URL + endpoint);
  }
};


ApiService.prototype.formatGetData =function(data){
  var data_string = '?';
  for(item in data){
    if(data_string == '?'){
      data_string += item+'='+encodeURIComponent(data[item]);
    }
    else{
      data_string +='&'+item+'='+encodeURIComponent(data[item]);
    }
  }
  if(data_string == '?'){return '';}
  return data_string;
}

  
// ApiService.prototype.createAccount = function(username, password) {
//     var data = {"username": username,"password": password};
//     $http.post(CREATE_ACCOUNT_URL, data).then(function(data) {
//       console.log(data);
//     });
//   }
  
 ApiService.prototype.login = function(username, password) {
    return this.http.post(LOGIN_URL, {username: username, password: password})
    .then(function(response) {
      localStorage.authToken = response.data.authToken;
    });
  };
app.service('api', ApiService);

function ApiService($http){ 
	this.http = $http
	this.BASE_URL = 'http://localhost:8080';
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
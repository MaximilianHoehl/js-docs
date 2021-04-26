function EasyHTTP(){
    this.http = new XMLHttpRequest();
}

//Make a HTTP GET Request
EasyHTTP.prototype.get = function(url, cb){
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            cb(null, self.http.responseText);
        }else{
            cb('Error' + self.http.status);
        }
    }
    this.http.send();
}
//Make a HTTP POST Request
EasyHTTP.prototype.post = function(url, data){
    return new Promise((res, rej) => {
        this.http.open('POST', url, true);
        this.http.setRequestHeader('Content-type', 'application/json');

        let self = this;
        this.http.onload = function(){
            res(self.http.responseText);
            // if(self.status === 201){
            //     res(self.http.responseText);
            // }else{
            //     rej(self.http.status);
            // }
        }

        this.http.send(JSON.stringify(data));
    });
    
}
//Make a HTTP PUT Request
EasyHTTP.prototype.put = function(url, data, cb){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function(){
        cb(null, self.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}
//Make a HTTP DELETE Request
EasyHTTP.prototype.delete = function(url, cb){
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
            cb(null, 'Post deleted');
        }else{
            cb('Error' + self.http.status);
        }
    }
    this.http.send();
}

/**
 * EasyHTTP Lib
 * 
 * @version 2.0.0
 * @author Maximillion
 *@license MIT
 */


 class EasyHTTP {
    //GET
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }
    //POST
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PSOT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err)); 
        });
    }
    //PUT
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err)); 
        });
    }
    
    //Delete
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted..'))
            .catch(err => reject(err)); 
        });
    }
 }



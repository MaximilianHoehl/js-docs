/**
 * EasyHTTP Lib
 * 
 * @version 3.0.0
 * @author Maximillion
 *@license MIT
 */


 class EasyHTTP {
    //GET
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }
    //POST
    // async post(url, data){
    //     const fetchData = await fetch(url, {
    //         method: 'PSOT',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     }); 
    //     const resdata = await fetchData.json();
    //     return resdata;
    // }
    //PUT
    async put(url, data){
            const fetchData = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const resData = await fetchData.json();
            return resData;
    }
    
    //Delete
    async delete(url){
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            const finalsResponse = await response.json();
            return 'Deleted..';
    }
 }



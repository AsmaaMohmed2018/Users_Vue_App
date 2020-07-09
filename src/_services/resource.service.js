import { authHeader } from '../_helpers';
import { bus } from '../index';
export const resourceService = {
    getAll,
    getById,
    
  
};

let x;
function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch('https://reqres.in/api/unknown/?page=1', requestOptions).then(handleResponse);
}



function getById() {
    var resourceId = null;
   
    // var resourceId = bus.$watch.$on('myEvent',(id)=>{
    //     return id
    // })
   
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    bus.$on('myEvent',(id)=>{
        x = id;
        console.log(x);
        //this.resourceId = id;
       
    })
    console.log(x);
    return fetch(`https://reqres.in/api/unknown/${x}`, requestOptions).then(handleResponse);
}


// prefixed function name with underscore because delete is a reserved word in javascript


function handleResponse(response) {
     console.log(response)
     return response
    .text().then(text => {
        console.log('ok');
        const data = text && JSON.parse(text);
        console.log(data.data);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        console.log('ookttttt');
        return data.data;
        

    });
}
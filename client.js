class Client{
 getData(endpoint){
     return fetch(`https://my-json-server.typicode.com/SoVa-web/LabWeb4_Pizzeria/${endpoint}`, 
     {
        mode: 'cors'
     })
     .then(response => response.json())
 }   

 setData(endpoint, info){
      fetch(`https://my-json-server.typicode.com/SoVa-web/LabWeb4_Pizzeria/${endpoint}`,{
         method: 'POST',
         body:JSON.stringify(info),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }, 
     } )
     .then((response) => response.json())
     .then((json) => console.log(json));
 }
}

export default Client;
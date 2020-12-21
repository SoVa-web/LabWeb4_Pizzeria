class Client{
 getData(endpoint){
     return fetch(`https://my-json-server.typicode.com/SoVa-web/LabWeb4_Pizzeria/${endpoint}`)
     .then(response => response.json())
 }   

 setData(endpoint, info){
     fetch(`https://my-json-server.typicode.com/SoVa-web/LabWeb4_Pizzeria/${endpoint}`,{
         method: 'POST',
         body:JSON.stringify(info) 
     } )
 }
}

export default Client;
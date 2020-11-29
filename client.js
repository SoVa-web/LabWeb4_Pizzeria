class Client{
 getData(endpoint){
     return fetch(`http://my-json-server.typicode.com/SoVa-web/LabWeb4_Pizzeria/${endpoint}`)
     .then(response => response.json())
 }   
}

export default Client;
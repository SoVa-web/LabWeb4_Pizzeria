import TemplateProcessor from './templateProcessor.js'
import Client from './client.js'
import Router from './router.js'
const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();

let setInCart = []
let sum = 0
let order = {}
let orderId = 1
let  view;

loadPage()
function loadPage(){
  document.querySelector("#c").classList.toggle("anim");
  document.querySelector("#d").classList.toggle("anim");
  document.querySelector("#h").classList.toggle("anim");
  document.querySelector("#slogan").classList.toggle("rotato1");
    const {viewName, endpointName} = router.getCurrentState(); 
    import(`./views/${viewName}.js`)

  .then(
      (viewModule) =>
       {
          view = viewModule.default;
          return client.getData(endpointName);
       }
      )

  .then(
    (data) =>
        {
          templateProcessor.render(view(data, setInCart, sum))
        }
      )
}


window.onhashchange = ()=>{
  loadPage()
}



document.addEventListener('click',  function(e) {
  let temp = e.target.id
  document.querySelector("#slogan").classList.toggle("rotato2");
  document.querySelector("#slogan").classList.toggle("rotato1");
  if(1*temp > 0 && 1*temp < 100 && temp != "done-btn"){
    setInCart.push(1*temp)
    const endpointName = `catalogue` 
     fetch(`https://my-json-server.typicode.com/SoVa-web/LabWeb4_Pizzeria/${endpointName}`)
    .then((data) => data.json())
    .then((json)=>json[1*temp-1])
    .then((info)=>info.price)
    .then((price)=>addPrice(price))

    document.getElementById('infoBacket').innerHTML = setInCart.length
  }
});

function  addPrice(def) {
   sum=sum+def*1
}

document.addEventListener('click', function create(e) {
  let temp =  e.target.id
  switch(temp){
    case('d') :{
      document.querySelector("#d").classList.toggle("animkey");
      document.querySelector("#d").classList.toggle("anim");
      break
    }
    case('h') :{
      document.querySelector("#h").classList.toggle("animkey");
      document.querySelector("#h").classList.toggle("anim");
      break
    }
    case('c') :{
      document.querySelector("#c").classList.toggle("anim");
      document.querySelector("#c").classList.toggle("animkey");
      break
    }
    default:{break}
  }
    
  
  if(temp === "done-btn"){
    order = {
      id:orderId,
      name:document.getElementById('name').value, 
      surname:document.getElementById('surname').value,
      email:document.getElementById('email').value,
      phone:document.getElementById('phone').value,
      city:document.getElementById('city').value,
      street:document.getElementById('street').value,
      numberHouse:document.getElementById('numberHouse').value,
      dateDelivery:document.getElementById('date').value,
      timeDelivery:document.getElementById('time').value,
      total:sum,
      productId:setInCart }
    sum=0
    setInCart = []
    orderId++
    document.getElementById('infoBacket').innerHTML = setInCart.length
    document.querySelector("#slogan").classList.toggle("rotato2");
  }
  
});


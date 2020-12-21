import TemplateProcessor from './templateProcessor.js'
import Client from './client.js'
import Router from './router.js'
//import setGoodsInCart from './views/cartPage.js'
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
          templateProcessor.render(view(data, setInCart))
        }
      )
}


window.onhashchange = ()=>{
  loadPage()
}



document.addEventListener('click', function(e) {
  let temp = e.target.id
  sum =0
  if(1*temp > 0 && 1*temp < 100 && temp != "done-btn"){
    setInCart.push(1*temp)
    const endpointName = `catalogue` 
    import(`./views/cataloguePage.js`)

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
          for(let j =0; j < setInCart.length; j++){ 
             for(let i = 0; i < data.length; i++){
                 if(data[i].id === setInCart[j]){
                   addPrice(data[i].price)
                   console.log(sum)
                  }
             }
          }
          return sum
        }
        
      ) 
      console.log(sum)
  }
});

function  addPrice(def) {
   sum=sum+def*1
}

document.addEventListener('click', function create(e) {
  let temp =  e.target.id
  if(temp === "done-btn"){
    order = {
      id:orderId,
      name:"Vasya", 
      surname:"",
      total:sum,
      productId:setInCart }
    let responseAboutSend = client.setData(`orders`, order)
    
    orderId++
  }
  
});
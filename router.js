class Router{
 getCurrentState(){
     let viewName = ``;
     let endpointName = ``;
     switch (window.location.hash.split('#')[1]){
         case ``:
             viewName = `mainPage`
             endpointName = `catalogue`
             break;
         case `product`:
             viewName = `productsPage`
             endpointName = `catalogue`
             break;
         case `catalog/pizza`:
             viewName = `pizzaPage`;
             endpointName = `posts`
             break;
        default:
            break;
     }
     return {
       viewName,
       endpointName
     }
 }    
}

export default Router;
class Router{
 getCurrentState(){
     let viewName = ``;
     let endpointName = ``;
     let temp = ``
     temp = window.location.hash.split('#')[1]
     switch (temp){
         case `catalogue`:
             viewName = `cataloguePage`
             endpointName = `catalogue`
             break;
         case `home`:
             viewName = `mainPage`;
             endpointName = `catalogue`
             break;
        case `order`:
            viewName = `orderFormPage`
            endpointName = `orders`
            break;
        case `cart`:
            viewName = `cartPage`
            endpointName = `catalogue`
            break;
        case `product`:
            viewName = `cartPage`
            endpointName = `catalogue`
            break;
        default:
            viewName = `mainPage`;
            endpointName = `catalogue`
            break;
     }
     return {
       viewName,
       endpointName
     }
 }    
}

export default Router;
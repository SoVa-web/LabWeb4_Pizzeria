class Router{
 getCurrentState(){
     let viewName = ``;
     let endpointName = ``;
     switch (window.location.hash.split('#')[1]){
         case `catalogue`:
             viewName = `cataloguePage`
             endpointName = `catalogue`
             break;
         case `catalog/pizza`:
             viewName = `pizzaPage`;
             endpointName = `posts`
             break;
        case ` `:
            viewName = `mainPage`
            endpointName = `main`
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
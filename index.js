import TemplateProcessor from './templateProcessor.js'
import Client from './client.js'
import Router from './router.js'
import setGoodsInCart from './views/cartPage.js'
const router = new Router();
const templateProcessor = new TemplateProcessor();
const client = new Client();

let setInCart = [1]
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
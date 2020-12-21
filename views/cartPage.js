const view = (catalogues, setGoodsInCart) =>
`<form action="#order" target="_self" ><button class="order" class="btn-menu">Order</button></form>
<div id="cart">
<h2 class="name-category">Your goods</h2>
<div id="setGoods">`+setGoods(catalogues, setGoodsInCart)+`
</div>

</div>
`
function setGoods(catalogues, setGoodsInCart){
  let info=``
  for(let j =0; j < setGoodsInCart.length; j++){
  for(let i = 0; i < catalogues.length; i++){
        if(catalogues[i].id === setGoodsInCart[j]){
          info=info+
          `
          <div class="product-item">
              <img  src="${catalogues[i].images}" style="width: 300px;"/>
              <p class="product-desc">${catalogues[i].productName}</p> 
          </div>
       `
        }
       }
  }
  return info
}
export default view;

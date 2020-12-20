const view = (catalogues, setGoodsInCart) =>
`
<div id="cart">
<h2 class="name-category">Your goods</h2>
<div id="setGoods">`+setGoods(catalogues, setGoodsInCart)+`
</div>
</div>
`
function setGoods(catalogues, setGoodsInCart){
  let info=``
  for(let j =0; j < setGoodsInCart.length; j++){console.log(setGoodsInCart.length)
  for(let i = 0; i < catalogues.length; i++){
        if(catalogues[i].id === setGoodsInCart[j]){
          info=info+
          `
          <div class="product-item">
              <img id="${catalogues[i].id}" src="${catalogues[i].images}" style="width: 300px;"/>
              <p class="product-desc">${catalogues[i].productName}</p> 
          </div>
       `
        }
       }
  }
  return info
}
export default view;

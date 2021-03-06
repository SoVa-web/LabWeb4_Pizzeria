const view = (catalogues, setGoodsInCart, totalPrice) =>
`
<div id="contenteMain">
<button id="leftBtn"><img src="./images/leftBtn.png" style="width:45px"></button>
<img src="./images/discountOnTuesday.jpg">
<button id="rightBtn"><img  src="./images/rightBtn.png" style="width:45px"></button>
</div>
<div class="divider"></div>
<div id="recommendBlock">
<h2 class="name-category">Popular pizzas</h2>
<div id="recommendation">`+setContent(catalogues)+`</div>
</div>
`

function setContent(catalogue){
 let info = ``
 for(let i=0; i<catalogue.length; i++){
    if(catalogue[i].recommended === true){
        info = info+
        `
        <div class="product-item">
            <img  src="${catalogue[i].images}" style="width: 300px; "/>
            <p class="product-desc">${catalogue[i].productName}</p> 
            <p class="info">Price (UAH)</p>
            <p class="info">${catalogue[i].price}</p>
            <button id="${catalogue[i].id}" class="order" >Add to cart</button>
        </div>
     `
    }
 }
 return info
}

export default view;
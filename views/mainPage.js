const view = (catalogues, setGoodsInCart) =>
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
<div class="divider"></div>
`

function setContent(catalogue){
 let info = ``
 for(let i=0; i<catalogue.length; i++){
    if(catalogue[i].recommended === true){
        info = info+
        `
        <div class="product-item">
            <img id="${catalogue[i].id}" src="${catalogue[i].images}" style="width: 300px; "/>
            <p class="product-desc">${catalogue[i].productName}</p> 
        </div>
     `
    }
 }
 return info
}

export default view;
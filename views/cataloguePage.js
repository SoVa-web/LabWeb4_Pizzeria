const view = (catalogues, setGoodsInCart) =>d(catalogues)


function d(c){
let info = ``, pizza=``, drink=``, side=``
for(let i =0; i < c.length; i++){
    if(c[i].categoryId === 1){
        pizza = pizza +
     `
        <div class="product-item">
            <img  src="${c[i].images}" style="width: 300px;"/>
            <p class="product-desc">${c[i].productName}</p>
            <button id="${c[i].id}" class="order" >Add to cart</button> 
        </div>
     `
    }
    if(c[i].categoryId === 2){
        drink = drink +
     `
        <div class="product-item">
            <img  src="${c[i].images}" style="width: 200px; "/>
            <p class="product-desc">${c[i].productName}</p> 
            <button id="${c[i].id}" class="order" >Add to cart</button>
        </div>
     `
    }
    if(c[i].categoryId === 3){
        side = side +
     `
        <div class="product-item">
            <img  src="${c[i].images}" style="width: 300px; "/>
            <p class="product-desc">${c[i].productName}</p> 
            <button id="${c[i].id}" class="order" >Add to cart</button>
        </div>
     `
    }
}
info = `<h2 class="name-category">Pizzas</h2><div id="pizza">`+
pizza+`</div><h2 class="name-category">Drinks</h2><div id="drink">`+
drink+`</div><h2 class="name-category">Sides</h2><div id="side">`+side+`</div>`
return info
}


export default view;
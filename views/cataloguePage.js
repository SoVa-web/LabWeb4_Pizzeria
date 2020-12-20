const view = (catalogues) =>
`<p>`+d(catalogues)+`<p>`


function d(c){
let data = ``
for(let i =0; i < c.length; i++){
    if(categoryId === 1){
        data = data +
     `
        <div class="product-item">
            <img id="${catalogue.id}" src="${catalogue.images}" style="width: 400px; hight: 450px"/>
            <p class="product-desc">${catalogue.productName}</p> 
        </div>
     `
    }
}
// g = g + c[1].productName
return data//g
}

/*`
    <div id="products">
        ${
            catalogues.map
            (
            (catalogue) => 
            `
                <div class="product-item">
                    <img id="${catalogue.id}" src="${catalogue.images}" style="width: 400px; hight: 450px"/>
                    <p class="product-desc">${catalogue.productName}</p> 
                </div>
            `
            ).join('')
        }
    </div>
`;*/

export default view;
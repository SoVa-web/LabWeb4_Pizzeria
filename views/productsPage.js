const view = (products) => `
<div id="products">
 ${products.map((product) => `
 <div class="product-item">
     <span class="product-name" >${catalogue.id}</span>
     <span class="product-desc">${catalogue.productName}</span>
 </div>
 `)}
 </div>`;

export default view;
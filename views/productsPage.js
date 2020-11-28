const view = (products) => 
<div id="product">
 ${products.map((product) => 
 <div class="product-item">
     
     <span class="product-name">${product.id}</span>
     <span class="product-desc">${product.title}</span>
 </div>
 )}
 </div>;

export default view;
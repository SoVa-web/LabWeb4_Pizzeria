const view = (orders, setGoodsInCart) =>
`
<div id="orderForm">
<div class="orderItem">
<label class="labelForm" id="name">Name : </label>
<input class="inputForm" placeholder="Olha"></input>
</div>

<div class="orderItem">
<label class="labelForm" id="surname">Surname : </label>
<input class="inputForm" placeholder="Suprun"></input>
</div>

<div class="orderItem">
<label class="labelForm" id="email">E-mail : </label>
<input class="inputForm" placeholder="oolga200000001@ukr.net"></input>
</div>

<div class="orderItem">
<label class="labelForm" id="phone">Phone : </label>
<input class="inputForm" placeholder="380967777777"></input>
</div>

<div class="orderItem">
<label  class="labelForm" id="total">Total price : </label>
<label class="labelForm">$</label>
</div>

<div class="orderItem">
<label class="labelForm" id="date">Date for deliver : </label>
<input class="inputForm" placeholder="12.12.2099"></input>
</div>

<div class="orderItem">
<label class="labelForm" id="time">Time for deliver : </label>
<input class="inputForm" placeholder="12:45"></input>
</div>
<form  action="#" target="_self" ><button class="done-btn" >Done</button></form>
</div>
`

function calculateTotalPrice(orders, setGoodsInCart){
  let endpoint="catalogue"
  
}

export default view;
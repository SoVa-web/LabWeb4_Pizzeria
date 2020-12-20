const view = (orders, setGoodsInCart) =>
`
<div id="orderForm">
<div class="orderItem">
<label class="labelForm" id="name">Name : </label>
<input class="inputForm" placeholder="Enter name..."></input>
</div>
<div class="orderItem">
<label class="labelForm" id="surname">Surname : </label>
<input class="inputForm" placeholder="Enter surname..."></input>
</div>
<div class="orderItem">
<label class="labelForm" id="email">E-mail : </label>
<input class="inputForm" placeholder="Enter e-mail..."></input>
</div>
<div class="orderItem">
<label class="labelForm" id="phone">Phone : </label>
<input class="inputForm" placeholder="Enter phone..."></input>
</div>
<div class="orderItem">
<label  class="labelForm" id="total">Total price : </label>
<label class="labelForm">$</label>
</div>
<div class="orderItem">
<label class="labelForm" id="date">Date for deliver : </label>
<input class="inputForm" placeholder="Choose date..."></input>
</div>
<form  action="#" target="_self" ><button id="done-btn" >Done</button></form>
</div>
`

export default view;
const view = (orders, setGoodsInCart) =>
`
<div id="orderForm">
<div class="orderItem">
<label class="labelForm" >Name : </label>
<input class="inputForm" id="name" placeholder="Olha"></input>
</div>

<div class="orderItem">
<label class="labelForm" >Surname : </label>
<input class="inputForm" id="surname" placeholder="Suprun"></input>
</div>

<div class="orderItem">
<label class="labelForm">E-mail : </label>
<input class="inputForm" id="email" placeholder="oolga200000001@ukr.net"></input>
</div>

<div class="orderItem">
<label class="labelForm">Phone : </label>
<input class="inputForm" id="phone" placeholder="380967777777"></input>
</div>

<div class="orderItem">
<label  class="labelForm" id="total">Total price : </label>
<label class="labelForm">$</label>
</div>

<div class="orderItem">
<label class="labelForm">City : </label>
<input class="inputForm" id="city" placeholder="Kuiv"></input>
</div>

<div class="orderItem">
<label class="labelForm">Street, avenue : </label>
<input class="inputForm" id="street" placeholder="Wolfstreet"></input>
</div>

<div class="orderItem">
<label class="labelForm">House number : </label>
<input class="inputForm" id="numberHouse" placeholder="12/06"></input>
</div>

<div class="orderItem">
<label class="labelForm">Date for deliver : </label>
<input class="inputForm" id="date" placeholder="12.12.2099"></input>
</div>

<div class="orderItem">
<label class="labelForm">Time for deliver : </label>
<input class="inputForm" id="time" placeholder="12:45"></input>
</div>
<form  action="#" target="_self" ><button id="done-btn" >Done</button></form>
</div>
`



export default view;
var tabShopping = document.getElementById('shopping');
var tabCheckout = document.getElementById('checkout');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var pricetag = document.getElementById('price');
var addcart1 = document.getElementById('guccibutton');
var addcart2 = document.getElementById('airmagbutton');
var addcart3 = document.getElementById('bredbutton');
var price =0;

tabCheckout.onclick = function(event) {
  event.currentTarget.classList.add('active');
  tabShopping.classList.remove('active');
  content2.classList.remove('hidden');
  content1.classList.add('hidden');

}

tabShopping.onclick = function(event) {
  event.currentTarget.classList.add('active');
  tabCheckout.classList.remove('active');
  content1.classList.remove('hidden');
  content2.classList.add('hidden');

}

addcart1.onclick = function(event){
  if(document.getElementById("gucci").value=="invalid"){
    alert("no");
    return;
  }

  price += parseFloat(document.getElementById("gucci").value) * parseFloat(event.currentTarget.dataset.price);
  pricetag.innerHTML = "Total price: $" + price;
  var para = document.createElement("P");                       
  var t = document.createTextNode(document.getElementById("gucci").value + " gucci sneakers added to cart");      
  para.appendChild(t);                                          
  document.getElementById("small").appendChild(para);
  var para2 = document.createElement("P");  
  var t2 = document.createTextNode(document.getElementById("gucci").value+ " Gucci White Snake Ace Sneakers  $"+event.currentTarget.dataset.price);
  para2.appendChild(t2);
  content2.appendChild(para2);
  
}
addcart2.onclick = function(event){
  if(document.getElementById("airmag").value=="invalid"){
    alert("no");
    return;
  }

  price += parseFloat(document.getElementById("airmag").value) * parseFloat(event.currentTarget.dataset.price);
  pricetag.innerHTML = "Total price:" + price;
  var para = document.createElement("P");                       
  var t = document.createTextNode(document.getElementById("airmag").value + " Nike MAG Back To the Future added to cart");      
  para.appendChild(t);                                          
  document.getElementById("medium").appendChild(para);
  var para2 = document.createElement("P");  
  var t2 = document.createTextNode(document.getElementById("airmag").value+ " Nike MAG Back To the Future $"+event.currentTarget.dataset.price);
  para2.appendChild(t2);
  content2.appendChild(para2);
  
}
addcart3.onclick = function(event){
  if(document.getElementById("bred").value=="invalid"){
    alert("no");
    return;
  }

  price += parseFloat(document.getElementById("bred").value) * parseFloat(event.currentTarget.dataset.price);
  pricetag.innerHTML = "Total price:" + price;
  var para = document.createElement("P");                       
  var t = document.createTextNode(document.getElementById("bred").value + " Adidas Yeezy Boost 350 V2 Black Red added to cart");      
  para.appendChild(t);                                          
  document.getElementById("large").appendChild(para);
  var para2 = document.createElement("P");  
  var t2 = document.createTextNode(document.getElementById("bred").value+ " Adidas Yeezy Boost 350 V2 Black Red at $"+event.currentTarget.dataset.price);
  para2.appendChild(t2);
  content2.appendChild(para2);
  
}

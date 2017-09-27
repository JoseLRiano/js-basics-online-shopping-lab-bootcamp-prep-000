var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = { [item]: Math.floor(Math.random(1,101)*100) };
 cart.push(newItem);
 console.log(`${item} has been added to your cart.`);
 return cart;
}

function viewCart() {
  // write your code here
  if(!cart.length){
    return console.log("Your shopping cart is empty.");
  }
  var arrNameAndPrice =[];//store the objects in cart to later print them
  for(let i =0; i <cart.length;i++){//divide the information
    var iName = objects.keys(cart[i]);
    var productName = iName[0];
    var iPrice = cart[i][iName];
    arrNameAndPrice.push(`${iName} at ${iPrice}`);
  }
  if(arrNameAndPrice.lenght === 1){
    return console.log(`In your cart, you have ${arrNameAndPrice.join()}.`);
  } else if (arrNameAndPrice.length === 2) {
    return console.log(`In your cart, you have ${arrNameAndPrice[0]} and ${arrNameAndPrice.slice(-1)}.`);
  } else {
    return console.log(`In your cart, you have ${arrNameAndPrice.slice(0,-1).join(', ')}, and ${arrNameAndPrice.slice(-1)}.`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

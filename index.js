var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var itemName = item;

  var itemPrice =  Math.floor((Math.random() * 100) + 1);

  var itemObject  = Object.assign({}, { [itemName]: itemPrice });

  cart.push(itemObject);

  console.log( itemName + " has been added to your cart.");

  return cart;
}

function viewCart() {

  if (cart.length == 0) {
    console.log("Your shopping cart is empty.")
  } else {

    for (var i = 0; i < cart.length; i++) {
      var cartItems = cart[i]; // variable to contain looped cart objects
      var cartKeys = Object.keys(cartItems)[i]; //returns an array
      var cartPrices = cartItems[cartKeys]; // value by accessing the key on the object

      if (cart.length == 1) {
        console.log(`In your cart, you have ${cartKeys} at ${cartPrices}.`);
      }

    }

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

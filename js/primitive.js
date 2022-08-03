// primitive type
let cart = 5;

function updateCart(cart) {
  cart++;
}

updateCart(cart);

console.log("Cart available: ", cart);

// Reference type

let cartObj = {
  value: 5,
};

function updateCart(cart) {
  cart.value++;
}

updateCart(cartObj);

console.log("Cart available2: ", cartObj);

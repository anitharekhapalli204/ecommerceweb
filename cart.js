// Manage cart items using localStorage
const cartButton = document.getElementById('cart-button');
const cartModal = document.getElementById('cart-modal');
const cartItemsList = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const proceedToBuy = document.getElementById('proceed-to-buy');
const closeCart = document.getElementById('close-cart');

// Load cart from localStorage
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount.textContent = cart.length;
  cartItemsList.innerHTML = '';
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeFromCart(index);
    listItem.appendChild(removeButton);
    cartItemsList.appendChild(listItem);
  });
}

// Add item to cart
function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Remove item from cart
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

// Show cart modal
cartButton.addEventListener('click', () => {
  cartModal.classList.remove('hidden');
  loadCart();
});

// Close cart modal
closeCart.addEventListener('click', () => {
  cartModal.classList.add('hidden');
});

// Proceed to buy
proceedToBuy.addEventListener('click', () => {
  window.location.href = 'checkout.html';
});

loadCart();

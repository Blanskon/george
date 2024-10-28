let cart = [];

function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    alert(`${productName} added to cart!`);
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartTotalSpan = document.getElementById("cartTotal");
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.productName} - $${item.price}</p>`;
        total += item.price;
    });

    cartTotalSpan.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    alert("Proceeding to checkout...");
    // Here you would integrate with a payment gateway
    cart = [];
    updateCart();
}

// Load cart items if on cart page
if (window.location.pathname.includes('cart.html')) {
    updateCart();
}

// Handle form submission (placeholder)
document.getElementById('checkoutForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Checkout form submitted!");
});

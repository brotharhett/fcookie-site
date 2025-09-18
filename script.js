// Track cart item count
let cartCount = 0;

// Function to add item to cart (placeholder)
function addToCart(item) {
    cartCount++;
    const badge = document.querySelector('.badge');
    if (badge) badge.textContent = cartCount;
    alert(`${item} added to cart!`); // Replace with real cart system later
}

// Function to view item details (placeholder)
function viewItem(item) {
    alert(`Viewing ${item} – Bid now!`); // Replace with marketplace detail page later
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

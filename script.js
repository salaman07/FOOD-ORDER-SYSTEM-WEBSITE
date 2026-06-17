// Food Menu Data
const menu = [
    { id: 1, name: "Burger", price: 20},
    { id: 2, name: "Pizza", price: 110 },
    { id: 3, name: "Pasta", price: 80 },
    { id: 4, name: "Sandwich", price: 40},
    { id: 5, name: "French Fries", price: 60 },
    { id:  6,  name: "Egg Roll",  Price: 80}
];

let cart = [];

// Show Sections
function showSection(sectionId) {
    document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");
}

// Load Menu
const menuList = document.getElementById("menuList");
menu.forEach(food => {
    const card = document.createElement("div");
    card.classList.add("food-card");
    card.innerHTML = `
        <h3>${food.name}</h3>
        <p>Price: ₹${food.price}</p>
        <button onclick="addToCart(${food.id})">Add to Cart</button>
    `;
    menuList.appendChild(card);
});

// Add to Cart
function addToCart(id) {
    const item = menu.find(f => f.id === id);
    cart.push(item);
    document.getElementById("cartCount").innerText = cart.length;
    alert(item.name + " added to cart!");
}

// Show Cart Items
function showCart() {
    const cartDiv = document.getElementById("cartItems");
    cartDiv.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartDiv.innerHTML += `<p>${item.name} - ₹${item.price}</p>`;
        total += item.price;
    });

    document.getElementById("totalAmount").innerText = "Total: ₹" + total;
}

document.querySelector("nav a:nth-child(3)").addEventListener("click", showCart);

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Order placed successfully!");
    cart = [];
    document.getElementById("cartCount").innerText = 0;
    showCart();
}
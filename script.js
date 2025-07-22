// Sample menu data
const menu = [
  {
    name: "Caffè Americano",
    image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg",
    price: 3.00,
    description: "Espresso shots topped with hot water."
  },
  {
    name: "Vanilla Latte",
    image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_VanillaLatte.jpg",
    price: 4.25,
    description: "Rich espresso with vanilla-flavored syrup and steamed milk."
  },
  {
    name: "Caramel Frappuccino",
    image: "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaramelFrappuccino.jpg",
    price: 4.95,
    description: "Blended coffee with caramel and topped with whipped cream."
  }
];

const cart = [];

function loadMenu() {
  const menuContainer = document.getElementById("menu-items");
  menu.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <p><strong>$${item.price.toFixed(2)}</strong></p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    menuContainer.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(menu[index]);
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your order!");
    cart.length = 0;
    updateCart();
  }
}

// Load menu on page load
window.onload = loadMenu;

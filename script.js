const menuItems = [
    { name: "Momo", price: 100 },
    { name: "Chow Mein", price: 150 },
    { name: "Chicken Tikka", price: 250 },
    { name: "Paneer Butter Masala", price: 200 },
    { name: "Vegetable Biryani", price: 180 },
    { name: "Grilled Fish", price: 300 },
    { name: "French Fries", price: 80 },
    { name: "Garlic Naan", price: 50 },
    { name: "Mixed Vegetable Salad", price: 70 },
    { name: "Gulab Jamun", price: 80 },
    { name: "Chocolate Cake", price: 120 },
    { name: "Ice Cream Sundae", price: 100 },
    { name: "Fresh Fruit Juice", price: 60 },
    { name: "Soft Drinks", price: 40 },
    { name: "Masala Chai", price: 30 }
];

const menuContainer = document.getElementById("menu");

function createMenuItem(name, price) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = `
        <h2>${name}</h2>
        <p>Price: Rs ${price} per plate</p>
    `;
    return menuItem;
}

menuItems.forEach(item => {
    const menuItem = createMenuItem(item.name, item.price);
    menuContainer.appendChild(menuItem);
});

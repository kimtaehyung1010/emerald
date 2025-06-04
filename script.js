const menuItems = [
  {
    name: "Margherita Pizza",
    price: "$12.99",
    image: "https://via.placeholder.com/200x150?text=Pizza"
  },
  {
    name: "Caesar Salad",
    price: "$8.99",
    image: "https://via.placeholder.com/200x150?text=Salad"
  },
  {
    name: "Grilled Salmon",
    price: "$15.99",
    image: "https://via.placeholder.com/200x150?text=Salmon"
  },
  {
    name: "Spaghetti Bolognese",
    price: "$11.99",
    image: "https://via.placeholder.com/200x150?text=Spaghetti"
  },
  {
    name: "Cheeseburger",
    price: "$9.99",
    image: "https://via.placeholder.com/200x150?text=Burger"
  },
  {
    name: "Tiramisu",
    price: "$6.99",
    image: "https://via.placeholder.com/200x150?text=Tiramisu"
  }
];

const menuContainer = document.getElementById('menu');

menuItems.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('menu-item');

  itemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}" />
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    <button class="add-button">Add</button>
  `;

  menuContainer.appendChild(itemDiv);
});

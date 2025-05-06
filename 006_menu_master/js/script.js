const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    image: "../media/pancakes.jpeg",
    descriptions:
      "Cloud-like stacks with golden edges, soaked in maple dreams, artisan churned butter, and topped with seasonal love — brunch goals with every fluffy bite.",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    image: "../media/diner_double.jpeg",
    descriptions:
      "Two flame-grilled patties stacked with caramelized onions, tangy pickle chips and house special sauce, all embraced by a golden buttered sesame seed bun.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 5.99,
    image: "../media/milkshake.jpeg",
    descriptions:
      "Towering monster-sized milkshake blending rich vanilla ice cream with chocolate fudge swirls, topped with whipped cream, caramel drizzle and a full-sized chocolate chip cookie.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 22.99,
    image: "../media/country_delight.jpeg",
    descriptions:
      "Country Delight: Savory home-style eggs with crisp bacon, golden home fries and warm buttermilk biscuits. Authentic farmhouse flavor in every bite.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 20.99,
    image: "../media/egg_attack.jpeg",
    descriptions:
      "Egg Attack: Perfectly poached eggs perched atop artisanal sourdough toast, draped with velvety hollandaise sauce and sprinkled with fresh chives.",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 19.0,
    image: "../media/oreo_dream.jpeg",
    descriptions:
      "Oreo Dream: Luscious vanilla ice cream whipped with crushed Oreo cookies, topped with chocolate syrup, whipped cream and extra cookie crumbles.",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "Breakfast",
    price: 9.0,
    image: "../media/bacon_overflow.jpeg",
    descriptions:
      "Bacon Overflow: Juicy beef patty smothered in melted cheddar and crowned with a glorious heap of crispy bacon strips, served on a toasted brioche bun with house special sauce.",
  },
  {
    id: 8,
    title: "american classic",
    category: "Lunch",
    price: 12.99,
    image: "../media/american_classic.jpeg",
    descriptions:
      "American Classic: Perfectly grilled quarter-pound beef patty topped with melted American cheese, crisp lettuce, juicy tomato slices and tangy pickle chips on a buttery toasted bun.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "Shakes",
    price: 16.99,
    image: "../media/quarantine_buddy.jpeg",
    descriptions:
      "Quarantine Buddy: Comforting double-decker sandwich stacked with roasted turkey, smoked ham, Swiss cheese, crisp bacon and avocado on fresh sourdough.",
  },
  {
    id: 10,
    title: "steak dinner",
    category: "Dinner",
    price: 39.99,
    image: "../media/steak_dinner.jpeg",
    descriptions:
      "Juicy seared perfection with herb butter drizzle, resting on garlic mash vibes — locally sourced, slow-crafted, and plated for your inner carnivor",
  },
];

const mainMenu = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

// Function to display menu items
function displayMenuItems(itemsArray) {
  let food = "";
  itemsArray.forEach((item) => {
    food += `<article class="menu-item">
      <img class="photo" src="${item.image}" alt="${item.title}">
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">"$"${item.price}</h4>
        </header>
        <p class="item-text">${item.descriptions}</p>
      </div>
    </article>`;
  });
  mainMenu.innerHTML = food;
}

// Function to display filter buttons
function displayFilterButtons(categories) {
  let buttonsHTML = "";
  categories.forEach((category) => {
    buttonsHTML += `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
  });
  btnContainer.innerHTML = buttonsHTML;
}

document.addEventListener("DOMContentLoaded", () => {
  let filterButtons = [];
  filterButtons.unshift("All"); // Add 'All' category first

  // Collect unique categories from the menu
  menu.forEach((item) => {
    const category = item.category;
    if (!filterButtons.includes(category)) {
      filterButtons.push(category);
    }
  });

  // Display the filter buttons
  displayFilterButtons(filterButtons);

  // Initially display all menu items
  displayMenuItems(menu);

  // Event listener for filtering items based on the button clicked
  btnContainer.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains("filter-btn")) {
      const category = target.dataset.id;
      let selectedItems = [];

      // Filter items based on category selected
      if (category === "All") {
        selectedItems = menu; // Show all items
      } else {
        selectedItems = menu.filter((item) => item.category === category); // Filter by category
      }

      // Display filtered items
      displayMenuItems(selectedItems);
    }
  });
});

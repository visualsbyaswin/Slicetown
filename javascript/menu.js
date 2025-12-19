const pizzaData = [
  {
    name: "Margherita Magic",
    description:
      "A classic with tomato sauce, mozzarella, and golden thin crust.",
    regularPrice: 7.99,
    largePrice: 10.99,
  },
  {
    name: "Farmhouse Crunch",
    description:
      "Mushrooms, bell peppers, olives, and onions on a cheesy crust.",
    regularPrice: 8.99,
    largePrice: 11.99,
  },
  {
    name: "Paneer Tandoori Twist",
    description:
      "Spiced paneer with onions, capsicum, and tikka sauce on a thin crust.",
    regularPrice: 7.49,
    largePrice: 9.49,
  },
  {
    name: "Cheesy Corn Carnival",
    description: "Mushrooms, sweet corn, jalapeños, olives, and melted cheese.",
    regularPrice: 6.99,
    largePrice: 9.49,
  },
  {
    name: "Veggie Volcano",
    description:
      "A fiery mix of peppers, onions, jalapeños, and molten cheese.",
    regularPrice: 4.99,
    largePrice: 6.99,
  },
];

function createpizaitens(pizza) {
  return `
 <div class="pizza-item">
                    <div class="pizza-header">
                        <h2 class="pizza-name">${pizza.name}</h2>
                        <div class="pizza-prices">
                            <span class="price">$${pizza.regularPrice.toFixed(
                              2
                            )}</span>
                            <span class="price">$${pizza.largePrice.toFixed(
                              2
                            )}</span>
                        </div>
                    </div>
                    <p class="pizza-description">${pizza.description}</p>
                </div>
    "`;
}

function rendermenu(data) {
  const menucontainer = document.getElementById("pizzaMenu");
  menucontainer.innerHTML = data
    .map((pizza) => createpizaitens(pizza))
    .join("");
}
rendermenu(pizzaData);

const nonvegdata = [
  {
    name: "Pepperoni Powerhouse",
    description:
      "Layers of pepperoni with mozzarella and marinara on the crust.",
    regularPrice: 10.99,
    largePrice: 13.99,
  },
  {
    name: "BBQ Chicken Melt",
    description: "Grilled chicken with BBQ sauce, onions, and gooey mozzarella",
    regularPrice: 14.99,
    largePrice: 23.99,
  },
  {
    name: "Tandoori Chicken Blaze",
    description: "Chicken tikka with onions, capsicum, and smoky spices.",
    regularPrice: 13.99,
    largePrice: 19.99,
  },
  {
    name: "Meat Lovers Supreme",
    description: "Pepperoni, sausage, chicken, and ham with melted cheese.",
    regularPrice: 8.99,
    largePrice: 16.99,
  },

  {
    name: "Peri Peri Chicken Punch",
    description: "Chicken tossed in peri peri sauce with onions for flavor.",
    regularPrice: 16.99,
    largePrice: 23.99,
  },
  {
    name: "Pepperoni Powerhouse",
    description:
      "Layers of pepperoni with mozzarella and marinara on the crust.",
    regularPrice: 15.99,
    largePrice: 25.99,
  },
  {
    name: "Spicy Chicken Keema Delight",
    description:
      "Minced chicken keema with jalapeños, herbs, and melted cheese.",
    regularPrice: 5.99,
    largePrice: 9.99,
  },
];

function createnonvegitems(nonveg) {
  return `
                <div class="pizza-item">
                    <div class="pizza-header">
                        <h2 class="pizza-name">${nonveg.name}</h2>
                        <div class="pizza-prices">
                            <span class="price">$${nonveg.regularPrice.toFixed(
                              2
                            )}</span>
                            <span class="price">$${nonveg.largePrice.toFixed(
                              2
                            )}</span>
                        </div>
                    </div>
                    <p class="pizza-description">${nonveg.description}</p>
                </div>
            `;
}

function rendernonvegmenu(nondata) {
  const nonmenucontainer = document.getElementById("nonveg");
  nonmenucontainer.innerHTML = nondata
    .map((nonveg) => createnonvegitems(nonveg))
    .join("");
}
rendernonvegmenu(nonvegdata);

const deserts = [
  {
    name: "Choco Lava Slice",
    description: "Decadent slice with molten chocolate lava at the center.",
    regularPrice: 6.99,
  },
  {
    name: "Mini Nutella Pizza",
    description: "Crispy mini pizza topped with smooth Nutella spread.",
    regularPrice: 9.99,
  },
  {
    name: "Tiramisu Jar",
    description: "Creamy tiramisu layers in a jar, dusted with cocoa powder.",
    regularPrice: 2.99,
  },
  {
    name: "Classic Cheesecake",
    description: "Smooth, creamy cheesecake topped with a hint of vanilla",
    regularPrice: 5.99,
  },
  {
    name: "Brownie Fudge Delight",
    description: "Rich chocolate brownie layered with gooey fudge and nuts.",
    regularPrice: 4.99,
  },
];

function createdeserts(desertitems) {
  return `
             <div class="pizza-item">
                    <div class="pizza-header">
                        <h2 class="pizza-name">${desertitems.name}</h2>
                        <div class="pizza-prices">
                            <span class="price">$${desertitems.regularPrice.toFixed(
                              2
                            )}</span>
                        
                        </div>
                    </div>
                    <p class="pizza-description">${desertitems.description}</p>
                </div>
    `;
}

function renderdesertmenu(desertdata) {
  const desertmenu = document.getElementById("deserts");
  desertmenu.innerHTML = desertdata
    .map((desertdata) => createdeserts(desertdata))
    .join("");
}

renderdesertmenu(deserts);

const addonesdata = [
  {
    name: "Extra Cheese",
    description: "Double the cheesy indulgence on your favorite pizza.",
    regularPrice: 1.99,
  },
  {
    name: "Garlic Dip",
    description: "Creamy garlic dip that’s smooth, rich, and flavorful.",
    regularPrice: 0.99,
  },
  {
    name: "Chili Flakes & Oregano Pack",
    description: "Zesty mix of chili flakes and oregano.",
    regularPrice: 0.99,
  },

  {
    name: "Stuffed Crust Upgrade",
    description: "Cheesy stuffed-crust baked to perfection.",
    regularPrice: 3.99,
  },
];

function createaddones(ones) {
  return `
                <div class="pizza-item">
                    <div class="pizza-header">
                        <h2 class="pizza-name">${ones.name}</h2>
                        <div class="pizza-prices">
                               <span class="price">$${ones.regularPrice.toFixed(
                                 2
                               )}</span>
                        
                        </div>
                    </div>
                    <p class="pizza-description">${ones.description}</p>
                </div>
    `;
}

const renderaddones = (newitems) => {
  const addmenucontainer = document.getElementById("addones");
  addmenucontainer.innerHTML = newitems
    .map((newones) => createaddones(newones))
    .join("");
};
renderaddones(addonesdata);

function ShowMenu() {
  const dishes = [
    {
      name: "Onions",
      price: "1,99",
      description: "Tasty fried onios",
      category: "starter",
    },
    {
      name: "Schnitzel",
      price: "13,99",
      description: "Tasty schnitzel with sauce and fries",
      category: "mainDish",
    },
    {
      name: "Mousse au chocolat",
      price: "4,99",
      description: "Delicious chocolat creation",
      category: "dessert",
    },
  ];

  const menuContainer = document.createElement("div");

  const starterContainer = document.createElement("div");
  const starterHeading = document.createElement("h2");
  starterHeading.textContent = "Starters";
  const starterList = document.createElement("ul");
  starterContainer.append(starterHeading, starterList);

  const mainDishContainer = document.createElement("div");
  const mainDishHeading = document.createElement("h2");
  mainDishHeading.textContent = "Main Dishes";
  const mainDishList = document.createElement("ul");
  mainDishContainer.append(mainDishHeading, mainDishList);

  const dessertContainer = document.createElement("div");
  const dessertHeading = document.createElement("h2");
  dessertHeading.textContent = "Desserts";
  const dessertList = document.createElement("ul");
  dessertContainer.append(dessertHeading, dessertList);

  const menuHeading = document.createElement("h1");
  menuHeading.textContent = "Menu";

  dishes.forEach((dish) => {
    const name = document.createElement("li");
    name.textContent = dish.name;
    const price = document.createElement("li");
    price.textContent = dish.price;
    const description = document.createElement("li");
    description.textContent = dish.description;
    switch (dish.category) {
      case "starter":
        starterContainer.append(name, price, description);
        break;
      case "mainDish":
        mainDishContainer.append(name, price, description);
        break;
      case "dessert":
        dessertContainer.append(name, price, description);
        break;
    }
  });
  menuContainer.append(
    menuHeading,
    starterContainer,
    mainDishContainer,
    dessertContainer
  );

  document.querySelector("#content").append(menuContainer);
}

export { ShowMenu };

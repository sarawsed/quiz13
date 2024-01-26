const menu = [
  {
    id: 1,
    title: "Caesar Salad",
    category: "salad",
    price: 20,
    img: "./assets/sezar.jpg",
    desc: `A Caesar salad is a green salad of romaine lettuce and croutons dressed with lemon juice. `,
  },
  {
    id: 2,
    title: " Alfredo Pasta",
    category: "dinner",
    price: 40,
    img: "./assets/alferedo.jpg",
    desc: `Chicken Alfredo Pasta is a classic Italian-American dish . `,
  },
  {
    id: 3,
    title: "Boozy Shakes",
    category: "shakes",
    price: 18.5,
    img: "./assets/shake.jpeg",
    desc: `If you need another selling point for milkshakes.`,
  },
  {
    id: 4,
    title: "Tray Bakes",
    category: "breakfast",
    price: 20.99,
    img: "./assets/tray.jpg",
    desc: `Delicious gluten free tray bakes made with recipes .`,
  },
  {
    id: 5,
    title: "Doner kebab",
    category: "dinner",
    price: 50,
    img: "./assets/doner.jpg",
    desc: `Doner kebab, also spelled as döner kebab, is a dish of Turkish . `,
  },
  {
    id: 6,
    title: "bagels",
    category: "breakfast",
    price: 29.99,
    img: "./assets/bagels.jpg",
    desc: `Fully baked bagels are easy to serve for breakfast, lunch and breaks`,
  },
  {
    id: 7,
    title: "smoothie",
    category: "shakes",
    price: 8,
    img: "./assets/smoothi.jpg",
    desc: `As the berry of ice cream.`,
  },
  {
    id: 8,
    title: "waffle",
    category: "breakfast",
    price: 18,
    img: "./assets/waffles.jpg",
    desc: `Waffles are crispier  than pancakes. `,
  },
  {
    id: 9,
    title: "Cheeseburger",
    category: "dinner",
    price: 30,
    img: "./assets/Cheeseburger.jpg",
    desc: `A cheeseburger is a hamburger with a slice of melted cheese .`,
  },
  {
    id: 10,
    title: "cobb salad",
    category: "salad",
    price: 25,
    img: "./assets/cobb.jpg",
    desc: `Hard Boiled Egg, Bacon, Avocado, Tomatoes.`,
  },
];
const addMenuList = (itemList = []) => {
  document.getElementById("menuList").innerHTML = itemList
    .map(
      (food) => `
    <div class="food-item">
      <img src="${food.img}" alt="${food.title}" />
      <div class="food-desc">
        <div class="food-detail">
          <h3>${food.title}</h3>
          <p class="price">$${food.price}</p>
        </div>
        <p class="food-more">
        ${food.desc}
        </p>
      </div>
    </div>`
    )
    .join(" ");
};

const setActiveClass = (button) => {
  if (button) {
    document.querySelectorAll(".btn-category").forEach((b) => {
      b.classList.remove("active-btn");
    });
    button.classList.add("active-btn");
  }
};

const addCategoryButtons = () => {
  const categoryList = menu.reduce(
    (categories, item) => {
      if (item && item.category && !categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    },
    ["all"]
  );

  const buttons = categoryList.map(
    (cat) =>
      `<button class="btn btn-category ${
        cat === "all" ? "active-btn" : ""
      }" category-id="${cat}">${cat}</button>`
  );

  if (buttons.length > 0) {
    document.getElementById("menuCategories").innerHTML = buttons.join(" ");
  }

  document.querySelectorAll(".btn-category").forEach((item) => {
    const categoryType = item.getAttribute("category-id");

    item.addEventListener("click", function () {
      setActiveClass(item);
      item.classList.add("active-btn");
      if (categoryType === "all") {
        addMenuList(menu);
        return;
      }
      const filteredList = menu.filter(
        (item) => item.category === categoryType
      );
      addMenuList(filteredList);
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  addCategoryButtons();
  addMenuList(menu);
});

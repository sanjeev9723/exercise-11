const menu = [
    {
      id: 1,
      title: "Masala dosa",
      category: "breakfast",
      price: 50,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/pglyzobfnal9v8gbuu93",
      desc: `A food that becomes moistened by having a flavorful coating dripped or brushed onto its surface. May result in a glossy appearance and thin, crisp outer layer. `,
    },
    {
      id: 2,
      title: "Hyderabad Chicken Briyani ",
      category: "lunch",
      price: 220,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/asbyjuhrwvofb89kdold",
      desc: `food that has just finished cooking and hasn't cooled down. Usually contains chillies or curry that leave a burning sensation in your mouth `,
    },
    {
      id: 3,
      title: "Email Lover",
      category: "shakes",
      price: 130,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/onzcakutlryndbwqgnln",
      desc: `It is usually prepared by milk, ice cream or iced milk, emulsifier and/or stabilizer, and flavorings or sweeteners.`,
    },
    {
      id: 4,
      title: "Poori",
      category: "breakfast",
      price: 35,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bzwckbvw6k8ncyw3lkfi",
      desc: `Always crowded the two best things you can sample here are mentioned in the title. Just plain old goodness of well made fluffy fresh pooris with divine tasting .. `,
    },
    {
      id: 5,
      title: "Mughlai Briyani",
      category: "lunch",
      price: 280,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qlkcunbsuwgxtjtegpj6",
      desc: `Excellent! Got a Murghal Biryani and it tasted just perfect. You can taste the different flavours, rice cooked to perfection and the chicken succulent.`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 115,
      img: "https://github.com/neghani/learnwire/blob/main/assignments/06-menu/setup/images/item-6.jpeg?raw=true",
      desc: `Oreo Milkshake, a name itself makes juices flowing in the mouth. No milkshake can ever come close to the divine taste of rich and creamy milkshake prepared.`,
    },
    {
      id: 7,
      title: "Idly",
      category: "breakfast",
      price: 10,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yiwf2tnari0wp9hjchvc",
      desc: `Taste and texture Firstly, everything is cooked well. The rice is coated generously . When we took the meal out of the microwave. `,
    },
    {
      id: 8,
      title: "Chicken Gravy",
      category: "lunch",
      price: 210,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/dj3uolwygk8nzlli2apz",
      desc: `This dish offers great complexity, depth and has a sweet note. The taste of butter chicken is as good as the ones you find at restaurants. `,
    },
    {
      id: 9,
      title: "Woo La La Fudge",
      category: "shakes",
      price: 140,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fgxwy3tihrzscc5cgljy",
      desc: `with this recipe as flavor of its three simple ingredients; milk, chocolate syrup and ice cream is enhanced by whipped cream.
      `,
    },
    {
      id: 10,
      title: "Grilled Chicken",
      category: "dinner",
      price: 400,
      img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/fty6x812my5encgemqro",
      desc: `Food that is grilled, roasted, or broiled and gains a blackened exterior coupled with a smoky flavor.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">₹${item.price}</h4>
              </header>
              <p class="item-text">
              ${item.desc} 
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
       if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }
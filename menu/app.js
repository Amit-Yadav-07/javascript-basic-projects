const productItems = [
    {
        id: 1,
        title: 'Egg Attack',
        category: 'breakfast',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        price: '15.99',
        img: 'https://img.freepik.com/free-photo/delicious-breakfast-meal-composition_23-2148878834.jpg?size=626&ext=jpg&ga=GA1.2.1971352132.1678984323&semt=sph'
    },

    {
        id: 2,
        title: 'Country Delight',
        category: 'breakfast',
        description: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
        price: '11.00',
        img: 'https://img.freepik.com/free-photo/breakfast-valentine-s-day-fried-eggs-bread-shape-heart-fresh-vegetables_114579-82640.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph'
    },

    {
        id: 3,
        title: 'Deluxe',
        category: 'dinner',
        description: "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
        price: '17.30',
        img: "https://img.freepik.com/premium-photo/assorted-indian-recipes-food-various_79295-7226.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph"
    },

    {
        id: 4,
        title: 'Oreo Dream',
        category: 'lunch',
        description: "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday",
        price: '15.10',
        img: 'https://img.freepik.com/free-photo/closeup-shot-indian-tasty-food-called-marwari-veg-thali-wooden-table_181624-58043.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph'
    },

    {
        id: 5,
        title: 'Bacon Overflow',
        category: 'lunch',
        description: "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
        price: '20.05',
        img: "https://img.freepik.com/free-photo/dish-with-rice_144627-18096.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph"
    },

    {
        id: 6,
        title: 'American Classic',
        category: 'breakfast',
        description: "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
        price: '12.00',
        img: "https://img.freepik.com/free-photo/front-view-breakfast-table-with-eggs-buns-cheese-fresh-juice-restaurant-during-daytime-food-meal-breakfast_140725-25904.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.1.1971352132.1678984323&semt=ais"
    },

    {
        id: 7,
        title: 'panner with Rice',
        category: 'dinner',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        price: '08.05',
        img: "https://img.freepik.com/free-photo/indian-butter-chicken-black-bowl-black-background_123827-20757.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph"
    },

    {
        id: 8,
        title: 'Quarantine Buddy',
        category: 'snakes',
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        price: '18.99',
        img: "https://img.freepik.com/free-photo/side-view-chicken-nuggets-lettuce-with-sauce-unpeeled-potatoes_141793-4841.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph"
    },

    {
        id: 9,
        title: 'Sandwich',
        category: 'snakes',
        description: "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
        price: '10.00',
        img: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph"
    },

    {
        id: 10,
        title: 'Buttermilk Pancakes',
        category: 'lunch',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        price: '16.90',
        img: 'https://img.freepik.com/free-photo/grilled-salmon-prawn-steak_1203-8875.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph'
    },

    {
        id: 11,
        title: 'Mix-Juice',
        category: 'juice',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        price: '16.90',
        img: 'https://img.freepik.com/free-photo/fruit-filled-cocktail-with-citrus-mint-ice-generative-ai_188544-12381.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph'
    },

    {
        id: 12,
        title: 'Orange Juice',
        category: 'juice',
        description: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
        price: '16.90',
        img: 'https://img.freepik.com/free-photo/fresh-orange-juice-glass-dark-background_1150-45560.jpg?size=626&ext=jpg&uid=R76003528&ga=GA1.2.1971352132.1678984323&semt=sph'
    }
]


let wrapper = document.querySelector('.menu-wrapper');

let containerBtn = document.querySelector('.buttons-container');


// page loads
window.addEventListener('DOMContentLoaded', function () {

    displayMenuItem(productItems);


    displayMenuBtn();

});





function displayMenuItem(menuitems) {

    // console.log(menuitems);
    let items = menuitems.map((item) => {

        // console.log(item);
        return item.innerHTML = `<article class="menu-container">
          <div class="item-container">
            <img
              src=${item.img}
              alt=""
              class="img"
            />
            <div class="item-description">
              <div class="rate-section">
                <h3 class="title">${item.title}</h3>
                <strong class="price">$${item.price}</strong>
              </div>    
              <hr />
              <p>${item.description}</p>
            </div>
          </div>
        </article>`;


    })

    items = items.join('');
    wrapper.innerHTML = items;
    //  console.log(items);

    // console.log(menuitems);
}

// buttons logic
function displayMenuBtn() {

    let categories = productItems.reduce(function (values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category)
        } else {
            return values;
        }
        return values;
    }, ['all'])

    // console.log(categories);



    let categoryBtn = categories.map((category) => {

        return `<button class="btn" type="button" data-id=${category}>${category}</button>`
    }).join('')

    // console.log(categoryBtn);

    containerBtn.innerHTML = categoryBtn;

    let buttons = document.querySelectorAll('.btn');

    // filter

    buttons.forEach((btn) => {

        btn.addEventListener('click', function (e) {
            let currentItem = e.currentTarget.dataset.id;
            //  console.log(category);

            let filterItem = productItems.filter((filteredItem) => {
                // console.log(menuItem.category);
                if (filteredItem.category === currentItem) {

                    return filteredItem;
                }

            });
            //  console.log(filterItem);

            if (currentItem === 'all') {
                displayMenuItem(productItems);
            } else {
                displayMenuItem(filterItem);
            }

        })

    })

}


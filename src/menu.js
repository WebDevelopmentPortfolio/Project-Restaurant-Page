
import { pageContent } from "./index.js";


function createEachContent() {

    const menuContentContainer = document.createElement("div");
    menuContentContainer.className = "menu-container";
    let textContainers = [];

    for (let i = 1; i <= 4; i++) {
        
        const menuContent = document.createElement("div");
        menuContent.classList.add("menu-content", `menu-${i}`);

        const contentImgContainer = document.createElement("div");
        contentImgContainer.className = "image-container";

        const contentTextContainer = document.createElement("div");
        contentTextContainer.className = "text-container";

        menuContent.append(contentImgContainer, contentTextContainer);

        menuContentContainer.append(menuContent);

        textContainers.push(contentTextContainer);
        
    }

    pageContent.appendChild(menuContentContainer);
    console.log(textContainers);    
    return textContainers;


}


const createMenuText = (function() {

    const menuText = [
        [
            {
                food: "Smoked Baby Back Pork Ribs",
                description: "half-rack, seasonal pickles, specialty bbq sauce",
                price: "19.95"

            },
            {
                food: "Red Wine-Braised Short Ribs",
                description: "red wine, lemongrass, soy",
                price: "19.75"

            },
            {
                food: "Steak with Chimichurri & Potatoes",
                description: "chimichurri, mushrooms, butter",
                price: "15.95"

            }

        ],
        [
            {
                food: "Roast Carrot Avocado Salad",
                description: "roasted carrots, avocados, vibrant herbs",
                price: "19.95"

            },
            {
                food: "Honey Crispy Chicken Salad",
                description: "chicken, sharp cheddar, honey mustard dressing",
                price: "19.75"

            },
            {
                food: "Green Goddess Cobb Salad",
                description: "green goddess herb dressing, sweet avocados",
                price: "15.95"

            }

        ],
        [
             {
                food: "Chicken Mushroom Rigatoni",
                description: "black truffle, broccolini",
                price: "19.95"

            },
            {
                food: "Lobster Ravioli",
                description: "lobster, romano cheese, white wine cream sauce",
                price: "19.75"

            },
            {
                food: "Steakhouse Mac and Cheese",
                description: "cavatappi pasta, four-cheese sauce",
                price: "15.95"

            }
        ],
        [
            {
                food: "Cornbread",
                description: "skillet-backed cornbread, honey butter",
                price: "19.95"

            },
            {
                food: "Cheese Fries",
                description: "pommes frites, bacon, cheddar, ranch dressing",
                price: "19.75"

            },
            {
                food: "Hushpuppies",
                description: "deep-fried cornmeal batter, tartar sauce",
                price: "15.95"

            }

        ]

    ]

    return {
       getMenuForEachContainer: function(menuIndex) {
            return menuText[menuIndex]; 
       }
        
    }

});



function populateMenuContent(containers) {

    containers.forEach((container, index) => {

        const eachSet = createMenuText().getMenuForEachContainer(index);

        eachSet.forEach((set) => {
            const eachTextContainer = document.createElement("div");
            eachTextContainer.className = "each-menu";

            const eachDish = document.createElement("div");
            eachDish.className = "each-dish";
            
            const foodName = set.food;
            const foodTitleText = document.createElement("p");
            foodTitleText.className = "food-title";
            foodTitleText.textContent = foodName.toUpperCase();

            const foodDesc = set.description;
            const foodDescText = document.createElement("p");
            foodDescText.className = "food-description";
            foodDescText.textContent = foodDesc;

            eachDish.append(foodTitleText, foodDescText);

            const foodPrice = set.price;
            const price = document.createElement("div");
            price.className = "food-price";
            price.textContent = foodPrice;

            eachTextContainer.append(eachDish, price);

            container.appendChild(eachTextContainer);


        });

    });


}


export function menuPageContent() {

    const textContainers = createEachContent();
    populateMenuContent(textContainers);

}




import commentIcon from "./images/comment-icon.png";
import quoteImage from "./images/quote-icon.png";
import aboutUs from "./images/about-us-icon.png"; 

import { pageContent } from "./index.js";

document.documentElement.style.setProperty('--quoteIcon', `url("${quoteImage}")`);

const commentReviews = (function() {
    const comments = [
        {
            comment: "Love, love, love this marvelous restaurant! Everything was delicious and the ambience is perfect for hanging out.",
            guest: "Carol Danverse, Vail, CO"
        },
        {
            comment: "Not only is the food outstanding but so are the staff. Their pork ribs are truly marvelous!",
            guest: "Tony Spark, Beaver Creek, CO"
        },
        {
            comment: "Can't go wrong with anything in the menu. I come back again and again here and each time was marvelous. I highly recommend this place!",
            guest: "Pete Parker, Red Cliff, CO"
        },
        {
            comment: "Menu is varied, offering something for everyone. For someone like me who eats out a lot, I find this a marvel.",
            guest: "Bruce Danner, Breckenridge, CO"
        }
    ]

    return {
        getComments: function(index) {
            return comments[index];
        }
    };
});

function createContactContent() {
    const contactContainer = document.createElement("div");
    contactContainer.className = "contact-container";

    const reviewsContainer = document.createElement("div");
    reviewsContainer.className = "reviews-container";

    const reviewHeader = document.createElement("div");
    reviewHeader.className = "review-header";

    const reviewHeaderText = document.createElement("p");
    reviewHeaderText.textContent = "What They Say";

    const reviewIcon = document.createElement("img");
    reviewIcon.src = commentIcon;

    reviewHeader.append(reviewHeaderText, reviewIcon);

    const reviewComments = document.createElement("div");
    reviewComments.className = "review-comments";

    for (let i = 0; i < 4; i++) {
        const review = document.createElement("p");

        const spanInReview = document.createElement("span");
        spanInReview.textContent = ` - ${commentReviews().getComments(i).guest}`;
        review.append(commentReviews().getComments(i).comment, spanInReview);
        
        reviewComments.append(review);
    }

    reviewsContainer.append(reviewHeader, reviewComments);

    const aboutUsContainer = document.createElement("div");
    aboutUsContainer.className = "about-us-container";

    const aboutUsHeader = document.createElement("div");
    aboutUsHeader.className = "about-us";

    const aboutUsHeaderText = document.createElement("p");
    aboutUsHeaderText.className = "about-us-header";
    aboutUsHeaderText.textContent = "Who We Are";

    const aboutUsIcon = document.createElement("img");
    aboutUsIcon.src = aboutUs;

    aboutUsHeader.append(aboutUsHeaderText, aboutUsIcon);

    const aboutUsDesc = document.createElement("p");
    aboutUsDesc.className = "about-us-description";
    aboutUsDesc.textContent = "We are a family-owned establishment built three generations ago deeply rooted in our love for Colorado, its vibrant people and local food. We hope you find the atmosphere in our place marvelous for gathering with family and friends over dishes that will impress your palate and warm your hearts.";

    aboutUsContainer.append(aboutUsHeader, aboutUsDesc);

    contactContainer.append(reviewsContainer, aboutUsContainer);

    pageContent.append(contactContainer);
}

export function contactContent() {
    createContactContent();
}

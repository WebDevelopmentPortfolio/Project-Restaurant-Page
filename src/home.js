
import homeImage from "./images/2307-w064-n002-555B-p1-555.jpg";

import { pageContent } from "./index.js";

function homePageImage() {

    const pageImage = {
        image: homeImage,
        authorName: 'Matt Pictures',
        authorURL: 'https://unsplash.com/@photographybymat_26?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
        sourceName: 'Unsplash',
        sourceURL: 'https://unsplash.com/photos/a-stone-building-with-a-sign-that-says-restaurant-C7PUovEo3ms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'

    }

    const image = document.createElement('img');
    image.className = "home-image";
    image.src = pageImage.image;
    
    const homeImageContainer = document.createElement("div");
    homeImageContainer.className = "home-image-container";
    homeImageContainer.append(image);

    pageContent.append(homeImageContainer);

    
}


function homePageText() {

    const homeTextContainer = document.createElement("div");
    homeTextContainer.className = "home-text-container";

    const homeText = document.createElement("p");
    homeText.className = "home-text";
    homeText.textContent = "- OPEN FOR DINE-IN, TAKEOUT AND DELIVERY -";

    const infoText = document.createElement("div");
    infoText.className = "info-text";

    const addressText = document.createElement("p");
    addressText.className = "home-address";
    addressText.textContent = "123 MAIN STREET KIDDING\nCOLORADO 24005";

    const openHoursText = document.createElement("p");
    openHoursText.className = "open-hours";
    openHoursText.textContent = "MONDAY - SATURDAY: 7AM - 7PM\nSUNDAY: CLOSED";

    infoText.append(addressText, openHoursText);

    homeTextContainer.append(homeText, infoText);

    pageContent.append(homeTextContainer);

}


export function homePageContent() {

    homePageImage();
    homePageText();

}
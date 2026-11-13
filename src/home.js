
import homeImage from "./images/2307-w064-n002-555B-p1-555.jpg";
import timeIcon from "./images/time-icon.png";
import addressIcon from "./images/address-icon.png";

import { pageContent } from "./index.js";

function homePageImage() {

    const image = document.createElement('img');
    image.className = "home-image";
    image.src = homeImage;
    image.alt = "restaurant-facade";
    
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

    const addressContainer = document.createElement("div");
    addressContainer.className = "address-container";
    
    const svgAddress = document.createElement("img");
    svgAddress.src = addressIcon;

    const addressText = document.createElement("p");
    addressText.className = "home-address";
    addressText.textContent = "123 MAIN STREET KIDDING\nCOLORADO 24005";

    addressContainer.append(svgAddress, addressText);

    const openHoursContainer = document.createElement("div");
    openHoursContainer.className = "open-hours-container";
    
    const svgTime = document.createElement("img");
    svgTime.src = timeIcon;

    const openHoursText = document.createElement("p");
    openHoursText.className = "open-hours";
    openHoursText.textContent = "MONDAY - SATURDAY: 7AM - 7PM\nSUNDAY: CLOSED";

    openHoursContainer.append(svgTime, openHoursText);

    infoText.append(addressContainer, openHoursContainer);

    homeTextContainer.append(homeText, infoText);

    pageContent.append(homeTextContainer);

}


export function homePageContent() {

    homePageImage();
    homePageText();

}

import "./styles.css";

import logoImage from './images/logo-image.png';
import { homePageContent } from "./home.js";
import { menuPageContent } from "./menu.js";

const pageHeader = document.querySelector(".page-header");
const navButtons = document.querySelectorAll(".nav-button");
export const pageContent = document.getElementById("content");


const pageHeaderImage = document.createElement("img");
pageHeaderImage.className = "page-header-image";
pageHeaderImage.src = logoImage;
pageHeader.append(pageHeaderImage);


function navButtonActive(pageName) {

    navButtons.forEach(navButton => {
        if (navButton.getAttribute('id') === pageName) {
            navButton.classList.add('active');
        }
        else {
            navButton.classList.remove('active');
        }

    });

}


navButtons.forEach(navButton => {
    navButton.addEventListener('click', (event) => {
        event.preventDefault();

        const pageName = event.currentTarget.getAttribute('id');

        navButtonActive(pageName);

        if (pageName === "home") {
            pageContent.replaceChildren();
            homePageContent();

        }
        else if (pageName === "menu") {
            pageContent.replaceChildren();
            menuPageContent();

        }
        else if (pageName === "about") {
            pageContent.replaceChildren();
        }


    });



});



homePageContent();
import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"

const navEl = document.querySelector("header nav");
const contentEl = document.querySelector(".content");

navEl.addEventListener("click", (e) => {
		if (e.target.className == "homeBtn") updateDom(home);
		if (e.target.className == "menuBtn") updateDom(menu);
		if (e.target.className == "aboutBtn") updateDom(about);
});

const updateDom = (page) => {
	contentEl.innerHTML = "";
	contentEl.appendChild(page);

};




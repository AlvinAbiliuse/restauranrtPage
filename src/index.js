import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"
import "./styles.css"

const logo = require("./images/logo.svg");

let navEl = document.querySelector(".sidebar nav");
let contentEl = document.querySelector("#content");

navEl.addEventListener("click", (e) => {
		if (e.target.classList.contains("homeBtn")) {
			btnStyleToggle("homeBtn");
			updateDom(home);
		} else if (e.target.classList.contains("menuBtn")) {
			btnStyleToggle("menuBtn");
			updateDom(menu);
		} else if (e.target.classList.contains("aboutBtn")) {
			btnStyleToggle("aboutBtn");
			updateDom(about);
		}
		document.activeElement.blur();
});


// changes classname of selected button to make css changes
let btnStyleToggle = (name) => {
	let navArr = navEl.querySelectorAll("button");
	let classArr = [];
	
	const list = ["homeBtn", "menuBtn", "aboutBtn"];
	for (let i=0; i < list.length; i++) {
		if (list[i] == name) {
			document.querySelector("." + list[i]).className = 
				name + " current";
		} else {
			document.querySelector("." + list[i]).className = list[i];
		}
	}
}

let updateDom = (page) => {
	contentEl.innerHTML = "";
	contentEl.appendChild(page);

};

updateDom(menu);
btnStyleToggle("menuBtn");

const logoEl = document.createElement("img");
logoEl.setAttribute("src", logo)
logoEl.className = "sidebarLogo"
const sidebar = document.querySelector(".sidebar")
sidebar.insertBefore(logoEl, sidebar.firstChild);


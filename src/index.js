import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"
import "./styles.css"

const logo = require("./images/kitchenWhite.png");

// require("./images/logo.svg");

let navEl = document.querySelector(".sidebar nav");
let contentEl = document.querySelector("#content");

navEl.addEventListener("click", (e) => {
		if (e.target.classList.contains("homeBtn")) {
			window.scroll(0, 0);
			btnStyleToggle("homeBtn");
			updateDom(home);
		} else if (e.target.classList.contains("menuBtn")) {
			window.scroll(0, 0);
			btnStyleToggle("menuBtn");
			updateDom(menu);
		} else if (e.target.classList.contains("aboutBtn")) {
			window.scroll(0, 0);
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

updateDom(home);
btnStyleToggle("homeBtn");

const logoEl = document.createElement("img");
logoEl.setAttribute("src", logo)
logoEl.className = "sidebarLogo"
const sidebar = document.querySelector(".sidebar")
sidebar.insertBefore(logoEl, sidebar.firstChild);

	
document.querySelector(".sidebarLogo").
	addEventListener("click", (e) => {
				window.scroll(0, 0);
				btnStyleToggle("homeBtn");
				updateDom(home);
		});

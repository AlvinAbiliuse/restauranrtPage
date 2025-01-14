import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"
import "./styles.css"
const logo = require("./images/logo.svg");

let navEl = document.querySelector(".sidebar nav");
let contentEl = document.querySelector("#content");

navEl.addEventListener("click", (e) => {
		if (e.target.className == "homeBtn") {
			btnStyleToggle();			
			updateDom(home);
		} else if (e.target.className == "menuBtn") {
			btnStyleToggle();			
			updateDom(menu);
		} else if (e.target.className == "aboutBtn") {
			btnStyleToggle();			
			updateDom(about);
		}
});

// to toggle css to change button when active *not complete*
let btnStyleToggle = (name) => {
	let navArr = navEl.querySelectorAll("button");
	let classArr = [];
	for (let i=0; i < navArr.length; i++) {
		classArr.push(navArr[i].className);
	}	
	console.log(classArr);
}

let updateDom = (page) => {
	contentEl.innerHTML = ""
	contentEl.appendChild(page);

};

updateDom(home);

const logoEl = document.createElement("img");
logoEl.setAttribute("src", logo)
logoEl.className = "sidebarLogo"
const sidebar = document.querySelector(".sidebar")
sidebar.insertBefore(logoEl, sidebar.firstChild);


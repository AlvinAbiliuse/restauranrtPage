import image from "./images/chef.jpg";

function page() {
		let mainContent = document.createElement("div");

		let heroPage = document.createElement("div");
		heroPage.className = "card dark";
		let el = document.createElement("h1");
		el.textContent = "Authentic Sushi Restaurant";
		heroPage.appendChild(el);
		el = document.createElement("img");
		el.setAttribute("src", image);
		el.className = "chefImage";
		heroPage.appendChild(el);
		el = document.createElement("p");
		el.textContent = "welcome to \"Sushi Restaurant\"";
		heroPage.appendChild(el);
	
		mainContent.appendChild(heroPage);
		return mainContent;
}

export default page();


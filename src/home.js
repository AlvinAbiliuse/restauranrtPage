import image from "./images/chef.jpg";

function page() {
		let heroPage = document.createElement("div");
		heroPage.className = "card dark";
		let el = document.createElement("h1");
		el.textContent = "Authentic Sushi Restaurant";
		heroPage.appendChild(el);
		el = document.createElement("img");
		el.setAttribute("src", image);
		el.className = "chefImage";
		heroPage.appendChild(el);
		return heroPage;
}

export default page();


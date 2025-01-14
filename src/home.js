import image from "./images/chef.jpg";
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";

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
	
		mainContent.appendChild(heroPage);

		el = document.createElement("div");
		el.className = "card secondCard";
		
		let subEl, imgEl, subP, i;
		for (i=0; i < 4; i++) {
			subEl = document.createElement("div");
			subEl.className = "foodCard";
			imgEl = document.createElement("img");
			imgEl.setAttribute("src", [food1, food2, food3, food4][i]);
			subEl.appendChild(imgEl);
			el.appendChild(subEl);
		}
		mainContent.appendChild(el);

		let footer = document.createElement("div");
		footer.className = "card dark footer";
		let text = document.createElement("p");
		text.textContent = "tis but a footer";
		footer.appendChild(text);
		mainContent.appendChild(footer);
		
		return mainContent;
}

export default page();








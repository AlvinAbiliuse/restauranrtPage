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
		el = document.createElement("p");
		el.textContent = "welcome to \"Sushi Restaurant\"";
		heroPage.appendChild(el);
	
		mainContent.appendChild(heroPage);


		let secondCard = document.createElement("div");
		el = document.createElement("div");
		let subEl = document.createElement("div");
		
		let imgEl, subP, i;
		for (i=0; i < 4; i++) {
			subEl.className = "foodCard";
			imgEl = document.createElement("img");
			imgEl.setAttribute("src", [food1, food2, food3, food4][i]);
			subEl.appendChild(imgEl);
			subP = document.createElement("p");
			subP.textContent = `Food ${i}`;
			subEl.appendChild(subP);
			el.appendChild(subEl);
		}
		mainContent.append(el);
	
		return mainContent;
}

export default page();








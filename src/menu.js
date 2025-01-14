import "./menuPageStyles.css";
import food1 from "./images/food1.jpg";
import food2 from "./images/food2.jpg";
import food3 from "./images/food3.jpg";
import food4 from "./images/food4.jpg";


function menuPage() {
	let mainPage = document.createElement("div");
	let card = document.createElement("div");
	card.className = "card dark";
	let el = document.createElement("h1");
	el.textContent = "Menu";
	card.appendChild(el);
	mainPage.appendChild(card);
	card = document.createElement("div");
	card.className = "card";
	let subEl, subElInfo;
	for (let i=0; i < 4; i++) {
		el = document.createElement("div");
		subEl = document.createElement("div");
		subEl.className = "menuImage";	
		let imgEl= document.createElement("img");
		imgEl.setAttribute("src", 
			[food1, food2, food3, food4][i]);
		subEl.appendChild(imgEl);
		card.appendChild(subEl);

		subEl = document.createElement("div");
		subEl.className = "info";
		subElInfo = document.createElement("h4");
		subElInfo.textContent = `Menu item ${i}`;
		subEl.appendChild(subElInfo);
		
		subElInfo = document.createElement("p");
		subElInfo.textContent = "delicious food";
		subEl.appendChild(subElInfo);
	
		subElInfo = document.createElement("p");	
		subElInfo.textContent = "$12";
		subElInfo.className = "price";
		subEl.appendChild(subElInfo);

		card.appendChild(subEl);
			
		mainPage.appendChild(card);
	}
   	let footer = document.createElement("div");
    footer.className = "card dark footer";
    let text = document.createElement("p");
    text.textContent = "tis but a footer";
    footer.appendChild(text);
    mainPage.appendChild(footer);
	return mainPage;
}		





export default menuPage();

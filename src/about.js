import "./aboutPageStyles.css";
import image1 from "./images/about1.jpg"
import image2 from "./images/about2.jpg"
import image3 from "./images/about3.jpg"
import image4 from "./images/about4.jpg"

function aboutPage() {
	let mainContent = document.createElement("div");
	
	let el = document.createElement("div");
	el.className = "card dark";
	let image = document.createElement("img");
	image.setAttribute("src", image1);
	el.appendChild(image);
	let subEl = document.createElement("p");
	subEl.textContent = "insert content here";
	el.appendChild(subEl);
	mainContent.appendChild(el);

	el = document.createElement("div");
	el.className = "card";
	subEl = document.createElement("p");
	subEl.textContent = "insert content here";
	el.appendChild(subEl);
	image = document.createElement("img");
	image.setAttribute("src", image2);
	el.appendChild(image);
	mainContent.appendChild(el);

	el = document.createElement("div");
	el.className = "card dark";
	image = document.createElement("img");
	image.setAttribute("src", image3);
	el.appendChild(image);
	subEl = document.createElement("p");
	subEl.textContent = "insert content here";
	el.appendChild(subEl);
	mainContent.appendChild(el);

	el = document.createElement("div");
	el.className = "card";
	subEl = document.createElement("p");
	subEl.textContent = "insert content here";
	el.appendChild(subEl);
	image = document.createElement("img");
	image.setAttribute("src", image4);
	el.appendChild(image);
	mainContent.appendChild(el);



	
	let footer = document.createElement("div");
  footer.className = "card dark footer";
  let text = document.createElement("p");
  text.textContent = "tis but a footer";
  footer.appendChild(text);
  mainContent.appendChild(footer);
	return mainContent;
}
export default aboutPage();

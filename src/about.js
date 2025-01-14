import "./aboutPageStyles.css";


function aboutPage() {
	let mainContent = document.createElement("div");
	let footer = document.createElement("div");
  footer.className = "card dark footer";
  let text = document.createElement("p");
  text.textContent = "tis but a footer";
  footer.appendChild(text);
  mainContent.appendChild(footer);
	return mainContent;
}
export default aboutPage();

function page() {
		let heroPage = document.createElement("div");
		heroPage.className = "card dark";
		let el = document.createElement("h1");
		el.textContent = "Authentic American Sushi";
		heroPage.appendChild(el);
		return heroPage;
}

export default page();


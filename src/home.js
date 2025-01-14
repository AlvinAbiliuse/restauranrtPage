function page() {
		let el = document.createElement("p");
		el.textContent = "Home";
		let heroPage = document.createElement("div");
		heroPage.textContent = "HeroPage";
		heroPage.appendChild(el);
		return heroPage;
}

let pageEl = new page();

export default pageEl;


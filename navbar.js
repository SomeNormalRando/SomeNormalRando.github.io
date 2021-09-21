/* This script loads a navigation bar and stylesheet for it into the page */
const styleContent = 
`nav {
	display: flex;
	background-color: rgb(250, 146, 0);
	background-color: var(--primary-color);
}
nav a {
	margin: 0;
	padding: 1.3rem 2.5rem;
	color: rgb(240, 240, 240);
	color: var(--foreground-color);
	background-color: rgb(250, 146, 0);
	background-color: var(--primary-color);
	font-size: 1.5rem;
	text-decoration: none;
	transition-duration: 400ms;
}
nav a:hover {
	cursor: pointer;
	color: rgb(255, 255, 255);
	background-color: rgb(240, 116, 0);
	background-color: var(--primary-hover-color);
}`;

const baseURL = "https://somenormalrando.github.io/";

const links_left = {
	"Home": baseURL,
	"Portfolio": `${baseURL}#portfolio`,
};
const links_right = {
	"GitHub": "https://github.com/SomeNormalRando"
}

const nav = document.createElement("nav");
for (const link of Object.keys(links_left)) {
	const newLink = document.createElement("a");
	newLink.href = links_left[link];
	newLink.innerText = link;
	nav.appendChild(newLink);
}
for (const link of Object.keys(links_right)) {
	const newLink = document.createElement("a");
	newLink.href = links_right[link];
	newLink.innerHTML = `${link} <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
	newLink.target = "_blank";
	newLink.style.marginLeft = "auto";
	nav.appendChild(newLink);
}
document.body.insertBefore(nav, document.body.firstChild);

const styleElement = document.createElement("style");
styleElement.textContent = styleContent;
document.head.appendChild(styleElement);
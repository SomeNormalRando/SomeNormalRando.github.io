/* This script loads a navigation bar and stylesheet for it into the page */
"use strict";
/* eslint-disable max-len */
const styleContent =
`nav {
	display: flex;
	position: sticky;
	top: 0;
	background-color: rgb(250, 146, 0);
	background-color: var(--primary-color);

}
nav a {
	margin: 0;
	padding: 1rem 2rem;
	color: rgb(240, 240, 240);
	color: var(--foreground-color);
	background-color: rgb(250, 146, 0);
	background-color: var(--primary-color);
	font-family: "Open Sans", "Arial Black", Arial, sans-serif;
	font-size: 1.6rem;
	font-weight: 700;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	transition-duration: 400ms;
}
nav a:hover {
	cursor: pointer;
	color: rgb(250, 146, 0);
	color: var(--primary-color);
	background-color: white;
}`;

const baseURL = "https://somenormalrando.github.io/";

const links = {
	Home: [baseURL, "Home page"],
	Portfolio: [`${baseURL}#portfolio`],
};
const navElement = document.createElement("nav");

for (const linkName of Object.keys(links)) {
	const newLink = document.createElement("a");
	newLink.href = links[linkName][0];
	newLink.innerText = linkName;
	newLink.title = links[linkName][1] || linkName;
	navElement.appendChild(newLink);
}

const headerElement = document.querySelector("header");
if (headerElement) document.body.insertBefore(navElement, headerElement);

const styleElement = document.createElement("style");
styleElement.textContent = styleContent;
document.head.appendChild(styleElement);

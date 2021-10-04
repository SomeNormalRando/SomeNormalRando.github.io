"use strict";
for (const element of document.getElementsByClassName("github-link-button")) {
	element.innerHTML = `<img src="./github-icon.webp" alt="GitHub Icon" width=30 height=30> ${element.innerHTML}`;
}
for (const link of document.querySelectorAll("a")) {
	if (!link.title) link.title = link.innerText;
}

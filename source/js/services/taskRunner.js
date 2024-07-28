import dayjs from "dayjs";
export const TodayDate = dayjs();
export let changedDate = dayjs();
let currentDate;

/**
 *
 * @param {String} element  : prend en parametre le un template html
 * @returns {htmlElement} retourn firstElementChild element
 */
export function createDomEl(element) {
	const template = document.createElement("template");
	template.innerHTML = html;
	return template.content.firstElementChild;
}

/**
 *
 * @param {htmlElement} element  l,ele;ent html sur lequel ajouter l,ecouteur d,evenememt
 * @param {string} event  le type d,evenement exemple : "click"
 * @param {VoidFunction} fcEvent  la fonction qui sera executer au declenchement de l,evenement
 */
export function addEvent(element, event, fcEvent) {
	element.addEventListener(event, fcEvent);
}

export const nextDate = (htmlElement) => {
	currentDate = changedDate.add(1, "M");
	htmlElement.textContent = currentDate;
	changedDate = currentDate;
};

export const prevDate = (htmlElement) => {
	currentDate = changedDate.subtract(1, "M");
	htmlElement.textContent = currentDate;
	changedDate = currentDate;
};

export const resetDate = (htmlElement) => {
	currentDate = dayjs();
	htmlElement.textContent = currentDate;
};

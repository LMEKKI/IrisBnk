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
 * @param {Number} unite : exemple le nombre de jour  ou de mois
 * @param {String} type: day,months,year voir la doc dayjs
 * @param {htmlElement} htmlElement: un element html
 * @param {Function} dateFormat : le format de date souhaiter date( ) , format("DD,MM,YY")
 * @param {Function} action: add , substract
 *  elle dispose de la fonction : preventDefault()
 */

/**
 *
 * @param {htmlElement} element  l,ele;ent html sur lequel ajouter l,ecouteur d,evenememt
 * @param {string} event  le type d,evenement exemple : "click"
 * @param {VoidFunction} fcEvent  la fonction qui sera executer au declenchement de l,evenement
 */
export function addEvent(element, event, fcEvent) {
	element.addEventListener(event, fcEvent);
}

export class uiDates {
	constructor(p) {
		this.p = p;
		nextDate = function () {
			currentDate = changedDate.add(1, "M");
			htmlElement.textContent = currentDate;
			changedDate = currentDate;
		};

		prevDate = function () {
			currentDate = changedDate.subtract(1, "M");
			htmlElement.textContent = currentDate;
			changedDate = currentDate;
		};
	}
}

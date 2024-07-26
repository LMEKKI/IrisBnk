import dayjs from "dayjs";
import {
	createDomEl,
	TodayDate,
	addEvent,
	uiDates,
} from "../services/taskRunner";
let currentDate = dayjs().format("DD/MM/YY");
let shadow;
const leftArrowImg = document.createElement("img");
leftArrowImg.src = "../../public/images/arrow-left-to-arc.svg";
const rightArrowImg = document.createElement("img");
rightArrowImg.src = "../../public/images/arrow-left-from-arc.svg";

const customCss = () => {
	let link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("href", "../../style.css");
	return shadow.appendChild(link);
};

const toolbarUi = () => {
	const container = document.createElement("div");
	const NavBtn = document.createElement("div");
	const dateUi = document.createElement("div");
	const Views = document.createElement("div");
	const prevBtn = document.createElement("button");
	const nextBtn = document.createElement("button");
	const TodayBtn = document.createElement("button");
	prevBtn.textContent = "Prev";
	nextBtn.textContent = "Next";
	TodayBtn.textContent = "Today";
	prevBtn.addEventListener("click", () => {
		nextPrevUi.prevDate();
	});
	nextBtn.addEventListener("click", () => {
		nextPrevUi.nextDate();
	});

	NavBtn.appendChild(prevBtn);
	NavBtn.appendChild(nextBtn);
	NavBtn.appendChild(TodayBtn);
	dateUi.textContent = currentDate;
	container.classList.add(
		"flex",
		"justify-between",
		"bg-sky-500",
		"text-white",
	);
	NavBtn.classList.add(
		"flex",
		"gap-8",
		"flex-nowrap",
		"bg-sky-700",
		"text-white",
	);

	container.appendChild(NavBtn);
	container.appendChild(dateUi);
	container.appendChild(Views);

	const nextPrevUi = new uiDates(currentDate);

	shadow.appendChild(container);
};

export default class toolbar extends HTMLElement {
	constructor() {
		super();
		shadow = this.attachShadow({ mode: "open" });
		customCss();
		toolbarUi();
	}
	connectedCallback() {}
}

customElements.define("tool-bar", toolbar);

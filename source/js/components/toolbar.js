import dayjs from "dayjs";
import {
	createDomEl,
	TodayDate,
	addEvent,
	nextDate,
	prevDate,
	resetDate,
} from "../services/taskRunner";
let currentDate = dayjs().format("DD/MM/YY");
let shadow;

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
	const todayBtn = document.createElement("button");
	prevBtn.textContent = "Prev";
	nextBtn.textContent = "Next";
	todayBtn.textContent = "Today";

	NavBtn.appendChild(prevBtn);
	NavBtn.appendChild(nextBtn);
	NavBtn.appendChild(todayBtn);
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

	nextBtn.addEventListener("click", (e) => {
		e.preventDefault();
		nextDate(dateUi);
	});
	prevBtn.addEventListener("click", (e) => {
		e.preventDefault();
		prevDate(dateUi);
	});

	todayBtn.addEventListener("click", (e) => {
		e.preventDefault();
		resetDate(dateUi);
	});

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

import "./style.css";

let bi = "https://api.jsonbin.io/v3/b/668fcf9ee41b4d34e4105490?meta=false";
let eventList;

async function fetchEvents() {
	await fetch(bi, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((result) => {
			eventList = result;
			console.log(eventList);
		});
}

document.addEventListener("DOMContentLoaded", function () {
	fetchEvents();

	let calendarEl = document.getElementById("calendar");
	let calendar = new FullCalendar.Calendar(calendarEl, {
		timeZone: "UTC",
		headerToolbar: {
			left: "prev,next today",
			center: "title",
			right: "dayGridMonth,timeGridWeek,timeGridDay",
		},
		initialView: "dayGridWeek",
		events: eventLis,
		selectable: true,
		editable: true,
		eventDrop: function (info) {
			alert(
				info.event.title +
					" was dropped on " +
					info.event.start.toISOString(),
			);

			if (!confirm("Are you sure about this change?")) {
				info.revert();
			}
		},
	});

	calendar.render();
	console.log(calendar);
});

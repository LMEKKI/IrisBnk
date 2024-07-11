import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let bi = "https://api.jsonbin.io/v3/b/668fcf9ee41b4d34e4105490?meta=false";

let eventList;

document.addEventListener("DOMContentLoaded", function () {
	async function fetchEvents() {
		await fetch(bi, {
			method: "GET",
		})
			.then((response) => response.json())
			.then((result) => {
				eventList = result;
				console.log(eventList);

				console.log(eventList);
				let calendarEl = document.getElementById("calendar");
				let calendar = new FullCalendar.Calendar(calendarEl, {
					timeZone: "UTC",
					headerToolbar: {
						left: "prev,next today",
						center: "title",
						right: "dayGridMonth,timeGridWeek,timeGridDay",
					},
					initialView: "dayGridWeek",
					events: eventList,
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

						const isla = (element) => element.id == info.event.id;

						if (eventList.findIndex(isla)) {
							eventList.start = info.event.start;
							console.log(eventList);
						}
					},
				});

				calendar.render();
				console.log(calendar);
			});
	}
	fetchEvents();
});

function updatebokHandler(id, bi) {
	fetch(`api/objects/${id}.json`, {
		method: "PUT",
		body: JSON.stringify(loggbokData),
		headers: {
			"Content-Type": "application/json",
		},
	}).then(() => {
		// Perform any necessary actions after the update is successful
	});
}


Firestore.
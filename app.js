// Toggle Variable
const toggle = document.getElementById('toggle');

// HTML Collection of notifications
const collection = document.getElementsByClassName('notification');

// Notifications display number
const notifications = document.querySelector('.notifications-count');
let total = count();
notifications.innerText = total;

// Function for counting unread notifications
function count() {
	let count = 0;

	for (let i = 0; i < collection.length; i++) {
		if (collection[i].classList.contains('unread')) {
			count++;
		}
	}

	return count;
}

// Toggles unread messages and updates notifications
toggle.addEventListener('click', () => {
	for (let i = 0; i < collection.length; i++) {
		if (collection[i].classList.contains('unread')) {
			collection[i].classList.toggle('unread');
		}
	}
	// notifications.innerText = count();
	notifications.style.display = 'none';
});

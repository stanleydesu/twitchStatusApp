"use strict";

let addIcon = document.getElementById('add-icon'),
	add = document.getElementById('add');

addIcon.addEventListener('click', function() {
	// fade in and widen search box
	add.className = "active";
	// allow search box to render before focusing
	setTimeout(function(){add.focus()},50);
});

add.addEventListener('keyup', function(e) {
	if (e.which === 13 && e.target.value) {
		add.blur();
	}
});

add.addEventListener('blur', function() {
	// remove active class
	add.className = "";
});

let defaultUsers = [
  {
    "name": "freecodecamp"
  },
  {
    "name": "esl_csgo"
  },
  {
    "name": "playoverwatch"
  },
  {
    "name": "scream"
  },
  {
    "name": "summit1g"
  },
  {
    "name": "pashabiceps"
  },
  {
    "name": "m0e_tv"
  },
  {
    "name": "c9sneaky"
  }
];

// function getData(users, type) {
// 	users.forEach((user, i) => {
// 		let url = `https://wind-bow.gomix.me/twitch-api/${type}/${user.name}`;
// 		$.ajax({
// 			type: 'GET',
// 			url: url,
// 			dataType: 'jsonp',
// 			success: function(data) {
// 				users[i][type] = data;
// 			}
// 		});
// 	});
// }

// function getUserData(users) {
// 	getData(users, 'users');
// }

// function getStreamData(users) {
// 	getData(users, 'streams');
// }

// function getChannelData(users) {
// 	getData(users, 'channels');
// }

// function displayUserData(users) {
// 	let div = document.getElementById('status-box');
// 	div.innerHTML = "";
// 	users.forEach(user => {
// 		div.innerHTML += toHTML(user);
// 	});
// }

// function toHTML(user) {
// 	let htmlString = `<div class="streamer"><img src="${user.users.logo}" alt="${user.name}"><a href="${user.users._links.self}">${user.name}</a><p class="bio">${user.users.bio}</p></div>`;
// 	console.log(htmlString);
// 	return htmlString;
// }

// getUserData(defaultUsers);

// setTimeout(function() {
// 	displayUserData(defaultUsers);
// }, 1000);

// console.log(defaultUsers);

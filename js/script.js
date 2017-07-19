"use strict";

let defaultUsers = [
  {
    "name": "ESL_SC2"
  },
  {
    "name": "OgamingSC2"
  },
  {
    "name": "cretetion"
  },
  {
    "name": "freecodecamp"
  },
  {
    "name": "storbeck"
  },
  {
    "name": "habathcx"
  },
  {
    "name": "RobotCaleb"
  },
  {
    "name": "noobs2ninjas"
  }
];

function getData(users, type) {
	users.forEach((user, i) => {
		let url = `https://wind-bow.gomix.me/twitch-api/${type}/${user.name}`;
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'jsonp',
			success: function(data) {
				users[i][type] = data;
			}
		});
	});
}

function getUserData(users) {
	getData(users, 'users');
}

function getStreamData(users) {
	getData(users, 'streams');
}

function getChannelData(users) {
	getData(users, 'channels');
}

function displayUserData(users) {
	let div = document.getElementById('streamers');
	div.innerHTML = "";
	users.forEach(user => {
		div.innerHTML += toHTML(user);
	});
}

function toHTML(user) {
	console.log(user);
	let htmlString = `<div class="streamer"><img src="${user.users.logo}" alt="${user.users.name}"><a href="${user.users._links.self}"></a><p class="bio">${user.users.bio}</p></div>`;
	console.log(htmlString);
	return htmlString;
}

getUserData(defaultUsers);

console.log(defaultUsers);

setTimeout(function() {
	displayUserData(defaultUsers);
}, 1000);




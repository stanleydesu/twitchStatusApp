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
  {"name": "freecodecamp"},
  {"name": "esl_csgo"},
  {"name": "playoverwatch"},
  {"name": "scream"},
  {"name": "summit1g"},
  {"name": "pashabiceps"},
  {"name": "m0e_tv"},
  {"name": "c9sneaky"}
];

function getData(users, type) {
	users.forEach((user, i) => {
		let url = `https://wind-bow.glitch.me/twitch-api/${type}/${user.name}`;
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

function getTwitchData(users) {
	getData(users, 'users');
	getData(users, 'streams');
	getData(users, 'channels');
	setTimeout(function(){displayUserData(defaultUsers);},3500);
}

function displayUserData(users) {
	let streamers = document.getElementById('streamers');
	streamers.innerHTML = "";
	users.forEach(user => {
		streamers.innerHTML += toHTML(user);
	});
}

function toHTML(user) {
	let streamStatus = (user.streams.stream !== null ? user.streams.stream.channel.status : 'Offline');
	let status = streamStatus === 'Offline' ? 'offline' : 'online';
	let htmlString = `<a href="${user.channels.url}"><div class="streamer"><div class="image ${status}" style="background-image: url('${user.users.logo}');"></div><div class="name ${status}">${user.users['display_name']}</div><div class="status ${status}">${streamStatus}</div></div></a>`
	return htmlString;
}

function removeUser(user) {
	let index = defaultUsers.findIndex(element => element.name === user);
	defaultUsers.splice(index, 1);
	let userElement = document.getElementById('streamers').children[index];
	userElement.parentNode.removeChild(userElement);
}

function addUser(user) {
	defaultUsers.push(user);
	let streamers = document.getElementById('streamers');
	streamers.appendChild(toHTML(user));
}

function filterUsers(users, filter) {
	let htmlUsers = document.getElementById('streamers').childNodes;
	htmlUsers.forEach(function(curr, i, arr) {
		if (curr[i].firstChild.firstChild.className.indexOf(filter) === -1) {
			curr[i].classList.add('hidden');
		} else {
			curr[i].classList.remove('hidden');
		}
	});
}

getTwitchData(defaultUsers);
console.log(defaultUsers);
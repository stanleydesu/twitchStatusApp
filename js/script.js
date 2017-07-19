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
	})
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

}

function toHTML(user) {
	let htmlString = '<div class="streamer"><img src="" alt=""><a href=""></a><p class="bio"></p></div>;';
}
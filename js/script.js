"use strict";

let defaultUsers = [
  {
    "name": "ESL_SC2",
    "data": undefined
  },
  {
    "name": "OgamingSC2",
    "data": undefined
  },
  {
    "name": "cretetion",
    "data": undefined
  },
  {
    "name": "freecodecamp",
    "data": undefined
  },
  {
    "name": "storbeck",
    "data": undefined
  },
  {
    "name": "habathcx",
    "data": undefined
  },
  {
    "name": "RobotCaleb",
    "data": undefined
  },
  {
    "name": "noobs2ninjas",
    "data": undefined
  }
];

function loadUserData(users) {
	defaultUsers.forEach((user, i) => {
		let url = 'https://wind-bow.gomix.me/twitch-api/users/' + user.name;
		$.ajax({
			type: 'GET',
			url: url,
			dataType: 'jsonp',
			success: function(data) {
				defaultUsers[i].data = data;
			}
		});
	});
}

loadUserData(defaultUsers);


var mpg123n = require('mpg123n')

var player = new mpg123n.Player()

function Player() {}

Player.prototype.play = function(stream_url) {

	var vol = 0;

	(function volUp() {

		vol += 10
		player.volume(vol)
		if (vol < 100)
			setTimeout(volUp, 2000)

	})(this)

	player.play(stream_url)
}

module.exports = Player
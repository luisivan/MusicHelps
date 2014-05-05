var SoundCloud = require('./src/SoundCloud'),
	Player = require('./src/Player')

var settings = require('./settings.json')

var sc = new SoundCloud(settings.sc_client_id),
	player = new Player()

function trigger(mode) {

	sc.getTrack(settings[mode + '_playlist_id'], player.play.bind(player))
}

trigger('sleep')
var request = require('request')

function SoundCloud(client_id) {

	this.client_id = client_id
}

SoundCloud.prototype.getTrack = function(playlist_id, cb) {

	request({url: 'http://api.soundcloud.com/playlists/' + playlist_id + '.json?client_id=' + this.client_id, json: true}, function (err, res, body) {

		var song = body.tracks[Math.floor(Math.random() * body.tracks.length)]

		request({url: song.stream_url + '?client_id=' + this.client_id, followRedirect :false}, function (err, res, body) {
			cb(res.headers.location) 		    
		})
		
	}.bind(this))
}

module.exports = SoundCloud
#!/usr/bin/env node

var path = require('path');
var spawn = require('child_process').spawn;

var player = 'c:\\Program Files (x86)\\VideoLAN\\VLC\\vlc.exe';

function playGood(callback) {	
	var wav = path.join('.', 'sounds/ScreamOfJoy.wav');
	var args = ['--play-and-exit', wav];
	var sound = spawn(player, args);

	sound.on('exit', function() {
		if (callback) {
			callback();
		}
	});
}

playGood();
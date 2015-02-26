var Path = require('path');
//var Spotify = require('node-spotify')({ appkeyFile: 'spotify_appkeyFile.key' });
//var appKeyPath = Path.resolve(__dirname + '../../spotify_appkey.key');
var env = Path.resolve(__dirname + '../../.ENV');
// var spotifyuser = require(env.spotifyuser);
// var spotifypass = require(env.spotifypass);

var lame = require('lame');
var Speaker = require('speaker');
// var Spotify = require('spotify-web');
var uri = process.argv[2] || 'spotify:track:6tdp8sdXrXlPV6AZZN2PE8';
 
// Spotify credentials... 
var username = process.env.USERNAME || require(env.spotifyuser);
var password = process.env.PASSWORD || require(env.spotifypass);
 
var track = 'spotify:track:6bykzgQMSKaBg9p40RzKHU';

 track.play()
      .pipe(new lame.Decoder())
      .pipe(new Speaker())
var Path = require('path');
//var Spotify = require('node-spotify')({ appkeyFile: 'spotify_appkeyFile.key' });
//var appKeyPath = Path.resolve(__dirname + '../../spotify_appkey.key');
var env = Path.resolve(__dirname + '../../.ENV');
// var spotifyuser = require(env.spotifyuser);
// var spotifypass = require(env.spotifypass);

var lame = require('lame');
var Speaker = require('speaker');
// var Spotify = require('spotify-web');
var uri = "spotify:track:6bykzgQMSKaBg9p40RzKHU";

var appKey = Path.resolve(__dirname, '../../spotify_appkey.key');

 
// Spotify credentials... 
var username = process.env.USERNAME || require(env.spotifyuser);
var password = process.env.PASSWORD || require(env.spotifypass);
 
// var track = 'spotify:track:6bykzgQMSKaBg9p40RzKHU';

//  track.play()
//       .pipe(new lame.Decoder())
//       .pipe(new Speaker())

var Spotify = require('node-libspotify');
var spotify = new Spotify({appkeyFile: appKey});

$(document).ready(function(){
  console.log('is this happening');
  spotify.login(username, password)
    .then(function () {
      //logged in
      console.log('i am logged in to spotify');
    })
    .catch(function (err) {
      //wrong username and/or password
    });

  var track = {
    uri: uri
  };
  spotify.player.on('play', function (track) { /* play event */ });
  spotify.player.on('pause', function () { /* pause event */ });
  spotify.player.on('progress', function (progress) { /* progress event */ });

  $('.zbutton').on('click', function(){
    console.log('caught that click');

    spotify.player.play(track);
  })
  
})

  

var Path = require('path');
var appKey = Path.resolve(__dirname, '../../spotify_appkey.key');

var lame = require('lame');
var Speaker = require('speaker');
var uri = "spotify:track:6bykzgQMSKaBg9p40RzKHU";
 
// Spotify credentials... 
var username = 'zdlopez';
var password = 'supermusicesz';

//spotify-web
//var Spotify = require('spotify-web');
// module.exports.streamer = function(req, res){
//   Spotify.login(username, password, function (err, spotify) {
//     if (err) throw err;
   
//     // first get a "Track" instance from the track URI 
//     spotify.get(uri, function (err, track) {
//       if (err) throw err;
//       console.log('Playing: %s - %s', track.artist[0].name, track.name);
   
//       // play() returns a readable stream of MP3 audio data 
//       track.play()
//         .pipe(new lame.Decoder())
//         .pipe(new Speaker())
//         // .on('finish', function () {
//         //   spotify.disconnect();
//         // });
   
//     });
//   });
  
// }

// var Spotify = require('node-libspotify');
// var spotify = new Spotify({appkeyFile: appKey});

// module.exports.streamer = function(req, res){
//   spotify.login(username, password)
//     .then(function () {
//       //logged in
//       console.log('i am logged in to spotify');
//     })
//     .catch(function (err) {
//       //wrong username and/or password
//     });

//   var track = {
//     uri: uri
//   };
//   spotify.player.on('play', function (track) { /* play event */ });
//   spotify.player.on('pause', function () { /* pause event */ });
//   spotify.player.on('progress', function (progress) { /* progress event */ });
//   spotify.player.play(track);
  
// }


//node-spotify
var spotify = require('node-spotify')({appkeyFile: appKey});

module.exports.streamer = function(req, res){
  var ready = function() {
      console.log('node-spotify is ready to exeute more code!');
      //your apps functionality should start here

        var track = {
          uri: uri
        };
      spotify.player.play(track); 
  };

  spotify.on({
      ready: ready
  });

  spotify.login(username, password, false, false);
  
}


 
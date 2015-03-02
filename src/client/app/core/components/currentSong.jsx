/**
 * @jsx React.DOM
 */

var React = require('react');
var AppActions = require('./../actions/AppActions.jsx');

var CurrentSong = React.createClass({

  sendStars: function(stars){
    AppActions.star(stars);
  },

  pause: function(){
    $('audio').get(0).pause();
  },

  render: function() {
    return (
      <span>
        <img src={this.props.albumArt} className="sp-album-art"></img>
        <div className='sp-info'>
          <div className='sp-title'>{this.props.currentSong}</div>
          <div className='sp-artist'>{this.props.currentArtist}</div>
          <a href={this.props.fullSong} target='_blank' onClick={this.pause}> 
            Full Song 
          </a>
        </div>
      </span>
    )
  }
})

module.exports = CurrentSong;
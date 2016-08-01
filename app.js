'use strict';

(function() {

  var MusicBox = function() {

    this.musicalSongs = [];
  };

  MusicBox.prototype.addAlbum = function(theAlbum) {

    for (var i = 0; i < arguments.length; i++)
      this.musicalSongs.push(arguments[i]);
  };

  MusicBox.prototype.favoriteAlbum = function() {

    var mostPlayed = -1;
    var mostPlayedCount = -1;

    for (var i = 0; i < this.musicalSongs.length; i++) {

      if (this.musicalSongs[i].played > mostPlayedCount) {

        mostPlayed = i;
        mostPlayedCount = this.musicalSongs[i].played;
      }
    }

    return this.musicalSongs[mostPlayed];
  };

  var Album = function(artist, song) {

    this.artist = artist;
    this.song = song;
    this.played = 0;
  };

  Album.prototype.play = function() {

    this.played++;
    console.log('Playing', this.toString());
  };

  //Override default toString() for this object
  Album.prototype.toString = function() {

    return this.artist + ' - ' + this.song;
  };

  var box = new MusicBox(),
  a1 = new Album('The Who', 'Tommy'),
  a2 = new Album('Tom Waits', 'Closing Time'),
  a3 = new Album('John Cale', 'Paris 1919'),
  favorite;

  box.addAlbum(a1, a2, a3);

  a1.play() ; // prints 'Playing The Who - Tommy'
  a2.play(); // prints 'Playing Tom Waits - Closing Time'
  a1.play(); // prints 'Playing The Who - Tommy'

  favorite = box.favoriteAlbum();

  // prints 'favorite album is The Who - Tommy'
  console.log('favorite album is ' + favorite);
}());

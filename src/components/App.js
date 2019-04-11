import React, { Component } from 'react';
import Search from './Search';
import Artist from './Artist';
import Tracks from './Tracks';

const API_URL = 'https://spotify-api-wrapper.appspot.com/artist';

class App extends Component {
  state = { artist: null, tracks: [] };

  searchArtist = (artistName) => {
    fetch(`${API_URL}/${artistName}`)
    .then(response => response.json())
    .then(json => {
      if(json.artists.total > 1) {
        this.setState({ artist : json.artists.items[0]});
        this.fetchTopTracks();
      }
    })
    .catch(error => alert(error.message));
  }

  fetchTopTracks = () => {
    const artistId = this.state.artist.id;
    fetch(`${API_URL}/${artistId}/top-tracks`)
    .then(response => response.json())
    .then(json => {
      this.setState({ tracks : json.tracks})
    })
    .catch(error => alert(error.message));
  }

  render() {
    return(
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist}/>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;

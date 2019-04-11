import React, { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';

const API_URL = 'https://spotify-api-wrapper.appspot.com/artist';

class App extends Component {
  state = { artistQuery: '', artist: null, tracks: [] };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value })
  }

  searchArtist = () => {
    const artistName = this.state.artistQuery;
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

  handleKeyPress = event => {
    if('Enter' == event.key) {
      this.searchArtist();
    }
  }

  render() {
    return(
      <div>
        <h2>Music Master</h2>
        <input onChange={this.updateArtistQuery}
              onKeyPress={this.handleKeyPress}
              placeholder='Search for an artist'/>
        <button type="button" className="btn btn-info" onClick={this.searchArtist}>Search</button>
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    );
  }
}

export default App;

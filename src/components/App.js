import React, { Component } from 'react';

class App extends Component {
  state = { artistQuery: '' };

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value })
  }

  searchArtist = () => {

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
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Search extends Component {
  state = { artistQuery: '' }

  updateArtistQuery = event => {
    this.setState({ artistQuery: event.target.value });
  }

  handleKeyPress = event => {
    if('Enter' == event.key) {
      this.searchArtist();
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery);
  }

  render() {
    return(
      <div>
        <input  onChange={this.updateArtistQuery}
                onKeyPress={this.handleKeyPress}
                placeholder='Search for an artist'/>
        <button type="button" className="btn btn-info" onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default Search;

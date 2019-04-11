import React, {Component} from 'react';

class Tracks extends Component {
  state = { playing: false, audio: null, playingPreviewUrl: null }

  playAudio = previewUrl => () => {
    const audio = new Audio(previewUrl);
    if(!this.state.playing) {
      audio.play();
      this.setState({playing: true, audio, playingPreviewUrl: previewUrl});
    } else {
      this.state.audio.pause();
      if(this.state.playingPreviewUrl === previewUrl) {
        this.setState({ playing: false });
      } else {
        audio.play();
        this.setState({audio, playingPreviewUrl: previewUrl});
      }
    }
  }

  trackIcon = track => {
   if (!track.preview_url){
      return ("");
    }
    if (this.state.playing && this.state.playingPreviewUrl === track.preview_url) {
      return ("\u23F8");
    }
    return("\u25B6");
  }

  render() {
    const { tracks } = this.props;

    return (
      <div>
      {
        tracks.map(track => {
          const { id, name, album, preview_url } = track;
          return (
            <div  key={id}
                  onClick={this.playAudio(preview_url)}
                  className='track'>
              <img src={album.images[0].url}
                alt="album"
                className='track-image'
              />
              <p className='track-text'>{name}</p>
              <p className='track-icon'><span>{this.trackIcon(track)}</span></p>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default Tracks;

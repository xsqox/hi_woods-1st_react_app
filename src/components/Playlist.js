import React, {Component} from 'react';
import Song from './Song.js';


class Playlist extends Component {

    constructor(props) {
        super();
        this.state = {
            playlistShown: true
        }
    }

    handleClick(song) {
        this.props.relay(song);
    }

    handleAlbumClick(albumName) {
        this.setState({playlistShown: true})
        this.props.albumRelay(albumName);
    }

    renderSong(song, idx) {
        return <Song text={song.name}
                     key={idx}
                     img={song.img}
                     onClick={() => this.handleClick(song)}
                     active_song={this.props.active_song}
                     playing={this.props.playing}
        />
    }

    togglePlaylist (albumName) {
        this.setState({playlistShown: !this.state.playlistShown})
    }

    render() {
        let items = this.props.playlist.map(this.renderSong, this);
        let playlistClass = (this.state.playlistShown ? 'hw-playlist' : 'hw-playlist hidden');
        return (
            <div className="hw-album-playlist">
                <div className="hw-album-toggler">
                    <span onClick={() => this.handleAlbumClick(this.props.albumName)}
                          className={"hw-album-name " + ((this.props.playing && this.props.active) ? 'glitch' : '')}
                          data-text={this.props.albumName + ' (' + this.props.year + ')'}>
                        {this.props.albumName + ' (' + this.props.year + ')'}
                    </span>
                    <span className="play-handle-wrapper" onClick={() => this.togglePlaylist(this.props.albumName)}>
                    <span className="play-album-handle"></span>
                </span>
                </div>

                <ul className={playlistClass}>
                    {items}
                </ul>
            </div>

        )
    }
}

export default Playlist;
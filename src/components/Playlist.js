import React, {Component} from 'react';
import Song from './Song.js';


class Playlist extends Component {

    constructor(props) {
        super();
        this.state = {
            active: props.active,
            playlistShown: props.active
        }
    }

    handleClick(song) {
        this.props.relay(song);
    }

    handleAlbumClick(albumName) {
        this.props.albumRelay(albumName);
    }

    renderSong(song, idx) {
        let classNme = song.name.toLowerCase() + ' ';
        classNme += ((idx === this.state.active) ? 'active' : '');
        //@TODO create a widget item as have the same functionality - active, click
        return <Song className={classNme}
                     text={song.name}
                     key={idx}
                     img={song.img}
                     onClick={() => this.handleClick(song)}
        />
    }

    togglePlaylist (albumName) {
        this.setState({playlistShown: !this.state.playlistShown})
    }

    render() {
        let items = this.props.playlist.map(this.renderSong, this);
        let playlistClass = this.state.playlistShown ? 'hw-playlist' : 'hw-playlist hidden';
        return (
            <div className="hw-album-playlist">
                <div className="hw-album-toggler">
                    <span onClick={() => this.handleAlbumClick(this.props.albumName)} className="hw-album-name">{this.props.albumName + ' (' + this.props.year + ')'}</span>
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
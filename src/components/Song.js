import React, {Component} from 'react';

class Song extends Component {

    render() {
        return <li onClick={() => this.props.onClick(this.props.text)}
                   className='hw-song'>
            <div className="hw-song-content">
                <div className="play-handle-wrapper">
                    <div className={"song-handle " + (this.checkIfSongPlaying() ? 'pause-handle' : 'play-handle')}>
                    </div>
                </div>
                <span className='song-name'>{this.props.text}</span>
            </div>
        </li>
    }

    checkIfSongPlaying() {
        return (this.props.active_song === this.props.text && this.props.playing);
    }
}

export default Song;
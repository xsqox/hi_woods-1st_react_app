import React, {Component} from 'react';

class Song extends Component {

    render() {
        return <li onClick={() => this.props.onClick(this.props.text)}
                   className={'hw-song ' + this.props.className}>
            <div className="hw-song-content">
                <span className="play-handle-wrapper">
                    <span className="play-handle"></span>
                </span>
                <span className='song-name'>{this.props.text}</span>
            </div>
        </li>
    }
}

export default Song;
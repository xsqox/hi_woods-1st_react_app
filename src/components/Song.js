import React, {Component} from 'react';

class Song extends Component {

    render() {
        return <li onClick={() => this.props.onClick(this.props.text)}
                   className='hw-song'>
            <div className="hw-song-content">
                <div className="play-handle-wrapper">
                    <div className="handle-circle">
                    </div>
                </div>
                <span className='song-name'>{this.props.text}</span>
            </div>
        </li>
    }
}

export default Song;
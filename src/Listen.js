import React, {Component} from 'react';

class AlbumApp extends Component {

    constructor() {
        super();
        this.state = {
            active_album: 'Point C',
            active_song: 'UA',
            playing: false,
            source: '/public/audio/point_c/',
            albums: [{
                name: 'Point C',
                album_cover: '/images/point_c_cover.jpg',
                playlist: [{
                    name: 'UA',
                    'image': '/images/albums/point_c/ua.jpg'
                }, {
                    name: 'XC',
                    'image': '/images/albums/point_c/xc.jpg'
                }, {
                    name: 'yo_sun',
                    'image': '/images/albums/point_c/yo_sun.jpg'
                }, {
                    name: 'through_the_needles',
                    'image': '/images/albums/point_c/through_the_needles.jpg'
                }, {
                    name: 'planet_search',
                    'image': '/images/albums/point_c/planet_search.jpg'
                }]
            }]
        }
    }

    switchSong(song) {
        let playlist = this.getActivePlaylist();
        let indx = playlist.indexOf(song);
        if (indx !== -1) {
            this.activateSong(playlist[indx]);
        }
    }

    activateSong(song) {
        console.log('song to activate', song);
        this.setState({'active_song': song.name, playing: true});
    }

    getActiveAlbum() {
        let active_album = this.state.active_album;
        return this.state.albums.find((album) => album.name === active_album);
    }

    getActivePlaylist() {
        let playlist = this.getActiveAlbum().playlist;
        return playlist;
    }

    render() {
        let active_album = this.getActiveAlbum();
        let playlist = active_album.playlist;
        let album_cover = active_album.album_cover;
        if (this.state.playing) {
            let active_song = playlist.find(song => song.name === this.state.active_song);
            album_cover = active_song.image;
        }

        return (
            <div className="hw-player">
                <div className="hw-album-active">
                    <img className='album-cover' src={album_cover} alt="Point C by Hi Woods"/>
                </div>
                <div className="hw-playlist-container">
                    <Playlist playlist={playlist} relay={this.switchSong.bind(this)}/>
                </div>
            </div>
        )
    }
}

class Song extends Component {

    render() {
        return <li onClick={() => this.props.onClick(this.props.text)}
                   className={'hw-song ' + this.props.className}>
            <span className='song-name'>{this.props.text}</span>
                   <img className='song-cover' src={this.props.image} />
            <span className="play-handle"></span>
        </li>
    }
}

class Playlist extends Component {

    constructor() {
        super();
        this.state = {
            active: 0,
        }
    }

    handleClick(song) {
        this.props.relay(song);
    }

    renderSong(song, idx) {
        let classNme = song.name.toLowerCase() + ' ';
        classNme += ((idx === this.state.active) ? 'active' : '');
        //@TODO create a widget item as have the same functionality - active, click
        return <Song className={classNme}
                     text={song.name}
                     key={idx}
                     image={song.image}
                     onClick={() => this.handleClick(song)}
        />
    }

    render() {
        let items = this.props.playlist.map(this.renderSong, this);
        return (
            <ul className="hw-playlist">
                {items}
            </ul>
        )
    }
}

class Listen extends Component {
    render() {
        return <div className="hw-listen">
            <AlbumApp/>
        </div>
    }
}

module.exports = {
    AlbumApp,
    Playlist,
    Song,
    Listen
}

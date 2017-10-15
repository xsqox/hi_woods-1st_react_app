import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';

class AlbumApp extends Component {

    constructor() {
        super();
        this.state = {
            dimensions: {
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
                songWidth: 210
            },
            active_album: 'Vertigo',
            active_song: 'Vertigo',
            playing: false,
            albums: [{
                name: 'Point C',
                source: '/audio/point_c/',
                album_cover: '/images/point_c_cover.jpg',
                playlist: [
                    {
                        name: 'Mayday Flower',
                        img: '/images/albums/point_c/mayday_flower.jpg',
                        src: '/audio/point_c/01_mayday_flower.mp3'
                    },
                    {
                        name: 'This thing',
                        img: '/images/albums/point_c/this_thing.jpg',
                        src: '/audio/point_c/02_this_thing.mp3'
                    },
                    {
                        name: 'Yoshta Vibe',
                        img: '/images/albums/point_c/yoshta_vibe.jpg',
                        src: '/audio/point_c/03_yoshta_vibe.mp3'
                    },
                    {
                        name: 'Thru the needles',
                        img: '/images/albums/point_c/through_the_needles.jpg',
                        src: '/audio/point_c/04_thru_the_needles.mp3'
                    },
                    {
                        name: 'Planet Search',
                        img: '/images/albums/point_c/planet_search.jpg',
                        src: '/audio/point_c/05_planet_search.mp3'
                    },
                    {
                        name: 'Ocean Ambrozee',
                        img: '/images/albums/point_c/ocean_ambrozee.jpg',
                        src: '/audio/point_c/06_ocean_ambrozee.mp3'
                    },
                    {
                        name: 'Yo Sun',
                        img: '/images/albums/point_c/yo_sun.jpg',
                        src: '/audio/point_c/07_yo_sun.mp3'
                    },
                    {
                        name: 'UA',
                        img: '/images/albums/point_c/ua.jpg',
                        src: '/audio/point_c/08_UA.mp3'
                    }, {
                        name: 'XC',
                        img: '/images/albums/point_c/xc.jpg',
                        src: '/audio/point_c/09_XC.mp3'
                    }]
            }, {
                name: 'Vertigo',
                source: '/audio/vertigo/',
                album_cover: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                playlist: [
                    {
                        name: 'Vertigo',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/vertigo.mp3'
                    },
                    {
                        name: 'Dream Place',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/laird.mp3'
                    },
                    {
                        name: 'Laird',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/laird.mp3'
                    },
                    {
                        name: 'Silensia',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/mountain_dew.mp3'
                    },
                    {
                        name: 'Yes Today, No Tomorrow',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/yes_today_no_tomorrow.mp3'
                    },
                    {
                        name: 'Polaris',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/polaris.mp3'
                    }]
            }]
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillMount() {
        this.updateDimensions();
    }

    updateDimensions() {
        this.setState({
            dimensions: {
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
                songWidth: 210
            }
        })
    }

    switchSong(song) {
        let playlist = this.getActivePlaylist();
        let indx = playlist.indexOf(song);
        if (indx !== -1) {
            this.activateSong(playlist[indx]);
        }
        this.playSongInPlayer(song);
    }

    activateSong(song) {
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

    playSongInPlayer(song) {
        let clickedSong = this.getActivePlaylist().indexOf(song);
        // methods of react-audioplayer - public calls ???
        this.audioComponent.setState({'currentPlaylistPos': clickedSong});
        this.audioComponent.loadSrc();
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
    }

    render() {
        let active_album = this.getActiveAlbum();
        let playlist = active_album.playlist;
        let album_cover = active_album.album_cover;
        if (this.state.playing) {
            let active_song = playlist.find(song => song.name === this.state.active_song);
            album_cover = active_song.img;
        }

        return (
            <div className="hw-player">
                <div className="hw-player-component">
                    <Audio
                        width={this.state.dimensions.viewportWidth - this.state.dimensions.songWidth}
                        height={this.state.dimensions.viewportHeight}
                        fullPlayer={true}
                        autoPlay={false}
                        playlist={playlist}

                        // store a reference of the audio component
                        ref={audioComponent => {
                            this.audioComponent = audioComponent;
                        }}
                    />
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
            <div className="hw-song-content">
                <span className="play-handle-wrapper">
                    <span className="play-handle"></span>
                </span>
                <span className='song-name'>{this.props.text}</span>
            </div>
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
                     img={song.img}
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

export default Listen;

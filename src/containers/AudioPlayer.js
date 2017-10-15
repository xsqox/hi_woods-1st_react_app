import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';
import Playlist from '../components/Playlist.js';

class AlbumApp extends Component {

    constructor() {
        super();
        this.state = {
            dimensions: {
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
                songWidth: 200
            },
            active_song: 'Vertigo',
            playing: false,
            albums: [{
                name: 'Vertigo',
                year: '2017',
                active: true,
                source: '/audio/vertigo/',
                album_cover: '/images/albums/vertigo/wideangle_vertigo_monoton_all.jpg',
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
            }, {
                name: 'Point C',
                year: '2015',
                active: false,
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
            },]
        }
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({
            dimensions: {
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
                songWidth: 200
            }
        })
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }

    componentWillMount() {
        this.updateDimensions();
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

    activateAlbum(albumName) {
        // activate album and the first song from it
        let active_song, albums = this.state.albums;
        albums.forEach((album) => {
            if (album.name === albumName) {
                album.active = true;
                active_song = album.playlist[0];
            } else {
                album.active = false;
            }
        });
        this.setState(
            {
                albums: albums,
                active_album: albumName,
                active_song: active_song.name,
                playing: true
            }
        );
        // play song in player
        this.audioComponent.loadSrc();
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
    }

    getActiveAlbum() {
        return this.state.albums.find((album) => album.active);
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

    generateAlbumPlaylist(album) {
        return <Playlist
            active={album.active}
            key={album.name}
            playlist={album.playlist}
            albumName={album.name}
            year={album.year}
            relay={this.switchSong.bind(this)}
            albumRelay={this.activateAlbum.bind(this)}
        />
    }

    render() {
        let active_album = this.getActiveAlbum();
        let playlist = active_album.playlist;
        if (this.state.playing) {
            let active_song = playlist.find(song => song.name === this.state.active_song);
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
                <div className="hw-playlist-container" >
                    {this.state.albums.map((album) => {return this.generateAlbumPlaylist(album)})}
                </div>
            </div>
        )
    }
}

class AudioPlayer extends Component {
    render() {
        return <div className="hw-listen">
            <AlbumApp/>
        </div>
    }
}

export default AudioPlayer;

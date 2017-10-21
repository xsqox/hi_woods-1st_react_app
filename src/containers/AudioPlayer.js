import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';
import Playlist from '../components/Playlist.js';

class ExternalSwitchAudio extends Audio {

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (this.state.playing) {
            this.props.togglePlayView(true);
        } else {
            this.props.togglePlayView(false);
        }
    }
}

class AudioPlayer extends Component {

    constructor() {
        super();
        this.state = {
            dimensions: {
                viewportWidth: window.innerWidth,
                viewportHeight: window.innerHeight,
                songWidth: 200
            },
            active_song:  {
                name: 'Vertigo',
                img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                src: '/audio/vertigo/vertigo.mp3'
            },
            active_album: 'Vertigo',
            playing: false,
            albums: [{
                name: 'Vertigo',
                year: '2017',
                source: '/audio/vertigo/',
                album_cover: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                album_gif: '/images/albums/vertigo/vertigo_cover_noise.gif',
                playlist: [
                    {
                        name: 'Vertigo',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/vertigo.mp3'
                    },
                    {
                        name: 'Laird',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/laird.mp3'
                    },
                    {
                        name: 'Less Stress',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/less_stress.mp3'
                    },
                    {
                        name: 'Roots',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/roots.mp3'
                    },
                    {
                        name: 'Trip to Amsterdam',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/trip_to_amsterdam.mp3'
                    },
                    {
                        name: 'Talk Our Lives',
                        img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                        src: '/audio/vertigo/talk_our_lives.mp3'
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
                source: '/audio/point_c/',
                album_cover: '/images/point_c_cover.jpg',
                album_gif: '/images/point_c_cover.jpg',
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
        this.showGIF = this.showGIF.bind(this);
        this.showCover = this.showCover.bind(this);
    }

    /**
     * Generates playlist component for each album passed
     * @param album
     * @returns {XML}
     */
    generateAlbumPlaylist(album) {
        return <Playlist
            playing={this.state.playing}
            active={album.name === this.state.active_album ? true : false}
            key={album.name}
            playlist={album.playlist}
            albumName={album.name}
            year={album.year}
            relay={this.switchSong.bind(this)}
            albumRelay={this.activateAlbum.bind(this)}
        />
    }

    render() {
        return (
            <div className="full-view-container hw-player">
                <div className={"hw-player-component " + ((this.state.playing) ? 'playing' : '')}>
                    <ExternalSwitchAudio
                        width={this.state.dimensions.viewportWidth - this.state.dimensions.songWidth}
                        height={this.state.dimensions.viewportHeight}
                        fullPlayer={true}
                        autoPlay={false}
                        playlist={this.getActivePlaylist()}
                        togglePlayView={this.togglePlayView.bind(this)}

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

    togglePlayView(playing) {
        if (playing) {
            if (!this.state.playing) {
                this.setState({'playing': true});
                this.showGIF();
            }
        } else {
            if (this.state.playing) {
                this.setState({playing: false});
                this.showCover();
            }
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        ReactDOM.findDOMNode(this.audioComponent).addEventListener('audio-play', this.showGIF);
        ReactDOM.findDOMNode(this.audioComponent).addEventListener('audio-pause', this.showCover);
    }

    componentWillMount() {
        this.updateDimensions();
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

    showGIF() {
        let album_gif = this.state.albums.find((album) => album.name === this.state.active_album).album_gif;
        let active_playlist = this.getActivePlaylist();
        active_playlist.forEach(song => {
            song.img = album_gif
        });
    }

    showCover() {
        let album_cover = this.state.albums.find((album) => album.name === this.state.active_album).album_cover;
        let active_playlist = this.getActivePlaylist();
        active_playlist.forEach(song => {
            song.img = album_cover
        });
    }

    /**
     * Switches active song as clicked in a playlist
     * @param song
     */
    switchSong(song) {
        let songAlbum = this.getSongAlbum(song);
        let playlist = this.getPlayListByAlbumName(songAlbum.name);
        let indx = playlist.indexOf(song);
        if (indx !== -1) {
            this.setState(
                {
                    'active_album': songAlbum.name,
                    'active_song': song,
                    playing: true},
                this.playSongInPlayer.bind(this, song)); // callback to activate song in player
        }
    }

    /**
     * Returns album object to which a selected song belongs
     * @param song
     * @returns {*}
     */
    getSongAlbum(song) {
        let songAlbum = this.getActiveAlbum();
        this.state.albums.forEach((album) => {
            album.playlist.forEach(track => {
                if (track === song) {
                    songAlbum = album;
                }
            })
        });
        return songAlbum;
    }

    /**
     * Activates album as selected in the playlist section, triggers playback in player
     * @param albumName
     * @param song
     */
    activateAlbum(albumName, song) {
        // activate album and first song from it, if song is not provided
        let active_song = (song) ? song : this.getPlayListByAlbumName(albumName)[0];
        this.setState(
            {
                active_album: albumName,
                active_song: active_song,
                playing: true
            }, this.playSongInPlayer.bind(this, active_song)
        );
    }

    // HELPER FUNCTIONS //
    /**
     * Returns active album name
     * @returns {string}
     */
    getActiveAlbum() {
        return this.state.active_album;
    }

    /**
     * Returns active playlist array
     * @returns {Array|value.playlist|{name, src, img, comments}|HOCAudioComponent.propTypes.playlist}
     */
    getActivePlaylist() {
        return this.state.albums.find((album) => album.name === this.state.active_album).playlist;
    }

    /**
     * Returns playlist array by album name
     * @param albumName
     * @returns {Array|value.playlist|{name, src, img, comments}|HOCAudioComponent.propTypes.playlist}
     */
    getPlayListByAlbumName(albumName) {
        return this.state.albums.find((album) => album.name === albumName).playlist;
    }

    /**
     * Updates player's state to set a custom song
     * @param song
     */
    playSongInPlayer(song) {
        let clickedSong = this.getActivePlaylist().indexOf(song);
        // methods of react-audioplayer - public calls ???
        this.audioComponent.setState({'currentPlaylistPos': clickedSong}, this.loadAndPlay.bind(this));
    }

    /**
     * Loads song source and triggers play
     */
    loadAndPlay() {
        // loading updated source as a callback to make sure state has been updated
        this.audioComponent.loadSrc();
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-play'));
    }
}

export default AudioPlayer;

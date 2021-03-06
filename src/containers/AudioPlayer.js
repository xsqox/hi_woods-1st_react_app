import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Audio from 'react-audioplayer';
import Playlist from '../components/Playlist.js';

class ExternalSwitchAudio extends Audio {

    /**
     * Hook to update player visuals when
     */
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
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            songWidth: 230,
            songHeight: 140,

            active_song: {
                name: 'Vertigo',
                img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                src: '/audio/vertigo/vertigo.mp3'
            },
            active_album: 'Vertigo',
            playing: false,
            albums: [{
                active: true,
                name: 'Vertigo',
                year: '2017',
                source: '/audio/vertigo/',
                album_cover: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                album_gif: '/images/albums/vertigo/vertigo_cover_noise.gif',
                playlist: [{
                    name: 'Vertigo',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/01.vertigo.mp3',
                    visual: '/images/albums/vertigo/vertigo_cover_noise.gif'
                }, {
                    name: '6.14',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/02.6.14.mp3',
                    visual: '/images/albums/vertigo/6.14.gif'
                }, {
                    name: 'Why it ends so fast',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/03.sad_vibes.mp3',
                    visual: '/images/albums/vertigo/sad_vibes.gif'
                }, {
                    name: 'Trip to Amsterdam',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/04.trip_to_amsterdam.mp3',
                    visual: '/images/albums/vertigo/trip_to_amsterdam.gif'
                }, {
                    name: 'Dream Place',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/05.dream.place.mp3',
                    visual: '/images/albums/vertigo/dream_place.gif'
                }, {
                    name: 'Slack',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/06.slack.mp3',
                    visual: '/images/albums/vertigo/slack.gif'
                }, {
                    name: 'Less Stress',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/07.less_stress.mp3',
                    visual: '/images/albums/vertigo/less_stress.gif'
                }, {
                    name: 'Drone Dub',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/08.drone_dub.mp3',
                    visual: '/images/albums/vertigo/drone_dub.gif'
                }, {
                    name: 'Fat Cat',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/09.fat.cat.mp3',
                    visual: '/images/albums/vertigo/fat_cat.gif'
                }, {
                    name: 'Laird',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/10.laird.mp3',
                    visual: '/images/albums/vertigo/laird.gif'
                }, {
                    name: 'Your own soul',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/11.your_own_soul.mp3',
                    visual: '/images/albums/vertigo/your_own_soul.gif'
                }, {
                    name: 'Silensia',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/12.silensia.mp3',
                    visual: '/images/albums/vertigo/silensia.gif'
                }, {
                    name: 'One of Us',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/13.one_of_us.mp3',
                    visual: '/images/albums/vertigo/one_of_us.gif'
                }]
            }, {
                active: true,
                name: 'Point C',
                year: '2015',
                source: '/audio/point_c/',
                album_cover: '/images/albums/point_c/point_c_cover.jpg',
                album_gif: '/images/albums/point_c/point_c_glow_sun.gif',
                playlist: [
                    {
                        name: 'Mayday Flower',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/01_mayday_flower.mp3',
                        visual: '/images/albums/point_c/mayday_flower.gif',
                    },
                    {
                        name: 'This thing',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/02_this_thing.mp3',
                        visual: '/images/albums/point_c/this_thing.gif',
                    },
                    {
                        name: 'Yoshta Vibe',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/03_yoshta_vibe.mp3',
                        visual: '/images/albums/point_c/yoshta_vibe.gif',

                    },
                    {
                        name: 'Thru the needles',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/04_thru_the_needles.mp3',
                        visual: '/images/albums/point_c/thru_the_needles.gif',
                    },
                    {
                        name: 'Planet Search',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/05_planet_search.mp3',
                        visual: '/images/albums/point_c/point_c.gif'
                    },
                    {
                        name: 'Ocean Ambrozee',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/06_ocean_ambrozee.mp3',
                        visual: '/images/albums/point_c/ocean_ambrosee.gif',
                    },
                    {
                        name: 'Yo Sun',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/07_yo_sun.mp3',
                        visual: '/images/albums/point_c/yo_sun.gif',
                    },
                    {
                        name: 'UA',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/08_UA.mp3',
                        visual: '/images/albums/point_c/ua.gif'
                    }, {
                        name: 'XC',
                        img: '/images/albums/point_c/point_c_cover.jpg',
                        src: '/audio/point_c/09_XC.mp3',
                        visual: '/images/albums/point_c/xc.gif',
                    }]
            }, {
                name: 'Roots',
                active: false,
                year: '2017',
                source: '/audio/roots/',
                album_cover: '/images/albums/roots/roots_cover.jpg',
                album_gif: '/images/albums/roots/roots.gif',
                playlist: [{
                    name: 'Roots',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/roots.mp3',
                    visual: '/images/albums/vertigo/roots.gif'
                }, {
                    name: 'Talk Our Lives',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/talk_our_lives.mp3',
                    visual: '/images/albums/vertigo/talk_our_lives.gif'
                }, {
                    name: 'Yes Today, No Tomorrow',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/yes_today_no_tomorrow.mp3',
                    visual: '/images/albums/vertigo/yes_today_no_tomorrow.gif'
                }, {
                    name: 'Polaris',
                    img: '/images/albums/vertigo/square_vertigo_monoton_all.jpg',
                    src: '/audio/vertigo/polaris.mp3',
                    visual: '/images/albums/vertigo/polaris.gif'
                }]
            }]
        };
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
            active={album.name === this.state.active_album}
            active_song={this.state.active_song.name}
            key={album.name}
            playlist={album.playlist}
            albumName={album.name}
            year={album.year}
            relay={this.songPauseOrPlay.bind(this)}
            albumRelay={this.activateAlbum.bind(this)}
        />
    }

    calculatePlayerDimensions() {
        let mediaQueries = {
            phone: {
                min: 0,
                max: 639
            },
            tablet: {
                min: 640,
                max: 1023
            },
            desktop: {
                min: 1024
            }
        };
        let playerWidth = this.state.viewportWidth - this.state.songWidth;
        let playerHeight = this.state.viewportHeight;
        Object.keys(mediaQueries).forEach((key) => {
            if (key === 'phone' && this.state.viewportWidth >= mediaQueries[key].min && this.state.viewportWidth <= mediaQueries[key].max) {
                playerWidth = this.state.viewportWidth;
                playerHeight = this.state.viewportHeight - this.state.songHeight;
            }
        });
        return {playerWidth, playerHeight};
    }

    render() {
        let {playerWidth, playerHeight} = this.calculatePlayerDimensions();
        return (
            <div className="full-view-container hw-player">
                <div className={"hw-player-component " + ((this.state.playing) ? 'playing' : '')}>
                    <ExternalSwitchAudio
                        width={playerWidth}
                        height={playerHeight}
                        fullPlayer={true}
                        autoPlay={false}
                        color='#F5F5F5'
                        playlist={this.getActivePlaylist()}
                        togglePlayView={this.togglePlayView.bind(this)}

                        // store a reference of the audio component
                        ref={audioComponent => {
                            this.audioComponent = audioComponent;
                        }}
                    />
                </div>
                <div className="hw-playlist-container"
                     onMouseEnter={(e) => {
                         this.props.disableScroll(e)
                     }}
                     onMouseLeave={(e) => {
                         this.props.enableScroll(e)
                     }}>
                    {this.state.albums.filter(album => album.active === true).map((album) => {
                        return this.generateAlbumPlaylist(album)
                    })}
                </div>
            </div>
        )
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        ReactDOM.findDOMNode(this.audioComponent).addEventListener('audio-play', this.showGIF);
        ReactDOM.findDOMNode(this.audioComponent).addEventListener('audio-pause', this.showCover);
    }

    updateDimensions() {
        this.setState({
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight
        });
    }

    /**
     * Update player visuals on onPlay event
     * @param playing
     */
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

    /**
     * Replaces default album cover with animated gif when player is set to play
     */
    showGIF() {
        // let album_gif = this.state.albums.find((album) => album.name === this.state.active_album).album_gif;
        let active_playlist = this.getActivePlaylist();
        active_playlist.forEach(song => {
            song.img = song.visual
        });
    }

    /**
     * Puts back default album cover when player is put on pause or stops playing
     */
    showCover() {
        let album_cover = this.state.albums.find((album) => album.name === this.state.active_album).album_cover;
        let active_playlist = this.getActivePlaylist();
        active_playlist.forEach(song => {
            song.img = album_cover
        });
    }

    /**
     * Pauses or starts playing a song when clicked in a playlist
     */
    songPauseOrPlay(song) {
        let alreadyPlaying = (this.state.active_song === song && this.state.playing);
        if (alreadyPlaying) {
            this.pauseSong();
        } else {
            this.switchSong(song);
        }
    }

    pauseSong() {
        ReactDOM.findDOMNode(this.audioComponent).dispatchEvent(new Event('audio-pause'));
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
                    playing: true
                },
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

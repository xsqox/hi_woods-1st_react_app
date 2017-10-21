import React, {Component} from 'react';
import {SectionsContainer, Section, Header} from 'react-fullpage';
import PageMenu from '../components/Menu.js';
import AudioPlayer from './AudioPlayer.js';
import Bio from '../components/Bio.js';
import Contact from '../components/Contact.js';
import '../styles/hover-min.css';
import '../styles/App.css';


//@TODO fix scrolling bug on playlist
//@TODO extend react-audioplayer to switch to .gif when play starts
//@TODO setup compass
//@TODO add sharing
//@TODO embed Youtube video
//@TODO add gallery / Instagram feed


class App extends Component {

    render() {
        let options = {
            activeClass: 'active',
            sectionClassName: 'section',
            anchors: ['about', 'listen', 'contact'],
            scrollBar: false,
            delay: 500,
            navigation: false,
            verticalAlign: false,
            sectionPaddingTop: '0',
            sectionPaddingBottom: '0',
            arrowNavigation: true,
        };

        return (
            <div className="hw-app">
                <Header>
                    <PageMenu menuClickRelay={this.handleMenuClick.bind(this)}/>
                </Header>
                <div className="hw-main">
                    <SectionsContainer {...options} ref={sectionsContainer => {this.sectionsContainer = sectionsContainer} }>
                        <Section><Bio /></Section>
                        <Section><AudioPlayer /></Section>
                        <Section><Contact /></Section>
                    </SectionsContainer>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // Decode entities in the URL
        window.location.hash = window.decodeURIComponent(window.location.hash);
        this.scrollToAnchor();
        window.onhashchange = this.scrollToAnchor.bind(this);
    }

    handleMenuClick(hash) {
        document.querySelector(`${hash}`).scrollIntoView();
        this.scrollToAnchor();
        window.onhashchange = this.scrollToAnchor.bind(this);
    }

    scrollToAnchor () {
        window.location.hash = window.decodeURIComponent(window.location.hash);
        const hashParts = window.location.hash.split('#');
        if (hashParts.length > 2) {
            const hash = hashParts.slice(-1)[0];
            document.querySelector(`${hash}`).scrollIntoView();
        } else {
            document.querySelector(`${'about'}`).scrollIntoView();
        }
    }
}

export default App;

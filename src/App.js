import React, {Component} from 'react';
import {SectionsContainer, Section, Header} from 'react-fullpage';
import PageMenu from './Menu.js';
import Listen from './Listen.js';
import Bio from './Bio.js';
import Contact from './Contact.js';
import './hover-min.css';
import './App.css';


//@TODO fix bug with playing the first song first, and only then switch
//@TODO extend react-audioplayer to switch to .gif when play starts
//@TODO setup compass
//@TODO add sharing
//@TODO embed Youtube video
//@TODO add gallery / Instagram feed


class App extends Component {


    scrollToAnchor = () => {
        const hashParts = window.location.hash.split('#');
        if (hashParts.length > 2) {
            const hash = hashParts.slice(-1)[0];
            document.querySelector(`${hash}`).scrollIntoView();
        }
    };

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

    render() {
        let options = {
            activeClass: 'active',
            sectionClassName: 'section',
            anchors: ['home', 'listen', 'contact'],
            scrollBar: false,
            delay: 500,
            navigation: false,
            verticalAlign: false,
            sectionPaddingTop: '0',
            sectionPaddingBottom: '0',
            arrowNavigation: true,
            // navigationClass: 'scroll-navigation'
        };

        return (
            <div className="hw-app">
                <Header>
                    <PageMenu menuClickRelay={this.handleMenuClick.bind(this)}/>
                </Header>
                <div className="hw-main">
                    <SectionsContainer {...options} ref={sectionsContainer => {this.sectionsContainer = sectionsContainer} }>
                        <Section><Bio /></Section>
                        <Section><Listen /></Section>
                        <Section><Contact /></Section>
                    </SectionsContainer>
                </div>

            </div>
        )
    }
}

export default App;

import React, {Component} from 'react';
import {SectionsContainer, Section, Header} from 'react-fullpage';
import PageMenu from '../components/Menu.js';
import AudioPlayer from './AudioPlayer.js';
import Bio from '../components/Bio.js';
import Contact from '../components/Contact.js';
import '../styles/hover-min.css';
import '../styles/App.css';

//@TODO extend components instead of using public methods
//@TODO create logo
//@TODO setup compass
//@TODO add sharing
//@TODO embed Youtube video
//@TODO add gallery / Instagram feed

class App extends Component {

    constructor() {
        super();
        this.pages =  ['about', 'listen', 'contact'];
        this.mediaQueries  = {
            phone: "(max-device-width: 639px)",
            small_tablet: "(min-device-width: 640px) and (max-device-width: 767px)",
            tablet: "(min-device-width: 768px) and (max-device-width: 1023px)",
            desktop: "(min-width: 1024px)"
        };
        this.state = {
            activePage: `#${this.pages[this.getActivePageIndex()]}`
        }
    }

    render() {
        let options = {
            activeClass: 'active',
            sectionClassName: 'section',
            anchors: this.pages,
            scrollBar: false,
            delay: 500,
            navigation: false,
            verticalAlign: false,
            sectionPaddingTop: '0',
            sectionPaddingBottom: '0',
            arrowNavigation: true,
            activeSection: this.getActivePageIndex()
        };

        return (
            <div className="hw-app">
                <Header>
                    <PageMenu activePage={this.state.activePage} menuClickRelay={this.handleMenuClick.bind(this)}/>
                </Header>
                <div className="hw-main">
                    <SectionsContainer {...options} ref={sectionsContainer => {
                        this.sectionsContainer = sectionsContainer
                    } }>
                        <Section><Bio mediaQueries={this.mediaQueries} /></Section>
                        <Section>
                            <AudioPlayer mediaQueries={this.mediaQueries}
                                disableScroll={() => {this.disableFullPageScroll()}}
                                enableScroll={() => {this.enableFullPageScroll()}}/>
                        </Section>
                        <Section><Contact mediaQueries={this.mediaQueries} /></Section>
                    </SectionsContainer>
                </div>
            </div>
        )
    }

    /**
     * Updates hash by clicked menu linked anchor and trigger event
     * @param anchor
     */
    handleMenuClick(anchor) {
        this.setState({
            activePage: anchor
        });
    }

    getActivePageIndex() {
        return (window.location.hash) ? this.pages.indexOf(window.location.hash.split('#')[1]) : this.pages.indexOf('about');
    }

    /**
     * Hacky fix to prevent full page scroll on div with their own scroll ??? how to do it right ???
     */
    disableFullPageScroll() {
       this.sectionsContainer._removeMouseWheelEventHandlers();
    }

    /**
     * Hacky fix to enable back full page scroll ??? how to do it right ???
     */
    enableFullPageScroll() {
        this.sectionsContainer._addMouseWheelEventHandlers();
    }
}

export default App;

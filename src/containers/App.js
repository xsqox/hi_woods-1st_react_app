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
        this.pages = ['about', 'listen', 'contact'];
        this.state = {
            menuItems: [
                {id: 1, text: 'About', url: '#about'},
                {id: 2, text: 'Listen', url: '#listen'},
                {id: 3, text: 'Contact', url: '#contact'}]
        };
    }

    componentWillMount() {
        this.setState({
            activePage: this.getActivePageUrl()
        })
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
                    <PageMenu menuItems={this.state.menuItems} activePage={this.state.activePage}
                              menuClickRelay={this.handleMenuClick.bind(this)}/>
                </Header>
                <div className="hw-main">
                    <SectionsContainer {...options} ref={sectionsContainer => {
                        this.sectionsContainer = sectionsContainer
                    } }>
                        <Section><Bio /></Section>
                        <Section>
                            <AudioPlayer disableScroll={() => {
                                             this.disableFullPageScroll()
                                         }}
                                         enableScroll={() => {
                                             this.enableFullPageScroll()
                                         }}/>
                        </Section>
                        <Section><Contact mediaQueries={this.mediaQueries}/></Section>
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
        let hash = window.location.hash;
        return (hash) ? this.state.menuItems.indexOf(this.state.menuItems.find(item => item.url === hash)) : this.state.menuItems.indexOf(this.state.menuItems.find(item => item.url === '#about'));
    }

    getActivePageUrl() {
        return this.state.menuItems[this.getActivePageIndex()].url;
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

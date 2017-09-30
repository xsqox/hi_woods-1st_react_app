import React, {Component} from 'react';
import PageMenu from './Menu.js';
import Listen from './Listen.js';
import Contact from './Contact.js';
import './hover-min.css';
import './App.css';


//@TODO setup compass
//@TODO create item widget
//@TODO add sharing
//@TODO embed Youtube video
//@TODO add player
//@TODO add gallery / Instagram feed
//@TODO 
class App extends Component {

    constructor() {
        super();
        this.state = {
            active_menu_item: '/'
        }
        this.views = {
            '/': <Bio relay={this.changeMenu.bind(this)}/>,
            '/listen': <Listen />,
            '/contact': <Contact />
        }
    }

    changeMenu(url) {
        this.setState({active_menu_item: url});
    }

    render() {
        var activeApp = this.views[this.state.active_menu_item];
        return (
            <div className="hw-app">
                <div className="hw-menu">
                    <PageMenu relay={this.changeMenu.bind(this)}/>
                </div>
                <div className="hw-main">
                    {activeApp}
                </div>
            </div>
        )
    }
}

class Bio extends Component {

    switchToListen() {
        this.props.relay('/listen');
    }

    render() {
        return <div className="view-container hw-bio">
            <h3 className="section-heading">Hi there from <span className="brand">Hi Woods</span></h3>
            <p>I am a solo IDM band currenly located in Montreal.</p>
            <p>I bring you <tt>#post-minimal</tt>, <tt>#dream-minimal</tt>, <tt>#dance-ambient</tt> from Point Canada inspired by vast
                spaces.</p>
            <p>It's rainfallish techno beats coupled with funky synth slowly transforming into trippy dream hop
                just to give way to airy piano passages...</p>
            <p>Anyway, less words, more woods! <span onClick={() => this.switchToListen()}
                                                      className="brand brand-action">Listen</span> and I hope you enjoy.
            </p>
        </div>
    }
}

export default App;

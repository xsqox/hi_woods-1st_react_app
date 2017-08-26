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
            <p>I bring you #post-minimal, #dream-minimal, #dance-ambient from Point Canada inspired by its vast
                spaces.</p>
            <p>These are rainfallish beats of minimal techno coupled with funky synth tranform into trippy dream hop
                just to give way to airy piano passages...</p>
            <p>Anyway, less words, more wooods! <span onClick={() => this.switchToListen()}
                                                      className="brand brand-action">Listen</span> and I hope you enjoy!
            </p>
        </div>
    }
}

export default App;

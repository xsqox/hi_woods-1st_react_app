import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Bio extends Component {

    switchToListen() {
        this.props.relay('/listen');
    }

    render() {
        return <div className="view-container hw-bio">
            <h3 className="section-heading">Hi there from <span className="brand">Hi Woods</span></h3>
            <p>I am a solo IDM band currenly located in Montreal.</p>
            <p>I bring you <tt>#post-minimal</tt>, <tt>#dream-minimal</tt>, <tt>#dance-ambient</tt> from Point Canada
                inspired by vast
                spaces.</p>
            <p>It's rainfallish techno beats coupled with funky synth slowly transforming into trippy dream hop
                just to give way to airy piano passages...</p>
            {/*<p>Anyway, less words, more woods! <span onClick={() => this.switchToListen()}*/}
                                                     {/*className="brand brand-action">Listen</span> and I hope you enjoy.*/}
            {/*</p>*/}
            <p>Anyway, less words, more woods! <NavLink className="brand brand-action" to='/listen'>Listen</NavLink> and I hope you enjoy.
            </p>
        </div>
    }
}

export default Bio;
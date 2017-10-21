import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Bio extends Component {

    //@TODO remove router
    switchToListen() {
        this.props.relay('#listen');
    }

    render() {
        return <div className="view-container hw-bio">
            <h3 className="section-heading">Hi there from <span className="brand">Hi Woods</span></h3>
            <p>We are a duo IDM band currenly located in Montreal.</p>
            <p>Inspired by vast
                spaces, we bring you <tt>#post-minimal</tt>, <tt>#dream-minimal</tt>, <tt>#dance-ambient</tt> from Point Canada.</p>
            <p>It's rainfallish techno beats coupled with funky synth slowly transforming into trippy dream hop
                just to give way to airy piano passages...</p>
            <p>Anyway, less words, more woods! <a className="brand brand-action" href='#listen'>Listen</a> and hope you enjoy.
            </p>
        </div>
    }
}

export default Bio;
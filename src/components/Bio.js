import React, {Component} from 'react';

class Bio extends Component {

    render() {
        return <div className="view-container hw-bio">
            <div className="content-wrapper">
                <h3 className="section-heading">Hi there from <span className="brand">Hi Woods</span></h3>
                <p>We are a duo IDM band currenly located in Montreal.</p>
                <p>Inspired by vast and wild
                    spaces, we bring you <tt>#post_minimal</tt>, <tt>#dream_minimal</tt>, <tt>#dance_ambient</tt> from
                    Point Canada.</p>
                <p>It's rainfallish techno beats coupled with funky synth slowly transforming into trippy dream hop
                    just to give way to airy piano passages and drone harmonies...</p>
                    <p className="hw-good-wish">Anyway, less words, more woods! <a className="brand brand-action"
                                                                                   href='#listen'>Listen</a> and hope
                        you enjoy.
                    </p>
            </div>
        </div>
    }
}

export default Bio;
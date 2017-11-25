import React, {Component} from 'react';
import MediaQuery from 'react-responsive';

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            contacts: [
                {platform: 'bandcamp', 'url': 'https://hiwoods.bandcamp.com/releases'},
                {platform: 'youtube', 'url': 'https://www.youtube.com/channel/UCmeXdSYbaFjt6BC8XUQGAaA'},
                {platform: 'soundcloud', 'url': 'https://soundcloud.com/hiwoods'},
                {platform: 'instagram', 'url': 'https://www.instagram.com/hi_woods_life/'}
            ]
        }
    }

    generateItem(item, idx) {
        return <ContactInfo item={item} key={idx}/>
    }

    render() {
        let items = this.state.contacts.map(this.generateItem, this);
        return <div className='view-container hw-contact-info'>
            <div className="content-wrapper">
                <h3 className="section-heading">Get to <span className="brand">Hi Woods</span></h3>
                <p>We are totally open for collaborative projects or gigs.
                    Let us know what you have in mind by dropping a note at <a href='mailto:hiwoodse@gmail.com'>hiwoodse@gmail.com</a>.
                </p>
                <p>You can also find us around the Web.
                    Feel free to leave your feedback or show support with likes and shares (honestly, will be much
                    appreciated {'\u2764'}).</p>
                <ul className='hw-contacts'>
                    {items}
                </ul>
                <MediaQuery query={this.props.mediaQueries.phone}>
                    <p className="hw-good-wish inverse">May the <span className='brand'>High</span> and the <span
                        className='brand'>Woods</span> be with you!</p>
                </MediaQuery>
                <MediaQuery query={this.props.mediaQueries.small_tablet}>
                    <p className="hw-good-wish inverse">May the <span className='brand'>High</span> and the <span
                        className='brand'>Woods</span> be with you!</p>
                </MediaQuery>
                <MediaQuery query={this.props.mediaQueries.tablet}>
                    <p className="hw-good-wish">May the <span className='brand'>High</span> and the <span
                        className='brand'>Woods</span> be with you!</p>
                </MediaQuery>
                <MediaQuery query={this.props.mediaQueries.desktop}>
                    <p className="hw-good-wish">May the <span className='brand'>High</span> and the <span
                        className='brand'>Woods</span> be with you!</p>
                </MediaQuery>
            </div>
        </div>
    }
}

class ContactInfo extends Component {

    render() {
        return (
            <li className='contact-link'><a href={this.props.item.url}>{this.props.item.platform}</a></li>
        )
    }
}

export default Contact;
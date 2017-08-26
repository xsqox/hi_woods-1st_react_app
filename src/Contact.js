import React, {Component} from 'react';

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
        return <ContactInfo url={item.url} key={idx} />
    }

    render() {
        let items = this.state.contacts.map(this.generateItem, this);
        return <div className='view-container hw-contact-info'>
            <h3 className="section-heading">Reach out to <span className="brand">Hi Woods</span></h3>
            <p>I am totally open for cooperation or gig opportunities.
                Just let me know what you have in mind by dropping me a note at <a href='mailto:hiwoodse@gmail.com'>hiwoodse@gmail.com</a>.</p>
            <p>You can also find me around the Web.
                Feel free to leave me feedback or support me with likes or shares (actually, will be much appreciated {'\u2764'}).</p>
            <ul className='hw-contacts'>
                {items}
            </ul>
            <p>May the <span className='brand'>High</span> and the <span className='brand'>Woods</span> be with you!</p>
        </div>
    }
}

class ContactInfo extends Component {

    render() {
        return (
            <li className='contact-link'><a href={this.props.url}>{this.props.url}</a></li>
        )
    }
}

export default Contact;
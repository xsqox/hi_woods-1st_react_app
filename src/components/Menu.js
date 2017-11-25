import React, {Component} from 'react';

import '../styles/hover-min.css';

class MenuItem extends Component {

    render() {
        return <li className='hover-shadow'>
            <a onClick={() => this.props.onClick(this.props.url)}
                     href={this.props.url}
               className={this.props.active ? "active" : ""}
            >{this.props.text}</a>
        </li>
    }
}

class PageMenu extends Component {

    constructor() {
        super();
        this.state = {
            menuItems: [
                {id: 1, text: 'About', url: '#about'},
                {id: 2, text: 'Listen', url: '#listen'},
                {id: 3, text: 'Contact', url: '#contact'}]
        }
    }

    handleClick(hash) {
        this.props.menuClickRelay(hash);
    }

    generateItem(item) {
        return <MenuItem text={item.text} url={item.url} active={(item.url === this.props.activePage)}
                         key={item.id} onClick={() => {this.handleClick(item.url)}}  />
    }

    render() {
        return (
            <ul className="hw-menu-list">
                {this.state.menuItems.map((item) => {return this.generateItem(item)})}
            </ul>
        )
    }
}

export default PageMenu;
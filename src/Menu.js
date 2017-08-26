import React, {Component} from 'react';
import './hover-min.css';
import './App.css';

class MenuItem extends Component {
    render() {
        return <li onClick={() => this.props.onClick(this.props.text)}
                   className={'hover-shadow ' + this.props.className}>{this.props.text}</li>
    }
}

class PageMenu extends Component {

    constructor() {
        super();
        this.state = {
            active_menu_item: '/',
            menuItems: [{id: 1, text: 'Home', url: '/'}, {id: 2, text: 'Listen', url: '/listen'}, {
                id: 3,
                text: 'Contact',
                url: '/contact'
            }]
        }
    }

    generateItem(item) {
        let classNme = (item.url === this.state.active_menu_item) ? 'active' : '';
        return <MenuItem className={classNme}
                         text={item.text} url={item.url}
                         key={item.id}
                         onClick={() => this.handleClick(item)}
        />
    }

    handleClick(item) {
        this.setState({active_menu_item: item.url});
        this.props.relay(item.url);
    }

    render() {
        // var items = this.props.items.map(this.generateItem);
        return (
            <ul className="hw-menu-list">
                {this.generateItem(this.state.menuItems[0])}
                {this.generateItem(this.state.menuItems[1])}
                {this.generateItem(this.state.menuItems[2])}
            </ul>
        )
    }
}

module.exports = {
    PageMenu,
    MenuItem
}

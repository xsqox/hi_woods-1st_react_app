import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './hover-min.css';
import './App.css';

class MenuItem extends Component {
    render() {
        return <li className='hover-shadow'>
            <NavLink exact activeClassName='active' to={this.props.url}>{this.props.text}</NavLink>
        </li>
    }
}

class PageMenu extends Component {

    constructor() {
        super();
        this.state = {
            menuItems: [
                {id: 1, text: 'Home', url: '/'},
                {id: 2, text: 'Listen', url: '/listen'},
                {id: 3, text: 'Contact', url: '/contact'}]
        }
    }

    generateItem(item) {
        return <MenuItem text={item.text} url={item.url}
                         key={item.id}
        />
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
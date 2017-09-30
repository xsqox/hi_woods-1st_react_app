import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './hover-min.css';
import './App.css';

// Manual implementation of router
// class MenuItem extends Component {
//     render() {
//         return <li onClick={() => this.props.onClick(this.props.text)}
//                    className={'hover-shadow ' + this.props.className}>{this.props.text}</li>
//     }
// }

class MenuItem extends Component {
    render() {
        return <li className='hover-shadow'>
            <NavLink activeClassName='active' to={this.props.url}>{this.props.text}</NavLink>
        </li>
    }
}

class PageMenu extends Component {

    constructor() {
        super();
        this.state = {
            // active_menu_item: '/',
            menuItems: [
                {id: 1, text: 'Home', url: '/'},
                {id: 2, text: 'Listen', url: '/listen'},
                {id: 3, text: 'Contact', url: '/contact'}]
        }
    }

    // used to change active menu item (and its class) and relay change to the App
    // handleClick(item) {
    //     this.setState({active_menu_item: item.url});
    //     // this.props.relay(item.url); // passed from App level to change active main app
    // }

    generateItem(item) {
        // let classNme = (item.url === this.state.active_menu_item) ? 'active' : '';
        // return <MenuItem className={classNme}
        //                  text={item.text} url={item.url}
        //                  key={item.id}
        //                  // onClick={() => this.handleClick(item)}
        // />
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
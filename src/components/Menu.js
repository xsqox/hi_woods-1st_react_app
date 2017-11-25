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
                {this.props.menuItems.map((item) => {return this.generateItem(item)})}
            </ul>
        )
    }
}

export default PageMenu;
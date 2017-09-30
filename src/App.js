import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import PageMenu from './Menu.js';
import Listen from './Listen.js';
import Bio from './Bio.js';
import Contact from './Contact.js';
import './hover-min.css';
import './App.css';


//@TODO setup compass
//@TODO create item widget
//@TODO add sharing
//@TODO embed Youtube video
//@TODO add gallery / Instagram feed

class App extends Component {

    // Manual implementation of router
    // constructor() {
    //     super();
    //     this.state = {
    //         active_menu_item: '/'
    //     }
    //     this.views = {
    //         '/': <Bio relay={this.changeMenu.bind(this)}/>,
    //         '/listen': <Listen />,
    //         '/contact': <Contact />
    //     }
    // }
    //
    // changeMenu(url) {
    //     this.setState({active_menu_item: url});
    // }

    render() {
        // var activeApp = this.views[this.state.active_menu_item]; // updating activeApp when active menu item has changed
        return (
            <div className="hw-app">
                <div className="hw-menu">
                    {/*<PageMenu relay={this.changeMenu.bind(this)}/>*/}
                    <PageMenu />
                </div>
                <div className="hw-main">
                    {/*{activeApp}*/}
                    <Main />
                </div>
            </div>
        )
    }
}

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Bio}/>
            <Route exact path='/listen' component={Listen}/>
            <Route exact path='/contact' component={Contact}/>
        </Switch>
    </main>
)

export default App;

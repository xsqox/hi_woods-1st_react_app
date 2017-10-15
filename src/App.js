import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import PageMenu from './Menu.js';
import Listen from './Listen.js';
import Bio from './Bio.js';
import Contact from './Contact.js';
import './hover-min.css';
import './App.css';


//@TODO setup compass
//@TODO add sharing
//@TODO embed Youtube video
//@TODO add gallery / Instagram feed
//@TODO fix bug with playing the first song first, and only then switch
//@TODO add full page scrolling

class App extends Component {

    render() {
        return (
            <div className="hw-app">
                <div className="hw-menu">
                    <PageMenu />
                </div>
                <div className="hw-main">
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

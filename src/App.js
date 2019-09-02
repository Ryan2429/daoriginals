import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Images from './components/Images/Images';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/Navigation/About';
import Contact from './components/Navigation/Contact';


class App extends React.Component {
 render() {
    return (
            <Router>
                <div style={{cursor: 'pointer'}}>
                    <Navigation />
                    <Route path='/home' component={Images} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router>
        )
    }
}


export default App;

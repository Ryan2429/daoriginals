import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Images from './components/Images/Images';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './components/Navigation/About';
import Contact from './components/Navigation/Contact';


class App extends React.Component {
 render() {
    return (
            <BrowserRouter>
                <div style={{cursor: 'pointer'}}>
                    <Navigation />
                    <Route exact path='/home' component={Images} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                </div>
            </BrowserRouter>
        )
    }
}


export default App;
